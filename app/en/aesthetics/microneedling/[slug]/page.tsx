import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AestheticMarkdownDetailPage,
  germanAestheticSlugForEnglish,
  getAestheticDetailPage,
  getAestheticDetailPages,
} from "app/components/AestheticMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";

const sectionKey = "microneedling";
const parentCanonical = "/en/aesthetics/microneedling";

export function generateStaticParams() {
  return getAestheticDetailPages(sectionKey, "en").map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getAestheticDetailPage(sectionKey, params.slug, "en");

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: `${page.title} in Berlin-Mitte`,
    description: page.description?.join(" ") ?? `${page.title} at Praxis Jona Berlin-Mitte.`,
    canonical: page.href,
    alternate: page.alternate ?? `/aesthetik/microneedling/${germanAestheticSlugForEnglish(sectionKey, params.slug) ?? ""}`,
    locale: "en",
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = getAestheticDetailPage(sectionKey, params.slug, "en");

  if (!page) {
    notFound();
  }

  return <AestheticMarkdownDetailPage sectionKey={sectionKey} slug={params.slug} parentCanonical={parentCanonical} locale="en" />;
}
