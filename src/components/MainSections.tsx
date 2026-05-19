import { motion } from "motion/react";
import { Globe, ArrowRight, Rocket } from "lucide-react";
import { CanvasBackground } from './CanvasBackground';

export function Navbar() {
  return (
    <nav className="hidden md:block bg-surface/90 border-b border-outline-variant shadow-sm sticky top-0 backdrop-blur-md z-50">
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto h-20">
        <div className="text-2xl font-display font-bold text-primary">FoodSpot <span className="text-lg font-semibold text-on-surface">Mobile</span></div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#beneficios" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-sm">
              Beneficios
            </a>
          </li>
          <li>
            <a href="#como-funciona" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-sm">
              Cómo Funciona
            </a>
          </li>
          <li>
            <a href="#precios" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-sm">
              Precios
            </a>
          </li>
          <li>
            <a href="#testimonios" className="text-on-surface-variant font-medium hover:text-primary transition-colors text-sm">
              Testimonios
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <button aria-label="Change language" className="hidden md:flex text-on-surface-variant hover:text-primary transition-colors">
            <Globe className="w-5 h-5" />
          </button>
          <a href="https://foodspotapp.vercel.app/start-trial" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-sm font-medium transition-all active:scale-95 shadow-sm inline-block">
            Comenzar Gratis
          </a>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-between overflow-hidden px-6 py-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="/hero.webp"
          alt="Fresh food and ingredients"
          loading="eager"
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
          La única App en LATAM — cámara de contenido para tu negocio gastronómico.
        </p>
      </div>

      <div className="relative z-20 w-full max-w-2xl">
        <div className="flex flex-col gap-4">
          <a
            href="https://foodspotapp.vercel.app/start-trial"
            className="bg-[#16a34a] hover:bg-[#15803d] text-white px-8 py-3.5 rounded-full text-base md:text-lg font-bold shadow-xl flex items-center gap-2 inline-flex transition-all w-fit"
          >
            Crear mi cuenta gratis
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-xs md:text-sm text-white font-bold tracking-widest uppercase drop-shadow-md">
            14 días gratis. Sin tarjeta de crédito.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-lg text-on-surface-variant mb-6 max-w-2xl mx-auto">
          Creada para restaurantes y negocios gastronómicos que quieren mejorar su gestión sin depender de 5 apps distintas.
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4">Todo lo que necesitas para crecer</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Herramientas poderosas disenadas para la gastronomia moderna.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-4 ambient-shadow hover-lift overflow-hidden">
          <picture>
            <source srcSet="/beforeafter.webp" type="image/webp" />
            <img
              src="/beforeafter.jpeg"
              alt="Before and After"
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
