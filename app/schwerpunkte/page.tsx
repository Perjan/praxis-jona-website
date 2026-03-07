import SchwerpunkteSection from "./SchwerpunkteSection"
import PhilosophieSection from "./PhilosophieSection"
import { Metadata } from "next"

const title = "Schwerpunkte & Philosophie"
const description = "Besondere Schwerpunkte unserer Praxis sind die Behandlung von Schilddrüsenerkrankungen, Bluthochdruck, Fettstoffwechselstörungen und Ernährungsmedizin."
const url = "/schwerpunkte"

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
            de: url,
            en: "/en/focus-areas",
            "x-default": url
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
            <SchwerpunkteSection locale="de" />
            <PhilosophieSection locale="de" />
        </>
    )
}
