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
  console.log({ params });

  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // const tweets = await getTweets(post.tweetIds);

  return (
    <div className="py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <article className="prose">
          <section>
            <script type="application/ld+json">
              {/* {JSON.stringify(post.structuredData)} */}
            </script>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="text-base font-semibold leading-7 text-indigo-600 mb-6">{format(parseISO(post.date), "LLLL d, yyyy")}</p>
            {/* <Mdx code={post.body.code} tweets={tweets} /> */}
            <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
          </section>
        </article>
      </div>
    </div>
  );
}