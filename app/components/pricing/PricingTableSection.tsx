import Link from "next/link";
import type { PricingLocale, PricingSection } from "./pricingData";
import { formatPrice, getLocalizedText } from "./pricingData";

export default function PricingTableSection({
  section,
  locale,
}: {
  section: PricingSection;
  locale: PricingLocale;
}) {
  const treatmentLabel = locale === "de" ? "Leistung" : "Service";
  const priceLabel = locale === "de" ? "Preis" : "Price";
  const noteLabel = locale === "de" ? "Hinweis" : "Note";
  const detailsLabel = locale === "de" ? "Details" : "Details";
  const bookingLabel = locale === "de" ? "Termin buchen" : "Book appointment";

  return (
    <section id={section.slug} className="scroll-mt-28 rounded-xl border border-[#d8e0df] bg-white/95 p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-primaryLighter md:text-4xl">
            {section.title[locale]}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-primaryLighter/80">
            {section.description[locale]}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {section.detailHref?.[locale] && (
            <Link
              href={section.detailHref[locale]}
              className="inline-flex rounded-lg border border-primaryLighter px-4 py-2 text-sm font-semibold text-primaryLighter transition hover:bg-primaryLighter hover:text-white"
            >
              {detailsLabel}
            </Link>
          )}
          {section.bookingHref?.[locale] && (
            <Link
              href={section.bookingHref[locale]}
              className="inline-flex rounded-lg bg-primaryLighter px-4 py-2 text-sm font-semibold text-white transition hover:bg-tealColorDark"
            >
              {bookingLabel}
            </Link>
          )}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="border-b border-primaryLighter/25 text-sm uppercase tracking-[0.08em] text-primaryLighter/70">
              <th className="py-3 pr-5 font-semibold">{treatmentLabel}</th>
              <th className="py-3 pr-5 font-semibold">{priceLabel}</th>
              <th className="py-3 font-semibold">{noteLabel}</th>
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row) => (
              <tr key={row.slug} className="border-b border-primaryLighter/10 last:border-b-0">
                <td className="py-4 pr-5 align-top">
                  <div className="font-semibold text-primaryLighter">{row.label[locale]}</div>
                  {row.description?.[locale] && (
                    <div className="mt-1 text-sm leading-6 text-primaryLighter/70">{row.description[locale]}</div>
                  )}
                </td>
                <td className="whitespace-nowrap py-4 pr-5 align-top font-semibold text-primaryLighter">
                  {formatPrice(row.price, locale)}
                </td>
                <td className="py-4 align-top text-sm leading-6 text-primaryLighter/75">
                  {[getLocalizedText(row.price?.billingNote, locale), getLocalizedText(row.note, locale)]
                    .filter(Boolean)
                    .join(" · ") || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {section.notes?.length ? (
        <div className="mt-5 space-y-2 text-sm leading-6 text-primaryLighter/70">
          {section.notes.map((note) => (
            <p key={note[locale]}>{note[locale]}</p>
          ))}
        </div>
      ) : null}
    </section>
  );
}
