import { Constants } from "app/Constants";
import type { AppointmentBookingUrls } from "app/Constants";

export type PricingLocale = "de" | "en";
export type PricingPillar = "aesthetics" | "healthLongevity" | "internalMedicine";

type LocalizedText = Record<PricingLocale, string>;

export type PriceValue = {
  amount?: number;
  currency: "EUR";
  prefix?: LocalizedText;
  billingNote?: LocalizedText;
  goaeNote?: boolean;
  displayOverride?: LocalizedText;
};

export type PackageOffer = {
  quantity: number;
  price: PriceValue;
  label: LocalizedText;
  badge?: LocalizedText;
};

export type PricingRow = {
  slug: string;
  label: LocalizedText;
  description?: LocalizedText;
  price?: PriceValue;
  packageOffer?: PackageOffer;
  detailHref?: LocalizedText;
  bookingHref?: LocalizedText;
  bookingUrls?: AppointmentBookingUrls;
  note?: LocalizedText;
  discountEligible?: boolean;
};

export type PricingSection = {
  slug: string;
  pillar: PricingPillar;
  title: LocalizedText;
  description: LocalizedText;
  rows: PricingRow[];
  notes?: LocalizedText[];
  detailHref?: LocalizedText;
  bookingHref?: LocalizedText;
  bookingUrls?: AppointmentBookingUrls;
};

export type PricingPageKey = "global" | PricingPillar;

export type PricingPageConfig = {
  key: PricingPageKey;
  locale: PricingLocale;
  title: string;
  description: string;
  canonical: string;
  alternate: string;
  eyebrow: string;
  intro: string;
  sections: PricingSection[];
  breadcrumbs: Array<{ name: string; href: string }>;
  pillarLinks?: Array<{ label: string; href: string; description: string }>;
  faqs?: Array<{ question: string; answer: string }>;
};

const fromPrefix: LocalizedText = { de: "ab", en: "from" };
const goae: LocalizedText = { de: "nach GOÄ", en: "according to GOÄ" };
const byConsultation: LocalizedText = {
  de: "wird individuell besprochen",
  en: "discussed individually",
};
const appointmentHref: LocalizedText = {
  de: Constants.appointmentUrl,
  en: Constants.appointmentUrl,
};
const threeTreatmentBadge: LocalizedText = { de: "3er Paket", en: "3-treatment package" };
const prpAestheticHref = { de: "/aesthetik/prp-behandlung", en: "/en/aesthetics/prp-treatment" } satisfies LocalizedText;
const microneedlingHref = { de: "/aesthetik/microneedling", en: "/en/aesthetics/microneedling" } satisfies LocalizedText;
const skinboosterHref = { de: "/aesthetik/polynukleotide", en: "/en/aesthetics/polynucleotides" } satisfies LocalizedText;
const hairTherapyHref = { de: "/leistungen/haarausfall-berlin-mitte", en: "/en/services/hair-loss-berlin-mitte" } satisfies LocalizedText;
const prpHairHref = { de: "/leistungen/prp-haarausfall", en: "/en/services/prp-hair-loss" } satisfies LocalizedText;

