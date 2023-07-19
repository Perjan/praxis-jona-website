import Link from 'next/link'
import Image from "next/image"
import { getMDXComponent } from 'next-contentlayer/hooks'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import YoutubeEmbeddedVideo from "app/YoutubeEmbeddedVideo";
import { Metadata } from "next";
import { generateMetadataForPost } from "app/guides/[slug]/generateMetadata";
import NewsletterSection, { defaultNewsletterDiariesSectionProps } from 'app/NewsletterSection'
import { 
  ChevronLeftIcon,
  ChevronRightIcon 
} from '@heroicons/react/24/outline'
import { notFound } from 'next/navigation'
import { AppDownloadLink } from 'app/AppDownloadLink'

export const dynamic = "force-static"

const filteredBlogPosts = allPosts
  .filter((post) => !post.categories?.includes("legal") ?? false)
  .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))) ?? []


export async function generateStaticParams() {
  return filteredBlogPosts
    .filter((post) => !post.categories?.includes("guide") ?? false)
    .map((post) => ({
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

function LinkWithRel(props) {
  const imageHref = props.image;
  return <Link className="bg-red-400" href={props.href} {...props}>
    <img src={imageHref} alt={props.alt} />
  </Link>
}

const components = {
  // a: CustomLink,
  h1: H1,
  // h3: H3
  img: RoundedImage,
  YouTube: YoutubeEmbeddedVideo,
  LinkWithRel: LinkWithRel,
  AppDownloadLink: AppDownloadLink
};

// https://www.sandromaglione.com/techblog/contentlayer-blog-template-with-nextjs
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = filteredBlogPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (post == null) {
    return notFound()
  }

  // find the index of the post in the array
  const postIndex = filteredBlogPosts.findIndex((post) => post._raw.flattenedPath === params.slug)
  // check if the array contains an element for the previous post
  const previousPost = filteredBlogPosts[postIndex + 1]

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
            <script type="application/ld+json" dangerouslySetInnerHTML={
              { __html: JSON.stringify(post.structuredData) }
            }>
            </script>
            {(post.coverImage !== undefined) &&
              <Image
                className="rounded-lg shadow-lg"
                src={post.coverImageUrl}
                width={1368}
                height={760}
                alt={post.title}
                priority={true}
              />
            }
            {isDiary &&
              <blockquote>
                <p>MoneyCoach Diaries is my ongoing journey to turn my indie app into a more sustainable part of my business. First time reading? See what happened until now by tapping <Link href={"/blog?category=diaries"}><strong>this link</strong></Link>.</p>
              </blockquote>
            }
            <Content components={{ ...components }} />
          </section>
        </article>

        {previousPost &&
          <div className='border-t'>
            <div className='pt-10 mt-10 mx-auto max-w-2xl lg:mx-0 space-x-6'>
            <div className="mb-10 text-slate-700 font-semibold flex items-center">
            <ChevronLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              <Link href="/blog" rel='follow' className="group inline-flex items-center space-x-6">
                <span className=" hover:text-slate-900">
                  Back to Blog
                </span>
              </Link>
              <span className="group ml-auto inline-flex items-center hover:text-slate-900">
              <Link href={previousPost.url} rel='follow' className="space-x-10">
                  {previousPost.title}
              </Link>
              <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </div>
            </div>
          </div>
        }
      </div>

      {isDiary &&
        <div className='mt-20'>
          <NewsletterSection props={defaultNewsletterDiariesSectionProps} />
        </div>
      }

    </div>
  )
}

export default PostLayout