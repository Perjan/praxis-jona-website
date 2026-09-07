import { describe, expect, it } from "vitest";

import {
  buildPathFilter,
  calculateRate,
  dateWindow,
  matchesClusterPath,
  normalizePathMetricRows,
  periodToTimestamps,
  readEventStats,
  readStatValue,
  umamiApiShape,
} from "../../scripts/umami/analytics-utils.mjs";

describe("Umami analytics utilities", () => {
  it("builds adjacent inclusive-exclusive comparison windows", () => {
    expect(dateWindow("2026-09-04T12:00:00.000Z", 28, 2)).toEqual({
      current: { start: "2026-08-06", end: "2026-09-03" },
      previous: { start: "2026-07-09", end: "2026-08-06" },
    });
  });

  it("calculates a percentage without dividing by zero", () => {
    expect(calculateRate(13, 262)).toBe(4.96);
    expect(calculateRate(1, 0)).toBe(0);
  });

  it("converts an inclusive-exclusive date window to API timestamps", () => {
    expect(periodToTimestamps({ start: "2026-08-06", end: "2026-09-03" })).toEqual({
      startAt: Date.parse("2026-08-06T00:00:00.000Z"),
      endAt: Date.parse("2026-09-03T00:00:00.000Z") - 1,
    });
  });

  it("builds one safe Umami regex filter for configured path clusters", () => {
    expect(
      buildPathFilter({
        prefixes: ["/leistungen/eiseninfusion-kosten"],
        contains: ["prp+vampire"],
      }),
    ).toBe("re.(?:^/leistungen/eiseninfusion-kosten|prp\\+vampire)");
  });

  it("matches legacy API URL metrics to configured clusters", () => {
    const cluster = { prefixes: ["/blog/eisen"], contains: ["prp"] };
    expect(matchesClusterPath("/blog/eisen/mangel", cluster)).toBe(true);
    expect(matchesClusterPath("/aesthetik/prp-behandlung", cluster)).toBe(true);
    expect(matchesClusterPath("/leistungen/infusionstherapie", cluster)).toBe(false);
  });

  it("reads both legacy and current Umami stat response values", () => {
    expect(readStatValue({ value: 42 })).toBe(42);
    expect(readStatValue(42)).toBe(42);
    expect(readStatValue(undefined)).toBe(0);
  });

  it("reads aggregate custom-event stats from the current Umami API", () => {
    expect(readEventStats({ data: { events: 32, visitors: 25 } })).toEqual({
      events: 32,
      visitors: 25,
    });
    expect(readEventStats(undefined)).toEqual({ events: 0, visitors: null });
  });

  it("maps current Umami API paths and filters", () => {
    expect(umamiApiShape("current")).toEqual({
      pathMetricType: "path",
      pathMetricsEndpoint: "metrics/expanded",
      pathFilterKey: "path",
      eventSeriesEndpoint: "events/series",
    });
  });

  it("keeps the legacy Umami v2 contract available as a fallback", () => {
    expect(umamiApiShape("legacy-v2")).toEqual({
      pathMetricType: "url",
      pathMetricsEndpoint: "metrics",
      pathFilterKey: "url",
      eventSeriesEndpoint: "events",
    });
  });

  it("normalizes current expanded path metrics without losing pageviews", () => {
    expect(
      normalizePathMetricRows(
        [{ name: "/kontakt", pageviews: 12, visitors: 8 }],
        "current",
      ),
    ).toEqual([{ path: "/kontakt", pageviews: 12, visitors: 8 }]);
  });

  it("normalizes legacy URL metrics", () => {
    expect(normalizePathMetricRows([{ x: "/kontakt", y: 12 }], "legacy-v2"))
      .toEqual([{ path: "/kontakt", pageviews: 12, visitors: null }]);
  });
});
