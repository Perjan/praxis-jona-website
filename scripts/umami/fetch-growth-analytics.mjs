import { execFileSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  calculateRate,
  dateWindow,
  matchesClusterPath,
  periodToTimestamps,
  readStatValue,
} from "./analytics-utils.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const configPath = path.join(projectRoot, "config/umami-growth.config.json");

function parseArgs(argv) {
  const result = {};
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (item === "--stdout" || item === "--no-write") result[item.slice(2)] = true;
    else if (item.startsWith("--")) result[item.slice(2)] = argv[++index];
  }
  return result;
}

function number(value) {
  return Number(value || 0);
}

function normalizedStats(payload) {
  return {
    pageviews: readStatValue(payload.pageviews),
    visitors: readStatValue(payload.visitors ?? payload.uniques),
  };
}

function sumMetricRows(rows) {
  return rows.reduce((total, row) => total + number(row.y), 0);
}

function getKeychainCredential(config) {
  const account = process.env.UMAMI_KEYCHAIN_ACCOUNT || config.keychain.account;
  const service = process.env.UMAMI_KEYCHAIN_SERVICE || config.keychain.service;

  try {
    const password = execFileSync(
      "/usr/bin/security",
      ["find-generic-password", "-a", account, "-s", service, "-w"],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    return { account, password };
  } catch {
    throw new Error(
      `Umami credential not found in macOS Keychain (service ${service}, account ${account})`,
    );
  }
}

async function responseJson(response, operation) {
  if (!response.ok) throw new Error(`${operation} failed with HTTP ${response.status}`);
  return response.json();
}

async function authenticate(config) {
  const { account, password } = getKeychainCredential(config);
  const response = await fetch(new URL("/api/auth/login", config.baseUrl), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: account, password }),
  });
  const payload = await responseJson(response, "Umami authentication");
  if (!payload.token) throw new Error("Umami authentication returned no bearer token");
  return payload.token;
}

async function apiGet(config, token, endpoint, parameters = {}) {
  const url = new URL(`/api/websites/${config.websiteId}/${endpoint}`, config.baseUrl);
  for (const [key, value] of Object.entries(parameters)) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }

  const response = await fetch(url, {
    headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
  });
  return responseJson(response, `Umami GET ${endpoint}`);
}

async function queryPeriod(config, token, period) {
  const timestamps = periodToTimestamps(period);
  const [websiteStatsResponse, eventMetrics, urlMetrics, referrerMetrics] = await Promise.all([
    apiGet(config, token, "stats", timestamps),
    apiGet(config, token, "metrics", { ...timestamps, type: "event", limit: 500 }),
    apiGet(config, token, "metrics", { ...timestamps, type: "url", limit: 500 }),
    apiGet(config, token, "metrics", { ...timestamps, type: "referrer", limit: 500 }),
  ]);

  const websiteStats = normalizedStats(websiteStatsResponse);
  const conversionEventNames = new Set(config.conversionEvents);
  const clusters = await Promise.all(
    config.clusters.map(async (cluster) => {
      const matchingPages = urlMetrics.filter((row) => matchesClusterPath(row.x, cluster));
      const pageDetails = await Promise.all(
        matchingPages.map(async (page) => {
          const [statsResponse, eventSeries] = await Promise.all([
            apiGet(config, token, "stats", { ...timestamps, url: page.x }),
            apiGet(config, token, "events", {
              ...timestamps,
              unit: "day",
              timezone: config.timezone,
              url: page.x,
            }),
          ]);
          return {
            visitors: normalizedStats(statsResponse).visitors,
            conversionEvents: sumMetricRows(
              eventSeries.filter((row) => conversionEventNames.has(row.x)),
            ),
          };
        }),
      );
      const metrics = {
        pageviews: sumMetricRows(matchingPages),
        visitors:
          pageDetails.length <= 1 ? number(pageDetails[0]?.visitors) : null,
        conversion_events: pageDetails.reduce(
          (total, page) => total + page.conversionEvents,
          0,
        ),
        converting_visitors: null,
      };
      return {
        name: cluster.name,
        label: cluster.label,
        ...metrics,
        conversion_rate_per_pageview: calculateRate(metrics.conversion_events, metrics.pageviews),
        conversion_rate_per_visitor: null,
        visitor_metric_note:
          pageDetails.length > 1
            ? "Unavailable across multiple URLs in the deployed Umami API"
            : undefined,
      };
    }),
  );

  const summary = {
    pageviews: websiteStats.pageviews,
    visitors: websiteStats.visitors,
    custom_events: sumMetricRows(eventMetrics),
    event_visitors: null,
  };
  const googleReferrers = referrerMetrics.filter((row) =>
    /(^|\.)google\./i.test(row.x),
  );
  const topPageMetrics = urlMetrics.slice(0, 25);
  const topPages = await Promise.all(
    topPageMetrics.map(async (row) => {
      const stats = normalizedStats(
        await apiGet(config, token, "stats", { ...timestamps, url: row.x }),
      );
      return { path: row.x, pageviews: number(row.y), visitors: stats.visitors };
    }),
  );
  const google = { pageviews: sumMetricRows(googleReferrers), visitors: null };

  return {
    period,
    summary,
    conversion_rate_per_pageview: calculateRate(summary.custom_events, summary.pageviews),
    conversion_rate_per_visitor: null,
    google_referrals: {
      ...google,
      share_of_pageviews: calculateRate(google.pageviews, summary.pageviews),
    },
    events: eventMetrics.map((row) => ({
      name: row.x || "(unnamed)",
      events: number(row.y),
      visitors: null,
    })),
    clusters,
    top_pages: topPages,
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const config = JSON.parse(await readFile(configPath, "utf8"));
  const days = Number(args.days || config.defaultDays);
  const lagDays = Number(args["lag-days"] || config.lagDays);
  const windows = dateWindow(args["as-of"] || new Date().toISOString(), days, lagDays);
  const token = await authenticate(config);

  const [current, previous] = await Promise.all([
    queryPeriod(config, token, windows.current),
    queryPeriod(config, token, windows.previous),
  ]);
  const report = {
    generated_at: new Date().toISOString(),
    source: "umami-api-read-only",
    api_contract: "deployed-legacy-v2",
    website: { id: config.websiteId, domain: config.websiteDomain },
    timezone: config.timezone,
    definitions: {
      search_ctr: "Google Search Console clicks / impressions; not available in Umami",
      conversion_rate_per_pageview: "tracked conversion events / Umami pageviews",
      conversion_rate_per_visitor:
        "unavailable: the deployed Umami API does not expose unique visitors per custom event",
    },
    privacy:
      "Aggregate API output only; no bearer tokens, passwords, session IDs, IP addresses, or individual event rows are stored.",
    current,
    previous,
  };

  const serialized = `${JSON.stringify(report, null, 2)}\n`;
  if (!args["no-write"]) {
    const outputDir = path.join(projectRoot, "data/umami/raw");
    await mkdir(outputDir, { recursive: true });
    await Promise.all([
      writeFile(path.join(outputDir, "analytics-latest.json"), serialized),
      writeFile(
        path.join(outputDir, `analytics-${windows.current.start}_${windows.current.end}.json`),
        serialized,
      ),
    ]);
  }
  if (args.stdout) process.stdout.write(serialized);
  else
    console.log(
      `Umami API report: ${windows.current.start} to ${windows.current.end} (exclusive), ${current.summary.pageviews} pageviews, ${current.summary.custom_events} tracked events.`,
    );
}

main().catch((error) => {
  console.error(`Umami collection failed: ${error.message}`);
  process.exitCode = 1;
});
