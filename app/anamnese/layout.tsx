import { Metadata } from "next";

const title = "Anamnesebogen - Praxis Jona Berlin";
const description = "Digitaler Anamnesebogen der Praxis Jona zur strukturierten Erfassung medizinischer Angaben vor dem Termin und für eine gezielte ärztliche Vorbereitung.";
const url = "/anamnese";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
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
