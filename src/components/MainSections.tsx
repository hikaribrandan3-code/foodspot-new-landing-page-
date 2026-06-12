import { useState, useEffect } from "react";
import { ArrowRight, Rocket, ArrowDown, Menu, X, ListChecks, Tag, Star, Mail, DollarSign, Database, Link as LinkIcon, ShoppingCart, Lightbulb } from "lucide-react";
import { CanvasBackground } from './CanvasBackground';
import { trackCtaClick, trackNavigation } from '../services/ga4Events';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../lib/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const { lang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['como-funciona', 'precios', 'testimonios'];
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
    { label: t(lang, 'nav_testimonials'), href: '#testimonios', id: 'testimonios', icon: Star },
    { label: t(lang, 'nav_contact'), href: '#contactos', id: 'contactos', icon: Mail },
  ];

  const isActive = (id) => activeSection === id;

  return (
    <nav className="bg-surface/90 border-b border-outline-variant shadow-sm sticky top-0 backdrop-blur-md z-50">
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto h-16">
        <div className="flex items-center gap-2">
          <svg fill="#10b981" width="24px" height="24px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" style={{ color: '#10b981' }}>
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
              color: "#10b981",
              border: "2px solid #10b981"
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
          className="fixed inset-0 bg-black/20 md:hidden z-40"
          onClick={() => setMobileMenuOpen(false)}
          style={{ animation: 'fadeIn 0.2s ease-out forwards' }}
        />
      )}

      {/* Mobile Menu Slide from Right */}
      <div
        className="fixed top-20 right-0 h-screen w-72 bg-white md:hidden z-40 border-l border-gray-200 overflow-y-auto"
        style={{
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
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
    <section className="relative w-full px-6 py-12 md:py-20 overflow-hidden">
      {/* Background image - visible on mobile */}
      <div className="absolute inset-0 md:hidden" style={{ zIndex: 0 }}>
        <img
          src="/landingpagebackgroundfoodspotlanding.png"
          alt="Kitchen background"
          className="w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
        />

        {/* Top cream fade-in (15px with blend) */}
        <div
          className="absolute top-0 left-0 right-0 z-10"
          style={{
            height: '15px',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), transparent)',
            pointerEvents: 'none'
          }}
        />

        {/* Bottom cream fade-out */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: '80px',
            background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.95))',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Desktop white background */}
      <div className="absolute inset-0 hidden md:block bg-white" style={{ zIndex: 0 }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center flex flex-col items-center text-center md:text-left md:items-center">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center md:text-left">
            <h1 className="font-display text-5xl md:text-6xl text-on-surface font-black mb-6 leading-none">
              <div>{lang === 'es' ? 'Crear tu tienda' : lang === 'pt' ? 'Criar sua loja' : 'Create your'}</div>
              <div>online store</div>
              <span key={accentIndex} style={{ color: '#10b981', display: 'block', width: '100%', whiteSpace: 'nowrap', animation: 'fadeInUp 0.25s ease-out forwards', marginTop: '4px' }}>{accents[lang][accentIndex]}</span>
            </h1>

            <p className="text-base md:text-xl text-on-surface-variant mb-8 leading-relaxed font-medium" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              {lang === 'es'
                ? 'Tu propia app de marca. Pedidos directos. Y el 100% de cada venta — sin comisiones, nunca.'
                : lang === 'pt'
                ? 'Seu próprio app de marca. Pedidos diretos. E 100% de cada venta — sem comissões, nunca.'
                : 'Your own branded app. Direct orders. And 100% of every sale — no commissions, ever.'}
            </p>

            <div className="flex flex-col gap-3 items-center md:items-start">
              <a
                href="https://foodspotapp.vercel.app/start-trial"
                onClick={() => trackCtaClick('hero_create_account', 'hero')}
                className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg transition-all active:scale-95 inline-flex items-center justify-center gap-2"
              >
                {t(lang, 'hero_cta')}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#beneficios"
                className="border-2 border-[#10b981] text-[#10b981] px-6 py-2 rounded-full font-semibold text-sm hover:bg-emerald-50 transition-all inline-flex items-center justify-center"
              >
                {lang === 'es' ? 'Ver cómo funciona' : lang === 'pt' ? 'Ver como funciona' : 'See how it works'}
              </a>
            </div>

            <p className="text-sm text-on-surface-variant mt-6 font-medium">
              ✓ {t(lang, 'hero_trial')}
            </p>
          </div>

          {/* Right: Phone mockup */}
          <div className="hidden md:flex justify-center">
            <AnimatedPhoneShowcase />
          </div>
        </div>

        {/* Mobile: Phone below text */}
        <div className="md:hidden flex justify-center -mt-2 relative w-full max-w-sm mx-auto" style={{ zIndex: 10 }}>
          <AnimatedPhoneShowcase />
        </div>
      </div>
    </section>
  );
}

