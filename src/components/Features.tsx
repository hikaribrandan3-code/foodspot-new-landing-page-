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
    <section id="como-funciona" className="pt-2 md:pt-4 pb-16 md:pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-5 md:mb-8" style={{ animation: 'bounce 2s infinite ease-in-out' }}>
          <ArrowDown className="w-8 h-8 text-on-surface" />
        </div>
        <div className="text-center mb-8 md:mb-12">
          <p className="font-display text-5xl md:text-6xl font-black text-on-surface mb-2 md:mb-4" style={{ fontSize: '0.95em' }}>
            {lang === 'es' ? 'Lanza tu tienda en 24 horas' : lang === 'pt' ? 'Lance sua loja em 24 horas' : 'Launch your store in 24 hours'}
          </p>
          <p className="font-display text-lg md:text-xl text-on-surface-variant">
            {lang === 'es' ? 'Tres pasos simples para digitalizar tu negocio' : lang === 'pt' ? 'Três passos simples para digitalizar seu negócio' : 'Three simple steps to take your business digital'}
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

  return (
    <>
      {/* ── UGC RECEIPTS + Free Marketing Section ── */}
      <section className="py-16 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Section Header */}
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              {t(lang, 'diff_label')}
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-on-surface font-black mb-4 leading-tight">
              {t(lang, 'diff_headline')}
            </h2>
            <h3 className="text-xl md:text-2xl text-primary font-bold mb-3">
              {t(lang, 'diff_subhead')}
            </h3>
            <p className="text-base md:text-lg text-on-surface-variant font-medium">
              {t(lang, 'diff_body')}
            </p>
          </div>

          {/* Style block for HyperFrame CSS Animation */}
          <style dangerouslySetInnerHTML={{ __html: `
            .phone-mockup-container {
              position: relative;
              width: 290px;
              height: 580px;
              max-width: 430px;
              border: 12px solid #111;
              border-radius: 40px;
              background: #000;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              margin: 2rem auto;
              overflow: hidden;
              will-change: transform;
              transform: translate3d(0,0,0);
            }

            .phone-notch {
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 120px;
              height: 22px;
              background: #111;
              border-bottom-left-radius: 16px;
              border-bottom-right-radius: 16px;
              z-index: 50;
            }

            .phone-notch::before {
              content: '';
              position: absolute;
              top: 7px;
              right: 25px;
              width: 8px;
              height: 8px;
              background: #1a1a1a;
              border-radius: 50%;
            }

            .phone-notch::after {
              content: '';
              position: absolute;
              top: 7px;
              left: 25px;
              width: 35px;
              height: 5px;
              background: #1a1a1a;
              border-radius: 3px;
            }

            .phone-status-bar {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 6px 24px 0 24px;
              font-size: 9px;
              font-weight: 700;
              color: #64748b;
              z-index: 45;
              background: transparent;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
            }

            .phone-screen {
              position: relative;
              width: 100%;
              height: 100%;
              background: #f8fafc; /* slate-50 */
              overflow: hidden;
              padding-top: 22px; /* spaces notch */
              display: flex;
              flex-direction: column;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            }

            /* Global anim timing: 4.5s loop (4.0s active, 0.5s pause/reset) */
            
            /* FRAME 1: Receipt Layer */
            .anim-layer-receipt {
              position: absolute;
              left: 12px;
              right: 12px;
              bottom: 16px;
              top: 36px;
              background: #ffffff;
              border-radius: 20px;
              box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);
              padding: 18px;
              display: flex;
              flex-direction: column;
              animation: receiptAnim 4.5s infinite cubic-bezier(0.25, 1, 0.5, 1);
              z-index: 10;
              border: 1px solid #e2e8f0;
              will-change: transform, opacity;
            }

            @keyframes receiptAnim {
              0% { transform: translate3d(0, 100%, 0); opacity: 0; }
              4% { transform: translate3d(0, -10px, 0); opacity: 1; }
              6%, 40% { transform: translate3d(0, 0, 0); opacity: 1; }
              44%, 100% { transform: translate3d(0, -25px, 0); opacity: 0; }
            }

            /* FRAME 2: Popup Modal Backdrop & Card */
            .anim-popup-backdrop {
              position: absolute;
              inset: 0;
              background: rgba(0, 0, 0, 0.4);
              z-index: 20;
              animation: backdropAnim 4.5s infinite;
              will-change: opacity;
            }

            @keyframes backdropAnim {
              0%, 22.2% { opacity: 0; visibility: hidden; }
              22.3% { visibility: visible; }
              26%, 40% { opacity: 1; visibility: visible; }
              44%, 100% { opacity: 0; visibility: hidden; }
            }

            .anim-layer-popup {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate3d(-50%, -50%, 0);
              width: 220px;
              background: #ffffff;
              border-radius: 24px;
              box-shadow: 0 20px 25px -5px rgba(0,0,0,0.15);
              padding: 20px;
              text-align: center;
              z-index: 30;
              animation: popupAnim 4.5s infinite cubic-bezier(0.34, 1.56, 0.64, 1);
              will-change: transform, opacity;
            }

            @keyframes popupAnim {
              0%, 22.2% { transform: translate3d(-50%, -40%, 0) scale(0.85); opacity: 0; visibility: hidden; }
              22.3% { visibility: visible; }
              26%, 40% { transform: translate3d(-50%, -50%, 0) scale(1); opacity: 1; visibility: visible; }
              44%, 100% { transform: translate3d(-50%, -60%, 0) scale(0.85); opacity: 0; visibility: hidden; }
            }

            .anim-btn-green {
              background: #2E7D32; /* FoodSpot green */
              color: white;
              font-weight: 700;
              font-size: 13px;
              padding: 10px 20px;
              border-radius: 9999px;
              display: inline-block;
              width: 100%;
              margin-top: 12px;
              animation: pulseAnim 4.5s infinite ease-in-out;
              will-change: transform, box-shadow;
            }

            @keyframes pulseAnim {
              0%, 26% { box-shadow: 0 0 0 0 rgba(46, 125, 50, 0.7); transform: scale(1); }
              32% { box-shadow: 0 0 0 8px rgba(46, 125, 50, 0); transform: scale(1.05); }
              38%, 100% { box-shadow: 0 0 0 0 rgba(46, 125, 50, 0); transform: scale(1); }
            }

            /* FRAME 3: Camera UI Layer */
            .anim-layer-camera {
              position: absolute;
              inset: 0;
              background: #000000;
              z-index: 15;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 16px 0 24px 0;
              animation: cameraAnim 4.5s infinite;
              will-change: opacity;
            }

            @keyframes cameraAnim {
              0%, 40% { opacity: 0; visibility: hidden; }
              40.1% { visibility: visible; }
              44%, 57.8% { opacity: 1; visibility: visible; }
              61.8%, 100% { opacity: 0; visibility: hidden; }
            }

            /* Camera Viewfinder Photo */
            .anim-camera-viewfinder {
              position: relative;
              width: 100%;
              height: 380px;
              background: #111;
              overflow: hidden;
            }

            .anim-camera-photo {
              width: 100%;
              height: 100%;
              object-fit: cover;
              animation: photoAnim 4.5s infinite;
              will-change: filter, opacity, transform;
            }

            @keyframes photoAnim {
              0%, 44.4% { opacity: 0; transform: scale(1.08); filter: brightness(2) contrast(1.8) grayscale(1); }
              48.9%, 57.8% { opacity: 1; transform: scale(1); filter: brightness(1) contrast(1) grayscale(0); }
              61.8%, 100% { opacity: 0; }
            }

            /* Flash Shutter animation */
            .anim-camera-flash {
              position: absolute;
              inset: 0;
              background: #ffffff;
              z-index: 45;
              pointer-events: none;
              animation: flashAnim 4.5s infinite;
              will-change: opacity;
            }

            @keyframes flashAnim {
              0%, 44.4% { opacity: 0; visibility: hidden; }
              44.5% { visibility: visible; opacity: 1; }
              46.7%, 100% { opacity: 0; visibility: hidden; }
            }

            /* FRAME 4: Instagram Story preview */
            .anim-layer-story {
              position: absolute;
              inset: 0;
              background: #121212;
              z-index: 25;
              display: flex;
              flex-direction: column;
              animation: storyAnim 4.5s infinite;
              will-change: transform, opacity;
            }

            @keyframes storyAnim {
              0%, 57.8% { opacity: 0; transform: scale(0.96); visibility: hidden; }
              57.9% { visibility: visible; }
              62.2%, 88.9% { opacity: 1; transform: scale(1); visibility: visible; }
              93.3%, 100% { opacity: 0; transform: scale(1.04); visibility: hidden; }
            }

            .anim-story-header {
              display: flex;
              align-items: center;
              padding: 12px;
              gap: 8px;
              color: white;
              margin-top: 12px;
            }

            .anim-story-profile-pic {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: #2E7D32;
              border: 1.5px solid #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 900;
              font-size: 11px;
              color: white;
            }

            .anim-story-body {
              position: relative;
              flex-grow: 1;
              margin: 0 12px;
              background: #000;
              border-radius: 16px;
              overflow: hidden;
              border: 3px solid #2E7D32; /* Branded border */
            }

            .anim-story-tag {
              position: absolute;
              left: 16px;
              bottom: 24px;
              background: rgba(255, 255, 255, 0.9);
              color: #000;
              font-weight: 800;
              font-size: 12px;
              padding: 6px 12px;
              border-radius: 8px;
              box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
              z-index: 28;
              animation: tagAnim 4.5s infinite cubic-bezier(0.175, 0.885, 0.32, 1.275);
              will-change: transform, opacity;
            }

            @keyframes tagAnim {
              0%, 62.2% { opacity: 0; transform: translate3d(0, 15px, 0); }
              66.7%, 88.9% { opacity: 1; transform: translate3d(0, 0, 0); }
              93.3%, 100% { opacity: 0; }
            }

            .anim-story-likes {
              position: absolute;
              right: 16px;
              bottom: 24px;
              background: rgba(0, 0, 0, 0.7);
              color: #ff3b30; /* Instagram heart color */
              font-weight: 800;
              font-size: 14px;
              padding: 6px 12px;
              border-radius: 20px;
              display: flex;
              align-items: center;
              gap: 4px;
              z-index: 28;
              border: 1px solid rgba(255,255,255,0.15);
              backdrop-filter: blur(4px);
              min-width: 65px;
              justify-content: center;
            }

            .likes-number {
              color: white;
              position: relative;
              width: 28px;
              height: 18px;
              display: inline-block;
            }

            .likes-val {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              text-align: left;
              will-change: opacity;
            }

            .likes-val-0 { animation: like0Anim 4.5s infinite; }
            .likes-val-47 { animation: like47Anim 4.5s infinite; }
            .likes-val-128 { animation: like128Anim 4.5s infinite; }
            .likes-val-243 { animation: like243Anim 4.5s infinite; }

            @keyframes like0Anim {
              0%, 57.8% { opacity: 0; }
              57.9%, 66.6% { opacity: 1; }
              66.7%, 100% { opacity: 0; }
            }

            @keyframes like47Anim {
              0%, 66.6% { opacity: 0; }
              66.7%, 73.2% { opacity: 1; }
              73.3%, 100% { opacity: 0; }
            }

            @keyframes like128Anim {
              0%, 73.2% { opacity: 0; }
              73.3%, 79.9% { opacity: 1; }
              80%, 100% { opacity: 0; }
            }

            @keyframes like243Anim {
              0%, 79.9% { opacity: 0; }
              80%, 88.9% { opacity: 1; }
              89%, 100% { opacity: 0; }
            }
          ` }} />

          {/* Phone Frame Mockup Container */}
          <div className="phone-mockup-container">
            <div className="phone-notch"></div>
            <div className="phone-screen select-none">
              
              {/* Top Bar Status Mockup */}
              <div className="phone-status-bar">
                <span>9:41 AM</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <div className="w-4 h-2 border border-gray-400 rounded-sm p-0.5 flex items-center"><div className="w-full h-full bg-gray-400"></div></div>
                </div>
              </div>

              {/* FRAME 1: Receipt Screen Layer */}
              <div className="anim-layer-receipt">
                <div className="flex items-center justify-between border-b pb-3 mb-3 border-dashed border-gray-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#2E7D32] flex items-center justify-center text-[10px] font-black text-white">F</span>
                    <span className="font-display font-black text-xs text-on-surface">FoodSpot</span>
                  </div>
                  <span className="text-[9px] bg-slate-100 text-slate-500 py-0.5 px-2 rounded-full font-bold">#9402</span>
                </div>
                
                <div className="text-center my-2">
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{t(lang, 'anim_receipt_title')}</p>
                  <p className="text-2xl font-black text-on-surface mt-0.5">TOTAL: $1,250</p>
                </div>

                <div className="space-y-2 mt-4 text-left flex-grow">
                  <div className="flex justify-between text-xs font-semibold text-gray-600">
                    <span>{t(lang, 'anim_receipt_item')}</span>
                    <span>$950</span>
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-gray-600">
                    <span>{t(lang, 'anim_receipt_subitem')}</span>
                    <span>$300</span>
                  </div>
                  <div className="border-t border-dashed border-gray-200 my-2 pt-2 flex justify-between text-xs font-black text-on-surface">
                    <span>Subtotal</span>
                    <span>$1,250</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-200 pt-3 flex flex-col items-center gap-1 text-center">
                  <div className="w-full h-8 opacity-20 bg-[repeating-linear-gradient(90deg,#000,#000_2px,transparent_2px,transparent_6px)]"></div>
                  <span className="text-[8px] text-gray-400 font-medium">foodspotapp.vercel.app</span>
                </div>
              </div>

              {/* FRAME 2: Popup Overlay */}
              <div className="anim-popup-backdrop"></div>
              <div className="anim-layer-popup">
                <span className="w-8 h-8 mx-auto rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm mb-2">🎁</span>
                <h4 className="font-display text-sm font-black text-on-surface leading-tight">
                  {t(lang, 'anim_popup_title')}
                </h4>
                <p className="text-[10px] text-on-surface-variant font-medium mt-1 leading-normal">
                  {t(lang, 'anim_popup_subtitle')}
                </p>
                <div className="anim-btn-green cursor-pointer">
                  {t(lang, 'anim_popup_yes')}
                </div>
                <div className="text-[10px] text-gray-400 mt-2 hover:underline font-semibold cursor-pointer">
                  {t(lang, 'anim_popup_no')}
                </div>
              </div>

              {/* FRAME 3: Camera UI Layer */}
              <div className="anim-layer-camera">
                {/* Top Watermark */}
                <div className="flex justify-between items-center px-4">
                  <div className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-full text-white text-[10px] font-bold border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] animate-pulse"></span>
                    FoodSpot Camera
                  </div>
                </div>

                {/* Viewfinder with photo developing */}
                <div className="anim-camera-viewfinder">
                  <img src="/receipt-foto.webp" className="anim-camera-photo" alt="Camera preview" />
                  <div className="anim-camera-flash"></div>
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-20">
                    <div className="border-r border-b border-white/40"></div>
                    <div className="border-r border-b border-white/40"></div>
                    <div className="border-b border-white/40"></div>
                    <div className="border-r border-b border-white/40"></div>
                    <div className="border-r border-b border-white/40"></div>
                    <div className="border-b border-white/40"></div>
                    <div className="border-r border-white/40"></div>
                    <div className="border-r border-white/40"></div>
                    <div></div>
                  </div>
                </div>

                {/* Camera controls */}
                <div className="flex justify-around items-center px-6">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20"></div>
                  <div className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center p-1 cursor-pointer">
                    <div className="w-full h-full bg-white rounded-full"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-[10px]">📷</div>
                </div>
              </div>

              {/* FRAME 4: Instagram Story UI Layer */}
              <div className="anim-layer-story">
                <div className="anim-story-header">
                  <div className="anim-story-profile-pic">FS</div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black text-white">{t(lang, 'anim_insta_tag')}</span>
                    <span className="text-[8px] text-white/55 font-semibold">12h</span>
                  </div>
                </div>

                <div className="anim-story-body">
                  <img src="/receipt-foto.webp" className="w-full h-full object-cover" alt="Instagram Story photo" />
                  
                  {/* Bottom branding panel inside screen to make it feel premium */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10 text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-[#2E7D32] flex items-center justify-center text-[9px] font-black text-white">F</span>
                      <span className="text-[9px] text-white font-bold">FoodSpot Mobile</span>
                    </div>
                  </div>

                  {/* Stickers & likes overlays */}
                  <div className="anim-story-tag">
                    {t(lang, 'anim_insta_tag')}
                  </div>

                  <div className="anim-story-likes">
                    <span className="text-base select-none">❤️</span>
                    <span className="likes-number">
                      <span className="likes-val likes-val-0">0</span>
                      <span className="likes-val likes-val-47">47</span>
                      <span className="likes-val likes-val-128">128</span>
                      <span className="likes-val likes-val-243">243</span>
                    </span>
                  </div>
                </div>

                {/* Instagram story footer spacer */}
                <div className="h-10"></div>
              </div>

            </div>
          </div>

          {/* Closing Line — Moved Before Steps */}
          <p className="mt-8 text-on-surface font-black text-lg md:text-xl max-w-xl leading-snug">
            {t(lang, 'diff_closing')}
          </p>

          {/* Captions Steps Below the Phone */}
          <div className="mt-3 bg-surface rounded-3xl p-10 max-w-2xl w-full border border-outline-variant text-left">
            <ul className="space-y-6">
              <li className="text-on-surface font-bold text-lg md:text-2xl flex items-start gap-4">
                <span style={{ color: '#10B981', fontSize: '28px' }}>📋</span>
                <span>{t(lang, 'diff_step1')}</span>
              </li>
              <li className="text-on-surface font-bold text-lg md:text-2xl flex items-start gap-4">
                <span style={{ color: '#3B82F6', fontSize: '28px' }}>📸</span>
                <span>{t(lang, 'diff_step2')}</span>
              </li>
              <li className="text-on-surface font-bold text-lg md:text-2xl flex items-start gap-4">
                <span style={{ color: '#F59E0B', fontSize: '28px' }}>🎯</span>
                <span>{t(lang, 'diff_step3')}</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ── Video Section ── */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-4xl text-on-surface font-black mb-12 text-center">
            {t(lang, 'ugc_video_title')}
          </h2>
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
          <a
            href={lang === 'es' ? '/blog/como-captura-contenido-organico' : lang === 'pt' ? '/blog/como-captura-conteudo-organico' : '/blog/how-to-capture-organic-content'}
            className="mt-8 text-primary font-semibold hover:underline text-base flex items-center gap-1"
          >
            {t(lang, 'ugc_learn_more_link')} <span aria-hidden="true">→</span>
          </a>
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
              aria-label={lang === 'es' ? 'Clientes por día' : lang === 'pt' ? 'Clientes por dia' : 'Customers per day'}
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
