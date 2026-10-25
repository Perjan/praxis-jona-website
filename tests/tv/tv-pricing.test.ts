import { describe, expect, it, vi } from "vitest";

// Changing a table amount must also change every TV representation of that amount.
vi.mock("app/components/pricing/pricingData", async () => {
  const source = await vi.importActual<typeof import("app/components/pricing/pricingData")>("app/components/pricing/pricingData");
  return {
    ...source,
    pricingSections: {
      ...source.pricingSections,
      botox: {
        ...source.pricingSections.botox,
        rows: source.pricingSections.botox.rows.map(row => row.slug === "zornesfalte"
          ? { ...row, price: { ...row.price, amount: 213 } }
          : row),
      },
    },
  };
});

import { TV_NEW_SLIDES, TV_NEW_SLIDES_EN } from "app/(de)/tv/content";
import { formatPrice, pricingSections, type PricingRow } from "app/components/pricing/pricingData";

for (const [locale, slides] of [["de", TV_NEW_SLIDES], ["en", TV_NEW_SLIDES_EN]] as const) {
  describe(`TV prices in ${locale}`, () => {
    it("uses table amounts, prefixes, labels, and notes for every price card", () => {
      const rows = Object.values(pricingSections).flatMap<PricingRow>(section => section.rows);
      for (const slide of slides) {
        for (const card of slide.prices ?? []) {
          const row = rows.find(item => item.label[locale] === card.label);
          expect(row, `${slide.id}: ${card.label}`).toBeDefined();
          expect(card.price, slide.id).toBe(formatPrice(row!.price, locale));
          expect(card.note, slide.id).toBe(row!.description?.[locale]);
        }
      }
    });

    it("updates the Botox overview when the table price changes", () => {
      const row = pricingSections.botox.rows.find(item => item.slug === "zornesfalte")!;
      const overview = slides.find(slide => slide.id === "botulinumtoxin")!;
      const feature = overview.features!.find(item => item.title === (locale === "de" ? "Preis" : "Price"));
      expect(feature?.text).toBe(formatPrice(row.price, locale));
      expect(slides.find(slide => slide.id === "botulinumtoxin-zornesfalte")?.eyebrow).toBe(formatPrice(row.price, locale));
    });
  });
}
