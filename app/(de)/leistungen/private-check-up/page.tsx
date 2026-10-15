import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import PrimaryButton from "app/components/PrimaryButton";
import PrivateCheckupPricingComponent from "app/components/PrivateCheckupPricingComponent";

const title = 'Privater Check-up'
const description = "Privater Check-up in Berlin-Mitte: zusätzliche Untersuchungen nach persönlichem Bedarf, mit ärztlicher Beratung zu Nutzen, Grenzen und Kosten."
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
                    
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Wir bieten Ihnen zwei Check-up-Pakete. Gemeinsam besprechen wir, welche Untersuchungen zu Ihrer persönlichen Situation passen.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die gesetzliche Gesundheitsuntersuchung dient der Früherkennung und der Beratung zu persönlichen Gesundheitsrisiken. Welche zusätzlichen Untersuchungen sinnvoll sein können, besprechen wir anhand Ihrer Beschwerden, Vorgeschichte und persönlichen Risiken.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Je nach Fragestellung kommen zum Beispiel ein Ruhe- oder Belastungs-EKG sowie Ultraschalluntersuchungen der Gefäße, Bauchorgane oder Schilddrüse infrage. Vorab erklären wir Ihnen den möglichen Nutzen und die Grenzen der jeweiligen Untersuchung.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Wir unterscheiden zwischen Kassenleistungen und zusätzlichen Selbstzahlerleistungen. Vor einer zusätzlichen Untersuchung besprechen wir die Kosten mit Ihnen. Sprechen Sie unser Praxis-Team an, wenn Sie Fragen zu den Paketen haben.</p>
                        
                    </SectionWithColor>
                 </div>

                 <PrivateCheckupPricingComponent buttonText="Jetzt online buchen" language="de" />

                    <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mt-8 sm:mt-0 mb-12">
                        <SectionWithColor backgroundClassName='bg-tealColor rounded-xl lg:rounded-2xl overflow-hidden'>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-2xl mt-4 mb-8 font-serif font-medium text-center leading-8 text-primaryLighter">Mehr über den gesetzlichen Check-up erfahren</h2>
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