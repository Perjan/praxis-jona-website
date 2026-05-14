"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from 'app/lib/utils';
import InstagramCard from '../components/InstagramCard';

const doctorCopy = {
    de: {
        intro: "Jonida arbeitete mehrere Jahre an der Charité Berlin in der nephrologischen Abteilung, wo sie auch Fachärztin für Innere Medizin wurde und ihre Promotion erfolgreich abschloss.",
        bio: "Zudem ist sie zertifizierte Lipidologin, Hypertensiologin und bald auch Ernährungsmedizinerin. Zu ihren Schwerpunkten zählen Schilddrüsenerkrankungen, Hypertonie, Fettstoffwechselstörungen und Ernährungsmedizin. Vor ihrer Tätigkeit an der Charité arbeitete Jonida in der Medizinischen Klinik III des Waldkrankenhauses St. Marien in Erlangen. Sie ist Mitglied der Deutschen Gesellschaft für Innere Medizin (DGIM) und der DGFF (Lipid-Liga) e. V. Das Studium absolvierte sie in Tirana, Albanien.",
        expandLabel: "Weiterlesen",
        collapseLabel: "Schließen",
        philosophyTitle: "Philosophie",
        philosophy: "\"In meiner täglichen beruflichen Praxis ist es von herausragender Bedeutung für mich, einen umfassenden und ganzheitlichen Ansatz bei der Betrachtung des Menschen einzunehmen. Ich lege großen Wert darauf, nicht nur isolierte Symptome oder Krankheitsbilder zu analysieren, sondern vielmehr das Individuum in seiner Gesamtheit zu verstehen. Dies umfasst physische, psychische und soziale Aspekte, die alle in Verbindung stehen und einen Einfluss auf die Gesundheit und das Wohlbefinden des Einzelnen haben können. Mein Ziel ist es, durch diesen Blick eine effektive und individuell angepasste Betreuung und Unterstützung zu gewährleisten, um die bestmöglichen Ergebnisse für die Gesundheit meiner Patienten zu erzielen.\"",
        imageAlt: "Dr. med. Jonida Gjolli in der Praxis Jona",
    },
    en: {
        intro: "Jonida worked for several years at Charité Berlin in the nephrology department where she also became a specialist for internal medicine and where she completed her doctorate. She also is a certified lipidologist, hypertensiologist and soon certified nutrionist.",
        bio: "Her specialties include thyroid diseases, hypertension, lipid metabolic disorders, and nutritional medicine. Before Charité Jonida worked at the Medical Clinic III of the Waldkrankenhaus St. Marien in Erlangen. She is a member of the German Society for Internal Medicine (DGIM) and the DGFF (Lipid League) e. V. After completing her studies in Tirana (Albania), she decided to train as an Internist in Germany.",
        expandLabel: "Expand",
        collapseLabel: "Collapse",
        philosophyTitle: "Philosophy",
        philosophy: "\"In my daily professional practice, it is extremely important for me to take a comprehensive and holistic approach when looking at people. I place great importance not only on analyzing isolated symptoms or clinical conditions, but also on understanding the individual as a whole. This includes physical, psychological and social aspects, which are all interconnected and can have an impact on the health and well-being of the individual. My aim is to use this view to provide effective and personalized care and support to achieve the best possible health outcomes for my patients.\"",
        imageAlt: "Dr. med. Jonida Gjolli at Praxis Jona",
    },
}

export default function DoctorSection({ locale = "de" }: { locale?: "de" | "en" }) {
    const [expanded, setExpanded] = useState(false);
    const copy = doctorCopy[locale]

    return (
        <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto my-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:flex lg:items-start lg:justify-center lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-2xl font-serif tracking-tight text-primary sm:text-3xl">Dr. med. Jonida Gjolli</h2>
                            <p className="mt-6 text-lg leading-8 text-primaryLighter">{copy.intro}</p>
                            <p className="mt-6 text-lg leading-8 text-primaryLighter">{copy.bio}</p>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="rounded-lg mt-4 bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 inline-flex justify-center hover:bg-primaryLighter hover:shadow-md"
                            >
                                {expanded ? copy.collapseLabel : copy.expandLabel}
                            </button>
                            <InstagramCard isEnglish={locale === "en"} />
                            <div
                                className={
                                    cn(expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
                                        "overflow-hidden transition-all duration-700 ease-in-out")
                                }
                            >
                                <h2 className="mt-12 text-xl font-serif tracking-tight text-primary sm:text-2xl">{copy.philosophyTitle}</h2>
                                <p className="mt-6 text-lg leading-8 text-primaryLighter">{copy.philosophy}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex lg:items-start lg:justify-end lg:order-first">
                        <Image
                            src="/images/team/jonaClinic.jpeg"
                            alt={copy.imageAlt}
                            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[48rem] lg:max-w-none lg:ring-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
