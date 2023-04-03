import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'

// export async function getStaticProps() {
//   const posts = allPosts.sort((a, b) => {
//     return compareDesc(new Date(a.date), new Date(b.date))
//   })
//   return { props: { posts } }
// }

function PostCard(post: Post) {
  return (
    <div className="flex max-w-xl flex-col items-start justify-between mb-10 mt-10">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.date} className="text-gray-500">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        {
          post.categories?.map((item) => (
            <a key={item} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{item.toUpperCase()}</a>
          ))
        }

        {
          post.tags?.map((item) => (
            <a key={item} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{item.toUpperCase()}</a>
          ))
        }
      </div>

      <h2 className="text-xl text-left">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
        >
          {post.title}
        </Link>
      </h2>
    </div>
  )
}

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl py-16 text-left">
      <title>MoneyCoach Blog</title>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MoneyCoach Blog</h1>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        Learn how to manage your money, get your finances in order and become financially secure.
      </p>

      <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
        {
          allPosts
            .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
            .map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
      </div>
    </div>
  )
}