import { Metadata } from "next";
import BotoxPriceTable from "app/components/BotoxPriceTable";
import { LandingPage } from "app/components/BetaPages";
import { buildMetadata } from "app/components/pageMetadata";
import type { LandingContent } from "app/components/betaContent";

const content: LandingContent = {
  locale: "en",
  title: "Botox in Berlin-Mitte",
  eyebrow: "Botulinum toxin treatment",
  description: "Botox / botulinum toxin in Berlin-Mitte with individual medical consultation, transparent prices and treatment at Praxis Jona.",
  canonical: "/en/botox-treatment",
  alternate: "/botox-behandlung",
  cta: "Book Botox consultation",
  secondaryCta: "View prices",
  secondaryHref: "/en/botox-prices",
  intro: "At Praxis Jona, every botulinum toxin treatment is based on personal medical consultation. The focus is careful assessment, realistic information and a treatment plan that fits your facial expression and personal situation.",
  facts: [
    { label: "Focus", value: "Expression lines, facial movement, consultation" },
    { label: "Areas", value: "Frown lines, forehead, crow's feet, brow lift" },
    { label: "Prices", value: "Treatments from €159" },
  ],
  sections: [
    { title: "What botulinum toxin is used for", body: ["Botulinum toxin can be used to reduce selected muscle activity. In aesthetic medicine it is mainly used for expression lines."], bullets: ["frown lines", "forehead lines", "crow's feet", "bunny lines", "brow lift", "strawberry chin"] },
    { title: "Natural-looking planning", body: ["Many patients want a fresher, more relaxed appearance without an unnatural facial expression. We therefore plan dose and treatment areas individually."] },
    { title: "Process and limits", body: ["Before treatment we discuss goals, suitable areas, cost, possible limits and risks. The effect usually appears after several days and varies individually."] },
  ],
  related: [
    { title: "Botox prices", href: "/en/botox-prices", description: "Transparent price overview for individual areas and combinations." },
    { title: "Aesthetics", href: "/en/aesthetics", description: "All aesthetic treatments at Praxis Jona." },
    { title: "Skin quality & regeneration", href: "/en/aesthetics/improve-skin-quality", description: "Regenerative procedures such as PRP, microneedling and polynucleotides." },
  ],
  faq: [
    { question: "Is Botox suitable for me?", answer: "Suitability depends on your goals, findings and medical situation. We clarify this in personal consultation." },
    { question: "Can results look natural?", answer: "Our approach is measured and individual. The goal is a result that fits your face." },
    { question: "What does Botox cost?", answer: "Costs depend on area and scope. You can find an initial overview in the price table on this page and on the price page." },
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
  return (
    <>
      <LandingPage content={content} />
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <BotoxPriceTable isEnglish={true} />
      </div>
    </>
  );
}
