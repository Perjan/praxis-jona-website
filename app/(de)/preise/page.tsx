import PricePageLayout from "app/components/pricing/PricePageLayout";
import { getPricingPageConfig } from "app/components/pricing/pricingData";
import { buildPricingMetadata } from "app/components/pricing/pricingMetadata";

const config = getPricingPageConfig("global", "de");

export const metadata = buildPricingMetadata(config);

export default function PreisePage() {
  return <PricePageLayout config={config} />;
}
