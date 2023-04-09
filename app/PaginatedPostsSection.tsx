"use client"
import { useState } from 'react'
import { Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

const pageItems = 9

// enum with all the categories

enum Category {
    all, guide, businessTips, news, design, financialTips
}

const categories: Category[] = [
    Category.all, Category.guide, Category.news, Category.businessTips, Category.design, Category.financialTips
]

function name(category: Category) {
    switch (category) {
        case Category.all: return "All"
        case Category.guide: return "Guides"
        case Category.businessTips: return "Business Tips"
        case Category.news: return "News"
        case Category.design: return "Design"
        case Category.financialTips: return "Financial Tips"
    }
}

function raw(category: Category) {
    switch (category) {
        case Category.all: return "all"
        case Category.guide: return "guide"
        case Category.businessTips: return "business-tips"
        case Category.news: return "news"
        case Category.design: return "design"
        case Category.financialTips: return "financial-tips"
    }
}

export default function PaginatedPostsSection({ posts }: { posts: Post[] }) {
    
    const [pageIndex, setpageIndex] = useState(0)
    const [activePill, setActivePill] = useState(Category.all)

    const filteredPosts = (activePill === Category.all ? posts : posts
        .filter((post) => post.categories?.includes(raw(activePill))))


    return (
        <>
        <div className="mx-auto flex flex-wrap gap-x-4 pt-4 max-w-2xl lg:mx-0 lg:max-w-none">
            {categories.map((category) => (
                <div key={category} className='mb-4'>
                    {makeSelectionPill(name(category), activePill === category, () => setActivePill(category))}
                </div>
            ))
            }   
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
                makePill(item, {})
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
        // className="relative rounded-full bg-red-500 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        onClick={onClick}
    >
        {item}
    </a>
}

function makeSelectionPill(item: string, isSelected: Boolean, onClick): JSX.Element {
    const defaultClasses =  "relative rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
    const selectedClasses =  "relative rounded-full bg-primary px-3 py-1.5 font-medium text-white hover:bg-primaryDarker"

    return <a
        key={item}
        href="#"
        className={isSelected ? selectedClasses : defaultClasses}
        onClick={onClick}
    >
        {item}
    </a>
}