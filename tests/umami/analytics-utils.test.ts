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
  CURRENT_UMAMI_API,
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

  it("matches current API path metrics to configured clusters", () => {
    const cluster = { prefixes: ["/blog/eisen"], contains: ["prp"] };
    expect(matchesClusterPath("/blog/eisen/mangel", cluster)).toBe(true);
    expect(matchesClusterPath("/aesthetik/prp-behandlung", cluster)).toBe(true);
    expect(matchesClusterPath("/leistungen/infusionstherapie", cluster)).toBe(false);
  });

  it("reads current Umami stat response values", () => {
    expect(readStatValue(42)).toBe(42);
    expect(() => readStatValue({ value: 42 })).toThrow(
      "Current Umami stat is missing a numeric value",
    );
    expect(() => readStatValue(undefined)).toThrow(
      "Current Umami stat is missing a numeric value",
    );
  });

  it("reads aggregate custom-event stats from the current Umami API", () => {
    expect(readEventStats({ data: { events: 32, visitors: 25 } })).toEqual({
      events: 32,
      visitors: 25,
    });
    expect(readEventStats({ data: { events: 0 } })).toEqual({
      events: 0,
      visitors: null,
    });
  });

  it("rejects malformed current event-stat responses", () => {
    expect(() => readEventStats(undefined)).toThrow(
      "Current Umami event stats are missing data",
    );
    expect(() => readEventStats({ data: { visitors: 4 } })).toThrow(
      "Current Umami event stats are missing an event count",
    );
  });

  it("defines only the current Umami API paths and filters", () => {
    expect(CURRENT_UMAMI_API).toEqual({
      pathMetricType: "path",
      pathMetricsEndpoint: "metrics/expanded",
      pathFilterKey: "path",
      eventSeriesEndpoint: "events/series",
    });
  });

  it("keeps the current API contract immutable", () => {
    expect(Object.isFrozen(CURRENT_UMAMI_API)).toBe(true);
  });

  it("normalizes current expanded path metrics without losing pageviews", () => {
    expect(
      normalizePathMetricRows([{ name: "/kontakt", pageviews: "12", visitors: 8 }]),
    ).toEqual([{ path: "/kontakt", pageviews: 12, visitors: 8 }]);
  });

  it("rejects unsupported path-metric response shapes", () => {
    expect(() => normalizePathMetricRows([{ x: "/kontakt", y: 12 }])).toThrow(
      "Current Umami path metric is missing a name",
    );
    expect(() =>
      normalizePathMetricRows([{ name: "/kontakt", visitors: 8 }]),
    ).toThrow("Current Umami path metric is missing pageviews");
    expect(() =>
      normalizePathMetricRows([{ name: "/kontakt", pageviews: "12" }]),
    ).toThrow("Current Umami path metric is missing visitors");
    expect(() =>
      normalizePathMetricRows([
        { name: "/kontakt", pageviews: 12, visitors: 8 },
      ]),
    ).toThrow("Current Umami path metric has invalid pageviews");
  });
});
