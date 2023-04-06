import Head from "next/head"
import Link from 'next/link'
import Image from "next/image";
import { notFound } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer/hooks'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import YoutubeEmbeddedVideo from "app/YoutubeEmbeddedVideo";

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

// https://www.sandromaglione.com/techblog/contentlayer-blog-template-with-nextjs
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

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
             <script type="application/ld+json">
               {/* {JSON.stringify(post.structuredData)} */}
             </script>
             { (post.coverImage !== undefined) &&
              <Image 
                className="rounded-lg shadow-lg" 
                src={post.coverImageUrl}
                width={1000} 
                height={400} 
                alt={post.title} 
              /> 
            }
            <Content components={{...components}} />
          </section>
        </article>
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