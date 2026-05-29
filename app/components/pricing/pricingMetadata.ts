import type { Metadata } from "next";
import { buildMetadata } from "app/components/pageMetadata";
import type { PricingPageConfig } from "./pricingData";
import { absoluteUrl } from "./pricingData";

export function buildPricingMetadata(config: PricingPageConfig): Metadata {
  return buildMetadata({
    title: config.title,
    description: config.description,
    canonical: absoluteUrl(config.canonical),
    alternate: absoluteUrl(config.alternate),
    locale: config.locale,
  });
}
