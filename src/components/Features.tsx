import React from 'react';
import { ArrowDown } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../lib/translations';
import { AISection } from './AISection';

export function HowItWorks() {
  const { lang } = useLanguage();

  const steps = [
    {
      title: t(lang, 'step1_title'),
      desc: t(lang, 'step1_desc'),
      img: "/1menu.webp",
      imgWebp: "/1menu.webp",
      rotation: "rotate-2",
    },
    {
      title: t(lang, 'step2_title'),
      desc: t(lang, 'step2_desc'),
      img: "/2brand.webp",
      imgWebp: "/2brand.webp",
      rotation: "-rotate-2",
      offset: "md:mt-12",
    },
    {
      title: t(lang, 'step3_title'),
      desc: t(lang, 'step3_desc'),
      img: lang === 'en' ? "/step3-ui-usa.webp" : lang === 'pt' ? "/step3-ui-brazil.webp" : "/3pago.webp",
      imgWebp: lang === 'en' ? "/step3-ui-usa.webp" : lang === 'pt' ? "/step3-ui-brazil.webp" : "/3pago.webp",
      rotation: "rotate-2",
      offset: "md:mt-24",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4">{t(lang, 'how_heading')}</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-6">
            {t(lang, 'how_sub')}
          </p>
          <div className="flex justify-center" style={{ animation: 'bounce 2s infinite ease-in-out' }}>
            <ArrowDown className="w-8 h-8 text-primary/50" />
          </div>
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
                    decoding="async"
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

        {/* Demo CTA after steps */}
        <div className="text-center mt-16">
          <a
            href="https://foodspotapp.vercel.app/start-trial"
            className="bg-[#047857] hover:bg-[#059669] text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg transition-all active:scale-95 inline-flex items-center justify-center gap-2"
          >
            {lang === 'es' ? 'Prueba la demo ahora' : lang === 'pt' ? 'Experimente a demo agora' : 'See it in action'}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const { lang } = useLanguage();

  return (
    <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4">{t(lang, 'ai_heading')}</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl">
          {t(lang, 'ai_desc')}
        </p>
      </div>

      <AISection />
    </section>
  );
}

function SpecBadge({ color, glowColor, text, sub }: { color: string; glowColor: string; text: string; sub: string }) {
  return (
    <div className="relative">
      {/* Glow halo */}
      <div
        className="absolute inset-0 rounded-2xl blur-xl"
        style={{ background: glowColor, animation: 'glow-pulse 2.5s ease-in-out infinite' }}
      />
      {/* Badge body */}
      <div className={`relative ${color} text-white rounded-2xl px-4 py-2.5 shadow-lg text-center min-w-[90px] z-10`}>
        <p className="font-display font-black text-xl leading-none">{text}</p>
        <p className="text-xs font-semibold mt-0.5 opacity-90">{sub}</p>
      </div>
      {/* Sparkle top-right */}
      <svg className="absolute -top-2 -right-1.5 w-4 h-4 z-20" viewBox="0 0 16 16" fill="#fbbf24">
        <path d="M8 0 L9.2 6.8 L16 8 L9.2 9.2 L8 16 L6.8 9.2 L0 8 L6.8 6.8 Z"/>
      </svg>
      {/* Sparkle bottom-left (smaller) */}
      <svg className="absolute -bottom-1 -left-1.5 w-2.5 h-2.5 z-20" viewBox="0 0 16 16" fill="#fbbf24" opacity="0.7">
        <path d="M8 0 L9.2 6.8 L16 8 L9.2 9.2 L8 16 L6.8 9.2 L0 8 L6.8 6.8 Z"/>
      </svg>
    </div>
  );
}

export function UGCMegaSection() {
  const { lang } = useLanguage();
  const [visitors, setVisitors] = React.useState(100);
  const ugcVideoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = ugcVideoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play();
        else video.pause();
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const at5day = Math.round(visitors * 0.05);
  const at10day = Math.round(visitors * 0.10);

  const calcRows = [
    { label: t(lang, 'ugc_calc_row_day'), v5: at5day, v10: at10day },
    { label: t(lang, 'ugc_calc_row_week'), v5: at5day * 7, v10: at10day * 7 },
    { label: t(lang, 'ugc_calc_row_month'), v5: at5day * 30, v10: at10day * 30 },
  ];

  const resLabel = lang === 'pt' ? 'Resolução' : 'Resolución';

  const steps = [
    {
      bg: 'bg-amber-400',
      image: '/receipt-foto.png',
      isImage: true,
      isReceipt: true,
      title: '',
      desc: '',
    },
  ];

  return (
    <>
      {/* ── UGC RECEIPTS + Free Marketing Section ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="font-display text-5xl md:text-6xl text-on-surface font-black">
              {t(lang, 'ugc_receipts_heading')}
            </h2>
            <h2 className="font-display text-4xl md:text-5xl text-on-surface font-black mt-2">
              {t(lang, 'ugc_invented_heading')}
            </h2>
          </div>

          {/* Desktop Bullets - Centered, Bigger */}
          <div className="hidden md:flex justify-center mb-16">
            <div className="bg-surface rounded-3xl p-12 max-w-3xl text-center">
              <div className="space-y-6">
                <p className="text-on-surface font-semibold text-lg md:text-xl">
                  <span className="text-primary font-black text-2xl">→ </span>{t(lang, 'ugc_bullet1_desktop')}
                </p>
                <p className="text-on-surface font-semibold text-lg md:text-xl">
                  <span className="text-primary font-black text-2xl">→ </span>{t(lang, 'ugc_bullet2_desktop')}
                </p>
                <p className="text-on-surface font-semibold text-lg md:text-xl">
                  <span className="text-primary font-black text-2xl">→ </span>{t(lang, 'ugc_bullet3_desktop')}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Bullets - Centered, Bigger */}
          <div className="md:hidden mb-12">
            <div className="bg-surface rounded-3xl p-10 mx-auto">
              <div className="space-y-5">
                <p className="text-on-surface font-semibold text-base">
                  <span className="text-primary font-black text-xl">→ </span>{t(lang, 'ugc_bullet1_mobile')}
                </p>
                <p className="text-on-surface font-semibold text-base">
                  <span className="text-primary font-black text-xl">→ </span>{t(lang, 'ugc_bullet2_mobile')}
                </p>
                <p className="text-on-surface font-semibold text-base">
                  <span className="text-primary font-black text-xl">→ </span>{t(lang, 'ugc_bullet3_mobile')}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: horizontal with arrows */}
          <div className="hidden md:flex flex-col items-center gap-8">
            <div className="flex items-start justify-center gap-4">
              {steps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center gap-4">
                    {step.isImage ? (
                      <div className="flex flex-col items-center gap-6 w-full">
                        <div className="text-center">
                          <p className="text-on-surface font-display text-2xl md:text-3xl font-black mb-3">
                            {t(lang, 'ugc_try_camera')}
                          </p>
                          <div style={{ animation: 'bounce 2s infinite ease-in-out' }}>
                            <ArrowDown className="w-6 h-6 mx-auto text-primary/50" />
                          </div>
                        </div>
                        <a
                          href="https://foodspotapp.vercel.app/foodspot/camera"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-64 h-[500px] rounded-[2.5rem] shadow-xl overflow-hidden border-4 border-white bg-white block transition-opacity hover:opacity-90 cursor-pointer"
                        >
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        </a>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-4 max-w-[200px]">
                        <div
                          className={`w-24 h-24 rounded-3xl ${step.bg} flex items-center justify-center shadow-xl`}
                          style={{ animation: `float 3s ease-in-out infinite`, animationDelay: `${i * 0.8}s` }}
                        >
                          {step.svg}
                        </div>
                      </div>
                    )}
                    {step.textAsTitle ? (
                      <h3 className="font-display text-2xl md:text-3xl font-black text-on-surface">{step.title}</h3>
                    ) : (
                      <>
                        <h3 className="font-display text-lg font-bold text-on-surface">{step.title}</h3>
                        {!step.isImage && !step.hideDesc && <p className="text-on-surface-variant text-sm max-w-[250px]">{step.desc}</p>}
                      </>
                    )}
                  </div>
                  {i < steps.length - 1 && !step.isImage && (
                    <div className="mt-10 text-4xl text-on-surface-variant/25 font-black flex-shrink-0 select-none" style={{ animation: 'slideHorizontal 1.5s ease-in-out infinite' }}>→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile: stacked */}
          <div className="flex md:hidden flex-col items-center gap-6">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-4 w-full">
                  {step.isImage ? (
                    <div className="flex flex-col items-center gap-4 w-full">
                      <div className="text-center">
                        <p className="text-on-surface font-display text-2xl font-black mb-3">
                          {t(lang, 'ugc_try_camera')}
                        </p>
                        <div style={{ animation: 'bounce 2s infinite ease-in-out' }}>
                          <ArrowDown className="w-5 h-5 mx-auto text-primary/50" />
                        </div>
                      </div>
                      <a
                        href="https://foodspotapp.vercel.app/foodspot/camera"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-56 h-96 rounded-[2.5rem] shadow-xl overflow-hidden border-4 border-white bg-gray-200 block transition-opacity hover:opacity-90 cursor-pointer"
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </a>
                    </div>
                  ) : (
                    <div
                      className={`w-20 h-20 rounded-3xl ${step.bg} flex items-center justify-center shadow-xl`}
                      style={{ animation: `float 3s ease-in-out infinite`, animationDelay: `${i * 0.8}s` }}
                    >
                      {step.svg}
                    </div>
                  )}
                  {step.textAsTitle ? (
                    <h3 className="font-display text-2xl font-black text-on-surface text-center">{step.title}</h3>
                  ) : (
                    <>
                      <h3 className="font-display text-lg font-bold text-on-surface">{step.title}</h3>
                      {!step.isImage && !step.hideDesc && <p className="text-on-surface-variant text-sm max-w-[240px]">{step.desc}</p>}
                    </>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>


      {/* ── Beat 4: Calculator ── */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display text-3xl md:text-4xl text-on-surface font-black mb-2">
            {t(lang, 'ugc_calc_heading')}
          </h3>

          <div className="mt-8 mb-8">
            <label className="text-on-surface-variant font-semibold text-base block">
              {t(lang, 'ugc_calc_slider_label')}:{' '}
              <span className="text-primary font-black text-2xl">{visitors}</span>
            </label>
            <input
              type="range"
              min={20} max={500} value={visitors}
              onChange={(e) => setVisitors(Number(e.target.value))}
              className="w-full mt-3 cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-on-surface-variant mt-1.5">
              <span>20</span>
              <span>500</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-outline-variant">
            <div className="grid grid-cols-3 bg-on-surface text-white text-sm font-bold">
              <div className="px-4 py-3 text-left">{t(lang, 'ugc_calc_period')}</div>
              <div className="px-4 py-3 text-center border-l border-white/10">{t(lang, 'ugc_calc_col_5')}</div>
              <div className="px-4 py-3 text-center border-l border-white/10">{t(lang, 'ugc_calc_col_10')}</div>
            </div>
            {calcRows.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-surface'}`}>
                <div className="px-4 py-3 text-left font-semibold text-on-surface">{row.label}</div>
                <div className="px-4 py-3 text-center font-bold text-primary border-l border-outline-variant">
                  {row.v5} {t(lang, 'ugc_calc_photos')}
                </div>
                <div className="px-4 py-3 text-center font-bold text-primary border-l border-outline-variant">
                  {row.v10} {t(lang, 'ugc_calc_photos')}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-3 bg-primary text-white text-base font-black">
              <div className="px-4 py-4 text-left">{t(lang, 'ugc_calc_cost')}</div>
              <div className="px-4 py-4 text-center border-l border-white/20">$0</div>
              <div className="px-4 py-4 text-center border-l border-white/20">$0</div>
            </div>
          </div>

          <p className="mt-6 text-on-surface-variant font-semibold text-base">
            {t(lang, 'ugc_calc_footer')}
          </p>

          <a
            href="https://foodspotapp.vercel.app/start-trial"
            className="mt-6 inline-block bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all active:scale-95"
          >
            {t(lang, 'ugc_calc_cta')}
          </a>
        </div>
      </section>
    </>
  );
}

export function VideoShowcase() {
  const videoRef = React.useRef(null);
  const [isMuted, setIsMuted] = React.useState(true);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-6 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto w-[260px] h-[540px] md:w-[390px] md:h-[540px]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[2rem] border-[10px] md:border-[14px] border-gray-800 bg-gray-800 shadow-2xl overflow-hidden">
            <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-2xl z-10" />
            <div className="hidden md:block absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full z-10" />
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              preload="none"
              className="w-full h-full object-cover"
            >
              <source src="/demo-video.webm" type="video/webm" />
              <source src="/demo-video.mp4" type="video/mp4" />
            </video>
            {isMuted && (
              <button
                onClick={handleUnmute}
                className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all z-20"
                aria-label="Unmute video"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.343a1 1 0 011.414 0A6.5 6.5 0 0119 10a6.5 6.5 0 01-2.929 5.243 1 1 0 01-1.414-1.414A4.5 4.5 0 0017 10a4.5 4.5 0 00-2.343-3.929 1 1 0 010-1.414z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
