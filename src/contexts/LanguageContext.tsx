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
  const urlParam = new URLSearchParams(window.location.search).get('lang');
  if (urlParam && VALID_LANGS.includes(urlParam as Lang)) {
    return { lang: urlParam as Lang, source: 'url' };
  }

  const cookie = readCookie('fs_lang');
  if (cookie && VALID_LANGS.includes(cookie as Lang)) {
    return { lang: cookie as Lang, source: 'cookie' };
  }

  const stored = localStorage.getItem('fs_lang') as Lang | null;
  if (stored && VALID_LANGS.includes(stored)) {
    return { lang: stored, source: 'localStorage' };
  }

  const browser = navigator.language.slice(0, 2).toLowerCase();
  if (browser === 'pt') return { lang: 'pt', source: 'browser' };
  if (browser === 'en') return { lang: 'en', source: 'browser' };

  return { lang: 'es', source: 'default' };
}

function syncDocumentMeta(lang: Lang) {
  // Blog post pages own their own title/meta tags (see BlogPost.tsx) — don't clobber them.
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
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es');

  useEffect(() => {
    const { lang: detected, source } = detectLang();
    setLangState(detected);
    trackLangDetection(detected, source);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    syncDocumentMeta(lang);
  }, [lang]);

  const setLang = (l: Lang) => {
    localStorage.setItem('fs_lang', l);
    writeCookie('fs_lang', l, 180);

    const url = new URL(window.location.href);
    url.searchParams.set('lang', l);
    window.history.replaceState(null, '', url.toString());

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