function AnimatedPhoneShowcase() {
  const [screenIndex, setScreenIndex] = useState(0);
  const screens = [
    { src: '/IMG_5412.webp', alt: 'Menu' },
    { src: '/IMG_5413.webp', alt: 'Order' },
    { src: '/IMG_5414.webp', alt: 'Payment' },
    { src: '/IMG_5415.webp', alt: 'Receipt' }
  ];
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % screens.length);
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  // Phone size: full on mobile, much smaller on desktop
  const phoneSize = isMobile
    ? "relative w-72 h-[605px]"
    : "relative w-48 h-[350px]";

  return (
    <div className="flex flex-col items-center gap-8 pt-8 md:pt-16">
      {/* 3D Perspective container - desktop only */}
      <div className="hidden md:block" style={{ perspective: '1200px' }}>
        <div
          style={{
            transform: 'rotateX(8deg) rotateY(-18deg) rotateZ(5deg)',
            transformStyle: 'preserve-3d'
          }}
          className={phoneSize}
        >
          {/* Phone frame */}
          <div className="absolute inset-0 bg-black rounded-[48px] shadow-2xl border-[8px] border-gray-900 overflow-hidden flex flex-col">
            {/* Screen content */}
            <div
              key={screenIndex}
              className="flex-1 overflow-hidden w-full h-full"
              style={{ animation: 'fadeIn 0.35s ease-out forwards' }}
            >
              <img
                src={screens[screenIndex].src}
                alt={screens[screenIndex].alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version - no 3D perspective */}
      <div className="md:hidden" style={{ perspective: 'none' }}>
        <div className={phoneSize}>
          {/* Phone frame */}
          <div className="absolute inset-0 bg-black rounded-[48px] shadow-2xl border-[8px] border-gray-900 overflow-hidden flex flex-col">
            {/* Screen content */}
            <div
              key={screenIndex}
              className="flex-1 overflow-hidden w-full h-full"
              style={{ animation: 'fadeIn 0.35s ease-out forwards' }}
            >
              <img
                src={screens[screenIndex].src}
                alt={screens[screenIndex].alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <div className="flex gap-2">
        {screens.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-all ${
              idx === screenIndex ? 'bg-[#10b981] w-6' : 'bg-gray-300 w-2'
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
    <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-surface/50 to-surface/25">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl text-on-surface font-black mb-8 md:mb-12 leading-tight text-center">
          {lang === 'es' ? '¿Qué es una tienda online?' : lang === 'pt' ? 'O que é uma loja online?' : 'What is an online store?'}
        </h2>
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
    <section className="py-12 px-6 bg-primary">
      <div className="max-w-3xl mx-auto text-center">
        <Lightbulb className="w-8 h-8 text-white/80 mx-auto mb-4" />
        <h2 className="font-display text-4xl md:text-5xl text-white font-black mb-6">
          {t(lang, 'idea_title')}
        </h2>
        <p className="text-base md:text-lg text-white/95 leading-relaxed font-semibold mb-8">
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
    <section className="py-20 px-6 bg-primary overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <CanvasBackground color="#ffffff" variant="blobs" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-8 drop-shadow-md">
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
        <p className="text-white/80 mt-6 font-medium">{t(lang, 'mid_cta_sub')}</p>
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

