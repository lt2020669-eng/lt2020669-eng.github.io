// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 站点根地址（自有域名，Cloudflare Pages 托管；README「域名与托管」一节有完整说明）。
const SITE_URL = 'https://nakazawatei.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // 自我介绍已经并进各语言首页，旧的 /about/ 链接继续可用，跳回首页
  redirects: {
    '/zh/about': '/zh/',
    '/ja/about': '/ja/',
    '/en/about': '/en/',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: { zh: 'zh-CN', ja: 'ja-JP', en: 'en-US' },
      },
    }),
  ],
});
