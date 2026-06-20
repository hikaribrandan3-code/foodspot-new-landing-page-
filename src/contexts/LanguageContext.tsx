import { createContext, useContext, useState, useEffect } from 'react';
import { t, type Lang } from '../lib/translations';
import { trackLangDetection } from '../services/ga4Events';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({ lang: 'es', setLang: () => {} });

const VALID_LANGS: Lang[] = ['es', 'en', 'pt'];

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, maxAgeDays: number) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeDays * 86400}; SameSite=Lax`;
}

type DetectionSource = 'url' | 'cookie' | 'localStorage' | 'browser' | 'default';

function detectLang(): { lang: Lang; source: DetectionSource } {
  // 1. URL path — highest priority (what Google crawls, what the user navigated to)
  const path = window.location.pathname;
  if (path.startsWith('/en')) return { lang: 'en', source: 'url' };
  if (path.startsWith('/pt')) return { lang: 'pt', source: 'url' };

  // 2. Legacy ?lang= query param
  const urlParam = new URLSearchParams(window.location.search).get('lang');
  if (urlParam && VALID_LANGS.includes(urlParam as Lang)) {
    return { lang: urlParam as Lang, source: 'url' };
  }

  // 3. Cookie (set by middleware on first visit or by user switching language)
  const cookie = readCookie('fs_lang');
  if (cookie && VALID_LANGS.includes(cookie as Lang)) {
    return { lang: cookie as Lang, source: 'cookie' };
  }

  // 4. localStorage
  const stored = localStorage.getItem('fs_lang') as Lang | null;
  if (stored && VALID_LANGS.includes(stored)) {
    return { lang: stored, source: 'localStorage' };
  }

  // 5. Browser language
  const browser = navigator.language.slice(0, 2).toLowerCase();
  if (browser === 'pt') return { lang: 'pt', source: 'browser' };
  if (browser === 'en') return { lang: 'en', source: 'browser' };

  return { lang: 'es', source: 'default' };
}

function syncDocumentMeta(lang: Lang) {
  // Blog post pages own their own title/meta tags — don't clobber them.
  if (window.location.pathname.startsWith('/blog/')) return;

  document.title = t(lang, 'seo_title');

  const setMeta = (selector: string, attr: 'content', value: string) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  };

  setMeta('meta[name="description"]', 'content', t(lang, 'seo_description'));
  setMeta('meta[property="og:title"]', 'content', t(lang, 'seo_og_title'));
  setMeta('meta[property="og:description"]', 'content', t(lang, 'seo_og_description'));
  setMeta('meta[property="twitter:title"]', 'content', t(lang, 'seo_twitter_title'));
  setMeta('meta[property="twitter:description"]', 'content', t(lang, 'seo_twitter_description'));

  // Keep canonical in sync with the current path
  const canonicalEl = document.querySelector('link[rel="canonical"]');
  if (canonicalEl) {
    const base = 'https://www.foodspotmobile.com';
    const canonical = lang === 'es' ? base + '/' : `${base}/${lang}/`;
    canonicalEl.setAttribute('href', canonical);
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es');

  useEffect(() => {
    const { lang: detected, source } = detectLang();
    setLangState(detected);

    // When path determines language, sync cookie + localStorage so subsequent
    // navigation to / stays consistent with what the user was viewing.
    if (source === 'url' && window.location.pathname !== '/') {
      writeCookie('fs_lang', detected, 180);
      localStorage.setItem('fs_lang', detected);
    }

    trackLangDetection(detected, source);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    syncDocumentMeta(lang);
  }, [lang]);

  const setLang = (l: Lang) => {
    localStorage.setItem('fs_lang', l);
    writeCookie('fs_lang', l, 180);

    // Navigate to path-based URL so the serverless function fires and
    // Google always gets correct meta tags on each language URL.
    const targetPath = l === 'es' ? '/' : `/${l}/`;
    if (window.location.pathname !== targetPath) {
      window.location.href = targetPath;
      return;
    }

    setLangState(l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
