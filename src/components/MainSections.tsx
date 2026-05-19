import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Globe, ArrowRight, Rocket, ArrowDown, Menu, X, ListChecks, Tag, Star, Mail } from "lucide-react";
import { CanvasBackground } from './CanvasBackground';

export function Navbar() {
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
    { label: 'Cómo Funciona', href: '#como-funciona', id: 'como-funciona', icon: ListChecks },
    { label: 'Precios', href: '#precios', id: 'precios', icon: Tag },
    { label: 'Testimonios', href: '#testimonios', id: 'testimonios', icon: Star },
    { label: 'Contactos', href: '#contactos', id: 'contactos', icon: Mail },
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
          <button aria-label="Change language" className="hidden md:flex text-on-surface-variant hover:text-primary transition-colors">
            <Globe className="w-5 h-5" />
          </button>

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
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-between overflow-hidden px-6 py-16 pb-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="/hero.webp"
          alt="Fresh food and ingredients"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl text-white font-black mb-6 drop-shadow-2xl">
          FoodSpot Mobile
        </h1>

        <p className="text-lg md:text-2xl text-white/95 leading-relaxed font-semibold italic drop-shadow-xl">
          La única App en LATAM con cámara de contenido para tu negocio gastronómico.
        </p>
      </div>

      <div className="relative z-20 w-full max-w-2xl mx-auto flex justify-center">
        <div className="flex flex-col gap-6 items-center text-center">
          <a
            href="https://foodspotapp.vercel.app/start-trial"
            className="bg-[#15803d] hover:bg-[#166534] text-white px-10 py-3 rounded-full text-base md:text-lg font-bold shadow-xl flex items-center gap-2 inline-flex transition-all active:scale-95"
          >
            Crear mi cuenta gratis
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-sm md:text-base text-white font-bold tracking-wider uppercase drop-shadow-md">
            14 días gratis. Sin tarjeta de crédito.
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
  return (
    <section className="py-20 px-6 bg-primary overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <CanvasBackground color="#ffffff" variant="blobs" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-8 drop-shadow-md">
          Listo para transformar tu negocio?
        </h2>
        <a
          href="https://foodspotapp.vercel.app/start-trial"
          className="bg-white text-primary px-10 py-5 rounded-full text-xl font-bold shadow-xl flex items-center gap-3 mx-auto transition-all hover:shadow-2xl active:scale-95 inline-flex"
        >
          Proba gratis 14 dias !
          <Rocket className="w-6 h-6" />
        </a>
        <p className="text-white/80 mt-6 font-medium">Sin tarjeta de credito. Sin vueltas.</p>
      </div>
    </section>
  );
}

export function UGCMarketingCTA() {
  return (
    <section className="py-16 px-6 bg-secondary overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-6 drop-shadow-md">
          Convierte cada pedido en contenido viral
        </h2>
        <a
          href="https://foodspotapp.vercel.app/start-trial"
          className="bg-white text-secondary px-9 py-4 rounded-full text-lg font-bold shadow-lg inline-flex items-center gap-2 transition-all hover:shadow-xl active:scale-95"
        >
          Empieza ahora
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
