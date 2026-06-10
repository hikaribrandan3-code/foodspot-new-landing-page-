import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Rocket, ArrowDown, Menu, X, ListChecks, Tag, Star, Mail, DollarSign, Database, Share2, Instagram, Music, Lightbulb } from "lucide-react";
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

        <div className="flex items-center space-x-4">
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
        className="fixed top-20 right-0 h-screen w-72 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] md:hidden z-40 border-l border-white/5 overflow-y-auto"
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
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <IconComponent className="w-5 h-5 flex-shrink-0" />
                <span>{link.label}</span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}

export function Hero() {
  const { lang } = useLanguage();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-between overflow-hidden px-6 py-16 pb-24">
      <div className="absolute inset-0 overflow-hidden">
        {isMobile ? (
          <picture>
            <source srcSet="/hero.webp" type="image/webp" />
            <img
              src="/hero.jpg"
              alt="FoodSpot Hero"
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/foodspotherovideo.webm" type="video/webm" />
            <source src="/foodspotherovideo.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      </div>

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl text-white font-black mb-6 drop-shadow-2xl leading-tight">
          {t(lang, 'hero_headline')} <span className="text-emerald-400">{t(lang, 'hero_accent')}</span>
        </h1>
      </div>

      <div className="relative z-20 w-full max-w-2xl mx-auto flex justify-center">
        <div className="flex flex-col gap-6 items-center text-center">
          <a
            href="https://foodspotapp.vercel.app/start-trial"
            onClick={() => trackCtaClick('hero_create_account', 'hero')}
            className="bg-[#15803d] hover:bg-[#166534] text-white px-10 py-3 rounded-full text-base md:text-lg font-bold shadow-xl flex items-center gap-2 inline-flex transition-all active:scale-95"
          >
            {t(lang, 'hero_cta')}
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-sm md:text-base text-white font-bold tracking-wider uppercase drop-shadow-md">
            {t(lang, 'hero_trial')}
          </p>
        </div>
      </div>

      <div className="relative z-20 flex justify-center pt-8">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}

export function HeroSubtitle() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-surface to-surface/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-on-surface text-center mb-16 font-black">
          {t(lang, 'subtitle_heading')}
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
              <Instagram className="w-10 h-10 text-primary" />
              <Music className="w-10 h-10 text-primary" />
              <Share2 className="w-10 h-10 text-primary" />
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

export function DemoSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-on-surface-variant mb-8 font-medium text-lg">{t(lang, 'demo_waiting')}</p>
        <a
          href="https://foodspotapp.vercel.app/foodspot"
          onClick={() => trackCtaClick('demo_button', 'demo_section')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-20 py-6 rounded-full font-black text-3xl shadow-2xl transition-all active:scale-95 hover:shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            color: "white",
            border: "3px solid #059669",
            boxShadow: "0 0 30px rgba(16, 185, 129, 0.4), 0 8px 24px rgba(0,0,0,0.15)",
          }}
        >
          {t(lang, 'demo_button')}
        </a>
      </div>
    </section>
  );
}
