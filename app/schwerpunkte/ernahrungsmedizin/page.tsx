import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Ernährungsmedizin'
const description = "Übergewicht ist ein zunehmendes Gesundheitsproblem, das viele Menschen in der modernen Gesellschaft betrifft. Sie kann zu einer Vielzahl von Gesundheitsproblemen führen, darunter Herz-Kreislauf-Erkrankungen, Diabetes Typ 2, Gelenkprobleme und ein erhöhtes Risiko für bestimmte Krebsarten."

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: '/schwerpunkte/ernahrungsmedizin',
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
        canonical: '/schwerpunkte/ernahrungsmedizin',
        languages: {
            de: '/schwerpunkte/ernahrungsmedizin'
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
                        <h2 className="mt-2 text-lg leading-8 text-primaryLighter">{description}</h2>
                    </div>
                </SectionWithColor>
                <div className="overflow-hidden">
                    <SectionWithColor backgroundClassName='bg-lightBeige'>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Ursachen für Übergewicht sind vielfältig und umfassen genetische Faktoren, verschiedene Medikamenteneinnahme, Autoimmunerkrankungen, Lebensstilentscheidungen wie unzureichende Bewegung und unausgewogene Ernährung, sowie psychologische Komponenten wie Stress und emotionales Essen.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Eine erfolgreiche Behandlung von Übergewicht erfordert oft eine umfassende Herangehensweise, die eine gesündere Ernährung, regelmäßige körperliche Aktivität und gegebenenfalls psychologische Unterstützung umfasst. Das Ziel ist nicht nur die Gewichtsreduktion, sondern auch die Förderung eines langfristig gesunden und ausgewogenen Lebensstils.</p>

                    </SectionWithColor>
                    <SectionWithColor backgroundClassName='bg-tealColor'>
                        <p className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Ziele der Ernährungstherapie</p>

                        <p className="text-lg mt-2 font-serif font-medium leading-8 text-primaryLighter">1 - Krankheitsprävention und -behandlung</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Ernährungstherapie kann helfen, chronische Krankheiten wie Diabetes, Herz-Kreislauf-Erkrankungen, Bluthochdruck und bestimmte Krebsarten zu verhindern und zu behandeln, Autoimmunerkrankungen in latenter Phase zu halten.</p>

                        <p className="text-lg mt-2 font-serif font-medium leading-8 text-primaryLighter">2 - Verbesserung der Darmflora</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Durch Umstellung der Ernährung kann die Darmflora wiederhergestellt werden, was zur Linderung der Darmbeschwerden führen kann.</p>

                        <p className="text-lg mt-4 font-serif font-medium leading-8 text-primaryLighter">3 - Gewichtsmanagement</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Durch die Anpassung der Ernährung kann das Gewicht kontrolliert werden, was zur Prävention und Behandlung von Adipositas und Untergewicht beiträgt.</p>

                        <p className="text-lg mt-4 font-serif font-medium leading-8 text-primaryLighter">4 - Verbesserung des Allgemeinbefindens</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Eine ausgewogene Ernährung fördert das allgemeine Wohlbefinden, steigert die Energielevels und verbessert die geistige Gesundheit.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Mir ist es wichtig, herauszufinden, wie es für Sie eine Ernährungsumstellung leichter und nachhaltig werden kann.</p>

                    </SectionWithColor>

                    <SectionWithColor backgroundClassName='bg-lightBeige'>
                        <p className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Wie kann eine Ernährungsumstellung leichter und nachhaltig gestaltet werden?</p>

                        <p className="text-lg mt-2 font-serif font-medium leading-8 text-primaryLighter">Individuelle Beratung</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Eine persönliche Beratung hilft dabei, individuelle Bedürfnisse und Vorlieben zu berücksichtigen und realistische Ziele zu setzen.</p>

                        <p className="text-lg mt-2 font-serif font-medium leading-8 text-primaryLighter">Schrittweise Änderungen</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Kleine, schrittweise Veränderungen in der Ernährung sind oft nachhaltiger und leichter umzusetzen als radikale Umstellungen.</p>

                        <p className="text-lg mt-4 font-serif font-medium leading-8 text-primaryLighter">Bildung und Wissen</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Wissen über gesunde Ernährung und das Verständnis der Auswirkungen bestimmter Lebensmittel auf den Körper können die Motivation erhöhen und helfen, informierte Entscheidungen zu treffen.</p>

                        <p className="text-lg mt-4 font-serif font-medium leading-8 text-primaryLighter">Langfristige Planung</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Entwicklung eines langfristigen Ernährungsplans, der flexible und realistische Ziele beinhaltet, trägt zur Nachhaltigkeit der Ernährungsumstellung bei.</p>

                    </SectionWithColor>

                    <SectionWithColor backgroundClassName='bg-white'>
                        <p className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Meine Schwerpunkte sind:</p>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Stoffwechselstörungen und Körpergewicht</li>
                            <li>Gewichtszunahme durch Autoimmunerkrankungen wie Hashimoto</li>
                            <li>Fettstoffwechselstörungen</li>
                            <li>Diabetes Mellitus</li>
                            <li>Herz-Kreislauf-Erkrankungen</li>
                            <li>Hypertonie</li>
                            <li>Magen-Darm-Trakt</li>
                            <li>Reizdarmsyndrom</li>
                            <li>Microbiome</li>
                            <li>Gewichtsmanagement (Zu- oder Abnahme)</li>
                        </ul>

                    </SectionWithColor>

                    <SectionWithColor backgroundClassName='bg-tealColor'>
                        <p className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Was erwartet Sie und was würde so eine Beratung kosten?</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">In einem etwa 15-minütigen, kostenfreien Vorgespräch besprechen wir zunächst Ihr persönliches Anliegen und Ihre Ziele. Im Anschluss informiere ich Sie über die anfallenden Kosten. Die Ernährungsberatung ist als Einzeltherapie gedacht.</p>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Das Erstgespräch und Beratung dauert ca. 60 Min. und kostet 80 Euro</li>
                            <li>Das Folgegespräch dauert ca. 45 Min. und kostet 60 Euro</li>
                        </ul>

                    </SectionWithColor>

                    <SectionWithColor backgroundClassName='bg-lightBeige'>
                        <p className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Die Beratungsinhalte sind:</p>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>ausführliches Anamnesegespräch und Optimierung des Essverhaltens</li>
                            <li>Alltagstaugliche Tipps wie Mengen, Lebensmittelauswahl, Einkaufen, Sport</li>
                            <li>Erarbeitung von individuell angepassten Ernährungskonzepten</li>
                            <li>Lösungsorientierte Begleitung bei Problemen</li>
                            <li>Ganzheitliche Betreuung über mehrere Wochen und Motivation</li>
                            <li>Personalisierter Ernährungsplan für 7 Tage mit Rezepten (50 Euro)</li>
                            <li>Körperzusammensetzungsmessung (BIA-Messung) inkl. Auswertung (40Euro)</li>
                            <li>Folge-BIA-Messungen (25 Euro)</li>
                        </ul>

                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}