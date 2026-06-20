import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { join } from 'path';
import { t, type Lang } from '../src/lib/translations';

const VALID_LANGS: Lang[] = ['es', 'en', 'pt'];
const SITE_URL = 'https://www.foodspotmobile.com';

const AREA_SERVED: Record<Lang, string[]> = {
  es: ['AR', 'MX', 'CO', 'CL', 'PE', 'EC', 'UY', 'PY', 'BO', 'VE'],
  en: ['US', 'CA', 'GB', 'AU', 'NZ'],
  pt: ['BR', 'PT'],
};

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

  // Path-based canonical — Google treats /en/ as a distinct page
  const canonicalUrl = lang === 'es'
    ? SITE_URL + '/'
    : `${SITE_URL}/${lang}/`;

  // Hreflang block — all 3 variants + x-default on every page
  const hreflangBlock = `
    <link rel="alternate" hreflang="es" href="${SITE_URL}/">
    <link rel="alternate" hreflang="en" href="${SITE_URL}/en/">
    <link rel="alternate" hreflang="pt-BR" href="${SITE_URL}/pt/">
    <link rel="alternate" hreflang="x-default" href="${SITE_URL}/">`;

  // Schema.org with per-language areaServed
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FoodSpot Mobile',
    description: t(lang, 'seo_description'),
    url: SITE_URL,
    applicationCategory: ['BusinessApplication', 'Ecommerce'],
    operatingSystem: 'Web, iOS, Android',
    inLanguage: LANG_LABELS[lang],
    areaServed: AREA_SERVED[lang],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      priceValidUntil: '2026-12-31',
      description: '14-day free trial, no credit card required',
    },
    featureList: [
      'Commission-free online store',
      'Digital menu builder',
      'Integrated payments (Mercado Pago)',
      'Inventory management',
      'Customer relationship management',
      'AI-powered promotions',
      'UGC marketing tools',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  });

  return html
    .replace(/<html lang="[^"]*"/, `<html lang="${LANG_LABELS[lang]}"`)
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
    )
    // Replace all existing hreflang tags with the corrected block
    .replace(
      /(<link rel="alternate" hreflang="[^"]*" href="[^"]*">\s*)+/g,
      hreflangBlock + '\n    '
    )
    // Replace schema.org JSON-LD
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n    ${schema}\n    </script>`
    );
}

export default function handler(request: VercelRequest, response: VercelResponse) {
  response.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');

  // Read lang from query param (set by vercel.json rewrite)
  const langParam = request.query.lang;
  const rawLang = Array.isArray(langParam) ? langParam[0] : langParam;
  const lang: Lang = VALID_LANGS.includes(rawLang as Lang) ? (rawLang as Lang) : 'es';

  let html: string;
  try {
    html = readFileSync(join(process.cwd(), 'dist', 'index.html'), 'utf-8');
  } catch {
    response.status(500).send('Internal Server Error');
    return;
  }

  try {
    html = rewriteHtml(html, lang);
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.status(200).send(html);
  } catch {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.status(200).send(html);
  }
}
