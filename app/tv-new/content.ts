import { Constants } from "app/Constants";
import { appsByLocale } from "app/data/apps";
import { categoryContent } from "app/components/pageContent";
import { absoluteUrl, formatPrice, pricingSections, type PricingRow } from "app/components/pricing/pricingData";

type SlideKind = "hero" | "service-price" | "feature-grid" | "app" | "social" | "review" | "team";

type PriceHighlight = {
  label: string;
  price: string;
  note?: string;
};

type FeatureItem = {
  title: string;
  text?: string;
};

type TeamMember = {
  image: string;
  name: string;
  role: string;
};

export type TVSlide = {
  id: string;
  kind: SlideKind;
  image: string;
  imageAlt: string;
  overlay?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  qrUrl: string;
  qrLabel: string;
  displayUrl?: string;
  eyebrow?: string;
  bullets?: string[];
  prices?: PriceHighlight[];
  features?: FeatureItem[];
  team?: TeamMember[];
  appImages?: string[];
  badgeImage?: string;
  handle?: string;
  reviewStars?: number;
};

const locale = "de" as const;
const longevity = categoryContent.longevityDe;
const aesthetics = categoryContent.aestheticDe;
const veltoApp = appsByLocale.de[0];

function localUrl(path: string): string {
  return absoluteUrl(path);
}

