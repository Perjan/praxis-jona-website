import { Metadata } from "next";
import { LongevityMarkdownPage } from "app/components/LongevityMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getLongevitySectionDescription, getLongevitySectionTitle } from "app/content/longevitySource";

const title = getLongevitySectionTitle("ironInfusion", "de");
const description = getLongevitySectionDescription("ironInfusion", "de");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/leistungen/eiseninfusion-kosten",
  alternate: "/en/services/iron-infusion-costs",
  locale: "de",
});

export default function Page() {
  return <LongevityMarkdownPage sectionKey="ironInfusion" locale="de" />;
}
