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
      img: "/3pago.webp",
      imgWebp: "/3pago.webp",
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

export function UGCMarketing() {
  const { lang } = useLanguage();
  const ugcVideoRef = React.useRef(null);

  React.useEffect(() => {
    const video = ugcVideoRef.current;
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
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-display text-4xl md:text-5xl text-on-surface font-black">{t(lang, 'ugc_heading')}</h2>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="flex justify-center">
          <div className="relative w-72 h-[550px]">
            <video
              ref={ugcVideoRef}
              muted
              loop
              playsInline
              preload="none"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-8 border-gray-100"
            >
              <source src="/ugc.webm" type="video/webm" />
              <source src="/ugc.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl text-on-surface font-semibold max-w-2xl">
            {t(lang, 'ugc_stat')}
          </p>
        </div>

        <div className="text-center">
          <div className="text-lg md:text-xl text-on-surface-variant font-semibold flex items-center justify-center gap-3 flex-wrap">
            <span>{t(lang, 'ugc_flow_photo')}</span>
            <span className="text-2xl">→</span>
            <span>{t(lang, 'ugc_flow_share')}</span>
            <span className="text-2xl">→</span>
            <span>{t(lang, 'ugc_flow_customer')}
            </span>
          </div>
        </div>

        <div
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
        </div>
      </div>
    </section>
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
