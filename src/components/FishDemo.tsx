import { useEffect, useRef } from "react";

// Donut character - cute and minimal
const Donut = () => {
  return (
    <svg className="donut-character" width="175" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Donut body */}
      <circle cx="100" cy="100" r="70" fill="#FF9F43" stroke="#E87722" strokeWidth="3"/>
      <circle cx="100" cy="100" r="40" fill="white" />

      {/* Sprinkles */}
      <rect x="75" y="50" width="6" height="20" fill="#FF6B9D" rx="3"/>
      <rect x="90" y="45" width="6" height="25" fill="#FFD93D" rx="3"/>
      <rect x="105" y="48" width="6" height="22" fill="#6BCB77" rx="3"/>
      <rect x="120" y="52" width="6" height="18" fill="#4D96FF" rx="3"/>
      <rect x="135" y="55" width="6" height="20" fill="#FF6B9D" rx="3"/>

      {/* Eyes */}
      <g className="donut-eyes">
        <circle cx="80" cy="85" r="8" fill="#333"/>
        <circle cx="77" cy="82" r="3" fill="white"/>
        <circle cx="120" cy="85" r="8" fill="#333"/>
        <circle cx="117" cy="82" r="3" fill="white"/>
      </g>

      {/* Mouth smile */}
      <path d="M 85 110 Q 100 120 115 110" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* Legs */}
      <g className="donut-legs" style={{ animation: "walkLegs 0.6s ease-in-out infinite" }}>
        <rect x="75" y="160" width="12" height="35" rx="6" fill="#FF9F43" stroke="#E87722" strokeWidth="2"/>
        <circle cx="81" cy="198" r="6" fill="#333"/>
        <rect x="113" y="160" width="12" height="35" rx="6" fill="#FF9F43" stroke="#E87722" strokeWidth="2"/>
        <circle cx="119" cy="198" r="6" fill="#333"/>
      </g>
    </svg>
  );
};

export function FishDemo() {
  const sectionRef = useRef(null);
  const tacoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const taco = tacoRef.current;
    if (!section || !taco) return;

    // Start animation 200px before entering viewport for smooth entry
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (taco) {
            taco.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
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
      className="bg-white overflow-x-hidden relative"
      style={{ minHeight: "160px", display: "flex", alignItems: "center" }}
    >
      {/* Walking donut with demo pill button */}
      <a
        ref={tacoRef}
        href="https://foodspotapp.vercel.app/foodspot"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute flex items-center gap-3"
        style={{
          left: "-300px",
          animation: "walkAcross 7s linear infinite",
          animationPlayState: "paused",
          willChange: "transform",
          cursor: "pointer",
        }}
        title="Probarlo por 90 segundos"
      >
        {/* Donut Character */}
        <div style={{ transform: "scale(0.7)", flexShrink: 0 }}>
          <Donut />
        </div>

        {/* Demo Pill Button */}
        <div
          className="px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap shadow-lg border-2 flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            color: "white",
            border: "2px solid #059669",
            boxShadow: "0 0 15px rgba(16, 185, 129, 0.4), 0 4px 8px rgba(0, 0, 0, 0.15)",
          }}
        >
          Probarlo por 90 segundos
        </div>
      </a>

      <style>{`
        @keyframes walkAcross {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(100vw + 300px)); }
        }
        @keyframes walkLegs {
          0%, 100% { transform: rotateZ(0deg); }
          25%  { transform: rotateZ(-15deg); }
          75%  { transform: rotateZ(15deg); }
        }
        @keyframes armWave {
          0%, 100% { transform: rotate(-10deg); }
          50%      { transform: rotate(15deg); }
        }
      `}</style>
    </section>
  );
}
