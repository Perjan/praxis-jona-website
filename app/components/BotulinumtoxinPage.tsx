import Image from "next/image";
import Link from "next/link";
import { ClockIcon, CreditCardIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { Constants } from "app/Constants";
import { pricingSections, type PricingLocale } from "app/components/pricing/pricingData";
import {
  botulinumtoxinContentDe,
  botulinumtoxinContentEn,
  type BotulinumtoxinPageContent,
  type BotulinumtoxinService,
} from "app/content/botulinumtoxin";
import { MotionCard, MotionSection } from "./Motion";

const bookingHref = Constants.appointmentUrl;
const eyebrowClassName = "text-sm font-semibold uppercase tracking-[0.22em] text-primary/70";

function formatBotulinumtoxinPrice(service: BotulinumtoxinService, locale: PricingLocale) {
  const row = pricingSections.botox.rows.find((item) => item.slug === service.pricingSlug);
  const amount = row?.price?.amount;

  if (!amount) {
    return locale === "en" ? "from €199" : "ab 199 €";
  }

  return locale === "en" ? `from €${amount}` : `ab ${amount} €`;
}

function formatServiceDuration(service: BotulinumtoxinService, locale: PricingLocale) {
  const isHyperhidrosis = service.pricingSlug === "hyperhidrose";
  const minutes = isHyperhidrosis ? 45 : 30;

  return locale === "en" ? `${minutes} min` : `${minutes} Min.`;
}

function formatServiceDurationLong(service: BotulinumtoxinService, locale: PricingLocale) {
  const isHyperhidrosis = service.pricingSlug === "hyperhidrose";
  const minutes = isHyperhidrosis ? 45 : 30;

  return locale === "en" ? `${minutes} minutes` : `${minutes} Minuten`;
}

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5 text-lg leading-8 text-primaryLighter">
      {paragraphs.map((paragraph) =>
        paragraph.includes("\n\n") ? (
          <div key={paragraph} className="space-y-5">
            {paragraph.split("\n\n").map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ) : (
          <p key={paragraph}>{paragraph}</p>
        ),
      )}
    </div>
  );
}

