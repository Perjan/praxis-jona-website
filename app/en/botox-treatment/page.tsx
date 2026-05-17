import { Metadata } from "next";
import BotoxPriceTable from "app/components/BotoxPriceTable";
import { LandingPage } from "app/components/BetaPages";
import { buildMetadata } from "app/components/pageMetadata";
import type { LandingContent } from "app/components/betaContent";

const content: LandingContent = {
  locale: "en",
  title: "Botulinum toxin in Berlin-Mitte",
  eyebrow: "Botulinum toxin treatment",
  description: "Botulinum toxin in Berlin-Mitte with physician-led consultation, natural-looking planning, transparent prices and treatment for expression lines at Praxis Jona near Rosenthaler Platz.",
  canonical: "/en/botox-treatment",
  alternate: "/botox-behandlung",
  cta: "Book appointment",
  secondaryCta: "View prices",
  secondaryHref: "/en/botox-prices",
  intro: "At Praxis Jona, every botulinum toxin treatment is based on personal medical consultation. The focus is careful assessment, realistic information and a treatment plan that fits your facial expression, anatomy and personal situation.",
  facts: [
    { label: "Treatment time", value: "approx. 10-15 minutes" },
    { label: "Anaesthesia", value: "usually not required" },
    { label: "Downtime", value: "often none" },
    { label: "Onset", value: "usually after 3-14 days" },
    { label: "Duration", value: "often approx. 3-6 months" },
    { label: "Cost", value: "from €159, depending on area" },
  ],
  sections: [
    {
      title: "What is botulinum toxin?",
      body: [
        "Botulinum toxin is a prescription-only substance that can temporarily influence selected muscle activity. In aesthetic medicine, it is mainly used for expression lines.",
        "Botox® is a registered trademark. On this page, we use the medical term botulinum toxin. The specific preparation is discussed during medical consultation.",
        "Whether treatment is suitable depends on findings, facial movement, anatomy and your goals. The treatment therefore starts with medical assessment, not with a standard dose."
      ],
    },
    {
      title: "Areas that may be treated",
      body: ["Common aesthetic treatment areas include forehead lines, frown lines and crow's feet. Depending on findings, bunny lines, brow lift, strawberry chin or platysma can also be discussed."],
      bullets: ["forehead lines", "frown lines", "crow's feet", "brow lift", "bunny lines", "strawberry chin", "platysma"]
    },
    {
      title: "Natural-looking planning",
      body: [
        "Many patients want a fresher, more relaxed appearance without an unnatural facial expression. We therefore plan dose and treatment areas individually.",
        "We do not treat by template. Planning is based on muscle activity, facial anatomy and the desired result."
      ],
    },
    {
      title: "Treatment process",
      body: [
        "Before treatment, we discuss your goals, suitable areas, process, cost, possible limits and risks.",
        "The treatment itself usually takes only a few minutes. Afterwards, you receive specific aftercare guidance."
      ],
    },
    {
      title: "When does botulinum toxin start working and how long does it last?",
      body: [
        "The effect is usually not immediate. It often begins after a few days and develops further within about 3 to 14 days.",
        "How long the effect lasts varies individually. It often lasts around 3 to 6 months, depending on area, muscle activity and personal response."
      ],
    },
    {
      title: "Costs and botulinum toxin prices",
      body: [
        "Costs depend on treatment area and individual scope. The transparent price overview gives an initial orientation.",
        "All prices are discussed before treatment. Botulinum toxin treatment is a private self-pay service."
      ],
      bullets: ["Botulinum toxin prices from €159", "Consultation without treatment from €49", "Combination areas with separate pricing"]
    },
    {
      title: "Risks, limits and side effects",
      body: [
        "As with any medical treatment, side effects may occur, such as temporary redness, small bruises, pressure sensation or an unfamiliar feeling of tightness.",
        "Rare or individual risks as well as treatment limits are explained during the medical consultation. Results cannot be guaranteed."
      ],
    },
  ],
  related: [
    { title: "Botulinum toxin prices", href: "/en/botox-prices", description: "Transparent price overview for individual areas and combinations." },
    { title: "Aesthetics", href: "/en/aesthetics", description: "All aesthetic treatments at Praxis Jona." },
    { title: "Skin quality & regeneration", href: "/en/aesthetics/improve-skin-quality", description: "Regenerative procedures such as PRP, microneedling and polynucleotides." },
  ],
  faq: [
    { question: "What is Botox or botulinum toxin?", answer: "Botulinum toxin is a prescription-only substance that can temporarily influence selected muscle activity. Botox® is a brand name often used as an online search term." },
    { question: "Is botulinum toxin suitable for me?", answer: "Suitability depends on your goals, findings and medical situation. We clarify this in personal consultation." },
    { question: "When does botulinum toxin start working?", answer: "The effect usually appears after a few days and often develops further within 3 to 14 days. The exact timing varies individually." },
    { question: "How long does botulinum toxin last?", answer: "The effect often lasts around 3 to 6 months. Duration and strength depend on area, muscle activity and individual response." },
    { question: "How often can treatment be repeated?", answer: "Repeat treatment may be considered after medical assessment once the effect wears off. Timing is discussed individually." },
    { question: "How much does Botox or botulinum toxin treatment cost in Berlin-Mitte?", answer: "Prices start from €159 depending on treatment area. The full overview is available on the botulinum toxin prices page." },
    { question: "Can forehead lines or frown lines be treated specifically?", answer: "Yes, forehead lines and frown lines are commonly discussed areas. Suitability and planning depend on facial movement, anatomy and findings." },
    { question: "What side effects are possible?", answer: "Possible side effects include temporary redness, small bruises, pressure sensation or an unfamiliar feeling of tightness. Individual risks are discussed before treatment." },
    { question: "Can results look natural?", answer: "Our approach is measured and individual. The goal is a result that fits your face without unnecessarily changing facial expression." },
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
