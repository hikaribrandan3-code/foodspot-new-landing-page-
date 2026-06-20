import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { join } from 'path';
import { t, type Lang } from '../src/lib/translations';

const VALID_LANGS: Lang[] = ['es', 'en', 'pt'];
const SITE_URL = 'https://www.foodspotmobile.com';

const LANG_LABELS: Record<Lang, string> = {
  es: 'es',
  en: 'en',
  pt: 'pt-BR',
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function rewriteHtml(html: string, lang: Lang): string {
  const title = escapeHtml(t(lang, 'seo_title'));
  const description = escapeHtml(t(lang, 'seo_description'));
  const ogTitle = escapeHtml(t(lang, 'seo_og_title'));
  const ogDescription = escapeHtml(t(lang, 'seo_og_description'));
  const twitterTitle = escapeHtml(t(lang, 'seo_twitter_title'));
  const twitterDescription = escapeHtml(t(lang, 'seo_twitter_description'));

  const canonicalUrl = lang === 'es'
    ? SITE_URL + '/'
    : `${SITE_URL}/${lang}/`;

  let result = html;

  // Replace title
  result = result.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

  // Replace or add description meta
  if (result.includes('name="description"')) {
    result = result.replace(/name="description" content="[^"]*"/, `name="description" content="${description}"`);
  }

  // Replace og:title
  if (result.includes('property="og:title"')) {
    result = result.replace(/property="og:title" content="[^"]*"/, `property="og:title" content="${ogTitle}"`);
  }

  // Replace og:description
  if (result.includes('property="og:description"')) {
    result = result.replace(/property="og:description" content="[^"]*"/, `property="og:description" content="${ogDescription}"`);
  }

  // Replace twitter:title
  if (result.includes('property="twitter:title"')) {
    result = result.replace(/property="twitter:title" content="[^"]*"/, `property="twitter:title" content="${twitterTitle}"`);
  }

  // Replace twitter:description
  if (result.includes('property="twitter:description"')) {
    result = result.replace(/property="twitter:description" content="[^"]*"/, `property="twitter:description" content="${twitterDescription}"`);
  }

  // Replace canonical
  if (result.includes('rel="canonical"')) {
    result = result.replace(/rel="canonical" href="[^"]*"/, `rel="canonical" href="${canonicalUrl}"`);
  }

  // Replace html lang
  result = result.replace(/<html lang="[^"]*"/, `<html lang="${LANG_LABELS[lang]}"`);

  return result;
}

export default function handler(request: VercelRequest, response: VercelResponse) {
  response.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');

  try {
    const langParam = request.query.lang;
    const rawLang = Array.isArray(langParam) ? langParam[0] : langParam;
    const lang: Lang = VALID_LANGS.includes(rawLang as Lang) ? (rawLang as Lang) : 'es';

    const html = readFileSync(join(process.cwd(), 'dist', 'index.html'), 'utf-8');
    const rewritten = rewriteHtml(html, lang);

    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.status(200).send(rewritten);
  } catch (error) {
    console.error('render-html error:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}
