import { Metadata } from "next"
import Link from "next/link"
import SectionWithColor from "app/SectionWithColor"

const title = "BASIC Package - From 1,200 Euro"
const description = "Assessment of the current physical performance and health status as well as introduction of the first structured training and recovery strategies. At the same time, early detection of psychological stress factors and introduction of the first stabilizing strategies."
const url = "/en/prevention/basic"

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: url,
    },
    alternates: {
        canonical: url,
    }
}

export default function BasicPage() {
    return (
        <div className="overflow-hidden bg-white relative isolate">
            <SectionWithColor backgroundClassName='bg-white'>
                <div className="mx-auto max-w-4xl lg:mx-0">
                    <Link
                        href="/en/prevention"
                        className="text-primary hover:text-primaryLighter font-medium inline-flex items-center gap-2 mb-8"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back to overview
                    </Link>
                    <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                    <p className="mt-4 text-lg leading-8 text-primaryLighter">{description}</p>
                </div>
            </SectionWithColor>

            <div className="px-4 lg:px-0 max-w-7xl mx-auto sm:mb-16 mb-12">
                <SectionWithColor backgroundClassName='bg-lightBeige rounded-xl lg:rounded-2xl overflow-hidden'>
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-serif font-semibold text-primary">
                            Medical Check-Up
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Medical history: symptoms, family history, medication, lifestyle</li>
                            <li>Basic vital parameters: blood pressure, pulse, SpO₂, temperature</li>
                            <li>Resting ECG</li>
                            <li>Clinical full-body status</li>
                            <li>Ultrasound: thyroid gland</li>
                            <li>Basic blood profile: Blood count, ApoB, LDL, TG, CRP-hs, HbA1c, Insulin/HOMA, Ferritin, TSH, Vitamin D, B12 + HoloTC, Folic acid, Electrolytes, Urine-Stix</li>
                            <li>Nutritional history</li>
                        </ul>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Mental Health Care (2 sessions)
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Anamnesis & diagnostic screenings</li>
                            <li>Identification of central risk areas → Stress, sleep, emotional regulation</li>
                            <li>Introduction of basic self-regulation methods</li>
                            <li>Development of an individual 4-week self-care plan</li>
                        </ul>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Fitness & Health Check-Up
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Anamnesis, posture, mobility, strength, endurance</li>
                            <li>Identification of central physical risk areas (lack of movement, imbalances, load tolerance)</li>
                            <li>Introduction of basic movement, breathing, and stabilization principles</li>
                            <li>Implementation of 1 individually adapted personal training session of 60 minutes</li>
                            <li>Development of a 4-week basic training & recovery plan</li>
                        </ul>

                        <div className="mt-12 p-6 bg-white/50 rounded-xl">
                            <p className="text-base text-primaryLighter italic">
                                All modules are individually adapted to the starting point, load factors, and resources of the clients as well as the current health status, performance level, and personal goals.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center justify-center">
                            <a
                                href="mailto:praevention@praxisjona.de?subject=Inquiry BASIC Package"
                                className="rounded-xl bg-primary px-6 py-3.5 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primaryLighter hover:shadow-md no-underline"
                            >
                                Request non-binding initial consultation
                            </a>
                        </div>
                    </div>
                </SectionWithColor>
            </div>
        </div>
    )
}
