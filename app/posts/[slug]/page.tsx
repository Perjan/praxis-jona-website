import Head from "next/head"
import Link from 'next/link'
import Image from "next/image";
import { notFound } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer/hooks'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
// import { useNavigation } from 'next/navigation'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
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
  return <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">{props.children}</h1>
}

const H3 = (props) => {
  return <h3 className="">{props.children}</h3>
}

const components = {
  // a: CustomLink,
  h1: H1,
  // h3: H3
};

// https://www.sandromaglione.com/techblog/contentlayer-blog-template-with-nextjs
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

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
              <Image src={post.coverImageUrl} width={1000} height={400} alt={post.title} /> 
            }
            
            <h1 className="mt-2 mb-0 text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">
              {post.title}
            </h1>
            <p className="text-base font-semibold leading-7 text-indigo-600 mb-6">{format(parseISO(post.date), "LLLL d, yyyy")}</p>
            <Content components={{...components}} />
          </section>
        </article>
      </div>
    </div>
  )
}

export default PostLayout