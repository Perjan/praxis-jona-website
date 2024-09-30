import SchwerpunkteSection from "./SchwerpunkteSectionEN"
import PhilosophieSection from "./PhilosophieSectionEN"

import { Metadata } from "next"

const title = "Specialty Areas & Philosophy"
const description = "Our practice focuses in particular on the treatment of Thyroid Disorders, High Blood Pressure, Lipid Metabolic Disorders and Nutritional Medicine."
const url = "/en/focus-areas"

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
            de: "/schwerpunkte",
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
            <SchwerpunkteSection />
            <PhilosophieSection />
        </>
    )
}
