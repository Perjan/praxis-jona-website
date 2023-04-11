import Image from "next/image";
import { Metadata } from "next";

const title = 'Features'
const description = "View some of the features MoneyCoach has to offer. Explore the app and see how it can help you manage your money, budget, and track your spending."

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/features',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'MoneyCoach app screenshot'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/images/og-image.png']
  }
}

// features list with title, description, and image from the Features() component
const features = [
  {
    title: "Multi Currency",
    description:
      "MoneyCoach is perfect for those who have accounts in multiple currencies. See much is your Net Worth, converted in real time.",
    image: "/images/features/multicurrencyFeature.png",
  },
  {
    title: "Personalizable Budgets",
    description:
      "Are you on vacation? Business trip? Holidays coming soon? Create a budget, stay on budget and save more money!",
    image: "/images/features/budgetsFeature.png",
  },
  {
    title: "Manage Credit Cards",
    description:
      "Rrack and manage your credit card accounts. Set up payment reminders so you never have to pay card interests and more.",
    image: "/images/features/creditCardFeature.png",
  },
  {
    title: "Customizable Smart Goals",
    description:
      "Create a custom goal and start your journey towards achieving it. Buy that dream console, laptop, car or even house. MoneyCoach is here to help.",
    image: "/images/features/goalsFeature.png",
  },
  {
    title: "Siri Shortcuts",
    description:
      "Create shortcuts to quickly add your routine transactions or ask Siri about your Net Worth.",
    image: "/images/features/siriFeature.png",
  },
  {
    title: "Widgets & Live Activities",
    description:
      "Quickly glance at your remaining budget to limit yourself from overspending or motivate yourself to save more money and achieve your dreams faster.",
    image: "/images/features/widgetsFeature.png",
  },
  {
    title: "Attachments",
    description:
      "Attach additional information like: Images, PDFs, notes, keywords, you name it, to a transaction you have entered in MoneyCoach.",
    image: "/images/features/attachmentsFeature.png",
  },
  {
    title: "Import Apple Card CSV",
    description:
      "One-tap is all you need to import your Apple Card statements as a CSV file. MoneyCoach will then automatically import and categorize your Apple Card transactions.",
    image: "/images/features/appleCardFeature.png",
  },
  {
    title: "Bulk Edit Transactions",
    description:
      "Select multiple transactions to quickly bulk edit them. You can quickly delete them or change the date, change the account and even change their category in one fell swoop.",
    image: "/images/features/bulkFeature.png",
  },
  {
    title: "MoneyCoach Academy",
    description:
      "A series of curated financial lessons that will teach you from the basics of managing your money with budgets to how you can prepare for an eventual emergency in the future.",
    image: "/images/features/academyFeature.png",
  },
  {
    title: "Clean Overview",
    description:
      "We tried to keep the same feeling as the iPadOS version, with some extra macOS features built on top which makes the app feel more at place in large displays.",
    image: "/images/features/overviewFeature.png",
  },
  {
    title: "Easy Navigation",
    description:
      "The new Main Menu allows you to reach everywhere and do almost everything in the app. We also replaced the tab bar with a sidebar for a better and faster navigation flow.",
    image: "/images/features/navigationFeature.png",
  },
  {
    title: "Context Menus",
    description:
      "Right-click on the many different elements and you will get context-specific actions you can quickly execute on the spot. Hide cards, edit or delete transactions, budgets and more.",
    image: "/images/features/menuFeature.png",
  },
  {
    title: "Highly Personalizable",
    description:
      "You can customize MoneyCoach to your liking. Show or hide the Overview cards, sort them how you like, change the theme, app icon and more.",
    image: "/images/features/personalizeFeature.png",
  },
  {
    title: "Sidebars",
    description: "In most of the screens we’ve added sidebars which completely transform and improve drastically how you navigate in the many different tabs.",
    image: "/images/features/sidebarFeature.png",
  },

  {
    image: '/images/features/darkModeFeature.png',
    title: 'Dark Mode',
    description: 'We love Dark Mode so we completely redesigned MoneyCoach to fully support a true Dark Mode. It looks stunning!'
  },
  {
    image: '/images/features/keyboardFeature.png',
    title: 'Keyboard Shortcuts',
    description: 'Quickly add new expenses, incomes, transfers and so much more with keyboard shortcuts. Of course, you can always set up your own.'
  },
  {
    image: '/images/features/touchbarFeature.png',
    title: 'Touch Bar Support',
    description: 'MoneyCoach has full support for the Touch Bar on MacBooks that offer that. Quickly navigate in the app or add new transactions with just one tap.'
  },
  {
    image: '/images/features/syncFeature.png',
    title: 'Sync Everywhere',
    description: 'MoneyCoach is available on every Apple device. Sync your data between your iPhone, iPad, Apple Watch, HomePod and finally your Mac.'
  },
  {
    image: '/images/features/csvFeature.png',
    title: 'Import & Export CSV',
    description: 'In MoneyCoach you can import your data from any previous app or a bank statement via CSV.'
  },
  {
    image: '/images/features/notificationsFeature.png',
    title: 'Smart Notifications',
    description: 'Receive Bill Reminders & Money Insights notifications so you are always on top of your financials'
  },
  {
    image: '/images/features/securityFeature.png',
    title: 'Private & Secure',
    description: 'MoneyCoach requires no login so your data is always secure. Access the app via TouchID or FaceID.'
  },
  {
    image: '/images/features/backupFeature.png',
    title: 'Backup & Restore',
    description: 'Manually backup or restore your data wherever and whenever you want. Perfect when you get that new fresh Apple device.'
  },
  {
    image: '/images/features/reportFeature.png',
    title: 'Detailed Reports',
    description: 'Understand where your money goes with the help of the detailed reports. Filter which accounts you want to see or hide those you don’t want.'
  },
  {
    image: '/images/features/watchFeature.png',
    title: 'Apple Watch App',
    description: 'With MoneyCoach on your Apple Watch, you can quickly and easily add new transactions, check your balances and see what’s coming up next.'
  },
  {
    image: '/images/features/calendarFeature.png',
    title: 'Helpful Calendar',
    description: 'The calendar is a great way to see what’s coming up next. You can quickly add new transactions, check your balances and see what’s coming up next.'
  },
  {
    image: '/images/features/payeesFeature.png',
    title: 'Persons & Companies',
    description: 'Keep track of all your payees and companies you do business with. This feature is perfect to track how much money you spent, loaned or owe a specific payee or company.'
  }
];

export default function Features() {
  return (
    <>

      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-6 sm:pt-16 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">MoneyCoach is feature-packed</h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">MoneyCoach sticks to what is essential for finance. The advanced features are out of the way until you actually need them.</p>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div
                className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <Image width={176} height={264} src="/images/features/hero1.png" alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                  </div>
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <Image width={176} height={264} src="/images/features/hero2.png" alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                  </div>
                </div>
                <div className="relative">
                  <Image width={176} height={264} src="/images/features/hero3.png" alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                  </div>
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <Image width={176} height={264} src="/images/features/hero4.png" alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                  </div>
                </div>
                <div className="relative">
                  <Image width={176} height={264} src="/images/features/hero5.png" alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <li key={index}>
                <Image
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={feature.image}
                  width={306}
                  height={204}
                  alt=""
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
