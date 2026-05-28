"use client"

import { useEffect, useState } from 'react'
import PrimaryButton from './PrimaryButton'

type ServiceCardsLocale = "de" | "en"

const serviceCardsContent = {
    de: {
        buttonText: "Mehr erfahren",
        cards: [
            {
                title: "INNERE MEDIZIN",
                paragraphs: [
                    "Als internistische Hausarztpraxis begleiten wir Sie bei akuten Beschwerden, Vorsorge und chronischen Gesundheitsthemen.",
                    "Mit ärztlicher Diagnostik, klarer Einordnung und persönlicher Betreuung schaffen wir Orientierung für die nächsten Schritte."
                ],
                href: "/hausaerztliche-leistungen",
            },
            {
                title: "ÄSTHETIK",
                paragraphs: [
                    "Ästhetische Medizin soll nicht verändern, sondern Ihre natürliche Ausstrahlung unterstützen.",
                    "Mit medizinischer Erfahrung, präziser Planung und einem Blick für harmonische Ergebnisse behandeln wir dezent und individuell."
                ],
                href: "/aesthetik",
            },
            {
                title: "HEALTH & LONGEVITY",
                paragraphs: [
                    "Prävention beginnt, bevor Beschwerden entstehen.",
                    "Wir verbinden moderne Diagnostik, Laborwerte und persönliche Ziele zu einem klaren Plan für Energie, Stoffwechsel und langfristige Gesundheit."
                ],
                href: "/praevention-longevity",
            }
        ],
    },
    en: {
        buttonText: "Learn more",
        cards: [
            {
                title: "INTERNAL MEDICINE",
                paragraphs: [
                    "As an internal medicine practice, we support you with acute concerns, preventive care, and chronic health topics.",
                    "With medical diagnostics, clear assessment, and personal care, we create orientation for the next steps."
                ],
                href: "/en/general-medicine",
            },
            {
                title: "AESTHETICS",
                paragraphs: [
                    "Aesthetic medicine should not change who you are, but support your natural expression.",
                    "With medical experience, precise planning, and an eye for harmonious results, we treat discreetly and individually."
                ],
                href: "/en/aesthetics",
            },
            {
                title: "HEALTH & LONGEVITY",
                paragraphs: [
                    "Prevention starts before symptoms appear.",
                    "We connect modern diagnostics, lab values, and personal goals into a clear plan for energy, metabolism, and long-term health."
                ],
                href: "/en/prevention-longevity",
            }
        ],
    },
}

export default function ServiceCards({ locale = "de" }: { locale?: ServiceCardsLocale }) {
    const [isVisible, setIsVisible] = useState(false)
    const content = serviceCardsContent[locale]

    useEffect(() => {
        const delay = window.setTimeout(() => {
            setIsVisible(true)
        }, 650)

        return () => window.clearTimeout(delay)
    }, [])

    return (
        <div className="w-full bg-white">
            <div
                className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full md:-mt-[160px]">
                    {content.cards.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between rounded-2xl p-8 sm:p-10 shadow-md ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 text-center bg-[rgba(249,237,223,0.95)]"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                                transition: 'opacity 700ms ease-out, transform 700ms ease-out, box-shadow 300ms ease',
                                transitionDelay: isVisible ? `${index * 140}ms` : '0ms',
                            }}
                        >
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold font-serif text-primary mb-6">{card.title}</h2>
                                <div className="space-y-4 text-center text-sm md:text-base text-primaryLighter leading-relaxed">
                                    {card.paragraphs.map((p, pIndex) => (
                                        <p key={pIndex}>{p}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-10 flex justify-center">
                                <PrimaryButton href={card.href}>
                                    {content.buttonText}
                                </PrimaryButton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
