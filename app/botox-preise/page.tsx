import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import BotoxPriceTable from "app/components/BotoxPriceTable";
import Link from "next/link";

const title = 'Botox Behandlung Preise'
const description = "Aktuelle Botox-Preise in der Praxis Jona inklusive transparenter Übersicht für private und gesetzlich versicherte Patientinnen und Patienten."
const url = '/botox-preise'

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
            en: "/en/botox-prices"
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

                <BotoxPriceTable isEnglish={false} />
                <div className="mt-6 mb-8 text-center">
                    <Link href="/botox-behandlung" className="text-primary underline">
                        Mehr zur Botox-Behandlung
                    </Link>
                </div>
            </div>
        </>
    )
}
