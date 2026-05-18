import { Metadata } from "next";
import { LongevityMarkdownPage } from "app/components/LongevityMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getLongevitySectionDescription, getLongevitySectionTitle } from "app/content/longevitySource";

const title = getLongevitySectionTitle("weightLoss", "en");
const description = getLongevitySectionDescription("weightLoss", "en");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/en/services/weight-loss-injection",
  alternate: "/leistungen/abnehmspritze",
  locale: "en",
});

export default function Page() {
  return <LongevityMarkdownPage sectionKey="weightLoss" locale="en" />;
}
