import { Constants } from "app/Constants";
import { appsByLocale } from "app/data/apps";
import { categoryContent } from "app/components/pageContent";
import { absoluteUrl, formatPrice, pricingSections, type PricingRow } from "app/components/pricing/pricingData";
import {
  botulinumtoxinServices,
  botulinumtoxinServicesEn,
  type BotulinumtoxinService,
} from "app/content/botulinumtoxin";

type SlideKind = "hero" | "service-price" | "service-treatment" | "feature-grid" | "app" | "social" | "review" | "team";

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

type BackgroundIcon = "google" | "instagram";

export type TVSlide = {
  id: string;
  kind: SlideKind;
  image: string;
  visualImage?: string;
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
  backgroundIcon?: BackgroundIcon;
};

const locale = "de" as const;
const longevity = categoryContent.longevityDe;
const aesthetics = categoryContent.aestheticDe;
const veltoApp = appsByLocale.de[0];
const longevityEn = categoryContent.longevityEn;
const aestheticsEn = categoryContent.aestheticEn;
const veltoAppEn = appsByLocale.en[0];

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

function rowPriceEn(row: PricingRow, note?: string): PriceHighlight {
  return {
    label: row.label.en,
    price: formatPrice(row.price, "en"),
    note: note ?? row.description?.en,
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
  brand: "/tv/backgrounds/bg-brand.svg",
  clinical: "/tv/backgrounds/bg-clinical.svg",
  diagnostics: "/tv/backgrounds/bg-diagnostics.svg",
  social: "/tv/backgrounds/bg-social.svg",
} as const;

const internalMedicineDiagnosticsFeatures: FeatureItem[] = [
  { title: "Schilddrüse", text: "Labor, Ultraschall und medizinische Einordnung" },
  { title: "Ultraschall", text: "Bauchorgane, Schilddrüse und ausgewählte Gefäße" },
  { title: "EKG", text: "Ruhe-EKG und Belastungs-EKG" },
  { title: "Langzeit-Blutdruck", text: "24-Stunden-Messung im Alltag" },
];

const internalMedicineCareFeatures: FeatureItem[] = [
  { title: "Akutsprechstunde", text: "Einschätzung akuter Beschwerden" },
  { title: "Check-up", text: "Vorsorge und Früherkennung" },
  { title: "Impfungen", text: "Impfstatus, Auffrischung und Beratung" },
  { title: "OP-Begleitung", text: "Vorbereitung und Nachsorge" },
];

const internalMedicineDiagnosticsFeaturesEn: FeatureItem[] = [
  { title: "Thyroid", text: "Lab work, ultrasound and medical context" },
  { title: "Ultrasound", text: "Abdomen, thyroid and selected vessels" },
  { title: "ECG", text: "Resting and exercise ECG" },
  { title: "24h blood pressure", text: "Real-life blood pressure monitoring" },
];

const internalMedicineCareFeaturesEn: FeatureItem[] = [
  { title: "Acute consultation", text: "Assessment of acute symptoms" },
  { title: "Check-up", text: "Prevention and early detection" },
  { title: "Vaccinations", text: "Vaccination status and advice" },
  { title: "Surgery support", text: "Pre-op review and follow-up care" },
];

const topBotoxTreatmentSlugs = ["zornesfalte", "stirnfalten", "kraehenfuesse"] as const;

function botoxService(slug: (typeof topBotoxTreatmentSlugs)[number], services: BotulinumtoxinService[]) {
  const service = services.find((item) => item.pricingSlug === slug);
  if (!service) {
    throw new Error(`Missing botulinumtoxin service for TV slide: ${slug}`);
  }
  return service;
}

const botoxTreatmentSlides: TVSlide[] = topBotoxTreatmentSlugs.map((slug) => {
  const service = botoxService(slug, botulinumtoxinServices);
  const price = rowPrice(findRow(botoxRows, slug));

  return {
    id: `botulinumtoxin-${slug}`,
    kind: "service-treatment",
    image: backgrounds.clinical,
    visualImage: service.image.src,
    overlay: "bg-[#FBF6EE]/70",
    kicker: "Botulinumtoxin",
    eyebrow: price.price,
    title: service.title,
    subtitle: service.paragraphs[1] ?? service.paragraphs[0],
    qrUrl: localUrl(`/botox-behandlung/${service.slug}`),
    qrLabel: "Behandlung öffnen",
    displayUrl: displayUrl(localUrl(`/botox-behandlung/${service.slug}`)),
    features: [
      { title: "Dauer", text: "ca. 30 Minuten" },
      { title: "Wirkung", text: "nach wenigen Tagen" },
      { title: "Ziel", text: "natürliche Mimik bewahren" },
    ],
  };
});

const botoxTreatmentSlidesEn: TVSlide[] = topBotoxTreatmentSlugs.map((slug) => {
  const service = botoxService(slug, botulinumtoxinServicesEn);
  const price = rowPriceEn(findRow(botoxRows, slug));

  return {
    id: `botulinumtoxin-${slug}`,
    kind: "service-treatment",
    image: backgrounds.clinical,
    visualImage: service.image.src,
    overlay: "bg-[#FBF6EE]/70",
    kicker: "Botulinum toxin",
    eyebrow: price.price,
    title: service.title,
    subtitle: service.paragraphs[1] ?? service.paragraphs[0],
    qrUrl: localUrl(`/en/botox-treatment/${service.slug}`),
    qrLabel: "Open treatment",
    displayUrl: displayUrl(localUrl(`/en/botox-treatment/${service.slug}`)),
    features: [
      { title: "Duration", text: "about 30 minutes" },
      { title: "Effect", text: "after a few days" },
      { title: "Goal", text: "preserve natural expression" },
    ],
  };
});

export const TV_NEW_SLIDES: TVSlide[] = [
  {
    id: "welcome",
    kind: "hero",
    image: backgrounds.brand,
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
    id: "internal-medicine-diagnostics",
    kind: "feature-grid",
    image: backgrounds.diagnostics,
    overlay: "bg-[#FBF6EE]/72",
    kicker: "Innere Medizin",
    title: "Diagnostik direkt in der Praxis",
    subtitle: "Untersuchungen, die Beschwerden und Risiken medizinisch einordnen.",
    qrUrl: localUrl("/hausaerztliche-leistungen"),
    qrLabel: "Innere Medizin öffnen",
    displayUrl: displayUrl(localUrl("/hausaerztliche-leistungen")),
    features: internalMedicineDiagnosticsFeatures,
  },
  {
    id: "primary-care-prevention",
    kind: "feature-grid",
    image: backgrounds.brand,
    overlay: "bg-[#FBF6EE]/74",
    kicker: "Hausärztliche Leistungen",
    title: "Akut, Vorsorge und langfristige Begleitung",
    subtitle: "Von akuten Beschwerden bis zu Check-ups, Impfungen und Betreuung rund um Operationen.",
    qrUrl: localUrl("/hausaerztliche-leistungen"),
    qrLabel: "Leistungen öffnen",
    displayUrl: displayUrl(localUrl("/hausaerztliche-leistungen")),
    features: internalMedicineCareFeatures,
  },
  {
    id: "botulinumtoxin",
    kind: "feature-grid",
    image: backgrounds.clinical,
    overlay: "bg-[#FBF6EE]/70",
    kicker: pricingSections.botox.title.de,
    eyebrow: "Medizinisch präzise. Natürlich im Ergebnis.",
    title: "Mimik entspannen, Ausdruck bewahren",
    subtitle: pricingSections.botox.description.de,
    qrUrl: localUrl("/botox-behandlung"),
    qrLabel: "Botox öffnen",
    displayUrl: displayUrl(localUrl("/botox-behandlung")),
    features: [
      { title: "Planung", text: "nach Anatomie und Mimik" },
      { title: "Ergebnis", text: "frischer, nicht anders" },
      { title: "Preis", text: "ab 199 €" },
      { title: "Termin", text: "Beratung und Behandlung möglich" },
    ],
  },
  ...botoxTreatmentSlides,
  {
    id: "private-medicine",
    kind: "feature-grid",
    image: backgrounds.brand,
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
    overlay: "bg-[#FBF6EE]/70",
    kicker: "App",
    title: veltoApp.name,
    subtitle: "Fortschritt, Nebenwirkungen und Motivation an einem Ort.",
    qrUrl: veltoApp.downloadLink.ios ?? veltoApp.downloadLink.website!,
    qrLabel: "App laden",
    displayUrl: displayUrl(veltoApp.downloadLink.website!),
    bullets: veltoApp.benefits.slice(0, 4),
    appImages: ["/tv/assets/phone-1.png", "/tv/assets/phone-2.png", "/tv/assets/phone-3.png"],
    badgeImage: "/tv/assets/appstore-badge.png",
  },
  {
    id: "instagram",
    kind: "social",
    image: backgrounds.brand,
    overlay: "bg-[#FBF6EE]/72",
    kicker: "Instagram",
    title: "Mir folgen",
    subtitle: "Einblicke in Prävention, moderne Medizin und Praxisalltag.",
    qrUrl: "https://www.instagram.com/doc.jona/",
    qrLabel: "Instagram öffnen",
    displayUrl: "instagram.com/doc.jona",
    handle: "@doc.jona",
    backgroundIcon: "instagram",
  },
  {
    id: "google-review",
    kind: "review",
    image: backgrounds.brand,
    overlay: "bg-[#FBF6EE]/72",
    kicker: "Feedback",
    title: "Ihre Bewertung hilft anderen Patienten",
    subtitle: "Wenn Sie zufrieden sind, freuen wir uns über Ihre Google Bewertung.",
    qrUrl: localUrl("/qr-google-review"),
    qrLabel: "Google bewerten",
    displayUrl: "Google Bewertung",
    reviewStars: 5,
    backgroundIcon: "google",
  },
  {
    id: "team",
    kind: "team",
    image: backgrounds.brand,
    overlay: "bg-[#FBF6EE]/74",
    kicker: "Team",
    title: "Unser Praxisteam",
    subtitle: "Persönliche Betreuung, Erfahrung und klare Abläufe in Berlin-Mitte.",
    qrUrl: localUrl("/team"),
    qrLabel: "Team ansehen",
    displayUrl: displayUrl(localUrl("/team")),
    team: [
      { image: "/images/team/avatar.jpeg", name: "Frau Constanze C. Buhrman", role: "Fachärztin für Innere Medizin, Sportmedizin, Naturheilverfahren, Chirotherapie, Akupunktur/TCM" },
      { image: "/images/team/anja-garlin.jpeg", name: "Frau Anja Garlin", role: "Praxismanagerin" },
      { image: "/images/team/heike-avatar.jpeg", name: "Frau Heike Schmeiche", role: "Arzthelferin, seit 2011 in der Praxis tätig" },
      { image: "/images/team/kerstin-avatar.jpeg", name: "Frau Kerstin Wawrzyniak", role: "Arzthelferin, seit 2002 in der Praxis tätig" },
    ],
    features: aesthetics.sections[2].services.map((service) => ({ title: service.title, text: service.description })),
  },
];

export const TV_NEW_SLIDES_EN: TVSlide[] = TV_NEW_SLIDES.map((slide) => {
  const botoxTreatmentSlide = botoxTreatmentSlidesEn.find((item) => item.id === slide.id);
  if (botoxTreatmentSlide) {
    return botoxTreatmentSlide;
  }

  switch (slide.id) {
    case "welcome":
      return {
        ...slide,
        title: "Holistic care for a healthy life",
        subtitle: "Internal medicine, prevention and modern aesthetic medicine in Berlin-Mitte.",
        qrUrl: localUrl("/en/services"),
        qrLabel: "Open services",
        displayUrl: displayUrl(localUrl("/en/services")),
        bullets: ["Physician-led", "Central at Rosenthaler Platz", "Personal and structured"],
      };
    case "botulinumtoxin":
      return {
        ...slide,
        kicker: pricingSections.botox.title.en,
        eyebrow: "Medically precise. Natural-looking results.",
        title: "Relax expression, preserve character",
        subtitle: pricingSections.botox.description.en,
        qrUrl: localUrl("/en/botox-treatment"),
        qrLabel: "Open Botox",
        displayUrl: displayUrl(localUrl("/en/botox-treatment")),
        features: [
          { title: "Planning", text: "based on anatomy and expression" },
          { title: "Result", text: "fresher, not different" },
          { title: "Price", text: "from €199" },
          { title: "Visit", text: "consultation and treatment possible" },
        ],
      };
    case "internal-medicine-diagnostics":
      return {
        ...slide,
        kicker: "Internal medicine",
        title: "Diagnostics directly in the practice",
        subtitle: "Examinations that help classify symptoms and risks medically.",
        qrUrl: localUrl("/en/general-medicine"),
        qrLabel: "Open internal medicine",
        displayUrl: displayUrl(localUrl("/en/general-medicine")),
        features: internalMedicineDiagnosticsFeaturesEn,
      };
    case "primary-care-prevention":
      return {
        ...slide,
        kicker: "General medicine",
        title: "Acute care, prevention and long-term support",
        subtitle: "From acute symptoms to check-ups, vaccinations and care around surgery.",
        qrUrl: localUrl("/en/general-medicine"),
        qrLabel: "Open services",
        displayUrl: displayUrl(localUrl("/en/general-medicine")),
        features: internalMedicineCareFeaturesEn,
      };
    case "private-medicine":
      return {
        ...slide,
        kicker: "Private medicine",
        title: "Structured services with clear medical context",
        subtitle: "For symptoms, prevention, diagnostics and individual health goals.",
        qrUrl: localUrl("/en/services"),
        qrLabel: "Open overview",
        displayUrl: displayUrl(localUrl("/en/services")),
        features: longevityEn.sections[0].services.slice(0, 6).map((service) => ({
          title: service.title,
          text: service.eyebrow,
        })),
      };
    case "glp1":
      return {
        ...slide,
        kicker: pricingSections.glp1.title.en,
        eyebrow: "Weight and metabolism",
        title: "Medical support for weight loss",
        subtitle: pricingSections.glp1.description.en,
        qrUrl: localUrl(pricingSections.glp1.detailHref!.en),
        qrLabel: "Learn more",
        displayUrl: displayUrl(localUrl(pricingSections.glp1.detailHref!.en)),
        prices: [
          rowPriceEn(findRow(glp1Rows, "beratung-start")),
          rowPriceEn(findRow(glp1Rows, "abnehmspritze-paket")),
          rowPriceEn(findRow(glp1Rows, "rundum-sorglos")),
        ],
        bullets: ["Check medical suitability", "Structure progress", "App support available"],
      };
    case "micronutrients":
      return {
        ...slide,
        kicker: pricingSections.micronutrients.title.en,
        eyebrow: "Lab-based",
        title: "Clarity instead of guesswork",
        subtitle: pricingSections.micronutrients.description.en,
        qrUrl: localUrl(pricingSections.micronutrients.detailHref!.en),
        qrLabel: "Open analysis",
        displayUrl: displayUrl(localUrl(pricingSections.micronutrients.detailHref!.en)),
        prices: [rowPriceEn(micronutrientRow)],
        bullets: ["Fatigue", "Hair loss", "Frequent infections", "Targeted treatment planning"],
      };
    case "infusion-iron":
      return {
        ...slide,
        kicker: "Infusion therapy",
        eyebrow: pricingSections.ironInfusion.title.en,
        title: "Make nutrients directly available",
        subtitle: "Infusions are considered after medical assessment and with a suitable indication.",
        qrUrl: localUrl(pricingSections.ironInfusion.detailHref!.en),
        qrLabel: "View costs",
        displayUrl: displayUrl(localUrl(pricingSections.ironInfusion.detailHref!.en)),
        prices: [rowPriceEn(ironInfusionRow, "Fixed price with suitable indication")],
        bullets: ["For relevant deficiency", "Medically supervised", "Individually planned"],
      };
    case "prevention":
      return {
        ...slide,
        kicker: pricingSections.prevention.title.en,
        eyebrow: "Health is not accidental",
        title: "Make prevention measurable",
        subtitle: pricingSections.prevention.description.en,
        qrUrl: localUrl(pricingSections.prevention.detailHref!.en),
        qrLabel: "Open packages",
        displayUrl: displayUrl(localUrl(pricingSections.prevention.detailHref!.en)),
        prices: preventionRows.map((row) => rowPriceEn(row)),
        bullets: ["Diagnostics", "Interpretation", "Concrete plan"],
      };
    case "ultrasound":
      return {
        ...slide,
        kicker: pricingSections.ultrasound.title.en,
        eyebrow: "Internal medicine",
        title: "Diagnostics directly in the practice",
        subtitle: pricingSections.ultrasound.description.en,
        qrUrl: localUrl(pricingSections.ultrasound.detailHref!.en),
        qrLabel: "Open diagnostics",
        displayUrl: displayUrl(localUrl(pricingSections.ultrasound.detailHref!.en)),
        prices: [
          rowPriceEn(findRow(ultrasoundRows, "schilddruese")),
          rowPriceEn(findRow(ultrasoundRows, "bauchorgane")),
          rowPriceEn(findRow(ultrasoundRows, "carotisduplex")),
        ],
        bullets: ["Thyroid", "Abdominal organs", "Vessels"],
      };
    case "velto":
      return {
        ...slide,
        title: veltoAppEn.name,
        subtitle: "Progress, side effects and motivation in one place.",
        qrUrl: veltoAppEn.downloadLink.ios ?? veltoAppEn.downloadLink.website!,
        qrLabel: "Download app",
        displayUrl: displayUrl(veltoAppEn.downloadLink.website!),
        bullets: veltoAppEn.benefits.slice(0, 4),
      };
    case "instagram":
      return {
        ...slide,
        title: "Follow me",
        subtitle: "Insights into prevention, modern medicine and everyday practice life.",
        qrLabel: "Open Instagram",
      };
    case "google-review":
      return {
        ...slide,
        kicker: "Feedback",
        title: "Your review helps other patients",
        subtitle: "If you are satisfied, we appreciate your Google review.",
        qrLabel: "Review on Google",
        displayUrl: "Google review",
      };
    case "team":
      return {
        ...slide,
        title: "Our practice team",
        subtitle: "Personal care, experience and clear processes in Berlin-Mitte.",
        qrUrl: localUrl("/en/team"),
        qrLabel: "View team",
        displayUrl: displayUrl(localUrl("/en/team")),
        team: [
          { image: "/images/team/avatar.jpeg", name: "Constanze C. Buhrman", role: "Specialist in internal medicine, sports medicine, naturopathy, chirotherapy, acupuncture/TCM" },
          { image: "/images/team/anja-garlin.jpeg", name: "Anja Garlin", role: "Practice manager" },
          { image: "/images/team/heike-avatar.jpeg", name: "Heike Schmeiche", role: "Medical assistant, working in the practice since 2011" },
          { image: "/images/team/kerstin-avatar.jpeg", name: "Kerstin Wawrzyniak", role: "Medical assistant, working in the practice since 2002" },
        ],
        features: aestheticsEn.sections[2].services.map((service) => ({ title: service.title, text: service.description })),
      };
    default:
      return slide;
  }
});

export function getTVSlideById(slideId: string): TVSlide | undefined {
  return TV_NEW_SLIDES.find((slide) => slide.id === slideId);
}

export function getTVSlideByIdEn(slideId: string): TVSlide | undefined {
  return TV_NEW_SLIDES_EN.find((slide) => slide.id === slideId);
}
