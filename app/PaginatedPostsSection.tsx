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
    all, health, nutrition, beauty, digitalWellbeing
}

const categories: Category[] = [
    Category.all, Category.health, Category.beauty, Category.nutrition, Category.digitalWellbeing
]

function name(category: Category) {
    switch (category) {
        case Category.all: return "All"
        case Category.health: return "Health"
        case Category.beauty: return "Beauty"
        case Category.nutrition: return "Nutrition"
        case Category.digitalWellbeing: return "Digital Wellbeing"
    }
}

function raw(category: Category) {
    switch (category) {
        case Category.all: return "all"
        case Category.health: return "health"
        case Category.beauty: return "beauty"
        case Category.nutrition: return "nutrition"
        case Category.digitalWellbeing: return "digital-wellbeing"
    }
}

function categoryFromString(category: string) {
    switch (category) {
        case "all": return Category.all
        case "health": return Category.health
        case "beauty": return Category.beauty
        case "nutrition": return Category.nutrition
        case "digital-wellbeing": return Category.digitalWellbeing
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
            <div className="mx-auto mt-10 pb-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-b border-gray-200 pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                {
                    filteredPosts
                        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
                        .slice(0, (pageIndex + 1) * pageItems)
                        .map((post) => (
                            postCard(post)
                        ))

                }
            </div>

            <button className='bg-white mb-10 hover:bg-gray-100 text-gray-800 font-semibold mt-10 py-2 px-4 border border-gray-400 rounded shadow'
                onClick={() => setpageIndex(pageIndex + 1)}
            >Mehr laden</button>

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
            return "DE"
        default:
            return ""
    }
}