import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { z } from 'zod';

const SITE_URL = 'https://praxisjona.de';

// Mirrors app/(de)/blog/authors/AuthorsDataSource.jsx. Kept inline because this
// config runs outside the Next.js path aliases and cannot import from app/.
const AUTHORS = {
  'jonida-gjolli': {
    name: 'Dr. med. Jonida Gjolli',
    jobTitle: 'Fachärztin für Innere Medizin',
    url: `${SITE_URL}/blog/authors/jonida-gjolli`,
  },
};

const DEFAULT_AUTHOR_ID = 'jonida-gjolli';
const POSTS_DIRECTORY = 'posts';

// content-collections trims `content`. Contentlayer kept the body exactly as written
// after the front matter, which feeds the excerpt, so read the untrimmed body.
async function readRawBody(filePath: string) {
  const source = await readFile(path.join(process.cwd(), POSTS_DIRECTORY, filePath), 'utf8');
  const match = /^---\r?\n[\s\S]*?\r?\n---[^\S\r\n]*(?:\r?\n|$)/.exec(source);
  return match ? source.slice(match[0].length) : source;
}

function authorSchema(authorId?: string): PersonSchema {
  const author = AUTHORS[authorId ?? DEFAULT_AUTHOR_ID] ?? AUTHORS[DEFAULT_AUTHOR_ID];

  return {
    '@type': 'Person',
    name: author.name,
    jobTitle: author.jobTitle,
    url: author.url,
  };
}

type PersonSchema = { '@type': string; name: string; jobTitle: string; url: string };
type OrganizationSchema = { '@type': string; name: string; logo: { '@type': string; url: string } };
// No post sets a publisher today; the blog layout falls back to the practice organization.
type BlogPostingSchema = {
  '@context': string;
  '@type': string;
  headline: string;
  datePublished: string;
  dateModified: string;
  image: string;
  author: PersonSchema;
  publisher?: OrganizationSchema;
};

const posts = defineCollection({
  name: 'posts',
  directory: POSTS_DIRECTORY,
  include: '**/*.mdx', // Every mdx file in all subfolders
  schema: z.object({
    content: z.string(),
    // The title of the post
    title: z.string(),
    // The date of the post, stored as an ISO 8601 string
    date: z.union([z.string(), z.date()]),
    // The filename of the cover image
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
    coverImageIsAiGenerated: z.boolean().optional(),
    // The id of the author. Should match an Author's id in AuthorsDataSource.jsx
    author: z.string().optional(),
    // Whether the post should be hidden from the blog index
    isHidden: z.boolean().optional(),
    // The language of the post
    language: z.string().optional(),
    // The slug of the Italian version of the post
    slugIt: z.string().optional(),
    // The slug of the English version of the post
    slugEn: z.string().optional(),
    // The slug of the German version of the post
    slugDe: z.string().optional(),
    // The summary of the post
    summary: z.string().optional(),
    // Preserve author-supplied metadata without automatic shortening.
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
  }),
  transform: async (document, context) => {
    const { content, _meta, ...fields } = document;
    const sourceFilePath = _meta.filePath;
    const sourceFileDir = path.posix.dirname(sourceFilePath);
    const flattenedPath = _meta.path;
    const date = new Date(fields.date).toISOString();
    const raw = await readRawBody(sourceFilePath);
    const code = await compileMDX(context, document, {
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
    });

    // `description` and `url` are added at render time in BlogPostLayout, from the same
    // helpers as the page metadata, because they depend on other computed fields.
    const structuredData: BlogPostingSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: fields.title,
      datePublished: date,
      dateModified: date,
      image: `${SITE_URL}/images/blog-images/${fields.coverImage}`,
      author: authorSchema(fields.author),
    };

    return {
      ...fields,
      date,
      // Same document identity fields as the former Contentlayer output.
      _id: sourceFilePath,
      _raw: {
        sourceFilePath,
        sourceFileName: _meta.fileName,
        sourceFileDir,
        contentType: 'mdx',
        flattenedPath,
      },
      type: 'Post' as const,
      body: {
        raw,
        code,
      },
      slug: flattenedPath,
      url: fields.language === 'en'
        ? `/en/blog/${flattenedPath.replace(/^en\//, '')}`
        : `/blog/${flattenedPath}`,
      guideUrl: `/guides/${flattenedPath}`,
      coverImageUrl: `/images/blog-images/${fields.coverImage}`,
      summaryOrExcerpt: fields.summary || getWordStr(raw, 40),
      structuredData,
    };
  },
});

export default defineConfig({
  content: [posts],
});

export function getWordStr(str: string, wordCount: number) {
  return str.split(/\s+/).slice(0, wordCount).join(' ');
}
