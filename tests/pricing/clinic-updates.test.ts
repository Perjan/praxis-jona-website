import { describe, expect, it } from "vitest";
import { formatPrice, pricingSections, type PricingRow } from "app/components/pricing/pricingData";
import {
  glp1TherapyPackage,
  nutritionConsultationPackage,
  nutritionPricingPlans,
  ozempicPackages,
} from "app/components/NutritionPricingData";

const row = (section: "skinbooster" | "nutrition" | "glp1", slug: string) =>
  (pricingSections[section].rows as PricingRow[]).find((item) => item.slug === slug);

describe("clinic pricing updates", () => {
  it("lists Profhilo face, Structura and Body prices with two-session packages", () => {
    const rows = pricingSections.skinbooster.rows.filter((item) => item.slug.startsWith("profhilo"));

    expect(rows.map((item) => [item.slug, item.label.de, item.price?.amount, item.packageOffer?.price.amount])).toEqual([
      ["profhilo", "Profhilo Gesicht, 2 ml je Sitzung", 349, 679],
      ["profhilo-structura", "Profhilo Structura Gesicht, 2 ml je Sitzung", 449, 849],
      ["profhilo-body", "Profhilo Body, 3 ml je Sitzung für ein vereinbartes Areal", 499, 949],
    ]);
    expect(rows.every((item) => item.packageOffer?.quantity === 2)).toBe(true);
  });

  it("uses expected nutrition prices in both shared pricing surfaces", () => {
    for (const slug of ["erstgespraech", "folgegespraech"]) {
      expect(row("nutrition", slug)?.price?.prefix?.de).toBe("voraussichtlich");
    }
    expect(row("nutrition", "erstgespraech")?.price?.amount).toBe(140);
    expect(row("nutrition", "folgegespraech")?.price?.amount).toBe(70);
    expect(formatPrice(row("nutrition", "erstgespraech")?.price, "en")).toBe("expected €140");
    expect(nutritionConsultationPackage.price.de).toContain("140");
    expect(nutritionConsultationPackage.secondPrice.de).toContain("70");
    expect(nutritionPricingPlans.slice(0, 2).map((plan) => plan.price.de.replace(/\u00a0/g, " "))).toEqual([
      "voraussichtlich 140 €",
      "voraussichtlich 70 €",
    ]);
  });

  it("lists the three GLP-1 care paths with current prices", () => {
    expect(pricingSections.glp1.rows.map((item) => [item.slug, item.price?.amount])).toEqual([
      ["umfassender-ersttermin", 289],
      ["folgegespraech", 119],
      ["shabas-ersttermin", 149],
      ["shabas-folgegespraech", 69],
      ["digitaler-ersttermin", 69],
      ["online-folgeformular", 20.11],
      ["video-bedarf", 69],
    ]);
    expect(row("glp1", "shabas-ersttermin")?.description?.de).toContain("Ab Januar 2027");
    expect(formatPrice(row("glp1", "umfassender-ersttermin")?.price, "en")).toContain("€289");
    expect(formatPrice(row("glp1", "online-folgeformular")?.price, "de")).toContain("20,11");
    expect(glp1TherapyPackage.secondPrice.de).toContain("119");
    expect(ozempicPackages.find((item) => item.title.de === "Digitale Betreuung")?.price.de).toContain("69");
    const legacyCopy = JSON.stringify([nutritionConsultationPackage, nutritionPricingPlans, glp1TherapyPackage, ozempicPackages]);
    expect(legacyCopy).not.toMatch(/240,26|€240\.26|120,65|€120\.65|89€|€89|139€|€139|20€ monatlich|€20 monthly/);
  });
});
