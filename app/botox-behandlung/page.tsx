import { Metadata } from "next";
import BotoxPriceTable from "app/components/BotoxPriceTable";
import { LandingPage } from "app/components/BetaPages";
import { buildMetadata } from "app/components/pageMetadata";
import type { LandingContent } from "app/components/betaContent";

const content: LandingContent = {
  locale: "de",
  title: "Botulinumtoxin in Berlin-Mitte",
  eyebrow: "Botulinumtoxin Behandlung",
  description: "Botulinumtoxin in Berlin-Mitte: ärztliche Beratung, natürlich wirkende Planung, transparente Preise und Behandlung für mimische Falten in der Praxis Jona am Rosenthaler Platz.",
  canonical: "/botox-behandlung",
  alternate: "/en/botox-treatment",
  cta: "Termin buchen",
  secondaryCta: "Preise ansehen",
  secondaryHref: "/botox-preise",
  intro: "In der Praxis Jona erfolgt jede Behandlung mit Botulinumtoxin auf Grundlage einer persönlichen ärztlichen Beratung. Im Mittelpunkt stehen eine sorgfältige Einschätzung, realistische Aufklärung und ein Behandlungsplan, der zu Ihrer Mimik, Anatomie und persönlichen Situation passt.",
  facts: [
    { label: "Behandlungsdauer", value: "ca. 10-15 Minuten" },
    { label: "Betäubung", value: "meist nicht erforderlich" },
    { label: "Gesellschaftsfähigkeit", value: "häufig direkt danach" },
    { label: "Wirkungseintritt", value: "meist nach 3-14 Tagen" },
    { label: "Wirkungsdauer", value: "häufig ca. 3-6 Monate" },
    { label: "Kosten", value: "ab 159 €, je nach Zone" },
  ],
  sections: [
    {
      title: "Was ist Botulinumtoxin?",
      body: [
        "Botulinumtoxin ist ein verschreibungspflichtiger Wirkstoff, der Muskelaktivität vorübergehend beeinflussen kann. In der ästhetischen Medizin wird er vor allem bei mimischen Falten eingesetzt.",
        "Botox® ist eine eingetragene Marke. Medizinisch sprechen wir auf dieser Seite allgemein von Botulinumtoxin. Die konkrete Präparation wird im ärztlichen Gespräch besprochen.",
        "Ob eine Behandlung sinnvoll ist, hängt von Befund, Mimik, Anatomie und Ihren Zielen ab. Deshalb beginnt die Behandlung nicht mit einer Standarddosis, sondern mit einer ärztlichen Einschätzung."
      ],
    },
    {
      title: "Welche Bereiche behandelt werden können",
      body: ["Häufige ästhetische Behandlungsbereiche sind Stirnfalten, Zornesfalte und Krähenfüße. Je nach Befund können auch Bunny Lines, Browlift, Erdbeerkinn oder Platysma besprochen werden."],
      bullets: ["Stirnfalten", "Zornesfalte", "Krähenfüße", "Browlift", "Bunny Lines", "Erdbeerkinn", "Platysma"]
    },
    {
      title: "Natürlich wirkende Planung",
      body: [
        "Viele Patientinnen und Patienten wünschen sich ein frischeres, entspannteres Erscheinungsbild, ohne dass die Mimik unnatürlich wirkt. Deshalb planen wir Dosierung und Areale individuell.",
        "Wir behandeln nicht nach Schema, sondern nach Muskelaktivität, Gesichtsanatomie und gewünschtem Ergebnis."
      ],
    },
    {
      title: "Ablauf der Behandlung",
      body: [
        "Vor jeder Behandlung besprechen wir Ihre Wünsche, geeignete Bereiche, den Ablauf, die Kosten sowie mögliche Grenzen und Risiken.",
        "Die Behandlung selbst dauert in der Regel nur wenige Minuten. Anschließend erhalten Sie konkrete Hinweise für die Zeit nach der Behandlung."
      ],
    },
    {
      title: "Wann wirkt Botulinumtoxin und wie lange hält es?",
      body: [
        "Die Wirkung zeigt sich meist nicht sofort. Häufig beginnt sie nach einigen Tagen und entwickelt sich innerhalb von etwa 3 bis 14 Tagen weiter.",
        "Wie lange die Wirkung anhält, ist individuell unterschiedlich. Häufig liegt die Dauer bei etwa 3 bis 6 Monaten, abhängig von Region, Muskelaktivität und persönlicher Reaktion."
      ],
    },
    {
      title: "Kosten und Botulinumtoxin-Preise",
      body: [
        "Die Kosten richten sich nach Zone und individuellem Aufwand. Eine erste Orientierung finden Sie in der transparenten Preisübersicht.",
        "Alle Preise werden vor der Behandlung ärztlich besprochen. Die Behandlung ist eine Privatleistung."
      ],
      bullets: ["Botulinumtoxin-Preise ab 159 €", "Beratung ohne Behandlung ab 49 €", "Kombinationszonen mit eigener Preisstaffel"]
    },
    {
      title: "Risiken, Grenzen und Nebenwirkungen",
      body: [
        "Wie bei jeder medizinischen Behandlung können Nebenwirkungen auftreten, zum Beispiel vorübergehende Rötungen, kleine Blutergüsse, Druckgefühl oder ein ungewohntes Spannungsgefühl.",
        "Seltene oder individuelle Risiken sowie Grenzen der Behandlung werden im ärztlichen Gespräch erklärt. Es gibt kein garantiertes Ergebnis."
      ],
    },
  ],
  related: [
    { title: "Botulinumtoxin Preise", href: "/botox-preise", description: "Transparente Preisübersicht für einzelne Zonen und Kombinationen." },
    { title: "Ästhetik", href: "/aesthetik", description: "Alle ästhetischen Behandlungen der Praxis Jona." },
    { title: "Hautbild & Regeneration", href: "/aesthetik/hautbild-verbessern", description: "Regenerative Verfahren wie PRP, Microneedling und Polynukleotide." },
  ],
  faq: [
    { question: "Was ist Botox beziehungsweise Botulinumtoxin?", answer: "Botulinumtoxin ist ein verschreibungspflichtiger Wirkstoff, der Muskelaktivität vorübergehend beeinflussen kann. Botox® ist ein Markenname, der online häufig als Suchbegriff verwendet wird." },
    { question: "Ist Botulinumtoxin für mich geeignet?", answer: "Ob eine Behandlung geeignet ist, hängt von Ziel, Befund und gesundheitlicher Situation ab. Das klären wir im persönlichen Gespräch." },
    { question: "Wann beginnt Botulinumtoxin zu wirken?", answer: "Die Wirkung zeigt sich meist nach einigen Tagen und entwickelt sich häufig innerhalb von 3 bis 14 Tagen weiter. Der genaue Verlauf ist individuell." },
    { question: "Wie lange hält Botulinumtoxin?", answer: "Die Wirkung hält häufig etwa 3 bis 6 Monate an. Dauer und Stärke hängen unter anderem von Region, Muskelaktivität und individueller Reaktion ab." },
    { question: "Wie oft kann eine Behandlung wiederholt werden?", answer: "Eine Wiederholung kann nach individueller ärztlicher Einschätzung sinnvoll sein, wenn die Wirkung nachlässt. Der Abstand wird im Termin besprochen." },
    { question: "Was kostet Botox bzw. eine Botulinumtoxin-Behandlung in Berlin-Mitte?", answer: "Die Preise starten je nach Zone ab 159 €. Eine vollständige Übersicht finden Sie auf der Botulinumtoxin-Preisseite." },
    { question: "Kann man Stirnfalten oder die Zornesfalte gezielt behandeln?", answer: "Ja, Stirnfalten und Zornesfalte gehören zu den häufig besprochenen Bereichen. Ob und wie behandelt wird, hängt von Mimik, Anatomie und Befund ab." },
    { question: "Welche Nebenwirkungen sind möglich?", answer: "Möglich sind zum Beispiel vorübergehende Rötungen, kleine Blutergüsse, Druckgefühl oder ein ungewohntes Spannungsgefühl. Individuelle Risiken werden vorab ärztlich besprochen." },
    { question: "Wirkt das Ergebnis natürlich?", answer: "Unser Ansatz ist zurückhaltend und individuell. Ziel ist ein Ergebnis, das zu Ihrem Gesicht passt, ohne die Mimik unnötig zu verändern." },
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
