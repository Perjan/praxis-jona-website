import { Metadata } from "next";
import { LongevityMarkdownPage } from "app/components/LongevityMarkdownPage";
import { buildMetadata } from "app/components/pageMetadata";
const title = "Eiseninfusion Berlin: Kosten ab 150,95 €";
const description =
  "Eiseninfusion in Berlin-Mitte ab 150,95 € nach GOÄ. Erfahren Sie mehr über Diagnostik, ärztliche Prüfung, Ablauf und Terminbuchung bei Praxis Jona.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  canonical: "/leistungen/eiseninfusion-kosten",
  alternate: "/en/services/iron-infusion-costs",
  locale: "de",
});

export default function Page() {
  return <LongevityMarkdownPage sectionKey="ironInfusion" locale="de" />;
}
