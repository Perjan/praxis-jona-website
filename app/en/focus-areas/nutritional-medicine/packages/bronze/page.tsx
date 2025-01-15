import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import ConsultationPromise from "app/components/ConsultationPromise";
import React from "react";

const title = 'Bronze Nutrition Package - One-Time Consultation'
const description = "One-time consultation for €149 - Perfect for those who want individual advice but don't need long-term support."
const url = '/en/focus-areas/nutritional-medicine/packages/bronze'

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
            de: '/schwerpunkte/ernaehrungsmedizin/pakete/bronze',
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
                    <div className="max-w-4xl mx-auto lg:mx-0 flex flex-col justify-between rounded-lg p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-[#fdf1ec] to-[#f7e6e0] backdrop-blur-sm bg-opacity-50">
                        <div>
                            <p className="text-center text-2xl font-serif font-medium text-primary">Bronze</p>
                            <p className="mt-4 text-center text-sm text-primaryLighter">One-time 60 minutes</p>
                            <p className="mt-4 text-center text-4xl font-serif font-bold text-primary">€149</p>
                            <p className="mt-4 text-center text-sm text-primary font-medium">One-time payment</p>
                            
                            <div className="mt-8">
                                <h2 className="text-xl font-serif font-medium text-primary mb-4">Who is this consultation for?</h2>
                                <p className="text-primaryLighter mb-6">
                                    This consultation is designed for individuals who already follow a predominantly healthy diet and are looking for fine-tuning. If you already place great value on healthy nutrition but want to improve certain aspects – whether for your sports performance, well-being, or health – this is perfect for you.
                                </p>

                                <h2 className="text-xl font-serif font-medium text-primary mb-4">What to expect?</h2>
                                <ul className="space-y-4 text-primaryLighter">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <div>
                                            <h3 className="font-bold">Personal Consultation (approx. 60 minutes):</h3>
                                            <p>We'll take the time to analyze your current habits in detail and develop an individual action plan perfectly tailored to you.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <div>
                                            <h3 className="font-bold">Macronutrient Distribution & Periodization:</h3>
                                            <p>Together, we'll work out the optimal distribution of your macronutrients (carbohydrates, fats, proteins) and align them with your daily routine, goals, and activity level.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <div>
                                            <h3 className="font-bold">Food Diary Analysis:</h3>
                                            <p>We'll take a detailed look at your food diary to identify nuances and make targeted improvements.</p>
                                        </div>
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