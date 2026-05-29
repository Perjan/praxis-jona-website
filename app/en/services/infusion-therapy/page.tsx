import { Metadata } from "next";
import { LongevityMarkdownPage } from "app/components/LongevityMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getLongevitySectionDescription, getLongevitySectionTitle } from "app/content/longevitySource";

const title = getLongevitySectionTitle("vitaminInfusion", "en");
const description = getLongevitySectionDescription("vitaminInfusion", "en");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/en/services/infusion-therapy",
  alternate: "/leistungen/infusionstherapie",
  locale: "en",
});

export default function Page() {
  return <LongevityMarkdownPage sectionKey="vitaminInfusion" locale="en" />;
}
