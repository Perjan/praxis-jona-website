import Image from "next/image"
import Link from "next/link"

const title = "Apple ❤️ MoneyCoach"

export default function AppleLovesMoneyCoachSection(params: { description: string }) {
  return (
    <div className="whitespace-pre-line overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-6 text-xl leading-8 text-slate-200">
             {params.description}
            </p>
            <div className="mt-10 flex">
              <Link
                href="https://apps.apple.com/is/story/id1591098240"
                target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                App Store Developer Spotlight<span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src="/images/developerSpotlight.jpeg"
                alt=""
                width={1152}
                height={768}
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src="/images/moneyCoachFeaturedAppStore.png"
                  alt=""
                  width={1152}
                  height={768}
                  className=" w-[16rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src="/images/appOfTheDay.png"
                  alt=""
                  width={1152}
                  height={768}
                  className=" w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src="/images/moneyCoachWWDC20.png"
                  alt=""
                  width={1152}
                  height={768}
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
