import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { trackFaqClick } from "../services/ga4Events";
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../lib/translations';

export function FAQ() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: t(lang, 'faq_q1'), answer: t(lang, 'faq_a1') },
    { question: t(lang, 'faq_q2'), answer: t(lang, 'faq_a2') },
    { question: t(lang, 'faq_q3'), answer: t(lang, 'faq_a3') },
    { question: t(lang, 'faq_q4'), answer: t(lang, 'faq_a4') },
    { question: t(lang, 'faq_q5'), answer: t(lang, 'faq_a5') },
    { question: t(lang, 'faq_q6'), answer: t(lang, 'faq_a6') },
    { question: t(lang, 'faq_q7'), answer: t(lang, 'faq_a7') },
  ];

  const toggle = (idx: number) => {
    if (openIndex !== idx) {
      trackFaqClick(faqs[idx].question);
    }
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4">
            {t(lang, 'faq_heading')}
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            {t(lang, 'faq_sub')}
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
