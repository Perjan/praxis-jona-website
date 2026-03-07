import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Reiseimpfungen'
const description = "In unserer Praxis führen wir alle gängigen Reiseimpfungen durch – individuell abgestimmt auf Ihr Reiseziel, Ihre Reisedauer und Ihre persönliche Gesundheitssituation."
const url = '/leistungen/reiseimpfungen'

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
            en: '/en/services/travel-vaccinations',
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
                                <p className="mt-2 text-lg leading-8 text-primaryLighter"><strong>Lediglich die Gelbfieberimpfung darf ausschließlich an offiziellen Gelbfieberimpfstellen erfolgen</strong> und kann daher nicht bei uns durchgeführt werden.</p>

                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Die Kosten für die reisemedizinische Beratung sowie die Impfungen werden <strong>nach der Gebührenordnung für Ärzte (GOÄ)</strong> abgerechnet.</p>
                           
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Viele <strong>gesetzliche Krankenkassen erstatten die Impfungskosten ganz oder teilweise</strong> - bitte informieren Sie sich vorab auf der Website Ihrer Krankenkasse. <strong>Privatversicherte sollten sich direkt bei ihrer Versicherung erkundigen</strong>, welche Leistungen übernommen werden.</p>

                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Damit ein optimaler Impfschutz rechtzeitig aufgebaut werden kann, empfehlen wir, <strong>spätestens zwei Monate vor Reiseantritt mit der Planung zu beginnen</strong>.</p>
                            
                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}