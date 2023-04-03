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
    <div className="mb-8">
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block text-xs text-gray-600 mb-2">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      {
        post.tags?.map((tag) => (
          <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</p>
        ))
      }
    </div>
  )
}

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <title>MoneyCoach Blog</title>
      <h1 className="mb-8 text-3xl font-bold">Blog Articles</h1>

      {
        allPosts
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        .map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  )
}