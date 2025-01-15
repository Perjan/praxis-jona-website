import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Bronze Ernährungspaket - Einmalige Beratung'
const description = "Einmaliges Beratungsgespräch für 149€ - Perfekt für alle, die eine individuelle Beratung möchten, aber keine längerfristige Betreuung benötigen."
const url = '/schwerpunkte/ernaehrungsmedizin/pakete/bronze'

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
            en: '/en/focus-areas/nutritional-medicine/packages/bronze'
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
                    <div className="max-w-4xl mx-auto lg:mx-0 flex flex-col justify-between rounded-lg p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-[#fdf1ec] to-[#f7e6e0] backdrop-blur-sm bg-opacity-50">
                        <div>
                            <p className="text-center text-2xl font-serif font-medium text-primary">Bronze</p>
                            <p className="mt-4 text-center text-sm text-primaryLighter">Einmalig 60 Minuten</p>
                            <p className="mt-4 text-center text-4xl font-serif font-bold text-primary">149€</p>
                            <p className="mt-4 text-center text-sm text-primary font-medium">Einmalig</p>
                            
                            <div className="mt-8">
                                <h2 className="text-xl font-serif font-medium text-primary mb-4">Für wen ist diese Beratung geeignet?</h2>
                                <p className="text-primaryLighter mb-6">
                                    Diese Beratung richtet sich an Personen, die bereits eine überwiegend gesunde Ernährungsweise verfolgen und nach einer Feinjustierung suchen. Wenn du also schon viel Wert auf gesunde Ernährung legst, aber noch das gewisse Etwas verbessern möchtest – sei es für deinen Sport, dein Wohlbefinden oder deine Gesundheit – bist du hier genau richtig.
                                </p>

                                <h2 className="text-xl font-serif font-medium text-primary mb-4">Was erwartet dich?</h2>
                                <ul className="space-y-4 text-primaryLighter">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <div>
                                            <h3 className="font-bold">Persönliche Beratung (ca. 60 Minuten):</h3>
                                            <p>Wir nehmen uns die Zeit, deine aktuellen Gewohnheiten detailliert zu analysieren und darauf basierend einen individuellen Aktionsplan zu entwickeln, der perfekt auf dich zugeschnitten ist.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <div>
                                            <h3 className="font-bold">Makronährstoffverteilung & Periodisierung:</h3>
                                            <p>Gemeinsam erarbeiten wir die optimale Verteilung deiner Makronährstoffe (Kohlenhydrate, Fette, Proteine) und stimmen diese auf deinen Alltag, deine Ziele und deinen Aktivitätslevel ab.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <div>
                                            <h3 className="font-bold">Analyse deines Ernährungstagebuchs:</h3>
                                            <p>Wir werfen einen genauen Blick auf dein Ernährungstagebuch, um Feinheiten zu erkennen und gezielte Verbesserungen vorzunehmen.</p>
                                        </div>
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
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Nach Terminabsprache werde ich, individuell und zielorientiert dich beraten, um dir die bestmöglichen Ergebnisse zu liefern.</p>
                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}