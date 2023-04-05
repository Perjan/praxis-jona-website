"use client"
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

const pageItems = 9

export default function PaginatedPostsSection({ posts }: { posts: Post[] }) {
    
    const [pageIndex, setpageIndex] = useState(0)

    return (
        <>
        <div className="mx-auto mt-10 pb-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-b border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

        {
            posts
            .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
            .slice(0, (pageIndex + 1) * pageItems)
            .map((post) => (
                postCard(post)
            ))
        }
        </div>

        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-20 py-2 px-4 border border-gray-400 rounded shadow'
          onClick={() => setpageIndex(pageIndex + 1)}
          >Load More</button>

        </>
    )
}

function getWordStr(str, wordCount) {
    return str.split(/\s+/).slice(0, wordCount).join(" ");
  }

function postCard(post: Post) {
    return <article key={post.slug} className="flex max-w-xl flex-col items-start justify-normal content-start">
        <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.date} className="text-gray-500">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>

            {post.categories?.map((item) => (
                <a
                    key={item}
                    href={item}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                    {item}
                </a>
            ))}

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
}

