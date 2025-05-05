import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import PrimaryButton from "app/components/PrimaryButton";

const title = 'Private Insurance Check-up'
const description = "A private insurance check-up helps ensure your coverage still meets your current needs and lifestyle. It's a smart way to identify gaps, optimize benefits, and potentially save on premiums."
const url = '/en/services/private-insurance-check-up'

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
            de: "/leistungen/private-check-up"
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
                        <h2 className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Additional laboratory (for self-payers or private insurance, charged according to GOÄ):</h2>
                        <ul className="list-disc pl-5">
                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Trace elements, vitamin D, and hormone levels</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Parameters of the immune system, blood group</p>
                            </li>

                            <li>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Evaluation of the findings and advice on dietary supplements.</p>
                            </li>
                        </ul>

                        <p className="mt-2 text-lg mb-8 leading-8 text-primaryLighter">Contact us and we will be happy to advise you.</p>
                        <PrimaryButton
                            href="https://www.doctolib.de/internist/berlin/gjolli-jonida/booking/new-patient?specialityId=1302&profile_skipped=true&utm_source=gjolli-jonida-website-button&utm_medium=referral&utm_campaign=website-button&utm_content=option-8&bookingFunnelSource=external_referral"
                            fullWidth={true}
                        >
                            Book an appointment
                        </PrimaryButton>

                    </SectionWithColor>
                    </div>

                    <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mt-8 sm:mt-0 mb-12">
                    <SectionWithColor backgroundClassName='bg-tealColor rounded-xl lg:rounded-2xl overflow-hidden'>
                        <h2 className="text-2xl mt-4 mb-8 font-serif font-medium text-center leading-8 text-primaryLighter">Find out more about the public insurance check-up</h2>
                        <div className="flex flex-col items-center justify-center">
                        <PrimaryButton
                            href="/en/services/public-insurance-check-up"
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