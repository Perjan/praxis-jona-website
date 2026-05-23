import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import AppointmentBookingButton from "app/components/AppointmentBookingButton";
import { MotionSection } from "app/components/Motion";
import {
  formatPackageOffer,
  formatPrice,
  pricingSections,
  type PricingLocale,
  type PricingRow,
  type PricingSection,
} from "./pricingData";

const treatmentPricingSectionsByCanonical: Record<string, PricingSection[]> = {
  "/aesthetik/prp-behandlung": [pricingSections.prp],
  "/en/aesthetics/prp-treatment": [pricingSections.prp],
  "/aesthetik/microneedling": [pricingSections.microneedling],
  "/en/aesthetics/microneedling": [pricingSections.microneedling],
  "/aesthetik/polynukleotide": [pricingSections.skinbooster],
  "/en/aesthetics/polynucleotides": [pricingSections.skinbooster],
  "/leistungen/haarausfall-berlin-mitte": [pricingSections.hairTherapy],
  "/en/services/hair-loss-berlin-mitte": [pricingSections.hairTherapy],
};

function getCardActions(section: PricingSection, row: PricingRow, locale: PricingLocale, canonical: string) {
  const bookingHref = row.bookingHref?.[locale] ?? section.bookingHref?.[locale];
  const bookingUrls = row.bookingUrls ?? section.bookingUrls;
  const detailHref = row.detailHref?.[locale] ?? section.detailHref?.[locale];
  const learnHref = detailHref === canonical ? `${canonical}#behandlungsdetails` : detailHref;

  return {
    bookingHref,
    bookingUrls,
    learnHref,
    bookingLabel: locale === "en" ? "Book appointment" : "Termin buchen",
    learnLabel: locale === "en" ? "Learn more" : "Mehr erfahren",
  };
}

function TreatmentPricingCard({
  section,
  row,
  locale,
  canonical,
}: {
  section: PricingSection;
  row: PricingRow;
  locale: PricingLocale;
  canonical: string;
}) {
  const actions = getCardActions(section, row, locale, canonical);
  const className = "rounded-lg border border-primary/10 bg-white p-5 shadow-sm";

  return (
    <div className={className}>
      <div className="flex min-h-[72px] flex-col justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primaryLighter/70">{section.title[locale]}</p>
          <h3 className="mt-2 font-serif text-xl font-semibold text-primary">{row.label[locale]}</h3>
        </div>
        <p className="text-2xl font-semibold text-primaryLighter">{formatPrice(row.price, locale)}</p>
      </div>

      {row.packageOffer && (
        <div className="mt-5 rounded-lg border border-tealColorDark/20 bg-tealColor/25 p-4">
          <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-tealColorDark">
            {row.packageOffer.badge?.[locale] ?? row.packageOffer.label[locale]}
          </div>
          <p className="mt-3 text-lg font-semibold text-primaryLighter">
            {formatPackageOffer(row.packageOffer, locale)}
          </p>
        </div>
      )}

      <div className="mt-5 flex flex-col gap-3 border-t border-primary/10 pt-4 text-sm font-semibold sm:flex-row sm:items-center sm:justify-between">
        {actions.learnHref && (
          <Link
            href={actions.learnHref}
            aria-label={`${row.label[locale]} ${actions.learnLabel}`}
            className="inline-flex items-center gap-2 text-primaryLighter underline decoration-primaryLighter/25 underline-offset-4 transition hover:decoration-primaryLighter"
          >
            {actions.learnLabel}
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
        {actions.bookingUrls ? (
          <AppointmentBookingButton
            locale={locale}
            urls={actions.bookingUrls}
            ariaLabel={`${row.label[locale]} ${actions.bookingLabel}`}
            className="inline-flex items-center justify-center rounded-lg bg-primaryLighter px-4 py-2 text-white transition hover:bg-tealColorDark"
          >
            {actions.bookingLabel}
          </AppointmentBookingButton>
        ) : actions.bookingHref ? (
          <Link href={actions.bookingHref} aria-label={`${row.label[locale]} ${actions.bookingLabel}`} className="inline-flex items-center justify-center rounded-lg bg-primaryLighter px-4 py-2 text-white transition hover:bg-tealColorDark">
            {actions.bookingLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default function TreatmentPricingBlock({
  canonical,
  locale,
}: {
  canonical: string;
  locale: PricingLocale;
}) {
  const sections = treatmentPricingSectionsByCanonical[canonical];

  if (!sections?.length) {
    return null;
  }

  return (
    <MotionSection className="bg-lightBeige/60 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">
            {locale === "en" ? "Prices" : "Preise"}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary">
            {locale === "en" ? "Price overview" : "Preisübersicht"}
          </h2>
          <p className="mt-3 text-base leading-7 text-primaryLighter">
            {locale === "en"
              ? "The exact treatment is planned medically according to findings, area and goal."
              : "Die genaue Behandlung wird nach Hautbefund, Areal und Zielsetzung ärztlich geplant."}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sections.flatMap((section) =>
            section.rows.map((row) => (
              <TreatmentPricingCard key={`${section.slug}-${row.slug}`} section={section} row={row} locale={locale} canonical={canonical} />
            )),
          )}
        </div>
      </div>
    </MotionSection>
  );
}
