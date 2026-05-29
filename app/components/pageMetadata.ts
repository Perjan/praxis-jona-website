import type { Metadata } from "next";
import { Constants } from "app/Constants";

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

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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
      description,
      images: ["/images/og-image.png"],
    },
    metadataBase: new URL(Constants.baseUrl),
  };
}
