import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import PrimaryButton from "app/components/PrimaryButton";
import PrivateCheckupPricingComponent from "app/components/PrivateCheckupPricingComponent";

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
                <div className="px-4 lg:px-0 max-w-7xl mx-auto">
                    <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                        <h2 className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Umfassende Vorsorge für Ihre Gesundheit</h2>
                    
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Wir bieten Ihnen zwei maßgeschneiderte Check-up-Pakete, die optimal auf Ihre individuellen Bedürfnisse abgestimmt sind.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die gesetzliche Gesundheitsuntersuchung, die ab dem 35. Lebensjahr alle drei Jahre erstattet wird, deckt nur grundlegende Tests wie die Bestimmung von Blutzucker, Cholesterin und eine Urinuntersuchung ab. Aus unserer fachärztlichen Sicht reicht dies nicht aus, um alle relevanten Gesundheitsrisiken rechtzeitig zu erkennen.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Unsere erweiterten Vorsorgeuntersuchungen ergänzen diese Basisleistungen sinnvoll. Sie umfassen unter anderem eine detaillierte Untersuchung Ihres Herz-Kreislauf-Systems (z. B. Ruhe- und Belastungs-EKG), Gefäßuntersuchungen wie Schlaganfall-Checks und eine internistische Krebsvorsorge durch Ultraschalluntersuchungen der Bauchorgane und der Schilddrüse.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Ein Teil der Leistungen wird von Ihrer gesetzlichen Krankenkasse übernommen, für die Zusatzuntersuchungen beraten wir Sie gerne individuell. Sprechen Sie unser Praxis-Team an – gemeinsam finden wir das passende Vorsorgepaket für Sie.</p>
                        
                    </SectionWithColor>
                 </div>

                 <PrivateCheckupPricingComponent buttonText="Jetzt online buchen" language="de" />

                    <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mt-8 sm:mt-0 mb-12">
                        <SectionWithColor backgroundClassName='bg-tealColor rounded-xl lg:rounded-2xl overflow-hidden'>
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