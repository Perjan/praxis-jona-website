import Head from "next/head"
import Link from 'next/link'
import { notFound } from 'next/navigation';
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
// import { useNavigation } from 'next/navigation'

// export async function generateStaticParams() {
//   return allPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// interface Params {
//   slug: string
// }

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}


// https://www.sandromaglione.com/techblog/contentlayer-blog-template-with-nextjs
export default async function PostLayout({ params }) {
  // const router = useNavigation()
    //same name as name of your file, can be [slug].js; [specialId].js - any name you want
  // const { slug } = router.query;
  console.log({params});

  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // const tweets = await getTweets(post.tweetIds);

  return (
    <article className="prose">
      <section>
        <script type="application/ld+json">
          {/* {JSON.stringify(post.structuredData)} */}
        </script>
        <h1 className="font-bold text-3xl font-serif max-w-[650px]">
          {post.title}
        </h1>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
          <div className="rounded-md px-2 py-1 tracking-tighter">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </div>
        </div>
        {/* <Mdx code={post.body.code} tweets={tweets} /> */}
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </section>
    </article>
  );
}