import { useState, useEffect } from "react";
import { motion } from "motion/react";
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
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto h-20">
        <div className="text-2xl font-display font-bold text-primary">
          FoodSpot <span className="text-lg font-semibold text-on-surface">Mobile</span>
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
            className="px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold text-xs md:text-sm transition-all active:scale-95"
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
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-on-surface" />
              ) : (
                <Menu className="w-6 h-6 text-on-surface" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/20 md:hidden z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide from Right */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-20 right-0 h-screen w-72 bg-white md:hidden z-40 border-l border-gray-200 overflow-y-auto"
      >
        <div className="px-6 py-8 space-y-2">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  trackNavigation(link.id);
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 py-4 px-5 rounded-xl transition-all ${
                  isActive(link.id)
                    ? 'bg-primary text-white font-semibold shadow-lg shadow-primary/30'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                <IconComponent className="w-5 h-5 flex-shrink-0" />
                <span>{link.label}</span>
              </motion.a>
            );
          })}

          {/* Request Demo Button */}
          <motion.a
            href="#signup"
            onClick={(e) => {
              e.preventDefault();
              trackNavigation('signup');
              document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 py-4 px-5 rounded-xl transition-all bg-primary text-white font-semibold shadow-lg shadow-primary/30 mt-4"
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span>{lang === 'es' ? 'Solicitar Demo' : lang === 'pt' ? 'Solicitar Demo' : 'Request Demo'}</span>
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
}

export function Hero() {
  const { lang } = useLanguage();
  const [accentIndex, setAccentIndex] = useState(0);

  const accents = {
    es: ['Shopify para comida', 'sin comisiones', 'contenido orgánico', 'sin código'],
    en: ['Shopify for food', '0% commission', 'organic content', 'no code'],
    pt: ['Shopify para comida', 'sem comissões', 'conteúdo orgânico', 'sem código']
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAccentIndex((prev) => (prev + 1) % accents[lang].length);
    }, 777);
    return () => clearInterval(interval);
  }, [lang, accents]);

  return (
    <section className="w-full bg-white px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-6xl text-on-surface font-black mb-4 leading-tight">
              {lang === 'es' ? 'Crear tu tienda online' : lang === 'pt' ? 'Criar sua loja online' : 'Create your online store'} <span className="inline-block md:block w-max md:w-full" style={{ minWidth: '280px', maxWidth: '100%' }}>
                <motion.span key={accentIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }} style={{ color: '#10b981', display: 'block', width: '100%' }}>{accents[lang][accentIndex]}</motion.span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant mb-8 leading-relaxed font-medium">
              {lang === 'es'
                ? 'Tu propia app de marca. Pedidos directos. Y el 100% de cada venta — sin comisiones, nunca.'
                : lang === 'pt'
                ? 'Seu próprio app de marca. Pedidos diretos. E 100% de cada venda — sem comissões, nunca.'
                : 'Your own branded app. Direct orders. And 100% of every sale — no commissions, ever.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-start">
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
        <div className="md:hidden flex justify-center mt-12">
          <AnimatedPhoneShowcase />
        </div>
      </div>
    </section>
  );
}

function AnimatedPhoneShowcase() {
  const [screenIndex, setScreenIndex] = useState(0);
  const screens = [
    { src: '/IMG_5412.jpeg', alt: 'Menu' },
    { src: '/IMG_5413.jpeg', alt: 'Order' },
    { src: '/IMG_5414.jpeg', alt: 'Payment' },
    { src: '/IMG_5415.jpeg', alt: 'Receipt' }
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
    ? "relative w-80 h-[650px]"
    : "relative w-48 h-[380px]";

  return (
    <div className={phoneSize}>
      {/* Phone frame */}
      <div className="absolute inset-0 bg-black rounded-[48px] shadow-2xl border-[8px] border-gray-900 overflow-hidden flex flex-col">
        {/* Screen content - just display the image */}
        <motion.div
          key={screenIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="flex-1 overflow-hidden w-full h-full"
        >
          <img
            src={screens[screenIndex].src}
            alt={screens[screenIndex].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Indicator dots */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
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
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ArrowDown className="w-5 h-5 mx-auto" />
        </motion.div>
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
              src="/beforeafter.jpeg"
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

