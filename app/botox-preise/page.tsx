import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import BotoxPriceTable from "app/components/BotoxPriceTable";

const title = 'Botox Preise in Berlin: Zonen, Kosten & Ablauf'
const description = "Aktuelle Botox Preise in Berlin: transparente Kosten pro Zone, medizinische Anwendungen und häufige Fragen zu Ablauf, Haltbarkeit und Nachsorge in der Praxis Jona."
const url = '/botox-preise'

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
            en: "/en/botox-prices"
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
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Was kostet Botox in Berlin?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Die Kosten starten je nach Region und Indikation ab 159€. Die genauen Preise pro Zone finden Sie in der Preistabelle auf dieser Seite."
                }
            },
            {
                "@type": "Question",
                name: "Wie lange hält eine Botox Behandlung?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Die Wirkung hält in der Regel mehrere Monate an. Je nach Region, Muskelaktivität und individueller Reaktion kann die Dauer variieren."
                }
            },
            {
                "@type": "Question",
                name: "Gibt es ein Beratungsgespräch vor der Behandlung?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja. Vor jeder Behandlung erfolgt eine ärztliche Beratung inklusive individueller Einschätzung und transparenter Preisbesprechung."
                }
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="overflow-hidden bg-white relative isolate">
                <SectionWithColor backgroundClassName='bg-white'>
                    <div className="mx-auto max-w-4xl lg:mx-0">
                        <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
                        <p className="mt-4 text-base leading-7 text-primaryLighter">
                            Alle Preise verstehen sich als Richtwerte und werden vor der Behandlung transparent besprochen.
                            Für medizinische Fragestellungen oder individuelle Empfehlungen vereinbaren Sie bitte ein Beratungsgespräch.
                        </p>
                    </div>
                </SectionWithColor>

                <BotoxPriceTable isEnglish={false} />

                <div className="max-w-4xl mx-auto px-4 pb-16 text-primaryLighter">
                    <h2 className="text-2xl font-serif text-primary">Botox Berlin: Häufige Fragen</h2>
                    <p className="mt-3">Sie suchen nach "Botox Berlin Preise" oder "Botox Kosten Berlin"? Auf dieser Seite finden Sie eine klare Preisübersicht für ästhetische und medizinische Anwendungen.</p>
                    <p className="mt-2">Bei Praxis Jona in Berlin erhalten Sie vorab eine ärztliche Einschätzung, damit Indikation, Zone und Kosten nachvollziehbar sind.</p>
                </div>
            </div>
        </>
    )
}