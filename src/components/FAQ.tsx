import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { trackFaqClick } from "../services/ga4Events";

const faqs = [
  {
    question: "¿Necesito saber programar?",
    answer:
      "Absolutamente NO. FoodSpot Mobile es una plataforma No-Code disenada para que cualquier dueno de restaurante pueda lanzar su app profesional sin tocar una sola linea de codigo.",
  },
  {
    question: "¿Cuanto tardo en configurar mi tienda?",
    answer:
      "El record son 5 minutos. Solo necesitas tus fotos, tus precios y ganas de vender mas.",
  },
  {
    question: "¿Cuanto cuesta FoodSpot Mobile?",
    answer:
      "FoodSpot Mobile cuesta $25.99 USD mensuales. Sin cargos ocultos. Cancela cuando quieras. Incluye: menu digital completo, sistema operativo integrado para gestion de restaurantes, gestion de personal, inventario y gastos, finance tracker, integracion Mercado Pago, herramientas de marketing UGC, asistente IA, 5 juegos integrados, modulo completo de eventos, branding personalizado e integracion WhatsApp. Todo disponible en prueba gratuita.",
  },
  {
    question: "¿Funciona FoodSpot Mobile en mi telefono?",
    answer:
      "Si. iOS, Android y web. FoodSpot Mobile esta disponible en ambas plataformas. Elegimos no estar en App Store ni Google Play para enviar actualizaciones semanales al instante sin retrasos. Tu app se actualiza automaticamente.",
  },
  {
    question: "¿Me cobran comision en FoodSpot Mobile?",
    answer:
      "Cero comision. No nos quedamos con nada. Solo pagas el 3% de Mercado Pago ya integrado, sin pasos extra. Lo mismo que pagarias en cualquier plataforma de pago.",
  },
  {
    question: "¿Para que tipo de restaurante sirve FoodSpot Mobile?",
    answer:
      "Todos. Restaurantes tradicionales, vendedores callejeros, ghost kitchens, food trucks, pizzerias, cafeterias. Cualquier negocio gastronomico. FoodSpot Mobile crece con tu empresa.",
  },
  {
    question: "¿Funciona en toda LATAM?",
    answer:
      "Si. FoodSpot Mobile funciona en Argentina, Brasil, Mexico, Chile, Colombia, Peru y toda LATAM. Integracion nativa con Mercado Pago. Soporte en espanol, portugues e ingles.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    if (openIndex !== idx) {
      trackFaqClick(faqs[idx].question);
    }
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
            Todo lo que necesitas saber sobre FoodSpot Mobile.
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
