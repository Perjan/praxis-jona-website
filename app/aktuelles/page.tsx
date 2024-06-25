import { Metadata } from "next";
import Link from 'next/link';

const title = 'Aktuelles'
const description = "Lesen Sie die neuesten Nachrichten aus der Klinik, wie z.B. was passiert, wann ist die Klinik wegen Urlaub geschlossen usw."

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: '/aktuelles',
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
        canonical: '/aktuelles',
        languages: {
            en: '/aktuelles'
        }
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: ['/images/og-image.png']
    }
}

// export function ReusableButton({ url, title }) {
//     return (
//         <Link
//             href={url}
//             target='_blank'
//             className="block rounded-xl bg-primary py-1 lg:py-2.5 px-4 lg:px-6 text-base font-serif leading-7 text-white hover:bg-primaryDarker"
//         >{title}
//         </Link>
//     )
// }

export default function Page() {

    return (
        <>
            <div className="bg-white mt-2 sm:mt-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                        <h2 className="mt-2 text-lg leading-8 text-primaryLighter">{description}</h2>
                    </div>
                    <div className='relative isolate bg-white'>
                        <div className="bg-white py-16 sm:py-24">
                            <div className="mx-auto max-w-7xl">
                                <div className="mx-auto items-center max-w-xl space-y-8 lg:mx-0 lg:max-w-none">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1">
                                        <div className="max-w-3xl mx-auto items-center justify-center rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-1">
                                            <h3 className="text-2xl justify-center text-center font-semibold font-serif leading-7 text-primary flex items-center">
                                                Schließzeiten<br></br>Montag, 01.07.2024
                                            </h3>
                                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-1 lg:gap-8">
                                                <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                                                    <div className="flex flex-col justify-center h-full">
                                                        <address className="mt-34justify-center text-center space-y-1 text-md not-italic leading-6 text-primaryLighter">
                                                            <p>bleibt die Praxis ganztägig geschlossen</p>
                                                        </address>
                                                    </div>
                                                </dl>
                                            </div>

                                            <h3 className="mt-16 text-2xl justify-center text-center font-semibold font-serif leading-7 text-primary flex items-center">
                                            Vom 22.07. bis zum 02.08.2024
                                            </h3>
                                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-1 lg:gap-8">
                                                <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                                                    <div className="flex flex-col justify-center h-full">
                                                        <address className="mt-4 justify-center text-center space-y-1 text-md not-italic leading-6 text-primaryLighter">
                                                            <p>ist die Sprechstunde wegen Urlaub montags nur Vormittag und von Montag-Donnerstag. Dr. Thomas Rößner macht in dieser Zeit Vertretung</p>
                                                        </address>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>


                                        <div className="max-w-3xl mx-auto items-center justify-center rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-1">
                                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-1 lg:gap-8">
                                                <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                                                    <div className="flex flex-col justify-center h-full">
                                                        <address className="mt-34justify-center text-center space-y-1 text-md not-italic leading-6 text-primaryLighter">
                                                            <p>Bitte wenden Sie sich auch in dringenden Fällen an den ärztlichen Bereitschaftsdienst der KV Berlin unter der Telefonnummer 116117, in lebensbedrohlichen Situationen an die Feuerwehr unter 112.</p>
                                                        </address>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>

                                        <div className="max-w-3xl mx-auto items-center justify-center rounded-2xl bg-lightBeige bg-opacity-40 p-10 col-span-1">
                                            <h3 className="text-2xl justify-center text-center font-semibold font-serif leading-7 text-primary flex items-center">
                                            Hinweis
                                            </h3>
                                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-1 lg:gap-8">
                                                <dl className="mt-3 space-y-1 text-md leading-6 text-primaryLighter">
                                                    <div className="flex flex-col justify-center h-full">
                                                        <address className="mt-4 justify-center text-left space-y-1 text-md not-italic leading-6 text-primaryLighter">
                                                            <p className="text-md">Liebe Patientin, lieber Patient,<br></br>wenn bei Ihnen Krankheitszeichen wie Husten, Schnupfen, Halskratzen oder Fieber auftreten sollten, können Sie mit einem tagesaktuellen negativen Covid-Selbsttest und FFP2-Maske in unsere Sprechstunde kommen nach vorheriger telefonischer Absprache.</p>
                                                            
                                                            <p className="text-md pt-4">
                                                            Sollten Sie einen positiven Covid-Selbsttest haben, senden Sie uns bitte folgende Informationen per E-Mail zu:<br></br> 
                                                            E-Mail: <a href="mailto:info@praxisjona.de" className="text-primary font-semibold">info@praxisjona.de</a><br></br>
                                                            Ihre Symptome:<br></br>
                                                            Ihre Anschrift:<br></br>
                                                            Mobilfunknummer:<br></br>
                                                            Foto von Vorder- und Rückseite der Versicherungskarte<br></br>
                                                            Foto vom Corona-Schnelltest-Ergebnis<br></br>
                                                            Wir nehmen Kontakt zu Ihnen auf.</p>
                                                        </address>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}