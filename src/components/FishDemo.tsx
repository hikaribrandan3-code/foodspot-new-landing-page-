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
      className="py-16 bg-gradient-to-b from-sky-50 to-blue-100 overflow-hidden relative"
      style={{ minHeight: "240px" }}
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
          bottom: "50px",
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

          {/* Fish SVG — enhanced anime/cartoon style */}
          <svg
            width="180"
            height="110"
            viewBox="0 0 180 110"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(0px 6px 12px rgba(0,0,0,0.2))" }}
          >
            {/* Tail — animates separately */}
            <g style={{ animation: "tailWag 0.4s ease-in-out infinite alternate", transformOrigin: "30px 55px" }}>
              <path d="M30,55 L0,25 L20,55 L0,85 Z" fill="#FF5722" />
              <path d="M30,55 L5,30 L22,55 L5,80 Z" fill="#FF7043" opacity="0.8" />
              <path d="M30,55 L8,32 L24,55 L8,78 Z" fill="#FFAB91" opacity="0.5" />
            </g>

            {/* Body shadow/depth */}
            <ellipse cx="95" cy="58" rx="55" ry="32" fill="rgba(0,0,0,0.1)" />

            {/* Main Body */}
            <ellipse cx="95" cy="55" rx="55" ry="32" fill="url(#bodyGrad)" />

            {/* Body highlight */}
            <ellipse cx="92" cy="35" rx="35" ry="18" fill="url(#highlightGrad)" opacity="0.6" />

            {/* Belly */}
            <ellipse cx="100" cy="65" rx="42" ry="20" fill="#FFFACD" opacity="0.7" />

            {/* Dorsal fin (top) — more vibrant */}
            <path d="M70,20 Q85,2 105,16" stroke="#FF5252" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M70,20 Q85,2 105,16" stroke="#FF7070" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M72,22 Q87,8 103,18" stroke="#FFB74D" strokeWidth="2" fill="none" opacity="0.4" />

            {/* Pectoral fin (side) — more detailed */}
            <ellipse cx="110" cy="70" rx="22" ry="11" fill="#FF7043" opacity="0.9" transform="rotate(-25 110 70)" />
            <ellipse cx="110" cy="70" rx="16" ry="8" fill="#FFAB91" opacity="0.5" transform="rotate(-25 110 70)" />

            {/* Ventral fin (bottom) */}
            <path d="M85,85 Q92,98 105,86" stroke="#FF5252" strokeWidth="9" strokeLinecap="round" fill="none" />
            <path d="M86,87 Q92,96 104,87" stroke="#FFB74D" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />

            {/* Scale patterns — more visible */}
            <circle cx="75" cy="35" r="3" fill="#E64A19" opacity="0.4" />
            <circle cx="80" cy="42" r="2.5" fill="#E64A19" opacity="0.4" />
            <circle cx="85" cy="48" r="2.5" fill="#E64A19" opacity="0.4" />
            <circle cx="90" cy="55" r="2.5" fill="#E64A19" opacity="0.4" />
            <circle cx="85" cy="62" r="2.5" fill="#E64A19" opacity="0.3" />
            <circle cx="75" cy="68" r="2.5" fill="#E64A19" opacity="0.3" />

            {/* Eye white (big anime eye) */}
            <ellipse cx="140" cy="48" rx="16" ry="18" fill="white" />
            {/* Eye iris — vibrant gradient */}
            <circle cx="143" cy="50" r="11" fill="url(#eyeGrad)" />
            {/* Eye pupil */}
            <circle cx="144" cy="52" r="6" fill="#000000" />
            {/* Eye sparkle large */}
            <circle cx="148" cy="47" r="4" fill="white" />
            {/* Eye sparkle small */}
            <circle cx="140" cy="50" r="2" fill="white" opacity="0.9" />
            {/* Eyelash top */}
            <path d="M126,35 Q133,30 140,32 Q147,30 155,35" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Eyelash bottom */}
            <path d="M126,65 Q133,70 140,68 Q147,70 155,65" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />

            {/* Cute smile */}
            <path d="M155,60 Q162,67 158,75" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Blush cheeks — more prominent */}
            <ellipse cx="125" cy="62" rx="10" ry="6" fill="#FFB3D9" opacity="0.7" />
            <ellipse cx="125" cy="62" rx="6" ry="4" fill="#FF69B4" opacity="0.4" />

            {/* Mini bubbles from mouth */}
            <circle cx="165" cy="55" r="3.5" fill="none" stroke="#64B5F6" strokeWidth="2" style={{ animation: "miniPop 1.2s ease-in-out infinite" }} />
            <circle cx="174" cy="47" r="2.8" fill="none" stroke="#64B5F6" strokeWidth="2" style={{ animation: "miniPop 1.2s ease-in-out infinite", animationDelay: "0.4s" }} />
            <circle cx="180" cy="38" r="2" fill="none" stroke="#64B5F6" strokeWidth="1.5" style={{ animation: "miniPop 1.2s ease-in-out infinite", animationDelay: "0.8s" }} />

            <defs>
              <radialGradient id="bodyGrad" cx="55%" cy="35%" r="70%">
                <stop offset="0%" stopColor="#FFAB91" />
                <stop offset="40%" stopColor="#FF7043" />
                <stop offset="100%" stopColor="#E64A19" />
              </radialGradient>
              <radialGradient id="highlightGrad" cx="50%" cy="30%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FFAB91" opacity="0" />
              </radialGradient>
              <radialGradient id="eyeGrad" cx="35%" cy="35%" r="70%">
                <stop offset="0%" stopColor="#90CAF9" />
                <stop offset="100%" stopColor="#1565C0" />
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
