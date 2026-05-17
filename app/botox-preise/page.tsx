import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import BotoxPriceTable from "app/components/BotoxPriceTable";
import { pricingSections, type PricingPageConfig } from "app/components/pricing/pricingData";
import { buildPricingJsonLd } from "app/components/pricing/pricingSchema";

const title = 'Botox Preise in Berlin & Berlin Mitte: Zonen, Kosten & Ablauf'
const description = "Aktuelle Botox Preise in Berlin und Berlin Mitte: transparente Kosten pro Zone, medizinische Anwendungen und häufige Fragen zu Ablauf, Haltbarkeit und Nachsorge in der Praxis Jona."
const url = '/botox-preise'

const faqs = [
    {
        question: "Was kostet Botox in Berlin?",
        answer: "Die Kosten starten je nach Region und Indikation ab 159 €. Die genauen Preise pro Zone finden Sie in der Preistabelle auf dieser Seite."
    },
    {
        question: "Wie viel kostet eine Botox-Spritze?",
        answer: "Wir rechnen nicht pauschal pro Spritze ab, sondern nach Behandlungsbereich und individuellem Aufwand. Die konkrete Empfehlung und der Preis werden vor der Behandlung besprochen."
    },
    {
        question: "Warum unterscheiden sich Botox-Kosten je nach Zone?",
        answer: "Der Aufwand hängt von Muskelaktivität, Anatomie, gewünschtem Ergebnis und Behandlungsbereich ab. Deshalb unterscheiden sich einzelne Zonen und Kombinationen preislich."
    },
    {
        question: "Was kostet Botox für Stirnfalten oder Zornesfalte?",
        answer: "Stirnfalten und Zornesfalte starten jeweils ab 199 €. Je nach Befund kann eine Kombination mehrerer Bereiche sinnvoll sein."
    },
    {
        question: "Wie lange hält eine Botox Behandlung?",
        answer: "Die Wirkung hält häufig etwa 3 bis 6 Monate an. Je nach Region, Muskelaktivität und individueller Reaktion kann die Dauer variieren."
    },
    {
        question: "Wann beginnt Botox zu wirken?",
        answer: "Die Wirkung zeigt sich meist nach einigen Tagen und entwickelt sich häufig innerhalb von 3 bis 14 Tagen weiter."
    },
    {
        question: "Welche Nebenwirkungen sind möglich?",
        answer: "Möglich sind zum Beispiel vorübergehende Rötungen, kleine Blutergüsse, Druckgefühl oder ein ungewohntes Spannungsgefühl. Individuelle Risiken werden vorab ärztlich besprochen."
    },
    {
        question: "Gibt es ein Beratungsgespräch vor der Behandlung?",
        answer: "Ja. Vor jeder Behandlung erfolgt eine ärztliche Beratung inklusive individueller Einschätzung und transparenter Preisbesprechung."
    }
]

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: url,
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 600,
                alt: 'Praxis Jona'
            }
        ],
    },
    alternates: {
        canonical: url,
        languages: {
            de: url,
            en: "/en/botox-prices",
            "x-default": url
        }
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: ['/images/og-image.png']
    }
}

export default function Page() {
    const pricingConfig: PricingPageConfig = {
        key: "aesthetics",
        locale: "de",
        title,
        description,
        canonical: url,
        alternate: "/en/botox-prices",
        eyebrow: "Botox Preise",
        intro: description,
        sections: [pricingSections.botox],
        breadcrumbs: [
            { name: "Startseite", href: "/" },
            { name: "Ästhetik", href: "/aesthetik" },
            { name: "Botox Preise", href: url },
        ],
        faqs,
    }
    const jsonLd = buildPricingJsonLd(pricingConfig);

    return (
        <>
            {jsonLd.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
                />
            ))}
            <div className="overflow-hidden bg-white relative isolate">
                <SectionWithColor backgroundClassName='bg-white'>
                    <div className="mx-auto max-w-4xl lg:mx-0">
                        <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
                        <p className="mt-4 text-base leading-7 text-primaryLighter">
                            Alle Preise verstehen sich als Richtwerte und werden vor der Behandlung transparent besprochen.
                            Für medizinische Fragestellungen oder individuelle Empfehlungen vereinbaren Sie bitte ein Beratungsgespräch.
                            Weitere ästhetische Preise finden Sie in der <a href="/aesthetik/preise" className="font-semibold underline underline-offset-4">Ästhetik-Preisübersicht</a>.
                        </p>
                    </div>
                </SectionWithColor>

                <BotoxPriceTable isEnglish={false} />

                <div className="max-w-4xl mx-auto px-4 pb-16 text-primaryLighter">
                    <h2 className="text-2xl font-serif text-primary">Botox Kosten in Berlin: häufige Fragen</h2>
                    <p className="mt-3 leading-7">Sie suchen nach "Botox Berlin Preise", "Botox Kosten Berlin" oder "Botox Stirn Kosten"? Auf dieser Seite finden Sie eine klare Preisübersicht für ästhetische und ausgewählte medizinische Anwendungen.</p>
                    <p className="mt-2 leading-7">Bei Praxis Jona in Berlin-Mitte erhalten Sie vorab eine ärztliche Einschätzung, damit Indikation, Zone und Kosten nachvollziehbar sind.</p>
                    <div className="mt-8 space-y-4">
                        {faqs.map((faq) => (
                            <details key={faq.question} className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
                                <summary className="cursor-pointer font-serif text-lg font-semibold text-primary">{faq.question}</summary>
                                <p className="mt-3 leading-7">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
