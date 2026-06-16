import { next } from '@vercel/functions';

export const config = {
  matcher: '/',
};

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

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const hasLangParam = url.searchParams.has('lang');
  const hasLangCookie = readCookie(request, 'fs_lang') !== null;

  if (hasLangParam || hasLangCookie) {
    return next();
  }

  const country = request.headers.get('x-vercel-ip-country');
  const lang = countryToLang(country);
  const maxAgeSeconds = 180 * 24 * 60 * 60;

  return next({
    headers: {
      'set-cookie': `fs_lang=${lang}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax`,
    },
  });
}
