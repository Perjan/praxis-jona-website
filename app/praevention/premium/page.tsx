import { Metadata } from "next"
import Link from "next/link"
import SectionWithColor from "app/SectionWithColor"

const title = "PREMIUM Paket - Ab 4.000 Euro"
const description = "Nachhaltige körperliche Gesundheitsstärkung und leistungsorientierte Entwicklung auf Basis langfristiger Trainings- und Regenerationsstrategien und umfassende, langfristige psychologische Präventionsarbeit."
const url = "/praevention/premium"

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

export default function PremiumPage() {
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
                            Alle Leistungen aus dem Basic und Medium Paket
                        </h2>
                        <p className="mt-4 text-lg text-primaryLighter">
                            Zusätzlich zu allen Leistungen der BASIC und MEDIUM Pakete:
                        </p>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Erweiterte Bildgebung und Diagnostik
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Ultraschall: Herzecho, Carotis-Duplex (IMT/Plaques), ABI</li>
                            <li>Zellbiologie/Mitochondrien: Glutathion, MDA, CoQ10, Nicotinamid, Pregnenolon</li>
                            <li>Immunmodulation: IL-6, TNF-alpha, IgA/IgG/IgM</li>
                            <li>Herz-Biomarker: hs-Troponin T, NT-proBNP</li>
                            <li>Mineralstoffe erweitert: Kupfer, Coeruloplasmin, Jod im Urin, Kalzium im Urin, RBC-Magnesium</li>
                            <li>Schilddrüse erweitert: TRAK</li>
                            <li>Kognition & Psychologie: DemTect, Uhrentest, Stressprofil</li>
                            <li>Ernährungsanalyse Deep</li>
                        </ul>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Langfristige mentale Gesundheitsstärkung (5 Sitzungen)
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Vertiefte Diagnostik – Analyse Persönlichkeitsmuster, Stressbiografie, Ressourcen</li>
                            <li>Arbeit an emotionalen Grundmustern & identitätsrelevanten Themen</li>
                            <li>Analyse von Stressphysiologie & Erholungsfenstern</li>
                            <li>Verhaltensbiologische Veränderungsarbeit</li>
                            <li>Entwicklung eines individuellen Gesundheitsplans (6–12 Monate)</li>
                        </ul>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Umfassender Leistungs-Check und Trainingsrahmen
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Vertiefte funktionelle Diagnostik (Bewegungsqualität, Kraft- und Belastungsbiografie, Ressourcen)</li>
                            <li>Arbeit an grundlegenden Bewegungs- und Kraftmustern</li>
                            <li>Analyse von Trainingsbelastung, Regenerationsfähigkeit und Anpassungsreaktionen</li>
                            <li>Periodisierte Trainingssteuerung auf verhaltens- und trainingswissenschaftlicher Basis</li>
                            <li>Durchführung von 4 individuell geplanten Personal-Trainingseinheiten à 60 Minuten</li>
                            <li>Entwicklung eines langfristigen körperlichen Gesundheits- & Trainingsplans (6–12 Monate)</li>
                        </ul>

                        <div className="mt-12 p-6 bg-white/50 rounded-xl">
                            <p className="text-base text-primaryLighter italic">
                                Alle Module werden individuell an die Ausgangslage, Belastungsfaktoren und Ressourcen der Klient:innen sowie den aktuellen Gesundheitszustand, das Leistungsniveau sowie die persönlichen Ziele angepasst.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center justify-center">
                            <a
                                href="mailto:praevention@praxisjona.de?subject=Anfrage PREMIUM Paket"
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
