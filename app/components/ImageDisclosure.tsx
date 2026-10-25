import { getImageDisclosure, type ImageDisclosureLocale } from "./imageDisclosureRegistry";

/** Place inside the image's positioned container, outside any fading overlay. */
export default function ImageDisclosure({
  src,
  isAiGenerated,
  locale = "de",
  placement = "bottom-right",
}: {
  src?: string;
  isAiGenerated?: boolean;
  locale?: ImageDisclosureLocale;
  placement?: "bottom-right" | "top-left";
}) {
  const disclosure = getImageDisclosure(src, isAiGenerated, locale);
  if (!disclosure) return null;

  return (
    <span
      data-image-disclosure={disclosure.kind}
      // TV slides scale a 1920px canvas. Keep the displayed text readable.
      style={{
        fontSize: "calc(0.75rem / var(--tv-scale, 1))",
        lineHeight: "calc(1rem / var(--tv-scale, 1))",
        transform: "scale(0.7)",
        transformOrigin: placement.replace("-", " "),
        opacity: 0.5,
      }}
      className={`not-prose pointer-events-none absolute ${placement === "top-left" ? "top-2 left-2" : "bottom-2 right-2"} z-10 rounded-sm bg-white/95 px-1.5 py-0.5 text-xs font-normal leading-4 text-slate-700`}
    >
      {disclosure.label}
    </span>
  );
}
