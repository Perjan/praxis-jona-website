import { Metadata } from "next";

import HeroSection from './HeroSection'
import QuoteSection from "./QuoteSection";
import ClinicSection from './ClinicSection'

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
                quote='"Mein Ziel ist es, nicht nur Symptome zu lindern, sondern auch die zugrundeliegenden Ursachen von Gesundheitsproblemen gezielt anzugehen. Gemeinsam mit meinen Patienten möchte ich individuelle Wege entwickeln, die ihre Bedürfnisse und Ziele berücksichtigen. Dabei steht im Mittelpunkt, die Gesundheit und Lebensqualität nachhaltig zu verbessern."'
            />

            <ClinicSection
                title="Besuchen Sie uns in unserer Praxis"
                description1="Herzlich willkommen in unserer allgemeinmedizinisch-internistischen Praxis am Rosenthaler Platz. Wir behandeln auf der Basis moderner Diagnostik sowie dem Wissen und der langjährigen Erfahrung in universitärer Schulmedizin, um für jeden einzelnen Patienten den optimalen Weg zur Erhaltung und Wiederherstellung der Gesundheit zu finden."
                description2="Besondere Schwerpunkte unserer Praxis sind die Behandlung von Schilddrüsenerkrankungen, Bluthochdruck, Fettstoffwechselstörungen und Ernährungsmedizin."
                description3="Wir freuen uns, Sie persönlich in unserer Praxis in Berlin Mitte begrüßen zu dürfen und gemeinsam mit Ihnen an Ihrer Gesundheit zu arbeiten. " />
        </>
    );
}
