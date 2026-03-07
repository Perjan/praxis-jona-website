import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import './BloodPressureTable.css';

const title = 'Bluthochdruck'
const description = "Hypertonie, auch bekannt als Bluthochdruck, ist eine weit verbreitete Erkrankung, die das Risiko für schwerwiegende Gesundheitsprobleme wie Herzinfarkt, Schlaganfall, Herzinsuffizienz und Nierenerkrankungen erhöht. Da Hypertonie häufig ohne offensichtliche Symptome verläuft, wird sie oft als „stiller Killer“ bezeichnet."
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
            en: "/en/focus-areas/high-blood-pressure",
            "x-default": url
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
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">In Deutschland leidet etwa jeder dritte Erwachsene unter Bluthochdruck, was einer Zahl von circa 20 bis 30 Millionen Menschen entspricht. Da das Risiko, an Bluthochdruck zu erkranken, mit dem Alter steigt, haben sogar drei von vier der über 70-Jährigen einen Bluthochdruck.</p>

                        <p className="mt-6 text-lg leading-8 text-primaryLighter">Ist der Druck zu hoch, kann das auf Dauer zu schwerwiegenden gesundheitlichen Schäden führen. Ein erhöhter Blutdruck ist ursächlich für Herz-Kreislauf-Erkrankungen wie Herzinfarkt, Schlaganfall und Nierenversagen und damit für die Todesursache Nummer eins in Deutschland.</p>

                        <p className="mt-6 text-lg leading-8 text-primaryLighter">Menschen mit hohem Blutdruck bemerken im Allgemeinen keine Symptome, deshalb ist ein Screening so wichtig.</p>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Diagnose</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Diagnose entsteht anhand:</p>
                        <ol>
                            <li className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">1 - Anamnese und klinische Untersuchung</li>
                            <li className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">2 - Blutdruckmessung</li>
                        </ol>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Wir bieten 24h-Langzeitblutdruckmessungen an, jedoch die regelmäßige Kontrolle zu Hause liefert meistens bessere Informationen.<br></br>Um den Blutdruck korrekt zu messen, sollten Sie einige wichtige Schritte beachten:</p>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="mt-2 font-serif font-medium leading-8 text-primaryLighter">Zeitpunkt der Messung</li>
                            <p className="leading-8 text-primaryLighter">Messen Sie den Blutdruck zweimal täglich - morgens vor dem Start in den Tag und abends bevor Sie zu Bett gehen.</p>

                            <li className="mt-4 font-serif font-medium leading-8 text-primaryLighter">Vorbereitung</li>
                            <p className="leading-8 text-primaryLighter">Vor der Messung sollten Sie sich entspannen und zur Ruhe kommen. Führen Sie keine anderen Aktivitäten während der Messung durch und warten Sie nach körperlicher Anstrengung mindestens 30 Minuten.</p>

                            <li className="mt-4 font-serif font-medium leading-8 text-primaryLighter">Position</li>
                            <p className="text-lg leading-8 text-primaryLighter">Sitzen Sie entspannt auf einem Stuhl, mit beiden Füßen flach auf dem Boden. Legen Sie die Manschette auf Herzhöhe an:</p>
                            <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                                <li>Bei Oberarmgeräten: Manschette auf Herzhöhe am Oberarm anlegen.</li>
                                <li>Bei Handgelenkgeräten: Handgelenk auf Herzhöhe auf der Brust ablegen.</li>
                            </ul>

                            <li className="mt-4 font-serif font-medium leading-8 text-primaryLighter">Messvorgang</li>
                            <p className="text-lg leading-8 text-primaryLighter">Führen Sie zwei Messungen im Abstand von mindestens einer Minute durch und notieren Sie die Werte beider Messungen.</p>

                            <li className="mt-4 font-serif font-medium leading-8 text-primaryLighter">Dokumentation</li>
                            <p className="leading-8 text-primaryLighter">Führen Sie ein Blutdruck-Tagebuch. Dokumentieren Sie die Messwerte sieben Tage lang, jeweils zwei Messungen morgens und zwei abends. Falls Sie hohe Werten feststellen, besprechen Sie den Befund mit Ihrem Arzt oder Ihrer Ärztin.</p>
                        </ul>

                        <p className="mt-4 text-lg leading-8 text-primaryLighter">Hier ist die Definition von Hypertonie nach den ESC-Leitlinien 2023:</p>

                        <table className="blood-pressure-table">
                            <thead>
                                <tr>
                                    <th>Kategorie</th>
                                    <th>Systolisch (mmHg)</th>
                                    <th className="hidden"></th>
                                    <th>Diastolisch (mmHg)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Normal</td>
                                    <td>130</td>
                                    <td className="hidden">und/oder</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>Hoch-normal</td>
                                    <td>130-139</td>
                                    <td className="hidden">und/oder</td>
                                    <td>85-89</td>
                                </tr>
                                <tr>
                                    <td>Hypertonie Grad 1</td>
                                    <td>140–159</td>
                                    <td className="hidden">und/oder</td>
                                    <td>90–99</td>
                                </tr>
                                <tr>
                                    <td>Hypertonie Grad 2</td>
                                    <td>160–179</td>
                                    <td className="hidden">und/oder</td>
                                    <td>100–109</td>
                                </tr>
                                <tr>
                                    <td>Hypertonie Grad 3</td>
                                    <td>≥ 180</td>
                                    <td className="hidden">und/oder</td>
                                    <td>≥ 110</td>
                                </tr>
                                <tr>
                                    <td>Isolierte systolische Hypertonie</td>
                                    <td>≥ 140</td>
                                    <td className="hidden">und/oder</td>
                                    <td>und &lt; 90</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="text-xl mt-4 font-serif font-medium leading-8 text-primaryLighter">3 - Laboruntersuchungen</h3>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Behandlung</h2>

                        <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">1 - Nichtmedikamentöse Therapie</h3>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Ernährungsumstellung und Gewichtsreduktion</li>
                            <li>Reduktion des Alkoholkonsums</li>
                            <li>Einstellen des Rauchens</li>
                            <li>Bewegung</li>
                        </ul>
                        <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">2 - Antihypertensive medikamentöse Therapie</h3>

                    </SectionWithColor>

                </div>
            </div>
        </>
    )
}