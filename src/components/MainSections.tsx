import { motion } from "motion/react";
import { Globe, ArrowRight, Rocket } from "lucide-react";
import { CanvasBackground } from './CanvasBackground';

export function Navbar() {
  return (
    <nav className="hidden md:block bg-surface/90 border-b border-outline-variant shadow-sm sticky top-0 backdrop-blur-md z-50">
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto h-20">
        <div className="text-2xl font-display font-bold text-primary">FoodSpot</div>
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
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <CanvasBackground color="#ff3d00" variant="blobs" />
        <div className="absolute inset-0 opacity-40">
          <CanvasBackground color="#ffffff" variant="dots" />
        </div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtl8ruMFCExYnS-qKzMz2L464gUvthxKCJsQ8w-CK3_2xFLtehDsGimH4eDNBkdXz1K1H5BS1AbqltEexwumJusx8B8R0xLtQFrYU_rSrROounwskDUZRYt4MAwx-cOx3W0TIJnkp_MhiuWADww6kyxzVIyCCVgs1SE-h_kRcus8MLzxGMqzst8EDdfVUArAcdHmxSsMgrbJq_zFRyjXewemByNGophKnpyjNvFVJeUzvLgBU2vhk20iYlAbVos3pCGuIiBV5Wfe3I"
          alt="Restaurant Kitchen"
          loading="eager"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl text-white mb-6 drop-shadow-lg"
        >
          FoodSpot Mobile : The Shopify of the Food Industry
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-[22px] text-white font-bold mb-2 max-w-2xl drop-shadow-lg"
        >
          14 días gratis. Sin tarjeta requerida.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-base text-white/80 mb-6 max-w-2xl drop-shadow-md"
        >
          Lanzá tu app de delivery en minutos. Sin código.
        </motion.p>
        <motion.a
          href="https://foodspotapp.vercel.app/start-trial"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all active:scale-95 shadow-lg flex items-center gap-2 inline-flex"
        >
          Comenzar Gratis
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4">Todo lo que necesitas para crecer</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Herramientas poderosas diseñadas para la gastronomía moderna.
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
      <div className="absolute inset-0 opacity-10">
        <CanvasBackground color="#ffffff" variant="dots" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8 drop-shadow-md">
            ¿Listo para transformar tu negocio?
          </h2>
          <motion.a
            href="https://foodspotapp.vercel.app/start-trial"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary px-10 py-5 rounded-full text-xl font-bold shadow-xl flex items-center gap-3 mx-auto transition-shadow inline-flex"
          >
            Proba gratis 14 dias !
            <Rocket className="w-6 h-6" />
          </motion.a>
          <p className="text-white/80 mt-6 font-medium">Sin tarjeta de crédito. Sin vueltas.</p>
        </motion.div>
      </div>
    </section>
  );
}
