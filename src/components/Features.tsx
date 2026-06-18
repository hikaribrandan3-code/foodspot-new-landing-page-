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
      bg: 'bg-emerald-500',
      svg: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
          <rect x="10" y="6" width="28" height="36" rx="4" fill="white"/>
          <path d="M10 38 Q14 44 18 38 Q22 32 26 38 Q30 44 34 38 Q38 32 38 38 V48 H10 V38Z" fill="white"/>
          <rect x="16" y="14" width="16" height="2.5" rx="1.25" fill="#d1fae5"/>
          <rect x="16" y="20" width="12" height="2.5" rx="1.25" fill="#d1fae5"/>
          <rect x="16" y="26" width="14" height="2.5" rx="1.25" fill="#d1fae5"/>
          <circle cx="46" cy="46" r="14" fill="#fbbf24"/>
          <rect x="39" y="41" width="14" height="10" rx="3" fill="white"/>
          <circle cx="46" cy="46" r="4" fill="#fbbf24"/>
          <circle cx="46" cy="46" r="2.5" fill="#f59e0b"/>
          <rect x="41" y="38.5" width="6" height="3.5" rx="1.5" fill="white"/>
        </svg>
      ),
      title: t(lang, 'ugc_step1_title'),
      desc: t(lang, 'ugc_step1_desc'),
    },
    {
      bg: 'bg-amber-400',
      svg: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
          <rect x="18" y="8" width="28" height="48" rx="6" fill="white"/>
          <rect x="22" y="16" width="20" height="32" rx="3" fill="#fef3c7"/>
          <circle cx="32" cy="29" r="8" fill="#fb923c" opacity="0.8"/>
          <circle cx="32" cy="29" r="5" fill="#f97316" opacity="0.6"/>
          <circle cx="10" cy="14" r="7" fill="#f43f5e"/>
          <path d="M10 8.5 L11.3 12.2 L15.3 12.2 L12.2 14.3 L13.5 18 L10 15.9 L6.5 18 L7.8 14.3 L4.7 12.2 L8.7 12.2 Z" fill="white"/>
          <circle cx="54" cy="14" r="7" fill="#a78bfa"/>
          <path d="M54 19.5 C53 18 47.5 14.5 47.5 11.5 C47.5 9.5 49.2 8 51 8 C52.2 8 53.3 8.7 54 9.5 C54.7 8.7 55.8 8 57 8 C58.8 8 60.5 9.5 60.5 11.5 C60.5 14.5 55 18 54 19.5Z" fill="white"/>
          <circle cx="56" cy="48" r="6" fill="#10b981"/>
          <path d="M56 42.5 L57.1 46 L60.5 47 L57.1 48 L56 51.5 L54.9 48 L51.5 47 L54.9 46 Z" fill="white"/>
          <circle cx="8" cy="46" r="6" fill="#006c49"/>
          <path d="M8 41 C6 41 4 43 4 45.2 C4 48 8 52 8 52 C8 52 12 48 12 45.2 C12 43 10 41 8 41Z" fill="white"/>
          <circle cx="8" cy="45" r="1.5" fill="#006c49"/>
        </svg>
      ),
      title: t(lang, 'ugc_step2_title'),
      desc: t(lang, 'ugc_step2_desc'),
    },
    {
      bg: 'bg-rose-500',
      svg: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
          <rect x="22" y="12" width="20" height="36" rx="5" fill="white"/>
          <rect x="26" y="18" width="12" height="24" rx="2.5" fill="#fca5a5"/>
          <path d="M43 26 L53 22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M53 22 L49.5 21 M53 22 L52 25.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M43 34 L53 38" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M53 38 L49.5 38.5 M53 38 L52.5 34.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 26 L11 22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M11 22 L14.5 21 M11 22 L12 25.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 34 L11 38" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M11 38 L14.5 38.5 M11 38 L11.5 34.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="57" cy="22" r="5" fill="white" opacity="0.9"/>
          <circle cx="57" cy="22" r="2" fill="#fb7185"/>
          <path d="M53 28 Q55 25 57 25 Q59 25 61 28" stroke="#fb7185" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <circle cx="7" cy="22" r="5" fill="white" opacity="0.9"/>
          <circle cx="7" cy="22" r="2" fill="#fb7185"/>
          <path d="M3 28 Q5 25 7 25 Q9 25 11 28" stroke="#fb7185" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <circle cx="57" cy="38" r="5" fill="white" opacity="0.9"/>
          <circle cx="57" cy="38" r="2" fill="#fb7185"/>
          <path d="M53 44 Q55 41 57 41 Q59 41 61 44" stroke="#fb7185" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <circle cx="7" cy="38" r="5" fill="white" opacity="0.9"/>
          <circle cx="7" cy="38" r="2" fill="#fb7185"/>
          <path d="M3 44 Q5 41 7 41 Q9 41 11 44" stroke="#fb7185" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      title: t(lang, 'ugc_step3_title'),
      desc: t(lang, 'ugc_step3_desc'),
    },
  ];

  return (
    <>
      {/* ── Beat 1: Owner Truth ── */}
      <section className="py-12 md:py-16 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl md:text-3xl text-white/60 font-semibold mb-3">
            {t(lang, 'ugc_owner_line1')}
          </p>
          <p className="font-display text-2xl md:text-3xl text-white/90 font-semibold mb-3">
            {lang === 'es' ? (
              <>Ninguna <strong className="text-white font-black">app</strong> lo captura.</>
            ) : lang === 'pt' ? (
              <>Nenhum <strong className="text-white font-black">app</strong> captura isso.</>
            ) : (
              <>No <strong className="text-white font-black">app</strong> captures it.</>
            )}
          </p>
          <p className="font-display text-4xl md:text-5xl text-white font-black mb-8">
            {t(lang, 'ugc_owner_line3')}
          </p>
          <div style={{ animation: 'bounce 2s infinite ease-in-out' }}>
            <ArrowDown className="w-5 h-5 mx-auto text-white/50" />
          </div>
        </div>
      </section>

      {/* ── Beat 2: The Invention ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            {t(lang, 'ugc_invented_label')}
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-on-surface font-black mb-4">
            {t(lang, 'ugc_invented_heading')}
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-14">
            {t(lang, 'ugc_invented_sub')}
          </p>

          {/* Desktop: horizontal with arrows */}
          <div className="hidden md:flex items-start justify-center gap-4">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-4 max-w-[200px]">
                  <div
                    className={`w-24 h-24 rounded-3xl ${step.bg} flex items-center justify-center shadow-xl`}
                    style={{ animation: `float 3s ease-in-out infinite`, animationDelay: `${i * 0.8}s` }}
                  >
                    {step.svg}
                  </div>
                  <h3 className="font-display text-lg font-bold text-on-surface">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="mt-10 text-4xl text-on-surface-variant/25 font-black flex-shrink-0 select-none">→</div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile: stacked */}
          <div className="flex md:hidden flex-col items-center gap-8">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-3">
                  <div
                    className={`w-20 h-20 rounded-3xl ${step.bg} flex items-center justify-center shadow-xl`}
                    style={{ animation: `float 3s ease-in-out infinite`, animationDelay: `${i * 0.8}s` }}
                  >
                    {step.svg}
                  </div>
                  <h3 className="font-display text-lg font-bold text-on-surface">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm max-w-[240px]">{step.desc}</p>
                </div>
                {i < 2 && <div className="text-2xl text-on-surface-variant/25 select-none">↓</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beat 3: Video + Spec Badges ── */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="relative">
            {/* Desktop floating badges */}
            <div className="hidden md:flex absolute -left-48 top-1/2 -translate-y-1/2 flex-col gap-6">
              <SpecBadge color="bg-emerald-500" glowColor="rgba(16,185,129,0.55)" text="4K" sub={resLabel} />
              <SpecBadge color="bg-amber-400" glowColor="rgba(251,191,36,0.55)" text="100+" sub="Stickers" />
            </div>
            <div className="hidden md:block absolute -right-44 top-1/2 -translate-y-1/2">
              <SpecBadge color="bg-rose-500" glowColor="rgba(244,63,94,0.55)" text="📍" sub="Business Pin" />
            </div>

            <div className="relative w-72 h-[550px]">
              <video
                ref={ugcVideoRef}
                muted loop playsInline preload="metadata"
                poster="/ugc-poster.webp"
                className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-8 border-gray-100"
              >
                <source src="/ugc.webm" type="video/webm" />
                <source src="/ugc.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Mobile badges */}
          <div className="flex md:hidden gap-4 mt-8 flex-wrap justify-center">
            <SpecBadge color="bg-emerald-500" glowColor="rgba(16,185,129,0.55)" text="4K" sub={resLabel} />
            <SpecBadge color="bg-amber-400" glowColor="rgba(251,191,36,0.55)" text="100+" sub="Stickers" />
            <SpecBadge color="bg-rose-500" glowColor="rgba(244,63,94,0.55)" text="📍" sub="Business Pin" />
          </div>

          <a
            href="#expert-tips"
            className="mt-8 text-primary font-semibold hover:underline text-base flex items-center gap-1"
          >
            {t(lang, 'ugc_learn_more')} <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* ── Beat 4: The Stat ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-display leading-none font-black text-primary" style={{ fontSize: 'clamp(5rem, 18vw, 9rem)' }}>
            71%
          </p>
          <p className="text-xl md:text-2xl text-on-surface-variant font-semibold mt-4 max-w-lg mx-auto">
            {t(lang, 'ugc_stat_text')}
          </p>
        </div>
      </section>

      {/* ── Beat 5: Calculator ── */}
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
