import Image from 'next/image'
import SectionWithColor from 'app/SectionWithColor'

const consultationPromiseCopy = {
    de: "Nach Terminabsprache werde ich, individuell und zielorientiert dich beraten, um dir die bestmöglichen Ergebnisse zu liefern.",
    en: "After scheduling an appointment, I will provide you with individual and goal-oriented consultation to deliver the best possible results.",
}

export default function ConsultationPromise({ locale = "de" }: { locale?: "de" | "en" }) {
    return (
        <div className="overflow-hidden px-4 lg:px-8 sm:px-6 rounded-xl lg:rounded-2xl bg-white max-w-7xl mx-auto sm:mb-16">
            <SectionWithColor backgroundClassName='bg-lightBeige'>
                <div className="flex items-center gap-6">
                    <div className="relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                        <Image
                            src="/images/team/jonida-image.jpeg"
                            alt="Dr. med. Jonida Gjolli"
                            fill
                            className="object-cover rounded-full border-2 border-white shadow-md"
                        />
                    </div>
                    <p className="mt-2 text-lg leading-8 text-primaryLighter">
                        {consultationPromiseCopy[locale]}
                    </p>
                </div>
            </SectionWithColor>
        </div>
    )
} 
