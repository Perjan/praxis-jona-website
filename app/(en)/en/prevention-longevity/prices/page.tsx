import PricePageLayout from "app/components/pricing/PricePageLayout";
import { getPricingPageConfig } from "app/components/pricing/pricingData";
import { buildPricingMetadata } from "app/components/pricing/pricingMetadata";

const config = getPricingPageConfig("healthLongevity", "en");

export const metadata = buildPricingMetadata(config);

export default function HealthLongevityPricesPage() {
  return <PricePageLayout config={config} />;
}
