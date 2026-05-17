import Link from "next/link";
import Image from "next/image";
import { ArrowsRightLeftIcon, CheckCircleIcon, ClockIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Constants } from "app/Constants";
import { MotionCard, MotionSection } from "./Motion";
import type { CategoryContent, LandingContent, ServiceLink } from "./pageContent";

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const heroEyebrowClassName = "text-sm font-semibold uppercase tracking-[0.22em] text-primary/70";
const factIconComponents = [ClockIcon, ArrowsRightLeftIcon, MoonIcon, CheckCircleIcon];

function CtaButtons({
  primary,
  primaryHref,
  secondary,
  secondaryHref,
}: {
  primary: string;
  primaryHref: string;
  secondary?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href={primaryHref}
        target={primaryHref.startsWith("http") ? "_blank" : undefined}
        rel={primaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
        className="inline-flex justify-center rounded-xl bg-primary px-6 py-3 text-base font-serif font-medium text-white shadow-sm transition hover:bg-primaryDarker"
      >
        {primary}
      </Link>
      {secondary && secondaryHref && (
        <Link
          href={secondaryHref}
          className="inline-flex justify-center rounded-xl border border-primary/20 bg-white px-6 py-3 text-base font-serif font-medium text-primary transition hover:border-primary/40 hover:bg-stone-50"
        >
          {secondary}
        </Link>
      )}
    </div>
  );
}

function ServiceGrid({
  services,
  locale = "de",
  maxColumns = 3,
}: {
  services: ServiceLink[];
  locale?: "de" | "en";
  maxColumns?: 2 | 3;
}) {
  return (
    <div className={`mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 ${maxColumns === 3 ? "lg:grid-cols-3" : ""}`}>
      {services.map((service, index) => (
        <Link key={`${service.href}-${service.title}`} href={service.href} className="block h-full">
          <MotionCard
            delay={Math.min(index * 0.04, 0.2)}
            className="group flex h-full flex-col justify-between rounded-lg border border-primary/10 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div>
              {service.eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryLighter">{service.eyebrow}</p>}
              <h3 className="mt-2 font-serif text-xl font-semibold text-primary">{service.title}</h3>
              <p className="mt-3 text-base leading-7 text-primaryLighter">{service.description}</p>
            </div>
            <span className="mt-6 text-sm font-semibold text-primary underline underline-offset-4">
              {locale === "en" ? "Learn more" : "Mehr erfahren"}
            </span>
          </MotionCard>
        </Link>
      ))}
    </div>
  );
}

export function CategoryHub({ content, canonical, alternate }: { content: CategoryContent; canonical: string; alternate: string }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Praxis Jona", item: Constants.baseUrl },
      { "@type": "ListItem", position: 2, name: content.title, item: `${Constants.baseUrl}${canonical}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${Constants.baseUrl}/#organization`,
    name: "Praxis Jona",
    url: `${Constants.baseUrl}${canonical}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Torstraße 125",
      postalCode: "10119",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    telephone: Constants.contact.phone,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <div className="overflow-hidden bg-white">
        <MotionSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className={content.heroImage ? "grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center" : "max-w-4xl"}>
            <div className="max-w-4xl">
              <p className={heroEyebrowClassName}>{content.eyebrow}</p>
              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{content.title}</h1>
              <p className="mt-6 text-lg leading-8 text-primaryLighter">{content.description}</p>
              <CtaButtons primary={content.cta} primaryHref={content.ctaHref} secondary={content.secondaryCta} secondaryHref={content.secondaryHref} />
            </div>
            {content.heroImage && (
              <div className="relative overflow-hidden rounded-xl bg-lightBeige shadow-xl ring-1 ring-primary/10">
                <Image
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  width={900}
                  height={1125}
                  priority
                  sizes="(min-width: 1024px) 38vw, 92vw"
                  className={`h-72 w-full object-cover sm:h-96 lg:h-auto lg:aspect-[4/5] ${content.heroImage.objectPositionClass ?? "object-center"}`}
                />
              </div>
            )}
          </div>
        </MotionSection>

        {content.sections.map((section) => (
          <MotionSection key={section.title} className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <h2 className="font-serif text-3xl font-semibold text-primary">{section.title}</h2>
                <p className="mt-4 text-lg leading-8 text-primaryLighter">{section.intro}</p>
              </div>
              <ServiceGrid services={section.services} locale={content.locale} />
            </div>
          </MotionSection>
        ))}

        <MotionSection className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-primary">{content.locale === "en" ? "Common questions" : "Häufige Fragen"}</h2>
              <p className="mt-4 text-primaryLighter">
                {content.locale === "en"
                  ? "Short answers for patients comparing services and booking options."
                  : "Kurze Antworten für Patientinnen und Patienten, die Leistungen und Buchungswege vergleichen."}
              </p>
            </div>
            <div className="space-y-4">
              {content.faq.map((item) => (
                <details key={item.question} className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer font-serif text-lg font-semibold text-primary">{item.question}</summary>
                  <p className="mt-3 leading-7 text-primaryLighter">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}

export function LandingPage({ content }: { content: LandingContent }) {
  const bookingHref = Constants.appointmentUrl;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Praxis Jona", item: Constants.baseUrl },
      { "@type": "ListItem", position: 2, name: content.title, item: `${Constants.baseUrl}${content.canonical}` },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    description: content.description,
    provider: { "@id": `${Constants.baseUrl}/#organization`, name: "Praxis Jona" },
    areaServed: "Berlin-Mitte",
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <div className="overflow-hidden bg-white">
        <MotionSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className={heroEyebrowClassName}>{content.eyebrow}</p>
              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{content.title}</h1>
              <p className="mt-6 text-lg leading-8 text-primaryLighter">{content.intro}</p>
              <CtaButtons primary={content.cta} primaryHref={bookingHref} secondary={content.secondaryCta} secondaryHref={content.secondaryHref} />
            </div>
            <div className="rounded-lg bg-lightBeige p-6 shadow-sm">
              <dl className="space-y-8">
                {content.facts.map((fact, index) => {
                  const FactIcon = factIconComponents[index % factIconComponents.length];

                  return (
                    <div key={fact.label} className="flex gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary/70">
                        <FactIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/70">{fact.label}</dt>
                        <dd className="mt-1 font-serif text-xl text-primary">{fact.value}</dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </MotionSection>

        <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {content.sections.map((section, index) => (
              <MotionCard key={section.title} delay={Math.min(index * 0.05, 0.16)} className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
                <h2 className="font-serif text-2xl font-semibold text-primary">{section.title}</h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-7 text-primaryLighter">{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 list-disc space-y-2 pl-5 text-primaryLighter">
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </MotionCard>
            ))}
          </div>
        </div>

        <MotionSection className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-lightBeige px-6 py-10 lg:px-10">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl font-semibold text-primary">{content.locale === "en" ? "Related treatments" : "Verwandte Behandlungen"}</h2>
              <p className="mt-4 text-primaryLighter">
                {content.locale === "en"
                  ? "Nearby topics that are often considered during consultation."
                  : "Naheliegende Themen, die häufig in der Beratung mitbesprochen werden."}
              </p>
            </div>
            <div className="mt-8">
              <ServiceGrid services={content.related} locale={content.locale} maxColumns={2} />
            </div>
          </div>
        </MotionSection>

        <MotionSection className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-primary">{content.locale === "en" ? "FAQ" : "Häufige Fragen"}</h2>
          <div className="mt-8 space-y-4">
            {content.faq.map((item) => (
              <details key={item.question} className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-serif text-lg font-semibold text-primary">{item.question}</summary>
                <p className="mt-3 leading-7 text-primaryLighter">{item.answer}</p>
              </details>
            ))}
          </div>
        </MotionSection>
      </div>
    </>
  );
}
