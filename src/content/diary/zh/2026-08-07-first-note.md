---
title: '示例：日记长这样'
date: 2026-08-07
summary: '这是一篇示例日记，只在本地 npm run dev 里可见，不会出现在线上。'
tags: ['示例']
draft: true
---

这篇是**示例**。`draft: true` 的文章只在本地 `npm run dev` 里看得到，`npm run build` 会自动跳过，所以它不会出现在线上。

想开始写日记，就复制这个文件，或者直接跑：

```bash
npm run new -- diary zh "今天的标题"
```

正文用 Markdown 写就行：

- 列表这样写
- **加粗**、*斜体*、[链接](https://example.com)

> 引用长这样。

写完把 `draft` 改成 `false`，`git push`，两三分钟后线上就有了。

确认这套流程没问题之后，把这个文件删掉即可。
