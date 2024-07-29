import { Post, allPosts } from 'contentlayer/generated'
import Link from 'next/link'

const legalPosts = allPosts.filter((post) => post.categories?.includes('legal'))

function PostCard(post: Post) {

  return (
    <>
      <article key={post.slug} className="flex max-w-xl flex-col items-start justify-normal content-start">
        <div className="flex items-center gap-x-4 text-xs">
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={`/legal/${post._raw.flattenedPath}`}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>

        </div>
      </article>
    </>
  )
}

// Returns a section with a list of posts and a section title
function PostSection({ posts, title }) {
  return (
    <div className='mx-auto mt-10 max-w-2xl border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none '>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16pt-10 lg:grid-cols-3">
        {
          posts
            .map((post) => (
              PostCard(post)
            ))}
      </div>
    </div>
  )
}

export default function Page() {

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Legal</h1>
        </div>
        <PostSection posts={legalPosts} title="" />
      </div>
    </div>
  )
}
