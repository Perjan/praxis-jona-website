import { describe, expect, it } from "vitest";

import {
  formatPrice,
  getPricingPageConfig,
  pricingSections,
} from "@/app/components/pricing/pricingData";
import { buildPricingMetadata } from "@/app/components/pricing/pricingMetadata";

function rowPrice(section: "prp" | "hairTherapy", slug: string) {
  const row = pricingSections[section].rows.find((item) => item.slug === slug);
  expect(row?.price).toBeDefined();
  return formatPrice(row?.price, "de");
}

describe("German aesthetic pricing search snippet", () => {
  it("answers PRP price intent using the same amounts as the visible price tables", () => {
    const config = getPricingPageConfig("aesthetics", "de");
    const metadata = buildPricingMetadata(config);

    expect(config.title).toContain("PRP-Preise");
    expect(config.title).toContain("Berlin-Mitte");
    expect(metadata.title).toBe(config.title);
    expect(config.description).toContain(`PRP Gesicht ${rowPrice("prp", "prp-gesicht")}`);
    expect(config.description).toContain(`PRP Haare ${rowPrice("hairTherapy", "prp-haare")}`);
    expect(metadata.description).toBe(config.description.replace(/\s+/g, " "));
    expect(metadata.alternates?.canonical).toBe("https://praxisjona.de/aesthetik/preise");
  });

  it("leaves the English pricing title and canonical owner unchanged", () => {
    const config = getPricingPageConfig("aesthetics", "en");

    expect(config.title).toBe("Aesthetics prices in Berlin-Mitte");
    expect(config.canonical).toBe("/en/aesthetics/prices");
  });
});
