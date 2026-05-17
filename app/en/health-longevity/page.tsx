import { Metadata } from "next";
import { CategoryHub } from "app/components/BetaPages";
import { categoryContent } from "app/components/betaContent";
import { buildMetadata } from "app/components/pageMetadata";

const content = categoryContent.longevityEn;

export const metadata: Metadata = buildMetadata({
  title: content.title,
  description: content.description,
  canonical: "/en/health-longevity",
  alternate: "/health-longevity",
  locale: content.locale,
});

export default function Page() {
  return <CategoryHub content={content} canonical="/en/health-longevity" alternate="/health-longevity" />;
}
