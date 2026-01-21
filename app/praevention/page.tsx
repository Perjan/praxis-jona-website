import HeroSection from "./HeroSection"
import PackagesSection from "./PackagesSection"
import TeamSection from "./TeamSection"
import WhyItMattersSection from "./WhyItMattersSection"
import { Metadata } from "next"

const title = "Prävention"
const description = "Gesundheit ist kein Zufall. Sondern eine Entscheidung. Wir machen Prävention planbar. Mit ärztlicher Diagnostik, interdisziplinärer Expertise und individueller Begleitung."
const url = "/praevention"

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
            en: "/en/prevention"
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
            <HeroSection locale="de" />
            <PackagesSection locale="de" />
            <TeamSection locale="de" />
            <WhyItMattersSection locale="de" />
        </>
    )
}
