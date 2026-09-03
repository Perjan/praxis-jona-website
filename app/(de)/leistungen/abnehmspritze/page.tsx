import { Metadata } from "next";
import { LongevityMarkdownPage } from "app/components/LongevityMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getLongevitySectionDescription, getLongevitySectionTitle } from "app/content/longevitySource";

const title = getLongevitySectionTitle("weightLoss", "de");
const description = getLongevitySectionDescription("weightLoss", "de");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/leistungen/abnehmspritze",
  alternate: "/en/services/weight-loss-injection",
  locale: "de",
});

export default function Page() {
  return <LongevityMarkdownPage sectionKey="weightLoss" locale="de" />;
}
