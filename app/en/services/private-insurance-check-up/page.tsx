import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import PrimaryButton from "app/components/PrimaryButton";
import PrivateCheckupPricingComponent from "app/components/PrivateCheckupPricingComponent";

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
                <div className="px-4 lg:px-0 max-w-7xl mx-auto">
                    <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                        <h2 className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Comprehensive healthcare for your wellbeing</h2>
                    
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">We offer two tailored check-up packages optimally designed to meet your individual needs.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">The standard public health examination, which is covered every three years from the age of 35, only includes basic tests such as blood glucose, cholesterol, and urine analysis. From our medical perspective, this is not sufficient to identify all relevant health risks in a timely manner.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Our enhanced preventive examinations meaningfully supplement these basic services. They include, among other things, a detailed examination of your cardiovascular system (e.g., resting and stress ECG), vascular examinations such as stroke checks, and internal cancer screening through ultrasound examinations of the abdominal organs and thyroid.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Some services are covered by your public health insurance, and we're happy to provide individual advice about the additional examinations. Please speak to our practice team – together we'll find the right preventive package for you.</p>
                        
                    </SectionWithColor>
                 </div>

                 <PrivateCheckupPricingComponent buttonText="Book online now" language="en" />

                    <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mt-8 sm:mt-0 mb-12">
                        <SectionWithColor backgroundClassName='bg-tealColor rounded-xl lg:rounded-2xl overflow-hidden'>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-2xl mt-4 mb-8 font-serif font-medium text-center leading-8 text-primaryLighter">Find out more about the public insurance check-up</h2>
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