const description = "MoneyCoach has been featured multiple times worldwide on the App Stores for a number of years now. We have also been featured on Apple's website a couple of times. We made an appearance during both WWDC20 and WWDC21 keynotes. We also got a dedicated Developer Story on the App Store. Crazy, right?"

export default function AppleLovesMoneyCoachSection() {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-900">
                <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Apple ❤️ MoneyCoach</h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">{description}</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">App Store Developer Spotlight</a>
                        </div>
                    </div>
                </div>
                <svg viewBox="0 0 1024 1024" className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fill-opacity="0.7" />
                    <defs>
                        <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                            <stop stop-color="#7775D6" />
                            <stop offset="1" stop-color="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </>
    )
}