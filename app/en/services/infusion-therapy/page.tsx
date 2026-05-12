import { Metadata } from "next";
import { LandingPage } from "app/components/BetaPages";
import { buildMetadata } from "app/components/pageMetadata";
import type { LandingContent } from "app/components/betaContent";

const content: LandingContent = {
  locale: "en",
  title: "Infusion Therapy in Berlin-Mitte",
  eyebrow: "Iron, B12, folic acid & vitamins",
  description: "Infusion therapy in Berlin-Mitte for medically assessed iron, vitamin B12, folic acid or micronutrient deficiency.",
  canonical: "/en/services/infusion-therapy",
  alternate: "/leistungen/infusionstherapie",
  cta: "Book assessment",
  secondaryCta: "View iron infusion",
  secondaryHref: "/en/services/iron-infusion-costs",
  intro: "At Praxis Jona, infusions are not a generic wellness product. They are planned after medical assessment and with suitable indication.",
  facts: [
    { label: "Focus", value: "Iron, B12, folic acid, vitamins" },
    { label: "Basis", value: "Symptoms, history, lab values" },
    { label: "Iron infusion", value: "Fixed price €150.95" },
  ],
  sections: [
    { title: "When infusions may be useful", body: ["Infusions may be considered when a relevant deficiency is present, oral supplements are not sufficient or are not well tolerated."], bullets: ["iron deficiency", "vitamin B12 or folic acid deficiency", "targeted repletion after lab findings", "medically justified indication"] },
    { title: "How assessment works", body: ["Before an infusion, we review symptoms, medical history and available lab values. If values are missing, we discuss which diagnostics are useful."] },
    { title: "Cost and transparency", body: ["Infusions are private medical services under GOÄ. The iron infusion has a fixed price of €150.95. Any further costs are discussed in advance."] },
  ],
  related: [
    { title: "Iron infusion", href: "/en/services/iron-infusion-costs", description: "Cost, process and medical positioning." },
    { title: "Micronutrient analysis", href: "/en/services/micronutrient-analysis", description: "Lab-based planning for possible deficiencies." },
    { title: "Health / Longevity", href: "/en/health-longevity", description: "Prevention, nutrition, infusions and check-ups." },
  ],
  faq: [
    { question: "Do I need lab values?", answer: "If current values are available, we include them. If needed, we discuss useful diagnostics." },
    { question: "What does the iron infusion cost?", answer: "The iron infusion has a fixed price of €150.95." },
    { question: "Are infusions always useful?", answer: "No. The decision depends on findings, symptoms and the overall medical situation." },
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
