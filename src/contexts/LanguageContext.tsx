import { createContext, useContext, useState, useEffect } from 'react';
import type { Lang } from '../lib/translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({ lang: 'es', setLang: () => {} });

function detectLang(): Lang {
  const stored = localStorage.getItem('fs_lang') as Lang | null;
  if (stored && ['es', 'en', 'pt'].includes(stored)) return stored;
  const browser = navigator.language.slice(0, 2).toLowerCase();
  if (browser === 'pt') return 'pt';
  if (browser === 'en') return 'en';
  return 'es';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es');

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    localStorage.setItem('fs_lang', l);
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
