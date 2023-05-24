import { allPosts } from 'contentlayer/generated'
import PaginatedPostsSection from 'app/PaginatedPostsSection'
import { Metadata } from 'next'

export const dynamic = "force-static"

const title = 'Blog'
const description = "Lies die neuesten Artikel über Geldmanagement, Finanzplanung und Investitionen. Lerne, wie du dein Geld besser verwalten und deine finanziellen Ziele erreichen kannst."

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/de/blog',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'MoneyCoach app screenshot'
      }
    ],
  },
  alternates: {
    canonical: '/blog',
    languages: {
      en: '/blog',
      it: '/it/blog',
      de: '/de/blog',
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/images/og-image.png']
  }
}

// tommorow date
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

// Filter all posts earch for posts with a date less than or equal to today's date
const filteredBlogPosts = allPosts
  .filter((post) => post.date <= tomorrow.toISOString().split('T')[0] && !post.isHidden)

export default async function Page() {
  return (
    <div className="bg-white mt-2 sm:mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
        <PaginatedPostsSection posts={filteredBlogPosts} />
      </div>
    </div>
  )
}