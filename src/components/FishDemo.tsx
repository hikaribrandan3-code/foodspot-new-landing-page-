import { useEffect, useRef } from "react";

export function FishDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const fishRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const fish = fishRef.current;
    if (!section || !fish) return;

    // Start animation 200px before entering viewport for smooth entry
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (fish) {
            fish.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
          }
        });
      },
      { rootMargin: "200px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-8 bg-gradient-to-b from-sky-50 to-blue-100 overflow-hidden relative"
      style={{ minHeight: "160px" }}
    >
      {/* Ocean wave top */}
      <div className="absolute top-0 left-0 right-0 h-4 overflow-hidden">
        <svg viewBox="0 0 1200 20" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,10 C200,20 400,0 600,10 C800,20 1000,0 1200,10 L1200,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Floating bubbles in background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30 border border-white/50"
            style={{
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              left: `${10 + i * 15}%`,
              bottom: "10px",
              animation: `floatBubble ${3 + i * 0.7}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* The fish — entire thing is the clickable button */}
      <a
        ref={fishRef}
        href="https://foodspotapp.vercel.app/foodspot"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute"
        style={{
          bottom: "28px",
          left: "-180px",
          animation: "swimAcross 10s linear infinite",
          animationPlayState: "paused",
          willChange: "transform",
          cursor: "pointer",
        }}
        title="Probarlo por 90 segundos"
      >
        <div className="relative">
          {/* Speech bubble */}
          <div
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
            style={{ animation: "bubbleBob 1.5s ease-in-out infinite" }}
          >
            <div className="bg-white text-emerald-700 font-bold text-sm px-4 py-2 rounded-2xl shadow-lg border-2 border-emerald-400 relative">
              Probarlo por 90 segundos 🚀
              {/* Speech bubble tail */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r-2 border-b-2 border-emerald-400 rotate-45" />
            </div>
          </div>

          {/* Fish SVG — anime/cartoon style */}
          <svg
            width="160"
            height="100"
            viewBox="0 0 160 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.15))" }}
          >
            {/* Tail — animates separately */}
            <g style={{ animation: "tailWag 0.4s ease-in-out infinite alternate", transformOrigin: "30px 50px" }}>
              <path d="M30,50 L5,25 L18,50 L5,75 Z" fill="#FF6B35" />
              <path d="M30,50 L8,28 L20,50 L8,72 Z" fill="#FF8C42" opacity="0.6" />
            </g>

            {/* Body */}
            <ellipse cx="85" cy="50" rx="55" ry="32" fill="url(#bodyGrad)" />

            {/* Belly */}
            <ellipse cx="90" cy="58" rx="40" ry="18" fill="#FFF4E6" opacity="0.8" />

            {/* Dorsal fin (top) */}
            <path d="M65,20 Q80,5 100,18" stroke="#E84855" strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M65,20 Q80,5 100,18" stroke="#FF6B6B" strokeWidth="5" strokeLinecap="round" fill="none" />

            {/* Pectoral fin (side) */}
            <ellipse cx="100" cy="62" rx="18" ry="9" fill="#FF6B35" opacity="0.8" transform="rotate(-20 100 62)" />

            {/* Ventral fin (bottom) */}
            <path d="M80,78 Q85,90 95,80" stroke="#E84855" strokeWidth="8" strokeLinecap="round" fill="none" />

            {/* Stripe 1 */}
            <path d="M75,20 Q78,50 75,80" stroke="#FF4444" strokeWidth="3" fill="none" opacity="0.4" />
            {/* Stripe 2 */}
            <path d="M57,24 Q60,50 57,76" stroke="#FF4444" strokeWidth="3" fill="none" opacity="0.4" />

            {/* Eye white (big anime eye) */}
            <circle cx="122" cy="42" r="14" fill="white" />
            {/* Eye iris — gradient */}
            <circle cx="124" cy="43" r="9" fill="url(#eyeGrad)" />
            {/* Eye pupil */}
            <circle cx="125" cy="44" r="5" fill="#1a1a2e" />
            {/* Eye sparkle large */}
            <circle cx="128" cy="40" r="3" fill="white" />
            {/* Eye sparkle small */}
            <circle cx="122" cy="42" r="1.5" fill="white" opacity="0.8" />

            {/* Eyelash top */}
            <path d="M112,32 Q117,28 123,30" stroke="#1a1a2e" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* Cute smile */}
            <path d="M135,52 Q140,58 136,63" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Blush cheeks */}
            <ellipse cx="118" cy="55" rx="8" ry="4" fill="#FFB3C1" opacity="0.5" />

            {/* Mini bubbles from mouth */}
            <circle cx="142" cy="48" r="2.5" fill="none" stroke="#87CEEB" strokeWidth="1.5" style={{ animation: "miniPop 1.2s ease-in-out infinite" }} />
            <circle cx="148" cy="42" r="2" fill="none" stroke="#87CEEB" strokeWidth="1.5" style={{ animation: "miniPop 1.2s ease-in-out infinite", animationDelay: "0.4s" }} />
            <circle cx="152" cy="36" r="1.5" fill="none" stroke="#87CEEB" strokeWidth="1.5" style={{ animation: "miniPop 1.2s ease-in-out infinite", animationDelay: "0.8s" }} />

            <defs>
              <radialGradient id="bodyGrad" cx="60%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FF9F43" />
                <stop offset="50%" stopColor="#FF6B35" />
                <stop offset="100%" stopColor="#E84855" />
              </radialGradient>
              <radialGradient id="eyeGrad" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#74B9FF" />
                <stop offset="100%" stopColor="#0984E3" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </a>

      {/* Ocean wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden">
        <svg viewBox="0 0 1200 20" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,10 C200,0 400,20 600,10 C800,0 1000,20 1200,10 L1200,20 L0,20 Z" fill="white" opacity="0.4" />
        </svg>
      </div>

      <style>{`
        @keyframes swimAcross {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(100vw + 200px)); }
        }
        @keyframes tailWag {
          0%   { transform: rotate(-15deg); }
          100% { transform: rotate(15deg); }
        }
        @keyframes bubbleBob {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50%       { transform: translateX(-50%) translateY(-5px); }
        }
        @keyframes floatBubble {
          0%   { transform: translateY(0) scale(1); opacity: 0.6; }
          50%  { transform: translateY(-30px) scale(1.1); opacity: 0.4; }
          100% { transform: translateY(-60px) scale(0.8); opacity: 0; }
        }
        @keyframes miniPop {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50%       { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
