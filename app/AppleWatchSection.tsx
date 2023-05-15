import Image from "next/image"

export default function AppleWatchSection(params: { title: string, description: string, features: any[] }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{params.title}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{params.description}</p>
        </div>
        <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {
            params.features.map((feature) => (
              <li key={feature.name}>
                <Image className=" w-full rounded-2xl object-cover" src={feature.image} alt="" width={200} height={200} />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{feature.title}</h3>
                <p className="text-base leading-7 text-gray-600">{feature.description}</p>
              </li>
            ))

          }
        </ul>
      </div>
    </div>
  )
}