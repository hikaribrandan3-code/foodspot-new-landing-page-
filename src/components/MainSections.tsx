import { motion } from "motion/react";
import { Globe, ArrowRight, Rocket, Camera, Smartphone, CreditCard } from "lucide-react";
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
          <button className="hidden md:flex text-on-surface-variant hover:text-primary transition-colors">
            <Globe className="w-5 h-5" />
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-sm font-medium transition-all active:scale-95 shadow-sm">
            Comenzar Gratis
          </button>
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
          Foodspot: The Shopify of Food
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl drop-shadow-md"
        >
          14 días gratis. Sin tarjeta requerida.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all active:scale-95 shadow-lg flex items-center gap-2"
        >
          Comenzar Gratis
          <ArrowRight className="w-5 h-5" />
        </motion.button>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-8 ambient-shadow hover-lift">
          <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center mb-6">
            <Camera className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-2xl font-display font-semibold text-on-surface mb-3">Menú Visual</h3>
          <p className="text-on-surface-variant mb-6">Sube fotos de alta calidad y deja que tu comida hable por sí sola.</p>
          <div className="relative h-40 bg-gray-100 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop"
              alt="Pizza Delicious"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="bg-[#009EE3]/5 border-2 border-[#009EE3]/20 rounded-2xl p-8 ambient-shadow hover-lift flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <CanvasBackground color="#009EE3" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#009EE3] flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div className="h-8 w-px bg-gray-200 mx-2"></div>
              <span className="text-[#009EE3] font-bold text-xl tracking-tight">Mercado Pago</span>
            </div>
            <h3 className="text-2xl font-display font-semibold text-on-surface mb-3">Cobros al instante</h3>
            <p className="text-on-surface-variant mb-6">Integración nativa con Mercado Pago. Recibe tu dinero en el acto con las comisiones más bajas del mercado.</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#009EE3]/10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold text-gray-400">Última transacción</span>
              <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-bold">EXITOSA</span>
            </div>
            <div className="flex justify-between items-end">
              <div className="text-2xl font-bold text-on-surface">$ 4.500,00</div>
              <div className="flex gap-1">
                <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
                <div className="w-6 h-4 bg-yellow-400 rounded-sm"></div>
              </div>
            </div>
          </div>
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
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary px-10 py-5 rounded-full text-xl font-bold shadow-xl flex items-center gap-3 mx-auto transition-shadow"
          >
            Proba gratis 14 dias !
            <Rocket className="w-6 h-6" />
          </motion.button>
          <p className="text-white/80 mt-6 font-medium">Sin tarjeta de crédito. Sin vueltas.</p>
        </motion.div>
      </div>
    </section>
  );
}
