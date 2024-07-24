import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";

const title = 'Schilddrüse'
const description = "Die Schilddrüse, ein kleines, schmetterlingsförmiges Organ im Halsbereich, spielt eine zentrale Rolle für unseren Stoffwechsel. Sie produziert Hormone (T4, T3 und Calcitonin), die für zahlreiche Körperfunktionen wichtig sind, wie die Regulation der Körpertemperatur, des Energiehaushalts und des Herzschlags."
const url = '/schwerpunkte/schilddruese'

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
            en: '/en/focus-areas/thyroid-gland'
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
                <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16 ">
                    <SectionWithColor backgroundClassName='bg-lightBeige'>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Schilddrüse produziert die beiden Hormone T3 (Triiodthyronin) und T4 (Thyroxin, auch Tetraiodthyronin genannt). T4 wird in größeren Mengen gebildet, ist jedoch von sich aus nur geringfügig aktiv. Im Blut und im Zytosol der meisten Körperzellen wird T4 durch eine Deiodase in das biologisch aktivere T3 umgewandelt. Die physiologische Rolle von Calcitonin ist eher gering, weil der Knochen- und Calciumstoffwechsel hauptsächlich durch das Parathormon der Nebenschilddrüsen und durch Vitamin D reguliert wird.</p>

                        <p className="mt-6 text-lg leading-8 text-primaryLighter">Eine Fehlfunktion der Schilddrüse kann vielfältige Symptome verursachen und beeinträchtigt das Wohlbefinden erheblich. Die häufigsten Erkrankungen sind Hypothyreose (z.B. Hashimoto), Hyperthyreose (z.B. M. Basedow) und Schilddrüsenknoten.</p>

                        <h2 className="mt-6 text-2xl leading-8 font-serif font-semibold text-primaryLighter">Die Symptome bei einer Überfunktion</h2>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Schneller Herzschlag</li>
                            <li>Gewichtsverlust trotz vermehrter Kalorienzufuhr</li>
                            <li>Feinschlägiger Fingertremor</li>
                            <li>Leicht erhöhte Körpertemperatur mit vermehrtem Schwitzen</li>
                            <li>Nervosität, Schlafstörungen, innere Unruhe</li>
                        </ul>

                        <h2 className="text-2xl mt-6 leading-8 font-serif font-semibold text-primaryLighter">Die Symptome bei einer Unterfunktion</h2>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Niedriger Herzschlag</li>
                            <li>Gewichtszunahme trotz geringer Kalorienzufuhr</li>
                            <li>Kälteempfindlichkeit und blasse, trockene Haut</li>
                            <li>Müdigkeit, Depression</li>
                            <li>Struppiges, sprödes Haar</li>
                        </ul>

                        <h2 className="text-2xl mt-8 font-serif font-semibold leading-8 text-primaryLighter">Diagnose</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Schilddrüsendiagnostik ist entscheidend, um solche Erkrankungen frühzeitig zu erkennen und zu behandeln. Sie besteht aus:</p>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="text-xl leading-6 mt-2 font-serif font-semibold">Blutuntersuchungen</li>
                            <p> Überprüfung der Schilddrüsenhormone im Blut, um die Funktion der Schilddrüse zu beurteilen. Der TSH-Spiegel im Blut reagiert äußerst sensibel auf Veränderungen der Schilddrüsenhormonspiegel. Daher ist das im Serum gemessene TSH ein wichtiger Parameter zur Beurteilung der Schilddrüsenfunktion und der erste Schritt in der klinischen Diagnostik der Schilddrüse.</p>
                            <li className="text-xl mt-4 font-serif font-semibold">Ultraschalluntersuchung</li>
                            <p>Eine bildgebende Methode, um die Größe, Struktur und mögliche Knoten oder Zysten in der Schilddrüse zu erkennen.</p>
                            <li className="text-xl mt-4 font-serif font-semibold">Schilddrüsenszintigraphie</li>
                            <p>Die Untersuchung wird nur bei verdächtigen Veränderungen im Ultraschall empfohlen.</p>
                        </ul>

                    </SectionWithColor>
                    {/* <SectionWithColor backgroundClassName='bg-tealColor my-16'>
                        
                        <p className="text-3xl mt-4 font-serif font-semibold leading-8 text-primaryLighter">Diagnose</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Schilddrüsendiagnostik ist entscheidend, um solche Erkrankungen frühzeitig zu erkennen und zu behandeln. Sie besteht aus:</p>

                        <p className="text-xl mt-2 font-serif font-semibold leading-8 text-primaryLighter">Blutuntersuchungen</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter"> Überprüfung der Schilddrüsenhormone im Blut, um die Funktion der Schilddrüse zu beurteilen. Der TSH-Spiegel im Blut reagiert äußerst sensibel auf Veränderungen der Schilddrüsenhormonspiegel. Daher ist das im Serum gemessene TSH ein wichtiger Parameter zur Beurteilung der Schilddrüsenfunktion und der erste Schritt in der klinischen Diagnostik der Schilddrüse.</p>

                        <p className="text-xl mt-2 font-serif font-semibold leading-8 text-primaryLighter">Ultraschalluntersuchung</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Eine bildgebende Methode, um die Größe, Struktur und mögliche Knoten oder Zysten in der Schilddrüse zu erkennen.</p>

                        <p className="text-xl mt-2 font-serif font-semibold leading-8 text-primaryLighter">Schilddrüsenszintigraphie</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Untersuchung wird nur bei verdächtigen Veränderungen im Ultraschall empfohlen.</p>
                    </SectionWithColor> */}
                </div>
            </div>
        </>
    )
}