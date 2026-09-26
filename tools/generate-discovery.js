#!/usr/bin/env node
// Generate crawlable reading pages and discovery files from the same data as the app.
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { loadSite } = require('./validate-content');

const root = path.join(__dirname, '..');
const langs = ['ru', 'en'];

function escapeHtml(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[ch]);
}

function rich(value) {
  // Content validation permits only these simple tags, with no attributes.
  return escapeHtml(value).replace(/&lt;(\/?)((?:b|i|em|strong|br))&gt;/gi, '<$1$2>');
}

function plain(value) {
  return String(value == null ? '' : value).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function pick(value, lang) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value[lang] : value;
}

function paragraphs(value, lang) {
  const content = pick(value, lang);
  return (Array.isArray(content) ? content : [content]).filter(Boolean).map((line) => `<p>${rich(line)}</p>`).join('');
}

function url(base, rel) { return new URL(rel, base).href; }
function localHref(from, to) { return path.posix.relative(path.posix.dirname(from), to); }
function xml(value) { return escapeHtml(value); }

function route(lang, level, kind, id) {
  return `learn/${lang}/${level.toLowerCase()}/${kind}/${id}.html`;
}

function page({ base, lang, rel, title, description, body, alternates }) {
  const other = lang === 'ru' ? 'en' : 'ru';
  const strings = lang === 'ru'
    ? { site: 'Español con amigos', all: 'Все темы', app: 'Открыть интерактивный сайт', skip: 'К содержанию' }
    : { site: 'Español con amigos', all: 'All topics', app: 'Open the interactive site', skip: 'Skip to content' };
  const head = `<!doctype html>\n<html lang="${lang}">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>${escapeHtml(title)} | Español con amigos</title>\n<meta name="description" content="${escapeHtml(description)}">\n<link rel="canonical" href="${escapeHtml(url(base, rel))}">\n<link rel="alternate" hreflang="ru" href="${escapeHtml(url(base, alternates.ru))}">\n<link rel="alternate" hreflang="en" href="${escapeHtml(url(base, alternates.en))}">\n<link rel="stylesheet" href="${escapeHtml(localHref(rel, 'css/reading.css'))}">\n<link rel="describedby" href="${escapeHtml(localHref(rel, 'llms.txt'))}">\n</head>\n<body>\n<a class="skip" href="#content">${strings.skip}</a>\n<header><div class="shell"><a class="brand" href="${escapeHtml(localHref(rel, 'index.html'))}">Español con amigos</a><nav aria-label="${lang === 'ru' ? 'Навигация' : 'Navigation'}"><a href="${escapeHtml(localHref(rel, `learn/${lang}/index.html`))}">${strings.all}</a><a href="${escapeHtml(localHref(rel, 'index.html'))}">${strings.app}</a><a lang="${other}" href="${escapeHtml(localHref(rel, alternates[other]))}">${other.toUpperCase()}</a></nav></div></header>\n<main id="content" class="shell">\n${body}\n</main>\n<footer><div class="shell">${strings.site} · <a href="${escapeHtml(localHref(rel, `learn/${lang}/index.html`))}">${strings.all}</a></div></footer>\n</body>\n</html>\n`;
  return head;
}

