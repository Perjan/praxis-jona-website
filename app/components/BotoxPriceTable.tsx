import React from "react";
import SectionWithColor from "app/SectionWithColor";
import PrimaryButton from "app/components/PrimaryButton";

export type Treatment = {
    nameDE: string;
    nameEN: string;
    price: number;
    hasDiscount?: boolean;
}

interface BotoxPriceTableProps {
    isEnglish?: boolean;
    showBadge?: boolean;
}

const DISCOUNT_PERCENTAGE = 20;

const treatments: Treatment[] = [
    { nameDE: "Beratung ohne Behandlung ²", nameEN: "Consultation Without Treatment ²", price: 49 },
    { nameDE: "Zornesfalte", nameEN: "Frown Lines", price: 199, hasDiscount: false },
    { nameDE: "Stirnfalten", nameEN: "Forehead Wrinkles", price: 199, hasDiscount: false },
    { nameDE: "Browlift", nameEN: "Brow Lift", price: 159, hasDiscount: false },
    { nameDE: "Krähenfüße", nameEN: "Crow's Feet", price: 199, hasDiscount: false },
    { nameDE: "Bunny Lines", nameEN: "Bunny Lines", price: 159, hasDiscount: false },
    { nameDE: "2-Zonen", nameEN: "2 Zones", price: 349, hasDiscount: false },
    { nameDE: "3-Zonen", nameEN: "3 Zones", price: 449, hasDiscount: false },
    { nameDE: "4-Zonen", nameEN: "4 Zones", price: 499, hasDiscount: false },
    { nameDE: "Erdbeerkinn", nameEN: "Strawberry Chin", price: 199, hasDiscount: false },
    { nameDE: "Platysma", nameEN: "Platysma", price: 349, hasDiscount: false },
    { nameDE: "Bruxismus (Zähneknirschen) oder Faceslimming", nameEN: "Bruxism (teeth grinding) or face slimming", price: 349, hasDiscount: false },
    { nameDE: "Schweißdrüsenbehandlung (Hyperhidrose)", nameEN: "Sweat Gland Treatment (hyperhidrosis)", price: 549, hasDiscount: false },
];

export default function BotoxPriceTable({ isEnglish = false, showBadge = false }: BotoxPriceTableProps) {
    const bookingUrl = { 
        href: "https://www.doctolib.de/internist/berlin/gjolli-jonida/booking/motives?specialityId=1302&telehealth=false&placeId=practice-612560&insuranceSectorEnabled=true&insuranceSector=private&isNewPatient=true&isNewPatientBlocked=false&motiveCategoryIds%5B%5D=384956&pid=practice-612560&bookingFunnelSource=profile",
        target: "_blank",
        rel: "noopener noreferrer"
    };

    const calculateDiscountedPrice = (price: number) => {
        return Math.round(price * (1 - DISCOUNT_PERCENTAGE / 100));
    };

    return (
        <>
            <div className="pt-16 rounded-xl lg:rounded-2xl bg-white relative overflow-hidden mb-16 sm:mb-0">
                {/* Special Offer Badge */}
                {showBadge && (
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <div className="bg-red-600 text-white rounded-xl px-8 py-4 min-w-[180px] flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                            <div className="text-center">
                                <div className="text-2xl mb-1">🎄</div>
                                <div className="font-bold text-xl leading-tight">SPECIAL OFFER</div>
                                <div className="text-sm mt-1">20% OFF ¹⁾</div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="hidden lg:block absolute mt-10 right-8">
                    <PrimaryButton href={bookingUrl.href} target={bookingUrl.target} rel={bookingUrl.rel}>
                        {isEnglish ? "Book Botox® Appointment" : "Botox® Termin Buchen"}
                    </PrimaryButton>
                </div>

                <SectionWithColor backgroundClassName='bg-tealColor rounded-xl lg:rounded-2xl'>
                    <h2 className="text-2xl mt-4 font-serif font-medium leading-8 text-primaryLighter">
                        {isEnglish ? "Prices" : "Preise"}
                    </h2>
                    <div style={{ maxWidth: "auto", margin: "auto", padding: "0px" }}>
                        <div className="overflow-x-auto">
                            <table className="w-full" style={{ borderCollapse: "collapse" }}>
                                <thead>
                                    <tr>
                                        <th className="w-3/5" style={{ borderBottom: "2px solid #0D322B", textAlign: "left" }}>
                                            <h3 className="text-xl mt-8 pb-4 font-serif font-medium leading-8 text-primaryLighter">
                                                {isEnglish ? "Treatment" : "Behandlung"}
                                            </h3>
                                        </th>
                                        <th className="w-2/5" style={{ borderBottom: "2px solid #0D322B", textAlign: "right" }}>
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
                                                {treatment.hasDiscount ? (
                                                    <div className="flex flex-col items-end gap-1">
                                                        <div className="flex flex-wrap items-center justify-end gap-1">
                                                            <span className="text-xs sm:text-sm bg-[#E8F5F3] text-green-600 px-2 py-0.5 rounded-full font-bold whitespace-nowrap">
                                                                {isEnglish ? "Save " : "Spare "}{treatment.price - calculateDiscountedPrice(treatment.price)}€
                                                            </span>
                                                            <span className="text-xs sm:text-sm line-through text-gray-500 whitespace-nowrap">
                                                                {isEnglish ? `from ${treatment.price}€` : `ab ${treatment.price}€`}
                                                            </span>
                                                        </div>
                                                        <span className="font-medium whitespace-nowrap">
                                                            {isEnglish ? `from ${calculateDiscountedPrice(treatment.price)}€` : `ab ${calculateDiscountedPrice(treatment.price)}€`}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="whitespace-nowrap">
                                                        {isEnglish ? `from ${treatment.price}€` : `ab ${treatment.price}€`}
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {showBadge && (
                            <p className="text-sm text-primaryLighter mt-4">¹⁾ {isEnglish ? "Special offer valid until January 30th, 2025" : "Sonderangebot bis zum 30. Januar 2025"}</p>
                        )}
                        <p className="text-sm text-primaryLighter">²⁾ {isEnglish ? "If a treatment is planned after the consultation, this consultation will be free." : "Wenn nach der Beratung eine Behandlung geplant wird, ist diese Beratung kostenlos."}</p>
                    </div>
                </SectionWithColor>
            </div>

            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
                <PrimaryButton href={bookingUrl.href} target={bookingUrl.target} rel={bookingUrl.rel} fullWidth={true}>
                    {isEnglish ? "Book Botox® Appointment" : "Botox® Termin Buchen"}
                </PrimaryButton>
            </div>
        </>
    );
} 