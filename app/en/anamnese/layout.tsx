import { Metadata } from "next";

const title = "Digital Forms - Praxis Jona Berlin";
const description = "Digital Praxis Jona forms for medical history, vaccination consent, screening, consent, and signature before the appointment.";
const url = "/en/anamnese";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
    languages: {
      de: "/anamnese",
      en: url,
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
