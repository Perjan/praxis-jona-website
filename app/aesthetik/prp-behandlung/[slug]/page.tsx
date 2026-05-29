import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  AestheticMarkdownDetailPage,
  englishAestheticSlugForGerman,
  getAestheticDetailPage,
  getAestheticDetailPages,
} from "app/components/AestheticMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";

const sectionKey = "prp";
const parentCanonical = "/aesthetik/prp-behandlung";

export function generateStaticParams() {
  return getAestheticDetailPages(sectionKey).map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getAestheticDetailPage(sectionKey, params.slug);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.title,
    description: `${page.title} in Berlin-Mitte: ärztliche Beratung, individuelle Planung und transparente PRP-Behandlung in der Praxis Jona.`,
    canonical: page.href,
    alternate: `/en/aesthetics/prp-treatment/${englishAestheticSlugForGerman(sectionKey, params.slug) ?? ""}`,
    locale: "de",
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = getAestheticDetailPage(sectionKey, params.slug);

  if (!page) {
    notFound();
  }

  return <AestheticMarkdownDetailPage sectionKey={sectionKey} slug={params.slug} parentCanonical={parentCanonical} />;
}
