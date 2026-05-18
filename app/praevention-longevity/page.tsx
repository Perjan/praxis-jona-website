import { Metadata } from "next";
import { LongevityMarkdownHub } from "app/components/LongevityMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getLongevitySectionDescription, getLongevitySectionTitle } from "app/content/longevitySource";

const title = getLongevitySectionTitle("hub", "de");
const description = getLongevitySectionDescription("hub", "de");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/praevention-longevity",
  alternate: "/en/prevention-longevity",
  locale: "de",
});

export default function Page() {
  return <LongevityMarkdownHub locale="de" />;
}
