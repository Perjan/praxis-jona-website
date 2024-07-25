import { Metadata } from "next";

import ClinicSection from "app/ClinicSection";
import HeroSection from "app/HeroSectionEN";
import QuoteSection from "app/QuoteSectionEN";

export const metadata: Metadata = {
    alternates: {
        canonical: '/',
        languages: {
          de: "/",
          en: "/en"
        }
      }
}

export default function Features() {
    return (
        <>
            <HeroSection />

            <QuoteSection
                quote='"My aim is not only to alleviate symptoms, but also to specifically address the underlying causes of health problems. Together with my patients, I strive to develop individualized approaches that take their needs and goals into account. The focus is on sustainably improving health and quality of life."'
            />

            <ClinicSection
                title="Visit us in our Practice"
                description1="Welcome to our general & internal medicine practice at Rosenthaler Platz in Berlin Mitte. We treat on the basis of modern diagnostics as well as many years of experience in Charitè in order to find the best way to maintain and restore health for each individual patient."
                description2="Our practice focuses in particular on the treatment of thyroid disorders, high blood pressure, lipid metabolic disorders and nutritional medicine."
                description3="We look forward to welcoming you personally to our practice in Berlin Mitte and to working with you on your health. " />
        </>
    );
}
