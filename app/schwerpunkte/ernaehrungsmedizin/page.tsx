import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Ernährungsmedizin'
const description = "Übergewicht ist ein zunehmendes Gesundheitsproblem, das viele Menschen in der modernen Gesellschaft betrifft. Sie kann zu einer Vielzahl von Gesundheitsproblemen führen, darunter Herz-Kreislauf-Erkrankungen, Diabetes Typ 2, Gelenkprobleme und ein erhöhtes Risiko für bestimmte Krebsarten."
const url = '/schwerpunkte/bluthochdruck'

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
            en: '/en/focus-areas/nutritional-medicine'
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
                <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16">
                    <SectionWithColor backgroundClassName='bg-lightBeige'>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Ursachen für Übergewicht sind vielfältig und umfassen genetische Faktoren, verschiedene Medikamenteneinnahme, Autoimmunerkrankungen, Lebensstilentscheidungen wie unzureichende Bewegung und unausgewogene Ernährung, sowie psychologische Komponenten wie Stress und emotionales Essen.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Eine erfolgreiche Behandlung von Übergewicht erfordert oft eine umfassende Herangehensweise, die eine gesündere Ernährung, regelmäßige körperliche Aktivität und gegebenenfalls psychologische Unterstützung umfasst. Das Ziel ist nicht nur die Gewichtsreduktion, sondern auch die Förderung eines langfristig gesunden und ausgewogenen Lebensstils.</p>

                        <h2 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Ziele der Ernährungstherapie</h2>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="text-xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Krankheitsprävention und -behandlung</li>
                            <p>Ernährungstherapie kann helfen, chronische Krankheiten wie Diabetes, Herz-Kreislauf-Erkrankungen, Bluthochdruck und bestimmte Krebsarten zu verhindern und zu behandeln, Autoimmunerkrankungen in latenter Phase zu halten.</p>
                            <li className="text-xl mt-4 font-serif font-medium">Verbesserung der Darmflora</li>
                            <p>Durch Umstellung der Ernährung kann die Darmflora wiederhergestellt werden, was zur Linderung der Darmbeschwerden führen kann.</p>
                            <li className="text-xl mt-4 font-serif font-medium">Gewichtsmanagement</li>
                            <p>Durch die Anpassung der Ernährung kann das Gewicht kontrolliert werden, was zur Prävention und Behandlung von Adipositas und Untergewicht beiträgt.</p>
                            <li className="text-xl mt-4 font-serif font-medium">Verbesserung des Allgemeinbefindens</li>
                            <p>Eine ausgewogene Ernährung fördert das allgemeine Wohlbefinden, steigert die Energielevels und verbessert die geistige Gesundheit.</p>
                        </ul>

                        <p className="mt-4 text-lg leading-8 text-primaryLighter">Mir ist es wichtig, herauszufinden, wie es für Sie eine Ernährungsumstellung leichter und nachhaltig werden kann.</p>

                        <h3 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Wie kann eine Ernährungsumstellung leichter und nachhaltig gestaltet werden?</h3>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="text-lg mt-4 font-serif font-medium ">Individuelle Beratung</li>
                            <p>Eine persönliche Beratung hilft dabei, individuelle Bedürfnisse und Vorlieben zu berücksichtigen und realistische Ziele zu setzen.</p>
                            <li className="text-lg mt-4 font-serif font-medium ">Schrittweise Änderungen</li>
                            <p>Kleine, schrittweise Veränderungen in der Ernährung sind oft nachhaltiger und leichter umzusetzen als radikale Umstellungen.</p>
                            <li className="text-lg mt-4 font-serif font-medium ">Bildung und Wissen</li>
                            <p>Wissen über gesunde Ernährung und das Verständnis der Auswirkungen bestimmter Lebensmittel auf den Körper können die Motivation erhöhen und helfen, informierte Entscheidungen zu treffen.</p>
                            <li className="text-lg mt-4 font-serif font-medium ">Langfristige Planung</li>
                            <p>Die Entwicklung eines langfristigen Ernährungsplans, der flexible und realistische Ziele beinhaltet, trägt zur Nachhaltigkeit der Ernährungsumstellung bei.</p>
                        </ul>
                        
                        <h3 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Meine Schwerpunkte</h3>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="text-lg mt-4 font-serif font-medium">Stoffwechselstörungen und Körpergewicht</li>
                            <ul className="px-8 list-disc text-lg ">
                                <li>Gewichtszunahme durch Autoimmunerkrankungen wie Hashimoto</li>
                                <li>Fettstoffwechselstörungen</li>
                                <li>Diabetes Mellitus</li>
                            </ul>

                            <li className="text-lg mt-4 font-serif font-medium ">Herz-Kreislauf-Erkrankungen</li>
                            <ul className="px-8 list-disc text-lg ">
                                <li>Hypertonie</li>
                            </ul>

                            <li className="text-lg mt-4 font-serif font-medium ">Magen-Darm-Trakt</li>
                            <ul className="px-8 list-disc text-lg ">
                                <li>Reizdarmsyndrom</li>
                                <li>Microbiome</li>
                            </ul>

                            <li className="text-lg mt-4 font-serif font-medium leading-8 text-primaryLighter">Gewichtsmanagement (Zu- oder Abnahme)</li>
                        </ul>

                        <h3 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Was erwartet Sie und was würde so eine Beratung kosten?</h3>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">In einem etwa 15-minütigen, kostenfreien Vorgespräch besprechen wir zunächst Ihr persönliches Anliegen und Ihre Ziele. Im Anschluss informiere ich Sie über die anfallenden Kosten. Die Ernährungsberatung ist als Einzeltherapie gedacht.</p>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Das Erstgespräch und Beratung dauert ca. 60 Min. und kostet 80 Euro</li>
                            <li>Das Folgegespräch dauert ca. 45 Min. und kostet 60 Euro</li>
                        </ul>

                        <h3 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Beratungsinhalte</h3>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Ausführliches Anamnesegespräch und Optimierung des Essverhaltens</li>
                            <li>Alltagstaugliche Tipps wie Mengen, Lebensmittelauswahl, Einkaufen, Sport</li>
                            <li>Erarbeitung von individuell angepassten Ernährungskonzepten</li>
                            <li>Lösungsorientierte Begleitung bei Problemen</li>
                            <li>Ganzheitliche Betreuung über mehrere Wochen und Motivation</li>
                            <li>Personalisierter Ernährungsplan für 7 Tage mit Rezepten (50 Euro)</li>
                            <li><ComingSoonBadge />Körperzusammensetzungsmessung (BIA-Messung) inkl. Auswertung (40 Euro)</li>
                            <li><ComingSoonBadge />Folge-BIA-Messungen (25 Euro)</li>
                        </ul>

                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}

function ComingSoonBadge() {
    return (
        <span className='bg-primaryDarker px-4 py-1 rounded-xl text-sm font-bold text-white mr-2'>Demnächst</span>
    )
}