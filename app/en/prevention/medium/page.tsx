import { Metadata } from "next"
import Link from "next/link"
import SectionWithColor from "app/SectionWithColor"

const title = "MEDIUM Package - From 2,400 Euro"
const description = "In-depth analysis of physical stress patterns and targeted improvement of strength, stability and load control as well as in-depth analysis of psychological stress patterns and strengthening of stress regulation."
const url = "/en/prevention/medium"

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

export default function MediumPage() {
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
                            All services from the Basic package
                        </h2>
                        <p className="mt-4 text-lg text-primaryLighter">
                            In addition to all services of the BASIC package:
                        </p>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Advanced Medical Diagnostics
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Lung function: FEV1, FVC, Tiffeneau</li>
                            <li>Stress test: Stress ECG, VO₂max, HRR</li>
                            <li>Body composition & function: BIA, grip strength</li>
                            <li>Abdominal ultrasound: liver, kidney, spleen, aorta</li>
                            <li>Advanced blood profile: thyroid (TSH, fT3, fT4, TPO-AK), sex hormones, DHEAS, morning cortisol</li>
                            <li>Micronutrients: zinc, selenium</li>
                            <li>Vascular & metabolic markers: Omega-3 index, homocysteine, Lp(a), Lp-PLA2</li>
                            <li>Standard nutritional history including Plant Points</li>
                        </ul>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Mental Resilience & Stress Regulation (3 sessions)
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Advanced diagnostics on stress patterns and load cycles</li>
                            <li>Work on emotion and stress regulation</li>
                            <li>Introduction of individually suitable micro-interventions</li>
                            <li>Creation of a personal prevention framework (4–6 weeks)</li>
                        </ul>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Advanced Functional Performance Check and Training Program
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Advanced functional performance check (movement patterns, strength profiles, stress reactions)</li>
                            <li>Analysis of everyday and training loads</li>
                            <li>Structured work on strength, mobility, stability and coordination</li>
                            <li>Introduction of individually suitable training micro-interventions for everyday life & work</li>
                            <li>Implementation of 2 personalized personal training sessions of 60 minutes</li>
                            <li>Creation of a personal training and load framework (4–6 weeks)</li>
                        </ul>

                        <div className="mt-12 p-6 bg-white/50 rounded-xl">
                            <p className="text-base text-primaryLighter italic">
                                All modules are individually adapted to the starting point, load factors, and resources of the clients as well as the current health status, performance level, and personal goals.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center justify-center">
                            <a
                                href="mailto:praevention@praxisjona.de?subject=Inquiry MEDIUM Package"
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
