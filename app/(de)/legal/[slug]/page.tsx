import Image from "next/image";
import { MDXContent } from 'app/components/MDXContent'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import YoutubeEmbeddedVideo from "app/YoutubeEmbeddedVideo";
import { Metadata } from "next";
import { generateMetadataForPost } from "app/(de)/guides/[slug]/generateMetadata";


const legalPosts = allPosts.filter((post) => post.categories?.includes('legal'))

export async function generateStaticParams() {
  return legalPosts
    .filter((post) => post._raw.flattenedPath === "impressum-datenschutz")
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata | undefined> {
  const params = await props.params;
  return generateMetadataForPost(params.slug);
}

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
const LegalPostLayout = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = legalPosts.find((post) => post._raw.flattenedPath === params.slug)

  return (
    <div className="py-32 px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-base leading-7">
      <article className="prose prose-neutral prose-quoteless">
        <section>
          { (post.coverImage !== undefined) &&
            <Image 
              className="rounded-lg shadow-lg" 
              src={post.coverImageUrl}
              width={1000} 
              height={400} 
              alt={post.title} 
            /> 
          }
          
          <time dateTime={post.date} className="text-gray-500">
              {format(parseISO(post.date), 'dd.MM.yyyy')}
          </time>
          <h1 className="mt-2 mb-0 text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <MDXContent code={post.body.code} components={{...components}} />
        </section>
      </article>
    </div>
  </div>
  )
}

export default LegalPostLayout
