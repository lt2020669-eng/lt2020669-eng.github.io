import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { LANGS, SITE, HTML_LANG, type Lang } from '../../consts';
import { ui } from '../../i18n/ui';
import { excerpt, getAllPosts } from '../../lib/posts';

export function getStaticPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const posts = await getAllPosts(lang);

  return rss({
    title: `${SITE.wordmark} — ${ui[lang]['site.tagline']}`,
    description: ui[lang]['site.description'],
    site: context.site ?? SITE.url,
    xmlns: { dc: 'http://purl.org/dc/elements/1.1/' },
    customData: `<language>${HTML_LANG[lang]}</language>`,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.date,
      description: post.summary || excerpt(post.entry.body, 140),
      link: post.href,
      categories: post.tags,
      customData: `<dc:creator>${SITE.author}</dc:creator>`,
    })),
  });
}
