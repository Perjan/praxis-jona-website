import { MotionSection } from "app/components/Motion";
import { formatPackageOffer, formatPrice, pricingSections, type PricingLocale, type PricingSection } from "./pricingData";

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
              <div key={`${section.slug}-${row.slug}`} className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
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
              </div>
            )),
          )}
        </div>
      </div>
    </MotionSection>
  );
}
