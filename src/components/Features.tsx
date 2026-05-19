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
            <div
              key={idx}
              className={`flex flex-col items-center text-center fade-in-up ${step.offset || ""}`}
              style={{ animationDelay: `${idx * 0.2}s` }}
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
            </div>
          ))}
        </div>
      </div>

      {/* Mercado Pago */}
      <div className="mt-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative overflow-hidden p-8 rounded-3xl bg-primary-container/5 border border-primary/10"
          >
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <CanvasBackground color="#ff3d00" variant="blobs" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-6">Pagos rapidos. Negocio ganador.</h2>
              <p className="text-lg text-on-surface-variant mb-6">
                Integracion nativa con Mercado Pago. Recibi tu dinero al instante con las comisiones mas bajas del mercado. Cobra como un grande desde el primer dia.
              </p>
            </div>
          </motion.div>

        </div>
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
              src="/ai-mockup.webp"
              alt="AI Mockup"
              loading="lazy"
              width={288}
              height={550}
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

export function UGCMarketing() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-4xl md:text-5xl text-on-surface font-black">Convertí a cada cliente en publicidad 100% gratis</h2>
      </motion.div>

      <div className="flex flex-col items-center gap-12">
        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-[550px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-8 border-gray-100"
            >
              <source src="/ugc.webm" type="video/webm" />
              <source src="/ugc.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-on-surface font-semibold max-w-2xl">
            El 71% de las personas te visita porque un amigo subió una foto.
          </p>
        </motion.div>

        {/* Flow */}
        <motion.div
          className="text-center"
        >
          <div className="text-lg md:text-xl text-on-surface-variant font-semibold flex items-center justify-center gap-3 flex-wrap">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Foto
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl"
            >
              →
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Compartir
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl"
            >
              →
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Nueva Cliente
            </motion.span>
          </div>
        </motion.div>

        {/* Benefits Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/ugc-benefits.webp"
            alt="UGC Benefits"
            loading="lazy"
            width={572}
            height={1024}
            className="w-full max-w-xs rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
