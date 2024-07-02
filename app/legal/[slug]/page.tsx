import Image from "next/image";
import { getMDXComponent } from 'next-contentlayer/hooks'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import YoutubeEmbeddedVideo from "app/YoutubeEmbeddedVideo";
import { Metadata } from "next";
import { generateMetadataForPost } from "app/guides/[slug]/generateMetadata";


const legalPosts = allPosts.filter((post) => post.categories?.includes('legal'))

export async function generateStaticParams() {
  return legalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
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
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = legalPosts.find((post) => post._raw.flattenedPath === params.slug)

  const Content = getMDXComponent(post.body.code)

  return (
    <div className="py-32 px-6 lg:px-8">
    <div className="mx-auto max-w-3xl text-base leading-7">
      <article className="prose prose-neutral prose-quoteless">
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
          
          <time dateTime={post.date} className="text-gray-500">
              {format(parseISO(post.date), 'dd.MM.yyyy')}
          </time>
          <h1 className="mt-2 mb-0 text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <Content components={{...components}} />
        </section>
      </article>
    </div>
  </div>
  )
}

export default PostLayout