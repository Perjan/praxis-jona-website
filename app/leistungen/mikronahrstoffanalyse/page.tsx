import { Metadata } from "next";
import { LongevityMarkdownPage } from "app/components/LongevityMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getLongevitySectionDescription, getLongevitySectionTitle } from "app/content/longevitySource";

const title = getLongevitySectionTitle("micronutrients", "de");
const description = getLongevitySectionDescription("micronutrients", "de");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/leistungen/mikronahrstoffanalyse",
  alternate: "/en/services/micronutrient-analysis",
  locale: "de",
});

export default function Page() {
  return <LongevityMarkdownPage sectionKey="micronutrients" locale="de" />;
}
