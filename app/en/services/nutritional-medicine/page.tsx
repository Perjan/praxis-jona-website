import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";
import NutritionPricing from "app/components/NutritionPricing";
import OzempicPricing from "app/components/OzempicPricing";
import NutrientTherapyPricing from "app/components/NutrientTherapyPricing";

const title = 'Nutritional Medicine'
const description = "Obesity is a growing health problem that affects many people in modern society. It can lead to a variety of health problems, including cardiovascular disease, type 2 diabetes, joint problems and an increased risk of certain cancers."
const url = '/en/services/nutritional-medicine'

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
            de: "/leistungen/ernaehrungsmedizin",
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

                <NutritionPricing buttonText="Book Appointment" language="en" />
                <OzempicPricing buttonText="Book Appointment" language="en" />
                <NutrientTherapyPricing buttonText="Book Appointment" language="en" />

                <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mb-12">
                    <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">The causes of obesity are varied and include genetic factors, various medications, autoimmune diseases, lifestyle choices such as insufficient exercise and an unbalanced diet, as well as psychological components such as stress and emotional eating.</p>

                        <p className="mt-2 text-lg leading-8 text-primaryLighter">Successful treatment of obesity often requires a comprehensive approach that includes a healthier diet, regular physical activity and, if necessary, psychological support. The aim is not only to reduce weight, but also to promote a healthy and balanced lifestyle in the long term.</p>

                        <h2 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">Goals of Nutritional Therapy</h2>
                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="text-xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Disease Prevention and Treatment</li>
                            <p>Nutritional therapy can help prevent and treat chronic diseases such as diabetes, cardiovascular diseases, high blood pressure and certain types of cancer, and keep autoimmune diseases in a latent phase.</p>
                            <li className="text-xl mt-4 font-serif font-medium">Improvement of the Intestinal Flora</li>
                            <p>By changing the diet, the intestinal flora can be restored, which can lead to relief of intestinal complaints.</p>
                            <li className="text-xl mt-4 font-serif font-medium">Weight Management</li>
                            <p>By adjusting the diet, weight can be controlled, which contributes to the prevention and treatment of obesity and underweight.</p>
                            <li className="text-xl mt-4 font-serif font-medium">Improvement in General Well-Being</li>
                            <p>A balanced diet promotes general well-being, boosts energy levels and improves mental health.</p>
                        </ul>

                        <p className="mt-4 text-lg leading-8 text-primaryLighter">It is important to me to find out how a change in diet can become easier and sustainable for you.</p>

                        <h3 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">How can a change in diet be made easier and sustainable?</h3>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="text-lg mt-4 font-serif font-medium ">Individual Consultation</li>
                            <p>A personal consultation helps to take individual needs and preferences into account and set realistic goals.</p>
                            <li className="text-lg mt-4 font-serif font-medium ">Gradual Changes</li>
                            <p>Small, gradual changes to your diet are often more sustainable and easier to implement than radical changes.</p>
                            <li className="text-lg mt-4 font-serif font-medium ">Education and Knowledge</li>
                            <p>Knowledge about healthy eating and understanding the effects of certain foods on the body can increase motivation and help to make informed choices.</p>
                            <li className="text-lg mt-4 font-serif font-medium ">Long-term Planning</li>
                            <p>Developing a long-term nutrition plan that includes flexible and realistic goals contributes to the sustainability of the dietary change.</p>
                        </ul>
                        
                        <h3 className="text-2xl mt-6 font-serif font-medium leading-8 text-primaryLighter">My Specialty Areas</h3>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="text-lg mt-4 font-serif font-medium">Metabolic Disorders and Body Weight</li>
                            <ul className="px-8 list-disc text-lg ">
                                <li>Weight Gain due to Autoimmune Diseases such as Hashimoto's</li>
                                <li>Lipid Metabolic Disorders</li>
                                <li>Diabetes Mellitus</li>
                            </ul>

                            <li className="text-lg mt-4 font-serif font-medium ">Cardiovascular Diseases</li>
                            <ul className="px-8 list-disc text-lg ">
                                <li>High Blood Pressure (Hypertension)</li>
                            </ul>

                            <li className="text-lg mt-4 font-serif font-medium ">Gastrointestinal Tract</li>
                            <ul className="px-8 list-disc text-lg ">
                                <li>Irritable Bowel Syndrome (IBS)</li>
                                <li>Microbiome</li>
                            </ul>

                            <li className="text-lg mt-4 font-serif font-medium leading-8 text-primaryLighter">Weight Management (Gaining or Losing Weight)</li>
                        </ul>
                    </SectionWithColor>
                </div>
            </div>
        </>
    )
}

function ComingSoonBadge() {
    return (
        <span className='bg-primaryDarker px-4 py-1 rounded-xl text-sm font-bold text-white mr-2'>Coming Soon</span>
    )
}