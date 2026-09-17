// Day 25 of the 31-Day Search & Bookings Growth Plan: push changed URLs to
// search engines instead of waiting for the next passive crawl.
//
// Google has no general "request indexing" API for ordinary content pages
// (the Indexing API is officially restricted to JobPosting/BroadcastEvent
// markup; using it for anything else risks a manual action). The sanctioned
// move for a regular site is to ask Google to re-check the sitemap, which is
// what the GSC call below does. Bing/Yandex/Seznam support IndexNow, which
// *is* meant for arbitrary URLs and needs no OAuth — just a key file hosted
// on the domain (see public/<key>.txt).
//
// This runs automatically in postbuild, but only actually calls either API
// during a real production build. A local `npm run build`, a Vercel preview
// deployment, or a CI job all skip the network calls and just log that they
// were skipped — otherwise every local rebuild while iterating on the site
// would ping live external services with production URLs.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const SITE = "sc-domain:praxisjona.de";
const SITE_URL = "https://praxisjona.de";
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const INDEXNOW_KEY = "6656db04d230f588226ead1a5cfa59fa";
const LOG_FILE = path.join(process.cwd(), "docs/audits/seo/recrawl-submissions.log");

const isProductionBuild = process.env.VERCEL_ENV === "production" || process.env.FORCE_SEO_SUBMIT === "1";

function runGcloud(args) {
  const res = spawnSync("gcloud", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  return res.status === 0 ? res.stdout.trim() : "";
}

function appendLog(line) {
  const timestamp = new Date().toISOString();
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
  fs.appendFileSync(LOG_FILE, `${timestamp} ${line}\n`);
}

function readSitemapUrls() {
  const sitemapPath = path.join(process.cwd(), "public/sitemap-0.xml");
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1]);
}

async function submitSitemapToGoogle() {
  const token = process.env.GSC_ACCESS_TOKEN || runGcloud(["auth", "application-default", "print-access-token"]);
  if (!token) {
    return { ok: false, detail: "no GSC_ACCESS_TOKEN or gcloud application-default credentials" };
  }

  const quotaProject = process.env.GSC_QUOTA_PROJECT || runGcloud(["config", "get-value", "project"]);
  const url =
    "https://www.googleapis.com/webmasters/v3/sites/" +
    encodeURIComponent(SITE) +
    "/sitemaps/" +
    encodeURIComponent(SITEMAP_URL);

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      ...(quotaProject && quotaProject !== "(unset)" ? { "X-Goog-User-Project": quotaProject } : {}),
    },
  });

  if (!res.ok) {
    return { ok: false, detail: `GSC API ${res.status}: ${await res.text()}` };
  }
  return { ok: true, detail: "sitemap resubmitted" };
}

async function submitUrlsToIndexNow(urls) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });

  // IndexNow returns 200 or 202 on success; it does not echo per-URL status.
  if (!res.ok) {
    return { ok: false, detail: `IndexNow API ${res.status}: ${await res.text()}` };
  }
  return { ok: true, detail: `${urls.length} URLs submitted` };
}

async function main() {
  const urls = readSitemapUrls();

  if (!isProductionBuild) {
    appendLog(`skipped (not a production build) — ${urls.length} URLs in sitemap, no external calls made`);
    console.log("[seo:submit-recrawl] not a production build — skipping IndexNow/GSC submission");
    return;
  }

  const [google, indexNow] = await Promise.all([submitSitemapToGoogle(), submitUrlsToIndexNow(urls)]);

  appendLog(
    `production submission — ${urls.length} URLs — google: ${google.ok ? "ok" : "FAILED"} (${google.detail}) — indexnow: ${indexNow.ok ? "ok" : "FAILED"} (${indexNow.detail})`,
  );

  console.log("[seo:submit-recrawl] google:", google);
  console.log("[seo:submit-recrawl] indexnow:", indexNow);

  if (!google.ok || !indexNow.ok) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  appendLog(`error — ${error.message}`);
  console.error("[seo:submit-recrawl] failed:", error);
  process.exitCode = 1;
});