export const pricingSections = {
  botox: {
    slug: "botox",
    pillar: "aesthetics",
    title: { de: "Botulinumtoxin", en: "Botulinum toxin" },
    description: {
      de: "Preise für Botulinumtoxin-Behandlungen nach Zone. Die genaue Planung erfolgt nach ärztlicher Beratung.",
      en: "Prices for botulinum toxin treatments by area. The exact plan is confirmed after medical consultation.",
    },
    detailHref: { de: "/botox-preise", en: "/en/botox-prices" },
    bookingHref: appointmentHref,
    bookingUrls: Constants.appointmentUrlsByService.botulinumtoxin,
    notes: [
      {
        de: "Wenn nach der Beratung eine Behandlung geplant wird, ist die Beratung kostenlos.",
        en: "If treatment is planned after consultation, the consultation is free.",
      },
    ],
    rows: [
      { slug: "beratung", label: { de: "Beratung ohne Behandlung", en: "Consultation without treatment" }, price: { amount: 49, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinConsultation },
      { slug: "zornesfalte", label: { de: "Zornesfalte", en: "Frown lines" }, price: { amount: 199, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinFrownLines },
      { slug: "stirnfalten", label: { de: "Stirnfalten", en: "Forehead wrinkles" }, price: { amount: 199, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinForehead },
      { slug: "browlift", label: { de: "Browlift", en: "Brow lift" }, price: { amount: 199, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinBrowLift },
      { slug: "kraehenfuesse", label: { de: "Krähenfüße", en: "Crow's feet" }, price: { amount: 199, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinCrowsFeet },
      { slug: "bunny-lines", label: { de: "Bunny Lines", en: "Bunny lines" }, price: { amount: 199, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinBunnyLines },
      { slug: "gummy-smile", label: { de: "Gummy Smile", en: "Gummy smile" }, price: { amount: 199, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinGummySmile },
      { slug: "lip-flip", label: { de: "Lip Flip", en: "Lip flip" }, price: { amount: 199, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinLipFlip },
      { slug: "mundwinkel", label: { de: "Mundwinkel anheben", en: "Lifting the corners of the mouth" }, price: { amount: 199, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinMouthCorners },
      { slug: "2-zonen", label: { de: "2-Zonen", en: "2 zones" }, price: { amount: 299, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinTwoZones, discountEligible: true },
      { slug: "3-zonen", label: { de: "3-Zonen", en: "3 zones" }, price: { amount: 349, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinThreeZones, discountEligible: true },
      { slug: "4-zonen", label: { de: "4-Zonen", en: "4 zones" }, price: { amount: 499, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinFourZones, discountEligible: true },
      { slug: "erdbeerkinn", label: { de: "Erdbeerkinn", en: "Strawberry chin" }, price: { amount: 199, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinChin },
      { slug: "platysma", label: { de: "Platysma (Nefertiti Lift)", en: "Platysma (Nefertiti lift)" }, price: { amount: 314, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinPlatysma, discountEligible: true },
      { slug: "bruxismus", label: { de: "Bruxismus oder Faceslimming", en: "Bruxism or face slimming" }, price: { amount: 349, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinBruxism, discountEligible: true },
      { slug: "trapezmuskel", label: { de: "Barbie Botox / Trapezmuskel-Behandlung", en: "Barbie Botox / trapezius treatment" }, price: { amount: 399, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinTrapezius, discountEligible: true },
      { slug: "hyperhidrose", label: { de: "Schweißdrüsenbehandlung (Hyperhidrose)", en: "Sweat gland treatment (hyperhidrosis)" }, price: { amount: 449, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinHyperhidrosis, discountEligible: true },
      { slug: "migraene", label: { de: "Chronische Migräne", en: "Chronic migraine" }, price: { amount: 449, currency: "EUR", prefix: fromPrefix }, bookingUrls: Constants.appointmentUrlsByService.botulinumtoxinMigraine, discountEligible: true },
    ],
  },
  prp: {
    slug: "prp",
    pillar: "aesthetics",
    title: { de: "PRP / Eigenbluttherapie", en: "PRP / autologous blood therapy" },
    description: {
      de: "PRP-Behandlungen für Gesicht, Augenpartie, Hals, Dekolleté und Vampire Lifting nach ärztlicher Einschätzung.",
      en: "PRP treatments for face, under-eye area, neck, decollete and vampire lifting after medical assessment.",
    },
    detailHref: prpAestheticHref,
    bookingHref: appointmentHref,
    bookingUrls: Constants.appointmentUrlsByService.prp,
    rows: [
      { slug: "prp-gesicht", label: { de: "PRP Gesicht", en: "PRP face" }, price: { amount: 199, currency: "EUR" }, detailHref: { de: `${prpAestheticHref.de}/prp-gesicht`, en: `${prpAestheticHref.en}#prp-face` }, bookingUrls: Constants.appointmentUrlsByService.prpFace, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 549, currency: "EUR" } } },
      { slug: "prp-augen", label: { de: "PRP Augen", en: "PRP under-eye area" }, price: { amount: 199, currency: "EUR" }, detailHref: { de: `${prpAestheticHref.de}/prp-augenregion-bei-dunklen-augenringen`, en: `${prpAestheticHref.en}#prp-under-eye-area-for-darker-circles` }, bookingUrls: Constants.appointmentUrlsByService.prpUnderEye, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 549, currency: "EUR" } } },
      { slug: "prp-gesicht-hals", label: { de: "PRP Gesicht + Hals", en: "PRP face + neck" }, price: { amount: 249, currency: "EUR" }, detailHref: { de: `${prpAestheticHref.de}/prp-gesicht-hals-und-dekollete`, en: `${prpAestheticHref.en}#prp-face-neck-and-decollete` }, bookingUrls: Constants.appointmentUrlsByService.prpFaceNeck, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 669, currency: "EUR" } } },
      { slug: "prp-gesicht-hals-dekollete", label: { de: "PRP Gesicht + Hals + Dekolleté", en: "PRP face + neck + decollete" }, price: { amount: 299, currency: "EUR" }, detailHref: { de: `${prpAestheticHref.de}/prp-gesicht-hals-und-dekollete`, en: `${prpAestheticHref.en}#prp-face-neck-and-decollete` }, bookingUrls: Constants.appointmentUrlsByService.prpFaceNeckDecollete, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 799, currency: "EUR" } } },
      { slug: "vampire-lifting", label: { de: "Vampire Lifting", en: "Vampire lifting" }, price: { amount: 349, currency: "EUR" }, detailHref: { de: `${prpAestheticHref.de}/vampire-lifting-prp-kombiniert-mit-medizinischem-microneedling`, en: `${prpAestheticHref.en}#vampire-lifting-prp-combined-with-microneedling` }, bookingUrls: Constants.appointmentUrlsByService.vampireLifting, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 999, currency: "EUR" } } },
    ],
  },
  microneedling: {
    slug: "microneedling",
    pillar: "aesthetics",
    title: { de: "Medizinisches Microneedling", en: "Medical microneedling" },
    description: {
      de: "Medizinisches Microneedling mit Dermapen® für Gesicht, Hals und Dekolleté; Exosome bleiben diesem Bereich zugeordnet.",
      en: "Medical microneedling with Dermapen® for face, neck and decollete; exosomes are grouped with this treatment area.",
    },
    detailHref: microneedlingHref,
    bookingHref: appointmentHref,
    bookingUrls: Constants.appointmentUrlsByService.microneedling,
    rows: [
      { slug: "microneedling-gesicht", label: { de: "Microneedling Gesicht", en: "Microneedling face" }, price: { amount: 249, currency: "EUR" }, detailHref: { de: `${microneedlingHref.de}/microneedling-gesicht`, en: `${microneedlingHref.en}#what-is-medical-microneedling` }, bookingUrls: Constants.appointmentUrlsByService.microneedlingFace, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 669, currency: "EUR" } } },
      { slug: "microneedling-gesicht-hals", label: { de: "Microneedling Gesicht + Hals", en: "Microneedling face + neck" }, price: { amount: 299, currency: "EUR" }, detailHref: { de: `${microneedlingHref.de}/microneedling-gesicht-hals`, en: `${microneedlingHref.en}#when-this-may-be-suitable` }, bookingUrls: Constants.appointmentUrlsByService.microneedlingFaceNeck, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 799, currency: "EUR" } } },
      { slug: "microneedling-gesicht-hals-dekollete", label: { de: "Microneedling Gesicht + Hals + Dekolleté", en: "Microneedling face + neck + decollete" }, price: { amount: 379, currency: "EUR" }, detailHref: { de: `${microneedlingHref.de}/microneedling-gesicht-hals-dekollete`, en: `${microneedlingHref.en}#when-this-may-be-suitable` }, bookingUrls: Constants.appointmentUrlsByService.microneedlingFaceNeckDecollete, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 999, currency: "EUR" } } },
      { slug: "microneedling-gesicht-exosome", label: { de: "Microneedling Gesicht Exosome", en: "Microneedling face exosomes" }, price: { amount: 299, currency: "EUR" }, detailHref: { de: `${microneedlingHref.de}/microneedling-gesicht-exosome`, en: `${microneedlingHref.en}#what-is-medical-microneedling` }, bookingUrls: Constants.appointmentUrlsByService.microneedlingFaceExosomes },
    ],
  },
  skinbooster: {
    slug: "skinbooster",
    pillar: "aesthetics",
    title: { de: "Skinbooster & regenerative Hauttherapien", en: "Skin boosters & regenerative skin therapies" },
    description: {
      de: "NCTF® HA und PhilArt® Skinbooster für Hautqualität, Feuchtigkeit und regenerative Behandlungsziele.",
      en: "NCTF® HA and PhilArt® skin boosters for skin quality, hydration and regenerative treatment goals.",
    },
    detailHref: skinboosterHref,
    bookingHref: appointmentHref,
    bookingUrls: Constants.appointmentUrlsByService.skinbooster,
    rows: [
      { slug: "nctf-ha-gesicht", label: { de: "NCTF HA Gesicht", en: "NCTF HA face" }, price: { amount: 249, currency: "EUR" }, detailHref: { de: `${skinboosterHref.de}#nct-145-ha`, en: `${skinboosterHref.en}#nct-145-ha` }, bookingUrls: Constants.appointmentUrlsByService.skinboosterNctfFace, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 669, currency: "EUR" } } },
      { slug: "nctf-ha-gesicht-hals", label: { de: "NCTF HA Gesicht + Hals", en: "NCTF HA face + neck" }, price: { amount: 299, currency: "EUR" }, detailHref: { de: `${skinboosterHref.de}#nct-145-ha`, en: `${skinboosterHref.en}#nct-145-ha` }, bookingUrls: Constants.appointmentUrlsByService.skinboosterNctfFaceNeck, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 799, currency: "EUR" } } },
      { slug: "nctf-ha-gesicht-hals-dekollete", label: { de: "NCTF HA Gesicht + Hals + Dekolleté", en: "NCTF HA face + neck + decollete" }, price: { amount: 379, currency: "EUR" }, detailHref: { de: `${skinboosterHref.de}#nct-145-ha`, en: `${skinboosterHref.en}#nct-145-ha` }, bookingUrls: Constants.appointmentUrlsByService.skinboosterNctfFaceNeckDecollete, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 999, currency: "EUR" } } },
      { slug: "philart-gesicht", label: { de: "PhilArt Gesicht", en: "PhilArt face" }, price: { amount: 299, currency: "EUR" }, detailHref: { de: `${skinboosterHref.de}#polynukleotide-philart`, en: `${skinboosterHref.en}#polynucleotides-philart` }, bookingUrls: Constants.appointmentUrlsByService.skinboosterPhilartFace, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 799, currency: "EUR" } } },
      { slug: "philart-auge", label: { de: "PhilArt Auge", en: "PhilArt eye" }, price: { amount: 299, currency: "EUR" }, detailHref: { de: `${skinboosterHref.de}#polynukleotide-philart`, en: `${skinboosterHref.en}#polynucleotides-philart` }, bookingUrls: Constants.appointmentUrlsByService.skinboosterPhilartEye, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 799, currency: "EUR" } } },
    ],
  },
  hairTherapy: {
    slug: "haarausfall",
    pillar: "aesthetics",
    title: { de: "Haartherapie bei Haarausfall", en: "Hair therapy for hair loss" },
    description: {
      de: "Regenerative Kopfhautbehandlungen bei Haarausfall, inklusive PRP und Microneedling nach Befund.",
      en: "Regenerative scalp treatments for hair loss, including PRP and microneedling depending on findings.",
    },
    detailHref: hairTherapyHref,
    bookingHref: appointmentHref,
    bookingUrls: Constants.appointmentUrlsByService.hairTherapy,
    rows: [
      { slug: "microneedling-haare", label: { de: "Microneedling Haare", en: "Microneedling hair/scalp" }, price: { amount: 249, currency: "EUR" }, detailHref: { de: `${hairTherapyHref.de}#medizinisches-microneedling-der-kopfhaut-bei-haarausfall`, en: `${hairTherapyHref.en}#when-this-may-be-suitable` }, bookingUrls: Constants.appointmentUrlsByService.hairMicroneedling, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 669, currency: "EUR" } } },
      { slug: "prp-haare", label: { de: "PRP Haare", en: "PRP hair/scalp" }, price: { amount: 249, currency: "EUR" }, detailHref: prpHairHref, bookingUrls: Constants.appointmentUrlsByService.hairPrp, packageOffer: { quantity: 3, label: threeTreatmentBadge, badge: threeTreatmentBadge, price: { amount: 669, currency: "EUR" } } },
    ],
  },
  nutrition: {
    slug: "ernaehrungsmedizin",
    pillar: "healthLongevity",
    title: { de: "Ernährungsmedizin", en: "Nutritional medicine" },
    description: {
      de: "Medizinische Ernährungsberatung, Pakete und Verlaufstermine als Selbstzahlerleistung.",
      en: "Medical nutrition consultation, packages and follow-up appointments as self-pay services.",
    },
    detailHref: { de: "/leistungen/ernaehrungsmedizin", en: "/en/services/nutritional-medicine" },
    bookingHref: appointmentHref,
    rows: [
      {
        slug: "beratung",
        label: { de: "Ernährungsberatung", en: "Nutrition consultation" },
        description: { de: "ca. 30 Minuten", en: "approx. 30 minutes" },
        price: { amount: 124, currency: "EUR", prefix: fromPrefix, billingNote: goae, goaeNote: true },
      },
      {
        slug: "basis",
        label: { de: "Paket BASIS", en: "BASIC package" },
        description: { de: "3 Termine, jeweils 30 Minuten", en: "3 appointments of 30 minutes each" },
        price: { amount: 249.51, currency: "EUR", billingNote: goae, goaeNote: true },
      },
      {
        slug: "intensiv",
        label: { de: "Paket INTENSIV", en: "INTENSIVE package" },
        description: { de: "5 Termine, jeweils 30 Minuten", en: "5 appointments of 30 minutes each" },
        price: { amount: 415.85, currency: "EUR", billingNote: goae, goaeNote: true },
      },
    ],
  },
  micronutrients: {
    slug: "mikronaehrstofftherapie",
    pillar: "healthLongevity",
    title: { de: "Mikronährstofftherapie", en: "Micronutrient therapy" },
    description: {
      de: "Laborbasierte Beratung und Therapieplanung für individuelle Nährstofffragen.",
      en: "Lab-based consultation and treatment planning for individual micronutrient questions.",
    },
    detailHref: { de: "/leistungen/mikronahrstoffanalyse", en: "/en/services/micronutrient-analysis" },
    bookingHref: appointmentHref,
    bookingUrls: Constants.appointmentUrlsByService.micronutrients,
    rows: [
      {
        slug: "naehrstofftherapie",
        label: { de: "Nährstofftherapie", en: "Micronutrient therapy" },
        description: { de: "Einmalig", en: "One-time" },
        price: { amount: 299, currency: "EUR" },
      },
    ],
  },
  glp1: {
    slug: "abnehmspritze",
    pillar: "healthLongevity",
    title: { de: "GLP-1 / Abnehmspritze", en: "GLP-1 / weight-loss injection" },
    description: {
      de: "Ärztliche Begleitung bei medikamentöser Gewichtsreduktion. Medikamentenkosten sind nur im Rundum-Sorglos-Paket enthalten.",
      en: "Medical support for medication-assisted weight management. Medication costs are only included in the all-inclusive package.",
    },
    detailHref: { de: "/leistungen/abnehmspritze", en: "/en/services/weight-loss-injection" },
    bookingHref: appointmentHref,
    rows: [
      {
        slug: "beratung-start",
        label: { de: "GLP-1 Beratung", en: "GLP-1 consultation" },
        description: { de: "ca. 30 Minuten", en: "approx. 30 minutes" },
        price: { amount: 124, currency: "EUR", prefix: fromPrefix, billingNote: goae, goaeNote: true },
      },
      {
        slug: "erhaltungsphase",
        label: { de: "Erhaltungsphase", en: "Maintenance phase" },
        description: { de: "ca. 15 Minuten", en: "approx. 15 minutes" },
        price: { amount: 50, currency: "EUR", prefix: fromPrefix, billingNote: goae, goaeNote: true },
      },
      { slug: "abnehmspritze-paket", label: { de: "Abnehmspritze", en: "Weight-loss injection package" }, price: { amount: 499, currency: "EUR" } },
      { slug: "rundum-sorglos", label: { de: "Abnehmspritze Rundum-Sorglos", en: "All-inclusive weight-loss injection" }, price: { amount: 1499, currency: "EUR" } },
    ],
  },
  privateCheckup: {
    slug: "private-check-up",
    pillar: "healthLongevity",
    title: { de: "Private Check-ups", en: "Private check-ups" },
    description: {
      de: "Erweiterte Vorsorgepakete mit ärztlicher Auswertung. Labor- und Zusatzleistungen können separat anfallen.",
      en: "Extended prevention packages with medical interpretation. Lab and additional services may be charged separately.",
    },
    detailHref: { de: "/leistungen/private-check-up", en: "/en/services/private-insurance-check-up" },
    bookingHref: appointmentHref,
    rows: [
      { slug: "silber", label: { de: "Silber", en: "Silver" }, price: { amount: 213.34, currency: "EUR", prefix: fromPrefix, billingNote: goae, goaeNote: true } },
      { slug: "gold", label: { de: "Gold", en: "Gold" }, price: { amount: 392.91, currency: "EUR", prefix: fromPrefix, billingNote: goae, goaeNote: true } },
    ],
  },
  prevention: {
    slug: "praevention",
    pillar: "healthLongevity",
    title: { de: "Prävention / Longevity Pakete", en: "Prevention / longevity packages" },
    description: {
      de: "Strukturierte Präventionspakete für Patientinnen und Patienten, die Gesundheit messbarer machen möchten.",
      en: "Structured prevention packages for patients who want to make health more measurable.",
    },
    detailHref: { de: "/praevention", en: "/en/prevention" },
    bookingHref: appointmentHref,
    rows: [
      { slug: "basic", label: { de: "BASIC", en: "BASIC" }, description: { de: "Fundament medizinischer Prävention", en: "Foundation of medical prevention" }, price: { amount: 1200, currency: "EUR", prefix: fromPrefix }, detailHref: { de: "/praevention/basic", en: "/en/prevention/basic" } },
      { slug: "medium", label: { de: "MEDIUM", en: "MEDIUM" }, description: { de: "Erweiterte Diagnostik und Stoffwechselparameter", en: "Extended diagnostics and metabolic parameters" }, price: { amount: 2400, currency: "EUR", prefix: fromPrefix }, detailHref: { de: "/praevention/medium", en: "/en/prevention/medium" } },
      { slug: "premium", label: { de: "PREMIUM", en: "PREMIUM" }, description: { de: "Erweiterte Bildgebung, Zellbiologie und tiefe Analyse", en: "Extended imaging, cell biology and deeper analysis" }, price: { amount: 4000, currency: "EUR", prefix: fromPrefix }, detailHref: { de: "/praevention/premium", en: "/en/prevention/premium" } },
    ],
  },
  ironInfusion: {
    slug: "eiseninfusion",
    pillar: "healthLongevity",
    title: { de: "Eiseninfusion", en: "Iron infusion" },
    description: {
      de: "Festpreis für eine Eiseninfusion bei nachgewiesenem Eisenmangel und passender Indikation.",
      en: "Fixed price for iron infusion when iron deficiency is documented and the indication is suitable.",
    },
    detailHref: { de: "/leistungen/eiseninfusion-kosten", en: "/en/services/iron-infusion-costs" },
    bookingHref: appointmentHref,
    bookingUrls: Constants.appointmentUrlsByService.ironInfusion,
    rows: [
      { slug: "eiseninfusion", label: { de: "Eiseninfusion", en: "Iron infusion" }, price: { amount: 150.95, currency: "EUR" } },
    ],
  },
  ultrasound: {
    slug: "ultraschall",
    pillar: "internalMedicine",
    title: { de: "Ultraschall / Diagnostik", en: "Ultrasound / diagnostics" },
    description: {
      de: "Ultraschallleistungen nach GOÄ. Bei medizinischer Indikation können Kosten von der Krankenkasse übernommen werden.",
      en: "Ultrasound services according to GOÄ. With medical indication, costs may be covered by health insurance.",
    },
    detailHref: { de: "/hausaerztliche-leistungen/ultraschalluntersuchung", en: "/en/general-medicine/ultrasound-examination" },
    bookingHref: appointmentHref,
    rows: [
      { slug: "bauchorgane", label: { de: "Ultraschall der Bauchorgane", en: "Abdominal ultrasound" }, price: { amount: 113.07, currency: "EUR", prefix: fromPrefix, billingNote: goae, goaeNote: true } },
      { slug: "schilddruese", label: { de: "Ultraschall der Schilddrüse", en: "Thyroid ultrasound" }, price: { amount: 51.46, currency: "EUR", prefix: fromPrefix, billingNote: goae, goaeNote: true } },
      { slug: "carotisduplex", label: { de: "Carotisduplex", en: "Carotid duplex ultrasound" }, price: { amount: 157.96, currency: "EUR", prefix: fromPrefix, billingNote: goae, goaeNote: true } },
      { slug: "beinvenenduplex", label: { de: "Beinvenenduplex", en: "Leg vein duplex ultrasound" }, price: { amount: 113.07, currency: "EUR", prefix: fromPrefix, billingNote: goae, goaeNote: true } },
    ],
  },
  statutoryCare: {
    slug: "gesetzliche-leistungen",
    pillar: "internalMedicine",
    title: { de: "Innere Medizin und gesetzliche Leistungen", en: "Internal medicine and public insurance care" },
    description: {
      de: "Viele hausinternistische Leistungen sind Kassenleistungen oder werden individuell nach GOÄ abgerechnet.",
      en: "Many general internal medicine services are public insurance services or are billed individually according to GOÄ.",
    },
    detailHref: { de: "/hausaerztliche-leistungen", en: "/en/general-medicine" },
    bookingHref: appointmentHref,
    notes: [
      {
        de: "Für Leistungen ohne verlässlichen numerischen Preis zeigen wir bewusst keinen Schema-Preis an.",
        en: "For services without a reliable numeric price, we intentionally do not show a generic price.",
      },
    ],
    rows: [
      { slug: "akutsprechstunde", label: { de: "Akutsprechstunde", en: "Acute consultation" }, price: { currency: "EUR", displayOverride: byConsultation } },
      { slug: "gesetzlicher-check-up", label: { de: "Gesundheitsuntersuchung (Check-up)", en: "Preventive health check-up" }, price: { currency: "EUR", displayOverride: { de: "Kassenleistung nach Anspruch", en: "covered according to eligibility" } }, detailHref: { de: "/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up", en: "/en/general-medicine/preventive-check-up" } },
      { slug: "reiseimpfungen", label: { de: "Reiseimpfungen", en: "Travel vaccinations" }, price: { currency: "EUR", displayOverride: byConsultation }, detailHref: { de: "/leistungen/reiseimpfungen", en: "/en/services/travel-vaccinations" } },
    ],
  },
} satisfies Record<string, PricingSection>;

