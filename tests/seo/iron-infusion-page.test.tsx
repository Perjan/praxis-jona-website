import { describe, expect, it } from "vitest";
import { metadata } from "@/app/(de)/leistungen/eiseninfusion-kosten/page";
import { getLongevityFaqSchema } from "@/app/components/LongevityMarkdownPage";

describe("German iron infusion search page", () => {
  it("uses the approved cost-intent snippet", () => {
    expect(metadata.title).toBe("Eiseninfusion Berlin: Kosten ab 150,95 €");
    expect(metadata.description).toBe(
      "Eiseninfusion in Berlin-Mitte ab 150,95 € nach GOÄ. Erfahren Sie mehr über Diagnostik, ärztliche Prüfung, Ablauf und Terminbuchung bei Praxis Jona.",
    );
  });

  it("keeps FAQ structured-data answers aligned with the visible FAQ copy", () => {
    const faqSchema = getLongevityFaqSchema("ironInfusion", "de");

    expect(faqSchema.mainEntity).toContainEqual({
      "@type": "Question",
      name: "Wie viele Infusionen sind notwendig?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das hängt von: Ferritinwert, Eisenbedarf, Beschwerden und Ursache des Mangels ab. Je nach Ausgangslage kann eine einzelne Infusion ausreichend sein oder mehrere Sitzungen notwendig machen.",
      },
    });
    expect(new Set(faqSchema.mainEntity.map((item: any) => item.acceptedAnswer.text)).size).toBeGreaterThan(1);
  });
});
