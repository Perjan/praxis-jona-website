import { describe, expect, it } from "vitest";

import {
  buildPathFilter,
  calculateRate,
  dateWindow,
  matchesClusterPath,
  periodToTimestamps,
  readStatValue,
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
});
