import { next } from '@vercel/functions';

const PT_COUNTRIES = new Set(['BR', 'PT']);

const ES_COUNTRIES = new Set([
  'AR', 'MX', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO',
  'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'GQ', 'ES',
]);

function countryToLang(country: string | null): 'es' | 'en' | 'pt' {
  if (!country) return 'es';
  if (PT_COUNTRIES.has(country)) return 'pt';
  if (ES_COUNTRIES.has(country)) return 'es';
  return 'en';
}

function readCookie(request: Request, name: string): string | null {
  const header = request.headers.get('cookie');
  if (!header) return null;
  const match = header.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

const COOKIE_MAX_AGE = 180 * 24 * 60 * 60;

export const config = {
  matcher: ['/', '/en', '/en/', '/pt', '/pt/'],
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // When landing directly on /en/ or /pt/, set cookie to match the path
  // so subsequent navigation to / stays in the correct language.
  if (path.startsWith('/en')) {
    const cookie = `fs_lang=en; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;
    return next({ headers: { 'set-cookie': cookie } });
  }
  if (path.startsWith('/pt')) {
    const cookie = `fs_lang=pt; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;
    return next({ headers: { 'set-cookie': cookie } });
  }

  // Root path (/) — redirect or serve based on cookie / country
  const langParam = url.searchParams.get('lang');
  if (langParam === 'en') return Response.redirect(new URL('/en/', request.url), 301);
  if (langParam === 'pt') return Response.redirect(new URL('/pt/', request.url), 301);
  if (langParam === 'es') return Response.redirect(new URL('/', request.url), 301);

  const cookieLang = readCookie(request, 'fs_lang');
  if (cookieLang === 'en') return Response.redirect(new URL('/en/', request.url), 302);
  if (cookieLang === 'pt') return Response.redirect(new URL('/pt/', request.url), 302);
  if (cookieLang === 'es') return next();

  // First visit — detect country, set cookie, redirect if non-Spanish
  const country = request.headers.get('x-vercel-ip-country');
  const lang = countryToLang(country);
  const cookie = `fs_lang=${lang}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;

  if (lang === 'en') {
    return new Response(null, {
      status: 302,
      headers: { Location: '/en/', 'Set-Cookie': cookie },
    });
  }
  if (lang === 'pt') {
    return new Response(null, {
      status: 302,
      headers: { Location: '/pt/', 'Set-Cookie': cookie },
    });
  }

  return next({ headers: { 'set-cookie': cookie } });
}
