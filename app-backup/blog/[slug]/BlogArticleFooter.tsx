import { Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Image from 'next/image'
import { Authors } from '../authors/AuthorsDataSource'
import Link from 'next/link';

export function PostCard({ post }: { post: Post }) {
  
  const author = Authors.find((author) => author.id === (post.author ?? "perjan-duro"));

  return (
    <article key={post._id} className="relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[16/9] lg:w-64 lg:shrink-0">
        <Image
          src={post.coverImageUrl}
          width={1368}
          height={760}
          alt=""
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-1 text-xs">
          <time dateTime={post.date} className="text-gray-500">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <span className="text-gray-500"> • written by </span>
          {author && <Link href={author.url} className='hover:text-teal-400'>{author.name}</Link>}
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-teal-400">
            <a href={post.url}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">{post.summaryOrExcerpt}</p>
        </div>

      </div>
    </article>
  )
}

export default function BlogArticleFooter({ posts }: { posts: Post[] }) {
  return (
    <div className="border-b pb-16">
      <div className="mx-auto">
        <div className="mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Articles you might like</h2>
          <div className="mt-16 space-y-20 lg:mt-10 lg:space-y-20">
            {posts.map((post) => (
              <PostCard post={post} key={post._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
