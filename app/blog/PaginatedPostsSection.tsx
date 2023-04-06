"use client"
import { useState } from 'react'
import { Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

const pageItems = 9

// enum with all the categories
const categories = ['All', 'Guide', 'Business Tips', 'News', 'Design', 'Financial Tips']

export default function PaginatedPostsSection({ posts }: { posts: Post[] }) {
    
    const [pageIndex, setpageIndex] = useState(0)
    const [activePill, setActivePill] = useState('All')

    const filteredPosts = (activePill === "All" ? posts : posts
        .filter((post) => post.categories?.includes(activePill.toLowerCase())))


    return (
        <>
        <div className="mx-auto flex gap-x-4 gap-8 flex-wrap pt-4  max-w-2xl lg:mx-0 lg:max-w-none">
                {makePill('All', () => setActivePill('All'))}
                {makePill('Guide', () => setActivePill('Guide'))}
                {makePill('Business Tips', () => setActivePill('business-tips'))}
                {makePill('News', () => setActivePill('news'))}
                {makePill('Design', () => setActivePill('design'))}
                {makePill('Financial Tips', () => setActivePill('financial-tips'))}
        </div>
        <div className="mx-auto mt-10 pb-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-b border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        
        {
            filteredPosts
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
                makePill(item)
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

function makePill(item: string, onClick): JSX.Element {
    return <a
        key={item}
        href="#"
        className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        onClick={onClick}
    >
        {item}
    </a>
}

