import { allPosts } from 'contentlayer/generated'
import PaginatedPostsSection from '../PaginatedPostsSection'
import { Metadata } from 'next'
import { Constants } from 'app/Constants'

export const dynamic = "force-static"

const title = 'Blog - Praxis Jona'
const description = "Wir veröffentlichen Blogbeiträge über Gesundheit, Schönheit und Ernährung."

export const metadata: Metadata = {
  title: title,
  description: description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/blog',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'Praxis Jona'
      }
    ],
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
  .filter((post) => !post.categories?.includes("legal") ?? false)
  .filter((post) => post.date <= tomorrow.toISOString().split('T')[0] && !post.isHidden)

export default async function Page() {
  return (
    <div className="bg-white mt-2 sm:mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
        <PaginatedPostsSection posts={filteredBlogPosts} />
      </div>
    </div>
  )
}
