import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import 'app/schwerpunkte/bluthochdruck/BloodPressureTable.css';

const title = 'High Blood Pressure'
const description = "Hypertension, also known as high blood pressure, is a common condition that increases the risk of serious health problems such as heart attack, stroke, heart failure and kidney disease. As hypertension often progresses without obvious symptoms, it is often referred to as the 'silent killer'."
const url = '/en/focus-areas/high-blood-pressure'

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
            de: "/schwerpunkte/bluthochdruck",
            en: url,
            "x-default": "/schwerpunkte/bluthochdruck"
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
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">In Germany, around one in three adults suffers from high blood pressure, which corresponds to around 20 to 30 million people. As the risk of developing high blood pressure increases with age, as many as three out of four people over the age of 70 have high blood pressure.</p>

                        <p className="mt-6 text-lg leading-8 text-primaryLighter">If the pressure is too high, this can lead to serious damage to health in the long term. Elevated blood pressure is the cause of cardiovascular diseases such as heart attacks, strokes and kidney failure, making it the number one cause of death in Germany.</p>

                        <p className="mt-6 text-lg leading-8 text-primaryLighter">People with high blood pressure generally do not notice any symptoms, which is why screening is so important.</p>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Diagnosis</h2>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">The diagnosis is based on:</p>
                        <ol>
                            <li className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">1 - Medical history and clinical examination</li>
                            <li className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">2 - Blood pressure measurement</li>
                        </ol>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">We offer 24-hour long-term blood pressure measurements, but regular checks at home usually provide better information.<br></br>To measure your blood pressure correctly, you should follow a few important steps:</p>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="mt-2 font-serif font-medium leading-8 text-primaryLighter">Time of the Measurement</li>
                            <p className="leading-8 text-primaryLighter">Measure your blood pressure twice a day - in the morning before you start your day and in the evening before you go to bed.</p>

                            <li className="mt-4 font-serif font-medium leading-8 text-primaryLighter">Preparation</li>
                            <p className="leading-8 text-primaryLighter">You should relax and calm down before the measurement. Do not carry out any other activities during the measurement and wait at least 30 minutes after physical exertion.</p>

                            <li className="mt-4 font-serif font-medium leading-8 text-primaryLighter">Position</li>
                            <p className="text-lg leading-8 text-primaryLighter">Sit relaxed on a chair with both feet flat on the floor. Place the cuff at heart level:</p>
                            <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                                <li>For upper arm devices: Place the cuff at heart level on the upper arm.</li>
                                <li>For wrist devices: Place the wrist on the chest at heart level.</li>
                            </ul>

                            <li className="mt-4 font-serif font-medium leading-8 text-primaryLighter">Measuring Procedure</li>
                            <p className="text-lg leading-8 text-primaryLighter">Take two measurements at least one minute apart and record the values of both measurements.</p>

                            <li className="mt-4 font-serif font-medium leading-8 text-primaryLighter">Documentation</li>
                            <p className="leading-8 text-primaryLighter">Keep a blood pressure diary. Document the readings for seven days, taking two readings in the morning and two in the evening. If you notice high values, discuss the findings with your doctor.</p>
                        </ul>

                        <p className="mt-4 text-lg leading-8 text-primaryLighter">Here is the definition of hypertension according to the 2023 ESC guidelines:</p>

                        <table className="blood-pressure-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Systolic (mmHg)</th>
                                    <th className="hidden"></th>
                                    <th>Diastolic (mmHg)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Normal</td>
                                    <td>130</td>
                                    <td className="hidden">and/or</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>High-normal</td>
                                    <td>130-139</td>
                                    <td className="hidden">and/or</td>
                                    <td>85-89</td>
                                </tr>
                                <tr>
                                    <td>Hypertension Grade 1</td>
                                    <td>140–159</td>
                                    <td className="hidden">and/or</td>
                                    <td>90–99</td>
                                </tr>
                                <tr>
                                    <td>Hypertension Grade 2</td>
                                    <td>160–179</td>
                                    <td className="hidden">and/or</td>
                                    <td>100–109</td>
                                </tr>
                                <tr>
                                    <td>Hypertension Grade 3</td>
                                    <td>≥ 180</td>
                                    <td className="hidden">and/or</td>
                                    <td>≥ 110</td>
                                </tr>
                                <tr>
                                    <td>Isolated Systolic Hypertension</td>
                                    <td>≥ 140</td>
                                    <td className="hidden">and/or</td>
                                    <td>and &lt; 90</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3 className="text-xl mt-4 font-serif font-medium leading-8 text-primaryLighter">3 - Laboratory Tests</h3>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Treatment</h2>

                        <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">1 - Non-Drug Therapy</h3>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li>Changing your diet and losing weight</li>
                            <li>Reduction in alcohol consumption</li>
                            <li>Stop smoking</li>
                            <li>Movement</li>
                        </ul>
                        <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">2 - Antihypertensive Drug Therapy</h3>

                    </SectionWithColor>

                </div>
            </div>
        </>
    )
}