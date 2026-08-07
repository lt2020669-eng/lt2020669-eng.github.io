---
title: 'Sample: this is what a diary entry looks like'
date: 2026-08-07
summary: 'A sample entry. It only shows up in local npm run dev and never reaches the live site.'
tags: ['sample']
draft: true
---

This is a **sample**. Entries with `draft: true` are visible only in local `npm run dev`; `npm run build` skips them, so they never reach the live site.

To start a diary entry, copy this file or run:

```bash
npm run new -- diary en "Today's title"
```

Write the body in Markdown:

- lists like this
- **bold**, *italic*, [links](https://example.com)

> Block quotes look like this.

When it's ready, change `draft` to `false` and `git push`. It's live a couple of minutes later.

Once you've seen the flow work, delete this file.
