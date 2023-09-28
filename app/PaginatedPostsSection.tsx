"use client"
import { useEffect, useState } from 'react'
import { Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'  

import { useSearchParams } from 'next/navigation';


const pageItems = 9

// enum with all the categories

enum Category {
    all, guide, diaries, digitalWellbeing, businessTips, news, design, financialTips, moneyspaces
}

const categories: Category[] = [
    Category.all, Category.guide, Category.news, Category.diaries, Category.digitalWellbeing, Category.businessTips, Category.design, Category.financialTips, Category.moneyspaces
]

function name(category: Category) {
    switch (category) {
        case Category.all: return "All"
        case Category.guide: return "Guides"
        case Category.businessTips: return "Business Tips"
        case Category.news: return "News"
        case Category.diaries: return "Diaries"
        case Category.digitalWellbeing: return "Digital Wellbeing"
        case Category.design: return "Design"
        case Category.financialTips: return "Financial Tips"
        case Category.moneyspaces: return "MoneySpaces"
    }
}

function raw(category: Category) {
    switch (category) {
        case Category.all: return "all"
        case Category.guide: return "guide"
        case Category.businessTips: return "business-tips"
        case Category.news: return "news"
        case Category.diaries: return "diaries"
        case Category.digitalWellbeing: return "digital-wellbeing"
        case Category.design: return "design"
        case Category.financialTips: return "financial-tips"
        case Category.moneyspaces: return "moneyspaces-tutorials"
    }
}

function categoryFromString(category: string) {
    switch (category) {
        case "all": return Category.all
        case "guide": return Category.guide
        case "business-tips": return Category.businessTips
        case "news": return Category.news
        case "diaries": return Category.diaries
        case "digital-wellbeing": return Category.digitalWellbeing
        case "design": return Category.design
        case "financial-tips": return Category.financialTips
        case "moneyspaces-tutorials": return Category.moneyspaces
    }
}


export default function PaginatedPostsSection({ posts }: { posts: Post[] }) {

    function handleSave(activePill: Category) {
        if (typeof window !== "undefined" && window.localStorage) {
            setActivePill(activePill)
            localStorage.setItem("activePill", raw(activePill));
            console.log(raw(activePill))
            console.log("saved");
        }
    }

    const [pageIndex, setpageIndex] = useState(0)
    const [activePill, setActivePill] = useState<Category | null>(Category.all)

    const searchParams = useSearchParams()
    const selectedCategoryType = searchParams.get('category')

    const filteredPosts = ((activePill === Category.all || activePill === undefined) ? posts : posts
        .filter((post) => post.categories?.includes(raw(activePill))))


    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            let activePill = localStorage.getItem("activePill");
            console.log(activePill)
            setActivePill(categoryFromString(activePill ?? "all"));
        }

        if (selectedCategoryType !== undefined && categoryFromString(selectedCategoryType) !== undefined) {
            handleSave(categoryFromString(selectedCategoryType));
        }

    }, []);

    return (
        <>
            <div className="mx-auto flex flex-wrap gap-x-4 pt-4 max-w-2xl lg:mx-0 lg:max-w-none">
                {categories.map((category) => (
                    <div key={category} className='mb-4'>
                        {makeSelectionPill(name(category), activePill === category, () => {
                            handleSave(category)
                        })}
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

function postCard(post: Post) {
    return <article key={post.slug} className="flex max-w-xl flex-col items-start justify-normal content-start">
        <div className="relative w-full mb-4">
            <Link href={post.url} >
                <Image
                    src={post.coverImageUrl}
                    alt={post.summaryOrExcerpt}
                    height={300}
                    width={500}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[16/9]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </Link>
        </div>
        <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.date} className="text-gray-500">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>

            {emojiFlag(post.language)}

            {post.categories?.map((item) => (
                makePill(item, () => { })
            ))}

            {makePill(post.language ?? "en", () => { })}

        </div>
        <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <Link href={post.url}>
                    <span className="absolute inset-0" />
                    {post.title}
                </Link>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.summaryOrExcerpt}</p>
        </div>
    </article>
}

function makePill(item: string, onClick): JSX.Element {
    return <button
        key={item}
        className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        onClick={() => onClick()}
    >
        {name(categoryFromString(item))}
    </button>
}

function makeSelectionPill(item: string, isSelected: Boolean, onClick): JSX.Element {
    const defaultClasses = "relative rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
    const selectedClasses = "relative rounded-full bg-primary px-3 py-1.5 font-medium text-white hover:bg-primaryDarker"

    return <button
        key={item}
        className={isSelected ? selectedClasses : defaultClasses}
        onClick={() => onClick()}
    >
        {item}
    </button>
}

function emojiFlag(language: string | undefined) {
    switch (language) {
        case "it":
            return "🇮🇹"
        case "de":
            return "🇩🇪"
        default:
            return ""
    }
}