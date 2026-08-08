/** 全站常量。改站名、社交链接、默认语言都在这里。 */

export const SITE = {
  /** 与 astro.config.mjs 里的 site 保持一致 */
  url: 'https://lt2020669-eng.github.io',
  /** 页眉的字标 */
  wordmark: 'lily',
  /** 作者名，用于 RSS / 版权 / 结构化数据 */
  author: 'lily',
  /** 建站年份，用于页脚 */
  since: 2025,
  /** 头像，放在 public/ 下 */
  avatar: '/avatar.webp',
} as const;

export const LINKS = {
  github: 'https://github.com/lt2020669-eng',
  email: 'hello@comesfromtheheart.online',
  /** 网页制作 / 商务合作的联系邮箱，首页与「关于」页都用它 */
  business: 'lt2020669@gmail.com',
  shop: 'https://www.comesfromtheheart.online',
} as const;

export const LANGS = ['zh', 'ja', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'zh';

/** 用于 <html lang> 与 hreflang */
export const HTML_LANG: Record<Lang, string> = {
  zh: 'zh-Hans',
  ja: 'ja',
  en: 'en',
};

/** 语言切换器上显示的名字 */
export const LANG_LABEL: Record<Lang, string> = {
  zh: '中文',
  ja: '日本語',
  en: 'EN',
};

export const SECTIONS = ['blog', 'diary'] as const;
export type Section = (typeof SECTIONS)[number];
