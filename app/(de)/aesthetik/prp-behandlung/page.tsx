import { Metadata } from "next";
import { AestheticMarkdownPage } from "app/components/AestheticMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getAestheticSectionDescription, getAestheticSectionTitle } from "app/content/aesthetikSource";

const title = getAestheticSectionTitle("prp");
const description = getAestheticSectionDescription("prp");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/aesthetik/prp-behandlung",
  alternate: "/en/aesthetics/prp-treatment",
  locale: "de",
});

export default function Page() {
  return <AestheticMarkdownPage sectionKey="prp" canonical="/aesthetik/prp-behandlung" />;
}
