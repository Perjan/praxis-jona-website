import fs from "fs";
import path from "path";

export type LongevityLocale = "de" | "en";

export const longevitySections = {
  hub: {
    de: "Prävention / Longevity",
    en: "Prevention / Longevity",
  },
  micronutrients: {
    de: "Mikronährstoffanalyse & Beratung in Berlin-Mitte",
    en: "Micronutrient Analysis & Consultation in Berlin-Mitte",
  },
  ironInfusion: {
    de: "Eiseninfusion bei Eisenmangel in Berlin-Mitte",
    en: "Iron Infusion for Iron Deficiency in Berlin-Mitte",
  },
  vitaminInfusion: {
    de: "Vitamininfusionen & Infusionstherapie in Berlin-Mitte",
    en: "Vitamin Infusions & Infusion Therapy in Berlin-Mitte",
  },
  weightLoss: {
    de: "Medizinische Gewichtsreduktion & GLP-1-Therapie (Abnehmspritze) in Berlin-Mitte",
    en: "Medical Weight Loss & GLP-1 Therapy (Weight-Loss Injection) in Berlin-Mitte",
  },
} as const;

export type LongevitySectionKey = keyof typeof longevitySections;

const sourcePaths: Record<LongevityLocale, string> = {
  de: path.join(process.cwd(), "app/content/longevity-source.md"),
  en: path.join(process.cwd(), "app/content/longevity-source-en.md"),
};

function readSource(locale: LongevityLocale) {
  return fs.readFileSync(sourcePaths[locale], "utf8");
}

export function getLongevitySectionTitle(key: LongevitySectionKey, locale: LongevityLocale) {
  return longevitySections[key][locale];
}

export function getLongevitySectionMarkdown(key: LongevitySectionKey, locale: LongevityLocale) {
  const source = readSource(locale);
  const title = getLongevitySectionTitle(key, locale);
  const heading = `# ${title}`;
  const start = source.indexOf(heading);

  if (start < 0) {
    throw new Error(`Missing longevity source section: ${title}`);
  }

  if (key === "hub") {
    const firstDetailTitle = getLongevitySectionTitle("micronutrients", locale);
    const firstDetailStart = source.indexOf(`\n# ${firstDetailTitle}`, start + heading.length);
    return source.slice(start, firstDetailStart < 0 ? source.length : firstDetailStart).trim();
  }

  const sectionOrder: LongevitySectionKey[] = ["micronutrients", "ironInfusion", "vitaminInfusion", "weightLoss"];
  const currentIndex = sectionOrder.indexOf(key);
  const nextKey = sectionOrder[currentIndex + 1];
  const nextHeading = nextKey ? `\n# ${getLongevitySectionTitle(nextKey, locale)}` : "";
  const next = nextHeading ? source.indexOf(nextHeading, start + heading.length) : -1;

  return source.slice(start, next < 0 ? source.length : next).trim();
}

export function getLongevitySectionDescription(key: LongevitySectionKey, locale: LongevityLocale) {
  const markdown = getLongevitySectionMarkdown(key, locale);
  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#") && line !== "⸻" && !line.startsWith("```"));

  const firstText = lines.find((line) => !line.startsWith("- ") && !line.startsWith("* "));
  return firstText?.replace(/^\*\*(.*)\*\*$/, "$1") ?? getLongevitySectionTitle(key, locale);
}
