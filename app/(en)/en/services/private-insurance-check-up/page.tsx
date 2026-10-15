import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import PrimaryButton from "app/components/PrimaryButton";
import PrivateCheckupPricingComponent from "app/components/PrivateCheckupPricingComponent";

const title = 'Private Check-up'
const description = "Private check-up in Berlin-Mitte: additional examinations based on your needs, with medical advice about benefits, limitations, and costs."
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
                <div className="px-4 lg:px-0 max-w-7xl mx-auto">
                    <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                        <h2 className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">A check-up based on your needs</h2>
                    
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">We offer two check-up packages. Together, we discuss which examinations suit your personal situation.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">The statutory health check-up supports early detection and advice about personal health risks. We discuss whether additional examinations may be useful based on your symptoms, medical history, and personal risks.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Depending on the clinical question, additional examinations may include a resting or exercise ECG and ultrasound of the blood vessels, abdominal organs, or thyroid. We explain the possible benefits and limitations of each examination beforehand.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">We distinguish between services covered by statutory health insurance and additional self-pay services. We discuss the costs before any additional examination. Please contact our practice team if you have questions about the packages.</p>
                        
                    </SectionWithColor>
                 </div>

                 <PrivateCheckupPricingComponent buttonText="Book online now" language="en" />

                    <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mt-8 sm:mt-0 mb-12">
                        <SectionWithColor backgroundClassName='bg-tealColor rounded-xl lg:rounded-2xl overflow-hidden'>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-2xl mt-4 mb-8 font-serif font-medium text-center leading-8 text-primaryLighter">Find out more about the statutory health check-up</h2>
                            <PrimaryButton
                                href="/en/services/public-insurance-check-up"
                            >
                                View statutory check-up details
                            </PrimaryButton>
                        </div>
                        </SectionWithColor>
                    </div>
            </div>
        </>
    )
}
