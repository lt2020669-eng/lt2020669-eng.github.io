import type { Lang } from '../consts';

/** 界面文案。想改导航名字、首页那段自我介绍，都在这里改。 */
export const ui = {
  zh: {
    'site.tagline': '关于 AI、学习，以及日子本身',
    'site.description':
      'lily（中澤　汀）的个人网站。自我介绍、学习 AI 与做产品的笔记，以及日记。',
    'nav.blog': '博客',
    'nav.diary': '日记',
    'nav.about': '自我介绍',
    'nav.services': '服务与报价',
    'nav.archive': '归档',
    'home.latest': '最近',
    'home.more': '看全部',
    'blog.title': '博客',
    'blog.lede': '学习 AI、做产品、以及一切需要想清楚才写得出来的东西。',
    'diary.title': '日记',
    'diary.lede': '日子本身。不追求写得好，只追求写下来。',
    'archive.title': '归档',
    'archive.lede': '全部文章，按时间倒序。',
    'post.published': '发表于',
    'post.updated': '更新于',
    'post.readingTime': '约 {n} 分钟',
    'post.backTo': '← 回到{section}',
    'post.translations': '其他语言版本',
    'post.prev': '上一篇',
    'post.next': '下一篇',
    'list.empty': '这里还什么都没有。第一篇正在路上。',
    'lang.switch': '语言',
    'theme.toggle': '切换明暗',
    'footer.rss': '订阅',
    'footer.builtWith': '用 Astro 写的，托管在 GitHub Pages。',
    'notfound.title': '这页不存在',
    'notfound.body': '你要找的东西可能被移动或者删掉了。',
    'notfound.home': '回首页',
    'tags.label': '标签',
  },
  ja: {
    'site.tagline': 'AI と、学びと、日々のこと',
    'site.description':
      'lily（中澤　汀）の個人サイト。自己紹介、AI とものづくりのノート、そして日々の記録。',
    'nav.blog': 'ブログ',
    'nav.diary': '日記',
    'nav.about': '自己紹介',
    'nav.services': 'サービス・料金',
    'nav.archive': 'アーカイブ',
    'home.latest': '最近の記事',
    'home.more': 'すべて見る',
    'blog.title': 'ブログ',
    'blog.lede': 'AI の学習、ものづくり、そして考えないと書けないこと。',
    'diary.title': '日記',
    'diary.lede': '日々のこと。うまく書くことより、書き残すことを。',
    'archive.title': 'アーカイブ',
    'archive.lede': 'すべての記事を新しい順に。',
    'post.published': '公開',
    'post.updated': '更新',
    'post.readingTime': '約 {n} 分',
    'post.backTo': '← {section}へ戻る',
    'post.translations': '他の言語で読む',
    'post.prev': '前の記事',
    'post.next': '次の記事',
    'list.empty': 'まだ何もありません。最初の一本を準備中です。',
    'lang.switch': '言語',
    'theme.toggle': 'テーマ切替',
    'footer.rss': '購読',
    'footer.builtWith': 'Astro で構築、GitHub Pages でホスティング。',
    'notfound.title': 'ページが見つかりません',
    'notfound.body': 'お探しのページは移動または削除された可能性があります。',
    'notfound.home': 'ホームへ',
    'tags.label': 'タグ',
  },
  en: {
    'site.tagline': 'On AI, on learning, and on the days themselves',
    'site.description':
      "lily's personal site. Self-introduction, notes from learning AI and building things, plus a diary.",
    'nav.blog': 'Blog',
    'nav.diary': 'Diary',
    'nav.about': 'Self-introduction',
    'nav.services': 'Services & Pricing',
    'nav.archive': 'Archive',
    'home.latest': 'Recent',
    'home.more': 'See all',
    'blog.title': 'Blog',
    'blog.lede': 'Learning AI, building things, and anything I have to think through before I can write it.',
    'diary.title': 'Diary',
    'diary.lede': 'The days themselves. Not written well — just written down.',
    'archive.title': 'Archive',
    'archive.lede': 'Everything, newest first.',
    'post.published': 'Published',
    'post.updated': 'Updated',
    'post.readingTime': '{n} min read',
    'post.backTo': '← Back to {section}',
    'post.translations': 'Also available in',
    'post.prev': 'Previous',
    'post.next': 'Next',
    'list.empty': 'Nothing here yet. The first one is on its way.',
    'lang.switch': 'Language',
    'theme.toggle': 'Toggle theme',
    'footer.rss': 'Subscribe',
    'footer.builtWith': 'Built with Astro, hosted on GitHub Pages.',
    'notfound.title': 'Page not found',
    'notfound.body': 'What you were looking for may have moved or been deleted.',
    'notfound.home': 'Go home',
    'tags.label': 'Tags',
  },
} as const;

export type UiKey = keyof (typeof ui)['zh'];

/** 取当前语言的一条界面文案，缺失时回落到中文。 */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey, vars?: Record<string, string | number>): string {
    const dict = ui[lang] as Record<string, string>;
    let value = dict[key] ?? (ui.zh as Record<string, string>)[key] ?? key;
    if (vars) {
      for (const [name, replacement] of Object.entries(vars)) {
        value = value.replace(`{${name}}`, String(replacement));
      }
    }
    return value;
  };
}