function displayUrl(pathOrUrl: string): string {
  return pathOrUrl.replace(/^https?:\/\//, "").replace(/^www\./, "");
}

function rowPrice(row: PricingRow, note?: string): PriceHighlight {
  return {
    label: row.label[locale],
    price: formatPrice(row.price, locale),
    note: note ?? row.description?.[locale],
  };
}

function findRow(rows: PricingRow[], slug: string): PricingRow {
  const row = rows.find((item) => item.slug === slug);
  if (!row) {
    throw new Error(`Missing pricing row for TV slide: ${slug}`);
  }
  return row;
}

const botoxRows = pricingSections.botox.rows;
const glp1Rows = pricingSections.glp1.rows;
const preventionRows = pricingSections.prevention.rows;
const ultrasoundRows = pricingSections.ultrasound.rows;
const ironInfusionRow = pricingSections.ironInfusion.rows[0];
const micronutrientRow = pricingSections.micronutrients.rows[0];
const backgrounds = {
  brand: "/tv-new/backgrounds/bg-brand.svg",
  clinical: "/tv-new/backgrounds/bg-clinical.svg",
  diagnostics: "/tv-new/backgrounds/bg-diagnostics.svg",
  social: "/tv-new/backgrounds/bg-social.svg",
} as const;

export const TV_NEW_SLIDES: TVSlide[] = [
  {
    id: "welcome",
    kind: "hero",
    image: backgrounds.brand,
    imageAlt: "Branded Praxis Jona TV background",
    overlay: "bg-[#FBF6EE]/74",
    kicker: "Praxis Jona",
    title: "Ganzheitliche Betreuung für ein gesundes Leben",
    subtitle: "Innere Medizin, Prävention und moderne ästhetische Medizin in Berlin-Mitte.",
    qrUrl: localUrl("/leistungen"),
    qrLabel: "Leistungen öffnen",
    displayUrl: displayUrl(localUrl("/leistungen")),
    bullets: ["Ärztlich geführt", "Zentral am Rosenthaler Platz", "Persönlich und strukturiert"],
  },
  {
    id: "botulinumtoxin",
    kind: "service-price",
    image: backgrounds.clinical,
    imageAlt: "Branded clinical TV background",
    overlay: "bg-[#FBF6EE]/70",
    kicker: pricingSections.botox.title.de,
    eyebrow: "Medizinisch präzise. Natürlich im Ergebnis.",
    title: "Mimik entspannen, Ausdruck bewahren",
    subtitle: pricingSections.botox.description.de,
    qrUrl: localUrl(pricingSections.botox.detailHref!.de),
    qrLabel: "Preise ansehen",
    displayUrl: displayUrl(localUrl(pricingSections.botox.detailHref!.de)),
    prices: [
      rowPrice(findRow(botoxRows, "browlift")),
      rowPrice(findRow(botoxRows, "zornesfalte")),
      rowPrice(findRow(botoxRows, "bruxismus")),
      rowPrice(findRow(botoxRows, "hyperhidrose")),
    ],
    bullets: ["Faltenbehandlung", "Bruxismus", "Hyperhidrose", "Chronische Migräne"],
  },
  {
    id: "private-medicine",
    kind: "feature-grid",
    image: backgrounds.brand,
    imageAlt: "Branded Praxis Jona service background",
    overlay: "bg-[#FBF6EE]/74",
    kicker: "Private Medizin",
    title: "Strukturierte Leistungen mit klarer Einordnung",
    subtitle: "Für Beschwerden, Prävention, Diagnostik und individuelle Gesundheitsziele.",
    qrUrl: localUrl("/leistungen"),
    qrLabel: "Übersicht öffnen",
    displayUrl: displayUrl(localUrl("/leistungen")),
    features: longevity.sections[0].services.slice(0, 6).map((service) => ({
      title: service.title,
      text: service.eyebrow,
    })),
  },
  {
    id: "glp1",
    kind: "service-price",
    image: backgrounds.clinical,
    imageAlt: "Branded clinical TV background",
    overlay: "bg-[#FBF6EE]/70",
    kicker: pricingSections.glp1.title.de,
    eyebrow: "Gewicht und Stoffwechsel",
    title: "Ärztlich begleitet abnehmen",
    subtitle: pricingSections.glp1.description.de,
    qrUrl: localUrl(pricingSections.glp1.detailHref!.de),
    qrLabel: "Mehr erfahren",
    displayUrl: displayUrl(localUrl(pricingSections.glp1.detailHref!.de)),
    prices: [
      rowPrice(findRow(glp1Rows, "beratung-start")),
      rowPrice(findRow(glp1Rows, "abnehmspritze-paket")),
      rowPrice(findRow(glp1Rows, "rundum-sorglos")),
    ],
    bullets: ["Medizinische Eignung prüfen", "Verlauf strukturieren", "Mit App-Begleitung möglich"],
  },
  {
    id: "micronutrients",
    kind: "service-price",
    image: backgrounds.diagnostics,
    imageAlt: "Branded diagnostics TV background",
    overlay: "bg-[#FBF6EE]/72",
    kicker: pricingSections.micronutrients.title.de,
    eyebrow: "Laborbasiert",
    title: "Klarheit statt Rätselraten",
    subtitle: pricingSections.micronutrients.description.de,
    qrUrl: localUrl(pricingSections.micronutrients.detailHref!.de),
    qrLabel: "Analyse öffnen",
    displayUrl: displayUrl(localUrl(pricingSections.micronutrients.detailHref!.de)),
    prices: [rowPrice(micronutrientRow)],
    bullets: ["Müdigkeit", "Haarausfall", "Infektanfälligkeit", "Gezielte Therapieplanung"],
  },
  {
    id: "infusion-iron",
    kind: "service-price",
    image: backgrounds.diagnostics,
    imageAlt: "Branded diagnostics TV background",
    overlay: "bg-[#FBF6EE]/72",
    kicker: "Infusionstherapie",
    eyebrow: pricingSections.ironInfusion.title.de,
    title: "Nährstoffe gezielt verfügbar machen",
    subtitle: "Infusionen kommen nach ärztlicher Einschätzung und bei passender Indikation infrage.",
    qrUrl: localUrl(pricingSections.ironInfusion.detailHref!.de),
    qrLabel: "Kosten ansehen",
    displayUrl: displayUrl(localUrl(pricingSections.ironInfusion.detailHref!.de)),
    prices: [rowPrice(ironInfusionRow, "Festpreis bei passender Indikation")],
    bullets: ["Bei relevantem Mangel", "Medizinisch überwacht", "Individuell geplant"],
  },
  {
    id: "prevention",
    kind: "service-price",
    image: backgrounds.brand,
    imageAlt: "Branded prevention TV background",
    overlay: "bg-[#FBF6EE]/74",
    kicker: pricingSections.prevention.title.de,
    eyebrow: "Gesundheit ist kein Zufall",
    title: "Prävention messbar machen",
    subtitle: pricingSections.prevention.description.de,
    qrUrl: localUrl(pricingSections.prevention.detailHref!.de),
    qrLabel: "Pakete öffnen",
    displayUrl: displayUrl(localUrl(pricingSections.prevention.detailHref!.de)),
    prices: preventionRows.map((row) => rowPrice(row)),
    bullets: ["Diagnostik", "Auswertung", "Konkreter Plan"],
  },
  {
    id: "ultrasound",
    kind: "service-price",
    image: backgrounds.diagnostics,
    imageAlt: "Branded diagnostics TV background",
    overlay: "bg-[#FBF6EE]/72",
    kicker: pricingSections.ultrasound.title.de,
    eyebrow: "Innere Medizin",
    title: "Diagnostik direkt in der Praxis",
    subtitle: pricingSections.ultrasound.description.de,
    qrUrl: localUrl(pricingSections.ultrasound.detailHref!.de),
    qrLabel: "Diagnostik öffnen",
    displayUrl: displayUrl(localUrl(pricingSections.ultrasound.detailHref!.de)),
    prices: [
      rowPrice(findRow(ultrasoundRows, "schilddruese")),
      rowPrice(findRow(ultrasoundRows, "bauchorgane")),
      rowPrice(findRow(ultrasoundRows, "carotisduplex")),
    ],
    bullets: ["Schilddrüse", "Bauchorgane", "Gefäße"],
  },
  {
    id: "velto",
    kind: "app",
    image: backgrounds.clinical,
    imageAlt: "Branded app TV background",
    overlay: "bg-[#FBF6EE]/70",
    kicker: "App",
    title: veltoApp.name,
    subtitle: "Fortschritt, Nebenwirkungen und Motivation an einem Ort.",
    qrUrl: veltoApp.downloadLink.ios ?? veltoApp.downloadLink.website!,
    qrLabel: "App laden",
    displayUrl: displayUrl(veltoApp.downloadLink.website!),
    bullets: veltoApp.benefits.slice(0, 4),
    appImages: ["/tv-new/assets/phone-1.png", "/tv-new/assets/phone-2.png", "/tv-new/assets/phone-3.png"],
    badgeImage: "/tv-new/assets/appstore-badge.png",
  },
  {
    id: "instagram",
    kind: "social",
    image: backgrounds.social,
    imageAlt: "Branded social TV background",
    overlay: "bg-[#FBF6EE]/72",
    kicker: "Instagram",
    title: "Mir folgen",
    subtitle: "Einblicke in Prävention, moderne Medizin und Praxisalltag.",
    qrUrl: "https://www.instagram.com/doc.jona/",
    qrLabel: "Instagram öffnen",
    displayUrl: "instagram.com/doc.jona",
    handle: "@doc.jona",
  },
  {
    id: "google-review",
    kind: "review",
    image: backgrounds.social,
    imageAlt: "Branded review TV background",
    overlay: "bg-[#FBF6EE]/72",
    kicker: "Feedback",
    title: "Ihre Bewertung hilft anderen Patienten",
    subtitle: "Wenn Sie zufrieden sind, freuen wir uns über Ihre Google Bewertung.",
    qrUrl: localUrl("/qr-google-review"),
    qrLabel: "Google bewerten",
    displayUrl: "Google Bewertung",
    reviewStars: 5,
  },
  {
    id: "team",
    kind: "team",
    image: backgrounds.brand,
    imageAlt: "Branded Praxis Jona team background",
    overlay: "bg-[#FBF6EE]/74",
    kicker: "Team",
    title: "Ihr Expertenteam für Gesundheit",
    subtitle: "Gemeinsam für Ihre langfristige Gesundheit.",
    qrUrl: localUrl("/team"),
    qrLabel: "Team ansehen",
    displayUrl: displayUrl(localUrl("/team")),
    team: [
      { image: "/images/team/jonida-image.jpeg", name: "Dr. med. Jonida Gjolli", role: "Ärztliche Leitung & Diagnostik" },
      { image: "/images/team/kathrin-wall.jpg", name: "Kathrin Schmidt", role: "Psychologische Betreuung & mentale Gesundheit" },
      { image: "/images/team/junia-gym.jpeg", name: "Junia Keutel", role: "Bewegungsdiagnostik & funktionales Training" },
    ],
    features: aesthetics.sections[2].services.map((service) => ({ title: service.title, text: service.description })),
  },
];

export function getTVSlideById(slideId: string): TVSlide | undefined {
  return TV_NEW_SLIDES.find((slide) => slide.id === slideId);
}
