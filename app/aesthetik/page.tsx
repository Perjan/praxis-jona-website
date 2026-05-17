import { Metadata } from "next";
import { CategoryHub } from "app/components/PageTemplates";
import { categoryContent } from "app/components/pageContent";
import { buildMetadata } from "app/components/pageMetadata";

const content = categoryContent.aestheticDe;

export const metadata: Metadata = buildMetadata({
  title: content.title,
  description: content.description,
  canonical: "/aesthetik",
  alternate: "/en/aesthetics",
  locale: content.locale,
});

export default function Page() {
  return <CategoryHub content={content} canonical="/aesthetik" alternate="/en/aesthetics" />;
}
