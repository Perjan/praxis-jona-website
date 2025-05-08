import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Ultraschalluntersuchung'
const description = "Die Ultraschalluntersuchung ist ein nicht-invasives Verfahren zur Beurteilung der Struktur und Funktion von Organen und Gefäßen. Dabei wird ein Ultraschall-Gerät verwendet, um Bilder von den Organen und Gefäßen zu erstellen. Diese Bilder können dann von einem Arzt ausgewertet werden, um eine Diagnose zu stellen und eine Behandlung zu planen."
const url = '/leistungen/ultraschalluntersuchung'

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
            en: '/en/services/ultrasound-examination'
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
                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Diagnostik der Bauchorgane (Abdomensonographie)</h2>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Ultraschalluntersuchung des Bauchraums dient der Diagnose und Überwachung verschiedener Erkrankungen. Mit dieser Methode können die Größe, Struktur und Position von Bauchorganen wie Leber, Gallenblase, Milz, Nieren, Pankreas, Prostata, Lymphknoten, Bauchaorta, Harnblase und Darm beurteilt werden. Für eine optimale Untersuchung sollte man nüchtern sein, um Darmgasüberlagerungen zu vermeiden und eine gefüllte Gallenblase zu gewährleisten.</p>

                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Abrechnung erfolgt nach der Gebührenordnung für Ärzte (GOÄ); die Kosten beginnen ab 113,07 Euro und können je nach Aufwand variieren. Bei medizinischer Indikation werden die Kosten für diese Untersuchung von der Krankenkasse übernommen.</p>
                           

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Ultraschall der Schilddrüse (Schilddrüsensonographie)</h2>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Durch die Schilddrüsensonographie wird die Größe, Struktur und eventuelle Veränderungen wie Knoten oder Zysten in der Schilddrüse beurteilt. Diese Untersuchung liefert sofortige Ergebnisse und ist ein wichtiges Werkzeug zur Diagnose und Überwachung von Schilddrüsenerkrankungen wie Schilddrüsenknoten und Schilddrüsenentzündungen.</p>

                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Abrechnung erfolgt nach der Gebührenordnung für Ärzte (GOÄ); die Kosten beginnen ab 51,46 Euro und können je nach Aufwand variieren. Bei medizinischer Indikation werden die Kosten für diese Untersuchung von der Krankenkasse übernommen.</p>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Ultraschall der hirnversorgenden Gefäße (Carotisduplex)</h2>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Carotisduplex-Untersuchung ist ein schmerzloses, nicht-invasives Ultraschallverfahren zur Untersuchung der Halsschlagadern (Arteria carotis). Dabei werden sowohl die Struktur der Gefäße als auch der Blutfluss beurteilt. Diese Untersuchung hilft, Verengungen oder Plaques der Halsschlagadern zu erkennen, die das Schlaganfallrisiko erhöhen können. Die Ergebnisse sind sofort verfügbar und liefern wichtige Informationen zur Vorsorge und Behandlung von Gefäßerkrankungen. </p>
                           
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Abrechnung erfolgt nach der Gebührenordnung für Ärzte (GOÄ); die Kosten beginnen ab 157,96 Euro und können je nach Aufwand variieren.</p>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Ultraschall der Beingefäße (Beinvenenduplex)</h2>
                        
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Beinvenenduplex-Untersuchung ist ein nicht-invasives Ultraschallverfahren zur Beurteilung der Venen in den Beinen. Dabei werden sowohl die Struktur der Venen als auch der Blutfluss durch sie mittels B-Bild-Ultraschall und Doppler-Ultraschall untersucht. Diese Untersuchung hilft, Thrombosen (Blutgerinnsel) und Venenklappenerkrankungen frühzeitig zu erkennen.</p>
                            
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Abrechnung erfolgt nach der Gebührenordnung für Ärzte (GOÄ); die Kosten beginnen ab 113,07 Euro und können je nach Aufwand variieren.</p>
                            
                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}