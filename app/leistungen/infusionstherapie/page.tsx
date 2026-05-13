import { Metadata } from "next";
import { LandingPage } from "app/components/BetaPages";
import { buildMetadata } from "app/components/pageMetadata";
import type { LandingContent } from "app/components/betaContent";

const content: LandingContent = {
  locale: "de",
  title: "Infusionstherapie in Berlin-Mitte",
  eyebrow: "Eisen, B12, Folsäure & Vitamine",
  description: "Infusionstherapie in Berlin-Mitte bei medizinisch eingeordnetem Eisen-, Vitamin-B12-, Folsäure- oder Mikronährstoffmangel.",
  canonical: "/leistungen/infusionstherapie",
  alternate: "/en/services/infusion-therapy",
  cta: "Termin zur Abklärung buchen",
  secondaryCta: "Eiseninfusion ansehen",
  secondaryHref: "/leistungen/eiseninfusion-kosten",
  intro: "Infusionen sind in der Praxis Jona kein pauschaler Wellness-Baustein, sondern werden nach ärztlicher Einschätzung und bei passender Indikation geplant.",
  facts: [
    { label: "Fokus", value: "Eisen, B12, Folsäure, Vitamine" },
    { label: "Grundlage", value: "Beschwerden, Vorgeschichte, Laborwerte" },
    { label: "Indikation", value: "gezielt nach ärztlicher Einschätzung" },
    { label: "Ablauf", value: "Beratung, Werteprüfung, Infusion" },
    { label: "Eiseninfusion", value: "Festpreis 150,95 €" },
    { label: "Wichtig", value: "keine pauschale Wellness-Infusion" },
  ],
  sections: [
    { title: "Was ist eine Infusionstherapie?", body: ["Bei einer Infusion werden ausgewählte Wirkstoffe direkt über die Vene gegeben. In der Praxis Jona erfolgt dies nicht pauschal, sondern nach ärztlicher Einschätzung und passender medizinischer Fragestellung."] },
    { title: "Wann Infusionen sinnvoll sein können", body: ["Infusionen können infrage kommen, wenn ein relevanter Mangel besteht, orale Präparate nicht ausreichend wirken oder nicht gut vertragen werden."], bullets: ["Eisenmangel", "Vitamin-B12- oder Folsäuremangel", "gezielte Auffüllung nach Laborbefund", "ärztlich begründete Indikation"] },
    { title: "So läuft die Abklärung ab", body: ["Vor einer Infusion prüfen wir Beschwerden, Vorgeschichte und vorhandene Laborwerte. Falls Werte fehlen, besprechen wir, welche Diagnostik sinnvoll ist."] },
    { title: "Kosten und Transparenz", body: ["Infusionen sind Privatleistungen nach GOÄ. Die Eiseninfusion kostet als Festpreis 150,95 €. Weitere Kosten werden vorab besprochen."] },
    { title: "Grenzen und Sicherheit", body: ["Nicht jede Müdigkeit oder Erschöpfung ist ein Mangel. Deshalb besprechen wir Nutzen, Grenzen und mögliche Risiken vor der Infusion individuell."] },
  ],
  related: [
    { title: "Eiseninfusion", href: "/leistungen/eiseninfusion-kosten", description: "Kosten, Ablauf und medizinische Einordnung." },
    { title: "Mikronährstoffanalyse", href: "/leistungen/mikronahrstoffanalyse", description: "Laborbasierte Planung bei möglichen Mängeln." },
    { title: "Health / Longevity", href: "/health-longevity", description: "Prävention, Ernährung, Infusionen und Check-ups." },
  ],
  faq: [
    { question: "Brauche ich Laborwerte?", answer: "Wenn aktuelle Werte vorliegen, beziehen wir diese ein. Falls nötig, besprechen wir sinnvolle Diagnostik." },
    { question: "Was kostet die Eiseninfusion?", answer: "Die Eiseninfusion kostet als Festpreis 150,95 €." },
    { question: "Sind Infusionen immer sinnvoll?", answer: "Nein. Die Entscheidung hängt von Befund, Beschwerden und medizinischer Gesamtsituation ab." },
    { question: "Wann ist eine Vitamininfusion sinnvoll?", answer: "Eine Vitamininfusion kann bei passender medizinischer Fragestellung oder relevantem Mangel besprochen werden. Sie ist kein Standardbaustein für jede Patientin und jeden Patienten." },
    { question: "Was passiert, wenn keine Laborwerte vorliegen?", answer: "Dann besprechen wir, welche Werte medizinisch sinnvoll sind und ob eine Infusion ohne weitere Diagnostik überhaupt infrage kommt." },
    { question: "Kann eine Infusion Tabletten ersetzen?", answer: "Manchmal kann eine Infusion sinnvoll sein, wenn orale Präparate nicht vertragen werden oder nicht ausreichend wirken. Das wird individuell entschieden." },
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