const pageSections: Record<PricingPageKey, PricingSection[]> = {
  global: [
    pricingSections.botox,
    pricingSections.prp,
    pricingSections.microneedling,
    pricingSections.skinbooster,
    pricingSections.hairTherapy,
    pricingSections.nutrition,
    pricingSections.micronutrients,
    pricingSections.glp1,
    pricingSections.privateCheckup,
    pricingSections.prevention,
    pricingSections.ironInfusion,
    pricingSections.ultrasound,
    pricingSections.statutoryCare,
  ],
  aesthetics: [
    pricingSections.botox,
    pricingSections.prp,
    pricingSections.microneedling,
    pricingSections.skinbooster,
    pricingSections.hairTherapy,
  ],
  healthLongevity: [
    pricingSections.nutrition,
    pricingSections.micronutrients,
    pricingSections.glp1,
    pricingSections.privateCheckup,
    pricingSections.prevention,
    pricingSections.ironInfusion,
  ],
  internalMedicine: [pricingSections.statutoryCare, pricingSections.ultrasound],
};

const pageCopy: Record<PricingPageKey, {
  title: LocalizedText;
  description: LocalizedText;
  eyebrow: LocalizedText;
  intro: LocalizedText;
  canonical: LocalizedText;
  alternate: LocalizedText;
}> = {
  global: {
    title: { de: "Preise Praxis Jona: Ästhetik, Health / Longevity und Innere Medizin", en: "Praxis Jona prices: aesthetics, health / longevity and internal medicine" },
    description: { de: "Preisübersicht der Praxis Jona in Berlin-Mitte mit Botulinumtoxin, Check-ups, Prävention, Ernährung, Infusionen und Ultraschall.", en: "Price overview for Praxis Jona in Berlin-Mitte including botulinum toxin, check-ups, prevention, nutrition, infusions and ultrasound." },
    eyebrow: { de: "Preisübersicht", en: "Price overview" },
    intro: { de: "Diese Seite bündelt die transparenten Selbstzahlerpreise aus den drei Säulen der Praxis. Bei medizinischen Leistungen hängt die finale Abrechnung von Indikation, Umfang und GOÄ ab.", en: "This page combines transparent self-pay prices across the practice's three pillars. For medical services, final billing depends on indication, scope and GOÄ." },
    canonical: { de: "/preise", en: "/en/prices" },
    alternate: { de: "/en/prices", en: "/preise" },
  },
  aesthetics: {
    title: { de: "Ästhetik Preise in Berlin-Mitte", en: "Aesthetics prices in Berlin-Mitte" },
    description: { de: "Preise für ästhetische Medizin in der Praxis Jona, inklusive Botulinumtoxin-Preisen und Links zu Detailseiten.", en: "Prices for aesthetic medicine at Praxis Jona, including botulinum toxin prices and links to detail pages." },
    eyebrow: { de: "Ästhetik Preise", en: "Aesthetics prices" },
    intro: { de: "Ästhetische Preise sollten Orientierung geben, aber nicht die ärztliche Planung ersetzen. Die genaue Behandlung wird nach Anatomie, Befund und Ziel besprochen.", en: "Aesthetic prices provide orientation, but do not replace medical planning. The exact treatment is discussed after assessing anatomy, findings and goals." },
    canonical: { de: "/aesthetik/preise", en: "/en/aesthetics/prices" },
    alternate: { de: "/en/aesthetics/prices", en: "/aesthetik/preise" },
  },
  healthLongevity: {
    title: { de: "Health / Longevity Preise in Berlin-Mitte", en: "Health / longevity prices in Berlin-Mitte" },
    description: { de: "Preise für Prävention, Check-ups, Ernährung, Mikronährstoffe, Eiseninfusion und medizinische Gewichtsreduktion.", en: "Prices for prevention, check-ups, nutrition, micronutrients, iron infusion and medical weight management." },
    eyebrow: { de: "Health / Longevity Preise", en: "Health / longevity prices" },
    intro: { de: "Health / Longevity-Leistungen werden individuell geplant. Die Tabellen zeigen die aktuell transparent benennbaren Start- und Paketpreise.", en: "Health / longevity services are planned individually. The tables show currently transparent starting and package prices." },
    canonical: { de: "/praevention-longevity/preise", en: "/en/prevention-longevity/prices" },
    alternate: { de: "/en/prevention-longevity/prices", en: "/praevention-longevity/preise" },
  },
  internalMedicine: {
    title: { de: "Innere Medizin Preise und Kosten", en: "Internal medicine prices and costs" },
    description: { de: "Kostenübersicht für hausinternistische Leistungen, gesetzliche Leistungen und Ultraschalldiagnostik in der Praxis Jona.", en: "Cost overview for general internal medicine, public insurance services and ultrasound diagnostics at Praxis Jona." },
    eyebrow: { de: "Innere Medizin Preise", en: "Internal medicine prices" },
    intro: { de: "Viele hausinternistische Leistungen sind Kassenleistungen. Wo keine seriöse Pauschale möglich ist, werden Kosten erst nach Indikation und Umfang besprochen.", en: "Many general internal medicine services are covered by public insurance. Where no responsible fixed price is possible, costs are discussed after indication and scope are clear." },
    canonical: { de: "/hausaerztliche-leistungen/preise", en: "/en/general-medicine/prices" },
    alternate: { de: "/en/general-medicine/prices", en: "/hausaerztliche-leistungen/preise" },
  },
};

