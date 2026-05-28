import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import AppointmentBookingButton from "app/components/AppointmentBookingButton";
import { MotionSection } from "app/components/Motion";
import {
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

const treatmentCardImages: Record<
  string,
  {
    src: string;
    alt: Record<PricingLocale, string>;
    objectPositionClass?: string;
  }
> = {
  prp: {
    src: "/images/aesthetik/prp-model.jpg",
    alt: {
      de: "Weiße Frau mit Fokus auf Gesicht und Augenpartie für PRP Eigenbluttherapie",
      en: "White female model with focus on face and under-eye area for PRP treatment",
    },
    objectPositionClass: "object-[50%_38%]",
  },
  microneedling: {
    src: "/images/aesthetik/microneedling-model.jpg",
    alt: {
      de: "Weiße Frau mit Fokus auf Hautstruktur und Gesicht für medizinisches Microneedling",
      en: "White female model with focus on facial skin texture for medical microneedling",
    },
    objectPositionClass: "object-[50%_40%]",
  },
  skinbooster: {
    src: "/images/aesthetik/skinbooster-model.jpg",
    alt: {
      de: "Weiße Frau mit Fokus auf Feuchtigkeit und Hautqualität für Skinbooster",
      en: "White female model with focus on hydration and skin quality for skin boosters",
    },
    objectPositionClass: "object-[50%_38%]",
  },
  haarausfall: {
    src: "/images/aesthetik/hair-therapy-male-model.jpg",
    alt: {
      de: "Weißer Mann mit Fokus auf Haarlinie und Kopfhaut für Haartherapie",
      en: "White male model with focus on hairline and scalp for hair therapy",
    },
    objectPositionClass: "object-[50%_34%]",
  },
};

const treatmentCardImagesByRow: Record<
  string,
  {
    src: string;
    alt: Record<PricingLocale, string>;
    objectPositionClass?: string;
  }
> = {
  "prp-gesicht": {
    src: "/images/aesthetik/prp-face-model.jpg",
    alt: {
      de: "Weiße Frau mit frontaler Ansicht und Fokus auf Gesicht für PRP Gesicht",
      en: "White female model front-facing with focus on face for PRP face treatment",
    },
    objectPositionClass: "object-[50%_38%]",
  },
  "prp-augen": {
    src: "/images/aesthetik/prp-under-eye-model.jpg",
    alt: {
      de: "Weißer Mann in Dreiviertelansicht mit Fokus auf Augenpartie für PRP Augen",
      en: "White male model in three-quarter view with focus on under-eye area for PRP",
    },
    objectPositionClass: "object-[50%_36%]",
  },
  "prp-gesicht-hals": {
    src: "/images/aesthetik/prp-face-neck-model.jpg",
    alt: {
      de: "Weiße Frau in seitlicher Dreiviertelpose mit Fokus auf Gesicht und Hals für PRP",
      en: "White female model in side three-quarter pose with focus on face and neck for PRP",
    },
    objectPositionClass: "object-[50%_34%]",
  },
  "prp-gesicht-hals-dekollete": {
    src: "/images/aesthetik/prp-face-neck-decollete-model.jpg",
    alt: {
      de: "Weiße Frau mit sichtbarem Dekolleté und Fokus auf Gesicht, Hals und Dekolleté für PRP",
      en: "White female model with visible decollete and focus on face, neck and decollete for PRP",
    },
    objectPositionClass: "object-[50%_38%]",
  },
  "vampire-lifting": {
    src: "/images/aesthetik/prp-vampire-lifting-model.jpg",
    alt: {
      de: "Weiße Frau mit dunklem Haar in Dreiviertelpose für Vampire Lifting PRP",
      en: "White female model with dark hair in three-quarter pose for vampire lifting PRP",
    },
    objectPositionClass: "object-[50%_38%]",
  },
  "vampirelift-medizinisches-microneedling-gesicht": {
    src: "/images/aesthetik/microneedling-vampirelift-model.jpg",
    alt: {
      de: "Weiße Frau mit dunklem lockigem Haar in Dreiviertelpose für Vampirelift mit Microneedling",
      en: "White female model with dark curly hair in three-quarter pose for vampire lift microneedling",
    },
    objectPositionClass: "object-[50%_38%]",
  },
  "microneedling-gesicht": {
    src: "/images/aesthetik/microneedling-face-model.jpg",
    alt: {
      de: "Weißer Mann mit blondem Haar in frontaler Ansicht für Microneedling Gesicht",
      en: "White male model with blond hair front-facing for microneedling face",
    },
    objectPositionClass: "object-[50%_36%]",
  },
  "microneedling-gesicht-hals": {
    src: "/images/aesthetik/microneedling-face-neck-model.jpg",
    alt: {
      de: "Weiße Frau mit auburn Bob in seitlicher Pose für Microneedling Gesicht und Hals",
      en: "White female model with auburn bob in side pose for microneedling face and neck",
    },
    objectPositionClass: "object-[50%_36%]",
  },
  "microneedling-gesicht-hals-dekollete": {
    src: "/images/aesthetik/microneedling-face-neck-decollete-model.jpg",
    alt: {
      de: "Weiße Frau mit silberblondem Haar und sichtbarem Dekolleté für Microneedling Gesicht Hals Dekolleté",
      en: "White female model with silver-blonde hair and visible decollete for microneedling face neck decollete",
    },
    objectPositionClass: "object-[50%_38%]",
  },
  "microneedling-face-nctf": {
    src: "/images/aesthetik/microneedling-nctf-model.jpg",
    alt: {
      de: "Weiße Frau mit dunklem Pixie-Haarschnitt für Microneedling Face plus NCTF",
      en: "White female model with dark pixie haircut for microneedling face plus NCTF",
    },
    objectPositionClass: "object-[50%_38%]",
  },
  "microneedling-gesicht-exosome": {
    src: "/images/aesthetik/microneedling-exosome-model.jpg",
    alt: {
      de: "Weißer Mann mit Bart in seitlicher Pose für Microneedling Gesicht Exosome",
      en: "White male model with beard in side pose for microneedling face exosomes",
    },
    objectPositionClass: "object-[50%_36%]",
  },
  "nctf-ha-gesicht": {
    src: "/images/aesthetik/skinbooster-nctf-face-model.jpg",
    alt: {
      de: "Weiße Frau mit braunem schulterlangem Haar in frontaler Ansicht für NCTF HA Gesicht",
      en: "White female model with shoulder-length brown hair front-facing for NCTF HA face",
    },
    objectPositionClass: "object-[50%_38%]",
  },
  "nctf-ha-gesicht-hals": {
    src: "/images/aesthetik/skinbooster-nctf-face-neck-model.jpg",
    alt: {
      de: "Weißer Mann mit blondem Haar in Profilpose für NCTF HA Gesicht und Hals",
      en: "White male model with blond hair in profile pose for NCTF HA face and neck",
    },
    objectPositionClass: "object-[50%_36%]",
  },
  "nctf-ha-gesicht-hals-dekollete": {
    src: "/images/aesthetik/skinbooster-nctf-face-neck-decollete-model.jpg",
    alt: {
      de: "Weiße Frau mit silbergrauem welligem Haar und sichtbarem Dekolleté für NCTF HA",
      en: "White female model with silver-gray wavy hair and visible decollete for NCTF HA",
    },
    objectPositionClass: "object-[50%_38%]",
  },
  "philart-gesicht": {
    src: "/images/aesthetik/skinbooster-philart-face-model.jpg",
    alt: {
      de: "Weiße Frau mit kupferrotem Haar in seitlicher Pose für PhilArt Gesicht",
      en: "White female model with copper-red hair in side pose for PhilArt face",
    },
    objectPositionClass: "object-[50%_38%]",
  },
  "philart-auge": {
    src: "/images/aesthetik/skinbooster-philart-eye-model.jpg",
    alt: {
      de: "Weiße Frau mit schwarzem Pony in Nahaufnahme für PhilArt Auge",
      en: "White female model with black fringe in close-up for PhilArt eye treatment",
    },
    objectPositionClass: "object-[50%_40%]",
  },
  profhilo: {
    src: "/images/aesthetik/skinbooster-profhilo-model.jpg",
    alt: {
      de: "Weißer Mann mit sehr kurzem Haar in leicht gedrehter Frontalansicht für Profhilo",
      en: "White male model with very short hair in slight front turn for Profhilo",
    },
    objectPositionClass: "object-[50%_36%]",
  },
  "microneedling-haare": {
    src: "/images/aesthetik/hair-microneedling-male-model.jpg",
    alt: {
      de: "Weißer Mann mit Fokus auf Haarlinie und Kopfhaut für Microneedling Haare",
      en: "White male model with focus on hairline and scalp for hair microneedling",
    },
    objectPositionClass: "object-[50%_34%]",
  },
  "prp-haare": {
    src: "/images/aesthetik/hair-prp-male-model.jpg",
    alt: {
      de: "Weißer Mann mit Fokus auf Haarlinie und Kopfhaut für PRP Haare",
      en: "White male model with focus on hairline and scalp for PRP hair therapy",
    },
    objectPositionClass: "object-[50%_34%]",
  },
  "polynukleotide-haare": {
    src: "/images/aesthetik/hair-polynucleotides-male-model.jpg",
    alt: {
      de: "Weißer Mann mit Fokus auf Haarlinie und Kopfhaut für Polynukleotide Haare",
      en: "White male model with focus on hairline and scalp for polynucleotide hair therapy",
    },
    objectPositionClass: "object-[50%_34%]",
  },
};

const treatmentDurations: Record<string, Record<PricingLocale, string>> = {
  prp: { de: "45-60 Min.", en: "45-60 min" },
  microneedling: { de: "45-60 Min.", en: "45-60 min" },
  skinbooster: { de: "30-45 Min.", en: "30-45 min" },
  haarausfall: { de: "45-60 Min.", en: "45-60 min" },
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

function formatTreatmentCardPrice(row: PricingRow, locale: PricingLocale) {
  const formattedPrice = formatPrice(row.price, locale);

  if (typeof row.price?.amount !== "number") {
    return formattedPrice;
  }

  return `${locale === "en" ? "from" : "ab"} ${formattedPrice}`;
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
  const image = treatmentCardImagesByRow[row.slug] ?? treatmentCardImages[section.slug];
  const duration = treatmentDurations[section.slug]?.[locale];

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:ring-primary/20">
      {image && (
        <div className="relative overflow-hidden bg-lightBeige">
          <Image
            src={image.src}
            alt={image.alt[locale]}
            width={720}
            height={560}
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 92vw"
            className={`h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${image.objectPositionClass ?? "object-center"}`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-white/10 to-lightBeige/25" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-4">
        <h3 className="font-serif text-[1.45rem] font-semibold leading-[1.08] text-primary sm:text-xl md:min-h-[4.5rem] md:text-[1.05rem] lg:min-h-[4rem] lg:text-lg xl:text-xl">
          {row.label[locale]}
        </h3>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-primary/10 pt-4">
          <p className="font-serif text-[1.65rem] font-semibold leading-none text-primary tabular-nums md:text-xl xl:text-2xl">
            {formatTreatmentCardPrice(row, locale)}
          </p>
          {duration && (
            <div className="inline-flex min-h-9 items-center gap-2 rounded-full bg-lightBeige px-3 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/10">
              <ClockIcon className="h-4 w-4 stroke-[3]" aria-hidden="true" />
              <span>{duration}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-3 px-5 pb-5 text-sm font-semibold sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:pb-4">
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
