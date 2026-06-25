export type Locale = "de" | "en";

type LocalizedSlugPair = { de: string; en: string };

const botulinumtoxinSlugPairs = [
  { de: "zornesfalte", en: "frown-lines-glabella" },
  { de: "stirnfalten", en: "forehead-lines" },
  { de: "kraehenfuesse", en: "crows-feet" },
  { de: "brow-lift-augenbrauenlifting", en: "brow-lift" },
  { de: "bunny-lines", en: "bunny-lines" },
  { de: "gummy-smile", en: "gummy-smile" },
  { de: "lip-flip", en: "lip-flip" },
  { de: "mundwinkel-anheben", en: "mouth-corners" },
  { de: "hyperhidrose-starkes-schwitzen", en: "hyperhidrosis-excessive-sweating" },
  { de: "masseter-zaehneknirschen-bruxismus", en: "masseter-bruxism" },
  { de: "trapezmuskel-barbie-botox", en: "trapezius-barbie-botox" },
  { de: "chronische-migraene", en: "chronic-migraine" },
];

const blogSlugPairs = [
  { de: "diabetes-mellitus", en: "diabetes-mellitus" },
  { de: "digitale-zahlungen", en: "digital-payments" },
  { de: "ernahrungsempfehlungen-bei-fettstoffwechselstorungen", en: "nutrition-recommendations-for-lipid-disorders" },
  { de: "hypertonie", en: "hypertension" },
  { de: "meine-reise-zu-mehr-wohlbefinden-trotz-hashimoto", en: "my-journey-to-better-wellbeing-with-hashimoto" },
  { de: "uebernahme-praxis-constanze-c-buhrmann", en: "practice-takeover-constanze-buhrman" },
  { de: "uebernahme-praxis-dr-thomas-roessner", en: "practice-takeover-dr-thomas-roessner" },
  { de: "vorsorge-hilft-menschen-gesunder-und-langer-zu-leben", en: "prevention-helps-people-live-healthier-longer" },
  { de: "eiseninfusion-frauen-eisenmangel-vorteile", en: "iron-infusion-women-iron-deficiency-benefits" },
  { de: "botulinumtoxin-medizinische-anwendungen", en: "botulinum-toxin-medical-uses" },
];

const aestheticDetailSlugPairs = {
  prp: {
    deBase: "/aesthetik/prp-behandlung",
    enBase: "/en/aesthetics/prp-treatment",
    pairs: [
      { de: "prp-gesicht", en: "prp-face" },
      { de: "prp-augenregion-bei-dunklen-augenringen", en: "prp-under-eye-area-dark-circles" },
      { de: "prp-gesicht-hals-und-dekollete", en: "prp-face-neck-decollete" },
      { de: "vampire-lifting-prp-kombiniert-mit-medizinischem-microneedling", en: "vampire-lifting-prp-microneedling" },
    ],
  },
  microneedling: {
    deBase: "/aesthetik/microneedling",
    enBase: "/en/aesthetics/microneedling",
    pairs: [
      { de: "vampirelift-medizinisches-microneedling-gesicht", en: "vampire-lift-medical-microneedling-face" },
      { de: "microneedling-gesicht", en: "microneedling-face" },
      { de: "microneedling-gesicht-hals", en: "microneedling-face-neck" },
      { de: "microneedling-gesicht-hals-dekollete", en: "microneedling-face-neck-decollete" },
      { de: "microneedling-face-nctf", en: "microneedling-face-nctf" },
      { de: "microneedling-gesicht-exosome", en: "microneedling-face-exosomes" },
    ],
  },
  skinbooster: {
    deBase: "/aesthetik/polynukleotide",
    enBase: "/en/aesthetics/polynucleotides",
    pairs: [
      { de: "nctf-ha-gesicht", en: "nctf-ha-face" },
      { de: "nctf-ha-gesicht-hals", en: "nctf-ha-face-neck" },
      { de: "nctf-ha-gesicht-hals-dekollete", en: "nctf-ha-face-neck-decollete" },
      { de: "philart-gesicht", en: "philart-face" },
      { de: "philart-auge", en: "philart-eye" },
      { de: "profhilo", en: "profhilo" },
    ],
  },
  hair: {
    deBase: "/leistungen/haarausfall-berlin-mitte",
    enBase: "/en/services/hair-loss-berlin-mitte",
    pairs: [
      { de: "microneedling-haare", en: "scalp-microneedling" },
      { de: "prp-haare", en: "prp-hair" },
      { de: "polynukleotide-haare", en: "hair-polynucleotides" },
    ],
  },
} as const;

function localizedAestheticDetailPath(pathname: string, targetLocale: Locale) {
  for (const group of Object.values(aestheticDetailSlugPairs)) {
    const sourceBase = targetLocale === "en" ? group.deBase : group.enBase;
    const targetBase = targetLocale === "en" ? group.enBase : group.deBase;

    if (!pathname.startsWith(`${sourceBase}/`)) {
      continue;
    }

    const slug = pathname.replace(`${sourceBase}/`, "");
    const pairs: readonly LocalizedSlugPair[] = group.pairs;
    const pair = pairs.find((item) => (targetLocale === "en" ? item.de : item.en) === slug);
    return pair ? `${targetBase}/${targetLocale === "en" ? pair.en : pair.de}` : targetBase;
  }

  return undefined;
}

