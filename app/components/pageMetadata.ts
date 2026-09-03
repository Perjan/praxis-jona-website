import type { Metadata } from "next";
import { Constants } from "app/Constants";

const META_DESCRIPTION_MAX = 160;

// Several callers derive descriptions by joining whole content paragraphs, which
// overshoots what search engines render. Trim on a word boundary so the snippet
// ends cleanly instead of mid-word.
function trimDescription(input: string) {
  const text = (input ?? "").replace(/\s+/g, " ").trim();

  if (text.length <= META_DESCRIPTION_MAX) {
    return text;
  }

  const cut = text.slice(0, META_DESCRIPTION_MAX - 3);
  const lastSpace = cut.lastIndexOf(" ");

  return `${(lastSpace > 100 ? cut.slice(0, lastSpace) : cut).trimEnd()}...`;
}

export function buildMetadata({
  title,
  description,
  canonical,
  alternate,
  locale,
}: {
  title: string;
  description: string;
  canonical: string;
  alternate: string;
  locale: "de" | "en";
}): Metadata {
  const languages = locale === "de"
    ? { de: canonical, en: alternate, "x-default": canonical }
    : { de: alternate, en: canonical, "x-default": alternate };

  const metaDescription = trimDescription(description);

  return {
    title,
    description: metaDescription,
    openGraph: {
      title,
      description: metaDescription,
      type: "website",
      url: canonical,
      images: [{ url: "/images/og-image.png", width: 1200, height: 600, alt: "Praxis Jona" }],
    },
    alternates: {
      canonical,
      languages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: ["/images/og-image.png"],
    },
    metadataBase: new URL(Constants.baseUrl),
  };
}
