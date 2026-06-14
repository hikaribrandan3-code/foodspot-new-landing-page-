import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Lang } from '../lib/translations';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
];

interface Props {
  variant?: 'navbar' | 'floating';
}

export function LanguageSwitcher({ variant = 'floating' }: Props) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (variant === 'navbar') {
    return (
      <div ref={ref} className="relative hidden md:block">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Change language"
          className="flex text-on-surface-variant hover:text-primary transition-colors items-center gap-1"
        >
          <Globe className="w-5 h-5" />
          <span className="text-xs font-semibold uppercase">{lang}</span>
        </button>
        {open && (
          <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50 min-w-[80px]">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => { setLang(code); setOpen(false); }}
                className={`w-full px-4 py-2 text-sm font-semibold text-left transition-colors hover:bg-primary/10 hover:text-primary ${lang === code ? 'text-primary bg-primary/5' : 'text-on-surface'}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Floating variant (mobile) - only show when isMobile is true
  if (!isMobile) return null;

  return (
    <div
      ref={ref}
      className="flex flex-col items-end gap-2"
      style={{
        position: 'fixed',
        right: '8px',
        bottom: '24px',
        zIndex: 9999,
        pointerEvents: 'auto',
      }}
    >
      {open && (
        <div className="flex flex-col items-center gap-1 bg-white border border-gray-200 rounded-2xl shadow-xl px-2 py-2">
          {LANGS.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => { setLang(code); setOpen(false); }}
              className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${lang === code ? 'bg-primary text-white shadow-md' : 'text-on-surface hover:bg-primary/10 hover:text-primary'}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        className="w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 active:scale-95 transition-all"
      >
        <Globe className="w-5 h-5" />
      </button>
    </div>
  );
}
