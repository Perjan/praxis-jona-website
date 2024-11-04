import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Botulinumtoxin'
const description = "Botulinumtoxin (Botox) ist ein Neurotoxin, das von dem Bakterium Clostridium botulinum produziert wird. Durch die Injektion in einen Muskel führt es zu einer temporären Lähmung dieses Muskels, was Muskelkontraktionen verhindert. Dies kann ästhetische und medizinische Vorteile bieten, indem es die Haut glättet oder spezifische medizinische Symptome lindert. Da die Wirkung vorübergehend ist, sind regelmäßige Behandlungen erforderlich, um die gewünschten Ergebnisse beizubehalten."
const url = '/botox-behandlung'

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
            en: "/en/botox-treatment"
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
                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Medizinische Anwendungen</h2>
                        <ol>
                            <li className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">1 - Hyperhidrose (übermäßiges Schwitzen)</li>
                        </ol>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Botulinumtoxin wird in die Haut von Bereichen wie Achseln, Händen und Füßen injiziert, um die Schweißproduktion signifikant zu reduzieren. Dies stellt eine wirksame Behandlung für Patienten dar, die unter schwerer Hyperhidrose leiden, welche auf herkömmliche Antitranspirante nicht anspricht.</p>

                        <ol>
                            <li className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">2 - Migränebehandlung</li>
                        </ol>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Bei Patienten mit chronischer Migräne kann Botulinumtoxin helfen, die Anzahl und Schwere der Kopfschmerzattacken zu reduzieren. Es wird in spezifische Muskeln rund um den Kopf und Nacken injiziert, was die Muskelspannung reduziert, die häufig zu Migräneanfällen beiträgt.</p>

                        <ol>
                            <li className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">3 - Bruxismus (Zähneknirschen)</li>
                        </ol>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Bei Patienten, die unwillkürlich mit den Zähnen knirschen, kann Botulinumtoxin in die Kaumuskulatur injiziert werden, um diese zu entspannen und so das Zähneknirschen und die damit verbundenen Beschwerden zu reduzieren.</p>


                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Ästhetische Anwendungen</h2>
                        <ol>
                            <li className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">1 - Faltenbehandlung</li>
                        </ol>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">In der ästhetischen Medizin wird Botox am häufigsten zur Glättung mimischer Falten wie Zornesfalten, Stirnfalten und Krähenfüße eingesetzt. Durch die Reduktion der Muskelaktivität in diesen Bereichen wirkt die Haut glatter und jugendlicher.</p>

                        <ol>
                            <li className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">2 - Gesichtsstraffung</li>
                        </ol>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Botulinumtoxin kann auch in anderen Gesichtszonen injiziert werden, um gezielt bestimmte Muskeln zu entspannen und so ein jüngeres Aussehen zu erreichen.</p>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Nach der Behandlung</h2>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="mt-2 leading-8 text-primaryLighter">Nach der Injektion von Botulinumtoxin sollten Patienten auf körperliche Aktivitäten wie Sport, Schwimmen und Saunabesuche für etwa 3-4 Tage verzichten.</li>

                            <li className="mt-2 leading-8 text-primaryLighter">Die Injektionsstellen sollten nicht massiert oder Druck ausgesetzt werden, um eine unerwünschte Verteilung des Toxins zu verhindern.</li>
                        </ul>


                        <div style={{ maxWidth: "auto", margin: "auto", padding: "0px" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr>
                                        <th style={{ borderBottom: "2px solid #ddd", textAlign: "left" }}>
                                            <h2 className="text-2xl mt-8 pb-4 font-serif font-medium leading-8 text-primaryLighter">Behandlung</h2>
                                        </th>
                                        <th style={{ borderBottom: "2px solid #ddd", textAlign: "right" }}>
                                            <h2 className="text-2xl mt-8 pb-4 font-serif font-medium leading-8 text-primaryLighter">Preise</h2>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pt-4 pb-4 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd" }}>Beratung ohne Behandlung</td>
                                        <td className="pt-4 pb-4 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd",  textAlign: "right" }}>49€</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd" }}>Bruxismus (Zähneknirschen) oder Faceslimming</td>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd",  textAlign: "right" }}>ab 349€</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd" }}>Schweißdrüsenbehandlung (Hyperhidrose)</td>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd",  textAlign: "right" }}>ab 549€</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd" }}>Zornesfalte</td>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd",  textAlign: "right" }}>ab 199€</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd" }}>Stirnfalten</td>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd",  textAlign: "right" }}>ab 199€</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd" }}>2-Zonen</td>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd",  textAlign: "right" }}>ab 349€</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd" }}>3-Zonen</td>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd",  textAlign: "right" }}>ab 449€</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd" }}>4-Zonen</td>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd",  textAlign: "right" }}>ab 499€</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd" }}>Browlift</td>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd",  textAlign: "right" }}>ab 159€</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd" }}>Krähenfüße</td>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd",  textAlign: "right" }}>ab 199€</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd" }}>Bunny Lines</td>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd",  textAlign: "right" }}>ab 159€</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd" }}>Erdbeerkinn</td>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{ borderBottom: "1px solid #ddd",  textAlign: "right" }}>ab 199€</td>
                                    </tr>
                                    <tr>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter">Platysma</td>
                                        <td className="pt-4 pb-4 leading-8 text-lg text-primaryLighter" style={{  textAlign: "right" }}>ab 349€</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </SectionWithColor>

                </div>
            </div>
        </>
    )
}