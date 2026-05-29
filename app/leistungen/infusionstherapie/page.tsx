import { Metadata } from "next";
import { LongevityMarkdownPage } from "app/components/LongevityMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getLongevitySectionDescription, getLongevitySectionTitle } from "app/content/longevitySource";

const title = getLongevitySectionTitle("vitaminInfusion", "de");
const description = getLongevitySectionDescription("vitaminInfusion", "de");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/leistungen/infusionstherapie",
  alternate: "/en/services/infusion-therapy",
  locale: "de",
});

export default function Page() {
  return <LongevityMarkdownPage sectionKey="vitaminInfusion" locale="de" />;
}
