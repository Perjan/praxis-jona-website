import { Metadata } from "next";
import BotoxPriceTable from "app/components/BotoxPriceTable";
import { LandingPage } from "app/components/BetaPages";
import { buildMetadata } from "app/components/pageMetadata";
import type { LandingContent } from "app/components/betaContent";

const content: LandingContent = {
  locale: "de",
  title: "Botox in Berlin-Mitte",
  eyebrow: "Botulinumtoxin Behandlung",
  description: "Botox beziehungsweise Botulinumtoxin in Berlin-Mitte mit individueller ärztlicher Beratung, transparenter Preisübersicht und Behandlung in der Praxis Jona.",
  canonical: "/botox-behandlung",
  alternate: "/en/botox-treatment",
  cta: "Botox-Beratung buchen",
  secondaryCta: "Preise ansehen",
  secondaryHref: "/botox-preise",
  intro: "In der Praxis Jona erfolgt jede Behandlung mit Botulinumtoxin auf Grundlage einer persönlichen ärztlichen Beratung. Im Mittelpunkt stehen eine sorgfältige Einschätzung, realistische Aufklärung und ein Behandlungsplan, der zu Ihrer Mimik und persönlichen Situation passt.",
  facts: [
    { label: "Fokus", value: "Mimische Falten, Mimik, ärztliche Beratung" },
    { label: "Bereiche", value: "Zornesfalte, Stirn, Krähenfüße, Browlift" },
    { label: "Preise", value: "Behandlungen ab 159 €" },
  ],
  sections: [
    { title: "Wofür Botulinumtoxin eingesetzt wird", body: ["Botulinumtoxin kann eingesetzt werden, um bestimmte Muskelaktivitäten gezielt zu reduzieren. In der ästhetischen Medizin wird es vor allem bei mimischen Falten genutzt."], bullets: ["Zornesfalte", "Stirnfalten", "Krähenfüße", "Bunny Lines", "Browlift", "Erdbeerkinn"] },
    { title: "Natürlich wirkende Planung", body: ["Viele Patientinnen und Patienten wünschen sich ein frischeres und entspannteres Erscheinungsbild, ohne dass die Mimik unnatürlich wirkt. Deshalb planen wir Dosierung und Areale individuell."] },
    { title: "Ablauf und Grenzen", body: ["Vor jeder Behandlung besprechen wir Wünsche, geeignete Bereiche, Kosten, mögliche Grenzen und Risiken. Die Wirkung zeigt sich meist nach einigen Tagen und ist individuell unterschiedlich."] },
  ],
  related: [
    { title: "Botox Preise", href: "/botox-preise", description: "Transparente Preisübersicht für einzelne Zonen und Kombinationen." },
    { title: "Ästhetik", href: "/aesthetik", description: "Alle ästhetischen Behandlungen der Praxis Jona." },
    { title: "Hautbild & Regeneration", href: "/aesthetik/hautbild-verbessern", description: "Regenerative Verfahren wie PRP, Microneedling und Polynukleotide." },
  ],
  faq: [
    { question: "Ist Botox für mich geeignet?", answer: "Ob eine Behandlung geeignet ist, hängt von Ziel, Befund und gesundheitlicher Situation ab. Das klären wir im persönlichen Gespräch." },
    { question: "Wirkt das Ergebnis natürlich?", answer: "Unser Ansatz ist zurückhaltend und individuell. Ziel ist ein Ergebnis, das zu Ihrem Gesicht passt." },
    { question: "Was kostet Botox?", answer: "Die Kosten richten sich nach Zone und Aufwand. Eine erste Orientierung finden Sie in der Preisübersicht auf dieser Seite und auf der Preisseite." },
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
        <BotoxPriceTable isEnglish={false} />
      </div>
    </>
  );
}