const deToEnRouteMap: Record<string, string> = {
  "/": "/en",
  "/apps": "/en/apps",
  "/team": "/en/team",
  "/kontakt": "/en/contact",
  "/aktuelles": "/en/latest-news",
  "/preise": "/en/prices",
  "/jobs": "/en/jobs",
  "/blog": "/en/blog",
  "/anamnese": "/en/anamnese",
  "/anamnese/medical-history": "/en/anamnese/medical-history",
  "/anamnese/impfaufklaerung": "/en/anamnese/impfaufklaerung",
  "/anamnese/eiseninfusion": "/en/anamnese/eiseninfusion",
  "/anamnese/schilddruesen-diagnostik": "/en/anamnese/thyroid-diagnostics",
  "/tv": "/en/tv",
  "/tv-legacy": "/en/tv-legacy",
  "/legal": "/en/legal",
  "/jobs/mfa-mwd-berlin-mitte": "/en/jobs/medical-assistant-berlin-mitte",
  "/leistungen": "/en/services",
  "/leistungen/ernaehrungsmedizin": "/en/services/nutritional-medicine",
  "/leistungen/ernaehrungsmedizin/pakete/bronze": "/en/services/nutritional-medicine/packages/bronze",
  "/leistungen/ernaehrungsmedizin/pakete/silber": "/en/services/nutritional-medicine/packages/silver",
  "/leistungen/ernaehrungsmedizin/pakete/gold": "/en/services/nutritional-medicine/packages/gold",
  "/leistungen/abnehmspritze": "/en/services/weight-loss-injection",
  "/leistungen/gesetzliche-check-up": "/en/services/public-insurance-check-up",
  "/leistungen/private-check-up": "/en/services/private-insurance-check-up",
  "/leistungen/ultraschalluntersuchung": "/en/services/ultrasound-examination",
  "/leistungen/mikronahrstoffanalyse": "/en/services/micronutrient-analysis",
  "/leistungen/infusionstherapie": "/en/services/infusion-therapy",
  "/leistungen/eiseninfusion-kosten": "/en/services/iron-infusion-costs",
  "/leistungen/reiseimpfungen": "/en/services/travel-vaccinations",
  "/leistungen/haarausfall-berlin-mitte": "/en/services/hair-loss-berlin-mitte",
  "/leistungen/prp-haarausfall": "/en/services/prp-hair-loss",
  "/hausaerztliche-leistungen": "/en/general-medicine",
  "/hausaerztliche-leistungen/preise": "/en/general-medicine/prices",
  "/hausaerztliche-leistungen/akutsprechstunde": "/en/general-medicine/acute-consultation",
  "/hausaerztliche-leistungen/langzeit-blutdruckmessung": "/en/general-medicine/24-hour-blood-pressure-monitoring",
  "/hausaerztliche-leistungen/ultraschalluntersuchung": "/en/general-medicine/ultrasound-examination",
  "/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up": "/en/general-medicine/preventive-check-up",
  "/hausaerztliche-leistungen/ekg": "/en/general-medicine/ecg",
  "/hausaerztliche-leistungen/impfungen": "/en/general-medicine/vaccinations",
  "/hausaerztliche-leistungen/praeoperative-untersuchung": "/en/general-medicine/preoperative-examination",
  "/aesthetik": "/en/aesthetics",
  "/aesthetik/preise": "/en/aesthetics/prices",
  "/aesthetik/prp-behandlung": "/en/aesthetics/prp-treatment",
  "/aesthetik/microneedling": "/en/aesthetics/microneedling",
  "/aesthetik/polynukleotide": "/en/aesthetics/polynucleotides",
  "/aesthetik/hautbild-verbessern": "/en/aesthetics/improve-skin-quality",
  "/praevention-longevity": "/en/prevention-longevity",
  "/praevention-longevity/preise": "/en/prevention-longevity/prices",
  "/schwerpunkte": "/en/focus-areas",
  "/schwerpunkte/fettstoffwechselstoerungen": "/en/focus-areas/lipometabolic-disorders",
  "/schwerpunkte/bluthochdruck": "/en/focus-areas/high-blood-pressure",
  "/schwerpunkte/schilddruese": "/en/focus-areas/thyroid-gland",
  "/praevention": "/en/prevention",
  "/praevention/basic": "/en/prevention/basic",
  "/praevention/medium": "/en/prevention/medium",
  "/praevention/premium": "/en/prevention/premium",
  "/botox-behandlung": "/en/botox-treatment",
  "/botox-preise": "/en/botox-prices",
  "/legal/impressum-datenschutz": "/en/legal/imprint-privacy",
};

const sharedRoutes = new Set<string>();

