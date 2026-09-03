import { Post, allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { Metadata } from 'next'

const title = "Impressum, Datenschutz & Rechtliches"
const description = "Rechtliche Informationen der Praxis Jona in Berlin-Mitte mit Impressum, Datenschutz und weiteren verbindlichen rechtlichen Hinweisen."
const url = "/legal"
type Locale = "de" | "en"

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
    languages: {
      de: "/legal",
      en: "/en/legal",
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 600,
        alt: "Praxis Jona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.png"],
  },
}

const legalPosts = allPosts.filter((post) => post.categories?.includes('legal'))

export function getLegalPosts(locale: Locale = "de") {
  const slug = locale === "en" ? "imprint-privacy" : "impressum-datenschutz"
  return legalPosts.filter((post) => post._raw.flattenedPath === slug)
}

function PostCard({ post, locale }: { post: Post; locale: Locale }) {
  const href = locale === "en"
    ? `/en/legal/${post._raw.flattenedPath}`
    : `/legal/${post._raw.flattenedPath}`

  return (
    <>
      <article key={post.slug} className="flex max-w-xl flex-col items-start justify-normal content-start">
        <div className="flex items-center gap-x-4 text-xs">
        </div>
        <div className="group relative">
          <h2 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={href}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h2>

        </div>
      </article>
    </>
  )
}

// Returns a section with a list of posts and a section title
function PostSection({ posts, locale }: { posts: Post[]; locale: Locale }) {
  return (
    <div className='mx-auto mt-10 max-w-2xl border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none '>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16pt-10 lg:grid-cols-3">
        {
          posts
            .map((post) => (
              <PostCard key={post.slug} post={post} locale={locale} />
            ))}
      </div>
    </div>
  )
}

export function LegalIndexPage({ locale = "de" }: { locale?: Locale } = {}) {
  const posts = getLegalPosts(locale)

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Legal</h1>
        </div>
        <PostSection posts={posts} locale={locale} />
      </div>
    </div>
  )
}

export default LegalIndexPage
