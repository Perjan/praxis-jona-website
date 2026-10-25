import { getImageDisclosure, type ImageDisclosureLocale } from "./imageDisclosureRegistry";

/** Place inside the image's positioned container, outside any fading overlay. */
export default function ImageDisclosure({
  src,
  isAiGenerated,
  locale = "de",
}: {
  src?: string;
  isAiGenerated?: boolean;
  locale?: ImageDisclosureLocale;
}) {
  const disclosure = getImageDisclosure(src, isAiGenerated, locale);
  if (!disclosure) return null;

  return (
    <span
      data-image-disclosure={disclosure.kind}
      className="not-prose pointer-events-none absolute bottom-2 right-2 z-10 rounded-sm bg-white/95 px-1.5 py-0.5 text-xs font-normal leading-4 text-slate-700"
    >
      {disclosure.label}
    </span>
  );
}
