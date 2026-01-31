import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-vercel";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkSmartypants from "remark-smartypants";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const path_to_layout = join(__dirname, "./src/lib/layouts/base.svelte");
const blog_layout = join(__dirname, "./src/lib/layouts/blog.svelte");
const projects_layout = join(__dirname, "./src/lib/layouts/project.svelte");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },

  extensions: [".md", ".svelte", ".svx"],

  preprocess: [
    mdsvex({
      extensions: [".md", ".svx"],
      layout: {
        blog: blog_layout,
        project: projects_layout,
        _: path_to_layout,
      },
      remarkPlugins: [remarkGfm, remarkBreaks, remarkSmartypants],
      highlight: true,
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "rose-pine",
            keepBackground: false,
          },
        ],
      ],
    }),
  ],
};

export default config;