function ServiceImage({ service, priority = false, compact = false }: { service: BotulinumtoxinService; priority?: boolean; compact?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-lightBeige shadow-sm ring-1 ring-primary/10">
      <Image
        src={service.image.src}
        alt={service.image.alt}
        width={720}
        height={560}
        priority={priority}
        sizes="(min-width: 1024px) 34vw, 92vw"
        className={`${compact ? "h-[180px]" : "h-56 sm:h-72"} w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${service.image.objectPositionClass ?? "object-center"}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/25 via-white/10 to-lightBeige/30" />
    </div>
  );
}

function HeroImage({ content }: { content: BotulinumtoxinPageContent }) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-lightBeige shadow-sm ring-1 ring-primary/10">
      <Image
        src={content.intro.image.src}
        alt={content.intro.image.alt}
        width={1774}
        height={887}
        priority
        sizes="(min-width: 1024px) 34vw, 92vw"
        className={`h-56 w-full object-cover sm:h-72 ${content.intro.image.objectPositionClass ?? "object-center"}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/15 via-white/10 to-lightBeige/20" />
    </div>
  );
}

function ServiceBody({ service }: { service: BotulinumtoxinService }) {
  const bulletLeadIndex = service.paragraphs.findIndex((paragraph) => /(?:sind|beitragen|helfen):$/.test(paragraph));
  const paragraphsBeforeBullets = bulletLeadIndex >= 0 ? service.paragraphs.slice(0, bulletLeadIndex + 1) : service.paragraphs;
  const paragraphsAfterBullets = bulletLeadIndex >= 0 ? service.paragraphs.slice(bulletLeadIndex + 1) : [];

  return (
    <div className="space-y-5">
      <Paragraphs paragraphs={paragraphsBeforeBullets} />
      {service.bullets && (
        <ul className="space-y-3 text-lg leading-8 text-primaryLighter">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {paragraphsAfterBullets.length > 0 && <Paragraphs paragraphs={paragraphsAfterBullets} />}
    </div>
  );
}

function Ctas({ content }: { content: BotulinumtoxinPageContent }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href={bookingHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex justify-center rounded-xl bg-primary px-6 py-3 text-base font-serif font-medium text-white shadow-sm transition hover:bg-primaryDarker"
      >
        {content.labels.book}
      </Link>
      <Link
        href={content.locale === "en" ? "/en/botox-prices" : "/botox-preise"}
        className="inline-flex justify-center rounded-xl border border-primary/20 bg-white px-6 py-3 text-base font-serif font-medium text-primary transition hover:border-primary/40 hover:bg-stone-50"
      >
        {content.labels.prices}
      </Link>
    </div>
  );
}

function ServiceFacts({ service, locale }: { service: BotulinumtoxinService; locale: PricingLocale }) {
  const duration = formatServiceDurationLong(service, locale);
  const price = formatBotulinumtoxinPrice(service, locale);
  const facts =
    locale === "en"
      ? [
          {
            title: "Duration",
            icon: ClockIcon,
            body: (
              <>
                Treatment usually takes <strong>{duration}</strong>.
              </>
            ),
          },
          {
            title: "Effect",
            icon: SparklesIcon,
            body: (
              <>
                Starts after a few days and develops fully after about <strong>14 days</strong>.
              </>
            ),
          },
          {
            title: "Price",
            icon: CreditCardIcon,
            body: <strong>{price}</strong>,
          },
        ]
      : [
          {
            title: "Dauer",
            icon: ClockIcon,
            body: (
              <>
                Die Behandlung dauert in der Regel <strong>{duration}</strong>.
              </>
            ),
          },
          {
            title: "Effekt",
            icon: SparklesIcon,
            body: (
              <>
                Wirkung nach wenigen Tagen, vollständig meist nach etwa <strong>14 Tagen</strong>.
              </>
            ),
          },
          {
            title: "Preis",
            icon: CreditCardIcon,
            body: <strong>{price}</strong>,
          },
        ];

  return (
    <MotionSection className="relative z-20 -mt-[50px] px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/20 ring-1 ring-white/10">
          <div className="grid grid-cols-1 divide-y divide-white/15 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {facts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div key={fact.title} className="flex min-h-[112px] items-start gap-4 p-5 sm:p-6 lg:min-h-[132px] lg:p-7">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 sm:h-16 sm:w-16">
                    <Icon className="h-8 w-8 stroke-[2.2] text-white sm:h-9 sm:w-9" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-sans text-xl font-semibold leading-tight text-white sm:text-2xl">{fact.title}</h2>
                    <p className="mt-2 text-base leading-7 text-white/70 sm:text-lg [&_strong]:font-semibold [&_strong]:text-white/70">{fact.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function CommonSections({ content }: { content: BotulinumtoxinPageContent }) {
  return (
    <MotionSection className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {content.commonSections.map((section) => (
          <MotionCard key={section.title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
            <h2 className="font-serif text-2xl font-semibold text-primary">{section.title}</h2>
            <div className="mt-5">
              <Paragraphs paragraphs={section.paragraphs} />
            </div>
          </MotionCard>
        ))}
      </div>
    </MotionSection>
  );
}

function FaqSection({ content }: { content: BotulinumtoxinPageContent }) {
  return (
    <MotionSection className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="font-serif text-3xl font-semibold text-primary">{content.labels.faqTitle}</h2>
      <div className="mt-8 space-y-4">
        {content.faq.map((item) => (
          <details key={item.question} className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-serif text-lg font-semibold text-primary">{item.question}</summary>
            <div className="mt-4">
              <Paragraphs paragraphs={[item.answer]} />
            </div>
          </details>
        ))}
      </div>
    </MotionSection>
  );
}

export function BotulinumtoxinMainPage({ locale = "de" }: { locale?: "de" | "en" }) {
  const content = locale === "en" ? botulinumtoxinContentEn : botulinumtoxinContentDe;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Praxis Jona", item: Constants.baseUrl },
      { "@type": "ListItem", position: 2, name: content.intro.title, item: `${Constants.baseUrl}${content.intro.canonical}` },
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

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: content.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${Constants.baseUrl}${content.intro.canonical}/${service.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={itemListSchema} />
      <div className="overflow-hidden bg-white">
        <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8 lg:py-24">
          <div>
            <p className={eyebrowClassName}>{content.labels.treatmentEyebrow}</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{content.intro.title}</h1>
            <p className="mt-5 font-serif text-2xl text-primary">{content.intro.subtitle}</p>
            <div className="mt-8 lg:hidden">
              <HeroImage content={content} />
            </div>
            <div className="mt-6 space-y-5 text-lg leading-8 text-primaryLighter">
              <p>{content.intro.description}</p>
              <p>{content.intro.secondaryDescription}</p>
            </div>
            <Ctas content={content} />
          </div>
          <div className="hidden lg:block">
            <HeroImage content={content} />
          </div>
        </MotionSection>

        <MotionSection className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
          <p className={eyebrowClassName}>{content.labels.basicsEyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary">{content.overview.title}</h2>
          <div className="mt-6">
            <Paragraphs paragraphs={content.overview.paragraphs} />
          </div>
        </MotionSection>

        <MotionSection className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className={eyebrowClassName}>{content.labels.areasEyebrow}</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-primary">{content.labels.areasTitle}</h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {content.services.map((service, index) => (
                <Link key={service.slug} href={`${content.intro.canonical}/${service.slug}`} className="block h-full">
                  <MotionCard
                    delay={Math.min(index * 0.03, 0.24)}
                    className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:ring-primary/20"
                  >
                    <ServiceImage service={service} compact />
                    <div className="flex flex-1 flex-col p-5 sm:p-4">
                      <h3 className="font-serif text-[1.45rem] font-semibold leading-[1.08] text-primary sm:text-xl md:min-h-[4.5rem] md:text-[1.05rem] lg:min-h-[4rem] lg:text-lg xl:text-xl">
                        {service.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-primary/10 pt-4">
                        <p className="font-serif text-[1.65rem] font-semibold leading-none text-primary tabular-nums md:text-xl xl:text-2xl">
                          {formatBotulinumtoxinPrice(service, content.locale)}
                        </p>
                        <div className="inline-flex min-h-9 items-center gap-2 rounded-full bg-lightBeige px-3 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/10">
                          <ClockIcon className="h-4 w-4 stroke-[3]" aria-hidden="true" />
                          <span>{formatServiceDuration(service, content.locale)}</span>
                        </div>
                      </div>
                      <span className="mt-auto block pt-5 text-right text-sm font-semibold text-primary underline-offset-4 transition group-hover:underline">
                        {content.labels.learnMore}
                      </span>
                    </div>
                  </MotionCard>
                </Link>
              ))}
            </div>
          </div>
        </MotionSection>

        <CommonSections content={content} />
        <FaqSection content={content} />
      </div>
    </>
  );
}

export function BotulinumtoxinServicePage({ service, locale = "de" }: { service: BotulinumtoxinService; locale?: "de" | "en" }) {
  const content = locale === "en" ? botulinumtoxinContentEn : botulinumtoxinContentDe;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Praxis Jona", item: Constants.baseUrl },
      { "@type": "ListItem", position: 2, name: content.intro.title, item: `${Constants.baseUrl}${content.intro.canonical}` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${Constants.baseUrl}${content.intro.canonical}/${service.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.paragraphs.join(" "),
    url: `${Constants.baseUrl}${content.intro.canonical}/${service.slug}`,
    provider: {
      "@type": "MedicalClinic",
      "@id": `${Constants.baseUrl}/#organization`,
      name: "Praxis Jona",
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <div className="overflow-hidden bg-white">
        <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8 lg:py-24">
          <div>
            <p className={eyebrowClassName}>{content.labels.treatmentEyebrow}</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{service.title}</h1>
            <div className="mt-8 lg:hidden">
              <ServiceImage service={service} priority />
            </div>
            <div className="mt-6">
              <ServiceBody service={service} />
            </div>
            <Ctas content={content} />
          </div>
          <div className="hidden lg:block">
            <ServiceImage service={service} priority />
          </div>
        </MotionSection>

        <ServiceFacts service={service} locale={content.locale} />

        <CommonSections content={content} />
        <FaqSection content={content} />

        <MotionSection className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-lightBeige p-8">
            <h2 className="font-serif text-3xl font-semibold text-primary">{content.labels.moreAreas}</h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {content.services
                .filter((item) => item.slug !== service.slug)
                .slice(0, 6)
                .map((item) => (
                  <Link key={item.slug} href={`${content.intro.canonical}/${item.slug}`} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10 transition hover:shadow-md">
                    <h3 className="font-serif text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-primaryLighter">{item.paragraphs[0]}</p>
                    <span className="mt-5 block text-sm font-semibold text-primary underline underline-offset-4">{content.labels.learnMore}</span>
                  </Link>
                ))}
            </div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}
