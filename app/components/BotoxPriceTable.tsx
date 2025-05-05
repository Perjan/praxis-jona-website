"use client";

import React, { useState } from "react";

export type Treatment = {
    nameDE: string;
    nameEN: string;
    price: number;
    hasDiscount?: boolean;
}

interface BotoxPriceTableProps {
    isEnglish?: boolean;
}

const DISCOUNT_PERCENTAGE = 10;
const SHOW_DISCOUNT = false;

const treatments: Treatment[] = [
    { nameDE: "Beratung ohne Behandlung ²", nameEN: "Consultation Without Treatment ²", price: 49 },
    { nameDE: "Zornesfalte", nameEN: "Frown Lines", price: 199, hasDiscount: false },
    { nameDE: "Stirnfalten", nameEN: "Forehead Wrinkles", price: 199, hasDiscount: false },
    { nameDE: "Browlift", nameEN: "Brow Lift", price: 159, hasDiscount: false },
    { nameDE: "Krähenfüße", nameEN: "Crow's Feet", price: 199, hasDiscount: false },
    { nameDE: "Bunny Lines", nameEN: "Bunny Lines", price: 159, hasDiscount: false },
    { nameDE: "2-Zonen", nameEN: "2 Zones", price: 349, hasDiscount: true },
    { nameDE: "3-Zonen", nameEN: "3 Zones", price: 449, hasDiscount: true },
    { nameDE: "4-Zonen", nameEN: "4 Zones", price: 499, hasDiscount: true },
    { nameDE: "Erdbeerkinn", nameEN: "Strawberry Chin", price: 199, hasDiscount: false },
    { nameDE: "Platysma", nameEN: "Platysma", price: 349, hasDiscount: true },
    { nameDE: "Bruxismus (Zähneknirschen) oder Faceslimming", nameEN: "Bruxism (teeth grinding) or face slimming", price: 349, hasDiscount: true },
    { nameDE: "Schweißdrüsenbehandlung (Hyperhidrose)", nameEN: "Sweat Gland Treatment (hyperhidrosis)", price: 549, hasDiscount: true },
];

