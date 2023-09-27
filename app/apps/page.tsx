import AppEntryList from 'app/AppEntryList'
import Image from 'next/image'

export default function AppsByMoneyCoach() {
    return (
        <>
            <div className="bg-white">
                <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                    <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                        <div className="px-6 lg:px-0 lg:pt-4">
                            <div className="mx-auto max-w-2xl">
                                <div className="max-w-lg">
                                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Apps by MoneyCoach</h1>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">These are all the apps that we have designed, developed and released on the App Store.</p>
                                </div>
                            </div>
                        </div>
                        <Image className="mx-auto object-center lg:max-h-96 lg:max-w-sm"
                            width={483}
                            height={853}
                            src="/images/moco-press-love.png" alt="" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
                </div>
            </div>

            <AppEntryList
            appName='Money Manager MoneyCoach'
            appDescription="Track all your cash spending, manage your credit cards, personal budgets, financial goals and reduce your financial stress. That's what MoneyCoach is all about."
            appIcon='/images/moneyCoachIcon.jpg'
            appInfo='/'
            appUrl='https://apps.apple.com/app/apple-store/id989642198?pt=118449936&ct=appsPage&mt=8'
            />

            <AppEntryList
            appName='Screen Time Realtime Control'
            appDescription="Screen Time Realtime Control is an app for users who want to take control of their app usage and develop healthier digital habits."
            appIcon='/images/screentimeNewIcon.jpg'
            appInfo='/blog/screen-time-realtime-origin-story'
            appUrl='https://apps.apple.com/app/apple-store/id6452629146?pt=118449936&ct=appsPage&mt=8'
            />

            <AppEntryList
            appName='MoneySpaces - Budget For Couples'
            appDescription="MoneySpaces is a modern financial collaboration app for families, friends, roommates & team members."
            appIcon='/images/moneyspacesIcon.png'
            appInfo='/moneyspaces'
            appUrl='https://apps.apple.com/app/apple-store/id1633780211?pt=118449936&ct=appsPage&mt=8'
            />

            <AppEntryList
            appName='Decky Web Dashboard'
            appDescription="All your data, charts, websites in one dashboard, refreshed automatically."
            appIcon='/images/decky-icon.jpeg'
            appInfo='/blog/introducing-decky-indie-app-developer-dashboard'
            appUrl='https://apps.apple.com/app/apple-store/id6449291563?pt=118449936&ct=appsPage&mt=8'
            />

            <AppEntryList
            appName='IBAN Calculator'
            appDescription="Calculate quick and easy the correct IBAN for any bank account within the EU."
            appIcon='/images/iban-calculator-Icon.jpg'
            appInfo='/blog/streamline-international-transactions-with-iban-calculator-by-moneycoach-app'
            appUrl='https://apps.apple.com/app/apple-store/id1017293567?pt=118449936&ct=appsPage&mt=8'
            />
        </>
        )
}