import Image from 'next/image'

export default function AppEntryList(params: { appName: string, appDescription: string, appUrl: string, appInfo: string, appIcon: string }) {
    return (
<div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="my-auto grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{params.appName}</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {params.appDescription}
              </p>
              <div className="mx-auto mt-4 flex items-center gap-x-6">
                <a
                  href={params.appUrl}
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100"
                >
                  Download Now
                </a>
                <a href={params.appInfo} className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full px-6 md:px-0 lg:pr-4 lg:pt-4">
              <Image
              src={params.appIcon}
              width={300}
              height={250}
              alt=""
              className="aspect-[16/9] w-full rounded-2xl object-cover lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
            />
          </div>
        </div>
      </div>
    </div>
      )
    }