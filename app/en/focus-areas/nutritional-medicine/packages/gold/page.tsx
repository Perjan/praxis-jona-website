import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import ConsultationPromise from "app/components/ConsultationPromise";
import React from "react";

const title = 'Gold Nutrition Package - Intensive Support'
const description = "Starting at €280 per month - The Gold Plan is ideal for those seeking intensive and close support for maximum results."
const url = '/en/focus-areas/nutritional-medicine/packages/gold'

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
            de: '/schwerpunkte/ernaehrungsmedizin/pakete/gold',
            en: url
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

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col justify-between rounded-lg p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-[#fff9e6] to-[#fff3cc] backdrop-blur-sm bg-opacity-50">
                        <div>
                            <h2 className="text-center text-2xl font-serif font-medium text-primary">Gold</h2>
                            <p className="mt-4 text-center text-sm text-primaryLighter">Intensive Support</p>
                            <p className="mt-4 text-center text-4xl font-serif font-bold text-primary">From €280</p>
                            <p className="mt-4 text-center text-sm text-primary font-medium">per month (minimum term: 2 months)</p>
                            
                            <div className="mt-8">
                                <h3 className="text-xl font-serif font-medium text-primary mb-4">How it works</h3>
                                <ul className="space-y-4 text-primaryLighter">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Initial consultation: 60 minutes via Zoom or in-person – we define your goals and create your individual action plan.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Personalized plan: Within 2-3 days, you'll receive your tailored action plan.</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-serif font-medium text-primary mb-4 mt-8">Services Overview</h3>
                                <ul className="space-y-4 text-primaryLighter">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Bi-weekly check-ins via Zoom or in-person</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Analysis of your food diary and continuous optimization</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Action plan with 2 personalized sample days and 8-week periodization</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Long-term planning and adjustments for goal achievement</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Support with shopping lists and meal planning</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Calculation of your individual calorie and macronutrient needs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Action plan adjustments: Optimized every two weeks for your daily routine and goals</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Supplement Guide: Recommendations for supportive nutritional supplements</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-serif font-medium text-primary mb-4 mt-8">Suitable for</h3>
                                <ul className="space-y-4 text-primaryLighter">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Fat loss: With close supervision</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Muscle gain: Tailored to your needs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Lifestyle optimization: For conditions like lipid metabolism disorders, diabetes, high blood pressure, or irritable bowel syndrome</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8">
                            <a
                                href="/en/book-appointment"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Book Appointment
                            </a>
                        </div>
                    </div>
                </div>

                <ConsultationPromise />
            </div>
        </>
    )
} 