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
      '我是 中澤　汀（lily）。2025 年 3 月IT专门学校毕业。2025年4月到2026年4月IT日企就职期间，曾经参与富士通和日立，东芝等企业的系统开发项目。并在全球知名的汽车零部件与系统技术供应商马瑞利（Marelli）的汽车零部件ERP系统做运维和保守工作。2026年4月使用cursor和Gemini搭建了工业翻译系统，为中国企业巨来（重庆）通风设备股份有限公司翻译出海工业级画册。曾经为Japan IT Week在日本东京有明国际展览中心（Tokyo Big Sight）中做专业翻译。依次为纹身工作室，可再生能源公司，TK直播工作室搭建轻交互网站，2026年8月上线个人品牌comesfromtheheart（CFTH）人宠合照肖像照&送礼自定义设计平台独立站。目前担任L&M合同会社的取締役和环球科技株式会社顾问与CFTH品牌创始人',
    'home.languages': '语言：中文、日语、英语。',
    'home.contact': '请求网页制作 / 商务合作等请联系：',
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
      '中澤　汀（lily）です。2025年3月に IT 専門学校を卒業しました。2025年4月から2026年4月まで日本の IT 企業に在籍し、富士通・日立・東芝などの企業向けシステム開発プロジェクトに参加しました。世界的に知られる自動車部品・システム技術サプライヤーであるマレリ（Marelli）の自動車部品 ERP システムの運用・保守も担当しました。2026年4月には Cursor と Gemini を使って工業翻訳システムを構築し、中国企業・巨来（重慶）通風設備股份有限公司の海外向け工業カタログ翻訳を支援しました。Japan IT Week において、東京ビッグサイト（Tokyo Big Sight）での専門通訳も経験しています。タトゥースタジオ、再生可能エネルギー会社、TK ライブ配信スタジオ向けの軽量インタラクティブサイトを順次構築し、2026年8月には個人ブランド comesfromtheheart（CFTH）——人とペットの肖像写真、ギフトのカスタムデザイン、想いをつなぐプラットフォーム——の独立サイトを公開しました。現在は L&M 合同会社の取締役、環球科技株式会社の顧問、CFTH ブランド創設者を務めています。',
    'home.languages': '言語：中国語・日本語・英語。',
    'home.contact': 'Web 制作・ビジネス提携などのご依頼：',
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
      "I'm Nanasawa Nagisa (lily). I graduated from an IT vocational school in March 2025. From April 2025 to April 2026, while working at a Japanese IT company, I took part in system development projects for Fujitsu, Hitachi, Toshiba, and other clients. I also handled operations and maintenance for the automotive parts ERP system at Marelli, a globally known supplier of automotive components and systems. In April 2026, I built an industrial translation system with Cursor and Gemini to translate overseas-ready industrial catalogs for Julai (Chongqing) Ventilation Equipment Co., Ltd. I have worked as a professional interpreter at Japan IT Week at Tokyo Big Sight. I have built lightweight interactive websites for a tattoo studio, a renewable energy company, and TK Live Streaming Studio. In August 2026, I launched my personal brand comesfromtheheart (CFTH), an independent site for pet-and-owner portrait photos, custom gift design, and heartfelt connections. I currently serve as Director of L&M LLC, advisor to Global Technology Co., Ltd., and founder of the CFTH brand.",
    'home.languages': 'Languages: Chinese, Japanese, and English.',
    'home.contact': 'For web design, business cooperation and other inquiries: ',
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
