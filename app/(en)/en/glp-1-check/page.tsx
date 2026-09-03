import type { Metadata } from "next";

import Glp1LandingPage from "@/app/glp1/Glp1LandingPage";

export const metadata: Metadata = {
  title: "GLP-1 Questionnaire & Physician Review Berlin",
  description: "A short digital GLP-1 questionnaire for new and follow-up requests, personally reviewed by a Praxis Jona physician.",
  alternates: {
    canonical: "/en/glp-1-check",
    languages: { de: "/glp-1-check", en: "/en/glp-1-check" },
  },
  openGraph: {
    title: "Have your GLP-1 treatment medically reviewed",
    description: "Digital questionnaire with personal physician review and no automated treatment decision.",
    url: "/en/glp-1-check",
    images: [{ url: "/images/og-image.png", width: 1200, height: 600, alt: "Praxis Jona" }],
  },
};

export default function Page() {
  return <Glp1LandingPage locale="en" />;
}
