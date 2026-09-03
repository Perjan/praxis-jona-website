import type { Metadata } from "next";

import Glp1LandingPage from "@/app/glp1/Glp1LandingPage";

export const metadata: Metadata = {
  title: "GLP-1 Fragebogen & ärztliche Prüfung Berlin",
  description: "Kurzer digitaler GLP-1-Fragebogen für Neu- und Folgeanfragen mit persönlicher ärztlicher Prüfung durch Praxis Jona.",
  alternates: {
    canonical: "/glp-1-check",
    languages: { de: "/glp-1-check", en: "/en/glp-1-check" },
  },
  openGraph: {
    title: "GLP-1-Behandlung medizinisch prüfen lassen",
    description: "Digitaler Fragebogen mit persönlicher ärztlicher Prüfung – ohne automatische Therapieentscheidung.",
    url: "/glp-1-check",
    images: [{ url: "/images/og-image.png", width: 1200, height: 600, alt: "Praxis Jona" }],
  },
};

export default function Page() {
  return <Glp1LandingPage locale="de" />;
}
