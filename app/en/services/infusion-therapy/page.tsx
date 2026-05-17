import { Metadata } from "next";
import { LandingPage } from "app/components/PageTemplates";
import { buildMetadata } from "app/components/pageMetadata";
import type { LandingContent } from "app/components/pageContent";

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
    { label: "Indication", value: "targeted after medical assessment" },
    { label: "Process", value: "consultation, value review, infusion" },
    { label: "Iron infusion", value: "Fixed price €150.95" },
    { label: "Important", value: "not a generic wellness infusion" },
  ],
  sections: [
    { title: "What is infusion therapy?", body: ["With infusion therapy, selected substances are administered intravenously. At Praxis Jona this is not done generically, but after medical assessment and with a suitable medical question."] },
    { title: "When infusions may be useful", body: ["Infusions may be considered when a relevant deficiency is present, oral supplements are not sufficient or are not well tolerated."], bullets: ["iron deficiency", "vitamin B12 or folic acid deficiency", "targeted repletion after lab findings", "medically justified indication"] },
    { title: "How assessment works", body: ["Before an infusion, we review symptoms, medical history and available lab values. If values are missing, we discuss which diagnostics are useful."] },
    { title: "Cost and transparency", body: ["Infusions are private medical services under GOÄ. The iron infusion has a fixed price of €150.95. Any further costs are discussed in advance."] },
    { title: "Limits and safety", body: ["Not every case of fatigue or low energy is caused by deficiency. We therefore discuss benefit, limits and possible risks individually before infusion."] },
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
    { question: "When is a vitamin infusion useful?", answer: "A vitamin infusion may be discussed when there is a suitable medical question or relevant deficiency. It is not a standard option for every patient." },
    { question: "What happens if I do not have lab values?", answer: "We discuss which values are medically useful and whether an infusion is appropriate without further diagnostics." },
    { question: "Can an infusion replace tablets?", answer: "Sometimes an infusion may be useful when oral supplements are not tolerated or are not effective enough. This is decided individually." },
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
