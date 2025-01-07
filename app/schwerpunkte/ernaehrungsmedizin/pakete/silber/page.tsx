import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Silber Ernährungspaket - Monatliche Betreuung'
const description = "Ab 155€ pro Monat - Der Silber-Plan ist perfekt für alle, die eine strukturierte, aber flexible Beratung wünschen, ohne auf regelmäßige Check-ins verzichten zu müssen."
const url = '/schwerpunkte/ernaehrungsmedizin/pakete/silber'

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
            en: '/en/focus-areas/nutritional-medicine/packages/silver'
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
                    <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col justify-between rounded-lg p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-[#f5f5f7] to-[#e5e7eb] backdrop-blur-sm bg-opacity-50">
                        <div>
                            <h2 className="text-center text-2xl font-serif font-medium text-primary">Silber</h2>
                            <p className="mt-4 text-center text-sm text-primaryLighter">Monatliche Betreuung</p>
                            <p className="mt-4 text-center text-4xl font-serif font-bold text-primary">Ab 155€</p>
                            <p className="mt-4 text-center text-sm text-primary font-medium">pro Monat (Mindestlaufzeit: 3 Monate)</p>
                            
                            <div className="mt-8">
                                <h3 className="text-xl font-serif font-medium text-primary mb-4">So funktioniert's</h3>
                                <ul className="space-y-4 text-primaryLighter">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Anamnesegespräch: 60 Minuten via Zoom oder in der Praxis – wir analysieren deinen aktuellen Status und setzen klare Ziele.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Individueller Plan: Innerhalb von 2–3 Tagen erhältst du deinen auf dich abgestimmten Aktionsplan.</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-serif font-medium text-primary mb-4 mt-8">Leistungen im Überblick</h3>
                                <ul className="space-y-4 text-primaryLighter">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Monatlicher Check-in via Zoom oder in der Praxis</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Detaillierte Analyse deines Ernährungstagebuchs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Aktionsplan inkl. 1 Beispieltag und 12-Wochen-Periodisierung</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Unterstützung bei der Einkaufsliste und Mahlzeitenplanung</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Berechnung deiner individuellen Kalorien- und Makronährstoffe</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-serif font-medium text-primary mb-4 mt-8">Geeignet für</h3>
                                <ul className="space-y-4 text-primaryLighter">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Fettabbau: Gesund und nachhaltig</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Muskelaufbau: Effektive und zielgerichtete Unterstützung</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Lebensstil-Optimierung: Bei Erkrankungen wie Fettstoffwechselstörungen, Diabetes, Bluthochdruck oder Reizdarmsyndrom</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8">
                            <a
                                href="/termin-buchen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Termin buchen
                            </a>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16">
                    <SectionWithColor backgroundClassName='bg-lightBeige'>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Ideal für alle, die mit einem strukturierten Aktionsplan über 8–12 Wochen arbeiten möchten.</p>
                    </SectionWithColor>
                </div>
            </div>
        </>
    )
} 