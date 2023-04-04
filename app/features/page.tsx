import MajorFeatureSection from "../MajorFeatureSection"
import Image from "next/image"

const featuresList = [
    { title: "Mega cool title", description: "A description goes here", imageUrl: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" },
    { title: "Mega cool title", description: "A description goes here", imageUrl: "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" }
]

export default function Features() {
    return (
        <>
        {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <li>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/multicurrencyFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Multi Currency</h3>
              <p className="text-base leading-7 text-gray-600">MoneyCoach is perfect for those who have accounts in multiple
                currencies. See much is your Net Worth, converted in real time.</p>
            </li>

            <li>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/budgetsFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Personalizable Budgets</h3>
              <p className="text-base leading-7 text-gray-600">Are you on vacation? Business trip? Holidays coming soon?
                Create a budget, stay on budget and save more money!</p>
            </li>

            <li>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/creditCardFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Manage Credit Cards</h3>
              <p className="text-base leading-7 text-gray-600">Rrack and manage your credit card accounts. Set up payment
                reminders so you never have to pay card interests and more.</p>
            </li>

            <li>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/goalsFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Customizable Smart Goals
              </h3>
              <p className="text-base leading-7 text-gray-600">Create a custom goal and start your journey towards achieving
                it. Buy that dream console, laptop, car or even house. MoneyCoach is here to help.</p>
            </li>

            <li>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/siriFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Siri Shortcuts</h3>
              <p className="text-base leading-7 text-gray-600">Create shortcuts to quickly add your routine transactions or
                ask Siri about your financials. Fast, easy and very intuitive.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/widgetsFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Widgets & Live Activities
              </h3>
              <p className="text-base leading-7 text-gray-600">Quickly glance at your remaining budget to limit yourself
                from overspending or motivate yourself to save more money and achieve your dreams faster.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/attachmentsFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Attachments</h3>
              <p className="text-base leading-7 text-gray-600">Attach additional information like: Images, PDFs, notes,
                keywords, you name it, to a transaction you have entered in MoneyCoach.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/appleCardFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Import Apple Card CSV</h3>
              <p className="text-base leading-7 text-gray-600">One-tap is all you need to import your Apple Card statements
                as a CSV file. MoneyCoach will then automatically import and categorize your Apple Card transactions.
              </p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/bulkFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Bulk Edit Transactions</h3>
              <p className="text-base leading-7 text-gray-600">Select multiple transactions to quickly bulk edit them. You
                can quickly delete them or change the date, change the account and even change their category in one
                fell swoop.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/academyFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">MoneyCoach Academy</h3>
              <p className="text-base leading-7 text-gray-600">A series of curated financial lessons that will teach you
                from the basics of managing your money with budgets to how you can prepare for an eventual emergency in
                the future.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/overviewFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Clean Overview</h3>
              <p className="text-base leading-7 text-gray-600">We tried to keep the same feeling as the iPadOS version, with
                some extra macOS features built on top which makes the app feel more at place in large displays.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/navigationFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Easy Navigation</h3>
              <p className="text-base leading-7 text-gray-600">The new Main Menu allows you to reach everywhere and do
                almost everything in the app. We also replaced the tab bar with a sidebar for a better and faster
                navigation flow.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/menuFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Context Menus</h3>
              <p className="text-base leading-7 text-gray-600">Right-click on the many different elements and you will get
                context-specific actions you can quickly execute on the spot. Hide cards, edit or delete transactions,
                budgets and more.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/personalizeFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Highly Personalizable</h3>
              <p className="text-base leading-7 text-gray-600">You can customize MoneyCoach to your liking. Show or hide the
                Overview cards, sort them how you like, change the theme, app icon and more.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/sidebarFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Sidebars</h3>
              <p className="text-base leading-7 text-gray-600">In most of the screens we’ve added sidebars which completely
                transform and improve drastically how you navigate in the many different tabs.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/darkModeFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Dark Mode</h3>
              <p className="text-base leading-7 text-gray-600">We love Dark Mode so we completely redesigned MoneyCoach to
                fully support a true Dark Mode. It looks stunning!</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/keyboardFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Keyboard Shortcuts</h3>
              <p className="text-base leading-7 text-gray-600">Quickly add new expenses, incomes, transfers and so much more
                with keyboard shortcuts. Of course, you can always set up your own.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/touchbarFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Touch Bar Support</h3>
              <p className="text-base leading-7 text-gray-600">MoneyCoach has full support for the Touch Bar on MacBooks
                that offer that. Quickly navigate in the app or add new transactions with just one tap.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/syncFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Sync Everywhere</h3>
              <p className="text-base leading-7 text-gray-600">MoneyCoach is available on every Apple device. Sync your data
                between your iPhone, iPad, Apple Watch, HomePod and finally your Mac.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/csvFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Import & Export CSV</h3>
              <p className="text-base leading-7 text-gray-600">In MoneyCoach you can import your data from any previous app
                or a bank statement via CSV.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/notificationsFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Smart Notifications</h3>
              <p className="text-base leading-7 text-gray-600">Receive Bill Reminders & Money Insights notifications so you
                are always on top of your financials</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/securityFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Private & Secure</h3>
              <p className="text-base leading-7 text-gray-600">MoneyCoach requires no login so your data is always secure.
                Access the app via TouchID or FaceID.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/backupFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Backup & Restore</h3>
              <p className="text-base leading-7 text-gray-600">Manually backup or restore your data wherever and whenever
                you want. Perfect when you get that new fresh Apple device.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/reportFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Detailed Reports</h3>
              <p className="text-base leading-7 text-gray-600">Understand where your money goes with the help of the
                detailed reports. Filter which accounts you want to see or hide those you don’t want.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/watchFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Companion App/h3>
                <p className="text-base leading-7 text-gray-600">Adding expenses or incomes is just one tap away. Check how
                  much you can spend every day by just glancing at your Apple Watch.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/calendarFeature.png"
                alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Helpful Calendar</h3>
              <p className="text-base leading-7 text-gray-600">Use the calendar to check your upcoming future expenses or to
                quickly add a future transaction.</p>
            </li>

            <li>
              <Image className="aspect-[3/2] w-full rounded-2xl object-cover" src="images/features/payeesFeature.png" alt="">
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Persons & Companies</h3>
              <p className="text-base leading-7 text-gray-600">This feature is perfect to track how much money you spent,
                loaned or owe a specific payee or company.</p>
            </li>
          </ul>
        </div>
      </div> */}


            </>

    )
}