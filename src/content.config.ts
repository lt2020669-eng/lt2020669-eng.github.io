import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * 目录即语言：src/content/<集合>/<语言>/<文件名>.md
 * 例：src/content/blog/zh/2026-02-07-language.md → id = "zh/2026-02-07-language"
 *
 * 每篇文章只属于一种语言。想给某篇加翻译，就在另一个语言目录下建同名文件，
 * 并给三份都写上同一个 translationKey，站点会自动在文章底部互相链接。
 */
const frontmatter = z.object({
  title: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  /** 列表页与 SEO 描述用的一两句话。不写就自动取正文开头。 */
  summary: z.string().optional(),
  tags: z.array(z.string()).default([]),
  /** true 时只在 npm run dev 可见，不会发布到线上 */
  draft: z.boolean().default(false),
  /** 跨语言互链用的标识，同一篇文章的三个语言版本填同一个值 */
  translationKey: z.string().optional(),
});

const stripExtension = (entry: string) => entry.replace(/\\/g, '/').replace(/\.mdx?$/, '');

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
    generateId: ({ entry }) => stripExtension(entry),
  }),
  schema: frontmatter,
});

const diary = defineCollection({
  loader: glob({
    base: './src/content/diary',
    pattern: '**/*.{md,mdx}',
    generateId: ({ entry }) => stripExtension(entry),
  }),
  schema: frontmatter,
});

/** 「关于」页：src/content/about/{zh,ja,en}.md，直接改正文即可。 */
const about = defineCollection({
  loader: glob({
    base: './src/content/about',
    pattern: '*.md',
    generateId: ({ entry }) => stripExtension(entry),
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
  }),
});

export const collections = { blog, diary, about };
