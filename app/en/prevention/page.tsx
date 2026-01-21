import HeroSection from "../../praevention/HeroSection"
import PackagesSection from "../../praevention/PackagesSection"
import TeamSection from "../../praevention/TeamSection"
import WhyItMattersSection from "../../praevention/WhyItMattersSection"
import { Metadata } from "next"

const title = "Prevention"
const description = "Health is not a coincidence. It's a decision. We make prevention plannable. With medical diagnostics, interdisciplinary expertise and individual support."
const url = "/en/prevention"

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
            de: "/praevention",
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
            <HeroSection locale="en" />
            <PackagesSection locale="en" />
            <TeamSection locale="en" />
            <WhyItMattersSection locale="en" />
        </>
    )
}
