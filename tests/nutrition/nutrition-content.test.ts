import { describe, expect, it } from "vitest";

import { getNutritionMedicinePageCopy } from "@/app/components/NutritionMedicinePage";
import { formatPrice, pricingSections } from "@/app/components/pricing/pricingData";

function normalizedPrice(slug: string, locale: "de" | "en") {
  const row = pricingSections.nutrition.rows.find((pricingRow) => pricingRow.slug === slug);
  return formatPrice(row?.price, locale).replace(/\u00a0/g, " ");
}

describe("nutritional medicine content", () => {
  it("uses the approved German page copy and costs", () => {
    const copy = getNutritionMedicinePageCopy("de");

    expect(copy.title).toBe("Ernährungsmedizinische Beratung");
    expect(copy.initialPrice).toBe("Dauer: 60 Minuten | Kosten: 240,26 € nach GOÄ");
    expect(copy.followPrice).toBe("Dauer: 30 Minuten | Kosten: 120,65 € nach GOÄ");
    expect(copy.indications).toContain("Insulinresistenz und Prädiabetes");
    expect(copy.prepItems).toEqual(["Mahlzeiten und Snacks", "Getränke", "ungefähre Mengen", "Uhrzeiten"]);
  });

  it("exposes only the current nutrition prices in shared pricing data", () => {
    const rowSlugs = pricingSections.nutrition.rows.map((row) => row.slug);

    expect(rowSlugs).toEqual(["erstgespraech", "folgegespraech"]);
    expect(normalizedPrice("erstgespraech", "de")).toBe("240,26 €");
    expect(normalizedPrice("folgegespraech", "de")).toBe("120,65 €");
  });
});
