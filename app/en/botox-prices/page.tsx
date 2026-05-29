import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import BotoxPriceTable from "app/components/BotoxPriceTable";
import { pricingSections, type PricingPageConfig } from "app/components/pricing/pricingData";
import { buildPricingJsonLd } from "app/components/pricing/pricingSchema";

const title = 'Botulinum toxin prices in Berlin-Mitte'
const description = "Current botulinum toxin prices in Berlin-Mitte: transparent costs by area, often searched for as Botox treatment, with information on frown lines, forehead lines, crow's feet, process and aftercare."
const url = '/en/botox-prices'

const faqs = [
    {
        question: "How much does Botox or botulinum toxin treatment cost in Berlin?",
        answer: "Botulinum toxin treatment starts from €159 depending on treatment area and indication. Many patients search online for Botox prices; medically, this page uses the general term botulinum toxin."
    },
    {
        question: "How much does one botulinum toxin injection cost?",
        answer: "We do not price treatment simply per injection. Cost depends on the treatment area and individual scope. The recommendation and price are discussed before treatment."
    },
    {
        question: "Why do botulinum toxin costs differ by area?",
        answer: "The scope depends on muscle activity, anatomy, desired result and treatment area. Individual areas and combinations therefore have different prices."
    },
    {
        question: "What does botulinum toxin for forehead lines or frown lines cost?",
        answer: "Forehead lines and frown lines each start from €199. Depending on findings, a combination of several areas may be discussed."
    },
    {
        question: "How long does botulinum toxin last?",
        answer: "The effect often lasts around 3 to 6 months. Duration varies by treatment area, muscle activity and individual response."
    },
    {
        question: "When does botulinum toxin start working?",
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
    const pricingConfig: PricingPageConfig = {
        key: "aesthetics",
        locale: "en",
        title,
        description,
        canonical: url,
        alternate: "/botox-preise",
        eyebrow: "Botulinum toxin prices",
        intro: description,
        sections: [pricingSections.botox],
        breadcrumbs: [
            { name: "Home", href: "/en" },
            { name: "Aesthetics", href: "/en/aesthetics" },
            { name: "Botulinum toxin prices", href: url },
        ],
        faqs,
    }
    const jsonLd = buildPricingJsonLd(pricingConfig);

    return (
        <>
            {jsonLd.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
                />
            ))}
            <div className="overflow-hidden bg-white relative isolate">
                <SectionWithColor backgroundClassName='bg-white'>
                    <div className="mx-auto max-w-4xl lg:mx-0">
                        <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
                        <p className="mt-4 text-base leading-7 text-primaryLighter">
                            Prices are guideline values and are discussed transparently before treatment.
                            For suitability and personal recommendations, please book a consultation.
                            More aesthetic prices are available in the <a href="/en/aesthetics/prices" className="font-semibold underline underline-offset-4">aesthetics price overview</a>.
                        </p>
                        <p className="mt-4 rounded-lg border border-primary/10 bg-white p-4 text-sm leading-6 text-primaryLighter">
                            Botox® is a registered trademark. On this page, we use the medical term botulinum toxin. The specific preparation is discussed during medical consultation.
                        </p>
                    </div>
                </SectionWithColor>

                <BotoxPriceTable isEnglish={true} />

                <div className="max-w-4xl mx-auto px-4 pb-16 text-primaryLighter">
                    <h2 className="text-2xl font-serif text-primary">Botulinum toxin costs in Berlin: common questions</h2>
                    <p className="mt-3 leading-7">If you are searching for “Botox Berlin prices”, “Botox costs Berlin” or “forehead Botox cost”, this page gives you a clear cost overview for botulinum toxin treatment of expression lines and selected medical applications.</p>
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
