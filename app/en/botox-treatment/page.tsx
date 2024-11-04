import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Botox'
const description = "Botulinum toxin (Botox) is a neurotoxin produced by the bacterium Clostridium botulinum. When injected into a muscle, it leads to temporary paralysis of that muscle, preventing muscle contractions. This can offer aesthetic and medical benefits by smoothing the skin or alleviating specific medical symptoms. As the effect is temporary, regular treatments are necessary to maintain the desired results."
const url = '/en/botox-treatment'

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
            en: url,
            de: "/botox-behandlung"
        }
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: ['/images/og-image.png']
    }
}

const treatments = [
    { name: "Consultation Without Treatment", price: "49€" },
    { name: "Bruxism (teeth grinding) or face slimming", price: "from 349€" },
    { name: "Sweat Gland Treatment (hyperhidrosis)", price: "from 549€" },
    { name: "Frown Lines", price: "from 199€" },
    { name: "Forehead Wrinkles", price: "from 199€" },
    { name: "2 Zones", price: "from 349€" },
    { name: "3 Zones", price: "from 449€" },
    { name: "4 Zones", price: "from 499€" },
    { name: "Brow Lift", price: "from 159€" },
    { name: "Crow's Feet", price: "from 199€" },
    { name: "Bunny Lines", price: "from 159€" },
    { name: "Strawberry Chin", price: "from 199€" },
    { name: "Platysma", price: "from 349€" },
];

export default function Page() {

    return (
        <>
            <div className="overflow-hidden bg-white relative isolate">
                <SectionWithColor backgroundClassName='bg-white'>
                    <div className="mx-auto max-w-4xl lg:mx-0">
                        <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                        <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
                    </div>
                </SectionWithColor>
                <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16">
                    <SectionWithColor backgroundClassName='bg-lightBeige'>
                        <h2 className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Medical Applications</h2>
                        <ol className="list-decimal pl-5">
                            <li>
                                <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Hyperhidrosis (excessive sweating)</h3>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Botulinum toxin is injected into the skin of areas such as armpits, hands, and feet to significantly reduce sweat production. This provides an effective treatment for patients suffering from severe hyperhidrosis that does not respond to conventional antiperspirants.</p>
                            </li>

                            <li>
                                <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Migraine Treatment</h3>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">For patients with chronic migraines, botulinum toxin can help reduce the number and severity of headache attacks. It is injected into specific muscles around the head and neck, reducing muscle tension that often contributes to migraine attacks.</p>
                            </li>

                            <li>
                                <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Bruxism (teeth grinding)</h3>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">For patients who involuntarily grind their teeth, botulinum toxin can be injected into the masticatory muscles to relax them, thus reducing teeth grinding and associated discomfort.</p>
                            </li>
                        </ol>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">Aesthetic Applications</h2>
                        <ol className="list-decimal pl-5">
                            <li>
                                <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Wrinkle Treatment</h3>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">In aesthetic medicine, Botox is most commonly used to smooth expression lines such as frown lines, forehead wrinkles, and crow's feet. By reducing muscle activity in these areas, the skin appears smoother and more youthful.</p>
                            </li>

                            <li>
                                <h3 className="text-xl mt-2 font-serif font-medium leading-8 text-primaryLighter">Facial Tightening</h3>
                                <p className="mt-2 text-lg leading-8 text-primaryLighter">Botulinum toxin can also be injected into other facial areas to selectively relax certain muscles and achieve a younger appearance.</p>
                            </li>
                        </ol>

                        <h2 className="text-2xl mt-8 font-serif font-medium leading-8 text-primaryLighter">After Treatment</h2>

                        <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter">
                            <li className="mt-2 leading-8 text-primaryLighter">After the injection of botulinum toxin, patients should avoid physical activities such as sports, swimming, and sauna visits for about 3-4 days.</li>

                            <li className="mt-2 leading-8 text-primaryLighter">The injection sites should not be massaged or subjected to pressure to prevent unwanted distribution of the toxin.</li>
                        </ul>


                    </SectionWithColor>
                    </div>
                    
                    <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16">

                    <SectionWithColor backgroundClassName='bg-tealColor'>
                    <h2 className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">Price</h2>
                    <div style={{ maxWidth: "auto", margin: "auto", padding: "0px" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr>
                                        <th style={{ borderBottom: "2px solid #0D322B", textAlign: "left" }}>
                                            <h3 className="text-xl mt-8 pb-4 font-serif font-medium leading-8 text-primaryLighter">Treatment</h3>
                                        </th>
                                        <th style={{ borderBottom: "2px solid #0D322B", textAlign: "right" }}>
                                            <h3 className="text-xl mt-8 pb-4 font-serif font-medium leading-8 text-primaryLighter">Price</h3>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {treatments.map((treatment, index) => (
                                        <tr key={index}>
                                        <td className="pt-4 pb-4 text-lg text-primaryLighter" style={{ borderBottom: index === treatments.length - 1 ? "none" : "1px solid #0D322B" }}>{treatment.name}</td>
                                        <td className="pt-4 pb-4 text-lg text-primaryLighter" style={{ borderBottom: index === treatments.length - 1 ? "none" : "1px solid #0D322B", textAlign: "right" }}>{treatment.price}</td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </SectionWithColor>

                </div>
            </div>
        </>
    )
}