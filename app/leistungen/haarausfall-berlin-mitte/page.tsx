import { Metadata } from "next";
import { AestheticMarkdownPage } from "app/components/AestheticMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getAestheticSectionDescription, getAestheticSectionTitle } from "app/content/aesthetikSource";

const title = getAestheticSectionTitle("hair");
const description = getAestheticSectionDescription("hair");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/leistungen/haarausfall-berlin-mitte",
  alternate: "/en/services/hair-loss-berlin-mitte",
  locale: "de",
});

export default function Page() {
  return <AestheticMarkdownPage sectionKey="hair" canonical="/leistungen/haarausfall-berlin-mitte" />;
}
