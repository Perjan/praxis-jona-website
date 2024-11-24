import React from "react";
import SectionWithColor from "app/SectionWithColor";

export type Treatment = {
    nameDE: string;
    nameEN: string;
    price: string;
}

interface BotoxPriceTableProps {
    isEnglish?: boolean;
}

const treatments: Treatment[] = [
    { nameDE: "Beratung ohne Behandlung", nameEN: "Consultation Without Treatment", price: "49€" },
    { nameDE: "Zornesfalte", nameEN: "Frown Lines", price: "from 199€" },
    { nameDE: "Stirnfalten", nameEN: "Forehead Wrinkles", price: "from 199€" },
    { nameDE: "Browlift", nameEN: "Brow Lift", price: "from 159€" },
    { nameDE: "Krähenfüße", nameEN: "Crow's Feet", price: "from 199€" },
    { nameDE: "Bunny Lines", nameEN: "Bunny Lines", price: "from 159€" },
    { nameDE: "2-Zonen", nameEN: "2 Zones", price: "from 349€" },
    { nameDE: "3-Zonen", nameEN: "3 Zones", price: "from 449€" },
    { nameDE: "4-Zonen", nameEN: "4 Zones", price: "from 499€" },
    { nameDE: "Erdbeerkinn", nameEN: "Strawberry Chin", price: "from 199€" },
    { nameDE: "Platysma", nameEN: "Platysma", price: "from 349€" },
    { nameDE: "Bruxismus (Zähneknirschen) oder Faceslimming", nameEN: "Bruxism (teeth grinding) or face slimming", price: "from 349€" },
    { nameDE: "Schweißdrüsenbehandlung (Hyperhidrose)", nameEN: "Sweat Gland Treatment (hyperhidrosis)", price: "from 549€" },
];

export default function BotoxPriceTable({ isEnglish = false }: BotoxPriceTableProps) {
    return (
        <div className="overflow-hidden px-4 lg:px-0 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16">
            <SectionWithColor backgroundClassName='bg-tealColor'>
                <h2 className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">
                    {isEnglish ? "Prices" : "Preise"}
                </h2>
                <div style={{ maxWidth: "auto", margin: "auto", padding: "0px" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th style={{ borderBottom: "2px solid #0D322B", textAlign: "left" }}>
                                    <h3 className="text-xl mt-8 pb-4 font-serif font-medium leading-8 text-primaryLighter">
                                        {isEnglish ? "Treatment" : "Behandlung"}
                                    </h3>
                                </th>
                                <th style={{ borderBottom: "2px solid #0D322B", textAlign: "right" }}>
                                    <h3 className="text-xl mt-8 pb-4 font-serif font-medium leading-8 text-primaryLighter">
                                        {isEnglish ? "Price" : "Preise"}
                                    </h3>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {treatments.map((treatment, index) => (
                                <tr key={index}>
                                    <td className="pt-4 pb-4 text-lg text-primaryLighter" 
                                        style={{ borderBottom: index === treatments.length - 1 ? "none" : "1px solid #0D322B" }}>
                                        {isEnglish ? treatment.nameEN : treatment.nameDE}
                                    </td>
                                    <td className="pt-4 pb-4 text-lg text-primaryLighter" 
                                        style={{ borderBottom: index === treatments.length - 1 ? "none" : "1px solid #0D322B", textAlign: "right" }}>
                                        {isEnglish ? treatment.price.replace("ab", "from") : treatment.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </SectionWithColor>
        </div>
    );
} 