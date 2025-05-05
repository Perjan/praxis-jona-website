import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Fettstoffwechselstörungen'
const description = "Fettstoffwechselstörungen, auch Dyslipidämien genannt, bezeichnen eine Gruppe von Erkrankungen, bei denen es zu einer Abweichung der Blutfettwerte von der Norm kommt. Diese Störungen können das Risiko für Herz-Kreislauf-Erkrankungen wie Herzinfarkt und Schlaganfall erhöhen, da abnormale Fettwerte zur Bildung von Plaques in den Arterien führen können, die das Risiko einer Arterienverkalkung (Atherosklerose) erhöhen."
const url = '/schwerpunkte/fettstoffwechselstoerungen'

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
            en: '/en/focus-areas/lipometabolic-disorders'
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
                        <h1 className="text-3xl sm:text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Fettstoffwechselstörungen, auch Dyslipidämien genannt, bezeichnen eine Gruppe von Erkrankungen, bei denen es zu einer Abweichung der Blutfettwerte von der Norm kommt. Diese Störungen können das Risiko für Herz-Kreislauf-Erkrankungen wie Herzinfarkt und Schlaganfall erhöhen, da abnormale Fettwerte zur Bildung von Plaques in den Arterien führen können, die das Risiko einer Arterienverkalkung (Atherosklerose) erhöhen.</p>
                    </div>
                </SectionWithColor>
                <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mb-12">
                    <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Fettstoffwechselstörungen werden in zwei großen Gruppen geteilt:  </p>

                        <h2 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Primäre Dyslipidämien</h2>
                        <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                            <li className="mt-2 text-lg sm:text-lg font-serif leading-8 font-semibold text-primaryLighter">Genetisch bedingt Bspw. familiäre Hypercholesterinämie</li>
                        </ul>
                        <h2 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Sekundäre Dyslipidämien</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 lg:gap-8">
                            <div className="col-span-1">
                                <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                    <li className="mt-2 text-lg sm:text-lg font-serif font-semibold leading-6 sm:leading-8 text-primaryLighter">Hypertriglyceridämie</li>
                                    <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                        <li>Fehlernährung (Fructose, leicht verdauliche Kohlenhydrate)</li>
                                        <li>Erkrankungen</li>
                                        <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                            <li>Adipositas</li>
                                            <li>Diabetes mellitus Typ 2</li>
                                            <li>Metabolisches Syndrom</li>
                                            <li>Nieren- oder Leberinsuffizienz</li>
                                            <li>Hypothyreose</li>
                                            <li>Morbus Cushing</li>
                                        </ul>
                                        <li>Schwangerschaft</li>
                                        <li>Alkohol</li>
                                        <li>Medikamente</li>
                                        <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                            <li>Östrogene, Kontrazeptiva</li>
                                            <li>Amiodaron, Betablocker, Thiaziddiuretika</li>
                                            <li>Glucocorticosteroide</li>
                                            <li>Tamoxifen, Cyclosporin</li>
                                            <li>Proteasehemmer</li>
                                        </ul>
                                    </ul>
                                </ul>
                            </div>

                            <div className="col-span-1">
                                <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                    <li className="mt-2 text-lg sm:text-lg font-serif font-semibold leading-6 sm:leading-8 text-primaryLighter">Erhöhter LDL-Wert kommt durch:</li>
                                    <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                        <li>Falsche Ernährung (Transfette, gesättigte Fettsäuren)</li>
                                        <li>Erkrankungen</li>
                                        <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                            <li>Hypothyreose</li>
                                            <li>Nephrotisches Syndrom</li>
                                            <li>Cholestase</li>
                                            <li>Anorexia nervosa</li>
                                        </ul>
                                        <li>Schwangerschaft</li>
                                        <li>Medikamente</li>
                                        <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                            <li>Gestagene</li>
                                            <li>Androgene</li>
                                            <li>Proteasehemmer</li>
                                        </ul>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <ul className="px-4 sm:px-8 list-disc text-lg sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                            <li className="mt-2 text-lg sm:text-lg font-serif font-semibold leading-6 sm:leading-8 text-primaryLighter">Gemischte Hyperlipidämie</li>
                        </ul>

                        <p className="mt-6 text-lg leading-8 text-primaryLighter">Da Fettstoffwechselstörungen oft keine direkten Symptome verursachen, ist die regelmäßige medizinische Kontrolle entscheidend, um mögliche Risiken frühzeitig zu erkennen und zu behandeln.</p>


                        <h2 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Diagnose</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Diagnostik von Fettstoffwechselstörungen erfolgt hauptsächlich durch Blutuntersuchungen, die Aufschluss über die verschiedenen Fettwerte im Blut geben. Unsere Leistungen:</p>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="text-xl mt-4 font-serif font-semibold">Lipidprofil</li>
                            <p className="text-lg">Dieser Test misst Gesamtcholesterin, LDL-Cholesterin, HDL-Cholesterin und Triglyceride. Sie sollten für diesen Test nüchtern sein.</p>
                            <li className="text-xl mt-4 font-serif font-semibold">Weitere Blutuntersuchungen</li>
                            <p className="text-lg">Je nach Befund können zusätzliche Bluttests angeordnet werden, um zugrunde liegende Ursachen oder assoziierte Erkrankungen zu erkennen, wie Diabetes, Schilddrüsenstörungen oder Nierenerkrankungen.</p>
                        </ul>

                        <h3 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Die Therapie besteht auf 3 Stufen</h3>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Lebensstilveränderung: gesunde Ernährung, regelmäßige körperliche Aktivität, Gewichtsmanagement, Alkoholreduktion und Rauchentwöhnung</li>
                            <li>Medikamentöse Therapie</li>
                            <li>Technische Verfahren (Lipid-Apherese)</li>
                        </ul>

                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}