function blockHtml(block, lang) {
  const heading = block.heading ? `<h3>${escapeHtml(pick(block.heading, lang))}</h3>` : '';
  let content = '';
  if (block.type === 'text') content = paragraphs(block.body, lang);
  else if (block.type === 'rules') content = block.items.map((item) => `<section><h4>${escapeHtml(pick(item.title, lang))}</h4>${item.es ? `<p lang="es">${rich(item.es)}</p>` : ''}${paragraphs(item.body, lang)}</section>`).join('');
  else if (block.type === 'triggers') content = block.items.map((item) => `<section><h4>${escapeHtml(pick(item.title, lang))}</h4>${item.sub ? paragraphs(item.sub, lang) : ''}<p lang="es">${item.phrases.map(rich).join(' · ')}</p>${item.body ? paragraphs(item.body, lang) : ''}${item.ex ? `<p lang="es">${rich(item.ex.es)}</p><p>${rich(item.ex[lang])}</p>` : ''}</section>`).join('');
  else if (block.type === 'conj') content = block.verbs.map((verb) => `<section><h4 lang="es">${rich(verb.inf)}</h4>${verb.tr ? paragraphs(verb.tr, lang) : ''}${verb.variants.map((variant) => `<h5>${escapeHtml(pick(variant.label, lang))}</h5><table><tbody>${variant.rows.map((row) => `<tr><th scope="row" lang="es">${rich(row[0])}</th><td lang="es">${rich(row[1])}</td></tr>`).join('')}</tbody></table>`).join('')}</section>`).join('');
  else if (block.type === 'table') content = `<div class="table-wrap"><table><thead><tr>${block.head.map((cell) => `<th scope="col">${rich(pick(cell, lang))}</th>`).join('')}</tr></thead><tbody>${block.rows.map((row) => `<tr>${row.map((cell, i) => `<${i === 0 && !block.head[0] ? 'th scope="row"' : 'td'}>${rich(pick(cell, lang))}</${i === 0 && !block.head[0] ? 'th' : 'td'}>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  else if (block.type === 'markers') content = block.groups.map((group) => `<section><h4>${escapeHtml(pick(group.title, lang))}</h4><p lang="es">${group.tags.map(rich).join(' · ')}</p></section>`).join('');
  else if (block.type === 'examples') content = `<ul class="examples">${block.items.map((item) => `<li><span lang="es">${rich(item.es)}</span><span>${rich(item[lang])}</span></li>`).join('')}</ul>`;
  else if (block.type === 'tip') content = `<section><h4>${escapeHtml(pick(block.title, lang))}</h4>${paragraphs(block.body, lang)}</section>`;
  return `<div class="lesson-block">${heading}${content}</div>`;
}

function topicPage(base, lang, level, kind, topic) {
  const rel = route(lang, level.id, kind, topic.id);
  const title = pick(topic.title, lang);
  const desc = kind === 'grammar' ? pick(topic.summary || topic.hero.sub, lang)
    : lang === 'ru' ? `${title}: ${topic.words.length} испанских слов с переводом и примерами. Уровень ${level.id}.`
      : `${title}: ${topic.words.length} Spanish words with translations and examples. Level ${level.id}.`;
  const parent = localHref(rel, `learn/${lang}/${level.id.toLowerCase()}/index.html`);
  const app = localHref(rel, 'index.html') + `#/${level.id.toLowerCase()}/${kind}/${topic.id}`;
  const intro = `<nav class="crumb"><a href="${escapeHtml(localHref(rel, `learn/${lang}/index.html`))}">${lang === 'ru' ? 'Все темы' : 'All topics'}</a> / <a href="${escapeHtml(parent)}">${level.id}</a></nav><p class="eyebrow">${level.id} · ${kind === 'words' ? lang === 'ru' ? 'Слова' : 'Vocabulary' : lang === 'ru' ? 'Грамматика' : 'Grammar'}</p><h1>${escapeHtml(title)}</h1><p class="lead">${escapeHtml(desc)}</p>`;
  let content;
  if (kind === 'words') content = `<dl class="words">${topic.words.map((word) => `<div><dt lang="es">${escapeHtml(word.es)}</dt><dd>${escapeHtml(word[lang])}${word.ex ? `<p lang="es">${escapeHtml(word.ex.es)}</p><p>${escapeHtml(word.ex[lang])}</p>` : ''}</dd></div>`).join('')}</dl>`;
  else content = `<p class="hero-es" lang="es">${rich(topic.hero.es)}</p>` + topic.tabs.map((tab) => `<section class="lesson"><h2>${escapeHtml(pick(tab.label, lang))}</h2>${tab.blocks.map((block) => blockHtml(block, lang)).join('')}</section>`).join('');
  const action = `<p class="action"><a href="${escapeHtml(app)}">${kind === 'words' ? lang === 'ru' ? 'Учить слова и пройти тест →' : 'Study flashcards and take a quiz →' : lang === 'ru' ? 'Открыть урок и тест →' : 'Open the lesson and quiz →'}</a></p>`;
  const alt = Object.fromEntries(langs.map((l) => [l, route(l, level.id, kind, topic.id)]));
  return { rel, html: page({ base, lang, rel, title, description: desc, body: intro + content + action, alternates: alt }) };
}

function levelPage(base, lang, level, data) {
  const rel = `learn/${lang}/${level.id.toLowerCase()}/index.html`;
  const title = `${level.id} — ${pick(level.name, lang)}`;
  const description = pick(level.canDo, lang);
  const group = (kind, topics) => `<section><h2>${kind === 'grammar' ? lang === 'ru' ? 'Грамматика' : 'Grammar' : lang === 'ru' ? 'Слова' : 'Vocabulary'}</h2><ul class="topic-list">${topics.map((topic) => `<li><a href="${escapeHtml(localHref(rel, route(lang, level.id, kind, topic.id)))}">${escapeHtml(pick(topic.title, lang))}</a>${kind === 'grammar' ? `<p>${escapeHtml(pick(topic.summary || topic.hero.sub, lang))}</p>` : ''}</li>`).join('')}</ul></section>`;
  const body = `<nav class="crumb"><a href="${escapeHtml(localHref(rel, `learn/${lang}/index.html`))}">${lang === 'ru' ? 'Все темы' : 'All topics'}</a></nav><h1>${escapeHtml(title)}</h1><p class="lead">${escapeHtml(description)}</p>${group('grammar', data.grammar(level.id))}${group('words', data.vocab(level.id))}`;
  const alt = Object.fromEntries(langs.map((l) => [l, `learn/${l}/${level.id.toLowerCase()}/index.html`]));
  return { rel, html: page({ base, lang, rel, title, description, body, alternates: alt }) };
}

function catalogPage(base, lang, data) {
  const rel = `learn/${lang}/index.html`;
  const title = lang === 'ru' ? 'Испанский по уровням A1–C2: все темы' : 'Learn Spanish A1–C2: all topics';
  const description = lang === 'ru' ? 'Бесплатные уроки испанской грамматики и словарь с примерами для уровней A1–C2.' : 'Free Spanish grammar lessons and vocabulary with examples for levels A1–C2.';
  const body = `<h1>${escapeHtml(title)}</h1><p class="lead">${escapeHtml(description)}</p><ul class="level-list">${data.levels().map((level) => `<li><a href="${escapeHtml(localHref(rel, `learn/${lang}/${level.id.toLowerCase()}/index.html`))}"><strong>${level.id}</strong> — ${escapeHtml(pick(level.name, lang))}</a><p>${escapeHtml(pick(level.canDo, lang))}</p></li>`).join('')}</ul>`;
  const alt = { ru: 'learn/ru/index.html', en: 'learn/en/index.html' };
  return { rel, html: page({ base, lang, rel, title, description, body, alternates: alt }) };
}

function md(value) { return plain(value).replace(/[\\`*_\[\]|]/g, '\\$&'); }

function bilingual(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return md(value);
  return value.ru === value.en ? md(value.ru) : `${md(value.ru)} / ${md(value.en)}`;
}

function fullMarkdown(base, data) {
  const lines = ['# Español con amigos — complete learning content', '', 'Free Spanish vocabulary and grammar for levels A1–C2. Each entry links to a readable lesson and an interactive exercise.', ''];
  for (const level of data.levels()) {
    lines.push(`## ${level.id} — ${level.name.ru} / ${level.name.en}`, '', `${level.canDo.ru} / ${level.canDo.en}`, '');
    for (const kind of ['grammar', 'words']) {
      for (const topic of (kind === 'grammar' ? data.grammar(level.id) : data.vocab(level.id))) {
        lines.push(`### ${topic.title.ru} / ${topic.title.en}`, '', `Page: ${url(base, route('ru', level.id, kind, topic.id))}`, `English: ${url(base, route('en', level.id, kind, topic.id))}`, `Interactive: ${url(base, `#/${level.id.toLowerCase()}/${kind}/${topic.id}`)}`, '');
        if (kind === 'words') {
          for (const word of topic.words) lines.push(`- ${md(word.es)} — ${md(word.ru)} / ${md(word.en)}${word.ex ? `. Example: ${md(word.ex.es)} — ${md(word.ex.ru)} / ${md(word.ex.en)}` : ''}`);
          lines.push('');
        } else {
          lines.push(`${md(topic.hero.es)} — ${md(topic.hero.sub.ru)} / ${md(topic.hero.sub.en)}`, '');
          for (const tab of topic.tabs) {
            lines.push(`#### ${tab.label.ru} / ${tab.label.en}`, '');
            for (const block of tab.blocks) {
              if (block.heading) lines.push(`**${md(block.heading.ru)} / ${md(block.heading.en)}**`, '');
              if (block.type === 'text' || block.type === 'tip') {
                if (block.title) lines.push(`**${md(block.title.ru)} / ${md(block.title.en)}**`);
                const ru = pick(block.body, 'ru'), en = pick(block.body, 'en');
                lines.push(md(Array.isArray(ru) ? ru.join(' ') : ru), md(Array.isArray(en) ? en.join(' ') : en), '');
              } else if (block.type === 'examples') for (const item of block.items) lines.push(`- ${md(item.es)} — ${md(item.ru)} / ${md(item.en)}`);
              else if (block.type === 'table') {
                lines.push(`| ${block.head.map(bilingual).join(' | ')} |`, `| ${block.head.map(() => '---').join(' | ')} |`);
                for (const row of block.rows) lines.push(`| ${row.map(bilingual).join(' | ')} |`);
              } else if (block.type === 'conj') for (const verb of block.verbs) {
                lines.push(`- ${md(verb.inf)}`);
                if (verb.tr) lines.push(`  - ${bilingual(verb.tr)}`);
                for (const variant of verb.variants) lines.push(`  - ${bilingual(variant.label)}: ${variant.rows.map((row) => `${md(row[0])} ${md(row[1])}`).join(', ')}`);
              } else if (block.type === 'markers') for (const group of block.groups) lines.push(`- ${md(group.title.ru)} / ${md(group.title.en)}: ${group.tags.map(md).join(', ')}`);
              else for (const item of block.items) lines.push(`- ${item.num ? `${md(item.num)}. ` : ''}${bilingual(item.title)}${item.label ? ` (${bilingual(item.label)})` : ''}${item.sub ? ` — ${bilingual(item.sub)}` : ''}${item.es ? `: ${md(item.es)}` : ''}${item.phrases ? `: ${item.phrases.map(md).join(', ')}` : ''}${item.body ? ` — ${bilingual(item.body)}` : ''}${item.ex ? ` — ${md(item.ex.es)} (${md(item.ex.ru)} / ${md(item.ex.en)})` : ''}`);
              lines.push('');
            }
          }
          lines.push('#### Тест / Quiz', '');
          for (const question of topic.quiz) lines.push(`- ${bilingual(question.prompt)}${question.es ? ` — ${md(question.es)}` : ''} Options: ${question.options.map(md).join('; ')}. Answer: ${md(question.options[question.answer])}. ${bilingual(question.explain)}`);
          lines.push('');
        }
      }
    }
  }
  return lines.join('\n').replace(/\n{3,}/g, '\n\n').replace(/\n+$/, '') + '\n';
}

function generate(siteUrl, outputDir = root) {
  if (!/^https:\/\//.test(siteUrl)) throw new Error('Use an HTTPS URL for the published site.');
  const base = new URL(siteUrl);
  if (base.search || base.hash || !base.pathname.endsWith('/')) throw new Error('Site URL must be the full public directory URL ending in /.');
  const data = loadSite(root).ECA.data;
  const pages = [];
  for (const lang of langs) {
    pages.push(catalogPage(base, lang, data));
    for (const level of data.levels()) {
      pages.push(levelPage(base, lang, level, data));
      for (const kind of ['grammar', 'words']) for (const topic of (kind === 'grammar' ? data.grammar(level.id) : data.vocab(level.id))) pages.push(topicPage(base, lang, level, kind, topic));
    }
  }
  function write(rel, content) {
    const filename = path.join(outputDir, rel);
    fs.mkdirSync(path.dirname(filename), { recursive: true });
    fs.writeFileSync(filename, content);
  }
  // This directory is wholly generated; remove pages for topics that were deleted.
  fs.rmSync(path.join(outputDir, 'learn'), { recursive: true, force: true });
  for (const p of pages) write(p.rel, p.html);
  const urls = ['', ...pages.map((p) => p.rel)];
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((rel) => `  <url><loc>${xml(url(base, rel))}</loc></url>`).join('\n')}\n</urlset>\n`);
  write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${url(base, 'sitemap.xml')}\n`);
  const llms = ['# Español con amigos', '', '> Free Spanish vocabulary and grammar lessons from A1 to C2, with Russian and English explanations, examples, flashcards, and quizzes.', '', 'The pages below are readable without JavaScript. Interactive lessons are linked from each topic page.', '', '## Levels', ''];
  for (const level of data.levels()) llms.push(`- [${level.id} — ${level.name.ru}](${url(base, `learn/ru/${level.id.toLowerCase()}/index.html`)}): Grammar and vocabulary topics for ${level.id}.`);
  llms.push('', '## English', '', `- [All topics in English](${url(base, 'learn/en/index.html')}): English explanations and translations.`, '', '## Full content', '', `- [Complete text](${url(base, 'llms-full.txt')}): All vocabulary and grammar content in Markdown.`, '');
  write('llms.txt', llms.join('\n'));
  write('llms-full.txt', fullMarkdown(base, data));
  return { pageCount: pages.length, urlCount: urls.length };
}

if (require.main === module) {
  const siteUrl = process.argv[2] || fs.readFileSync(path.join(__dirname, 'site-url.txt'), 'utf8').trim();
  try {
    const result = generate(siteUrl);
    console.log(`Generated ${result.pageCount} reading pages and ${result.urlCount} sitemap URLs.`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { generate };
