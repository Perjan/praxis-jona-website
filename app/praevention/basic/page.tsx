import { Metadata } from "next"
import Link from "next/link"
import SectionWithColor from "app/SectionWithColor"

const title = "BASIC Paket - Ab 1.200 Euro"
const description = "Erfassung des aktuellen körperlichen Leistungs- und Gesundheitsstatus sowie Einführung erster strukturierter Trainings- und Regenerationsstrategien. Zugleich Früherkennung psychischer Belastungsfaktoren und Einführung erster stabilisierender Strategien."
const url = "/praevention/basic"

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: url,
    },
    alternates: {
        canonical: url,
    }
}

export default function BasicPage() {
    return (
        <div className="overflow-hidden bg-white relative isolate">
            <SectionWithColor backgroundClassName='bg-white'>
                <div className="mx-auto max-w-4xl lg:mx-0">
                    <Link
                        href="/praevention"
                        className="text-primary hover:text-primaryLighter font-medium inline-flex items-center gap-2 mb-8"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Zurück zur Übersicht
                    </Link>
                    <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                    <p className="mt-4 text-lg leading-8 text-primaryLighter">{description}</p>
                </div>
            </SectionWithColor>

            <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mb-12">
                <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-serif font-semibold text-primary">
                            Medizinischer Check-up
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Ärztliche Anamnese: Beschwerden, Familienanamnese, Medikamente, Lebensstil</li>
                            <li>Basis-Vitalparameter: Blutdruck, Puls, SpO₂, Temperatur</li>
                            <li>Ruhe-EKG</li>
                            <li>Klinischer Ganzkörperstatus</li>
                            <li>Ultraschall: Schilddrüse</li>
                            <li>Basis-Blutprofil: Blutbild, ApoB, LDL, TG, CRP-hs, HbA1c, Insulin/HOMA, Ferritin, TSH, Vitamin D, B12 + HoloTC, Folsäure, Elektrolyte, Urin-Stix</li>
                            <li>Ernährungsanamnese</li>
                        </ul>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Mentale Gesundheitsvorsorge (2 Sitzungen)
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Anamnese & diagnostische Screenings</li>
                            <li>Erkennen zentraler Risikobereiche → Stress, Schlaf, Emotionsregulation</li>
                            <li>Einführung grundlegender Selbstregulationsmethoden</li>
                            <li>Entwicklung eines individuellen 4-Wochen-Selbstfürsorgeplans</li>
                        </ul>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Fitness- & Gesundheits-Check-up
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Anamnese, Haltung, Beweglichkeit, Kraft, Ausdauer</li>
                            <li>Identifikation zentraler körperlicher Risikobereiche (Bewegungsmangel, Dysbalancen, Belastungsverträglichkeit)</li>
                            <li>Einführung grundlegender Bewegungs-, Atem- und Stabilisationsprinzipien</li>
                            <li>Durchführung von 1 individuell angepassten Personal-Trainingseinheit à 60 Minuten</li>
                            <li>Entwicklung eines 4-Wochen-Basis-Trainings- & Regenerationsplans</li>
                        </ul>

                        <div className="mt-12 p-6 bg-white/50 rounded-xl">
                            <p className="text-base text-primaryLighter italic">
                                Alle Module werden individuell an die Ausgangslage, Belastungsfaktoren und Ressourcen der Klient:innen sowie den aktuellen Gesundheitszustand, das Leistungsniveau sowie die persönlichen Ziele angepasst.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center justify-center">
                            <a
                                href="mailto:praevention@praxisjona.de?subject=Anfrage BASIC Paket"
                                className="rounded-xl bg-primary px-6 py-3.5 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primaryLighter hover:shadow-md no-underline"
                            >
                                Unverbindliches Erstgespräch anfragen
                            </a>
                        </div>
                    </div>
                </SectionWithColor>
            </div>
        </div>
    )
}
