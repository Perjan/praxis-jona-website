import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import PaginatedPostsSection from './CustomPagination'

export const metadata: Metadata = {
  title: 'Blog',
}

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
    <>
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <PaginatedPostsSection posts={allPosts} />
        {/* {newFunction()} */}
      </div>
    </div>
    </>
  )
}
