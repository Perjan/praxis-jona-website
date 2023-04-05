import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Post, allPosts } from 'contentlayer/generated'


const guidesPosts = allPosts.filter((post) => post.categories?.includes('guide'))

const beginnerPosts = guidesPosts.filter(
  (post) => [
    "how-to-use-moneycoach",
    "how-to-start-fresh-with-moneycoach",
    "import-csv-files-in-moneycoach",
    "getting-started-how-to-set-up-an-account"
  ].includes(post.slug)
)

const intermediatePosts = guidesPosts.filter(
  (post) => [
    "how-to-use-moneycoach",
    "how-to-start-fresh-with-moneycoach"
  ].includes(post.slug)
)

const advancedPosts = guidesPosts.filter(
  (post) => [
    "how-to-use-moneycoach",
    "how-to-start-fresh-with-moneycoach"
  ].includes(post.slug)
)

const questionsAndAnswersPosts = guidesPosts.filter(
  (post) => [
    "how-to-use-moneycoach",
    "how-to-start-fresh-with-moneycoach"
  ].includes(post.slug)
)

function getWordStr(str, wordCount) {
  return str.split(/\s+/).slice(0, wordCount).join(" ");
}

function PostCard(post: Post) {
  return (
    <>
      <article key={post.slug} className="flex flex-col items-start justify-between">
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
    <div className='mx-auto mt-10 max-w-2xl border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none '>
      <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl pb-8">{title}</h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16pt-10 lg:grid-cols-3">
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
    <div className="bg-white py-24 sm:py-32">
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
