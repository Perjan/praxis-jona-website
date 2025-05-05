import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import PrimaryButton from "app/components/PrimaryButton";

const title = 'Private Check-up'
const description = "Ein privater Versicherungs-Check stellt sicher, dass dein aktueller Schutz noch zu deinem Leben passt. So kannst du Versorgungslücken erkennen, Leistungen optimieren und eventuell Beiträge sparen."
const url = '/leistungen/private-check-up'

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
            en: "/en/services/private-insurance-check-up",
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
                <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16">
                    <SectionWithColor backgroundClassName='bg-lightBeige'>
                        <h2 className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Zusätzliches Labor (für Selbstzahler, Berechnung nach der GOÄ):</h2>
                        <ul className="list-disc pl-5">
                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Spurenelemente, Vitamin D, sowie Hormonspiegel</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Parameter des Immunsystems, Blutgruppe</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Auswertung der Befunde und Beratung bezüglich Nahrungsergänzungsmittel.</p>
                            </li>
                        </ul>

                        <p className="mt-2 text-lg mb-8 leading-8 text-primaryLighter">Sprechen Sie uns an und wir beraten Sie gerne dazu.</p>
                        <PrimaryButton
                            href="https://www.doctolib.de/internist/berlin/gjolli-jonida/booking/new-patient?specialityId=1302&profile_skipped=true&utm_source=gjolli-jonida-website-button&utm_medium=referral&utm_campaign=website-button&utm_content=option-8&bookingFunnelSource=external_referral"
                            fullWidth={true}
                        >
                            Termin buchen
                        </PrimaryButton>

                    </SectionWithColor>

                    </div>

                    <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16">
                        <SectionWithColor backgroundClassName='bg-tealColor'>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-2xl mt-4 mb-8 font-serif font-medium text-center leading-8 text-primaryLighter">Mehr über den öffentlichen Gesetzlichen Check-up erfahren</h2>
                            <PrimaryButton
                                href="/leistungen/gesetzliche-check-up"
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