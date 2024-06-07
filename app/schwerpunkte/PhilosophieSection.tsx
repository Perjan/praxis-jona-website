import Image from "next/image"

export default function Example() {
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
            <h1 className="mt-2 text-3xl font-serif tracking-tight text-primary sm:text-4xl">Philosophie</h1>
            <p className="mt-6 text-xl leading-8 text-primaryLighter">
            Wir sehen den Menschen als individuelles Gesamtsystem und setzen auf eine ganzheitliche Betrachtung seiner physischen, psychischen und sozialen Aspekte.
            Unsere Praxis zeichnet sich durch ein breites Leistungsangebot aus, das darauf abzielt, Patienten eine umfassende Versorgung und Betreuung zu bieten. Gleichzeitig legen wir großen Wert auf eine persönliche und einfühlsame Betreuung, um eine vertrauensvolle Arzt-Patienten-Beziehung zu fördern.
            </p>
            <p className="mt-6 text-xl leading-8 text-primaryLighter">
            Die Grundpfeiler unserer Philosophie umfassen eine proaktive Präventionsarbeit, bei der wir gemeinsam mit unseren Patienten individuelle Gesundheitsziele entwickeln. Dabei berücksichtigen wir nicht nur akute Beschwerden, sondern setzen auch auf langfristige Maßnahmen zur Förderung eines gesunden Lebensstils.
            </p>
            <p className="mt-6 text-xl leading-8 text-primaryLighter">
            Wir verstehen uns nicht nur als Dienstleister im Gesundheitswesen, sondern auch als Partner auf dem Weg zu langfristigem Wohlbefinden. Durch eine kontinuierliche Anpassung unseres Leistungsangebots an aktuelle medizinische Standards, eine offene und transparente Kommunikation sowie regelmäßige Fortbildungen möchten wir sicherstellen, dass unsere Patienten die bestmögliche Unterstützung auf ihrem individuellen Weg zu Gesundheit und Wohlbefinden erhalten.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}