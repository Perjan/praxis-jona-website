import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AestheticMarkdownDetailPage,
  getAestheticDetailPage,
  getAestheticDetailPages,
} from "app/components/AestheticMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";

const sectionKey = "microneedling";
const parentCanonical = "/aesthetik/microneedling";

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
    description: `${page.title} in Berlin-Mitte: medizinisches Microneedling mit Dermapen® in der Praxis Jona.`,
    canonical: page.href,
    alternate: "/en/aesthetics/microneedling",
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
