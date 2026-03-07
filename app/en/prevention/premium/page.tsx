import { Metadata } from "next"
import Link from "next/link"
import SectionWithColor from "app/SectionWithColor"

const title = "PREMIUM Package - From 4,000 Euro"
const description = "Sustainable strengthening of physical health and performance-oriented development based on long-term training and recovery strategies and comprehensive, long-term psychological prevention work."
const url = "/en/prevention/premium"

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

export default function PremiumPage() {
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
                            All services from the Basic and Medium packages
                        </h2>
                        <p className="mt-4 text-lg text-primaryLighter">
                            In addition to all services of the BASIC and MEDIUM packages:
                        </p>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Advanced Imaging and Diagnostics
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>Ultrasound: Echo cardiography, carotid duplex (IMT/plaques), ABI</li>
                            <li>Cell biology/mitochondria: glutathione, MDA, CoQ10, nicotinamide, pregnenolone</li>
                            <li>Immunomodulation: IL-6, TNF-alpha, IgA/IgG/IgM</li>
                            <li>Cardiac biomarkers: hs-troponin T, NT-proBNP</li>
                            <li>Advanced minerals: copper, ceruloplasmin, urine iodine, urine calcium, RBC magnesium</li>
                            <li>Advanced thyroid: TRAK</li>
                            <li>Cognition & psychology: DemTect, clock test, stress profile</li>
                            <li>In-depth nutritional analysis</li>
                        </ul>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Long-Term Mental Health Strengthening (5 sessions)
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>In-depth diagnostics – analysis of personality patterns, stress biography, resources</li>
                            <li>Work on basic emotional patterns & identity-relevant topics</li>
                            <li>Analysis of stress physiology & recovery windows</li>
                            <li>Behavioral biological change work</li>
                            <li>Development of an individual health plan (6–12 months)</li>
                        </ul>

                        <h2 className="mt-12 text-2xl font-serif font-semibold text-primary">
                            Comprehensive Performance Check and Training Framework
                        </h2>
                        <ul className="mt-6 space-y-3 text-lg text-primaryLighter">
                            <li>In-depth functional diagnostics (movement quality, strength and load biography, resources)</li>
                            <li>Work on fundamental movement and strength patterns</li>
                            <li>Analysis of training load, recovery ability, and adaptation reactions</li>
                            <li>Periodized training control on a behavioral and sports science basis</li>
                            <li>Implementation of 4 individually planned personal training sessions of 60 minutes each</li>
                            <li>Development of a long-term physical health & training plan (6–12 months)</li>
                        </ul>

                        <div className="mt-12 p-6 bg-white/50 rounded-xl">
                            <p className="text-base text-primaryLighter italic">
                                All modules are individually adapted to the starting point, load factors, and resources of the clients as well as the current health status, performance level, and personal goals.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center justify-center">
                            <a
                                href="mailto:praevention@praxisjona.de?subject=Inquiry PREMIUM Package"
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
