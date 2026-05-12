import { Metadata } from "next";
import { LandingPage } from "app/components/BetaPages";
import { buildMetadata } from "app/components/pageMetadata";
import type { LandingContent } from "app/components/betaContent";

const content: LandingContent = {
  locale: "en",
  title: "Micronutrient Analysis in Berlin-Mitte",
  eyebrow: "Labor-based nutrient assessment",
  description: "Micronutrient analysis in Berlin-Mitte with physician-led interpretation and targeted treatment planning at Praxis Jona.",
  canonical: "/en/services/micronutrient-analysis",
  alternate: "/leistungen/mikronahrstoffanalyse",
  cta: "Book assessment",
  secondaryCta: "Health / Longevity",
  secondaryHref: "/en/health-longevity",
  intro: "Micronutrient analysis helps clarify whether relevant deficiencies may contribute to symptoms or health goals. We select diagnostics deliberately and interpret results medically.",
  facts: [
    { label: "Focus", value: "Labor values, symptoms, treatment plan" },
    { label: "Process", value: "Consultation, diagnostics, interpretation" },
    { label: "Important", value: "Testing is selected individually" },
  ],
  sections: [
    { title: "When testing may be useful", body: ["Micronutrient diagnostics may be considered for fatigue, hair loss, dietary restrictions or preventive health goals."], bullets: ["fatigue", "hair loss", "vegan or vegetarian diet", "deficiency follow-up"] },
    { title: "What happens after results", body: ["We discuss the findings and, when appropriate, recommend targeted supplementation, nutrition measures or infusions for documented deficiencies."] },
    { title: "Medical positioning", body: ["Micronutrient therapy should not be generic. The goal is a targeted recommendation based on symptoms, history and laboratory values."] },
  ],
  related: [
    { title: "Iron infusion", href: "/en/services/iron-infusion-costs", description: "For documented iron deficiency and medical indication." },
    { title: "Hair-loss assessment", href: "/en/services/hair-loss-berlin-mitte", description: "Medical assessment when hair loss may be related to deficiencies." },
  ],
  faq: [
    { question: "Are all micronutrients tested automatically?", answer: "No. We discuss which values are medically useful for your situation." },
    { question: "Can deficiencies be treated with infusions?", answer: "In selected cases and with appropriate indication, infusions may be considered." },
    { question: "Is this a self-pay service?", answer: "Many extended micronutrient tests are self-pay services. Costs are discussed before testing." },
  ],
};

export const metadata: Metadata = buildMetadata({
  title: content.title,
  description: content.description,
  canonical: content.canonical,
  alternate: content.alternate,
  locale: content.locale,
});

export default function Page() {
  return <LandingPage content={content} />;
}
