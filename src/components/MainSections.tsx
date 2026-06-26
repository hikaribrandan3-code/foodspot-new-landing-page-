import { useState, useEffect } from "react";
import { ArrowRight, Rocket, ArrowDown, Menu, X, ListChecks, Tag, Star, Mail, DollarSign, Database, Link as LinkIcon, ShoppingCart, Lightbulb } from "lucide-react";
import { CanvasBackground } from './CanvasBackground';
import { trackCtaClick, trackNavigation } from '../services/ga4Events';
import { useLanguage } from '../contexts/LanguageContext';

// SVG Icons
const StackAppsIcon = () => (
  <svg viewBox="0 0 100 100" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#059669', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <rect x="15" y="55" width="55" height="30" rx="4" fill="url(#grad1)" opacity="0.5" />
    <rect x="20" y="40" width="55" height="30" rx="4" fill="url(#grad1)" opacity="0.7" />
    <rect x="25" y="25" width="55" height="30" rx="4" fill="url(#grad1)" />
    <rect x="30" y="30" width="20" height="20" rx="2" fill="rgba(255,255,255,0.2)" />
  </svg>
);

const PaletteIcon = () => (
  <svg viewBox="0 0 100 100" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#6d28d9', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <ellipse cx="50" cy="50" rx="35" ry="30" fill="url(#grad2)" opacity="0.2" stroke="url(#grad2)" strokeWidth="2" />
    <circle cx="30" cy="40" r="5" fill="#ef4444" />
    <circle cx="50" cy="30" r="5" fill="#f59e0b" />
    <circle cx="70" cy="40" r="5" fill="#10b981" />
    <circle cx="75" cy="60" r="5" fill="#3b82f6" />
    <circle cx="50" cy="70" r="5" fill="#ec4899" />
    <circle cx="25" cy="65" r="6" fill="rgba(0,0,0,0.1)" stroke="url(#grad2)" strokeWidth="2" />
  </svg>
);

