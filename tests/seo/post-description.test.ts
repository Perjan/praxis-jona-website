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

  it("keeps a long summary unchanged and truncates above 160 characters", () => {
    const ok = "x".repeat(120);
    expect(seoDescriptionForPost(post({ summaryOrExcerpt: ok, language: "en" }))).toBe(ok);
    const long = "word ".repeat(60);
    const result = seoDescriptionForPost(post({ summaryOrExcerpt: long, language: "de" }));
    expect(result.length).toBeLessThanOrEqual(160);
    expect(result.endsWith("...")).toBe(true);
  });
});
