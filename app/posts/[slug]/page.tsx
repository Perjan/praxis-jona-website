import Head from "next/head"
import Link from 'next/link'
import { notFound } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer/hooks'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import MajorFeatureSection from "app/MajorFeatureSection";
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

// export async function getStaticPaths() {
//   return {
//     paths: allPosts.map((blog) => ({ params: { slug: blog.slug } })),
//     fallback: false,
//   }
// }

// export async function getStaticProps({ params }) {
//   const blog = allPosts.find((blog) => blog.slug === params.slug)
//   return { props: { blog } }
// }

// https://www.sandromaglione.com/techblog/contentlayer-blog-template-with-nextjs
// export default async function PostLayout({ params }) {
//   // const router = useNavigation()
//   //same name as name of your file, can be [slug].js; [specialId].js - any name you want
//   // const { slug } = router.query;
//   console.log({ params });

//   const post = allPosts.find((post) => post.slug === params.slug);

//   if (!post) {
//     notFound();
//   }

//   // const tweets = await getTweets(post.tweetIds);
//   console.log("Code is " + post.body.code);
//   const MDXContent = getMDXComponent(post.body.code);

//   return (
//     <div className="py-32 px-6 lg:px-8">
//       <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
//         <article className="prose">
//           <section>
//             <script type="application/ld+json">
//               {/* {JSON.stringify(post.structuredData)} */}
//             </script>
//             <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               {post.title}
//             </h1>
//             <p className="text-base font-semibold leading-7 text-indigo-600 mb-6">{format(parseISO(post.date), "LLLL d, yyyy")}</p>
//             {/* <Mdx code={post.body.code} tweets={tweets} /> */}
//             <MDXContent />
//             {/* <div dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
//           </section>
//         </article>
//       </div>
//     </div>
//   );
// }


const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  const Content = getMDXComponent(post.body.code)

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
            <Content />
            {/* <div dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
          </section>
        </article>
      </div>
    </div>
    // <article className="py-8 mx-auto max-w-xl">
    //   <div className="mb-8 text-center">
    //     <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
    //       {format(parseISO(post.date), 'LLLL d, yyyy')}
    //     </time>
    //     <h1>{post.title}</h1>
    //   </div>
    //   <Content />
    // </article>
  )
}

export default PostLayout