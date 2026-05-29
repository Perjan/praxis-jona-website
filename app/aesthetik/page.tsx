import { Metadata } from "next";
import { AestheticMarkdownHub } from "app/components/AestheticMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
import { getAestheticSectionDescription, getAestheticSectionTitle } from "app/content/aesthetikSource";

const title = getAestheticSectionTitle("hub");
const description = getAestheticSectionDescription("hub");

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/aesthetik",
  alternate: "/en/aesthetics",
  locale: "de",
});

export default function Page() {
  return <AestheticMarkdownHub />;
}
