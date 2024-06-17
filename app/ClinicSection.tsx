import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function ClinicSection(params: { title: string, description1: string, description2: string, description3: string }) {
  return (
    <div className="overflow-hidden bg-tealColor py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="my-auto lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-serif tracking-tight text-primary sm:text-4xl">{params.title}</h2>
              <p className="mt-6 text-lg leading-8 text-primaryLighter">
                {params.description1}
              </p>
              <p className="mt-6 text-lg leading-8 text-primaryLighter">
                {params.description2}
              </p>
              <p className="mt-6 text-lg leading-8 text-primaryLighter">
                {params.description3}
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center lg:justify-end lg:order-first">
            <div className='flex flex-col items-center lg:items-start'>
              <Image
                src="/images/clinic/clinic-1.jpeg"
                alt="Product screenshot"
                className="relative sm:w-[48rem] lg:max-w-none mb-8 lg:mb-16 rounded-xl shadow-xl"
                width={1432}
                height={1442}
              />
              <Image
                src="/images/clinic/clinic-2.jpeg"
                alt="Your second image description"
                className="relative sm:w-[48rem] lg:max-w-none mb-8 lg:mb-16 rounded-xl shadow-xl"
                width={1432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
