import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import Link from "next/link";
import React from "react";

const title = "Eiseninfusion Kosten in Berlin & Berlin Mitte: Preise, Ablauf & FAQs";
const description = "Was kostet eine Eiseninfusion in Berlin und Berlin Mitte? Transparent erklärt: typische Kosten, medizinischer Ablauf, mögliche Zusatzkosten und häufige Fragen zur privaten Abrechnung (GOÄ).";
const url = "/leistungen/eiseninfusion-kosten";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 600,
        alt: "Praxis Jona"
      }
    ]
  },
  alternates: {
    canonical: url,
    languages: {
      de: url,
      en: "/en/services/iron-infusion-costs"
    }
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.png"]
  }
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was kostet eine Eiseninfusion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Eiseninfusion kostet in unserer Praxis als Festpreis 150,95 Euro. Falls zusätzliche Diagnostik oder Beratung erforderlich ist, wird dies vorab transparent besprochen."
        }
      },
      {
        "@type": "Question",
        name: "Wird die Eiseninfusion von der Krankenkasse übernommen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Abrechnung erfolgt als Privatleistung nach GOÄ. Ob und in welcher Höhe eine private Versicherung erstattet, hängt vom jeweiligen Tarif ab."
        }
      },
      {
        "@type": "Question",
        name: "Wie läuft die Behandlung ab?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vor der Infusion erfolgt eine ärztliche Beurteilung inklusive relevanter Laborwerte. Danach wird die Therapie individuell geplant und die Kosten transparent vorab besprochen."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="overflow-hidden bg-white relative isolate">
        <SectionWithColor backgroundClassName="bg-white">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
            <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
          </div>
        </SectionWithColor>

        <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mb-12">
          <SectionWithColor backgroundClassName="bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden">
            <h2 className="text-2xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Preisübersicht Eiseninfusion</h2>
            <p className="mt-2 text-lg leading-8 text-primaryLighter">
              Bei nachgewiesenem Eisenmangel kostet die Behandlung in unserer Praxis als Festpreis 150,95 €.
            </p>

            <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Was beeinflusst die Kosten?</h2>
            <ul className="mt-2 text-lg leading-8 text-primaryLighter list-disc pl-6">
              <li>Ausgangsbefund (z. B. Ferritin, Transferrinsättigung)</li>
              <li>Benötigte Eisendosis und Anzahl der Sitzungen</li>
              <li>Notwendige Zusatzleistungen im Verlauf</li>
            </ul>

            <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Transparente Abrechnung</h2>
            <p className="mt-2 text-lg leading-8 text-primaryLighter">
              Die Abrechnung erfolgt nach GOÄ als Privatleistung. Vor Therapiebeginn besprechen wir die voraussichtlichen
              Kosten transparent mit Ihnen.
            </p>

            <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Weiterführende Informationen</h2>
            <p className="mt-2 text-lg leading-8 text-primaryLighter">
              Mehr zur medizinischen Einordnung finden Sie auf unserer Seite zur
              <Link className="underline ml-1" href="/leistungen/infusionstherapie">Infusionstherapie</Link>.
            </p>
          </SectionWithColor>
        </div>
      </div>
    </>
  );
}
