import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`, // Type of file to parse (every mdx in all subfolders)
  contentType: 'mdx',
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    coverImage: {
      type: "string",
      description: "The filename of the cover image",
      required: false,
    },
    summary: {
      type: "string",
      description: "The summary of the post",
      required: false,
    },
    tags: { type: 'list', required: false, of: { type: 'string' } },
    categories: { type: 'list', required: false, of: { type: 'string' } }
  },
  computedFields: {
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath,
      },
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    coverImageUrl: {
      type: "string",
      required: false,
      resolve: (post) => `/images/blog-images/${post.coverImage}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts", // Source directory where the content is located
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});