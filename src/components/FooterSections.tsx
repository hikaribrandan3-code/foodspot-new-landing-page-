import { motion } from "motion/react";
import { Star } from "lucide-react";
import { CanvasBackground } from './CanvasBackground';

export function Testimonials() {
  const reviews = [
    {
      name: "Martín Gómez",
      role: "Dueño, Burger Station",
      quote: "Desde que usamos FoodSpot, nuestras ventas directas aumentaron un 40%. La interfaz es tan intuitiva que nuestro equipo aprendió a usarla en un día.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkvYIARZavcH4JACEszHpL5_jqSjXfbsXp5RlGI9QH2YljWq5EdLCWXOJSgoZ0zlOtWLJJaXh6v7J7UU8EpZaN1nWYs5A1EXdL3JdQECl3J12jh-7FDwyPWhSCLt4Or1IlayQ6RKHL2i4INhb3wo0Ku-Kj4Dp0bMheZcCNlcf-GcaiwpUivImdtm6QUyzWz23its8Rggr47Pqf9ZEuG0AY2-HN4Hcg8cjEa0b-anB0RfF9QM9GQGObaCo-ZKq5dlLjQv_cWt_7qzsn",
      rating: 5,
    },
    {
      name: "Sofía Reyes",
      role: "Directora, Green Bowl",
      quote: "Las herramientas de IA para inventario y promociones nos ahorran horas cada semana. Es literalmente como tener un gerente extra trabajando 24/7.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGcybAYVHqJNMmwISRAYhpLrymKa7EgQyOMRINv8BVx8Yr2EoZ-xEldWS28HM85pOZJYg_ufD7SL9yIn1hCm_MfQtCVYgr0cb9liTb7NXePW7Z1UDVMD-503h9cIrU1KfPfTpB_2UwUpk1bMZeBOqE5rXlm4lVsvqixqnNIU0syeto1f7SxdGbuD3ehHGs8IV31xVNQkRKz9H4yEMj4t5e_ssG5V0ziP5hkxcBUwu9fQzjlsWzdIvvYDIJGAWv4vX8ANJ_LOb-r5qO",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      role: "Fundador, La Masa",
      quote: "Dejamos de pagar comisiones abusivas a las apps de delivery. FoodSpot nos dio la independencia que necesitábamos para crecer nuestro propio canal.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIvfupqrNB2CpVZfh9pV_wo498HNQCUy9zw6OKqR8LmD3ibJE3_o1eCfmQruWDyRHI5UifB_FY5a54aldfei48bIeCiqtjHGRM9-71t-tuqTNj1b7gjjoz1kHcRL4_abPjk1j_4CKleded3ksLGKbGwoncQ0c_e8CrshG53EvWfdITrhmu7auVAEdxp5b2txFJgBX9jwW_hDtKNrxq-54So42HebU6gD-vwKyD43Mx7iOVGushrKqe7Zbz7GIdLYClMBo1VMRxQ1mw",
      rating: 4.5,
    },
  ];

  return (
    <section id="testimonios" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center text-on-surface mb-16">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((row, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 ambient-shadow flex flex-col"
            >
              <div className="flex items-center gap-1 mb-6 text-yellow-500">
                {[...Array(5)].map((_, idx) => (
                   <Star key={idx} className={`w-4 h-4 ${idx < Math.floor(row.rating) ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-on-surface-variant mb-8 italic flex-grow">"{row.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={row.avatar} alt={row.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-on-surface text-sm">{row.name}</h4>
                  <p className="text-xs text-on-surface-variant font-medium">{row.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="precios" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4">Planes simples, sin sorpresas</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Elige el plan que mejor se adapte al tamaño de tu negocio.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {/* Tier 1 */}
        <motion.div 
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col h-full relative overflow-hidden group shadow-sm hover:shadow-md"
        >
          <div className="absolute inset-0 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
            <CanvasBackground color="#757575" variant="blobs" />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-2xl font-display font-semibold text-on-surface mb-2">Prueba Gratis</h3>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-4xl font-display font-bold text-on-surface">$0</span>
            <span className="text-on-surface-variant text-sm">/14 días</span>
          </div>
          <p className="text-on-surface-variant mb-8 min-h-[48px]">Prueba la versión completa con todas las funcionalidades por 14 días.</p>
          <ul className="space-y-4 mb-8 flex-grow">
            {["Acceso total 14 días", "Setup inicial guiado", "Sin tarjeta requerida"].map((item, i) => (
              <li key={i} className="flex items-center text-sm text-on-surface font-medium">
                <div className="w-4 h-4 text-primary mr-3 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
            <button className="w-full py-4 rounded-full border-2 border-secondary text-secondary font-semibold hover:bg-secondary/5 transition-colors group-hover:scale-[1.02] active:scale-[0.98]">
              Empezar Prueba Gratis
            </button>
          </div>
        </motion.div>

        {/* Tier 2 */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          whileHover={{ scale: 1.03, y: -12, transition: { duration: 0.2 } }}
          className="bg-white border-2 border-primary rounded-2xl p-8 flex flex-col h-full relative shadow-xl transform md:-translate-y-4 overflow-hidden group ring-primary/20 hover:ring-8 transition-all"
        >
          <div className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity">
            <CanvasBackground color="#ff3d00" variant="blobs" />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
              Más Popular
            </div>
            <h3 className="text-2xl font-display font-semibold text-on-surface mb-2">Pro</h3>
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-4xl font-display font-bold text-on-surface">$25.99</span>
            <span className="text-on-surface-variant text-sm">/mes</span>
          </div>
          <p className="text-on-surface-variant mb-8 min-h-[48px]">Todas las herramientas profesionales para escalar tu negocio.</p>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "5 video juegos para clientes",
              "UGC marketing camera funcion",
              "Sistema de eventos",
              "Menú digital profesional",
              "Sistema de envíos integrado",
              "Gestión de Inventario",
              "Control de Expensas",
              "Staff backend (Personal)",
              "Mercado Pago integrado"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-sm text-on-surface font-medium">
                <div className="w-4 h-4 text-primary mr-3 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] group-hover:scale-[1.02]">
            Suscribirse Ahora
          </button>
        </div>
      </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const sections = [
    { title: "Producto", items: [{ name: "Características", href: "#beneficios" }, { name: "Precios", href: "#precios" }, { name: "Plantillas", href: "#" }] },
    { title: "Compañía", items: [{ name: "Nosotros", href: "#" }, { name: "Contacto", href: "https://wa.me/543512122600" }, { name: "Ubicación", href: "#" }, { name: "WhatsApp", href: "https://wa.me/543512122600" }] },
    { title: "Legal", items: [{ name: "Privacidad", href: "#" }, { name: "Términos", href: "#" }, { name: "Cookies", href: "#" }] },
  ];

  return (
    <footer className="bg-white border-t py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="text-2xl font-display font-bold text-primary mb-4">Foodspot</div>
          <p className="text-on-surface-variant text-sm mb-2 max-w-xs transition-all">
            El sistema operativo para restaurantes modernos. Lanza, gestiona y escala tu negocio gastronómico.
          </p>
          <p className="text-xs text-on-surface-variant mb-2 font-medium">
            Córdoba Capital, Argentina
          </p>
          <p className="text-xs text-on-surface-variant mb-6 font-medium">
            WhatsApp: +54 351 212 2600
          </p>
          <p className="text-xs text-on-surface-variant font-medium">© 2025 FoodSpot Mobile. All rights reserved.</p>
        </div>
        {sections.map((sec, i) => (
          <div key={i}>
            <h4 className="font-bold text-on-surface mb-6 uppercase text-[10px] tracking-widest">{sec.title}</h4>
            <ul className="space-y-3">
              {sec.items.map((item, j) => (
                <li key={j}>
                  <a href={item.href} className="text-sm text-on-surface-variant hover:text-primary transition-colors hover:underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
