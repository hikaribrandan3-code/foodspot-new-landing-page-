import { useEffect, useRef } from "react";

// Donut character - cute and minimal
const Donut = () => {
  return (
    <svg className="donut-character" width="140" height="160" viewBox="0 0 200 210" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Legs */}
      <g className="donut-legs">
        <rect x="75" y="162" width="14" height="38" rx="7" fill="#FF9F43" stroke="#E87722" strokeWidth="2"/>
        <ellipse cx="82" cy="200" rx="8" ry="5" fill="#333"/>
        <rect x="111" y="162" width="14" height="38" rx="7" fill="#FF9F43" stroke="#E87722" strokeWidth="2"/>
        <ellipse cx="118" cy="200" rx="8" ry="5" fill="#333"/>
      </g>

      {/* Donut body */}
      <circle cx="100" cy="95" r="72" fill="#FF9F43" stroke="#E87722" strokeWidth="3"/>
      {/* Icing */}
      <path d="M 35 80 Q 55 45 100 40 Q 145 45 165 80 Q 155 60 130 58 Q 115 52 100 52 Q 85 52 70 58 Q 45 60 35 80 Z" fill="#FF6B9D" opacity="0.9"/>
      <circle cx="100" cy="95" r="35" fill="white"/>

      {/* Sprinkles */}
      <rect x="62" y="52" width="6" height="18" rx="3" fill="#FFD93D" transform="rotate(-20 65 61)"/>
      <rect x="85" y="44" width="5" height="16" rx="2.5" fill="#6BCB77" transform="rotate(10 87 52)"/>
      <rect x="108" y="43" width="5" height="16" rx="2.5" fill="#4D96FF" transform="rotate(-8 110 51)"/>
      <rect x="130" y="50" width="6" height="18" rx="3" fill="#FF6B9D" transform="rotate(15 133 59)"/>
      <rect x="148" y="62" width="5" height="14" rx="2.5" fill="#FFD93D" transform="rotate(30 150 69)"/>

      {/* Eyes */}
      <circle cx="82" cy="88" r="9" fill="#333"/>
      <circle cx="79" cy="85" r="3.5" fill="white"/>
      <circle cx="118" cy="88" r="9" fill="#333"/>
      <circle cx="115" cy="85" r="3.5" fill="white"/>

      {/* Blush */}
      <ellipse cx="65" cy="105" rx="10" ry="6" fill="#FFB6C1" opacity="0.7"/>
      <ellipse cx="135" cy="105" rx="10" ry="6" fill="#FFB6C1" opacity="0.7"/>

      {/* Smile */}
      <path d="M 86 112 Q 100 124 114 112" stroke="#333" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
};

export function FishDemo() {
  const sectionRef = useRef(null);
  const donutRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const donut = donutRef.current;
    if (!section || !donut) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (donut) {
            donut.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
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
      className="bg-white overflow-hidden relative"
      style={{ minHeight: "200px", display: "flex", alignItems: "center" }}
    >
      {/* Walking donut with speech bubble */}
      <div
        ref={donutRef}
        className="absolute flex flex-col items-center"
        style={{
          animation: "walkToCenter 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
          animationPlayState: "paused",
          willChange: "transform",
          left: "-200px",
          bottom: "0",
        }}
      >
        {/* Speech bubble */}
        <a
          href="https://foodspotapp.vercel.app/foodspot"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 relative block"
          style={{ cursor: "pointer" }}
        >
          <div
            className="px-5 py-3 rounded-2xl font-bold text-sm whitespace-nowrap shadow-xl"
            style={{
              background: "white",
              color: "#059669",
              border: "2.5px solid #10b981",
              boxShadow: "0 4px 24px rgba(16,185,129,0.18), 0 2px 8px rgba(0,0,0,0.08)",
              borderRadius: "18px",
              fontSize: "14px",
              letterSpacing: "0.01em",
            }}
          >
            👉 Probarlo por 90 segundos
          </div>
          {/* Bubble tail */}
          <div style={{
            position: "absolute",
            bottom: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: "13px solid #10b981",
          }}/>
          <div style={{
            position: "absolute",
            bottom: "-9px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "11px solid white",
          }}/>
        </a>

        {/* Donut */}
        <div style={{ marginTop: "8px" }}>
          <Donut />
        </div>
      </div>

      <style>{`
        @keyframes walkToCenter {
          0%   { transform: translateX(0px); }
          100% { transform: translateX(calc(50vw - 70px)); }
        }
        @keyframes walkLegs {
          0%, 100% { transform: rotateZ(0deg); }
          25%  { transform: rotateZ(-18deg); }
          75%  { transform: rotateZ(18deg); }
        }
        .donut-legs {
          animation: walkLegs 0.5s ease-in-out infinite;
          transform-origin: center top;
        }
        .donut-character {
          animation: donutBounce 0.5s ease-in-out infinite;
        }
        @keyframes donutBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </section>
  );
}
