import { describe, expect, it } from "vitest";
import { seoDescriptionForPost } from "app/(de)/guides/[slug]/generateMetadata";

type PostArg = Parameters<typeof seoDescriptionForPost>[0];

function post(fields: Record<string, unknown>) {
  return fields as unknown as PostArg;
}

describe("seoDescriptionForPost", () => {
  it("pads a short German summary with the German suffix", () => {
    expect(seoDescriptionForPost(post({ summaryOrExcerpt: "Kurze Zusammenfassung." }))).toBe(
      "Kurze Zusammenfassung. Mehr medizinische Informationen und praktische Hinweise der Praxis Jona in Berlin.",
    );
  });

  it("uses the German legal suffix for legal posts", () => {
    expect(seoDescriptionForPost(post({ summaryOrExcerpt: "Impressum.", categories: ["legal"] }))).toBe(
      "Impressum. Weitere rechtliche Informationen der Praxis Jona in Berlin.",
    );
  });

  it("pads a short English summary with the English suffix", () => {
    expect(seoDescriptionForPost(post({ summaryOrExcerpt: "A short summary.", language: "en" }))).toBe(
      "A short summary. More medical information and practical advice from Praxis Jona in Berlin.",
    );
  });

  it("uses the English legal suffix for English legal posts", () => {
    expect(
      seoDescriptionForPost(post({ summaryOrExcerpt: "Imprint.", language: "en", categories: ["legal"] })),
    ).toBe("Imprint. More legal information from Praxis Jona in Berlin.");
  });

  it("keeps text of exactly 160 characters without an ellipsis", () => {
    const exact = `${"word ".repeat(31)}wordy`.slice(0, 160).padEnd(160, "x");
    expect(exact).toHaveLength(160);
    expect(seoDescriptionForPost(post({ summaryOrExcerpt: exact, language: "en" }))).toBe(exact);
  });

  it("keeps a summary of 110 to 160 characters unchanged", () => {
    const ok = "x".repeat(120);
    expect(seoDescriptionForPost(post({ summaryOrExcerpt: ok, language: "en" }))).toBe(ok);
  });

  it("cuts inside a word at the previous word boundary", () => {
    const text = `${"alpha ".repeat(25)}Praxisjona in Berlin`;
    const result = seoDescriptionForPost(post({ summaryOrExcerpt: text, language: "de" }));
    expect(result.length).toBeLessThanOrEqual(160);
    expect(result.endsWith("alpha...")).toBe(true);
    expect(result).not.toMatch(/\s\.\.\.$/);
  });

  it("strips trailing punctuation before the ellipsis", () => {
    const text = `${"alpha ".repeat(24)}beta, gamma delta epsilon zeta`;
    const result = seoDescriptionForPost(post({ summaryOrExcerpt: text, language: "en" }));
    expect(result).toMatch(/[a-z]\.\.\.$/);
    expect(result).not.toMatch(/,\.\.\.$/);
    expect(result.length).toBeLessThanOrEqual(160);
  });

  it("hard-cuts a single overlong word", () => {
    const result = seoDescriptionForPost(post({ summaryOrExcerpt: "x".repeat(300), language: "en" }));
    expect(result).toBe(`${"x".repeat(157)}...`);
  });
});
