import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BotulinumtoxinServicePage } from "app/components/BotulinumtoxinPage";
import { buildMetadata } from "app/components/pageMetadata";
import {
  botulinumtoxinContentEn,
  botulinumtoxinServicesEn,
  germanBotulinumtoxinSlugForEnglish,
  getBotulinumtoxinServiceEn,
} from "app/content/botulinumtoxin";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return botulinumtoxinServicesEn.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getBotulinumtoxinServiceEn(params.slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: `${service.title} in Berlin-Mitte`,
    description: service.paragraphs.join(" "),
    canonical: `${botulinumtoxinContentEn.intro.canonical}/${service.slug}`,
    alternate: `${botulinumtoxinContentEn.intro.alternate}/${germanBotulinumtoxinSlugForEnglish(service.slug) ?? ""}`,
    locale: "en",
  });
}

export default function Page({ params }: PageProps) {
  const service = getBotulinumtoxinServiceEn(params.slug);

  if (!service) {
    notFound();
  }

  return <BotulinumtoxinServicePage service={service} locale="en" />;
}
