import registry from "../../data/image-disclosures.json";

export type ImageDisclosureLocale = "de" | "en";
export type ImageDisclosureKind = "ai-generated" | "model";

const labels: Record<ImageDisclosureLocale, Record<ImageDisclosureKind, string>> = {
  de: { "ai-generated": "KI-generiert", model: "Symbolbild" },
  en: { "ai-generated": "AI-generated", model: "Illustrative image" },
};

export function getImageDisclosure(src?: string, isAiGenerated?: boolean, locale: ImageDisclosureLocale = "de") {
  const sourceId = src ? registry.images[src.split(/[?#]/)[0]] : undefined;
  const registeredKind = registry.sources[sourceId]?.kind;
  const kind: ImageDisclosureKind | undefined = isAiGenerated
    ? "ai-generated"
    : registeredKind === "ai-generated" || registeredKind === "model" ? registeredKind : undefined;

  return kind ? { kind, label: labels[locale][kind] } : undefined;
}
