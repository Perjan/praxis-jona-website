import PricePageLayout from "app/components/pricing/PricePageLayout";
import { getPricingPageConfig } from "app/components/pricing/pricingData";
import { buildPricingMetadata } from "app/components/pricing/pricingMetadata";

const config = getPricingPageConfig("aesthetics", "de");

export const metadata = buildPricingMetadata(config);

export default function AesthetikPreisePage() {
  return <PricePageLayout config={config} />;
}
