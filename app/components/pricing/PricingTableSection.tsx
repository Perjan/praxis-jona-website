import Link from "next/link";
import AppointmentBookingButton from "app/components/AppointmentBookingButton";
import type { PricingLocale, PricingSection } from "./pricingData";
import { formatPrice } from "./pricingData";

export default function PricingTableSection({
  section,
  locale,
}: {
  section: PricingSection;
  locale: PricingLocale;
}) {
  const treatmentLabel = locale === "de" ? "Leistung" : "Service";
  const priceLabel = locale === "de" ? "Preis" : "Price";
  const packageLabel = locale === "de" ? "3er Paket" : "3-treatment package";
  const detailsLabel = locale === "de" ? "Details" : "Details";
  const bookingLabel = locale === "de" ? "Termin buchen" : "Book appointment";
  const hasPackageOffers = section.rows.some((row) => row.packageOffer);

  return (
    <section id={section.slug} className="scroll-mt-28 rounded-xl border border-[#d8e0df] bg-white/95 p-4 shadow-sm sm:p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="break-words font-serif text-3xl font-semibold text-primaryLighter md:text-4xl">
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
          {section.bookingUrls ? (
            <AppointmentBookingButton
              locale={locale}
              urls={section.bookingUrls}
              className="inline-flex rounded-lg bg-primaryLighter px-4 py-2 text-sm font-semibold text-white transition hover:bg-tealColorDark"
            >
              {bookingLabel}
            </AppointmentBookingButton>
          ) : section.bookingHref?.[locale] ? (
            <Link
              href={section.bookingHref[locale]}
              className="inline-flex rounded-lg bg-primaryLighter px-4 py-2 text-sm font-semibold text-white transition hover:bg-tealColorDark"
            >
              {bookingLabel}
            </Link>
          ) : null}
        </div>
      </div>

      <div className="mt-6">
        <table className="w-full table-fixed border-collapse text-left">
          <colgroup>
            {hasPackageOffers ? (
              <>
                <col className="w-[46%] sm:w-[52%]" />
                <col className="w-[24%]" />
                <col className="w-[30%] sm:w-[24%]" />
              </>
            ) : (
              <>
                <col className="w-[64%] sm:w-[70%]" />
                <col className="w-[36%] sm:w-[30%]" />
              </>
            )}
          </colgroup>
          <thead>
            <tr className="border-b border-primaryLighter/25 text-xs uppercase tracking-[0.04em] text-primaryLighter/70 sm:text-sm sm:tracking-[0.08em]">
              <th className="py-3 pr-2 font-semibold sm:pr-5">{treatmentLabel}</th>
              <th className="py-3 px-1 text-right font-semibold sm:pr-5">{priceLabel}</th>
              {hasPackageOffers && (
                <th className="py-3 pl-1 text-right font-semibold">
                  <span className="sm:hidden">{locale === "de" ? "3er Paket" : "3-pack"}</span>
                  <span className="hidden sm:inline">{packageLabel}</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row) => (
              <tr key={row.slug} className="border-b border-primaryLighter/10 last:border-b-0">
                <td className="break-words py-4 pr-2 align-top sm:pr-5">
                  <div className="font-semibold text-primaryLighter">{row.label[locale]}</div>
                  {row.description?.[locale] && (
                    <div className="mt-1 text-sm leading-6 text-primaryLighter/70">{row.description[locale]}</div>
                  )}
                </td>
                <td className="break-words py-4 px-1 text-right align-top text-sm font-semibold text-primaryLighter sm:whitespace-nowrap sm:pr-5 sm:text-base">
                  {formatPrice(row.price, locale)}
                </td>
                {hasPackageOffers && (
                  <td className="break-words py-4 pl-1 text-right align-top text-sm font-semibold text-primaryLighter sm:whitespace-nowrap sm:text-base">
                    {row.packageOffer ? formatPrice(row.packageOffer.price, locale) : "-"}
                  </td>
                )}
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
