import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import BotoxPriceTable from "app/components/BotoxPriceTable";

const title = 'Botox Prices in Berlin: Areas, Costs & Process'
const description = "Current Botox prices in Berlin with transparent costs per area, medical use cases, and practical answers on process, duration, and aftercare at Praxis Jona."
const url = '/en/botox-prices'

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
            en: url,
            de: "/botox-preise"
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
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How much does Botox cost in Berlin?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Prices start from €159 depending on treatment area and indication. You can find the full area-based pricing table on this page."
                }
            },
            {
                "@type": "Question",
                name: "How long does Botox last?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Results usually last for several months. Duration varies by treatment area, muscle activity, and individual response."
                }
            },
            {
                "@type": "Question",
                name: "Do I get a consultation before treatment?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Every treatment starts with a medical consultation, including an individual assessment and transparent cost discussion."
                }
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="overflow-hidden bg-white relative isolate">
                <SectionWithColor backgroundClassName='bg-white'>
                    <div className="mx-auto max-w-4xl lg:mx-0">
                        <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
                        <p className="mt-4 text-base leading-7 text-primaryLighter">
                            Prices are guideline values and are discussed transparently before treatment.
                            For suitability and personal recommendations, please book a consultation.
                        </p>
                    </div>
                </SectionWithColor>

                <BotoxPriceTable isEnglish={true} />

                <div className="max-w-4xl mx-auto px-4 pb-16 text-primaryLighter">
                    <h2 className="text-2xl font-serif text-primary">Botox in Berlin: Common Questions</h2>
                    <p className="mt-3">If you are searching for “Botox Berlin prices”, this page gives you a clear and practical cost overview for aesthetic and medical applications.</p>
                    <p className="mt-2">At Praxis Jona in Berlin, each treatment starts with a physician-led assessment so area selection, indication, and pricing are clear upfront.</p>
                </div>
            </div>
        </>
    )
}