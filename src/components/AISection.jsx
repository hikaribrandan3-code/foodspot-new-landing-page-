import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function AISection() {
  const { lang } = useLanguage();
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = {
    es: [
      '2×1 en hamburguesas $1500',
      'Noche de cócteles 20%',
      'Estrategia de menú para aumentar ventas',
      '¿Cuál es mi horario pico?'
    ],
    en: [
      'Buy 2 get 1 burgers $15',
      'Cocktail night 20% off',
      'Menu strategy to boost sales',
      'What are my peak hours?'
    ],
    pt: [
      '2×1 em hamburguesas $15',
      'Noite de coquetel 20% desconto',
      'Estratégia de cardápio para aumentar vendas',
      'Qual é meu horário de pico?'
    ]
  };

  const features = {
    es: [
      'Estrategia de menú',
      'Análisis de ventas',
      'Optimización de costos',
      'Consejos de marketing'
    ],
    en: [
      'Menu strategy',
      'Sales analysis',
      'Cost optimization',
      'Marketing tips'
    ],
    pt: [
      'Estratégia de cardápio',
      'Análise de vendas',
      'Otimização de custos',
      'Dicas de marketing'
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setQuestionIndex((prev) => (prev + 1) % questions[lang].length);
    }, 1300);
    return () => clearInterval(interval);
  }, [lang, questions]);

  return (
    <section className="w-full bg-white px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Powered by AI */}
        <div className="text-center mb-8">
          <p className="text-sm md:text-base font-semibold text-primary">
            {lang === 'es' ? 'Powered by IA' : lang === 'pt' ? 'Powered by IA' : 'Powered by AI'}
          </p>
        </div>

        {/* Chat Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8 mb-8">
          {/* Header */}
          <h2 className="font-display text-2xl md:text-4xl font-black text-on-surface mb-6">
            {lang === 'es' ? 'Asesor de Estrategia' : lang === 'pt' ? 'Consultor de Estratégia' : 'Business Advisor'}
          </h2>

          {/* Chat Messages */}
          <div className="space-y-4 mb-8 min-h-[200px] md:min-h-[150px]">
            {/* Bot greeting */}
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs md:max-w-md">
                <p className="text-sm md:text-base text-on-surface">
                  {lang === 'es' ? 'Buenas tardes, ¿qué desafío resolvemos hoy?' :
                   lang === 'pt' ? 'Boa tarde, qual desafio resolvemos hoje?' :
                   'Good afternoon, what challenge shall we solve today?'}
                </p>
              </div>
            </div>

            {/* Animated question */}
            <div className="flex justify-end">
              <motion.div
                key={questionIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="bg-[#10b981] text-white rounded-2xl px-4 py-3 max-w-xs md:max-w-md"
              >
                <p className="text-sm md:text-base">{questions[lang][questionIndex]}</p>
              </motion.div>
            </div>

            {/* Input placeholder */}
            <div className="flex justify-start mt-6">
              <div className="bg-white border-2 border-gray-200 rounded-2xl px-4 py-3 w-full md:max-w-md">
                <p className="text-sm md:text-base text-gray-400">
                  {lang === 'es' ? 'Describe tu promo...' :
                   lang === 'pt' ? 'Descreva sua promoção...' :
                   'Describe your promo...'}
                </p>
              </div>
            </div>
          </div>

          {/* Features Bullets */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {features[lang].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-primary text-xl mt-0.5">•</span>
                <p className="text-xs md:text-sm text-on-surface-variant">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
