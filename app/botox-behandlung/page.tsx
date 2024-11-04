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

const treatments = [
    { name: "Beratung ohne Behandlung", price: "49€" },
    { name: "Bruxismus (Zähneknirschen) oder Faceslimming", price: "ab 349€" },
    { name: "Schweißdrüsenbehandlung (Hyperhidrose)", price: "ab 549€" },
    { name: "Zornesfalte", price: "ab 199€" },
    { name: "Stirnfalten", price: "ab 199€" },
    { name: "2-Zonen", price: "ab 349€" },
    { name: "3-Zonen", price: "ab 449€" },
    { name: "4-Zonen", price: "ab 499€" },
    { name: "Browlift", price: "ab 159€" },
    { name: "Krähenfüße", price: "ab 199€" },
    { name: "Bunny Lines", price: "ab 159€" },
    { name: "Erdbeerkinn", price: "ab 199€" },
    { name: "Platysma", price: "ab 349€" },
];

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
                        <ol className="list-decimal pl-5">
                            <li>
                                <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Hyperhidrose (übermäßiges Schwitzen)</h3>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Botulinumtoxin wird in die Haut von Bereichen wie Achseln, Händen und Füßen injiziert, um die Schweißproduktion signifikant zu reduzieren. Dies stellt eine wirksame Behandlung für Patienten dar, die unter schwerer Hyperhidrose leiden, welche auf herkömmliche Antitranspirante nicht anspricht.</p>
                            </li>
                            <li>
                                <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Migränebehandlung</h3>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Bei Patienten mit chronischer Migräne kann Botulinumtoxin helfen, die Anzahl und Schwere der Kopfschmerzattacken zu reduzieren. Es wird in spezifische Muskeln rund um den Kopf und Nacken injiziert, was die Muskelspannung reduziert, die häufig zu Migräneanfällen beiträgt.</p>
                            </li>
                            <li>
                                <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Bruxismus (Zähneknirschen)</h3>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Bei Patienten, die unwillkürlich mit den Zähnen knirschen, kann Botulinumtoxin in die Kaumuskulatur injiziert werden, um diese zu entspannen und so das Zähneknirschen und die damit verbundenen Beschwerden zu reduzieren.</p>
                            </li>
                        </ol>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Ästhetische Anwendungen</h2>
                        <ol className="list-decimal pl-5">
                            <li>
                                <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Faltenbehandlung</h3>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">In der ästhetischen Medizin wird Botox am häufigsten zur Glättung mimischer Falten wie Zornesfalten, Stirnfalten und Krähenfüße eingesetzt. Durch die Reduktion der Muskelaktivität in diesen Bereichen wirkt die Haut glatter und jugendlicher.</p>
                            </li>
                            <li>
                                <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Gesichtsstraffung</h3>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Botulinumtoxin kann auch in anderen Gesichtszonen injiziert werden, um gezielt bestimmte Muskeln zu entspannen und so ein jüngeres Aussehen zu erreichen.</p>
                            </li>
                        </ol>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Nach der Behandlung</h2>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="mt-2 leading-8 text-primaryLighter">Nach der Injektion von Botulinumtoxin sollten Patienten auf körperliche Aktivitäten wie Sport, Schwimmen und Saunabesuche für etwa 3-4 Tage verzichten.</li>
                            <li className="mt-2 leading-8 text-primaryLighter">Die Injektionsstellen sollten nicht massiert oder Druck ausgesetzt werden, um eine unerwünschte Verteilung des Toxins zu verhindern.</li>
                        </ul>
                    </SectionWithColor>
                </div>

                <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16">
                    <SectionWithColor backgroundClassName='bg-tealColor'>
                        <h2 className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Preise</h2>
                        <div style={{ maxWidth: "auto", margin: "auto", padding: "0px" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr>
                                        <th style={{ borderBottom: "2px solid #0D322B", textAlign: "left" }}>
                                            <h3 className="text-xl mt-8 pb-4 font-serif font-medium leading-8 text-primaryLighter">Behandlung</h3>
                                        </th>
                                        <th style={{ borderBottom: "2px solid #0D322B", textAlign: "right" }}>
                                            <h3 className="text-xl mt-8 pb-4 font-serif font-medium leading-8 text-primaryLighter">Preise</h3>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {treatments.map((treatment, index) => (
                                        <tr key={index}>
                                            <td className="pt-4 pb-4 text-lg text-primaryLighter" style={{ borderBottom: index === treatments.length - 1 ? "none" : "1px solid #0D322B" }}>{treatment.name}</td>
                                            <td className="pt-4 pb-4 text-lg text-primaryLighter" style={{ borderBottom: index === treatments.length - 1 ? "none" : "1px solid #0D322B", textAlign: "right" }}>{treatment.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}