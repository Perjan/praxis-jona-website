"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from 'app/lib/utils';

export default function Page() {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto my-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:flex lg:items-start lg:justify-center lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-2xl font-serif tracking-tight text-primary sm:text-3xl">Jonida Gjolli</h2>
                            <p className="mt-6 text-lg leading-8 text-primaryLighter">
                                Jonida arbeitete mehrere Jahre an der Charité Berlin in der nephrologischen Abteilung, wo sie auch Fachärztin für Innere Medizin wurde und ihre Promotion noch durchführt. 
                            </p>
                            <p className="mt-6 text-lg leading-8 text-primaryLighter">
                                Zudem ist sie zertifizierte Lipidologin, Hypertensiologin und bald auch Ernährungsmedizinerin. Zu ihren Schwerpunkten zählen Schilddrüsenerkrankungen, Hypertonie, Fettstoffwechselstörungen und Ernährungsmedizin. Vor ihrer Tätigkeit an der Charité arbeitete Jonida in der Medizinischen Klinik III des Waldkrankenhauses St. Marien in Erlangen. Sie ist Mitglied der Deutschen Gesellschaft für Innere Medizin (DGIM) und der DGFF (Lipid-Liga) e. V. Das Studium absolvierte sie in Tirana, Albanien.
                            </p>
                            <button onClick={() => setExpanded(!expanded)} className="bg-primaryDarker px-4 py-2 rounded-xl hover:bg-primaryLighter text-white font-semibold mt-4 transition duration-300 ease-in-out">
                                {expanded ? 'Schließen' : 'Weiterlesen'}
                            </button>
                            <div
                                className={
                                    cn(expanded ? "max-h-auto" : "max-h-0",
                                        "overflow-hidden transition duration-500 ease-in-out")
                                }
                            >
                                <h2 className="mt-12 text-xl font-serif tracking-tight text-primary sm:text-2xl">Philosophie</h2>
                                <p className="mt-6 text-lg leading-8 text-primaryLighter">
                                    "In meiner täglichen beruflichen Praxis ist es von herausragender Bedeutung für mich, einen umfassenden und ganzheitlichen Ansatz bei der Betrachtung des Menschen einzunehmen. Ich lege großen Wert darauf, nicht nur isolierte Symptome oder Krankheitsbilder zu analysieren, sondern vielmehr das Individuum in seiner Gesamtheit zu verstehen. Dies umfasst physische, psychische und soziale Aspekte, die alle in Verbindung stehen und einen Einfluss auf die Gesundheit und das Wohlbefinden des Einzelnen haben können. Mein Ziel ist es, durch diesen Blick eine effektive und individuell angepasste Betreuung und Unterstützung zu gewährleisten, um die bestmöglichen Ergebnisse für die Gesundheit meiner Patienten zu erzielen."
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="lg:flex lg:items-start lg:justify-end lg:order-first">
                        <Image
                            src="/images/team/jonaClinic.jpeg"
                            alt="Product screenshot"
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