import Link from 'next/link';
import Image from 'next/image';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import YoutubeEmbeddedVideo from 'app/YoutubeEmbeddedVideo';
import { Metadata } from 'next';
import { generateMetadataForPost } from 'app/guides/[slug]/generateMetadata';
import NewsletterSection, {
  defaultNewsletterDiariesSectionProps,
} from 'app/NewsletterSection';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { notFound } from 'next/navigation';
import { AppDownloadLink } from 'app/AppDownloadLink';
import BlogArticleFooter from './BlogArticleFooter';
import { Authors } from '../authors/AuthorsDataSource';
import { json } from 'stream/consumers';
import { DashboardTableOfContents } from 'app/toc';
import { getTableOfContents } from 'app/lib/toc';

export const dynamic = 'force-static';

const filteredBlogPosts =
  allPosts
    .filter((post) => !post.categories?.includes('legal') ?? false)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))) ?? [];

export async function generateStaticParams() {
  return filteredBlogPosts
    .filter((post) => !post.categories?.includes('guide') ?? false)
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
      <Link className='text-red-500' href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a className='text-red-500' {...props} />;
  }

  return (
    <a
      className='text-red-500'
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    />
  );
};

const scrollMarginClass = "scroll-m-32"

const H1 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 
    className={'font-heading mt-8 scroll-m-20 text-4xl font-bold ' + scrollMarginClass} 
    {...props} 
  />
);

const H2 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={"font-heading mt-12 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 " + scrollMarginClass}
    {...props}
  />
);

const H3 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={'font-heading mt-8 text-xl font-semibold tracking-tight ' + scrollMarginClass}
    {...props}
  />
);

function RoundedImage(props) {
  return (
    <Image
      alt={props.alt}
      width={1000}
      height={400}
      className='rounded-lg shadow-lg'
      {...props}
    />
  );
}

function LinkWithRel(props) {
  const imageHref = props.image;
  return (
    <Link className='bg-red-400' href={props.href} {...props}>
      <Image src={imageHref} alt={props.alt} />
    </Link>
  );
}

const components = {
  a: CustomLink,
  h1: H1,
  h2: H2,
  h3: H3,
  img: RoundedImage,
  YouTube: YoutubeEmbeddedVideo,
  LinkWithRel: LinkWithRel,
  AppDownloadLink: AppDownloadLink,
};

// https://www.sandromaglione.com/techblog/contentlayer-blog-template-with-nextjs
const PostLayout = async ({ params }: { params: { slug: string } }) => {
  const post = filteredBlogPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );

  if (post == null) {
    return notFound();
  }

  const author = Authors.find(
    (author) => author.id === (post.author ?? 'perjan-duro')
  );

  // find the index of the post in the array
  const postIndex = filteredBlogPosts.findIndex(
    (post) => post._raw.flattenedPath === params.slug
  );
  // check if the array contains an element for the previous post
  const previousPost = filteredBlogPosts[postIndex + 1];

  // 5 related articles
  const relatedArticles = filteredBlogPosts.slice(postIndex + 1, postIndex + 6);

  const isDiary = post.categories?.includes('diaries') ?? false;

  const Content = getMDXComponent(post.body.code);

  const toc = await getTableOfContents(post.body.raw);

  return (
    <>
      <main className="px-4 md:px-8 mx-auto max-w-6xl relative py-6 lg:grid lg:grid-cols-[1fr_300px] md:gap-5 lg:gap-10 lg:py-10 xl:gap-20">
      <div className="prose prose-p:text-base sm:prose-p:text-lg mx-auto sm:max-w-2xl md:max-w-2xl">
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                {post.title}
              </h1>
              <time dateTime={post.date} className='text-gray-500'>
                {format(parseISO(post.date), 'LLLL d, yyyy')}
              </time>
              <span className='text-gray-500'> • written by </span>
              <Link href={author.url} className='hover:text-teal-500'>
                {author.name}
              </Link>
            </div>
            <article className=''>
              {/* <article className=""> */}
              <section>
                <script
                  type='application/ld+json'
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(post.structuredData),
                  }}
                ></script>
                {post.coverImage !== undefined && (
                  <Image
                    className='rounded-lg shadow-lg'
                    src={post.coverImageUrl}
                    width={1368}
                    height={760}
                    alt={post.title}
                    priority={true}
                  />
                )}
                {isDiary && (
                  <blockquote>
                    <p>
                      MoneyCoach Diaries is my ongoing journey to turn my indie
                      app into a more sustainable part of my business. First
                      time reading? See what happened until now by tapping{' '}
                      <Link
                        href={'/blog?category=diaries'}
                        data-umami-event='view-all-diaries-from-diary-page'
                      >
                        <strong>this link</strong>
                      </Link>
                      .
                    </p>
                  </blockquote>
                )}
                <Content components={{ ...components }} />
              </section>
            </article>

            {previousPost && (
              <div className='border-t'>
                <div className='pt-10 mt-2 mx-auto max-w-2xl lg:mx-0 space-x-6'>
                  <div className='mb-10 text-slate-700 font-semibold flex items-center'>
                    <ChevronLeftIcon
                      className='h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                    <Link
                      href='/blog'
                      rel='follow'
                      className='group inline-flex items-center space-x-6'
                    >
                      <span className=' hover:text-slate-900'>
                        Back to Blog
                      </span>
                    </Link>
                  </div>
                </div>

                <BlogArticleFooter posts={relatedArticles} />
              </div>
            )}
          </div>

          {isDiary && (
            <div className='mt-20'>
              <NewsletterSection props={defaultNewsletterDiariesSectionProps} />
            </div>
          )}
        </div>

        <div className="hidden text-sm lg:block">
          <div className="sticky top-24 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>

      </main>
    </>
  );
};

export default PostLayout;
