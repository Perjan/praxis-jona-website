import { Metadata } from "next";
import { LongevityMarkdownHub } from "app/components/LongevityMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getLongevitySectionDescription, getLongevitySectionTitle } from "app/content/longevitySource";

const title = getLongevitySectionTitle("hub", "en");
const description = getLongevitySectionDescription("hub", "en");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/en/health-longevity",
  alternate: "/health-longevity",
  locale: "en",
});

export default function Page() {
  return <LongevityMarkdownHub locale="en" />;
}