const pillarLinks: Record<PricingLocale, PricingPageConfig["pillarLinks"]> = {
  de: [
    { label: "Ästhetik Preise", href: "/aesthetik/preise", description: "Botulinumtoxin und weitere ästhetische Leistungen." },
    { label: "Health / Longevity Preise", href: "/praevention-longevity/preise", description: "Check-ups, Prävention, Ernährung und Infusionen." },
    { label: "Innere Medizin Preise", href: "/hausaerztliche-leistungen/preise", description: "Kassenleistungen, Selbstzahlerleistungen und Diagnostik." },
  ],
  en: [
    { label: "Aesthetics prices", href: "/en/aesthetics/prices", description: "Botulinum toxin and other aesthetic services." },
    { label: "Health / longevity prices", href: "/en/prevention-longevity/prices", description: "Check-ups, prevention, nutrition and infusions." },
    { label: "Internal medicine prices", href: "/en/general-medicine/prices", description: "Public insurance care, self-pay services and diagnostics." },
  ],
};

const faqs: Record<PricingPageKey, Record<PricingLocale, PricingPageConfig["faqs"]>> = {
  global: {
    de: [
      { question: "Sind alle Preise Festpreise?", answer: "Nein. Festpreise sind als solche benannt. Viele ärztliche Leistungen werden nach GOÄ, Indikation und Aufwand abgerechnet." },
      { question: "Warum steht bei manchen Leistungen kein Preis?", answer: "Wenn kein verlässlicher numerischer Preis möglich ist, besprechen wir die Kosten individuell und geben keinen künstlichen Pauschalpreis an." },
      { question: "Kann ich direkt online buchen?", answer: "Ja. Termine können online über Doctolib gebucht werden." },
    ],
    en: [
      { question: "Are all prices fixed prices?", answer: "No. Fixed prices are labeled as such. Many medical services are billed according to GOÄ, indication and scope." },
      { question: "Why do some services not show a price?", answer: "If there is no reliable numeric price, we discuss costs individually and do not publish an artificial flat price." },
      { question: "Can I book online?", answer: "Yes. Appointments can be booked online via Doctolib." },
    ],
  },
  aesthetics: { de: undefined, en: undefined },
  healthLongevity: { de: undefined, en: undefined },
  internalMedicine: { de: undefined, en: undefined },
};

