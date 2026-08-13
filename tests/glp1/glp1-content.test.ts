import { describe, expect, it } from "vitest";

import { getLongevitySectionMarkdown, getLongevitySectionTitle } from "@/app/content/longevitySource";
import { formatPrice, pricingSections } from "@/app/components/pricing/pricingData";

const oldGlp1Copy = [
  "abnehmspritze-paket",
  "rundum-sorglos",
  "1499",
  "Rundum-Sorglos",
];

function normalizedPrice(slug: string, locale: "de" | "en") {
  const row = pricingSections.glp1.rows.find((pricingRow) => pricingRow.slug === slug);
  return formatPrice(row?.price, locale).replace(/\u00a0/g, " ");
}

describe("GLP-1 weight-loss content", () => {
  it("uses the approved German and English page headings", () => {
    expect(getLongevitySectionTitle("weightLoss", "de")).toBe("Medizinische Gewichtsreduktion & GLP-1-Therapie");
    expect(getLongevitySectionTitle("weightLoss", "en")).toBe("Medical Weight Loss & GLP-1 Therapy");
  });

  it("renders the new German source details and digital therapy path", () => {
    const source = getLongevitySectionMarkdown("weightLoss", "de");

    expect(source).toContain("Eine erfolgreiche Gewichtsreduktion ist mehr als die Verordnung einer Abnehmspritze.");
    expect(source).toContain("Voraussichtliche Kosten: ca. 289 €");
    expect(source).toContain("Velto Premium | 20 € monatlich");
    expect(source).toContain("Eine Verordnung erfolgt ausschließlich nach ärztlicher Prüfung");

    for (const oldCopy of oldGlp1Copy) {
      expect(source).not.toContain(oldCopy);
    }
  });

  it("exposes the current GLP-1 prices through shared pricing data", () => {
    const rowBySlug = new Set(pricingSections.glp1.rows.map((row) => row.slug));

    expect(normalizedPrice("umfassender-ersttermin", "de")).toBe("ca. 289 €");
    expect(normalizedPrice("digitaler-ersttermin", "de")).toBe("ca. 89 €");
    expect(normalizedPrice("velto-premium", "de")).toBe("20 €");
    expect(normalizedPrice("video-bedarf", "de")).toBe("69 €");

    for (const oldSlug of ["beratung-start", "erhaltungsphase", "abnehmspritze-paket", "rundum-sorglos"]) {
      expect(rowBySlug.has(oldSlug)).toBe(false);
    }
  });
});
