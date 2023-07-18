
import { Post, allPosts } from 'contentlayer/generated'

const guidesPosts = allPosts.filter((post) => post.categories?.includes('guide'))

const beginnerPostsSlugs = [
  "how-to-translate-tutorials-in-your-language",
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
  "how-to-activate-family-sync",
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
  "how-to-setup-a-mortgage-account-in-moneycoach"
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
  "how-to-integrate-shortcuts-app-with-moneycoach-on-macos",
  "understanding-the-real-cost-of-your-subscriptions",
  "how-to-buy-a-ps5-using-budgets-smart-goals",
  "how-to-manage-property-loans",
]

const questionsAndAnswersPostsSlugs = [
  "how-to-cancel-a-subscription",
  "icloud-sync-troubleshooting",
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

export const beginnerPosts = sortedPostsBySlug(guidesPosts, beginnerPostsSlugs)
export const intermediatePosts = sortedPostsBySlug(guidesPosts, intermediatePostsSlugs)
export const advancedPosts = sortedPostsBySlug(guidesPosts, advancedPostsSlugs)
export const questionsAndAnswersPosts = sortedPostsBySlug(guidesPosts, questionsAndAnswersPostsSlugs)


export const allGuidesPosts = [
    ...beginnerPosts,
    ...intermediatePosts,
    ...advancedPosts,
    ...questionsAndAnswersPosts
]