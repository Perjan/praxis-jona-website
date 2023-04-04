import Head from 'next/head'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'

// export async function getStaticProps() {
//   const posts = allPosts.sort((a, b) => {
//     return compareDesc(new Date(a.date), new Date(b.date))
//   })
//   return { props: { posts } }
// }

function PostCard(post: Post) {
  return (
    <div className="flex max-w-xl flex-col items-start justify-between mb-10 mt-10">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.date} className="text-gray-500">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        {
          post.categories?.map((item) => (
            <a key={item} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{item.toUpperCase()}</a>
          ))
        }

        {
          post.tags?.map((item) => (
            <a key={item} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{item.toUpperCase()}</a>
          ))
        }
      </div>

      <h2 className="text-xl text-left">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
        >
          {post.title}
        </Link>
      </h2>
    </div>
  )
}

// export default function Home() {
//   return (
//     <div className="mx-auto max-w-2xl py-16 text-left">
//       <title>MoneyCoach Blog</title>
//       <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MoneyCoach Blog</h1>
//       <p className="mt-2 text-lg leading-8 text-gray-600">
//         Learn how to manage your money, get your finances in order and become financially secure.
//       </p>

//       <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
//         {
//           allPosts
//             .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
//             .map((post) => (
//               <PostCard key={post.slug} {...post} />
//             ))}
//       </div>
//     </div>
//   )
// }

function getWordStr(str, wordCount) {
  return str.split(/\s+/).slice(0, wordCount).join(" ");
}

export default function Home() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {
          allPosts
          .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
          .map((post) => (
            <article key={post.slug} className="flex max-w-xl flex-col items-start justify-normal content-start">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>

                {
          post.categories?.map((item) => (
<a
key={item}
                  href={item}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {item}
                </a>
          ))
        }
                
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
          ))}
        </div>
      </div>
    </div>
  )
}
