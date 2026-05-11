"use client"

import { useEffect, useState, useRef } from 'react'
import PrimaryButton from './PrimaryButton'

export default function ServiceCards() {
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
            title: "HAUSÄRZTLICHE LEISTUNGEN",
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
            href: "/health-longevity",
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
                                Mehr erfahren
                            </PrimaryButton>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}
