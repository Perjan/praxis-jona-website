import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import BotoxPriceTable from "app/components/BotoxPriceTable";

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
                <div className="px-4 lg:px-0 bg-white max-w-7xl mx-auto">
                    <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl'>
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

                <div className="px-4 lg:px-0 bg-white max-w-7xl mx-auto sm:mb-16">
                    <BotoxPriceTable isEnglish={false} />
                </div>
            </div>
        </>
    )
}