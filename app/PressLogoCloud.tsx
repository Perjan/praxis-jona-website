import Image from "next/image"

export default function PressLogoCloud(params: { title: string }) {
    return (
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {params.title}
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <a href="https://techcrunch.com/2023/09/18/these-ios-17-apps-bring-interactive-widgets-to-your-iphone-home-screen/">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/press/techcrunchwhite.png"
              alt="Tech Crunch"
              width={158}
              height={48}
            /></a>
            <a href="https://9to5mac.com/2021/09/21/improve-financial-habits-universal-app-moneycoach-ios-15/">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/press/9to5macWhite.png"
              alt="9to5Mac"
              width={158}
              height={48}
            /></a>
            <a href="https://apps.apple.com/us/story/id1591098240">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/press/appleWhite.png"
              alt="Apple"
              width={158}
              height={48}
            /></a>
            <a href="https://apfelfunk.com/apps-made-in-germany-moneycoach/">
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/images/press/apfelfunkWhite.png"
              alt="apfelfunk"
              width={158}
              height={48}
            /></a>
            <a href="https://www.tomsguide.com/news/iphone-15-dynamic-island-15-best-apps-you-should-try-first">
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/press/tomsguideWhite.png"
              alt="Tom's Guide"
              width={158}
              height={48}
            /></a>
          </div>
        </div>
      </div>
    )
  }
  