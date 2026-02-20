import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Ultrasound Examination'
const description = "The ultrasound examination is a non-invasive procedure for assessing the structure and function of organs and vessels. An ultrasound device is used to create images of the organs and vessels, which can then be evaluated by a doctor to diagnose and plan treatment."
const url = '/en/services/ultrasound-examination'

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
            de: '/leistungen/ultraschalluntersuchung',
            en: url,
            "x-default": '/leistungen/ultraschalluntersuchung'
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
                <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mb-12">
                    <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Diagnostic Ultrasound of Abdominal Organs (Abdominal Sonography)</h2>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">The ultrasound examination of the abdomen is used for diagnosing and monitoring various conditions. This method allows for the assessment of the size, structure, and position of abdominal organs such as the liver, gallbladder, spleen, kidneys, pancreas, prostate, lymph nodes, abdominal aorta, bladder, and intestines. For optimal results, it is recommended to fast before the examination to avoid gas interference and ensure a filled gallbladder.</p>
                           

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Thyroid Ultrasound (Thyroid Sonography)</h2>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Thyroid sonography assesses the size, structure, and potential abnormalities such as nodules or cysts in the thyroid gland. This examination provides immediate results and is a crucial tool for diagnosing and monitoring thyroid conditions, including thyroid nodules and thyroiditis.</p>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Ultrasound of the Brain-Supplying Vessels (Carotid Duplex)</h2>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">The carotid duplex examination is a painless, non-invasive ultrasound procedure used to examine the carotid arteries. It evaluates both the structure of the vessels and blood flow. This test helps identify narrowing or plaques in the carotid arteries, which can increase the risk of stroke. The results are available immediately and provide important information for the prevention and treatment of vascular diseases.</p>
                           
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Note: This examination is not covered by statutory health insurance.</p>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Ultrasound of the Leg Vessels (Leg Vein Duplex)</h2>
                        
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">The leg vein duplex examination is a non-invasive ultrasound procedure used to assess the veins in the legs. It examines both the structure of the veins and the blood flow through them using B-mode ultrasound and Doppler ultrasound. This test aids in the early detection of thrombosis (blood clots) and venous valve diseases.</p>
                            
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Note: This examination is not covered by statutory health insurance.</p>
                            
                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}