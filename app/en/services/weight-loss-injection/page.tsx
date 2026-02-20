import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import OzempicPricing from "app/components/OzempicPricing";

const title = 'Weight Loss Injection'
const description = "Weight loss injections (GLP-1 such as Ozempic®, Wegovy®, Mounjaro®) are a modern medical treatment method for weight reduction. These medications work by mimicking the natural hormone GLP-1, which reduces appetite, enhances the feeling of satiety, and slows gastric emptying. Treatment is provided under medical supervision and is individually tailored to your needs."
const url = '/en/services/weight-loss-injection'

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
            de: "/leistungen/abnehmspritze",
            en: url,
            "x-default": "/leistungen/abnehmspritze"
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

                <OzempicPricing buttonText="Book Appointment" language="en" />

                <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mb-12">
                    <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">How Does the Weight Loss Injection Work?</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">GLP-1 (Glucagon-like Peptide-1) are medications that mimic the natural hormone GLP-1. This hormone is normally produced in the intestine and plays an important role in regulating appetite and blood sugar levels.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">The mechanism of action includes:</p>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="mt-2">Appetite suppression: Reduces feelings of hunger</li>
                            <li className="mt-2">Enhanced satiety: Helps you feel full faster</li>
                            <li className="mt-2">Delayed gastric emptying: Leads to longer-lasting feelings of fullness</li>
                            <li className="mt-2">Blood sugar regulation: Can also be helpful for type 2 diabetes</li>
                        </ul>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Who Is This Treatment Suitable For?</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Weight loss injections are suitable for adults with overweight (BMI ≥ 30) or obesity (BMI ≥ 27) with at least one weight-related comorbidity. Before starting treatment, we conduct a thorough medical examination to ensure the treatment is suitable for you.</p>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Possible Side Effects</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">As with all medications, side effects can occur with weight loss injections. Common side effects may include:</p>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="mt-2">Nausea</li>
                            <li className="mt-2">Vomiting</li>
                            <li className="mt-2">Diarrhea</li>
                            <li className="mt-2">Constipation</li>
                            <li className="mt-2">Abdominal pain</li>
                        </ul>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">These side effects are usually mild to moderate and often subside after a few weeks as the body adjusts to the medication. We discuss all possible risks and side effects in detail with you before starting treatment.</p>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Important Notes</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">The costs for the medication (GLP-1) are not included in the price and are currently not covered by statutory health insurance. Treatment is provided as a self-pay service according to the German Medical Fee Schedule (GOÄ).</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Successful weight reduction requires a comprehensive approach that includes not only medication but also a healthy diet, regular physical activity, and, if necessary, psychological support.</p>
                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}

