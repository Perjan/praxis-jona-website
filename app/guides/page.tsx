import Link from 'next/link'
import Image from 'next/image'
import { Post, allPosts } from 'contentlayer/generated'


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

const intermediatePostsSlugs = []

const advancedPostsSlugs = []

const questionsAndAnswersPostsSlugs = []

function sortedPostsBySlug(posts, slugs) {
  return posts
    .filter((post) => slugs.includes(post.slug))
    .sort((a, b) => slugs.indexOf(a.slug) - slugs.indexOf(b.slug));
}

const beginnerPosts = sortedPostsBySlug(guidesPosts, beginnerPostsSlugs)
const intermediatePosts = sortedPostsBySlug(guidesPosts, intermediatePostsSlugs)
const advancedPosts = sortedPostsBySlug(guidesPosts, advancedPostsSlugs)
const questionsAndAnswersPosts = sortedPostsBySlug(guidesPosts, questionsAndAnswersPostsSlugs)

function getWordStr(str, wordCount) {
  return str.split(/\s+/).slice(0, wordCount).join(" ");
}

function PostCard(post: Post) {
  return (
    <>
      <article key={post._id} className="flex flex-col items-start justify-normal content-start">
        <h2 className='sr-only'>{post.title}</h2>
        <Link href={post.url}>
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
    </>
  )
}

// Returns a section with a list of posts and a section title
function PostSection({ posts, title }) {
  return (
    <div className='mx-auto mt-10 max-w-2xl border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none'>
      <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl pb-8">{title}</h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 pt-10 lg:grid-cols-3">
        {
          posts
            .map((post) => (
              PostCard(post)
            ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-white mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Guides</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600 whitespace-pre-line">
            {"A collection of guides and tutorials on how to use MoneyCoach.\nGet started today and learn how to use MoneyCoach to manage your finances."}
          </p>
        </div>
        <PostSection key={1} posts={beginnerPosts} title="Beginner" />
        <PostSection key={2} posts={intermediatePosts} title="Intermediate" />
        <PostSection key={3} posts={advancedPosts} title="Advanced" />
        <PostSection key={4} posts={questionsAndAnswersPosts} title="Questions and Answers" />
      </div>
    </div>
  )
}
