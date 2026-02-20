import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Mikronährstoffanalyse'
const description = "Ein zentraler Bestandteil unserer Betreuung ist die gezielte Analyse Ihres Mikronährstoffstatus."
const url = '/leistungen/mikronahrstoffanalyse'

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
            en: '/en/services/micro-nutrient-analysis',
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
                <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mb-12">
                    <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Dabei geht es nicht um pauschale Screenings, sondern um fundierte Diagnostik: <strong>Auf Basis Ihrer konkreten Beschwerden, Ihres Lebensstils und einer detaillierten Ernährungsanamnese empfehlen wir gezielt Laboruntersuchungen</strong>, die medizinisch sinnvoll sind.</p>

                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Eine optimale Versorgung mit essenziellen Mikronährstoffen – wie Vitaminen, Spurenelementen, Mineralstoffen und Aminosäuren – ist entscheidend für Ihre Energie, mentale Klarheit, Immunfunktion, Regeneration und Leistungsfähigkeit.</p>

                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Ob chronische Erschöpfung, Infektanfälligkeit, Verdauungsbeschwerden, Zyklusveränderungen, Kinderwunsch oder Konzentrationsprobleme – häufig stecken funktionelle Mängel dahinter, die im Standardlabor nicht auffallen. Durch gezielte Diagnostik decken wir diese auf.</p>

                                <p className="mt-2 text-lg leading-8 text-primaryLighter"><strong>Auf Grundlage der Laborergebnisse erstellen wir für Sie einen individuellen Therapieplan</strong>, der Empfehlungen zu Supplementen und ggf. Infusionen enthält - maßgeschneidert auf Ihre Werte und Ihren Bedarf.</p>
                           
                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Transparente Kostenstruktur</h2>
                        <ul className="list-disc pl-5">
                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Die <strong>Beratung</strong>, einschließlich Vor- und Nachbereitung, ist eine ärztliche Privatleistung.</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Die <strong>Laborkosten</strong> richten sich nach den tatsächlich bestimmten Parametern und werden separat berechnet.</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Alle Leistungen werden nach der Gebührenordnung für Ärzte (GOÄ) abgerechnet.</p>
                            </li>
                        </ul>

                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Diese Diagnostik richtet sich an Menschen, die ihre Gesundheit aktiv erhalten und verbessern möchten – sei es zur Leistungssteigerung, Immunstärkung oder zur gezielten Prävention altersbedingter Veränderungen.</p>
                           
                            
                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}