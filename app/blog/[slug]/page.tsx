import Link from 'next/link'
import Image from "next/image"
import { getMDXComponent } from 'next-contentlayer/hooks'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import YoutubeEmbeddedVideo from "app/YoutubeEmbeddedVideo";
import { Metadata } from "next";
import { generateMetadataForPost } from "app/guides/[slug]/generateMetadata";
import NewsletterSection from 'app/NewsletterSection'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  return generateMetadataForPost(params.slug);
}

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

  const isDiary = post.categories?.includes("diaries") ?? false


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
             { isDiary &&
              <Image 
                className="rounded-lg shadow-lg" 
                src={post.coverImageUrl}
                width={1000} 
                height={400} 
                alt={post.title} 
              /> 
            }
            {isDiary &&
              <blockquote>
              <p>MoneyCoach Diaries is my ongoing journey to turn my indie app into a more sustainable part of my business. First time reading? Go to <Link href={"/blog"}>Blog</Link> and select <strong>Diaries</strong>.</p>
            </blockquote>
                }  
            <Content components={{...components}} />
          </section>
        </article>
      </div>
      { isDiary &&
        <div className='mt-20'>
          <NewsletterSection title="Subscribe to MoneyCoach Diaries" />
        </div>
      }
    </div>
  )
}

export default PostLayout