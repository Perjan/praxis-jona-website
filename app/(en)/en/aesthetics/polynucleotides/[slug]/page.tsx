import { Metadata } from "next";
import { clinicTreatmentMetadata } from "app/components/ClinicTreatmentPage";
import { notFound } from "next/navigation";
import {
  AestheticMarkdownDetailPage,
  germanAestheticSlugForEnglish,
  getAestheticDetailPage,
  getAestheticDetailPages,
} from "app/components/AestheticMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";

const sectionKey = "skinbooster";
const parentCanonical = "/en/aesthetics/polynucleotides";

export function generateStaticParams() {
  return getAestheticDetailPages(sectionKey, "en").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  if (params.slug === "profhilo") return clinicTreatmentMetadata("profhilo", "en");
  const page = getAestheticDetailPage(sectionKey, params.slug, "en");

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: `${page.title} in Berlin-Mitte`,
    description: page.description?.join(" ") ?? `${page.title} at Praxis Jona Berlin-Mitte.`,
    canonical: page.href,
    alternate: page.alternate ?? `/aesthetik/polynukleotide/${germanAestheticSlugForEnglish(sectionKey, params.slug) ?? ""}`,
    locale: "en",
  });
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const page = getAestheticDetailPage(sectionKey, params.slug, "en");

  if (!page) {
    notFound();
  }

  return <AestheticMarkdownDetailPage sectionKey={sectionKey} slug={params.slug} parentCanonical={parentCanonical} locale="en" />;
}
