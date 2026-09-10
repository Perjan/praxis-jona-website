import { describe, expect, it } from "vitest";

import { getPricingPageConfig } from "@/app/components/pricing/pricingData";
import { buildPricingJsonLd } from "@/app/components/pricing/pricingSchema";

describe("pricing JSON-LD", () => {
  it("publishes visible aesthetic services as a clinic offer catalog", () => {
    const schemas = buildPricingJsonLd(getPricingPageConfig("aesthetics", "de"));
    // The clinic node declares @type as ["MedicalClinic", "Organization"] so that
    // agent crawlers matching on the literal string "Organization" find it too.
    const isClinic = (schema: unknown) => {
      const type = (schema as { "@type"?: string | string[] })["@type"];
      return Array.isArray(type) ? type.includes("MedicalClinic") : type === "MedicalClinic";
    };

    const clinicSchema = schemas.find(isClinic) as {
      hasOfferCatalog?: {
        itemListElement?: Array<{
          name: string;
          itemListElement: Array<{
            itemOffered: { name: string; url: string };
            priceSpecification?: { price: number; priceCurrency: string };
          }>;
        }>;
      };
    };

    expect(clinicSchema?.hasOfferCatalog?.itemListElement?.map((catalog) => catalog.name)).toContain("PRP / Eigenbluttherapie");

    const offers =
      clinicSchema?.hasOfferCatalog?.itemListElement?.flatMap((catalog) => catalog.itemListElement) ?? [];
    const prpOffer = offers.find((offer) => offer.itemOffered.name === "PRP Gesicht + Hals + Dekolleté");

    expect(prpOffer?.itemOffered.url).toBe(
      "https://praxisjona.de/aesthetik/prp-behandlung/prp-gesicht-hals-und-dekollete#prp-gesicht-hals-dekollete",
    );
    expect(prpOffer?.priceSpecification).toMatchObject({ price: 299, priceCurrency: "EUR" });
  });
});
