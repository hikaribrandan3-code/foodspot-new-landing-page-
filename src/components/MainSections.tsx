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
        </div>
      </motion.div>
    </nav>
  );
}

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="w-full bg-white px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-6xl text-on-surface font-black mb-4 leading-tight">
              {t(lang, 'hero_headline')} <span className="text-[#10b981]">{t(lang, 'hero_accent')}</span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant mb-8 leading-relaxed font-medium">
              {lang === 'es'
                ? 'Tu propia app de marca. Pedidos directos. Y el 100% de cada venta — sin comisiones, nunca.'
                : lang === 'pt'
                ? 'Seu próprio app de marca. Pedidos diretos. E 100% de cada venda — sem comissões, nunca.'
                : 'Your own branded app. Direct orders. And 100% of every sale — no commissions, ever.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="https://foodspotapp.vercel.app/start-trial"
                onClick={() => trackCtaClick('hero_create_account', 'hero')}
                className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all active:scale-95 inline-flex items-center gap-2"
              >
                {t(lang, 'hero_cta')}
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#beneficios"
                className="border-2 border-[#10b981] text-[#10b981] px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all"
              >
                {lang === 'es' ? 'Ver cómo funciona' : lang === 'pt' ? 'Ver como funciona' : 'See how it works'}
              </a>
            </div>

            <p className="text-sm text-on-surface-variant mt-6 font-medium">
              ✓ {t(lang, 'hero_trial')}
            </p>
          </div>

          {/* Right: Animated phone mockup */}
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
  const screens = ['menu', 'order', 'payment', 'receipt'];
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getScreenContent = () => {
    const screen = screens[screenIndex];

    switch(screen) {
      case 'menu':
        return (
          <div className="h-full bg-white flex flex-col">
            {/* Logo */}
            <div className="p-4 text-center border-b">
              <p className="text-2xl font-bold text-[#8B4513]">SAPID<span className="text-red-700">🍔</span></p>
              <p className="text-xl font-bold text-red-700">BURGERS</p>
            </div>

            {/* Categories */}
            <div className="px-3 py-3 border-b flex gap-2 overflow-x-auto">
              <div className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap">Burgers</div>
              <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-xs whitespace-nowrap">Postres</div>
              <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-xs whitespace-nowrap">Pizza</div>
              <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-xs whitespace-nowrap">Combos</div>
            </div>

            {/* Menu items */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              <p className="text-xs font-bold text-gray-500 mt-2">Burgers</p>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img src="/IMG_5412.png" alt="Sample burger" className="w-full h-24 object-cover" />
                <div className="p-3">
                  <p className="font-bold text-sm">Sample burger</p>
                  <p className="text-gray-600 text-sm">$79.000</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img src="/IMG_5413.png" alt="Super burger" className="w-full h-24 object-cover" />
                <div className="p-3">
                  <p className="font-bold text-sm">Super burger</p>
                  <p className="text-gray-600 text-sm">$8.000</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img src="/IMG_5414.png" alt="Stacked burger" className="w-full h-24 object-cover" />
                <div className="p-3">
                  <p className="font-bold text-sm">Stacked burger</p>
                  <p className="text-gray-600 text-sm">$8.000</p>
                </div>
              </div>
            </div>

            {/* Order preview */}
            <div className="border-t p-3 bg-gray-50">
              <p className="text-xs text-gray-400 uppercase mb-2">TU PEDIDO</p>
              <div className="flex justify-between items-center text-sm mb-2">
                <p>Pizza example 3 <span className="text-gray-600">×1</span></p>
                <p className="font-bold">$9.000</p>
              </div>
              <div className="border-t pt-2 font-bold text-sm flex justify-between">
                <p>Total</p>
                <p>$9.000</p>
              </div>
            </div>
          </div>
        );
      case 'order':
        return (
          <div className="h-full bg-white flex flex-col overflow-y-auto">
            {/* Header */}
            <div className="p-4 border-b sticky top-0 bg-white">
              <p className="font-bold text-xl mb-3">Tu pedido</p>
              <div className="flex gap-3">
                <button className="font-bold text-black bg-black text-white px-4 py-2 rounded-full text-xs">Para llevar</button>
                <button className="text-gray-600 text-xs">Comer en Local</button>
                <button className="text-gray-600 text-xs">Envios</button>
              </div>
            </div>

            {/* Delivery details */}
            <div className="p-4 space-y-3">
              <div>
                <p className="text-xs font-bold text-gray-700 mb-2">NOMBRE</p>
                <input type="text" value="Hikari Brandan" className="w-full bg-yellow-100 border border-yellow-300 rounded-lg p-3 text-sm font-medium" readOnly />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-700 mb-2">TELÉFONO</p>
                <input type="text" value="2538939452" className="w-full bg-yellow-100 border border-yellow-300 rounded-lg p-3 text-sm font-medium" readOnly />
              </div>

              {/* Payment methods */}
              <div className="mt-4">
                <p className="font-bold text-lg mb-3">Medio de Pago</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border-b">
                    <div className="w-5 h-5 rounded-full bg-black"></div>
                    <div>
                      <p className="font-bold text-sm">Efectivo</p>
                      <p className="text-gray-600 text-xs">Pagar al recibir</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border-b">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                    <div>
                      <p className="font-bold text-sm">WhatsApp</p>
                      <p className="text-gray-600 text-xs">Confirmar por WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                    <div>
                      <p className="font-bold text-sm">Mercado Pago</p>
                      <p className="text-gray-600 text-xs">Tarjeta de crédito/débito o billetera</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="p-4 border-t">
              <button className="w-full bg-[#10b981] text-white font-bold py-3 rounded-full text-sm">Confirmar Pedido →</button>
            </div>
          </div>
        );
      case 'payment':
        return (
          <div className="h-full bg-white flex flex-col overflow-y-auto">
            {/* Payment header */}
            <div className="p-4 border-b sticky top-0 bg-white">
              <p className="font-bold text-xl">Medio de Pago</p>
            </div>

            {/* Payment options */}
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3 p-3 border-b">
                <div className="text-2xl">💵</div>
                <div className="flex-1">
                  <p className="font-bold text-sm">Efectivo</p>
                  <p className="text-gray-600 text-xs">Pagar al recibir</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-black"></div>
              </div>
              <div className="flex items-center gap-3 p-3 border-b">
                <div className="text-2xl">💬</div>
                <div className="flex-1">
                  <p className="font-bold text-sm">WhatsApp</p>
                  <p className="text-gray-600 text-xs">Confirmar por WhatsApp</p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-400"></div>
              </div>
              <div className="flex items-center gap-3 p-3">
                <div className="text-2xl">🏦</div>
                <div className="flex-1">
                  <p className="font-bold text-sm">Mercado Pago</p>
                  <p className="text-gray-600 text-xs">Tarjeta de crédito/débito o billetera</p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-400"></div>
              </div>
            </div>

            {/* Summary */}
            <div className="border-t p-4">
              <p className="font-bold text-sm mb-3">Resumen</p>
              <div className="flex gap-3 mb-4">
                <img src="/IMG_5415.png" alt="Pizza example 3" className="w-16 h-16 object-cover rounded-lg" />
                <div className="flex-1">
                  <p className="font-bold text-sm">Pizza example 3</p>
                  <p className="text-gray-600 text-xs">$9.000</p>
                  <div className="flex gap-2 mt-2">
                    <button className="text-gray-600 text-sm">−</button>
                    <span className="text-sm">1</span>
                    <button className="text-gray-600 text-sm">+</button>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>$9.000</span>
                </div>
                <div className="border-t pt-2 font-bold text-[#10b981] flex justify-between">
                  <span>Total</span>
                  <span>$9.000</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="p-4 border-t">
              <button className="w-full bg-[#10b981] text-white font-bold py-3 rounded-full text-sm">Confirmar Pedido →</button>
            </div>
          </div>
        );
      case 'receipt':
        return (
          <div className="h-full bg-white flex flex-col overflow-y-auto">
            {/* Header with wavy separator */}
            <div className="text-center p-4 border-b">
              <p className="text-lg font-bold text-red-700 mb-2">SAPID BURGERS</p>
              <svg className="w-full h-3 mb-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q12.5,0 25,5 T50,5 T75,5 T100,5" stroke="#ccc" fill="none" strokeWidth="1"/>
              </svg>
            </div>

            {/* Receipt content */}
            <div className="flex-1 p-4 space-y-3">
              <p className="text-xs text-gray-500">Foodspot mobile</p>
              <div>
                <p className="text-2xl font-bold text-black mb-1">Pedido Confirmado</p>
                <p className="text-sm text-gray-600">Esperando que comience el restaurante</p>
              </div>

              <p className="text-xs text-gray-600">
                <span className="font-bold">Pedido # 32</span> · Jun 12, 2026 · 1:48 PM
              </p>

              {/* Divider */}
              <div className="border-t pt-3">
                <div className="flex justify-between text-sm mb-2">
                  <p className="text-gray-600">1x Pizza example 3</p>
                  <p className="font-bold">$9.000</p>
                </div>
              </div>

              {/* Summary lines */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-600">$9.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Impuestos</span>
                  <span className="text-gray-600">$0</span>
                </div>
                <div className="border-t pt-2 font-bold text-base">
                  <div className="flex justify-between">
                    <span>TOTAL</span>
                    <span className="text-[#10b981]">$9.000</span>
                  </div>
                </div>
              </div>

              {/* Payment & Status */}
              <div className="border-t pt-3 text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-600">Método de Pago</span>
                  <span className="font-bold">Efectivo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estado</span>
                  <span className="font-bold">Pedido Confirmado</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Phone size: bigger on desktop, taller on mobile (mobile reduced 12%)
  const phoneSize = isMobile
    ? "relative w-72 h-[572px]"
    : "relative w-96 h-[550px]";

  return (
    <div className={phoneSize}>
      {/* Phone frame */}
      <div className="absolute inset-0 bg-black rounded-[48px] shadow-2xl border-[14px] border-gray-900 overflow-hidden flex flex-col">
        {/* Status bar */}
        <div className="bg-white h-6 flex items-center justify-between px-4 text-xs font-semibold border-b border-gray-200">
          <span>9:41</span>
          <span>📶 🔋</span>
        </div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-10"></div>

        {/* Screen content */}
        <motion.div
          key={screenIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 overflow-hidden"
        >
          {getScreenContent()}
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
    <section className="py-20 px-6 bg-gradient-to-b from-surface/50 to-surface/25">
      <div className="max-w-5xl mx-auto">
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

