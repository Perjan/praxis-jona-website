import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Fettstoffwechselstörungen'
const description = "Fettstoffwechselstörungen, auch Dyslipidämien genannt, bezeichnen eine Gruppe von Erkrankungen, bei denen es zu einer Abweichung der Blutfettwerte von der Norm kommt. Diese Störungen können das Risiko für Herz-Kreislauf-Erkrankungen wie Herzinfarkt und Schlaganfall erhöhen, da abnormale Fettwerte zur Bildung von Plaques in den Arterien führen können, die das Risiko einer Arterienverkalkung (Atherosklerose) erhöhen."

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: '/schwerpunkte/fettstoffwechselstorungen',
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
        canonical: '/schwerpunkte/fettstoffwechselstorungen',
        languages: {
            de: '/schwerpunkte/fettstoffwechselstorungen'
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
                        <h2 className="mt-2 text-lg leading-8 text-primaryLighter">Fettstoffwechselstörungen, auch Dyslipidämien genannt, bezeichnen eine Gruppe von Erkrankungen, bei denen es zu einer Abweichung der Blutfettwerte von der Norm kommt. Diese Störungen können das Risiko für Herz-Kreislauf-Erkrankungen wie Herzinfarkt und Schlaganfall erhöhen, da abnormale Fettwerte zur Bildung von Plaques in den Arterien führen können, die das Risiko einer Arterienverkalkung (Atherosklerose) erhöhen.</h2>
                    </div>
                </SectionWithColor>
                <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16">
                    <SectionWithColor backgroundClassName='bg-lightBeige'>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Fettstoffwechselstörungen werden in zwei großen Gruppen geteilt:  </p>

                        <p className="text-xl mt-6 font-serif font-medium leading-8 text-primaryLighter">1 - Primäre Dyslipidämien </p>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                        <li className="mt-2 text-lg font-serif leading-8 font-semibold text-primaryLighter">Genetisch bedingt Bspw. familiäre Hypercholesterinämie</li>
                        </ul>
                        <p className="text-xl mt-6 font-serif font-medium leading-8 text-primaryLighter">2 - Sekundäre Dyslipidämien</p>
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 lg:grid-cols-2 lg:gap-8">
                            <div className="col-span-1">
                                <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                                    <li className="mt-2 text-lg font-serif font-semibold leading-8 text-primaryLighter">Hypertriglyceridämie</li>
                                    <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                                        <li>Fehlernährung (Fructose, leicht verdauliche Kohlenhydrate)</li>
                                        <li>Erkrankungen</li>
                                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
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
                                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                                            <li>Östrogene</li>
                                            <li>Kontrazeptiva</li>
                                            <li>Betablocker</li>
                                            <li>Thiaziddiuretika</li>
                                            <li>Glucocorticosteroide</li>
                                            <li>Tamoxifen</li>
                                            <li>Cyclosporin</li>
                                            <li>Amiodaron</li>
                                            <li>Proteasehemmer</li>
                                        </ul>
                                    </ul>
                                </ul>
                            </div>

                            <div className="col-span-1">
                                <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                                    <li className="mt-2 text-lg font-serif font-semibold leading-8 text-primaryLighter">Erhöhter LDL-Wert kommt durch:</li>
                                    <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                                        <li>Falsche Ernährung (Transfette, gesättigte Fettsäuren)</li>
                                        <li>Erkrankungen</li>
                                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                                            <li>Hypothyreose</li>
                                            <li>Nephrotisches Syndrom</li>
                                            <li>Cholestase</li>
                                            <li>Anorexia nervosa</li>
                                        </ul>
                                        <li>Schwangerschaft</li>
                                        <li>Medikamente</li>
                                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                                            <li>Gestagene</li>
                                            <li>Androgene</li>
                                            <li>Proteasehemmer</li>
                                        </ul>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="mt-4 text-lg font-serif font-semibold leading-8 text-primaryLighter">Gemischte Hyperlipidämie</li>
                        </ul>

                        <p className="mt-6 text-lg leading-8 text-primaryLighter">Da Fettstoffwechselstörungen oft keine direkten Symptome verursachen, ist die regelmäßige medizinische Kontrolle entscheidend, um mögliche Risiken frühzeitig zu erkennen und zu behandeln.</p>


                        <p className="text-xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Diagnose</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Diagnostik von Fettstoffwechselstörungen erfolgt hauptsächlich durch Blutuntersuchungen, die Aufschluss über die verschiedenen Fettwerte im Blut geben. Unsere Leistungen:</p>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                        <li className="text-lg mt-2 font-serif font-semibold leading-8 text-primaryLighter">Lipidprofil</li>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Dieser Test misst Gesamtcholesterin, LDL-Cholesterin, HDL-Cholesterin und Triglyceride. Sie sollten für diesen Test nüchtern sein.</p>
                        </ul>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                        <li className="text-lg mt-2 font-serif font-semibold leading-8 text-primaryLighter">Weitere Blutuntersuchungen</li>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Je nach Befund können zusätzliche Bluttests angeordnet werden, um zugrunde liegende Ursachen oder assoziierte Erkrankungen zu erkennen, wie Diabetes, Schilddrüsenstörungen oder Nierenerkrankungen.</p>
                        </ul>

                        <p className="text-xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Die Therapie besteht auf 3 Stufen</p>
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