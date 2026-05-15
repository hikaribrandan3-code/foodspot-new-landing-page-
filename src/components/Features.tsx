import { motion } from "motion/react";
import { Bot, LayoutGrid, ArrowDown, Camera, CreditCard, Rocket } from "lucide-react";
import { CanvasBackground } from './CanvasBackground';

export function HowItWorks() {
  const steps = [
    {
      title: "Crea tu menu en minutos",
      desc: "Subi fotos, precios y categorias. Incluso podes agregar calorias, advertencias de salud y etiquetas personalizadas para casos especiales. Tu tienda lista al instante. 100% NO-CODE",
      img: "/1menu.png",
      imgWebp: "/1menu.webp",
      rotation: "rotate-2",
    },
    {
      title: "Personaliza tu marca",
      desc: "Colores, logos e identidad. Dale vida a tu app con nuestras mascotas animadas.",
      img: "/2brand.png",
      imgWebp: "/2brand.webp",
      rotation: "-rotate-2",
      offset: "md:mt-12",
    },
    {
      title: "Lanza y vende",
      desc: "Comparti tu link, gestiona pedidos y deja que el sistema automatice el marketing por vos.",
      img: "/3pago.png",
      imgWebp: "/3pago.webp",
      rotation: "rotate-2",
      offset: "md:mt-24",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4">De tu cocina al mundo en 3 pasos</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-6">
            Tres simples pasos para digitalizar tu restaurante.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <ArrowDown className="w-8 h-8 text-primary/50" />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`flex flex-col items-center text-center ${step.offset || ""}`}
            >
              <div className="relative w-64 h-[500px] mb-8">
                <div className={`absolute inset-0 bg-gray-200 rounded-[2.5rem] shadow-xl transform ${step.rotation}`}></div>
                <picture>
                  <source srcSet={step.imgWebp} type="image/webp" />
                  <img
                    src={step.img}
                    alt={step.title}
                    loading="lazy"
                    width="256"
                    height="500"
                    className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] shadow-md border-4 border-white"
                  />
                </picture>
                <div className="absolute -left-4 top-10 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-display text-xl font-bold shadow-lg z-10">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-2xl font-display font-semibold text-on-surface mb-3">{step.title}</h3>
              <p className="text-on-surface-variant max-w-[250px]">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="md:hidden mt-8 text-primary/30">
                  <ArrowDown className="w-6 h-6 mx-auto animate-bounce" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mercado Pago */}
      <div className="mt-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-8">Pagos rapidos. Negocio ganador.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</div>
              <p className="text-on-surface-variant">Integracion nativa con Mercado Pago</p>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</div>
              <p className="text-on-surface-variant">Recibí dinero al instante</p>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</div>
              <p className="text-on-surface-variant">Comisiones mas bajas del mercado</p>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">✓</div>
              <p className="text-on-surface-variant">Cobra como un grande desde el dia 1</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* UGC Marketing */}
      <div className="mt-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-8">Tu Ticket, Tu Personaje: El unico marketing animado del mercado</h2>
          <div className="flex justify-center mb-12">
            <svg className="w-64 h-24" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
              {/* Circle 1 */}
              <circle cx="30" cy="50" r="20" fill="#ff3d00" opacity="0.2" stroke="#ff3d00" strokeWidth="2"/>
              <text x="30" y="55" textAnchor="middle" className="font-bold text-sm" fill="#ff3d00">Pide</text>

              {/* Arrow 1 */}
              <line x1="50" y1="50" x2="90" y2="50" stroke="#ff3d00" strokeWidth="2"/>
              <polygon points="95,50 88,46 88,54" fill="#ff3d00"/>

              {/* Circle 2 */}
              <circle cx="120" cy="50" r="20" fill="#ff3d00" opacity="0.2" stroke="#ff3d00" strokeWidth="2"/>
              <text x="120" y="55" textAnchor="middle" className="font-bold text-sm" fill="#ff3d00">Captura</text>

              {/* Arrow 2 */}
              <line x1="140" y1="50" x2="180" y2="50" stroke="#ff3d00" strokeWidth="2"/>
              <polygon points="185,50 178,46 178,54" fill="#ff3d00"/>

              {/* Circle 3 */}
              <circle cx="210" cy="50" r="20" fill="#ff3d00" opacity="0.2" stroke="#ff3d00" strokeWidth="2"/>
              <text x="210" y="55" textAnchor="middle" className="font-bold text-sm" fill="#ff3d00">Comparte</text>
            </svg>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          <div className="flex-1 space-y-4">
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
              <p className="text-on-surface-variant">No es solo una orden, es contenido</p>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
              <p className="text-on-surface-variant">Nuestras mascotas invitan a tus clientes a sacarse fotos</p>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">✓</div>
              <p className="text-on-surface-variant">Tu marca se vuelve viral de forma organica</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-[420px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              >
                <source src="/ugc.webm" type="video/webm" />
                <source src="/ugc.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-32">
      {/* AI Assistant */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1 relative overflow-hidden p-8 rounded-3xl bg-secondary-container/5 border border-secondary/10"
        >
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <CanvasBackground color="#00e676" variant="blobs" />
          </div>
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center mb-6">
              <Bot className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-6">Foodspot AI</h2>
            <p className="text-lg text-on-surface-variant mb-6">
              Tu asistente personal de estrategia gastronomica. Genera promociones inteligentes y optimiza tus costos analizando tus datos en tiempo real.
            </p>
            <ul className="space-y-4 mb-8">
              {["Generacion de promos automaticas", "Analisis de ventas predictivo"].map((item, i) => (
                <li key={i} className="flex items-center text-on-surface-variant">
                  <div className="w-5 h-5 text-primary mr-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-72 h-[550px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy9P5dWBZ0cOuC_KN51YotmNltwsh_oGwSqe-LMNyGTukaFC5XP_yw0uzuFXhOePhqCUsZBGvbmL_V36yQj9_mLo8rN-VFq8A0BH0jHqA_MJ9sGwWTzOkQLkRA3EqWGIvUvOGY_vc8bTNnQ9iNWmW54pPnwrQl6VlD1WIHeKJxOGCt-Oxl76BlgV7tLfaMg2uj0xsY88G1TpCIsewgCBc0NXIFAFwlJeQgQkp0KYKWmMNX0KweRUhlhPcuj4svm-SkgJh-4tmMp8Q_"
              alt="AI Mockup"
              loading="lazy"
              width="288"
              height="550"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-8 border-gray-100"
            />
          </div>
        </motion.div>
      </div>

      {/* Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-[550px]">
            <picture>
              <source srcSet="/finance.webp" type="image/webp" />
              <img
                src="/finance.png"
                alt="Financial Tracker"
                loading="lazy"
                width="288"
                height="550"
                className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-8 border-gray-100"
              />
            </picture>
          </div>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
             <LayoutGrid className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-6">Control Financiero Total</h2>
          <p className="text-lg text-on-surface-variant mb-6">
            Seguimiento detallado de ingresos, egresos y proyecciones. Todo lo que necesitas para que tu negocio sea rentable.
          </p>
          <ul className="space-y-4 mb-8">
            {["Disenos optimizados para moviles", "Personalizacion completa de marca"].map((item, i) => (
              <li key={i} className="flex items-center text-on-surface-variant">
                <div className="w-5 h-5 text-primary mr-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

    </section>
  );
}
