import Link from 'next/link'
import Image from 'next/image'
import { Post, allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import { advancedPosts, beginnerPosts, intermediatePosts, questionsAndAnswersPosts } from 'app/guides/GuidesDataSource'


const title = 'Einführungen'
const description = 'Lerne, wie du MoneyCoach nutzt, wie du deine Konten einrichtest, deine Transaktionen verwaltest, Budgets und Ziele erstellst, die App auf deiner Apple Watch nutzt und vieles mehr.\n\nDiese einfuehrungen sind nur auf Englisch. Bitte verwende die integrierte Übersetzungsfunktion deines Browsers, um die Anleitungen zu übersetzen.'

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/de/einfuehrungen',
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
    canonical: '/guides',
    languages: {
        en: "/guides",
        it: "/it/guide",
        de: "/de/einfuehrungen"
      }
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/images/og-image.png']
  }
}

function PostCard(post: Post, priority: boolean) {
  return (
      <article key={post._id} className="flex flex-col items-start justify-normal content-start">
        <h2 className='sr-only'>{post.title}</h2>
        <Link href={post.guideUrl}>
          <div className="relative w-full duration-300 ease-in-out hover:scale-105">
            <Image 
              src={post.coverImageUrl} 
              width={306} 
              height={204} 
              alt={post.title} 
              priority={priority}
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[16/9] p-2" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          </Link>
          <div className="max-w-xl">
            <div className="group relative">
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.summary}</p>
            </div>
          </div>
      </article>
  )
}

// Returns a section with a list of posts and a section title
function PostSection({posts, title}) {
  return (
    <div className='mx-auto mt-10 max-w-2xl border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none'>
      <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl pb-0">{title}</h2>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 pt-10 lg:grid-cols-3">
        {

          posts.map((post, index) => (
              PostCard(post, index < 3)
            ))
        }
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-white mt-2 sm:mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Einführungen</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600 whitespace-pre-line">
            {description}
          </p>
        </div>
        <PostSection posts={beginnerPosts} title="Beginner" />
        <PostSection posts={intermediatePosts} title="Intermediate" />
        <PostSection posts={advancedPosts} title="Advanced" />
        <PostSection posts={questionsAndAnswersPosts} title="Questions and Answers" />
      </div>
    </div>
  )
}
