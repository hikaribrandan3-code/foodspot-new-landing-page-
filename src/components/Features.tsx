import { motion } from "motion/react";
import { Bot, LayoutGrid, ArrowDown } from "lucide-react";
import { CanvasBackground } from './CanvasBackground';
// Helper Icons (Standardized for the app)
const Icons = {
  AutoAwesome: () => <span className="material-symbols-outlined">auto_awesome</span>,
  ViewQuilt: () => <span className="material-symbols-outlined">view_quilt</span>,
  Check: () => (
    <div className="w-5 h-5 text-primary mr-3">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  ),
};

export function HowItWorks() {
  const steps = [
    {
      title: "Poder de marca",
      desc: "Personaliza tu tienda con tus colores, logo e identidad en segundos.",
      img: "/1menu.png", 
      rotation: "rotate-2",
    },
    {
      title: "Experiencia Social",
      desc: "Tus clientes comparten su experiencia automáticamente en redes sociales.",
      img: "/2brand.png",
      rotation: "-rotate-2",
      offset: "md:mt-12",
    },
    {
      title: "Control Absoluto",
      desc: "Métricas en tiempo real de tus ventas, pedidos y medios de pago preferidos.",
      img: "/3pago.png",
      rotation: "rotate-2",
      offset: "md:mt-24",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4">Cómo funciona</h2>
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
                <img
                  src={step.img}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] shadow-md border-4 border-white"
                />
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
              Tu asistente personal de estrategia gastronómica. Genera promociones inteligentes y optimiza tus costos analizando tus datos en tiempo real.
            </p>
            <ul className="space-y-4 mb-8">
              {["Generación de promos automáticas", "Análisis de ventas predictivo"].map((item, i) => (
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
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2g9MumO-ho-t-gWGHXPo1_DUM1u0uLWqIg8CZLc3pu-Ht1ClRaK7C_asW73giKSOHRgIf_p4d7vTvVh2PAmhbLOdKPizLHfqwFrPzgIyKQzEke9Q2PoUX4ghGFKt0HAjdrwOAMwnGw0GVWzj3689m1mzbcRyBkbyqsCqt0lvQtkv1vlUkCBED2FBt4hlqcXteJ8RmH-7QtWu0Oj1IJtvh9ELXE_acDcG9GtJ8s_xf6mU-JrkeYg72XVjiaBgWLPOlEpQbv7ZgtOak"
              alt="Financial Tracker"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-8 border-gray-100"
            />
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
            {["Diseños optimizados para móviles", "Personalización completa de marca"].map((item, i) => (
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
