import { Metadata } from "next";
import { LandingPage } from "app/components/BetaPages";
import { buildMetadata } from "app/components/pageMetadata";
import type { LandingContent } from "app/components/betaContent";

const content: LandingContent = {
  locale: "en",
  title: "Travel Vaccinations in Berlin-Mitte",
  eyebrow: "Travel medicine",
  description: "Travel vaccination advice in Berlin-Mitte with destination-based medical assessment and vaccination planning at Praxis Jona.",
  canonical: "/en/services/travel-vaccinations",
  alternate: "/leistungen/reiseimpfungen",
  cta: "Book travel consultation",
  secondaryCta: "Health / Longevity",
  secondaryHref: "/en/health-longevity",
  intro: "Travel vaccination needs depend on destination, travel style, duration, previous vaccination status and individual health risks. We review these factors and plan the next steps.",
  facts: [
    { label: "Focus", value: "Destination, risk, vaccination status" },
    { label: "Process", value: "Consultation, vaccine plan, documentation" },
    { label: "Bring", value: "vaccination record if available" },
    { label: "Timing", value: "as early as possible before travel" },
    { label: "Important", value: "Plan early before travel" },
  ],
  sections: [
    { title: "What is travel vaccination advice?", body: ["Travel vaccination advice reviews your destination, route, travel style, medical history and existing vaccination status. The goal is a practical vaccination plan before departure."] },
    { title: "When to book", body: ["Book early enough before your trip so vaccination schedules and booster intervals can be considered."], bullets: ["long-distance travel", "business travel", "backpacking", "unclear vaccination status"] },
    { title: "What we review", body: ["We look at your destination, travel duration, planned activities, existing vaccination records and medical history."] },
    { title: "Medical positioning", body: ["Travel vaccination advice is individualized. Recommendations can change depending on destination and current risk situation."] },
  ],
  related: [
    { title: "Internal medicine", href: "/en/general-medicine", description: "Primary care and vaccination status review." },
    { title: "Health / Longevity", href: "/en/health-longevity", description: "Preventive and self-pay health services." },
  ],
  faq: [
    { question: "Should I bring my vaccination record?", answer: "Yes. Please bring any available vaccination documentation." },
    { question: "How early should I come?", answer: "As early as possible before travel, especially for trips requiring several vaccine doses." },
    { question: "Is travel vaccination covered by insurance?", answer: "Coverage depends on insurance and indication. We discuss costs transparently." },
    { question: "Can I book shortly before travel?", answer: "You can ask, but earlier is better because some vaccines require time or multiple doses." },
    { question: "Do recommendations differ by country?", answer: "Yes. Recommendations depend on destination, route, season, travel style and current risk situation." },
    { question: "Can several vaccinations be planned together?", answer: "Often yes, but this depends on vaccine type, timing and your medical situation." },
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
