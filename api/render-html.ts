import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { join } from 'path';
import { t, type Lang } from '../src/lib/translations';

const VALID_LANGS: Lang[] = ['es', 'en', 'pt'];
const SITE_URL = 'https://www.foodspotmobile.com';

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
  const canonicalUrl = `${SITE_URL}?lang=${lang}`;

  return html
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*">/,
      `<meta name="description" content="${description}">`
    )
    .replace(
      /<meta property="og:title" content="[^"]*">/,
      `<meta property="og:title" content="${ogTitle}">`
    )
    .replace(
      /<meta property="og:description" content="[^"]*">/,
      `<meta property="og:description" content="${ogDescription}">`
    )
    .replace(
      /<meta property="twitter:title" content="[^"]*">/,
      `<meta property="twitter:title" content="${twitterTitle}">`
    )
    .replace(
      /<meta property="twitter:description" content="[^"]*">/,
      `<meta property="twitter:description" content="${twitterDescription}">`
    )
    .replace(
      /<link rel="canonical" href="[^"]*">/,
      `<link rel="canonical" href="${canonicalUrl}">`
    );
}

export default function handler(request: VercelRequest, response: VercelResponse) {
  response.setHeader('Cache-Control', 'no-store');

  const langParam = request.query.lang;
  const lang = Array.isArray(langParam) ? langParam[0] : langParam;

  let html: string;
  try {
    html = readFileSync(join(process.cwd(), 'dist', 'index.html'), 'utf-8');
  } catch (error) {
    response.status(500).send('Internal Server Error');
    return;
  }

  try {
    if (lang && VALID_LANGS.includes(lang as Lang)) {
      html = rewriteHtml(html, lang as Lang);
    }
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.status(200).send(html);
  } catch (error) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.status(200).send(html);
  }
}
