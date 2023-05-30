import Head from "next/head"
import Link from 'next/link'
import Image from "next/image";
import { notFound } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer/hooks'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import YoutubeEmbeddedVideo from "app/YoutubeEmbeddedVideo";
import { generateMetadataForPost } from "./generateMetadata";
import { Metadata } from "next";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const CustomLink = (props) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link className="bg-red-400" href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a className="bg-red-400" {...props} />;
  }

  return <a className="bg-red-400" target="_blank" rel="noopener noreferrer" {...props} />;
};

const H1 = (props) => {
  return <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{props.children}</h1>
}

const H3 = (props) => {
  return <h3 className="">{props.children}</h3>
}

function RoundedImage(props) {
  return <Image 
    alt={props.alt} 
    width={1000}
    height={400}
    className="rounded-lg shadow-lg" 
    {...props} />;
}

const components = {
  // a: CustomLink,
  h1: H1,
  // h3: H3
  img: RoundedImage,
  YouTube: YoutubeEmbeddedVideo
};

const guidesPosts = allPosts
  .filter((post) => post.categories?.includes('guide'))
  .sort((a, b) => compareDesc(new Date(b.date), new Date(a.date))) ?? []

export async function generateStaticParams() {
  return guidesPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  return generateMetadataForPost(params.slug);
}

// https://www.sandromaglione.com/techblog/contentlayer-blog-template-with-nextjs
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (post == null) {
    return notFound()
  }

  // find the index of the post in the array
  const postIndex = guidesPosts.findIndex((post) => post._raw.flattenedPath === params.slug)
// check if the array contains an element for the previous post
  const previousPost = guidesPosts[postIndex + 1]

  const Content = getMDXComponent(post.body.code)

  return (
    <div className="bg-white mt-2 sm:mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
          <time dateTime={post.date} className="text-gray-500">
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
        </div>
        <article className="prose prose-neutral mx-auto max-w-2xl lg:mx-0">
        {/* <article className=""> */}
           <section>
           <script type="application/ld+json" dangerouslySetInnerHTML={
              { __html: JSON.stringify(post.structuredData) }
            }>
             </script>
             { (post.coverImage !== undefined) &&
              <Image 
                className="rounded-lg shadow-lg" 
                src={post.coverImageUrl}
                width={1368} 
                height={760} 
                alt={post.title} 
              /> 
            }
            <Content components={{...components}} />
          </section>
        </article>
        
        {previousPost &&
          <div className='border-t'>
            <div className='pt-10 mt-10 mx-auto max-w-2xl lg:mx-0 inline-flex items-center justify-end space-x-6'>
              <p className='float-right'>Next Post</p>
              <Link href={previousPost.guideUrl} rel='follow' className="inline-flex space-x-6">
                <span className="rounded-full inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primaryDarker ring-1 ring-inset ring-indigo-600/10">
                  {previousPost.title}
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        }

      </div>
    </div>
    // <div className="mt-2 sm:mt-10 bg-red-500">
    //   <div className="max-w-7xl px-20">
    //   {/* <article className="prose prose-neutral bg-blue-500"> */}
    //     <article className=" bg-blue-500">
    //       <section>
    //         <script type="application/ld+json">
    //           {/* {JSON.stringify(post.structuredData)} */}
    //         </script>
    //         { (post.coverImage !== undefined) &&
    //           <Image 
    //             className="rounded-lg shadow-lg" 
    //             src={post.coverImageUrl}
    //             width={1000} 
    //             height={400} 
    //             alt={post.title} 
    //           /> 
    //         }
            
    //         <time dateTime={post.date} className="text-gray-500">
    //               {format(parseISO(post.date), 'LLLL d, yyyy')}
    //             </time>
    //         <h1 className="mt-2 mb-0 text-3xl font-bold tracking-tight sm:text-4xl">
    //           {post.title}
    //         </h1>
    //         <Content components={{...components}} />
    //       </section>
    //     </article>
    //   </div>
    // </div>
  )
}

export default PostLayout