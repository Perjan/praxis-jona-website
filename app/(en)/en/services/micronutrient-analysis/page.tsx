import { Metadata } from "next";
import { LongevityMarkdownPage } from "app/components/LongevityMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getLongevitySectionDescription, getLongevitySectionTitle } from "app/content/longevitySource";

const title = getLongevitySectionTitle("micronutrients", "en");
const description = getLongevitySectionDescription("micronutrients", "en");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/en/services/micronutrient-analysis",
  alternate: "/leistungen/mikronahrstoffanalyse",
  locale: "en",
});

export default function Page() {
  return <LongevityMarkdownPage sectionKey="micronutrients" locale="en" />;
}
