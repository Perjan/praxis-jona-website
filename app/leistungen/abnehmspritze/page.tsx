import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import OzempicPricing from "app/components/OzempicPricing";

const title = 'Abnehmspritze'
const description = "Die Abnehmspritze (GLP-1-Analoga wie Ozempic®, Wegovy®, Mounjaro®) ist eine moderne medizinische Behandlungsmethode zur Gewichtsreduktion. Diese Medikamente wirken durch die Nachahmung des natürlichen Hormons GLP-1, das den Appetit reduziert, das Sättigungsgefühl verstärkt und die Magenentleerung verlangsamt. Die Behandlung erfolgt unter ärztlicher Aufsicht und wird individuell auf Ihre Bedürfnisse abgestimmt."
const url = '/leistungen/abnehmspritze'

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
            en: '/en/services/weight-loss-injection'
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

                <OzempicPricing buttonText="Termin buchen" language="de" />

                <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mb-12">
                    <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Wie funktioniert die Abnehmspritze?</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">GLP-1-Analoga (Glucagon-like Peptide-1) sind Medikamente, die das natürliche Hormon GLP-1 nachahmen. Dieses Hormon wird normalerweise im Darm produziert und spielt eine wichtige Rolle bei der Regulation des Appetits und des Blutzuckerspiegels.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Wirkungsweise umfasst:</p>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="mt-2">Appetithemmung: Reduziert das Hungergefühl</li>
                            <li className="mt-2">Verstärktes Sättigungsgefühl: Hilft dabei, sich schneller satt zu fühlen</li>
                            <li className="mt-2">Verlangsamte Magenentleerung: Führt zu längerem Sättigungsgefühl</li>
                            <li className="mt-2">Blutzuckerregulation: Kann auch bei Diabetes Typ 2 hilfreich sein</li>
                        </ul>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Für wen ist die Behandlung geeignet?</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Abnehmspritze ist für Erwachsene mit Übergewicht (BMI ≥ 30) oder Adipositas (BMI ≥ 27) mit mindestens einer gewichtsbedingten Begleiterkrankung geeignet. Vor Beginn der Behandlung führen wir eine gründliche medizinische Untersuchung durch, um sicherzustellen, dass die Behandlung für Sie geeignet ist.</p>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Mögliche Nebenwirkungen</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Wie bei allen Medikamenten können auch bei der Abnehmspritze Nebenwirkungen auftreten. Häufige Nebenwirkungen können sein:</p>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="mt-2">Übelkeit</li>
                            <li className="mt-2">Erbrechen</li>
                            <li className="mt-2">Durchfall</li>
                            <li className="mt-2">Verstopfung</li>
                            <li className="mt-2">Bauchschmerzen</li>
                        </ul>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Diese Nebenwirkungen sind meist mild bis mittelschwer und klingen oft nach einigen Wochen ab, wenn sich der Körper an das Medikament gewöhnt hat. Wir besprechen alle möglichen Risiken und Nebenwirkungen ausführlich mit Ihnen vor Beginn der Behandlung.</p>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Wichtige Hinweise</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Kosten für das Medikament (GLP-1-Analogon) sind nicht im Preis enthalten und werden derzeit nicht von den gesetzlichen Krankenkassen übernommen. Die Behandlung erfolgt als Selbstzahlerleistung gemäß der Gebührenordnung für Ärzte (GOÄ).</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Eine erfolgreiche Gewichtsreduktion erfordert eine umfassende Herangehensweise, die neben der medikamentösen Behandlung auch eine gesunde Ernährung, regelmäßige körperliche Aktivität und gegebenenfalls psychologische Unterstützung umfasst.</p>
                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}