export default function BotoxPriceTable({ isEnglish = false }: BotoxPriceTableProps) {
    const [showInsuranceDialog, setShowInsuranceDialog] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const privatePatientBookingUrl = "https://www.doctolib.de/internist/berlin/gjolli-jonida/booking/motives?specialityId=1302&telehealth=false&placeId=practice-612560&insuranceSectorEnabled=true&insuranceSector=private&isNewPatient=true&isNewPatientBlocked=false&motiveCategoryIds%5B%5D=384956&pid=practice-612560&bookingFunnelSource=profile";
    const publicPatientBookingUrl = "https://www.doctolib.de/internist/berlin/gjolli-jonida/booking/motives?specialityId=1302&telehealth=false&placeId=practice-612560&insuranceSectorEnabled=true&insuranceSector=public&isNewPatient=true&isNewPatientBlocked=false&motiveCategoryIds%5B%5D=384956&pid=practice-612560&bookingFunnelSource=profile";

    const handleBookingClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowInsuranceDialog(true);
        setIsClosing(false);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowInsuranceDialog(false);
            setIsClosing(false);
        }, 200);
    };

    const handleInsuranceSelect = (isPrivate: boolean) => {
        const url = isPrivate ? privatePatientBookingUrl : publicPatientBookingUrl;
        handleClose();
        setTimeout(() => {
            window.open(url, '_blank', 'noopener noreferrer');
        }, 100);
    };

    const calculateDiscountedPrice = (price: number) => {
        return Math.round(price * (1 - DISCOUNT_PERCENTAGE / 100));
    };

    return (
        <>
            {/* Main container with full teal background */}
            <div 
                className="mx-auto sm:mb-16 relative max-w-7xl"
                style={{
                    borderRadius: "0.75rem",
                    boxShadow: "0 0 0 1px rgba(0,0,0,0.05)",
                    position: "relative",
                    zIndex: 1
                }}
            >
                {/* Special Offer Badge */}
                {SHOW_DISCOUNT && (
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <div className="bg-red-600 text-white w-40 h-40 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                            <div className="text-center">
                                <div className="text-2xl mb-1">🎄</div>
                                <div className="font-bold text-xl leading-tight">SPECIAL</div>
                                <div className="font-bold text-xl leading-tight">OFFER</div>
                                <div className="text-sm mt-1">20% OFF ¹⁾</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Teal container with rounded corners */}
                <div 
                    className="bg-tealColor pt-8 mt-8"
                    style={{
                        borderRadius: "0.75rem"
                    }}
                >
                    {/* Booking button */}
                    <a 
                        href="#"
                        onClick={handleBookingClick}
                        className="hidden lg:block absolute top-8 right-8 bg-primaryLighter hover:bg-tealColorDark text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                    >
                        {isEnglish ? "Book Botox® Appointment" : "Botox® Termin Buchen"}
                    </a>

                    {/* Content section */}
                    <div className="mx-auto max-w-7xl text-leading py-4 px-6 lg:px-8">
                        <h2 className="text-2xl font-serif font-medium leading-8 text-primaryLighter">
                            {isEnglish ? "Prices" : "Preise"}
                        </h2>
                        <div style={{ maxWidth: "auto", margin: "auto", padding: "0px" }} className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left border-b-2 border-[#0D322B]">
                                            <h3 className="text-xl mt-8 pb-4 font-serif font-medium leading-8 text-primaryLighter">
                                                {isEnglish ? "Treatment" : "Behandlung"}
                                            </h3>
                                        </th>
                                        <th className="text-right border-b-2 border-[#0D322B]">
                                            <h3 className="text-xl mt-8 pb-4 font-serif font-medium leading-8 text-primaryLighter">
                                                {isEnglish ? "Price" : "Preise"}
                                            </h3>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {treatments.map((treatment, index) => (
                                        <tr key={index}>
                                            <td className="pt-4 pb-4 text-base lg:text-lg text-primaryLighter pr-4" 
                                                style={{ borderBottom: index === treatments.length - 1 ? "none" : "1px solid #0D322B" }}>
                                                {isEnglish ? treatment.nameEN : treatment.nameDE}
                                            </td>
                                            <td className="pt-4 pb-4 text-base lg:text-lg text-primaryLighter" 
                                                style={{ borderBottom: index === treatments.length - 1 ? "none" : "1px solid #0D322B", textAlign: "right" }}>
                                                {treatment.hasDiscount ? (
                                                    <div className="flex flex-col items-end gap-1">
                                                        {SHOW_DISCOUNT && (
                                                            <div className="flex items-center justify-end gap-1 whitespace-nowrap">
                                                                <span className="text-sm bg-[#E8F5F3] text-green-600 px-2 py-0.5 rounded-full font-bold whitespace-nowrap">
                                                                    {isEnglish ? "Save " : "Spare "}{treatment.price - calculateDiscountedPrice(treatment.price)}€
                                                                </span>
                                                                <span className="line-through text-gray-500 whitespace-nowrap">
                                                                    {isEnglish ? `from ${treatment.price}€` : `ab ${treatment.price}€`}
                                                                </span>
                                                            </div>
                                                        )}
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
                            <p className="text-sm text-primaryLighter">²⁾ {isEnglish ? "If a treatment is planned after the consultation, this consultation will be free." : "Wenn nach der Beratung eine Behandlung geplant wird, ist diese Beratung kostenlos."}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile booking button - outside the main container to avoid overflow issues */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-50">
                <a 
                    href="#"
                    onClick={handleBookingClick}
                    className="block w-full bg-primaryLighter hover:bg-tealColorDark text-white text-center px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                >
                    {isEnglish ? "Book Botox® Appointment" : "Botox® Termin Buchen"}
                </a>
            </div>

            {/* Insurance Selection Dialog */}
            {showInsuranceDialog && (
                <div 
                    className={`fixed inset-0 bg-black flex items-center justify-center z-50 ${isClosing ? 'animate-fadeOut bg-opacity-50' : 'animate-fadeIn bg-opacity-50'}`}
                    onClick={handleClose}
                >
                    <div 
                        className={`bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4 ${isClosing ? 'animate-popOut' : 'animate-popIn'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-medium text-primaryLighter">
                                {isEnglish ? "Select Insurance Type" : "Versicherungsart auswählen"}
                            </h3>
                            <button 
                                onClick={handleClose}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm">
                            {isEnglish 
                                ? "Please note: Botox® treatments are private services that must be paid for by the patient directly in our clinic, regardless of insurance type. Payment is required at the time of treatment. Your selection here only affects the booking process on Doctolib." 
                                : "Bitte beachten Sie: Botox®-Behandlungen sind private Leistungen, die vom Patienten direkt in unserer Praxis zu zahlen sind, unabhängig von der Versicherungsart. Die Zahlung erfolgt zum Zeitpunkt der Behandlung. Ihre Auswahl hier beeinflusst nur den Buchungsprozess auf Doctolib."}
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={() => handleInsuranceSelect(true)}
                                className="w-full bg-primaryLighter hover:bg-tealColorDark text-white px-4 py-2 rounded transition-colors duration-200"
                            >
                                {isEnglish ? "Private Insurance" : "Privatversichert"}
                            </button>
                            <button
                                onClick={() => handleInsuranceSelect(false)}
                                className="w-full bg-primaryLighter hover:bg-tealColorDark text-white px-4 py-2 rounded transition-colors duration-200"
                            >
                                {isEnglish ? "Public Insurance" : "Gesetzlich versichert"}
                            </button>
                            <button
                                onClick={handleClose}
                                className="w-full border border-gray-300 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded transition-colors duration-200"
                            >
                                {isEnglish ? "Cancel" : "Abbrechen"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Media query for larger screens */}
            <style jsx>{`
                @media (min-width: 1024px) {
                    div[style*="borderRadius"] {
                        border-radius: 1rem !important;
                    }
                }
            `}</style>
        </>
    );
} 