import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Individualisierte Infusionstherapie bei Mikronährstoffmangel'
const description = "In unserer Praxis bieten wir gezielte Infusionstherapien bei nachgewiesenem Mangel wie z.B. an Eisen, Vitamin B12 oder Folsäure an - individuell angepasst an Ihre Laborwerte und Bedürfnisse."
const url = '/leistungen/infusionstherapie'

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
            en: '/en/services/infusion-therapy'
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
                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Eiseninfusion bei Eisenmangel</h2>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Ein Eisenmangel kann zu Symptomen wie Müdigkeit, Konzentrationsstörungen, Haarausfall oder erhöhter Infektanfälligkeit führen - selbst bei unauffälligem Hämoglobinwert.</p>

                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Wenn ein relevanter Mangel anhand der Laborwerte (z. B. Ferritin, Transferrinsättigung) festgestellt wird, kann eine Eiseninfusion sinnvoll sein – insbesondere, wenn eine orale Therapie nicht vertragen wird oder nicht ausreichend wirkt.</p>

                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Abrechnung erfolgt nach der Gebührenordnung für Ärzte (GOÄ); die Kosten beginnen ab 120 Euro und können je nach Eisendosis variieren.</p>
                           
                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Vitamin B12- und Folsäure-Infusionen</h2>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Insbesondere bei veganer oder vegetarischer Ernährung kann es zu einem schleichenden Mangel an Vitamin B12 und/oder Folsäure kommen – mit Folgen wie Erschöpfung, neurologischen Beschwerden oder Blutbildveränderungen.</p>

                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Nach entsprechender Diagnostik bieten wir eine schonende und effektive Auffüllung der Speicher per Infusion an.</p>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Kosten & Abrechnung</h2>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Diese Infusionen sind Privatleistungen. Sie werden nach der Gebührenordnung für Ärzte (GOÄ) abgerechnet. Die Höhe der Kosten hängt von Art und Umfang der Behandlung ab und wird im Vorfeld transparent mit Ihnen besprochen.</p>
                            
                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}