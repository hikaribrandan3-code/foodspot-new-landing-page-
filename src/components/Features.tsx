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
      desc: "Sin hardware. Sin papelería. Sin drama. Conecta Mercado Pago con token + user ID. Cobra al instante. Todo ocurre en el app.",
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


    </section>
  );
}

export function Features() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-6">Foodspot AI</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl">
          Tu asistente personal de estrategia gastronomica. Genera promociones inteligentes y optimiza tus costos analizando tus datos en tiempo real.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <img
          src="/foodspotaiimage.png"
          alt="FoodSpot AI Features"
          loading="lazy"
          width={1200}
          height={800}
          className="w-full max-w-4xl h-auto rounded-2xl shadow-2xl"
        />
      </motion.div>
    </section>
  );
}

export function UGCMarketing() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="font-display text-4xl md:text-5xl text-on-surface font-black">Convertí a cada cliente en contenido</h2>
      </motion.div>

      <div className="flex flex-col items-center gap-8">
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
