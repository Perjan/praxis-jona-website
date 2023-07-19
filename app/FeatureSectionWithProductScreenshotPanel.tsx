import Image from 'next/image'

export default function FeatureSectionWithProductScreenshotPanel( params: {title: string, subtitle: string, description: string, image: string, features: any[]}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">{params.subtitle}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{params.title}</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {params.description}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden p-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={params.image}
            alt="MoneyCoach Screenshot"
            className="mb-[-6%] rounded-xl"
            width={2432}
            height={1442}
          />
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {params.features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd>{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
