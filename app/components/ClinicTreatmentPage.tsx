import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Constants } from "app/Constants";
import BookingCtaLink from "app/components/BookingCtaLink";
import source from "app/content/clinic-treatment-updates.json";
import englishSource from "app/content/clinic-treatment-updates-en.json";

export type ClinicTreatmentKey = keyof typeof source;
type ContentBlock = {
  type: string;
  text?: string;
  href?: string;
  headers?: string[];
  rows?: string[][];
  items?: string[];
};

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
      images: [{ url: "/images/og-image.png", width: 1200, height: 600, alt: "Praxis Jona" }],
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
  const page = (locale === "de" ? source : englishSource)[pageKey];
  const tableLabel =
    pageKey === "profhilo"
      ? locale === "de"
        ? "Profhilo Preise"
        : "Profhilo prices"
      : locale === "de"
        ? "Betreuung und Preise"
        : "Care and prices";
  const service =
    page.service as keyof typeof Constants.appointmentUrlsByService;
  const bookingUrl = Constants.appointmentUrlsByService[service].private;
  const blocks = page.blocks as ContentBlock[];
  const faqs = blocks.flatMap((block, index) => {
    if (block.type !== "h2" || !block.text?.endsWith("?")) return [];
    const following = blocks.slice(index + 1);
    const nextHeading = following.findIndex((item) => item.type === "h2");
    const answer = following
      .slice(0, nextHeading < 0 ? undefined : nextHeading)
      .filter((item) => item.type === "p")
      .map((item) => item.text)
      .join(" ");
    return answer
      ? [
          {
            "@type": "Question",
            name: block.text,
            acceptedAnswer: { "@type": "Answer", text: answer },
          },
        ]
      : [];
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: blocks[0].text,
        description: blocks.find((block) => block.type === "p")?.text,
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
            name: blocks[0].text,
            item: `${Constants.baseUrl}${page.canonical}`,
          },
        ],
      },
      ...(faqs.length ? [{ "@type": "FAQPage", mainEntity: faqs }] : []),
    ],
  };
  return (
    <div className="bg-white py-12 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <article className="mx-auto max-w-4xl px-6 lg:px-8">
        {(page.blocks as ContentBlock[]).map((block, index) => {
          const key = `${pageKey}-${index}`;
          switch (block.type) {
            case "h1":
              return (
                <header key={key}>
                  <h1 className="mb-8 font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                    {block.text}
                  </h1>
                  {pageKey !== "nutrition" && (
                    <div className="relative mb-8 aspect-[2/1] overflow-hidden rounded-3xl">
                      <Image
                        src={
                          pageKey === "profhilo"
                            ? "/images/clinic/clinic-philo-2025.jpg"
                            : "/images/leistungen/glp1-syringe.png"
                        }
                        alt={
                          pageKey === "profhilo"
                            ? locale === "de"
                              ? "Behandlungsstuhl der Praxis Jona in Berlin-Mitte"
                              : "Treatment chair at Praxis Jona in Berlin-Mitte"
                            : locale === "de"
                              ? "Medizinische Gewichtsreduktion in der Praxis Jona"
                              : "Medical weight management at Praxis Jona"
                        }
                        fill
                        priority
                        sizes="(max-width: 896px) 100vw, 832px"
                        className={pageKey === "profhilo" ? "object-cover object-center" : "object-contain object-center"}
                      />
                    </div>
                  )}
                </header>
              );
            case "h2":
              return (
                <h2
                  key={key}
                  className="mb-4 mt-12 font-serif text-2xl font-semibold text-primary sm:text-3xl"
                >
                  {block.text}
                </h2>
              );
            case "booking":
              return (
                <div key={key} className="my-8">
                  <BookingCtaLink
                    href={bookingUrl}
                    placement={`clinic-${locale}-${pageKey}-${index}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-primary px-6 py-3 text-center font-semibold text-white transition hover:bg-primaryLighter focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {block.text}
                  </BookingCtaLink>
                </div>
              );
            case "link":
              return (
                <p key={key} className="my-6">
                  <Link
                    href={block.href!}
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    {block.text}
                  </Link>
                </p>
              );
            case "list":
            case "ordered": {
              const List = block.type === "ordered" ? "ol" : "ul";
              return (
                <List
                  key={key}
                  className={`my-6 space-y-3 pl-6 text-lg leading-8 text-primaryLighter ${block.type === "ordered" ? "list-decimal" : "list-disc"}`}
                >
                  {block.items!.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </List>
              );
            }
            case "table":
              return (
                <div
                  key={key}
                  role="region"
                  aria-label={tableLabel}
                  tabIndex={0}
                  className="my-8 overflow-x-auto rounded-2xl border border-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <table className="w-full min-w-[640px] text-left text-base leading-7">
                    <caption className="sr-only">{tableLabel}</caption>
                    <thead className="bg-lightBeige/60">
                      <tr>
                        {block.headers!.map((header) => (
                          <th
                            key={header}
                            scope="col"
                            className="px-5 py-4 font-semibold text-primary"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows!.map((row) => (
                        <tr key={row[0]} className="border-t border-primary/10">
                          {row.map((cell, column) =>
                            column === 0 ? (
                              <th
                                key={column}
                                scope="row"
                                className="px-5 py-4 font-medium text-primary"
                              >
                                {cell}
                              </th>
                            ) : (
                              <td
                                key={column}
                                className="px-5 py-4 text-primaryLighter"
                              >
                                {cell}
                              </td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            default: {
              const text = block.text ?? "";
              const intake =
                locale === "de"
                  ? "medizinischen Fragebogen"
                  : "medical questionnaire";
              const followUp =
                locale === "de"
                  ? "Online-Folgeformular"
                  : "online follow-up form";
              const linkedPhrase =
                pageKey === "weightLoss"
                  ? [intake, followUp].find((phrase) => text.includes(phrase))
                  : undefined;
              if (!linkedPhrase)
                return (
                  <p
                    key={key}
                    className="my-5 text-lg leading-8 text-primaryLighter"
                  >
                    {text}
                  </p>
                );
              const offset = text.indexOf(linkedPhrase);
              const href = `${locale === "en" ? "/en" : ""}/glp-1-check${linkedPhrase === followUp ? "/follow-up" : ""}`;
              return (
                <p
                  key={key}
                  className="my-5 text-lg leading-8 text-primaryLighter"
                >
                  {text.slice(0, offset)}
                  <Link
                    href={href}
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    {linkedPhrase}
                  </Link>
                  {text.slice(offset + linkedPhrase.length)}
                </p>
              );
            }
          }
        })}
      </article>
    </div>
  );
}
