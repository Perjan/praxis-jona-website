import Link from 'next/link'
import Image from 'next/image'
import { Post, allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'


const title = 'Guides'
const description = 'Guides to help you get the most out of MoneyCoach. Learn how to use MoneyCoach, how to set up your accounts, how to manage your transactions, how to create budgets and goals, how to use the app on your Apple Watch, and more.'

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/guides',
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

const guidesPosts = allPosts.filter((post) => post.categories?.includes('guide'))

const beginnerPostsSlugs = [
  "import-csv-files-in-moneycoach",
  "getting-started-how-to-set-up-an-account",
  "getting-started-how-to-add-a-new-transaction",
  "getting-started-how-to-manage-categories-subcategories",
  "getting-started-how-to-create-a-budget",
  "getting-started-how-to-create-a-smart-goal",
  "how-to-add-a-new-transfer",
  "how-to-import-apple-card-statements",
  "how-to-add-description-tags-payee-to-transactions-transfers"
]

const intermediatePostsSlugs = [
  "how-to-activate-cloud-sync",
  "icloud-sync-troubleshooting",
  "how-to-show-hide-accounts",
  "how-to-track-and-manage-credit-cards",
  "how-to-customize-your-payday-in-moneycoach-app",
  "how-to-show-hide-accounts",
  "how-to-use-multi-currency",
  "how-to-use-quick-entry",
  "how-to-add-locations-in-moneycoach",
  "how-to-track-debts",
  "how-to-add-a-repeating-transaction-transfer",
  "how-to-manage-repeating-transactions",
  "how-to-reset-the-icloud-sync",
  "how-to-customize-your-payday-in-moneycoach-app",
  "how-to-scan-invoices-receipts",
]

const advancedPostsSlugs = [
  "how-to-merge-categories-subcategories",
  "how-to-start-fresh-with-moneycoach",
  "how-to-deactivate-live-activities",
  "how-the-new-backup-restore-works",
  "how-to-change-the-language",
  "how-to-customise-your-overview",
  "apple-watch-sync-troubleshoot",
  "how-to-setup-dynamic-shortcuts",
  "how-to-navigate-via-keyboard",
  "how-to-customize-your-daily-limit",
  "how-to-handle-refunds-cashback-repayments",
  "how-to-use-quick-notes",
  "understanding-the-real-cost-of-your-subscriptions",
]

const questionsAndAnswersPostsSlugs = [
  "how-to-cancel-a-subscription",
  "how-to-share-your-moneycoach-premium-subscription-on-your-mac-too",
  "can-you-sync-moneycoach-android-and-mac-apps",
  "how-to-manually-backup-your-moneycoach-data",
  "how-does-the-daily-limit-works",
  "how-to-delete-your-data-from-moneycoach",
  "requesting-a-refund"
]

function sortedPostsBySlug(posts, slugs) {
  return posts
    .filter((post) => slugs.includes(post.slug))
    .sort((a, b) => slugs.indexOf(a.slug) - slugs.indexOf(b.slug));
}

const beginnerPosts = sortedPostsBySlug(guidesPosts, beginnerPostsSlugs)
const intermediatePosts = sortedPostsBySlug(guidesPosts, intermediatePostsSlugs)
const advancedPosts = sortedPostsBySlug(guidesPosts, advancedPostsSlugs)
const questionsAndAnswersPosts = sortedPostsBySlug(guidesPosts, questionsAndAnswersPostsSlugs)

function PostCard(post: Post) {
  return (
      <article key={post._id} className="flex flex-col items-start justify-normal content-start">
        <h2 className='sr-only'>{post.title}</h2>
        <Link href={post.guideUrl}>
          <div className="relative w-full duration-300 ease-in-out hover:scale-105">
            <Image src={post.coverImageUrl} width={306} height={204} alt={post.title}
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[16/9] p-2" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          </Link>
          <div className="max-w-xl">
            <div className="group relative">
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.summary}</p>
            </div>
          </div>
      </article>
  )
}

// Returns a section with a list of posts and a section title
function PostSection({posts, title}) {
  return (
    <div className='mx-auto mt-10 max-w-2xl border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none'>
      <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl pb-0">{title}</h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 pt-10 lg:grid-cols-3">
        {
          posts.map((post) => (
              PostCard(post)
            ))
        }
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-white mt-2 sm:mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Guides</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600 whitespace-pre-line">
            {"A collection of guides and tutorials on how to use MoneyCoach.\nGet started today and learn how to use MoneyCoach to manage your finances."}
          </p>
        </div>
        <PostSection posts={beginnerPosts} title="Beginner" />
        <PostSection posts={intermediatePosts} title="Intermediate" />
        <PostSection posts={advancedPosts} title="Advanced" />
        <PostSection posts={questionsAndAnswersPosts} title="Questions and Answers" />
      </div>
    </div>
  )
}
