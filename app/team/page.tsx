"use client"
import React, { useState } from 'react';

const people = [
    {
        name: 'Frau Heike Schmeiche',
        role: 'Arzthelferin,  seit 2011 in der Praxis tätig',
        imageUrl:
            '/images/team/heike.jpeg',
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Frau Kerstin Wawrzyniak',
        role: 'Arzthelferin, seit 2002  in der Praxis tätig',
        imageUrl:
        '/images/team/kerstin.jpg',
        xUrl: '#',
        linkedinUrl: '#',
    },
    // More people...
]

export default function Example() {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-4xl">Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    </p>
                </div> */}
                <div className="mx-auto my-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:flex lg:items-start lg:justify-center lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-2xl font-serif tracking-tight text-gray-900 sm:text-3xl">Jonida Gjolli</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Jonida ist Fachärztin für Innere Medizin. Ihr Studium absolvierte sie in Tirana, Albanien, und nach ihrem Abschluss entschied sie sich für eine Weiterbildung zur Internistin in Deutschland. Den ersten Teil ihrer Weiterbildung absolvierte sie in der Medizinischen Klinik III des Waldkrankenhauses St. Marien in Erlangen. Anschließend arbeitete sie mehrere Jahre in der Medizinischen Klinik mit Schwerpunkt Nephrologie und internistische Intensivmedizin an der Charité Berlin, wo sie auch ihre Promotion durchführt.
                            </p>
                            <button onClick={() => setExpanded(!expanded)} className="text-blue-500 mt-4 transition duration-300 ease-in-out">
                                    {expanded ? 'Schließen' : 'Weiterlesen'}
                                </button>
                                <span style={{ display: expanded ? 'block' : 'none' }}>
                                <p className="mt-6 text-lg leading-8 text-gray-600">Zu ihren Schwerpunkten zählen Schilddrüsenerkrankungen, Hypertonie und Fettstoffwechselstörungen. Sie ist Mitglied der Deutschen Gesellschaft für Innere Medizin (DGIM) und der DGFF (Lipid-Liga) e. V. Darüber hinaus ist sie zertifizierte Lipidologin und Hypertensiologin.</p>
                            <h2 className="mt-12 text-xl font-serif tracking-tight text-gray-900 sm:text-2xl">Philosophie</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                "In meiner täglichen beruflichen Praxis ist es von herausragender Bedeutung für mich, einen umfassenden und ganzheitlichen Ansatz bei der Betrachtung des Menschen einzunehmen. Ich lege großen Wert darauf, nicht nur isolierte Symptome oder Krankheitsbilder zu analysieren, sondern vielmehr das Individuum in seiner Gesamtheit zu verstehen. Dies umfasst physische, psychische und soziale Aspekte, die alle in Verbindung stehen und einen Einfluss auf die Gesundheit und das Wohlbefinden des Einzelnen haben können. Mein Ziel ist es, durch diesen Blick eine effektive und individuell angepasste Betreuung und Unterstützung zu gewährleisten, um die bestmöglichen Ergebnisse für die Gesundheit meiner Patienten zu erzielen."
                            </p>
                                    </span>
                            
                        </div>
                    </div>
                    <div className="lg:flex lg:items-start lg:justify-end lg:order-first">
                        <img
                            src="/images/team/jona.jpg"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                            <h3 className="mt-6 text-xl font-serif leading-8 tracking-tight text-gray-900">{person.name}</h3>
                            <p className="text-base leading-7 text-gray-600">{person.role}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-4xl">Praxis</h2>
                <p className="mt-6 text-xl font-medium leading-8 text-gray-600">
                Wir streben danach, dass unsere Patienten ein tiefes Gefühl des Wohlbefindens erleben. Hier, inmitten der sanften Umarmung der Ruhe, fördern wir eine Umgebung, in der Heilung gedeiht und Vitalität wiederhergestellt wird.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src="/images/clinic/praxi1.jpeg"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      src="/images/clinic/praxi3.jpeg"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      src="/images/clinic/praxi2.jpeg"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src="/images/clinic/praxi4.jpeg"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
    )
}
