import Head from 'next/head'
import Link from 'next/link'
// import { compareDesc, format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'

// export async function getStaticProps() {
//   const posts = allPosts.sort((a, b) => {
//     return compareDesc(new Date(a.date), new Date(b.date))
//   })
//   return { props: { posts } }
// }

function PostCard(post: Post) {
  return (
    <h1>{post.title}</h1>
    // <div className="mb-6">
    //   <time dateTime={post.date} className="block text-sm text-slate-600">
    //     {/* {format(parseISO(post.date), 'LLLL d, yyyy')} */}
    //   </time>
    //   <h2 className="text-lg">
    //     <Link href={post.url}>
    //       <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
    //     </Link>
    //   </h2>
    // </div>
  )
}

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
        {/* <title>Contentlayer Blog Example</title> */}

      {/* <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1> */}

      {allPosts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}