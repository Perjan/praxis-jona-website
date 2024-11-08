import { Metadata } from "next";
import SectionWithColor from "app/SectionWithColor";
import React from "react";

const title = 'Botox Prices'
const description = "Below are the prices for the Botox treatments. Book your appointment now and benefit from the medical and Aesthetic advantages!"
const url = '/en/botox-prices'

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
            de: "/botox-preise"
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