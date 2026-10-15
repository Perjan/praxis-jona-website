import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { formatPrice, pricingSections } from "../../app/components/pricing/pricingData";

describe("iron starting price", () => {
  it.each(["de", "en"] as const)("qualifies the shared price in %s", (locale) => {
    expect(formatPrice(pricingSections.ironInfusion.rows[0].price, locale).replace(/\u00a0/g, " "))
      .toBe(locale === "de" ? "ab 150,95 €" : "from €150.95");
  });

  it.each([
    "app/components/pricing/pricingData.ts",
    "app/components/pageContent.ts",
    "app/(de)/leistungen/Services.ts",
  ])("does not call the iron price fixed in %s", (path) => {
    const source = readFileSync(path, "utf8");
    expect(source).not.toMatch(/Festpreis[^\n]*150,95|150,95[^\n]*Festpreis|Festpreis für eine Eiseninfusion|fixed price[^\n]*(?:150\.95|iron infusion)/i);
  });
});
