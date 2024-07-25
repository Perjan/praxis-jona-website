import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Lipid Metabolic Disorders'
const description = "Lipid metabolic disorders, also known as dyslipidemias, refer to a group of diseases in which blood lipid levels deviate from the norm. These disorders can increase the risk of cardiovascular diseases such as heart attacks and strokes, as abnormal fat levels can lead to the formation of plaques in the arteries, which increase the risk of arteriosclerosis (atherosclerosis)."
const url = '/en/focus-areas/lipometabolic-disorders'

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
            de: '/schwerpunkte/fettstoffwechselstoerungen',
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
                        <h1 className="text-xl sm:text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
                    </div>
                </SectionWithColor>
                <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16">
                    <SectionWithColor backgroundClassName='bg-lightBeige'>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Lipid metabolic disorders are divided into two large groups:  </p>

                        <h2 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Primary Dyslipidemias</h2>
                        <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                            <li className="mt-2 text-lg sm:text-lg font-serif leading-8 font-semibold text-primaryLighter">Genetic, e.g. Familiar Hypercholesterolemia</li>
                        </ul>
                        <h2 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Secondary Dyslipidemias</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 lg:gap-8">
                            <div className="col-span-1">
                                <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                    <li className="mt-2 text-lg sm:text-lg font-serif font-semibold leading-6 sm:leading-8 text-primaryLighter">Hypertriglyceridemia</li>
                                    <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                        <li>Malnutrition (fructose, easily digestible carbohydrates)</li>
                                        <li>Diseases</li>
                                        <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                            <li>Obesity</li>
                                            <li>Diabetes Mellitus Type 2</li>
                                            <li>Metabolic syndrome</li>
                                            <li>Renal or Hepatic Insufficiency</li>
                                            <li>Hypothyroidism</li>
                                            <li>Cushing Disease</li>
                                        </ul>
                                        <li>Pregnancy</li>
                                        <li>Alcohol</li>
                                        <li>Medications</li>
                                        <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                            <li>Oestrogens, Contraceptives</li>
                                            <li>Amiodarone, Beta-Blockers, Thiazide Diuretics</li>
                                            <li>Glucocorticosteroids</li>
                                            <li>Tamoxifen, Cyclosporin</li>
                                            <li>Protease Inhibitors</li>
                                        </ul>
                                    </ul>
                                </ul>
                            </div>

                            <div className="col-span-1">
                                <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                    <li className="mt-2 text-lg sm:text-lg font-serif font-semibold leading-6 sm:leading-8 text-primaryLighter">Elevated LDL value comes through:</li>
                                    <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                        <li>Incorrect diet (trans fats, saturated fatty acids)</li>
                                        <li>Diseases</li>
                                        <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                            <li>Hypothyroidism</li>
                                            <li>Nephrotic Syndrome</li>
                                            <li>Cholestasis</li>
                                            <li>Anorexia nervosa</li>
                                        </ul>
                                        <li>Pregnancy</li>
                                        <li>Medications</li>
                                        <ul className="px-4 sm:px-8 list-disc text-base sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                                            <li>Progestogens</li>
                                            <li>Androgens</li>
                                            <li>Protease Inhibitors</li>
                                        </ul>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <ul className="px-4 sm:px-8 list-disc text-lg sm:text-lg leading-6 sm:leading-8 text-primaryLighter">
                            <li className="mt-2 text-lg sm:text-lg font-serif font-semibold leading-6 sm:leading-8 text-primaryLighter">Mixed Hyperlipidemia</li>
                        </ul>

                        <p className="mt-6 text-lg leading-8 text-primaryLighter">As lipid metabolic disorders often do not cause any direct symptoms, regular medical check-ups are crucial in order to recognize and treat possible risks at an early stage.</p>


                        <h2 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Diagnosis</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">The diagnosis of lipometabolic disorders is mainly carried out using blood tests, which provide information about the various fat levels in the blood. Our services:</p>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="text-xl mt-4 font-serif font-semibold">Lipid Profile</li>
                            <p className="text-lg">This test measures total cholesterol, LDL cholesterol, HDL cholesterol and triglycerides. You should not eat or drink before the blood test.</p>
                            <li className="text-xl mt-4 font-serif font-semibold">Additional Blood Tests</li>
                            <p className="text-lg">Depending on the findings, additional blood tests may be ordered to identify underlying causes or associated diseases, such as diabetes, thyroid disorders or kidney disease.</p>
                        </ul>

                        <h3 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">The Therapy consists of 3 Stages</h3>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Lifestyle changes: healthy diet, regular physical activity, weight management, alcohol reduction and smoking cessation</li>
                            <li>Medication Therapy</li>
                            <li>Technical Procedures (Lipid Apheresis)</li>
                        </ul>

                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}