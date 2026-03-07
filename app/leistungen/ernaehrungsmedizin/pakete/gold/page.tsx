import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import ConsultationPromiseDE from "app/components/ConsultationPromiseDE";
import React from "react";
import { Constants } from "app/Constants";

const title = 'Gold Ernährungspaket - Intensive Betreuung'
const description = "Ab 280€ pro Monat - Der Gold-Plan ist ideal für alle, die eine intensive und engmaschige Betreuung für maximale Ergebnisse suchen."
const url = '/leistungen/ernaehrungsmedizin/pakete/gold'

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
            en: '/en/focus-areas/nutritional-medicine/packages/gold',
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
    return (
        <>
            <div className="overflow-hidden bg-white relative isolate">
                <SectionWithColor backgroundClassName='bg-white'>
                    <div className="mx-auto max-w-4xl lg:mx-0">
                        <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
                    </div>
                </SectionWithColor>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col justify-between rounded-lg p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-[#fff9e6] to-[#fff3cc] backdrop-blur-sm bg-opacity-50">
                        <div>
                            <h2 className="text-center text-2xl font-serif font-medium text-primary">Gold</h2>
                            <p className="mt-4 text-center text-sm text-primaryLighter">Intensive Betreuung</p>
                            <p className="mt-4 text-center text-4xl font-serif font-bold text-primary">Ab 280€</p>
                            <p className="mt-4 text-center text-sm text-primary font-medium">pro Monat (Mindestlaufzeit: 2 Monate)</p>
                            
                            <div className="mt-8">
                                <h3 className="text-xl font-serif font-medium text-primary mb-4">So funktioniert's</h3>
                                <ul className="space-y-4 text-primaryLighter">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Anamnesegespräch: 60 Minuten via Zoom oder in der Praxis – wir definieren deine Ziele und erstellen deinen individuellen Aktionsplan.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Individueller Plan: Innerhalb von 2–3 Tagen erhältst du deinen maßgeschneiderten Aktionsplan.</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-serif font-medium text-primary mb-4 mt-8">Leistungen im Überblick</h3>
                                <ul className="space-y-4 text-primaryLighter">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Zweiwöchentliche Check-ins via Zoom oder in der Praxis</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Analyse deines Ernährungstagebuchs und kontinuierliche Optimierung</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Aktionsplan mit 2 individuellen Beispieltagen und 8-Wochen-Periodisierung</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Langfristige Planung und Anpassung zur Zielerreichung</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Unterstützung bei der Einkaufsliste und Mahlzeitenplanung</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Berechnung deiner individuellen Kalorien- und Makronährstoffe</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Aktionsanpassungen: Alle zwei Wochen optimiert für deinen Alltag und Ziele</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Supplement Guide: Empfehlungen für unterstützende Nahrungsergänzungsmittel</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-serif font-medium text-primary mb-4 mt-8">Geeignet für</h3>
                                <ul className="space-y-4 text-primaryLighter">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Fettabbau: Mit engmaschiger Betreuung</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Muskelaufbau: Maßgeschneidert für deine Bedürfnisse</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Lebensstil-Optimierung: Für Erkrankungen wie Fettstoffwechselstörungen, Diabetes, Bluthochdruck oder Reizdarmsyndrom</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8">
                            <a
                                href={Constants.appointmentUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Termin buchen
                            </a>
                        </div>
                    </div>
                </div>

                <ConsultationPromiseDE />
            </div>
        </>
    )
} 