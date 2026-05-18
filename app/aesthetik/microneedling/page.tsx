import { Metadata } from "next";
import { AestheticMarkdownPage } from "app/components/AestheticMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getAestheticSectionDescription, getAestheticSectionTitle } from "app/content/aesthetikSource";

const title = getAestheticSectionTitle("microneedling");
const description = getAestheticSectionDescription("microneedling");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/aesthetik/microneedling",
  alternate: "/en/aesthetics/microneedling",
  locale: "de",
});

export default function Page() {
  return <AestheticMarkdownPage sectionKey="microneedling" canonical="/aesthetik/microneedling" />;
}
