import { Metadata } from "next";
import { CategoryHub } from "app/components/PageTemplates";
import { categoryContent } from "app/components/pageContent";
import { buildMetadata } from "app/components/pageMetadata";

const content = categoryContent.generalEn;

export const metadata: Metadata = buildMetadata({
  title: content.title,
  description: content.description,
  canonical: "/en/general-medicine",
  alternate: "/hausaerztliche-leistungen",
  locale: content.locale,
});

export default function Page() {
  return <CategoryHub content={content} canonical="/en/general-medicine" alternate="/hausaerztliche-leistungen" />;
}
