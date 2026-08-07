// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 站点根地址。以后换成自有域名时，改这里 + public/CNAME + README 说明即可。
const SITE_URL = 'https://lt2020669-eng.github.io';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: { zh: 'zh-CN', ja: 'ja-JP', en: 'en-US' },
      },
    }),
  ],
});
