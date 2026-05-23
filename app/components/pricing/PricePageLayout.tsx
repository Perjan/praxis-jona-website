import Link from "next/link";
import { Constants } from "app/Constants";
import AppointmentBookingButton from "app/components/AppointmentBookingButton";
import PricingTableSection from "./PricingTableSection";
import type { PricingPageConfig } from "./pricingData";
import { buildPricingJsonLd } from "./pricingSchema";

export default function PricePageLayout({ config }: { config: PricingPageConfig }) {
  const jsonLd = buildPricingJsonLd(config);
  const allPricesLabel = config.locale === "de" ? "Alle Preise" : "All prices";
  const ctaTitle = config.locale === "de" ? "Preis im Kontext klären" : "Clarify pricing in context";
  const ctaText =
    config.locale === "de"
      ? "Die Tabellen geben Orientierung. Im Termin klären wir, welche Leistung medizinisch sinnvoll ist und welche Kosten konkret entstehen."
      : "The tables provide orientation. During consultation, we clarify which service makes medical sense and which costs apply.";
  const ctaButton = config.locale === "de" ? "Termin buchen" : "Book appointment";

  return (
    <main className="bg-[#f7f7f3] text-primaryLighter">
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}

      <section className="bg-gradient-to-br from-[#f5efe8] via-[#e9eef1] to-[#cfe0ee] px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primaryLighter/70">
            {config.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-tight text-primaryLighter md:text-7xl">
            {config.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-primaryLighter/80 md:text-xl">
            {config.intro}
          </p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto max-w-7xl">
          <nav aria-label={allPricesLabel} className="flex flex-wrap gap-3">
            {config.sections.map((section) => (
              <a
                key={section.slug}
                href={`#${section.slug}`}
                className="rounded-full border border-primaryLighter/20 bg-white/95 px-4 py-2 text-sm font-semibold text-primaryLighter shadow-sm transition hover:border-primaryLighter hover:bg-primaryLighter hover:text-white"
              >
                {section.title[config.locale]}
              </a>
            ))}
          </nav>

          {config.pillarLinks?.length ? (
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {config.pillarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-primaryLighter/15 bg-white/95 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h2 className="font-serif text-2xl font-semibold text-primaryLighter">{link.label}</h2>
                  <p className="mt-2 text-sm leading-6 text-primaryLighter/75">{link.description}</p>
                </Link>
              ))}
            </div>
          ) : null}

          <div className="mt-10 space-y-8">
            {config.sections.map((section) => (
              <PricingTableSection key={section.slug} section={section} locale={config.locale} />
            ))}
          </div>

          {config.faqs?.length ? (
            <section className="mt-10 rounded-xl bg-white/95 p-6 shadow-sm md:p-8">
              <h2 className="font-serif text-3xl font-semibold text-primaryLighter">FAQ</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {config.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-semibold text-primaryLighter">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-primaryLighter/75">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-10 rounded-xl bg-primaryLighter p-6 text-white md:p-8">
            <h2 className="font-serif text-3xl font-semibold">{ctaTitle}</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-white/80">{ctaText}</p>
            {config.key === "aesthetics" ? (
              <AppointmentBookingButton
                locale={config.locale}
                className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primaryLighter transition hover:bg-tealColor"
              >
                {ctaButton}
              </AppointmentBookingButton>
            ) : (
              <Link
                href={Constants.appointmentUrl}
                className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primaryLighter transition hover:bg-tealColor"
              >
                {ctaButton}
              </Link>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
