import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`, // Type of file to parse (every mdx in all subfolders)
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    coverImage: {
      type: 'string',
      description: 'The filename of the cover image',
      required: false,
    },
    author: {
      type: 'string',
      description:
        "The id of the author. Should match an Author's id in the Authors.tsx file",
      required: false,
    },
    isHidden: {
      type: 'boolean',
      description: 'Whether the post should be hidden from the blog index',
      required: false,
    },
    language: {
      type: 'string',
      description: 'The language of the post',
      required: false,
    },
    slugIt: {
      type: 'string',
      description: 'The slug of the italian version of the post',
      required: false,
    },
    slugEn: {
      type: 'string',
      description: 'The url of the english version of the post',
      required: false,
    },
    slugDe: {
      type: 'string',
      description: 'The url of the english version of the post',
      required: false,
    },
    summary: {
      type: 'string',
      description: 'The summary of the post',
      required: false,
    },
    tags: { type: 'list', required: false, of: { type: 'string' } },
    categories: { type: 'list', required: false, of: { type: 'string' } },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    guideUrl: {
      type: 'string',
      resolve: (post) => `/guides/${post._raw.flattenedPath}`,
    },
    coverImageUrl: {
      type: 'string',
      required: false,
      resolve: (post) => `/images/blog-images/${post.coverImage}`,
    },
    summaryOrExcerpt: {
      type: 'string',
      required: true,
      resolve: (post) => post.summary || getWordStr(post.body.raw, 40),
    },
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.date,
        description: doc.summaryOrExcerpt,
        image: `https://praxisjona.de/images/blog-images/${doc.coverImage}`,
        url: doc.url,
        author: {
          '@type': 'Person',
          name: 'Perjan Duro',
          url: 'https://twitter.com/perjanduro',
        },
      }),
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts', // Source directory where the content is located
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});

export function getWordStr(str, wordCount) {
  return str.split(/\s+/).slice(0, wordCount).join(' ');
}
