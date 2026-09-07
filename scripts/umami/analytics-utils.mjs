const DAY_MS = 86_400_000;

function isoDate(value) {
  return new Date(value).toISOString().slice(0, 10);
}

export function dateWindow(asOf = new Date().toISOString(), days = 28, lagDays = 2) {
  const asOfDate = new Date(asOf);
  const end = Date.UTC(
    asOfDate.getUTCFullYear(),
    asOfDate.getUTCMonth(),
    asOfDate.getUTCDate(),
  ) - Math.max(0, lagDays - 1) * DAY_MS;
  const start = end - days * DAY_MS;
  const previousStart = start - days * DAY_MS;

  return {
    current: { start: isoDate(start), end: isoDate(end) },
    previous: { start: isoDate(previousStart), end: isoDate(start) },
  };
}

export function calculateRate(numerator, denominator) {
  if (!denominator) return 0;
  return Math.round((Number(numerator) / Number(denominator)) * 10_000) / 100;
}

export function periodToTimestamps(period) {
  return {
    startAt: Date.parse(`${period.start}T00:00:00.000Z`),
    endAt: Date.parse(`${period.end}T00:00:00.000Z`) - 1,
  };
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function buildPathFilter(cluster) {
  const patterns = [
    ...(cluster.prefixes || []).map((prefix) => `^${escapeRegex(prefix)}`),
    ...(cluster.contains || []).map(escapeRegex),
  ];
  return patterns.length ? `re.(?:${patterns.join("|")})` : undefined;
}

export function matchesClusterPath(urlPath, cluster) {
  return (
    (cluster.prefixes || []).some((prefix) => urlPath.startsWith(prefix)) ||
    (cluster.contains || []).some((fragment) => urlPath.includes(fragment))
  );
}

export function readStatValue(value) {
  return Number(value && typeof value === "object" ? value.value : value || 0);
}

export function readEventStats(payload) {
  if (!payload?.data) return { events: 0, visitors: null };
  return {
    events: Number(payload.data.events || 0),
    visitors: Number(payload.data.visitors || 0),
  };
}

export function umamiApiShape(contract) {
  if (contract === "current") {
    return {
      pathMetricType: "path",
      pathMetricsEndpoint: "metrics/expanded",
      pathFilterKey: "path",
      eventSeriesEndpoint: "events/series",
    };
  }

  return {
    pathMetricType: "url",
    pathMetricsEndpoint: "metrics",
    pathFilterKey: "url",
    eventSeriesEndpoint: "events",
  };
}

export function normalizePathMetricRows(rows, contract) {
  if (contract === "current") {
    return rows.map((row) => ({
      path: row.name,
      pageviews: Number(row.pageviews || 0),
      visitors: Number(row.visitors || 0),
    }));
  }

  return rows.map((row) => ({
    path: row.x,
    pageviews: Number(row.y || 0),
    visitors: null,
  }));
}
