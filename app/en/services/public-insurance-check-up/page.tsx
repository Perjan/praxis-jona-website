import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import PrimaryButton from "app/components/PrimaryButton";

const title = 'Public Insurance Check-up'
const description = "From the age of 35, it is possible to have a check-up every 3 years. In addition, there is now the option for insured persons to have a check-up once between their 18th and 35th birthday."
const url = '/en/services/public-insurance-check-up'

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
            de: "/leistungen/gesetzliche-check-up"
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
                <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16">
                    <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                        <h2 className="text-2xl mt-4 max-w-5xl font-serif font-medium leading-8 text-primaryLighter">The public insurance check-up includes:</h2>
                        <ul className="list-disc pl-5">
                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Medical history</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Physical examination</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Consultation 15 minutes</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Laboratory (cholesterol level, fasting blood sugar, urine stix)</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Hep B and C screening once in a lifetime from age 35</p>
                            </li>
                        </ul>

                    </SectionWithColor>
                    
                    </div>
                    <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mt-8 sm:mt-0 mb-12">
                    <SectionWithColor backgroundClassName='bg-tealColor rounded-xl lg:rounded-2xl overflow-hidden'>
                        <h2 className="text-2xl mt-4 mb-8 font-serif font-medium text-center leading-8 text-primaryLighter">Additional laboratory tests (for self-payers, calculated according to GOÄ)</h2>
                        <div className="flex flex-col items-center justify-center">
                        <PrimaryButton
                            href="/en/services/private-check-up"
                        >
                            Learn More
                        </PrimaryButton>
                        </div>
                    </SectionWithColor>
                    </div>
            </div>
        </>
    )
}