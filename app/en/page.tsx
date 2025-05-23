import { Metadata } from "next";

import ClinicSection from "app/ClinicSection";
import HeroSection from "app/HeroSection";
import QuoteSection from "app/QuoteSectionEN";
import Warning from "app/components/Warning";

const title = "Praxis Jona"
const description = "Holistic care for a healthy life – At our practice, you are more than just another patient."

export const metadata: Metadata = {
    title: {
        default: title,
        template: "%s"
    },
    description: description,
    twitter: {
        title: title,
        description: description,
        site: title,
        card: "summary_large_image",
        images: ['/images/og-image.png']
    },
    openGraph: {
        title: title,
        siteName: title,
        description: description,
        type: 'website',
        url: '/',
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
        canonical: '/en',
        languages: {
            de: "/",
            en: "/en"
        }
    }
}

export default function Features() {
    return (
        <>
            <HeroSection title={title} description="Holistic care for a healthy life - with us, you are more than just another patient" />

            <QuoteSection
                quote='"My aim is not only to alleviate symptoms, but also to specifically address the underlying causes of health problems. Together with my patients, I strive to develop individualized approaches that take their needs and goals into account. The focus is on sustainably improving health and quality of life."'
                buttonLink="/en/services"
                buttonText="Our Services"
            />

            <Warning message="Please note that we currently do not accept new public insured patients." />

            <ClinicSection
                title="Visit us in our Practice"
                description1="Welcome to our general & internal medicine practice at Rosenthaler Platz in Berlin Mitte. We treat on the basis of modern diagnostics as well as many years of experience in Charitè in order to find the best way to maintain and restore health for each individual patient."
                description2="Our practice focuses in particular on the treatment of thyroid disorders, high blood pressure, lipid metabolic disorders and nutritional medicine."
                description3="We look forward to welcoming you personally to our practice in Berlin Mitte and to working with you on your health. " />
        </>
        
    );
}
