import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import BotoxPriceTable from "app/components/BotoxPriceTable";

const title = 'Botox Prices in Berlin & Berlin Mitte: Areas, Costs & Process'
const description = "Current Botox prices in Berlin and Berlin Mitte with transparent costs per area, medical use cases, and practical answers on process, duration, and aftercare at Praxis Jona."
const url = '/en/botox-prices'

const faqs = [
    {
        question: "How much does Botox cost in Berlin?",
        answer: "Prices start from €159 depending on treatment area and indication. You can find the full area-based pricing table on this page."
    },
    {
        question: "How much does one Botox injection cost?",
        answer: "We do not price treatment simply per injection. Cost depends on the treatment area and individual scope. The recommendation and price are discussed before treatment."
    },
    {
        question: "Why do Botox costs differ by area?",
        answer: "The scope depends on muscle activity, anatomy, desired result and treatment area. Individual areas and combinations therefore have different prices."
    },
    {
        question: "What does Botox for forehead lines or frown lines cost?",
        answer: "Forehead lines and frown lines each start from €199. Depending on findings, a combination of several areas may be discussed."
    },
    {
        question: "How long does Botox last?",
        answer: "The effect often lasts around 3 to 6 months. Duration varies by treatment area, muscle activity and individual response."
    },
    {
        question: "When does Botox start working?",
        answer: "The effect usually appears after a few days and often develops further within 3 to 14 days."
    },
    {
        question: "What side effects are possible?",
        answer: "Possible side effects include temporary redness, small bruises, pressure sensation or an unfamiliar feeling of tightness. Individual risks are discussed before treatment."
    },
    {
        question: "Do I get a consultation before treatment?",
        answer: "Yes. Every treatment starts with a medical consultation, including an individual assessment and transparent cost discussion."
    }
]

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
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
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
                    <h2 className="text-2xl font-serif text-primary">Botox costs in Berlin: common questions</h2>
                    <p className="mt-3 leading-7">If you are searching for “Botox Berlin prices”, “Botox costs Berlin” or “forehead Botox cost”, this page gives you a clear cost overview for aesthetic and selected medical applications.</p>
                    <p className="mt-2 leading-7">At Praxis Jona in Berlin-Mitte, each treatment starts with a physician-led assessment so indication, area selection and pricing are clear upfront.</p>
                    <div className="mt-8 space-y-4">
                        {faqs.map((faq) => (
                            <details key={faq.question} className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
                                <summary className="cursor-pointer font-serif text-lg font-semibold text-primary">{faq.question}</summary>
                                <p className="mt-3 leading-7">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
