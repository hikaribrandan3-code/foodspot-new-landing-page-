import { next, rewrite } from '@vercel/functions';

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

  // Legacy ?lang= param — redirect to path-based URL
  const langParam = url.searchParams.get('lang');
  if (langParam === 'en') return Response.redirect(new URL('/en/', request.url), 301);
  if (langParam === 'pt') return Response.redirect(new URL('/pt/', request.url), 301);
  if (langParam === 'es') return Response.redirect(new URL('/', request.url), 301);

  // Existing lang cookie — serve correct language
  const cookieLang = readCookie(request, 'fs_lang');
  if (cookieLang === 'en') return Response.redirect(new URL('/en/', request.url), 302);
  if (cookieLang === 'pt') return Response.redirect(new URL('/pt/', request.url), 302);
  if (cookieLang === 'es') return next(); // Spanish = stay on /

  // First visit — detect country, set cookie, redirect if non-Spanish
  const country = request.headers.get('x-vercel-ip-country');
  const lang = countryToLang(country);
  const maxAge = 180 * 24 * 60 * 60;
  const cookie = `fs_lang=${lang}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;

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

  // Spanish — stay on /, just set the cookie
  return next({ headers: { 'set-cookie': cookie } });
}
