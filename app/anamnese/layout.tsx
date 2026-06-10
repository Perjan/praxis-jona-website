import { Metadata } from "next";

const title = "Digitale Formulare - Praxis Jona Berlin";
const description = "Digitale Praxis-Jona-Formulare für Anamnese, Impfaufklärung, Einwilligung und Unterschrift vor dem Termin.";
const url = "/anamnese";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
    languages: {
      de: "/anamnese",
      en: "/en/anamnese",
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 600,
        alt: "Praxis Jona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AnamneseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
