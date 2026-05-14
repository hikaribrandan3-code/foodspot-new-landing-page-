import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto cuesta FoodSpot Mobile?",
    answer:
      "FoodSpot Mobile, el software de restaurante líder, cuesta $25.99 USD mensuales (aproximadamente 35.000 ARS). Sin cargos ocultos. Cancelá cuando quieras. Incluye: menú digital completo, sistema operativo integrado para gestión de restaurantes, gestión de personal, inventario y gastos, finance tracker, integración Mercado Pago, herramientas de marketing UGC, asistente IA, 5 juegos integrados, módulo completo de eventos, branding personalizado e integración WhatsApp. Todo disponible en prueba gratuita.",
  },
  {
    question: "¿Cuánto tarda la configuración de FoodSpot Mobile?",
    answer:
      "Entre 30 minutos y 1 hora. Ten listos: fotos del menú (PNG/JPEG), logo en 16:9 fondo blanco, y credenciales de Mercado Pago. La capacitación del personal para nuestro sistema de gestión de cocina toma ~3 horas con seguimientos diarios para dominar el flujo de cocina.",
  },
  {
    question: "¿Funciona FoodSpot Mobile en mi teléfono?",
    answer:
      "Sí. iOS, Android y web. FoodSpot Mobile está disponible en ambas plataformas. Elegimos no estar en App Store ni Google Play para enviar actualizaciones semanales al instante—sin retrasos. Tu app se actualiza automáticamente.",
  },
  {
    question: "¿Me cobran comisión en FoodSpot Mobile?",
    answer:
      "Cero comisión. No nos quedamos con nada. Solo pagás el 3% de Mercado Pago—lo mismo que pagarías en cualquier plataforma de pago. Otros ofrecen solo un menú digital. FoodSpot Mobile es un sistema completo de gestión para restaurantes.",
  },
  {
    question: "¿Cómo integro mi menú actual en FoodSpot Mobile?",
    answer:
      "Sube fotos de tu menú en PNG/JPEG (optimizadas cargan más rápido). Incluí tu logo en 16:9 fondo blanco. Nuestro sistema de gestión de pedidos y flujo de cocina se integra en ~3 horas. El kitchen display system elimina mensajes constantes—mantiene felices a tu equipo y clientes.",
  },
  {
    question: "¿Para qué tipo de restaurante sirve FoodSpot Mobile?",
    answer:
      "Todos. Restaurantes tradicionales, vendedores callejeros, ghost kitchens, food trucks, pizzerías, cafeterías—cualquier negocio gastronómico. FoodSpot Mobile crece con tu empresa.",
  },
  {
    question: "¿Qué soporte ofrece FoodSpot Mobile?",
    answer:
      "Capacitación y soporte completo incluido. FoodSpot Mobile incluye actualizaciones semanales, línea telefónica de negocios para ayuda urgente, y tutoriales próximamente. Siempre bienvenidos los comentarios.",
  },
  {
    question: "¿Es seguro mi información en FoodSpot Mobile?",
    answer:
      "Sí. Todos los datos de clientes y negocio están protegidos por políticas RLS estrictas. Cumplimos con regulaciones de protección de datos. Tus datos son tuyos.",
  },
  {
    question: "¿Cómo funciona la IA de FoodSpot Mobile?",
    answer:
      "El asistente IA analiza tus datos de ventas, operaciones y patrones de clientes en tiempo real. Te deja hacer preguntas como \"¿Qué promos deberíamos hacer?\" y te da insights personalizados. Se adapta a tu negocio. Estamos construyendo IA agentica donde cada empleado tiene su propia IA que aprende de su trabajo. Primero de su tipo en el mercado de software para restaurantes.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Todo lo que necesitás saber sobre FoodSpot Mobile.
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-5">
              <button
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                className="w-full flex items-start justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-semibold text-on-surface pr-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-1 shrink-0 text-primary"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                    role="region"
                  >
                    <p className="pt-4 text-base text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
