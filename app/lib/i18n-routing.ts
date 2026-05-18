export type Locale = "de" | "en";

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

const deToEnRouteMap: Record<string, string> = {
  "/": "/en",
  "/apps": "/en/apps",
  "/team": "/en/team",
  "/kontakt": "/en/contact",
  "/aktuelles": "/en/latest-news",
  "/preise": "/en/prices",
  "/jobs": "/en/jobs",
  "/jobs/mfa-mwd-berlin-mitte": "/en/jobs/medical-assistant-berlin-mitte",
  "/leistungen": "/en/services",
  "/leistungen/ernaehrungsmedizin": "/en/services/nutritional-medicine",
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
  "/aesthetik/haarausfall": "/en/services/hair-loss-berlin-mitte",
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
  "/impressum-datenschutz": "/imprint-privacy",
};

const sharedRoutes = new Set([
  "/blog",
  "/legal",
  "/tv",
  "/anamnese",
]);

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
    normalizedPathname.startsWith("/blog/") ||
    normalizedPathname.startsWith("/legal/") ||
    normalizedPathname.startsWith("/tv/");

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
    return deToEnRouteMap[normalizedPathname] ?? "/en";
  }

  if (normalizedPathname.startsWith("/en/botox-treatment/")) {
    const slug = normalizedPathname.replace("/en/botox-treatment/", "");
    const deSlug = botulinumtoxinSlugPairs.find((pair) => pair.en === slug)?.de;
    return deSlug ? `/botox-behandlung/${deSlug}` : "/botox-behandlung";
  }

  const dePathname = enToDeRouteMap[normalizedPathname] ?? dePathnameFromEnglish(normalizedPathname);
  if (
    sharedRoutes.has(dePathname) ||
    dePathname.startsWith("/blog/") ||
    dePathname.startsWith("/legal/") ||
    dePathname.startsWith("/tv/")
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
