import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { join } from 'path';

type Lang = 'es' | 'en' | 'pt';

const VALID_LANGS: Lang[] = ['es', 'en', 'pt'];
const SITE_URL = 'https://www.foodspotmobile.com';

const LANG_LABELS: Record<Lang, string> = {
  es: 'es',
  en: 'en',
  pt: 'pt-BR',
};

const SEO: Record<Lang, Record<string, string>> = {
  es: {
    title: 'FoodSpot: Pedidos Online, POS y Marketing para Restaurantes | Con IA',
    description: 'Plataforma de pedidos online sin comisiones. POS completo, análisis con IA, herramientas de marketing. Crea tu propia tienda online y quédate con el 100% de tus ventas.',
    og_title: 'FoodSpot Mobile — Pedidos Online y Tienda Digital para Restaurantes',
    og_description: 'Tienda online sin comisiones para restaurantes. Menú digital, pedidos, pagos y marketing con contenido de usuarios — todo en una plataforma.',
    twitter_title: 'FoodSpot Mobile — Sistema de Pedidos Online para Restaurantes',
    twitter_description: 'Tienda online sin comisiones con promociones impulsadas por IA y marketing de contenido generado por usuarios.',
  },
  en: {
    title: 'FoodSpot: Restaurant Ordering, POS & Marketing | AI-Powered',
    description: 'Commission-free restaurant ordering platform. Full POS, AI analytics, marketing tools. Build your own restaurant app — keep 100% of sales.',
    og_title: 'FoodSpot Mobile — Restaurant Online Ordering & E-commerce Platform',
    og_description: 'Commission-free restaurant online store. Digital menu, orders, payments, UGC marketing — all in one platform.',
    twitter_title: 'FoodSpot Mobile — Restaurant Online Ordering System',
    twitter_description: 'Commission-free restaurant online store with AI-powered promotions and UGC marketing.',
  },
  pt: {
    title: 'FoodSpot: Pedidos Online, PDV e Marketing para Restaurantes | Com IA',
    description: 'Plataforma de pedidos online sem comissões. PDV completo, análises com IA, ferramentas de marketing. Crie sua própria loja online e fique com 100% das vendas.',
    og_title: 'FoodSpot Mobile — Pedidos Online e Loja Digital para Restaurantes',
    og_description: 'Loja online sem comissões para restaurantes. Menu digital, pedidos, pagamentos e marketing com conteúdo de usuários — tudo em uma plataforma.',
    twitter_title: 'FoodSpot Mobile — Sistema de Pedidos Online para Restaurantes',
    twitter_description: 'Loja online sem comissões com promoções impulsionadas por IA e marketing de conteúdo gerado por usuários.',
  },
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function rewriteHtml(html: string, lang: Lang): string {
  const s = SEO[lang];
  const title = escapeHtml(s.title);
  const description = escapeHtml(s.description);
  const ogTitle = escapeHtml(s.og_title);
  const ogDescription = escapeHtml(s.og_description);
  const twitterTitle = escapeHtml(s.twitter_title);
  const twitterDescription = escapeHtml(s.twitter_description);

  const canonicalUrl = lang === 'es' ? SITE_URL + '/' : `${SITE_URL}/${lang}/`;

  let result = html;

  result = result.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

  if (result.includes('name="description"')) {
    result = result.replace(/name="description" content="[^"]*"/, `name="description" content="${description}"`);
  }
  if (result.includes('property="og:title"')) {
    result = result.replace(/property="og:title" content="[^"]*"/, `property="og:title" content="${ogTitle}"`);
  }
  if (result.includes('property="og:description"')) {
    result = result.replace(/property="og:description" content="[^"]*"/, `property="og:description" content="${ogDescription}"`);
  }
  if (result.includes('property="twitter:title"')) {
    result = result.replace(/property="twitter:title" content="[^"]*"/, `property="twitter:title" content="${twitterTitle}"`);
  }
  if (result.includes('property="twitter:description"')) {
    result = result.replace(/property="twitter:description" content="[^"]*"/, `property="twitter:description" content="${twitterDescription}"`);
  }
  if (result.includes('rel="canonical"')) {
    result = result.replace(/rel="canonical" href="[^"]*"/, `rel="canonical" href="${canonicalUrl}"`);
  }

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
    response.status(500).json({ error: 'Internal Server Error', detail: String(error) });
  }
}
