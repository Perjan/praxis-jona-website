import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BotulinumtoxinServicePage } from "app/components/BotulinumtoxinPage";
import { buildMetadata } from "app/components/pageMetadata";
import { botulinumtoxinIntro, botulinumtoxinServices, getBotulinumtoxinService } from "app/content/botulinumtoxin";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return botulinumtoxinServices.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getBotulinumtoxinService(params.slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: `${service.title} in Berlin-Mitte`,
    description: service.paragraphs.join(" "),
    canonical: `/botox-behandlung/${service.slug}`,
    alternate: botulinumtoxinIntro.alternate,
    locale: "de",
  });
}

export default function Page({ params }: PageProps) {
  const service = getBotulinumtoxinService(params.slug);

  if (!service) {
    notFound();
  }

  return <BotulinumtoxinServicePage service={service} />;
}
