import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import PrimaryButton from "app/components/PrimaryButton";

const title = 'Gesetzliche Check-up'
const description = "Ab 35 Jahre besteht die Möglichkeit alle 3 Jahre eine Vorsorgeuntersuchung durchführen zu lassen. Zusätzlich gibt es jetzt die Möglichkeit, dass Versicherte einmalig zwischen ihrem 18. und 35. Geburtstag einen Check-up in Anspruch nehmen können."
const url = '/leistungen/gesetzliche-check-up'

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
            en: "/en/services/public-insurance-check-up",
            de: url
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
                <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16">
                    <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                        <h2 className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Von der gesetzlichen Krankenkasse wird übernommen:</h2>
                        <ul className="list-disc pl-5">
                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Anamnese</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Körperliche Untersuchung</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Ruhe-EKG</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Beratung 15 Minuten</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Labor (Blutbild, Eisen, Cholesterinwert, Leber-, Schilddrüsen- und Nierenwerte, Nüchtern Blutzucker, HbA1C, UrinStix)</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Männer ab 50 Jahren: Zwei Darmspiegelungen im Abstand von 10 Jahren, Test auf verborgenes Blut alle zwei Jahre</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Frauen ab 55 Jahren: Zwei Darmspiegelungen im Abstand von 10 Jahren, Test auf verborgenes Blut alle zwei Jahre</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Ab 65 Jahren einmalig Ultraschall der Bauchaorta zur Früherkennung der Bauchaortenaneurysma</p>
                            </li>
                        </ul>

                    </SectionWithColor>
                    
                    </div>
                    <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mt-8 sm:mt-0 mb-12">
                    <SectionWithColor backgroundClassName='bg-tealColor rounded-xl lg:rounded-2xl overflow-hidden'>
                        <h2 className="text-2xl mt-4 mb-8 font-serif font-medium text-center leading-8 text-primaryLighter">Zusätzliches Labor (für Selbstzahler, Berechnung nach der GOÄ)</h2>
                        <div className="flex flex-col items-center justify-center">
                        <PrimaryButton
                            href="/leistungen/private-check-up"
                        >
                            Mehr erfahren
                        </PrimaryButton>
                        </div>
                    </SectionWithColor>
                    </div>
            </div>
        </>
    )
}