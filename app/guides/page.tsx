import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'


const guidesPosts = allPosts.filter((post) => post.categories?.includes('guide'))

const beginnerPosts = guidesPosts.filter(
  (post) => [
    "how-to-use-moneycoach",
    "how-to-start-fresh-with-moneycoach"
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
    <article key={post.slug} className="flex max-w-xl flex-col items-start justify-normal content-start">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.date} className="text-gray-500">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>

        {
          post.categories?.map((item) => (
            <a
              key={item}
              href={item}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {item}
            </a>
          ))
        }

      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={post.url}>
            <span className="absolute inset-0" />
            {post.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{getWordStr(post.body.raw, 40)}</p>
      </div>
    </article>
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
