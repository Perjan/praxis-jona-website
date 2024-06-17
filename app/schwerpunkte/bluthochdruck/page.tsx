import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import './BloodPressureTable.css';

const title = 'Bluthochdruck'
const description = "Hypertonie, auch bekannt als Bluthochdruck, ist eine weit verbreitete Erkrankung, die das Risiko für schwerwiegende Gesundheitsprobleme wie Herzinfarkt, Schlaganfall, Herzinsuffizienz und Nierenerkrankungen erhöht. Da Hypertonie häufig ohne offensichtliche Symptome verläuft, wird sie oft als „stiller Killer“ bezeichnet."

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: '/schwerpunkte/bluthochdruck',
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
        canonical: '/schwerpunkte/bluthochdruck',
        languages: {
            de: '/schwerpunkte/bluthochdruck'
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
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">In Deutschland leidet etwa jeder dritte Erwachsene unter Bluthochdruck, was einer Zahl von circa 20 bis 30 Millionen Menschen entspricht. Da das Risiko, an Bluthochdruck zu erkranken, mit dem Alter steigt, haben sogar drei von vier der über 70-Jährigen einen Bluthochdruck.</p>

                        <p className="mt-6 text-lg leading-8 text-primaryLighter">Ist der Druck zu hoch, kann das auf Dauer zu schwerwiegenden gesundheitlichen Schäden führen. Ein erhöhter Blutdruck ist ursächlich für Herz-Kreislauf-Erkrankungen wie Herzinfarkt, Schlaganfall und Nierenversagen und damit für die Todesursache Nummer eins in Deutschland.</p>

                        <p className="mt-6 text-lg leading-8 text-primaryLighter">Menschen mit hohem Blutdruck bemerken im Allgemeinen keine Symptome, deshalb ist ein Screening so wichtig.</p>

                    </SectionWithColor>
                    <SectionWithColor backgroundClassName='bg-tealColor'>

                        <p className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Diagnose</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Diagnose entseht anhand Anamnese und klinische Untersuchung.</p>

                        <p className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Blutdruckmessung</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Wir bieten 24h-Langzeitblutdruckmessungen an, jedoch die regelmäßige Kontrolle zu Hause liefert meistens bessere Informationen.
                            Um den Blutdruck korrekt zu messen, sollten Sie einige wichtige Schritte beachten:</p>

                        <p className="text-lg mt-2 font-serif font-medium leading-8 text-primaryLighter">1 - Zeitpunkt der Messung</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Messen Sie den Blutdruck zweimal täglich - morgens vor dem Start in den Tag und abends bevor Sie zu Bett gehen.</p>

                        <p className="text-lg mt-2 font-serif font-medium leading-8 text-primaryLighter">2 - Vorbereitung</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Vor der Messung sollten Sie sich entspannen und zur Ruhe kommen. Führen Sie keine anderen Aktivitäten während der Messung durch und warten Sie nach körperlicher Anstrengung mindestens 30 Minuten.</p>

                        <p className="text-lg mt-2 font-serif font-medium leading-8 text-primaryLighter">3 - Position</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Sitzen Sie entspannt auf einem Stuhl, mit beiden Füßen flach auf dem Boden. Legen Sie die Manschette auf Herzhöhe an:</p>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Bei Oberarmgeräten: Manschette auf Herzhöhe am Oberarm anlegen.</li>
                            <li>Bei Handgelenkgeräten: Handgelenk auf Herzhöhe auf der Brust ablegen.</li>
                        </ul>

                        <p className="text-lg mt-2 font-serif font-medium leading-8 text-primaryLighter">4 - Messvorgang</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Führen Sie zwei Messungen im Abstand von mindestens einer Minute durch und notieren Sie die Werte beider Messungen.</p>

                        <p className="text-lg mt-2 font-serif font-medium leading-8 text-primaryLighter">5 - Dokumentation</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Führen Sie ein Blutdruck-Tagebuch. Dokumentieren Sie die Messwerte sieben Tage lang, jeweils zwei Messungen morgens und zwei abends. Falls Sie hohe Werten feststellen, besprechen Sie den Befund mit Ihrem Arzt oder Ihrer Ärztin.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Hier ist die Definition von Hypertonie nach den ESC-Leitlinien 2023:</p>

                        <table className="blood-pressure-table">
                            <thead>
                                <tr>
                                    <th>Kategorie</th>
                                    <th>Systolisch (mmHg)</th>
                                    <th>Diastolisch (mmHg)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Normal</td>
                                    <td>130</td>
                                    <td>und/oder 80</td>
                                </tr>
                                <tr>
                                    <td>Hoch-normal</td>
                                    <td>130-139</td>
                                    <td>und/oder 85-89</td>
                                </tr>
                                <tr>
                                    <td>Hypertonie Grad 1</td>
                                    <td>140–159</td>
                                    <td>und/oder 90–99</td>
                                </tr>
                                <tr>
                                    <td>Hypertonie Grad 2</td>
                                    <td>160–179</td>
                                    <td>und/oder 100–109</td>
                                </tr>
                                <tr>
                                    <td>Hypertonie Grad 3</td>
                                    <td>≥ 180</td>
                                    <td>und/oder ≥ 110</td>
                                </tr>
                                <tr>
                                    <td>Isolierte systolische Hypertonie</td>
                                    <td>≥ 140</td>
                                    <td>und &lt; 90</td>
                                </tr>
                            </tbody>
                        </table>

                    </SectionWithColor>

                    <SectionWithColor backgroundClassName='bg-lightBeige'>
                    <p className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Behandlung</p>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Nichtmedikamentöse Therapie:</p>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Ernährungsumstellung und Gewichtsreduktion</li>
                            <li>Reduktion des Alkoholkonsums</li>
                            <li>Einstellen des Rauchens</li>
                            <li>Bewegung</li>
                            <li>Antihypertensive medikamentöse Therapie</li>
                        </ul>

                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}