import { Metadata } from "next";
import { LongevityMarkdownPage } from "app/components/LongevityMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getLongevitySectionDescription, getLongevitySectionTitle } from "app/content/longevitySource";

const title = getLongevitySectionTitle("ironInfusion", "en");
const description = getLongevitySectionDescription("ironInfusion", "en");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/en/services/iron-infusion-costs",
  alternate: "/leistungen/eiseninfusion-kosten",
  locale: "en",
});

export default function Page() {
  return <LongevityMarkdownPage sectionKey="ironInfusion" locale="en" />;
}
