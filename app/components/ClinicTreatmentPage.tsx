import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDaysIcon,
  CreditCardIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import AppointmentBookingButton from "app/components/AppointmentBookingButton";
import {
  TreatmentDetailHero,
  TreatmentRelatedCards,
  type TreatmentFact,
} from "app/components/TreatmentDetailTemplate";
import {
  getTreatmentEditorialContent,
  TreatmentEditorialBody,
  editorialFaqs,
} from "app/components/TreatmentEditorialContent";
import { categoryContent } from "app/components/pageContent";
import { Constants } from "app/Constants";
import source from "app/content/clinic-treatment-updates.json";
import englishSource from "app/content/clinic-treatment-updates-en.json";

export type ClinicTreatmentKey = keyof typeof source;
export function clinicTreatmentMetadata(
  pageKey: ClinicTreatmentKey,
  locale: "de" | "en" = "de",
): Metadata {
  const page = (locale === "de" ? source : englishSource)[pageKey];
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical: page.canonical,
      languages: {
        de: locale === "de" ? page.canonical : page.alternate,
        en: locale === "en" ? page.canonical : page.alternate,
        "x-default": locale === "de" ? page.canonical : page.alternate,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.canonical,
      type: "website",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 600,
          alt: "Praxis Jona",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/images/og-image.png"],
      title: page.title,
      description: page.description,
    },
  };
}

export function ClinicTreatmentPage({
  pageKey,
  locale = "de",
}: {
  pageKey: ClinicTreatmentKey;
  locale?: "de" | "en";
}) {
  const content = getTreatmentEditorialContent(pageKey, locale);
  const { page, title, paragraphs, body, bookingUrls } = content;
  const faq = editorialFaqs(body);
  const isAesthetic = pageKey === "profhilo";
  const category = isAesthetic
    ? locale === "de"
      ? categoryContent.aestheticDe
      : categoryContent.aestheticEn
    : locale === "de"
      ? categoryContent.longevityDe
      : categoryContent.longevityEn;
  const priceHref = `${locale === "en" ? (isAesthetic ? "/en/aesthetics/prices" : "/en/prevention-longevity/prices") : isAesthetic ? "/aesthetik/preise" : "/praevention-longevity/preise"}#${pageKey === "nutrition" ? "ernaehrungsmedizin" : isAesthetic ? "skinbooster" : "abnehmspritze"}`;
  const facts: TreatmentFact[] = content.table
    ? content.table.rows!.map((row) => ({
        title: row[0],
        icon: CreditCardIcon,
        body: (
          <>
            {content.table!.headers![1]}: <strong>{row[1]}</strong>
            {isAesthetic && (
              <>
                <br />
                {content.table!.headers![2]}: <strong>{row[2]}</strong>
              </>
            )}
          </>
        ),
      }))
    : [
        ...(locale === "de" ? source : englishSource).nutrition.blocks
          .slice(3, 5)
          .map((block) => {
            const text = block.text!;
            const separator = text.indexOf(":");
            return {
              title: text.slice(0, separator),
              icon: CalendarDaysIcon,
              body: <strong>{text.slice(separator + 1).trim()}</strong>,
            };
          }),
        {
          title: locale === "de" ? "Ärztin" : "Physician",
          icon: UserIcon,
          body: <strong>Dr. med. Jonida Gjolli</strong>,
        },
      ];
  const image =
    pageKey === "weightLoss"
      ? {
          src: "/images/leistungen/glp1-syringe.png",
          alt:
            locale === "de"
              ? "Medizinische Gewichtsreduktion in der Praxis Jona"
              : "Medical weight management at Praxis Jona",
          contain: true,
        }
      : {
          src: isAesthetic
            ? "/images/clinic/clinic-philo-2025.jpg"
            : "/images/clinic/clinic-newA.jpg",
          alt:
            locale === "de"
              ? "Behandlungsraum der Praxis Jona in Berlin-Mitte"
              : "Treatment room at Praxis Jona in Berlin-Mitte",
          objectPositionClass: "object-[22%_50%]",
        };
  const primaryClass =
    "inline-flex justify-center rounded-xl bg-primary px-6 py-3 text-base font-serif font-medium text-white shadow-sm transition hover:bg-primaryDarker";
  const actions = (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {content.contactHref ? (
        <Link href={content.contactHref} className={primaryClass}>
          {content.heroLabel}
        </Link>
      ) : (
        <AppointmentBookingButton
          locale={locale}
          urls={bookingUrls}
          trackingPlacement="service-hero"
          className={primaryClass}
        >
          {content.heroLabel}
        </AppointmentBookingButton>
      )}
      <Link
        href={priceHref}
        className="inline-flex justify-center rounded-xl border border-primary/20 bg-white px-6 py-3 text-base font-serif font-medium text-primary transition hover:border-primary/40 hover:bg-stone-50"
      >
        {locale === "de" ? "Preise ansehen" : "View prices"}
      </Link>
    </div>
  );
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: title,
        description: paragraphs[0],
        url: `${Constants.baseUrl}${page.canonical}`,
        provider: { "@id": `${Constants.baseUrl}/#organization` },
        areaServed: "Berlin-Mitte",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Praxis Jona",
            item: Constants.baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: `${Constants.baseUrl}${page.canonical}`,
          },
        ],
      },
      ...(faq.items.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faq.items.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer.map((block) => block.text).join(" "),
                },
              })),
            },
          ]
        : []),
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="overflow-hidden bg-white">
        <TreatmentDetailHero
          title={title}
          eyebrow={
            isAesthetic
              ? locale === "de"
                ? "Skinbooster & regenerative Hauttherapien"
                : "Skin boosters & regenerative skin therapies"
              : locale === "de"
                ? "Prävention & Longevity"
                : "Prevention & Longevity"
          }
          paragraphs={paragraphs}
          image={image}
          actions={actions}
          facts={facts}
        />
        <TreatmentEditorialBody
          blocks={body}
          pageKey={pageKey}
          locale={locale}
          bookingUrls={bookingUrls}
        />
        <TreatmentRelatedCards
          title={locale === "de" ? "Weitere Leistungen" : "More services"}
          locale={locale}
          items={category.sections[0].services
            .filter((item) => item.href && item.href !== page.canonical)
            .slice(0, 3)
            .map((item) => ({
              title: item.title,
              href: item.href!,
              description: item.description ?? "",
            }))}
        />
      </div>
    </>
  );
}
