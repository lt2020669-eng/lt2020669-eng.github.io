#!/usr/bin/env node
/**
 * 新建一篇文章。
 *
 *   npm run new -- blog zh "我的标题"
 *   npm run new -- diary ja "今日のタイトル"
 *   npm run new -- blog all "先用中文起个头"     # 三种语言各建一份，自动关联
 *   npm run new -- blog zh "标题" --slug my-slug  # 自己指定文件名
 *
 * 建出来的文件默认 draft: true，改成 false 再 push 才会上线。
 */

import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SECTIONS = ['blog', 'diary'];
const LANGS = ['zh', 'ja', 'en'];

const argv = process.argv.slice(2);
const flags = {};
const positional = [];
for (let i = 0; i < argv.length; i++) {
  if (argv[i].startsWith('--')) flags[argv[i].slice(2)] = argv[++i];
  else positional.push(argv[i]);
}

const [section, langArg, ...titleParts] = positional;
const title = titleParts.join(' ');

function bail(message) {
  console.error(`\n  ${message}\n`);
  console.error('  用法: npm run new -- <blog|diary> <zh|ja|en|all> "标题"\n');
  process.exit(1);
}

if (!SECTIONS.includes(section)) bail(`分区要是 ${SECTIONS.join(' 或 ')}，收到的是 "${section ?? ''}"`);
if (!langArg || (langArg !== 'all' && !LANGS.includes(langArg)))
  bail(`语言要是 ${LANGS.join(' / ')} 或 all，收到的是 "${langArg ?? ''}"`);
if (!title) bail('标题不能为空');

const today = new Date();
const stamp = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, '0'),
  String(today.getDate()).padStart(2, '0'),
].join('-');

/** 标题里的 ASCII 部分做文件名；全是中日文时退回 note-<时分> */
function slugify(text) {
  const ascii = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (ascii) return ascii.slice(0, 48);
  return `note-${String(today.getHours()).padStart(2, '0')}${String(today.getMinutes()).padStart(2, '0')}`;
}

const slug = flags.slug ?? slugify(title);
const targets = langArg === 'all' ? LANGS : [langArg];
const translationKey = flags.key ?? (targets.length > 1 ? `${stamp}-${slug}` : undefined);

const created = [];
for (const lang of targets) {
  const dir = join(ROOT, 'src', 'content', section, lang);
  mkdirSync(dir, { recursive: true });

  let name = `${stamp}-${slug}.md`;
  let n = 2;
  while (existsSync(join(dir, name))) name = `${stamp}-${slug}-${n++}.md`;

  const front = [
    '---',
    `title: '${title.replace(/'/g, "''")}'`,
    `date: ${stamp}`,
    "summary: ''",
    'tags: []',
    ...(translationKey ? [`translationKey: '${translationKey}'`] : []),
    'draft: true',
    '---',
    '',
    '',
  ].join('\n');

  const file = join(dir, name);
  writeFileSync(file, front, 'utf8');
  created.push(relative(ROOT, file));
}

console.log('');
for (const file of created) console.log(`  新建 ${file}`);
console.log('');
console.log('  写完后把 draft 改成 false，然后：');
console.log('    git add -A && git commit -m "post: 新文章" && git push');
console.log('');
