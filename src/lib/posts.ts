import { getCollection } from 'astro:content';
import { LANGS, SECTIONS, type Lang, type Section } from '../consts';

export type Post = {
  section: Section;
  lang: Lang;
  slug: string;
  /** 集合内的原始 id，形如 "zh/2026-02-07-language"，render() 时要用 */
  entry: any;
  title: string;
  date: Date;
  updated?: Date;
  summary?: string;
  tags: string[];
  translationKey?: string;
  href: string;
  minutes: number;
};

const isLang = (value: string): value is Lang => (LANGS as readonly string[]).includes(value);

/** 从 id 拆出语言与短链。目录不合法（不是 zh/ja/en）的条目会被丢弃。 */
function splitId(id: string): { lang: Lang; slug: string } | null {
  const [head, ...rest] = id.split('/');
  if (!head || rest.length === 0 || !isLang(head)) return null;
  return { lang: head, slug: rest.join('/') };
}

/**
 * 中日文按字数、英文按词数估算阅读时间。
 * 中日 400 字/分，拉丁 220 词/分，最少 1 分钟。
 */
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const text = body.replace(/```[\s\S]*?```/g, ' ').replace(/[#>*_`~\-\[\]()]/g, ' ');
  const cjk = (text.match(/[぀-ヿ㐀-䶿一-鿿豈-﫿]/g) ?? []).length;
  const latin = (text.match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g) ?? []).length;
  return Math.max(1, Math.round(cjk / 400 + latin / 220));
}

export function postHref(lang: Lang, section: Section, slug: string): string {
  return `/${lang}/${section}/${slug}/`;
}

function toPost(section: Section, entry: any): Post | null {
  const parts = splitId(entry.id);
  if (!parts) return null;
  const { lang, slug } = parts;
  return {
    section,
    lang,
    slug,
    entry,
    title: entry.data.title,
    date: entry.data.date,
    updated: entry.data.updated,
    summary: entry.data.summary,
    tags: entry.data.tags ?? [],
    translationKey: entry.data.translationKey,
    href: postHref(lang, section, slug),
    minutes: readingTime(entry.body),
  };
}

const byNewest = (a: Post, b: Post) => b.date.valueOf() - a.date.valueOf();

/** 生产构建时过滤掉 draft: true，dev 下全部可见。 */
async function loadSection(section: Section): Promise<Post[]> {
  const entries = await getCollection(section, ({ data }: any) =>
    import.meta.env.PROD ? data.draft !== true : true,
  );
  return entries
    .map((entry: any) => toPost(section, entry))
    .filter((post: Post | null): post is Post => post !== null);
}

/** 某个语言、某个分区的全部文章，新的在前。 */
export async function getPosts(section: Section, lang: Lang): Promise<Post[]> {
  const posts = await loadSection(section);
  return posts.filter((post) => post.lang === lang).sort(byNewest);
}

/** 某个语言下博客 + 日记的合集，新的在前。 */
export async function getAllPosts(lang: Lang): Promise<Post[]> {
  const lists = await Promise.all(SECTIONS.map((section) => loadSection(section)));
  return lists
    .flat()
    .filter((post) => post.lang === lang)
    .sort(byNewest);
}

/** 找同一篇文章的其他语言版本（靠 translationKey 关联）。 */
export async function getTranslations(post: Post): Promise<Post[]> {
  if (!post.translationKey) return [];
  const posts = await loadSection(post.section);
  return posts
    .filter((other) => other.translationKey === post.translationKey && other.lang !== post.lang)
    .sort((a, b) => LANGS.indexOf(a.lang) - LANGS.indexOf(b.lang));
}

/** 同分区同语言里的上一篇 / 下一篇。 */
export async function getNeighbours(post: Post): Promise<{ prev?: Post; next?: Post }> {
  const posts = await getPosts(post.section, post.lang);
  const index = posts.findIndex((item) => item.slug === post.slug);
  if (index === -1) return {};
  return { next: posts[index - 1], prev: posts[index + 1] };
}

const DATE_LOCALE: Record<Lang, string> = { zh: 'zh-CN', ja: 'ja-JP', en: 'en-GB' };

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(DATE_LOCALE[lang], {
    year: 'numeric',
    month: lang === 'en' ? 'long' : '2-digit',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** 正文开头抽一段当摘要（作者没写 summary 时用）。 */
export function excerpt(body: string | undefined, limit = 90): string {
  if (!body) return '';
  const plain = body
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return plain.length > limit ? `${plain.slice(0, limit)}…` : plain;
}
