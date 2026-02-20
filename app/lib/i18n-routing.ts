export type Locale = "de" | "en";

const deToEnRouteMap: Record<string, string> = {
  "/": "/en",
  "/apps": "/en/apps",
  "/team": "/en/team",
  "/kontakt": "/en/contact",
  "/aktuelles": "/en/latest-news",
  "/jobs": "/en/jobs",
  "/jobs/mfa-mwd-berlin-mitte": "/en/jobs/medical-assistant-berlin-mitte",
  "/leistungen": "/en/services",
  "/leistungen/ernaehrungsmedizin": "/en/services/nutritional-medicine",
  "/leistungen/abnehmspritze": "/en/services/weight-loss-injection",
  "/leistungen/gesetzliche-check-up": "/en/services/public-insurance-check-up",
  "/leistungen/private-check-up": "/en/services/private-insurance-check-up",
  "/leistungen/ultraschalluntersuchung": "/en/services/ultrasound-examination",
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
    return deToEnRouteMap[normalizedPathname] ?? "/en";
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
