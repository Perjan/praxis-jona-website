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
                    "Als Ihre Hausärztin begleite ich Sie nicht nur bei akuten Erkrankungen, sondern unterstütze Sie auch dabei, Ihre Gesundheit langfristig zu erhalten und zu stärken.",
                    "Mein Ansatz orientiert sich am Konzept der Longevity-Medizin: moderne Prävention, individuelle Gesundheitsstrategien und eine ganzheitliche Betreuung, die auf wissenschaftlichen Erkenntnissen basiert."
                ],
                href: "/hausaerztliche-leistungen",
            },
            {
                title: "ÄSTHETIK",
                paragraphs: [
                    "Ästhetische Medizin ist mehr als Kosmetik: Sie ist ein Baustein für Ihr Wohlbefinden. Mit medizinischem Fachwissen und einem Blick für das Natürliche begleite ich Sie dabei."
                ],
                href: "/aesthetik",
            },
            {
                title: "HEALTH & LONGEVITY",
                paragraphs: [
                    "Gesund alt werden – das ist kein Zufall, sondern eine Entscheidung.",
                    "Ich begleite Sie dabei, Ihre Gesundheit aktiv zu gestalten, bevor Krankheit entsteht. Mit moderner Medizin, ganzheitlichen Konzepten und evidenzbasierten Longevity-Strategien stärken wir gemeinsam Ihre Vitalität."
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
                    "As your general practitioner, I not only support you in acute illnesses, but also help you to maintain and strengthen your health in the long term.",
                    "My approach is based on the concept of longevity medicine: modern prevention, personalized health strategies, and holistic care grounded in scientific findings."
                ],
                href: "/en/general-medicine",
            },
            {
                title: "AESTHETICS",
                paragraphs: [
                    "Aesthetic medicine is more than cosmetics: it is a building block for your well-being. With medical expertise and an eye for the natural, I will guide you along the way."
                ],
                href: "/en/aesthetics",
            },
            {
                title: "HEALTH & LONGEVITY",
                paragraphs: [
                    "Growing old healthily is not a coincidence, but a decision.",
                    "I support you in actively shaping your health before illness occurs. With modern medicine, holistic concepts, and evidence-based longevity strategies, we will jointly strengthen your vitality."
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