const StorefrontIcon = () => (
  <svg viewBox="0 0 100 100" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <rect x="25" y="35" width="50" height="50" rx="4" fill="url(#grad3)" opacity="0.3" stroke="url(#grad3)" strokeWidth="2" />
    <polygon points="25,35 50,15 75,35" fill="url(#grad3)" opacity="0.7" />
    <rect x="40" y="55" width="20" height="30" rx="2" fill="rgba(0,0,0,0.1)" stroke="url(#grad3)" strokeWidth="2" />
    <circle cx="58" cy="70" r="2" fill="url(#grad3)" />
    <rect x="30" y="45" width="12" height="12" rx="2" fill="rgba(255,255,255,0.4)" />
    <rect x="58" y="45" width="12" height="12" rx="2" fill="rgba(255,255,255,0.4)" />
  </svg>
);
import { t } from '../lib/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const { lang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['como-funciona', 'precios', 'expert-tips'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t(lang, 'nav_how'), href: '#como-funciona', id: 'como-funciona', icon: ListChecks },
    { label: t(lang, 'nav_pricing'), href: '#precios', id: 'precios', icon: Tag },
    { label: t(lang, 'nav_expert_tips'), href: '#expert-tips', id: 'expert-tips', icon: Lightbulb },
    { label: t(lang, 'nav_contact'), href: '#contactos', id: 'contactos', icon: Mail },
  ];

  const isActive = (id) => activeSection === id;

  return (
    <nav className="bg-surface/90 border-b border-outline-variant shadow-sm sticky top-0 backdrop-blur-md z-50">
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto h-16">
        <div className="flex items-center gap-2">
          <svg fill="#047857" width="24px" height="24px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" style={{ color: '#047857' }}>
            <path d="M199.99975,220H160.73437c5.17652-4.97607,10.74146-10.70947,16.321-17.126,28.09472-32.30859,42.94433-66.499,42.94433-98.874a92,92,0,0,0-184,0c0,50.01221,34.11963,91.94238,59.18408,116H55.99975a12,12,0,0,0,0,24h144a12,12,0,0,0,0-24Zm-140-116a68,68,0,0,1,136,0c0,33.31055-19.95605,63.36621-36.69824,82.71387a249.0586,249.0586,0,0,1-31.30176,30.17138A249.0053,249.0053,0,0,1,96.698,186.71387C79.95581,167.36621,59.99975,137.31055,59.99975,104Zm68,44a44,44,0,1,0-44-44A44.04978,44.04978,0,0,0,127.99975,148Zm0-64a20,20,0,1,1-20,20A20.02229,20.02229,0,0,1,127.99975,84Z"/>
          </svg>
          <div className="text-xl font-display font-bold text-primary">
            FoodSpot <span className="text-sm font-semibold text-on-surface-variant">Mobile</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  trackNavigation(link.id);
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`font-medium transition-colors text-sm ${
                  isActive(link.id)
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Demo Button - Left of Hamburger */}
          <a
            href="https://foodspotapp.vercel.app/foodspot"
            onClick={() => trackCtaClick('demo_90_seconds')}
            className="px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-full font-semibold text-[11px] sm:text-xs md:text-sm transition-all active:scale-95 whitespace-nowrap"
            style={{
              background: "white",
              color: "#047857",
              border: "2px solid #047857"
            }}
          >
            {lang === 'es' ? 'Probar Demo' : lang === 'pt' ? 'Tentar Demo' : 'Try Demo'}
          </a>

          <LanguageSwitcher variant="navbar" />

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-surface transition-colors"
            aria-label="Toggle menu"
            style={{ cursor: 'pointer' }}
          >
            <div style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-on-surface" />
              ) : (
                <Menu className="w-6 h-6 text-on-surface" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden z-40 pointer-events-none"
          onClick={() => setMobileMenuOpen(false)}
          style={{ animation: 'fadeIn 0.2s ease-out forwards', pointerEvents: 'auto' }}
        />
      )}

      {/* Mobile Menu Slide from Right */}
      <div
        className="fixed top-16 right-0 h-screen bg-white md:hidden z-40 border-l border-gray-200 overflow-y-auto w-[65%] sm:w-64"
        style={{
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          maxWidth: '280px'
        }}
      >
        <div className="px-6 py-8 space-y-2">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  trackNavigation(link.id);
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 py-4 px-5 rounded-xl transition-all ${
                  isActive(link.id)
                    ? 'bg-primary text-white font-semibold shadow-lg shadow-primary/30'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                style={{ display: 'block' }}
              >
                <IconComponent className="w-5 h-5 flex-shrink-0" />
                <span>{link.label}</span>
              </a>
            );
          })}

          {/* Request Demo Button */}
          <a
            href="#signup"
            onClick={(e) => {
              e.preventDefault();
              trackNavigation('signup');
              document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 py-4 px-5 rounded-xl transition-all bg-primary text-white font-semibold shadow-lg shadow-primary/30 mt-4"
            style={{ display: 'flex' }}
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span>{lang === 'es' ? 'Solicitar Demo' : lang === 'pt' ? 'Solicitar Demo' : 'Request Demo'}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  const { lang } = useLanguage();
  const [accentIndex, setAccentIndex] = useState(0);

  const accents = {
    es: ['Shopify for food', '0% comisión', 'organic content', 'sin código'],
    en: ['Shopify for food', '0% commission', 'organic content', 'no code'],
    pt: ['Shopify for food', '0% comissão', 'organic content', 'sem código']
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAccentIndex((prev) => (prev + 1) % accents[lang].length);
    }, 1800);
    return () => clearInterval(interval);
  }, [lang, accents]);

  return (
    <>
    <section className="w-full bg-white px-6 py-8 md:pt-[15px] md:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center flex flex-col items-center text-center md:text-left md:items-center">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center md:text-left">
            <h1 className="font-display text-5xl md:text-6xl text-on-surface font-black mb-6 leading-none">
              <div style={lang === 'en' ? { fontSize: '3.21rem' } : {}}>{lang === 'es' ? 'Crear tu' : lang === 'pt' ? 'Criar sua' : 'Create your'}</div>
              <div style={lang === 'en' ? { fontSize: '3.21rem' } : {}}>{lang === 'es' ? 'tienda online' : lang === 'pt' ? 'loja online' : 'online store'}</div>
              <span key={accentIndex} style={{ color: '#047857', display: 'block', width: '100%', whiteSpace: 'nowrap', animation: 'fadeInUp 0.25s ease-out forwards', marginTop: '4px' }}>{accents[lang][accentIndex]}</span>
            </h1>

            <p className="text-base md:text-xl text-on-surface-variant mb-8 leading-relaxed font-medium" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              {lang === 'es'
                ? 'Tu propia app de marca. Pedidos directos. Y el 100% de cada venta — sin comisiones, nunca.'
                : lang === 'pt'
                ? 'Seu próprio app de marca. Pedidos diretos. E 100% de cada venta — sem comissões, nunca.'
                : 'Your own branded app. Direct orders. And 100% of every sale — no commissions, ever.'}
            </p>

            <div className="flex flex-row md:flex-col gap-2 md:gap-3 items-center justify-center md:justify-start md:items-start">
              <a
                href="https://foodspotapp.vercel.app/start-trial"
                onClick={() => trackCtaClick('hero_create_account', 'hero')}
                className="bg-[#047857] hover:bg-[#059669] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg transition-all active:scale-95 inline-flex items-center justify-center gap-2"
              >
                {t(lang, 'hero_cta')}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#beneficios"
                className="border-2 border-[#047857] text-[#047857] px-6 py-2 rounded-full font-semibold text-sm hover:bg-emerald-50 transition-all inline-flex items-center justify-center"
              >
                {lang === 'es' ? 'Cómo funciona' : lang === 'pt' ? 'Como funciona' : 'See how it works'}
              </a>
            </div>

            <p className="text-sm text-on-surface-variant mt-2 md:mt-4 mb-0 font-medium">
              ✓ {t(lang, 'hero_trial')}
            </p>

            {/* Mobile: Phone directly inside text column */}
            <div className="md:hidden flex justify-center" style={{ marginTop: '-53px' }}>
              <AnimatedPhoneShowcase />
            </div>
          </div>

          {/* Right: Phone mockup - desktop only */}
          <div className="hidden md:flex justify-center">
            <AnimatedPhoneShowcase />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

function AnimatedPhoneShowcase() {
  const [screenIndex, setScreenIndex] = useState(0);
  const screens = [
    { src: '/phone-screens/1-menu.webp', alt: 'Menu - Browse items' },
    { src: '/phone-screens/2-ordering.webp', alt: 'Ordering - Multiple types' },
    { src: '/phone-screens/3-menu-builder.webp', alt: 'Menu Builder - Setup' },
    { src: '/phone-screens/4-kds.webp', alt: 'KDS - Kitchen orders' },
    { src: '/phone-screens/5-metrics.webp', alt: 'Metrics - Analytics' },
    { src: '/phone-screens/6-ai.webp', alt: 'AI - Smart recommendations' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % screens.length);
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center pt-0 md:pt-16">
      {/* 3D Perspective container - desktop only */}
      <div className="hidden md:block" style={{ perspective: '1200px' }}>
        <div
          style={{
            transform: 'rotateX(8deg) rotateY(-18deg) rotateZ(5deg)',
            transformStyle: 'preserve-3d'
          }}
          className="relative w-64 h-[455px] overflow-hidden"
        >
          {screens.map((screen, idx) => (
            <div
              key={idx}
              className="absolute inset-0 w-full h-full"
              style={{
                opacity: idx === screenIndex ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out'
              }}
            >
              <img
                src={screen.src}
                alt={screen.alt}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile version - no 3D perspective */}
      <div className="md:hidden">
        <div className="relative w-[345px] h-[724px] overflow-hidden">
          {screens.map((screen, idx) => (
            <div
              key={idx}
              className="absolute inset-0 w-full h-full"
              style={{
                opacity: idx === screenIndex ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out'
              }}
            >
              <img
                src={screen.src}
                alt={screen.alt}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicator dots */}
      <div className="flex gap-2 mt-4">
        {screens.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-all ${
              idx === screenIndex ? 'bg-[#047857] w-6' : 'bg-gray-300 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function SubtitleCards() {
  const { lang } = useLanguage();

  return (
    <section className="py-10 md:py-12 px-6 bg-gradient-to-b from-surface/50 to-surface/25">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl text-on-surface font-black mb-6 md:mb-8 leading-tight text-center">
          {lang === 'es' ? '¿Qué es una tienda online?' : lang === 'pt' ? 'O que é uma loja online?' : 'What is an online store?'}
        </h2>
        <p className="text-lg md:text-xl text-on-surface-variant text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {t(lang, 'ugc_definition')}
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-2xl md:text-3xl text-on-surface font-black mb-3">{t(lang, 'subtitle_1_title')}</p>
            <p className="text-base text-on-surface-variant">{t(lang, 'subtitle_1_desc')}</p>
          </div>
          <div className="text-center">
            <Database className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-2xl md:text-3xl text-on-surface font-black mb-3">{t(lang, 'subtitle_2_title')}</p>
            <p className="text-base text-on-surface-variant">{t(lang, 'subtitle_2_desc')}</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
              <LinkIcon className="w-10 h-10 text-primary" />
              <ShoppingCart className="w-10 h-10 text-primary" />
              <Star className="w-10 h-10 text-primary" />
            </div>
            <p className="text-2xl md:text-3xl text-on-surface font-black mb-3">{t(lang, 'subtitle_3_title')}</p>
            <p className="text-base text-on-surface-variant">{t(lang, 'subtitle_3_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TheIdea() {
  const { lang } = useLanguage();

  return (
    <section className="py-6 md:py-8 px-6 bg-primary">
      <div className="max-w-3xl mx-auto text-center">
        <Lightbulb className="w-8 h-8 text-white/80 mx-auto mb-2" />
        <h2 className="font-display text-4xl md:text-5xl text-white font-black mb-3">
          {t(lang, 'idea_title')}
        </h2>
        <p className="text-base md:text-lg text-white/95 leading-relaxed font-semibold mb-4">
          {t(lang, 'idea_body_1')} <span className="font-black">{t(lang, 'idea_body_accent')}</span> {t(lang, 'idea_body_2')} <span className="font-black">{t(lang, 'idea_body_brand')}</span>{t(lang, 'idea_body_3')}
        </p>
        <div
          className="text-white/60 hover:text-white transition-colors"
          style={{ animation: 'bounce 2s infinite ease-in-out' }}
        >
          <ArrowDown className="w-5 h-5 mx-auto" />
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 px-6 bg-[#166534]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
          Creada para restaurantes y negocios gastronómicos que quieren mejorar su gestión sin depender de 5 apps distintas.
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-white">Todo lo que necesitas para crecer</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-white font-semibold text-lg">Sin FoodSpot vs Con FoodSpot</p>
          <p className="text-white/80 text-sm">Mira cómo simplificamos tu gestión</p>
        </div>
        <div className="bg-white rounded-2xl p-4 ambient-shadow hover-lift overflow-hidden">
          <picture>
            <source srcSet="/beforeafter.webp" type="image/webp" />
            <img
              src="/beforeafter.webp"
              alt="Sin FoodSpot vs Con FoodSpot - Gestión simplificada"
              loading="lazy"
              width="800"
              height="600"
              className="w-full h-auto rounded-xl object-cover"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export function MiddleCTA() {
  const { lang } = useLanguage();

  return (
    <section className="py-5 px-6 bg-primary overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <CanvasBackground color="#ffffff" variant="blobs" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-5 drop-shadow-md">
          {t(lang, 'mid_cta_heading')}
        </h2>
        <a
          href="https://foodspotapp.vercel.app/start-trial"
          onClick={() => trackCtaClick('middle_free_trial', 'middle_cta')}
          className="bg-white text-primary px-10 py-5 rounded-full text-xl font-bold shadow-xl flex items-center gap-3 mx-auto transition-all hover:shadow-2xl active:scale-95 inline-flex"
        >
          {t(lang, 'mid_cta_button')}
          <Rocket className="w-6 h-6" />
        </a>
        <p className="text-white/80 mt-3 font-medium">{t(lang, 'mid_cta_sub')}</p>
      </div>
    </section>
  );
}

export function UGCMarketingCTA() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 px-6 bg-secondary overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-6 drop-shadow-md">
          {t(lang, 'ugc_cta_heading')}
        </h2>
        <a
          href="https://foodspotapp.vercel.app/start-trial"
          onClick={() => trackCtaClick('ugc_marketing_cta', 'ugc_section')}
          className="bg-white text-secondary px-9 py-4 rounded-full text-lg font-bold shadow-lg inline-flex items-center gap-2 transition-all hover:shadow-xl active:scale-95"
        >
          {t(lang, 'ugc_cta_button')}
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}


export function Bridge() {
  const { lang } = useLanguage();

  const content = {
    es: {
      line1: "Pedir desde el teléfono es lo normal ahora.",
      line2: "El mercado crece 8.1% cada año.",
      stat: "$23.7B",
      arrow: "→",
      statEnd: "$50B",
      period: "para 2030",
      source: "(Mordor Intelligence, 2025)",
      line3: "Pero si no tienes tu propia tienda online, eres",
      invisible: "invisible",
      line4: "Aquí te mostramos cómo hacerlo en 3 pasos.",
      title: "Perspectivas de Mercado en Expansión",
      market2025: "Mercado Móvil Total (2025)",
      projection2030: "Proyección (2030)",
      cagr: "Tasa de Crecimiento Anual Compuesta (CAGR)",
      forecast: "Forecast de Crecimiento"
    },
    pt: {
      line1: "Pedir pelo telefone é o normal agora.",
      line2: "O mercado cresce 8,1% a cada ano.",
      stat: "$23,7B",
      arrow: "→",
      statEnd: "$50B",
      period: "para 2030",
      source: "(Mordor Intelligence, 2025)",
      line3: "Mas se você não tem sua própria loja online, é",
      invisible: "invisível",
      line4: "Aqui te mostramos como fazer em 3 passos.",
      title: "Perspectivas de Mercado em Expansão",
      market2025: "Mercado Móvel Total (2025)",
      projection2030: "Projeção (2030)",
      cagr: "Taxa de Crescimento Anual Composto (CAGR)",
      forecast: "Previsão de Crescimento"
    },
    en: {
      line1: "Ordering from your phone is normal now.",
      line2: "The market grows 8.1% every year.",
      stat: "$23.7B",
      arrow: "→",
      statEnd: "$50B",
      period: "by 2030",
      source: "(Mordor Intelligence, 2025)",
      line3: "But if you don't have your own online store, you're",
      invisible: "invisible",
      line4: "Here's how to do it in 3 steps.",
      title: "Market Expansion Perspectives",
      market2025: "Mobile Market Total (2025)",
      projection2030: "Projection (2030)",
      cagr: "Compound Annual Growth Rate (CAGR)",
      forecast: "Growth Forecast"
    }
  };

  const text = content[lang] || content.en;

  return (
    <section id="bridge-section" className="w-full bg-white px-6 py-8 md:pt-[15px] md:pb-4 relative">
      <style>{`
        @keyframes growBar {
          0% { height: 0; opacity: 0; }
          100% { height: 100%; opacity: 1; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes drawLine {
          0% { stroke-dasharray: 500; stroke-dashoffset: 500; opacity: 0; }
          100% { stroke-dasharray: 500; stroke-dashoffset: 0; opacity: 1; }
        }

        .bridge-fade {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .chart-left {
          opacity: 1;
        }
        .chart-right {
          opacity: 1;
        }
        .chart-label {
          opacity: 1;
        }
        .chart-number {
          opacity: 1;
        }

        .chart-bar {
          transform-origin: bottom;
          animation: growBar 3s ease-out 0.5s infinite;
        }
        .chart-bar:nth-child(1) { animation-delay: 0.5s; }
        .chart-bar:nth-child(2) { animation-delay: 0.8s; }
        .chart-bar:nth-child(3) { animation-delay: 1.1s; }
        .chart-bar:nth-child(4) { animation-delay: 1.4s; }

        .chart-line {
          animation: drawLine 2s ease-out 4s infinite;
        }

        .arrow-icon {
          opacity: 1;
        }

        .slot-number {
          font-variant-numeric: tabular-nums;
          font-weight: 900;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <h2 className="font-display text-4xl md:text-5xl font-black text-black mb-6 md:mb-6 bridge-fade leading-tight text-center" style={{ animationDelay: '0ms' }}>
          {text.title}
        </h2>

        {/* Market Stats Card with Charts */}
        <div
          className="border-2 border-gray-200 rounded-2xl p-4 md:p-6 mb-1 md:mb-2 bridge-fade bg-white"
          style={{ animationDelay: '150ms' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Left: Market Size Chart */}
            <div className="flex flex-col justify-center chart-left">
              <p className="text-gray-500 text-xs md:text-sm font-semibold mb-2 uppercase tracking-widest chart-label">{text.market2025}</p>
              <p className="text-2xl md:text-4xl font-black text-black mb-1 chart-number">$23.7B</p>

              <div className="flex items-center gap-2 my-3 arrow-icon">
                <svg className="w-6 h-6 text-primary flex-shrink-0 rotate-180" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8L2 8L2 6L8 5.24536e-07L14 6L14 8L10 8L10 16L6 16L6 8Z" fill="currentColor"/>
                </svg>
                <p className="text-gray-600 text-xs md:text-sm font-semibold">{text.forecast}</p>
              </div>

              <p className="text-gray-500 text-xs md:text-sm font-semibold mb-1 uppercase tracking-widest chart-label">{text.projection2030}</p>
              <p className="text-2xl md:text-4xl font-black text-primary mb-3 chart-number">$50B</p>

              {/* Mini Bar Chart */}
              <div className="flex items-end gap-1 h-12 mb-1">
                <div className="flex-1 bg-gray-200 rounded-t chart-bar" style={{ height: '30%' }}></div>
                <div className="flex-1 bg-gray-300 rounded-t chart-bar" style={{ height: '45%' }}></div>
                <div className="flex-1 bg-gray-400 rounded-t chart-bar" style={{ height: '60%' }}></div>
                <div className="flex-1 bg-primary rounded-t chart-bar" style={{ height: '100%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>2024</span>
                <span>2025</span>
                <span>2030</span>
              </div>

              <p className="text-gray-500 text-xs mt-2">{text.source}</p>
            </div>

            {/* Right: Growth Rate */}
            <div className="flex flex-col justify-center chart-right">
              <p className="text-gray-500 text-xs md:text-sm font-semibold mb-2 uppercase tracking-widest chart-label">{text.cagr}</p>
              <p className="text-3xl md:text-4xl font-black text-primary mb-3 chart-number">+8.1%</p>

              {/* Trend Line Chart */}
              <svg className="w-full h-20 chart-line" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
                {/* Grid lines */}
                <line x1="0" y1="75" x2="200" y2="75" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="50" x2="200" y2="50" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="25" x2="200" y2="25" stroke="#e5e7eb" strokeWidth="1" />

                {/* Gradient fill under line */}
                <defs>
                  <linearGradient id="trendGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.2}} />
                    <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 0.01}} />
                  </linearGradient>
                </defs>
                <polygon
                  points="10,80 30,70 50,58 70,45 90,32 110,22 130,14 150,10 170,7 190,5 190,100 10,100"
                  fill="url(#trendGradient)"
                />

                {/* Trend line - upward curve */}
                <polyline
                  points="10,80 30,70 50,58 70,45 90,32 110,22 130,14 150,10 170,7 190,5"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Pain Point - RED for contrast */}
        <p className="text-black font-black bridge-fade leading-snug text-center m-0" style={{ animationDelay: '300ms', fontSize: 'clamp(1.55rem, 5vw, 2.7rem)' }}>
          {text.line3}
          {' '}
          <span className="text-red-600 font-black" style={{ fontSize: '1.08em' }}>{text.invisible}</span>
          {'.'}
        </p>
      </div>
    </section>
  );
}


export function OnlineStoreDefinition() {
  const { lang } = useLanguage();

  return (
    <section className="py-12 px-6 bg-surface">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-2xl md:text-3xl text-on-surface font-black mb-4">
          {lang === 'es' ? '¿Qué es una tienda online?' : lang === 'pt' ? 'O que é uma loja online?' : 'What is an online store?'}
        </h2>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          {t(lang, 'ugc_definition')}
        </p>
      </div>
    </section>
  );
}
