export function FishDemo() {
  return (
    <section className="bg-white py-10 flex justify-center items-center">
      <a
        href="https://foodspotapp.vercel.app/foodspot"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-4 rounded-full font-bold text-base shadow-xl inline-flex items-center gap-2 transition-all active:scale-95 hover:shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          color: "white",
          border: "2px solid #059669",
          boxShadow: "0 0 20px rgba(16, 185, 129, 0.35), 0 4px 12px rgba(0,0,0,0.12)",
        }}
      >
        DEMO · Probarlo por 90 segundos
      </a>
    </section>
  );
}
