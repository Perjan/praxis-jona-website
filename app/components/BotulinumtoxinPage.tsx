import Image from "next/image";
import Link from "next/link";
import { Constants } from "app/Constants";
import {
  botulinumtoxinCommonSections,
  botulinumtoxinFaq,
  botulinumtoxinIntro,
  botulinumtoxinOverview,
  botulinumtoxinServices,
  type BotulinumtoxinService,
} from "app/content/botulinumtoxin";
import { MotionCard, MotionSection } from "./Motion";

const bookingHref = Constants.appointmentUrl;
const eyebrowClassName = "text-sm font-semibold uppercase tracking-[0.22em] text-primary/70";

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

function ServiceImage({ service, priority = false }: { service: BotulinumtoxinService; priority?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-lightBeige shadow-sm ring-1 ring-primary/10">
      <Image
        src={service.image.src}
        alt={service.image.alt}
        width={720}
        height={560}
        priority={priority}
        sizes="(min-width: 1024px) 34vw, 92vw"
        className={`h-56 w-full object-cover sm:h-72 ${service.image.objectPositionClass ?? "object-center"}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/25 via-white/10 to-lightBeige/30" />
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

function Ctas() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href={bookingHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex justify-center rounded-xl bg-primary px-6 py-3 text-base font-serif font-medium text-white shadow-sm transition hover:bg-primaryDarker"
      >
        Termin buchen
      </Link>
      <Link
        href="/botox-preise"
        className="inline-flex justify-center rounded-xl border border-primary/20 bg-white px-6 py-3 text-base font-serif font-medium text-primary transition hover:border-primary/40 hover:bg-stone-50"
      >
        Preise ansehen
      </Link>
    </div>
  );
}

function CommonSections() {
  return (
    <MotionSection className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {botulinumtoxinCommonSections.map((section) => (
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

function FaqSection() {
  return (
    <MotionSection className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="font-serif text-3xl font-semibold text-primary">Häufige Fragen zur Botulinumtoxin-Behandlung</h2>
      <div className="mt-8 space-y-4">
        {botulinumtoxinFaq.map((item) => (
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

export function BotulinumtoxinMainPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Praxis Jona", item: Constants.baseUrl },
      { "@type": "ListItem", position: 2, name: botulinumtoxinIntro.title, item: `${Constants.baseUrl}${botulinumtoxinIntro.canonical}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: botulinumtoxinFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: botulinumtoxinServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${Constants.baseUrl}/botox-behandlung/${service.slug}`,
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
            <p className={eyebrowClassName}>Botulinumtoxin Behandlung</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{botulinumtoxinIntro.title}</h1>
            <p className="mt-5 font-serif text-2xl text-primary">{botulinumtoxinIntro.subtitle}</p>
            <div className="mt-6 space-y-5 text-lg leading-8 text-primaryLighter">
              <p>{botulinumtoxinIntro.description}</p>
              <p>{botulinumtoxinIntro.secondaryDescription}</p>
            </div>
            <Ctas />
          </div>
          <ServiceImage service={botulinumtoxinServices[0]} priority />
        </MotionSection>

        <MotionSection className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 lg:px-8">
          <p className={eyebrowClassName}>Grundlagen</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary">{botulinumtoxinOverview.title}</h2>
          <div className="mt-6">
            <Paragraphs paragraphs={botulinumtoxinOverview.paragraphs} />
          </div>
        </MotionSection>

        <MotionSection className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className={eyebrowClassName}>Behandlungsbereiche</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-primary">Behandlungsbereiche mit Botulinumtoxin</h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {botulinumtoxinServices.map((service, index) => (
                <Link key={service.slug} href={`/botox-behandlung/${service.slug}`} className="block h-full">
                  <MotionCard
                    delay={Math.min(index * 0.03, 0.24)}
                    className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10 transition hover:shadow-lg"
                  >
                    <ServiceImage service={service} />
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-2xl font-semibold text-primary">{service.title}</h3>
                      <p className="mt-4 flex-1 text-base leading-7 text-primaryLighter">{service.paragraphs[0]}</p>
                      <span className="mt-6 text-sm font-semibold text-primary underline underline-offset-4">Mehr erfahren</span>
                    </div>
                  </MotionCard>
                </Link>
              ))}
            </div>
          </div>
        </MotionSection>

        <CommonSections />
        <FaqSection />
      </div>
    </>
  );
}

export function BotulinumtoxinServicePage({ service }: { service: BotulinumtoxinService }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Praxis Jona", item: Constants.baseUrl },
      { "@type": "ListItem", position: 2, name: botulinumtoxinIntro.title, item: `${Constants.baseUrl}${botulinumtoxinIntro.canonical}` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${Constants.baseUrl}/botox-behandlung/${service.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.paragraphs.join(" "),
    url: `${Constants.baseUrl}/botox-behandlung/${service.slug}`,
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
            <p className={eyebrowClassName}>Botulinumtoxin-Behandlung</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{service.title}</h1>
            <div className="mt-6">
              <ServiceBody service={service} />
            </div>
            <Ctas />
          </div>
          <ServiceImage service={service} priority />
        </MotionSection>

        <CommonSections />
        <FaqSection />

        <MotionSection className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-lightBeige p-8">
            <h2 className="font-serif text-3xl font-semibold text-primary">Weitere Behandlungsbereiche</h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {botulinumtoxinServices
                .filter((item) => item.slug !== service.slug)
                .slice(0, 6)
                .map((item) => (
                  <Link key={item.slug} href={`/botox-behandlung/${item.slug}`} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10 transition hover:shadow-md">
                    <h3 className="font-serif text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-primaryLighter">{item.paragraphs[0]}</p>
                    <span className="mt-5 block text-sm font-semibold text-primary underline underline-offset-4">Mehr erfahren</span>
                  </Link>
                ))}
            </div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}
