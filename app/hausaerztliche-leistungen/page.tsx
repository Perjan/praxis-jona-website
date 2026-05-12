import { Metadata } from "next";
import { CategoryHub } from "app/components/BetaPages";
import { categoryContent } from "app/components/betaContent";
import { buildMetadata } from "app/components/pageMetadata";

const content = categoryContent.generalDe;

export const metadata: Metadata = buildMetadata({
  title: content.title,
  description: content.description,
  canonical: "/hausaerztliche-leistungen",
  alternate: "/en/general-medicine",
  locale: content.locale,
});

export default function Page() {
  return <CategoryHub content={content} canonical="/hausaerztliche-leistungen" alternate="/en/general-medicine" />;
}
