import type { Lang } from '../consts';

/** 界面文案。想改导航名字、首页那段自我介绍，都在这里改。 */
export const ui = {
  zh: {
    'site.tagline': '关于 AI、学习，以及日子本身',
    'site.description':
      'lili 的个人网站。记录学习 AI 与做产品的笔记，也记录每天的想法与生活。',
    'nav.blog': '博客',
    'nav.diary': '日记',
    'nav.about': '关于',
    'nav.archive': '归档',
    'home.greeting': '你好，我是 lily。',
    'home.intro':
      '我在日本一家公司做 IT。白天管系统稳定、代码维护和运维，晚上用 AI 和 Cursor 做自己想做的东西。这里放我用 AI 做出来的项目、学习路上的笔记，和一些日记。',
    'home.latest': '最近',
    'home.more': '看全部',
    'blog.title': '博客',
    'blog.lede': '学习 AI、做产品、以及一切需要想清楚才写得出来的东西。',
    'diary.title': '日记',
    'diary.lede': '日子本身。不追求写得好，只追求写下来。',
    'archive.title': '归档',
    'archive.lede': '全部文章，按时间倒序。',
    'about.title': '关于',
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
      'lili の個人サイト。AI を学びプロダクトを作る過程のノートと、日々の記録。',
    'nav.blog': 'ブログ',
    'nav.diary': '日記',
    'nav.about': 'について',
    'nav.archive': 'アーカイブ',
    'home.greeting': 'こんにちは、lily です。',
    'home.intro':
      '日本の会社で IT の仕事をしています。昼はシステムの安定運用・コードの保守・運用まわり、夜は AI と Cursor で自分が作りたいものを作っています。ここには、AI で作ったプロジェクト、学びの途中のノート、そして日記を置いています。',
    'home.latest': '最近の記事',
    'home.more': 'すべて見る',
    'blog.title': 'ブログ',
    'blog.lede': 'AI の学習、ものづくり、そして考えないと書けないこと。',
    'diary.title': '日記',
    'diary.lede': '日々のこと。うまく書くことより、書き残すことを。',
    'archive.title': 'アーカイブ',
    'archive.lede': 'すべての記事を新しい順に。',
    'about.title': 'について',
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
      "lili's personal site. Notes from learning AI and building things, plus a diary.",
    'nav.blog': 'Blog',
    'nav.diary': 'Diary',
    'nav.about': 'About',
    'nav.archive': 'Archive',
    'home.greeting': "Hi, I'm lily.",
    'home.intro':
      "I'm a System Engineer working in Japan. By day, I focus on system stability, code maintenance, and operations. By night, I build cool stuff using AI & Cursor. Here I share those AI creations, the notes I make while learning, and a diary.",
    'home.latest': 'Recent',
    'home.more': 'See all',
    'blog.title': 'Blog',
    'blog.lede': 'Learning AI, building things, and anything I have to think through before I can write it.',
    'diary.title': 'Diary',
    'diary.lede': 'The days themselves. Not written well — just written down.',
    'archive.title': 'Archive',
    'archive.lede': 'Everything, newest first.',
    'about.title': 'About',
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
