# lili — 个人网站

三语（中 / 日 / 英）个人站，两个分区：**博客**（想清楚才写得出来的东西）和**日记**（日子本身）。

- 线上地址：https://lt2020669-eng.github.io
- 技术栈：Astro 7 静态站 + Markdown 写作 + GitHub Actions 自动部署 + GitHub Pages 托管
- 成本：0 元。没有服务器，没有数据库，没有后台。

---

## 日常写作流程（记住这三步就够了）

```bash
cd "C:\Users\admin\Desktop\lili-site"
npm run new -- blog zh "标题写这里"
```

1. **新建**：上面那条命令会在 `src/content/blog/zh/` 下建好一个 `.md` 文件，路径会打印出来。
2. **写**：用任意编辑器打开那个文件写正文，写完把 frontmatter 里的 `draft: true` 改成 `false`。
3. **发布**：

```bash
cd "C:\Users\admin\Desktop\lili-site"
git add -A
git commit -m "post: 新文章"
git push
```

推上去之后 GitHub Actions 会自动构建部署，**两三分钟后线上就有了**，不用做任何别的操作。

### `npm run new` 的几种用法

```bash
npm run new -- blog zh "我的标题"        # 中文博客
npm run new -- diary ja "今日のタイトル"   # 日语日记
npm run new -- blog all "先起个头"        # 中日英各建一份，自动互相关联
npm run new -- blog en "Title" --slug my-slug   # 自己指定文件名
```

### 本地预览

```bash
cd "C:\Users\admin\Desktop\lili-site"
npm run dev
```

浏览器打开 http://localhost:4321 。`draft: true` 的文章**只在这里**看得见，线上不会有——所以可以放心把没写完的东西留在仓库里。

---

## 文件放在哪

```
src/content/
  blog/zh/    blog/ja/    blog/en/     ← 博客，目录名就是语言
  diary/zh/   diary/ja/   diary/en/    ← 日记
  about/zh.md about/ja.md about/en.md  ← 「关于」页，直接改正文
```

**目录即语言**：文件放在 `zh/` 下就是中文文章，出现在 `/zh/` 的列表里。一篇文章只属于一种语言——不用被迫写三份。想给某篇加翻译，就在别的语言目录下建一份，然后给两份（或三份）写上同一个 `translationKey`，文章底部会自动出现「其他语言版本」的互链。

### frontmatter 字段

```yaml
---
title: '标题'              # 必填
date: 2026-08-08           # 必填，列表按这个排序
summary: '一两句话'         # 选填，列表页和搜索结果里显示
tags: ['英语', '学习方法']   # 选填
translationKey: 'xxx'      # 选填，跨语言互链用
updated: 2026-08-20        # 选填，改过的文章可以标一下
draft: true                # true = 只在本地可见，线上不会有
---
```

---

## 改站点设置

| 想改什么 | 改哪个文件 |
| --- | --- |
| 站名、作者名、GitHub / 邮箱链接 | `src/consts.ts` |
| 导航文字、首页那段自我介绍、各页标题 | `src/i18n/ui.ts` |
| 「关于」页正文（含项目表格、影响我的东西） | `src/content/about/{zh,ja,en}.md` |
| 头像 | 换掉 `public/avatar.webp` 和 `public/avatar.jpg`（512×512 方图，网页里自动裁成圆形；.jpg 那份是分享到社交平台时的预览图） |
| 颜色、字体、字号、版心宽度 | `src/styles/global.css` 最上面的 `:root` |
| 站点网址（换域名时） | `astro.config.mjs` 的 `SITE_URL` + `src/consts.ts` 的 `SITE.url` + `public/robots.txt` |

---

## 以后想换成自己的域名

1. 去注册商买域名（比如 `lili.blog`）。
2. 在域名的 DNS 里加四条 A 记录指向 `185.199.108.153` / `185.199.109.153` / `185.199.110.153` / `185.199.111.153`；用 `www` 子域的话再加一条 CNAME 指向 `lt2020669-eng.github.io`。
3. 在仓库里新建 `public/CNAME`，内容就一行：你的域名。
4. 把上面表格里「站点网址」那三处改成新域名，push。
5. GitHub 仓库 Settings → Pages → Custom domain 填上域名，勾 Enforce HTTPS。

---

## 常用命令

```bash
npm run dev       # 本地预览（含草稿）
npm run build     # 构建，会跳过所有 draft: true
npm run preview   # 预览构建结果
npm run new       # 新建文章
```

## 排错

- **推了但线上没变**：去仓库的 Actions 页看那次构建是不是红的。红的话点进去看报错，多半是 frontmatter 的 YAML 写错了（比如标题里有英文单引号没转义）。
- **本地 `npm run dev` 报错**：先 `npm install` 再试。
- **文章不显示**：99% 是 `draft` 还是 `true`，或者文件放错了语言目录。
