import Image from "next/image"

interface PhilosophieSectionProps {
  locale?: 'de' | 'en';
}

export default function PhilosophieSection({ locale = 'de' }: PhilosophieSectionProps) {
  const isGerman = locale === 'de';
  
  const title = isGerman ? "Philosophie" : "Philosophy";
  
  const paragraphs = isGerman ? [
    "Wir sehen den Menschen als individuelles Gesamtsystem und setzen auf eine ganzheitliche Betrachtung seiner physischen, psychischen und sozialen Aspekte. Unsere Praxis zeichnet sich durch ein breites Leistungsangebot aus, das darauf abzielt, Patienten eine umfassende Versorgung und Betreuung zu bieten. Gleichzeitig legen wir großen Wert auf eine persönliche und einfühlsame Betreuung, um eine vertrauensvolle Arzt-Patienten-Beziehung zu fördern.",
    "Die Grundpfeiler unserer Philosophie umfassen eine proaktive Präventionsarbeit, bei der wir gemeinsam mit unseren Patienten individuelle Gesundheitsziele entwickeln. Dabei berücksichtigen wir nicht nur akute Beschwerden, sondern setzen auch auf langfristige Maßnahmen zur Förderung eines gesunden Lebensstils.",
    "Wir verstehen uns nicht nur als Dienstleister im Gesundheitswesen, sondern auch als Partner auf dem Weg zu langfristigem Wohlbefinden. Durch eine kontinuierliche Anpassung unseres Leistungsangebots an aktuelle medizinische Standards, eine offene und transparente Kommunikation sowie regelmäßige Fortbildungen möchten wir sicherstellen, dass unsere Patienten die bestmögliche Unterstützung auf ihrem individuellen Weg zu Gesundheit und Wohlbefinden erhalten."
  ] : [
    "We see people as an individual overall system and focus on a holistic view of their physical, psychological and social aspects. Our practice is characterized by a wide range of services aimed at providing patients with comprehensive care and support. At the same time, we assign a high degree of priority to personal and empathetic treatment in order to promote a trusting doctor-patient relationship.",
    "The cornerstones of our philosophy include proactive preventive work, in which we develop individual health goals together with our patients. In doing so, we not only take acute complaints into account, but also focus on long-term measures to promote a healthy lifestyle.",
    "We see ourselves not only as a service provider in the healthcare sector, but also as a partner on the path to long-term well-being. By continuously adapting our range of services to current medical standards, open and transparent communication and regular training, we want to ensure that our patients receive the best possible support on their individual path to health and well-being."
  ];

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="/images/clinic/clinic-philosophie.jpeg"
              alt=""
              width={1080}
              height={1920}
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <h1 className="mt-2 text-3xl font-serif tracking-tight text-primary sm:text-4xl">{title}</h1>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-6 text-xl leading-8 text-primaryLighter">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}