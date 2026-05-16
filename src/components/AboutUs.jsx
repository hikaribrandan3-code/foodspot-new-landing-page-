export function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-8">
          Sobre Nosotros — La Historia del Fundador
        </h1>
      </section>

      {/* Intro Text */}
      <section className="px-6 max-w-4xl mx-auto pb-12">
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Conocé la historia detrás de FoodSpot. Un emprendedor que entendió el dolor real de los dueños gastronómicos.
        </p>
      </section>

      {/* Founder Image */}
      <section className="pb-12 px-6 max-w-4xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-lg mb-12">
          <picture>
            <source srcSet="/founder-home-office.webp" type="image/webp" />
            <img
              src="/founder-home-office.jpg"
              alt="Fundador en su home office"
              className="w-full h-auto object-cover"
            />
          </picture>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 max-w-4xl mx-auto pb-20">
        <div className="prose prose-lg max-w-none space-y-6 text-on-surface-variant leading-relaxed">
          <p>
            Antes de crear FoodSpot, era dueño del taller de detailing automotriz número uno en Seattle, Washington. Si sabés algo de esa industria, sabés que la perfección está en los detalles, la ejecución lo es todo y la velocidad es lo que te hace ganar.
          </p>

          <p>
            Pero cuando miraba a los restaurantes a mi alrededor —y más tarde a los negocios acá en Latinoamérica después de mudarme a Argentina—, seguía viendo exactamente el mismo cuello de botella. Los dueños de los restaurantes estaban atrapados. Perdían pedidos por culpa de tecnología obsoleta, recibían presupuestos de miles de dólares de agencias de desarrollo lentísimas, y tenían que esperar más de 90 días por un código "a medida" que, tarde o temprano, se iba a romper de todos modos.
          </p>

          <p>
            Con formación en marketing y gestión de negocios, aprendí que la velocidad de ejecución es lo que diferencia a los ganadores. En Estados Unidos construí sistemas que funcionan bajo presión. Acá en Latinoamérica, vi que los restaurantes necesitaban exactamente eso: tener su propia app funcionando en 14 días, sin esperar 90 días ni gastar miles de dólares.
          </p>

          <p>
            Así que me hice una pregunta simple: <span className="font-semibold text-primary">¿Por qué el dueño de un restaurante tiene que depender de un programador para tener un negocio digital moderno?</span>
          </p>

          <p>
            Soy un fundador independiente y desarrollador. No construyo software basándome en teorías o en libros; construyo sistemas basados en la realidad operativa. FoodSpot Mobile nació porque los dueños gastronómicos merecen un sistema operativo de nivel empresarial que simplemente funcione: rápido, eficiente y sin dolores de cabeza técnicos.
          </p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="px-6 py-20 bg-primary-container/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl text-on-surface mb-12">Nuestro Roadmap (Hoja de Ruta)</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-primary/20">
              <h3 className="font-display text-2xl text-primary mb-4">Fase 1</h3>
              <p className="text-on-surface-variant">
                Potenciar a los restaurantes de toda Latinoamérica con herramientas digitales nativas y de alta fidelidad.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-primary/20">
              <h3 className="font-display text-2xl text-primary mb-4">Fase 2</h3>
              <p className="text-on-surface-variant">
                Expandir nuestras operaciones al mercado de Estados Unidos en los próximos 6 a 8 meses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="font-display text-3xl text-on-surface mb-8">Nuestra Misión</h2>

        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <p>
            Construir el definitivo <span className="font-semibold text-primary">"Shopify de la Gastronomía para Latinoamérica"</span> — la única plataforma no-code que entiende realmente cómo operan nuestros restaurantes. Queremos darle a los dueños el control total sobre su negocio, con cero fricción y cero dependencia de equipos de desarrollo externos.
          </p>

          <p className="pt-4 text-lg">
            Somos un proyecto <span className="font-semibold">bootstrapped</span> (financiado a pulmón, sin inversores), somos completamente independientes y nos movemos rápido.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-outline-variant">
          <a
            href="https://foodspotapp.vercel.app/start-trial"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all active:scale-95 shadow-lg"
          >
            Comenzar Prueba Gratis
          </a>
        </div>
      </section>
    </div>
  );
}
