import { Metadata } from "next"
import Link from "next/link"
import SectionWithColor from "app/SectionWithColor"

const title = "MEDIUM Paket - Ab 2.400 Euro"
const description = "Vertiefte Analyse körperlicher Belastungsmuster und gezielte Verbesserung von Kraft, Stabilität und Belastungssteuerung sowie vertiefte Analyse psychischer Belastungsmuster und Stärkung der Stressregulation."
const url = "/praevention/medium"

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

export default function MediumPage() {
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
                            Alle Leistungen aus dem Basic Paket
                        </h2>
                        <p className="mt-4 text-lg text-primaryLighter">
                            Zusätzlich zu allen Leistungen des BASIC Pakets:
                        </p>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Erweiterte medizinische Diagnostik
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Lungenfunktion: FEV1, FVC, Tiffeneau</li>
                            <li>Belastungstest: Belastungs-EKG, VO₂max, HRR</li>
                            <li>Körperzusammensetzung & Funktion: BIA, Griffkraft</li>
                            <li>Ultraschall Abdomen: Leber, Niere, Milz, Aorta</li>
                            <li>Erweitertes Blutprofil: Schilddrüse (TSH, fT3, fT4, TPO-AK), Sexualhormone, DHEAS, Cortisol morgens</li>
                            <li>Mikronährstoffe: Zink, Selen</li>
                            <li>Gefäß- & Stoffwechselmarker: Omega-3-Index, Homocystein, Lp(a), Lp-PLA2</li>
                            <li>Standard-Ernährungsanamnese inkl. Plant Points</li>
                        </ul>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Mentale Belastbarkeit & Stressregulation (3 Sitzungen)
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Erweiterte Diagnostik zu Stressmustern und Belastungszyklen</li>
                            <li>Arbeit an Emotions- und Stressregulation</li>
                            <li>Einführung individuell geeigneter Mikrointerventionen</li>
                            <li>Erstellung eines persönlichen Präventionsrahmens (4–6 Wochen)</li>
                        </ul>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Erweiterter funktioneller Leistungs-Check und Trainingsprogramm
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Erweiterter funktioneller Leistungs-Check (Bewegungsmuster, Kraftprofile, Belastungsreaktionen)</li>
                            <li>Analyse von Alltags- und Trainingsbelastungen</li>
                            <li>Strukturierte Arbeit an Kraft, Mobilität, Stabilität und Koordination</li>
                            <li>Einführung individuell geeigneter Training-Mikrointerventionen für Alltag & Beruf</li>
                            <li>Durchführung von 2 personalisierten Personal-Trainingseinheiten à 60 Minuten</li>
                            <li>Erstellung eines persönlichen Trainings- und Belastungsrahmens (4–6 Wochen)</li>
                        </ul>

                        <div className="mt-12 p-6 bg-white/50 rounded-xl">
                            <p className="text-base text-primaryLighter italic">
                                Alle Module werden individuell an die Ausgangslage, Belastungsfaktoren und Ressourcen der Klient:innen sowie den aktuellen Gesundheitszustand, das Leistungsniveau sowie die persönlichen Ziele angepasst.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center justify-center">
                            <a
                                href="mailto:praevention@praxisjona.de?subject=Anfrage MEDIUM Paket"
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