export function normalizePathname(pathname: string): string {
  if (!pathname) {
    return "/";
  }
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function localeFromPathname(pathname: string): Locale {
  const normalizedPathname = normalizePathname(pathname);
  if (normalizedPathname === "/en" || normalizedPathname.startsWith("/en/")) {
    return "en";
  }
  return "de";
}

function dePathnameFromEnglish(pathname: string): string {
  const normalizedPathname = normalizePathname(pathname);
  if (normalizedPathname === "/en") {
    return "/";
  }
  return normalizedPathname.replace(/^\/en/, "") || "/";
}

const enToDeRouteMap = Object.fromEntries(
  Object.entries(deToEnRouteMap).map(([dePath, enPath]) => [enPath, dePath]),
) as Record<string, string>;

export function localizedPathForLocale(pathname: string, targetLocale: Locale): string {
  const normalizedPathname = normalizePathname(pathname);
  const currentLocale = localeFromPathname(normalizedPathname);
  const isSharedRoute =
    sharedRoutes.has(normalizedPathname) ||
    normalizedPathname.startsWith("/tv-legacy/");

  if (currentLocale === targetLocale) {
    return normalizedPathname;
  }

  if (targetLocale === "en") {
    if (isSharedRoute) {
      return normalizedPathname;
    }
    if (normalizedPathname.startsWith("/botox-behandlung/")) {
      const slug = normalizedPathname.replace("/botox-behandlung/", "");
      const enSlug = botulinumtoxinSlugPairs.find((pair) => pair.de === slug)?.en;
      return enSlug ? `/en/botox-treatment/${enSlug}` : "/en/botox-treatment";
    }
    if (normalizedPathname.startsWith("/blog/")) {
      const slug = normalizedPathname.replace("/blog/", "");
      const enSlug = blogSlugPairs.find((pair) => pair.de === slug)?.en;
      return enSlug ? `/en/blog/${enSlug}` : "/en/blog";
    }
    if (normalizedPathname.startsWith("/tv/")) {
      return normalizedPathname.replace(/^\/tv/, "/en/tv");
    }
    if (normalizedPathname.startsWith("/tv-legacy/")) {
      return normalizedPathname.replace(/^\/tv-legacy/, "/en/tv-legacy");
    }
    if (normalizedPathname === "/legal/impressum-datenschutz") {
      return "/en/legal/imprint-privacy";
    }
    const aestheticDetailPath = localizedAestheticDetailPath(normalizedPathname, "en");
    if (aestheticDetailPath) {
      return aestheticDetailPath;
    }
    return deToEnRouteMap[normalizedPathname] ?? "/en";
  }

  if (normalizedPathname.startsWith("/en/botox-treatment/")) {
    const slug = normalizedPathname.replace("/en/botox-treatment/", "");
    const deSlug = botulinumtoxinSlugPairs.find((pair) => pair.en === slug)?.de;
    return deSlug ? `/botox-behandlung/${deSlug}` : "/botox-behandlung";
  }

  if (normalizedPathname.startsWith("/en/blog/")) {
    const slug = normalizedPathname.replace("/en/blog/", "");
    const deSlug = blogSlugPairs.find((pair) => pair.en === slug)?.de;
    return deSlug ? `/blog/${deSlug}` : "/blog";
  }

  if (normalizedPathname.startsWith("/en/tv/")) {
    return normalizedPathname.replace(/^\/en\/tv/, "/tv");
  }

  if (normalizedPathname.startsWith("/en/tv-legacy/")) {
    return normalizedPathname.replace(/^\/en\/tv-legacy/, "/tv-legacy");
  }

  if (normalizedPathname === "/en/legal/imprint-privacy") {
    return "/legal/impressum-datenschutz";
  }

  const aestheticDetailPath = localizedAestheticDetailPath(normalizedPathname, "de");
  if (aestheticDetailPath) {
    return aestheticDetailPath;
  }

  const dePathname = enToDeRouteMap[normalizedPathname] ?? dePathnameFromEnglish(normalizedPathname);
  if (
    sharedRoutes.has(dePathname) ||
    dePathname.startsWith("/legal/") ||
    dePathname.startsWith("/tv/") ||
    dePathname.startsWith("/tv-legacy/")
  ) {
    return dePathname;
  }
  return dePathname;
}

const enNoPrefixToDeRouteMap = Object.fromEntries(
  Object.entries(deToEnRouteMap).flatMap(([dePath, enPath]) => {
    if (enPath === "/en") {
      return [];
    }
    return [[enPath.replace(/^\/en/, ""), dePath]];
  }),
) as Record<string, string>;

export function canonicalGermanPathname(pathname: string): string {
  const normalizedPathname = normalizePathname(pathname);
  const withoutDePrefix = normalizedPathname === "/de" ? "/" : normalizedPathname.replace(/^\/de/, "") || "/";

  if (withoutDePrefix === "/") {
    return "/";
  }
  if (withoutDePrefix.startsWith("/en/") || withoutDePrefix === "/en") {
    return localizedPathForLocale(withoutDePrefix, "de");
  }
  return enNoPrefixToDeRouteMap[withoutDePrefix] ?? withoutDePrefix;
}
