"use client"

import { useEffect, useState, useRef } from 'react'
import PrimaryButton from './PrimaryButton'

export default function ServiceCardsEn() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const cards = [
        {
            title: "GENERAL MEDICINE",
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
            href: "/en/health-longevity",
        }
    ]

    return (
        <div className="w-full bg-white">
            <div 
                ref={sectionRef} 
                className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-16 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
                {cards.map((card, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col justify-between rounded-2xl p-8 sm:p-10 shadow-md ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300 text-center bg-[rgba(249,237,223,0.3)]"
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
                                Learn more
                            </PrimaryButton>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}