export function formatPrice(price: PriceValue | undefined, locale: PricingLocale): string {
  if (!price) {
    return locale === "de" ? "auf Anfrage" : "on request";
  }
  if (price.displayOverride) {
    return price.displayOverride[locale];
  }
  if (typeof price.amount !== "number") {
    return locale === "de" ? "auf Anfrage" : "on request";
  }

  const value = new Intl.NumberFormat(locale === "de" ? "de-DE" : "en-US", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: Number.isInteger(price.amount) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price.amount);
  const prefix = price.prefix?.[locale];
  return [prefix, value].filter(Boolean).join(" ");
}

export function formatPackageOffer(offer: PackageOffer | undefined, locale: PricingLocale): string | undefined {
  if (!offer) {
    return undefined;
  }

  return `${offer.label[locale]} ${formatPrice(offer.price, locale)}`;
}

export function getLocalizedText(text: LocalizedText | undefined, locale: PricingLocale): string | undefined {
  return text?.[locale];
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }
  return `${Constants.baseUrl}${path}`;
}

export function getPricingPageConfig(key: PricingPageKey, locale: PricingLocale): PricingPageConfig {
  const copy = pageCopy[key];
  const home = locale === "de" ? "/" : "/en";
  const homeLabel = locale === "de" ? "Startseite" : "Home";
  const pricesLabel = locale === "de" ? "Preise" : "Prices";

  return {
    key,
    locale,
    title: copy.title[locale],
    description: copy.description[locale],
    canonical: copy.canonical[locale],
    alternate: copy.alternate[locale],
    eyebrow: copy.eyebrow[locale],
    intro: copy.intro[locale],
    sections: pageSections[key],
    breadcrumbs: [
      { name: homeLabel, href: home },
      ...(key === "global" ? [] : [{ name: pricesLabel, href: locale === "de" ? "/preise" : "/en/prices" }]),
      { name: copy.eyebrow[locale], href: copy.canonical[locale] },
    ],
    pillarLinks: key === "global" ? pillarLinks[locale] : undefined,
    faqs: faqs[key][locale],
  };
}
