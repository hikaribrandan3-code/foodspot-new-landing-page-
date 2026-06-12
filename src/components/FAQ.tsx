import { useState } from "react";
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
                <span
                  className="mt-1 shrink-0 text-primary"
                  style={{
                    transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.2s ease',
                    display: 'flex'
                  }}
                >
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>

              {openIndex === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  className="overflow-hidden"
                  role="region"
                  style={{ animation: 'slideDown 0.25s ease-in-out forwards' }}
                >
                  <p className="pt-4 text-base text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
