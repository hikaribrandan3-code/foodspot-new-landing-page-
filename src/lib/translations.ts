export type Lang = 'es' | 'en' | 'pt';

const translations = {
  es: {
    // SEO meta
    seo_title: 'FoodSpot: Pedidos Online, POS y Marketing para Restaurantes | Con IA',
    seo_description: 'Plataforma de pedidos online sin comisiones. POS completo, análisis con IA, herramientas de marketing. Crea tu propia tienda online y quédate con el 100% de tus ventas.',
    seo_og_title: 'FoodSpot Mobile — Pedidos Online y Tienda Digital para Restaurantes',
    seo_og_description: 'Tienda online sin comisiones para restaurantes. Menú digital, pedidos, pagos y marketing con contenido de usuarios — todo en una plataforma.',
    seo_twitter_title: 'FoodSpot Mobile — Sistema de Pedidos Online para Restaurantes',
    seo_twitter_description: 'Tienda online sin comisiones con promociones impulsadas por IA y marketing de contenido generado por usuarios.',

    // Navbar
    nav_how: 'Cómo Funciona',
    nav_pricing: 'Precios',
    nav_expert_tips: 'Tips de Expertos',
    nav_contact: 'Contactos',

    // Hero
    hero_headline: 'Crea tu',
    hero_accent: 'tienda online',
    hero_cta: 'Empezar gratis',
    hero_trial: '7 días gratis. Sin tarjeta de crédito.',

    // HeroSubtitle
    subtitle_heading: '¿Qué es una tienda online?',
    subtitle_1_title: 'Venta directa, sin comisiones',
    subtitle_1_desc: 'Tu plataforma, tus ganancias',
    subtitle_2_title: 'Base de datos de clientes',
    subtitle_2_desc: 'Conoce quién compra, qué le gusta, cuándo ordena',
    subtitle_3_title: 'Un link, todos tus canales',
    subtitle_3_desc: 'Menú, pedidos, lealtad, reseñas, reservas — todo bajo tu marca. Sin fragmentación.',

    // TheIdea
    idea_title: 'La gran idea',
    idea_body_1: 'Así empezó. Vimos que faltaba: una',
    idea_body_accent: 'tienda online + cámara',
    idea_body_2: 'integradas. Creamos',
    idea_body_brand: 'FoodSpot Mobile',
    idea_body_3: ', donde ambas funcionan juntas.',

    // MiddleCTA
    mid_cta_heading: 'Listo para transformar tu negocio?',
    mid_cta_button: 'Proba gratis 7 dias !',
    mid_cta_sub: 'Sin tarjeta de credito. Sin vueltas.',

    // UGCMarketingCTA
    ugc_cta_heading: 'Convierte cada pedido en contenido viral',
    ugc_cta_button: 'Empieza ahora',

    // DemoSection
    demo_waiting: '¿Qué esperas?',
    demo_button: 'Demo',

    // Features Detailed
    features_intro_heading: 'Todo Lo Que Necesitas para Dirigir Tu Restaurante',
    features_intro_desc: 'FoodSpot es la plataforma integral que combina pedidos, POS, marketing y análisis de IA en un solo sistema. A diferencia de herramientas fragmentadas que requieren múltiples suscripciones, FoodSpot te da todo—sin comisiones.',
    features_ordering_heading: 'Sistema de Pedidos Online para Restaurantes',
    features_ordering_desc: 'Acepta pedidos directos de clientes sin depender de apps de delivery. Nuestro sistema de pedidos para restaurantes permite que los clientes ordenen a través de tu app personalizada, sitio web o código QR. Sin DoorDash. Sin comisiones de Uber Eats. Las ventas directas significan márgenes más altos y lealtad del cliente. Procesa pedidos ilimitados con notificaciones en tiempo real e integración con tu cocina.',
    features_pos_heading: 'Sistema POS Integrado para Restaurantes',
    features_pos_desc: 'Gestiona toda tu operación desde un único sistema POS para restaurantes. Rastrea inventario en tiempo real, procesa pagos al instante, gestiona horarios del personal y visualiza análisis—todo sin cambiar de aplicación. Nuestro POS es diseñado para velocidad y simplicidad, con soporte sin conexión para que nunca pierdas una venta.',
    features_marketing_heading: 'Herramientas de Marketing para Restaurantes',
    features_marketing_desc: 'Impulsa negocios recurrentes con software de marketing integrado. Usa promociones impulsadas por IA, programas de lealtad y descuentos dirigidos. Captura contenido generado por usuarios (UGC) automáticamente cuando los clientes comparten fotos de sus comidas. Convierte cada pedido en prueba social y contenido de marketing. Rastrea qué promociones funcionan mejor y optimiza.',
    features_ai_heading: 'Análisis Impulsado por IA',
    features_ai_desc: 'Toma decisiones basadas en datos con el análisis de IA de FoodSpot. Entiende qué items se venden mejor, predice horas pico, optimiza precios y pronostica necesidades de inventario. Nuestro chatbot de IA analiza tus patrones de ventas y recomienda promociones que realmente funcionan.',
    features_commission_heading: 'Sin Comisiones. Quédate Con El 100%.',
    features_commission_desc: 'Cada peso que ganas se queda contigo. A diferencia de competidores, FoodSpot cobra una suscripción plana sin comisión en ventas. Sin cuotas ocultas. Sin porcentajes. Solo pagas el 3% de Mercado Pago—lo mismo que pagarías en cualquier plataforma. Las matemáticas son simples: más ganancias para tu negocio.',

    // HowItWorks
    how_heading: 'Crea tu tienda online en 3 pasos',
    how_sub: 'Tres simples pasos para digitalizar tu restaurante.',
    step1_title: 'Crea tu menú en minutos',
    step1_desc: 'Subi fotos, precios y categorias. Incluso podes agregar calorias, advertencias de salud y etiquetas personalizadas para casos especiales. Tu tienda lista al instante. 100% NO-CODE',
    step2_title: 'Personaliza tu tienda',
    step2_desc: 'Colores, logos e identidad. Dale vida a tu app con nuestras mascotas animadas.',
    step3_title: 'Lanza tu tienda y vende',
    step3_desc: 'Sin hardware. Sin papelería. Sin drama. Conecta Mercado Pago con token + user ID. Cobra al instante. Todo ocurre en el app.',

    // Features / AI
    ai_heading: 'Foodspot AI',
    ai_desc: 'Tu asistente personal de estrategia gastronomica. Genera promociones inteligentes y optimiza tus costos analizando tus datos en tiempo real.',

    // UGCMegaSection — Beat 1
    ugc_owner_line1: 'Tus clientes siempre sacan el teléfono, sacan una foto de su comida, & la suben.',
    ugc_owner_line2: 'Ninguna app lo captura.',
    ugc_owner_line3: 'Nosotros lo hicimos.',
    ugc_owner_punch: '',
    // Beat 2
    ugc_invented_label: 'Inventado por FoodSpotMobile',
    ugc_definition: 'Una tienda digital donde clientes exploran tu comida y negocio, compran & piden sin salir de tu app.',
    ugc_invented_heading: 'Somos la primera app de comida construida alrededor de una cámara.',
    ugc_invented_sub: 'La comida llega. Tu comprobante se actualiza. Animation prompts "¿Tomar una foto?" Tu marca ya está metida en el frame.',
    ugc_try_camera: 'TRY THE CAMERA !',
    ugc_tap_here: 'tap here',
    ugc_share_earn: 'SHARE & EARN PTS !',
    ugc_video_title: 'Order Delivered = Magic Starts',
    ugc_learn_more_link: 'Want to learn how to use it to its full potential?',
    ugc_step1_title: 'Comprobante se actualiza cuando llega la comida',
    ugc_step1_desc: 'Animación pregunta: ¿Tomar una foto?',
    ugc_step2_title: 'Snap & personaliza',
    ugc_step2_desc: 'Tu marca ya está en el frame',
    ugc_step3_title: 'Comparten a stories',
    ugc_step3_desc: 'Contenido orgánico de marca, gratis.',
    // Beat 3
    ugc_learn_more: '¿Querés aprender a aprovecharlo al máximo?',
    // Beat 4
    ugc_stat_text: 'de las personas te visitan porque un amigo subió una foto.',
    // Beat 5 — Calculator
    ugc_calc_heading: '¿Cuánto contenido gratis estás dejando sobre la mesa?',
    ugc_calc_slider_label: 'Clientes que visitan tu local por día',
    ugc_calc_period: 'Período',
    ugc_calc_col_5: 'Al 5%',
    ugc_calc_col_10: 'Al 10%',
    ugc_calc_row_day: 'Por día',
    ugc_calc_row_week: 'Por semana',
    ugc_calc_row_month: 'Por mes',
    ugc_calc_cost: 'Costo por foto',
    ugc_calc_photos: 'fotos',
    ugc_calc_footer: 'Todo eso, gratis — incluido en tu plan.',
    ugc_calc_cta: 'Empezá gratis ahora',

    // Testimonials
    testimonials_heading: 'Lo que dicen nuestros clientes',
    t1_name: 'Martin Gomez',
    t1_role: 'Dueno, Burger Station',
    t1_quote: 'Desde que usamos FoodSpot, nuestras ventas directas aumentaron un 40%. La interfaz es tan intuitiva que nuestro equipo aprendio a usarla en un dia.',
    t2_name: 'Sofia Reyes',
    t2_role: 'Directora, Green Bowl',
    t2_quote: 'Las herramientas de IA para inventario y promociones nos ahorran horas cada semana. Es literalmente como tener un gerente extra trabajando 24/7.',
    t3_name: 'Carlos Mendoza',
    t3_role: 'Fundador, La Masa',
    t3_quote: 'Dejamos de pagar comisiones abusivas a las apps de delivery. FoodSpot nos dio la independencia que necesitabamos para crecer nuestro propio canal.',

    // Pricing
    pricing_heading: 'Planes simples, sin sorpresas',
    pricing_sub: 'Elige el plan que mejor se adapte al tamano de tu negocio.',
    plan_free_name: 'Prueba Gratis',
    plan_free_period: '/7 dias',
    plan_free_desc: 'Prueba la version completa con todas las funcionalidades por 7 dias sin tarjeta de credito.',
    plan_free_f1: 'Acceso total 7 dias',
    plan_free_f2: 'Setup inicial guiado',
    plan_free_f3: 'Sin tarjeta requerida',
    plan_free_btn: 'Empezar Prueba Gratis',
    plan_pro_name: 'Pro',
    plan_pro_period: '/mes',
    plan_pro_badge: 'Mas Popular',
    plan_pro_desc: 'Todas las herramientas profesionales para escalar tu negocio.',
    plan_pro_btn: 'Suscribirse Ahora',
    cat_orders: 'Pedidos y Operaciones',
    feat_orders_1: 'Pedidos ilimitados (sin limite mensual)',
    feat_orders_2: 'Panel de pedidos en tiempo real',
    cat_delivery: 'Delivery',
    feat_delivery_1: 'Radio de delivery inteligente (validado en servidor)',
    feat_delivery_2: 'Umbral de envio gratis (lo definis vos)',
    cat_payments: 'Pagos',
    feat_payments_1: 'Integracion directa con Mercado Pago',
    feat_payments_2: '0% de comision para FoodSpot — te quedas con el 100%',
    feat_payments_3: 'Pagos instantaneos',
    cat_store: 'Tienda',
    feat_store_1: 'Menu digital limpio (editas en minutos)',
    feat_store_2: 'Colores y branding personalizables',
    feat_store_3: 'Soporte bilingue (Espanol / Ingles)',
    cat_events: 'Eventos',
    feat_events_1: 'Crea y promociona eventos especiales dentro de la app',
    feat_events_2: 'Genera trafico en horas valle',
    cat_marketing: 'Marketing',
    feat_marketing_1: 'Los clientes capturan y comparten fotos en el punto de compra',
    feat_marketing_2: 'Convierte cada pedido en prueba social y marketing',
    cat_analytics: 'Analiticas',
    feat_analytics_1: 'Dashboard completo con metricas en tiempo real',
    cat_ai: 'IA',
    feat_ai_1: 'Chatbot con IA integrado a tu negocio',
    cat_support: 'Soporte',
    feat_support_1: 'Soporte prioritario por email y chat',

    // FAQ
    faq_heading: 'Preguntas frecuentes',
    faq_sub: 'Todo lo que necesitas saber sobre FoodSpot Mobile.',
    faq_q1: '¿Necesito saber programar?',
    faq_a1: 'Absolutamente NO. FoodSpot Mobile es una plataforma No-Code disenada para que cualquier dueno de restaurante pueda lanzar su app profesional sin tocar una sola linea de codigo.',
    faq_q2: '¿Cuanto tardo en configurar mi tienda?',
    faq_a2: 'El record son 5 minutos. Solo necesitas tus fotos, tus precios y ganas de vender mas.',
    faq_q3: '¿Cuanto cuesta FoodSpot Mobile?',
    faq_a3: 'FoodSpot Mobile cuesta $25.99 USD mensuales. Sin cargos ocultos. Cancela cuando quieras. Incluye: menu digital completo, sistema operativo integrado para gestion de restaurantes, gestion de personal, inventario y gastos, finance tracker, integracion Mercado Pago, herramientas de marketing UGC, asistente IA, 5 juegos integrados, modulo completo de eventos, branding personalizado e integracion WhatsApp. Todo disponible en prueba gratuita.',
    faq_q4: '¿Funciona FoodSpot Mobile en mi telefono?',
    faq_a4: 'Si. iOS, Android y web. FoodSpot Mobile esta disponible en ambas plataformas. Elegimos no estar en App Store ni Google Play para enviar actualizaciones semanales al instante sin retrasos. Tu app se actualiza automaticamente.',
    faq_q5: '¿Me cobran comision en FoodSpot Mobile?',
    faq_a5: 'Cero comision. No nos quedamos con nada. Solo pagas el 3% de Mercado Pago ya integrado, sin pasos extra. Lo mismo que pagarias en cualquier plataforma de pago.',
    faq_q6: '¿Para que tipo de restaurante sirve FoodSpot Mobile?',
    faq_a6: 'Todos. Restaurantes tradicionales, vendedores callejeros, ghost kitchens, food trucks, pizzerias, cafeterias. Cualquier negocio gastronomico. FoodSpot Mobile crece con tu empresa.',
    faq_q7: '¿Funciona en toda LATAM?',
    faq_a7: 'Si. FoodSpot Mobile funciona en Argentina, Brasil, Mexico, Chile, Colombia, Peru y toda LATAM. Integracion nativa con Mercado Pago. Soporte en espanol, portugues e ingles.',

    // SignupForm
    form_heading: 'Solicita tu demo gratuita',
    form_sub: 'Acceso instantáneo + email de bienvenida con todo lo que necesitas.',
    form_email: 'Tu email *',
    form_firstname: 'Nombre *',
    form_lastname: 'Apellido *',
    form_business_placeholder: 'Tipo de negocio *',
    form_submit: 'Solicitar Demo',
    form_success_btn: '¡Registrado!',
    form_success_title: '¡Gracias!',
    form_success_msg: 'Revisa tu email en los próximos minutos.',
    form_error_title: 'Error',
    form_error_business: 'Por favor selecciona un tipo de negocio',
    form_error_generic: 'Algo salió mal',

    // FishDemo
    demo_90: 'DEMO · Probarlo por 90 segundos',

    // CookieConsent
    cookie_text: 'Usamos cookies para analítica y personalización.',
    cookie_sub: 'Al aceptar, Google Analytics y Meta Pixel se activarán para mejorar tu experiencia.',
    cookie_decline: 'Rechazar',
    cookie_accept: 'Aceptar',

    // Footer
    footer_tagline: 'Moderniza tu restaurante con una tienda online',
    footer_contact: 'Contactos',
    footer_follow: 'Síguenos',
    footer_made: 'Hecho con amor en Cordoba Capital, Argentina para el mundo.',
    footer_rights: '2025 FoodSpot Mobile. All rights reserved.',
    footer_product: 'Producto',
    footer_features: 'Caracteristicas',
    footer_pricing: 'Precios',
    footer_templates: 'Plantillas',
    footer_company: 'Compania',
    footer_about: 'Sobre Nosotros',
    footer_contact_link: 'Contacto',
    footer_location: 'Ubicacion',
    footer_legal: 'Legal',
    footer_privacy: 'Privacidad',
    footer_terms: 'Terminos',
    footer_cookies: 'Cookies',

    // AboutUs
    about_hero: 'Sobre Nosotros — La Historia del Fundador',
    about_intro: 'Conocé la historia detrás de FoodSpot. Un emprendedor que entendió el dolor real de los dueños gastronómicos.',
    about_p1: 'Antes de crear FoodSpot, era dueño del taller de detailing automotriz número uno en Seattle, Washington. Si sabés algo de esa industria, sabés que la perfección está en los detalles, la ejecución lo es todo y la velocidad es lo que te hace ganar.',
    about_p2: 'Pero cuando miraba a los restaurantes a mi alrededor —y más tarde a los negocios acá en Latinoamérica después de mudarme a Argentina—, seguía viendo exactamente el mismo cuello de botella. Los dueños de los restaurantes estaban atrapados. Perdían pedidos por culpa de tecnología obsoleta, recibían presupuestos de miles de dólares de agencias de desarrollo lentísimas, y tenían que esperar más de 90 días por un código "a medida" que, tarde o temprano, se iba a romper de todos modos.',
    about_p3: 'Con formación en marketing y gestión de negocios, aprendí que la velocidad de ejecución es lo que diferencia a los ganadores. En Estados Unidos construí sistemas que funcionan bajo presión. Acá en Latinoamérica, vi que los restaurantes necesitaban exactamente eso: tener su propia app funcionando en 14 días, sin esperar 90 días ni gastar miles de dólares.',
    about_p4: '¿Por qué el dueño de un restaurante tiene que depender de un programador para tener un negocio digital moderno?',
    about_p5: 'Soy un fundador independiente y desarrollador. No construyo software basándome en teorías o en libros; construyo sistemas basados en la realidad operativa. FoodSpot Mobile nació porque los dueños gastronómicos merecen un sistema operativo de nivel empresarial que simplemente funcione: rápido, eficiente y sin dolores de cabeza técnicos.',
    about_roadmap_heading: 'Nuestro Roadmap (Hoja de Ruta)',
    about_phase1_title: 'Fase 1',
    about_phase1_desc: 'Potenciar a los restaurantes de toda Latinoamérica con herramientas digitales nativas y de alta fidelidad.',
    about_phase2_title: 'Fase 2',
    about_phase2_desc: 'Expandir nuestras operaciones al mercado de Estados Unidos en los próximos 6 a 8 meses.',
    about_mission_heading: 'Nuestra Misión',
    about_mission_p1: 'Construir el definitivo "Shopify de la Gastronomía para Latinoamérica" — la única plataforma no-code que entiende realmente cómo operan nuestros restaurantes. Queremos darle a los dueños el control total sobre su negocio, con cero fricción y cero dependencia de equipos de desarrollo externos.',
    about_mission_p2: 'Somos un proyecto bootstrapped (financiado a pulmón, sin inversores), somos completamente independientes y nos movemos rápido.',
    about_cta: 'Comenzar Prueba Gratis',

    // Expert Tips (Blog)
    blog_section_heading: 'Tips de Expertos',
    blog_section_sub: 'Todo lo que necesitás saber para llevar tu restaurante o cafetería al siguiente nivel.',
    blog_read_more: 'Leer más',
    blog_cta: 'Empezar Prueba Gratis',
    blog_back: 'Volver a Tips de Expertos',

    blog1_title: 'Shopify vs Restaurantes: Por Qué No Funciona',
    blog1_meta: 'Shopify no fue creado para restaurantes. Sin POS, sin KDS, sin delivery — necesitás 12+ apps para que funcione. Descubrí por qué los dueños de restaurantes lo están dejando.',
    blog1_excerpt: 'Shopify domina el e-commerce, pero no fue diseñado para restaurantes. Te mostramos por qué.',
    blog1_body: `## Shopify vs Restaurantes: Por Qué No Funciona

**La Pregunta Que Nadie Quiere Hacer (Pero Todos Se Hacen)**

Estás en Google. Buscás: "mejor sistema de pedidos online para restaurantes". O quizás "cómo poner mi restaurante online". O "POS para restaurantes que realmente funcione".

Encontrás Shopify. Está en todos lados. Se ve profesional. Parece la respuesta.

Después vas a Reddit. Buscás foros de dueños de restaurantes. Y ves las mismas preguntas una y otra vez:

*"¿Shopify es bueno para restaurantes?"*
*"El POS de Shopify nos está matando. ¿Alguna alternativa?"*
*"Estoy pagando 10 apps solo para que Shopify funcione en mi cocina."*

Los dueños de restaurantes buscan desesperadamente algo mejor. Y Shopify sigue apareciendo como "la solución" — aunque no fue construido para vos.

**El Problema de Shopify: Hacer de Todo, No Dominar Nada**

Shopify domina el e-commerce — más de 79 países, miles de millones en transacciones procesadas. Pero acá está el secreto: **Shopify fue construido para vender remeras y zapatillas dropshipped, no comida.**

Y todo dueño de restaurante que lo probó lo sabe.

Shopify no tiene un POS nativo. No tiene un KDS (sistema de pantalla de cocina). No se integra con delivery. No rastrea el estado del pedido en tiempo real. Entonces, ¿qué hacés? Le agregás apps. Muchas apps.

App de inventario. App de pantalla de cocina. Integración de delivery. Programa de fidelización. Procesador de pagos. Notificaciones por mensaje. Constructor de menú que funcione de verdad.

**Hablamos de 12+ apps como mínimo.** Cada una cuesta entre $20 y $100 por mes. Cada una es otro login, otro problema de sincronización, otro punto de falla cuando tus clientes piden en la hora pico y todo el sistema se cuelga.

{{IMG}}

**La Diferencia FoodSpot: Construido Para Restaurantes, Desde el Día Uno**

No empezamos tratando de construir la plataforma que hace de todo. Empezamos con una sola pregunta: *¿Qué necesita realmente un restaurante?*

Respuesta: Una app. Un panel. Todo incluido.

Subís tu menú, ponés tus colores de marca, agregás tu logo. Construimos una **app móvil personalizada** que tus clientes descargan o acceden por link. Navegan. Piden. Pagan. Listo.

Mientras tanto, en tu cocina: actualizaciones de pedidos en tiempo real, pantalla de cocina, seguimiento de delivery, puntos de fidelización ganados automáticamente. Tus clientes ven el estado de su pedido en vivo. Vuelven porque son recompensados por hacerlo.

**Y acá está la clave:** Shopify todavía no tiene una app móvil nativa para restaurantes. Somos los primeros en hacer esto a escala. Vos tenés una experiencia completamente personalizada. Ellos todavía están tratando de meter un cuadrado en un círculo.

**Sin Comisión No Es Solo Sobre el Precio**

Sí, Shopify se queda con un porcentaje. 2.9% + 30¢ por transacción, además de las tarifas de procesamiento. Pero el costo real está escondido:

- Clientes perdidos porque tu POS se colgó en el almuerzo
- Pagar por 12 apps en lugar de 1 solución
- Tiempo gestionando integraciones en lugar de manejar tu negocio
- Sin programa de fidelización, los clientes se van a la competencia

**Con FoodSpot, no hay comisión. Sin tarifas ocultas de apps. Sin licencias de POS. Solo vos, tus clientes, y un sistema construido para cómo realmente funcionan los restaurantes.**

---

**¿Listo para dejar de pagar por 12 apps?**

**Empezá tu prueba gratis de 7 días** — Sin tarjeta de crédito. Sin compromiso. Mirá por qué los dueños de restaurantes están dejando Shopify.`,

    blog2_title: 'Qué Significa una Tienda Online Para Tu Negocio de Comida',
    blog2_meta: 'El 67% de los clientes prefiere pedir directo desde el sitio de un restaurante. Descubrí qué es realmente una tienda online y por qué tu negocio de comida la necesita en 2026.',
    blog2_excerpt: 'La mayoría piensa que una tienda online es para vender productos como Amazon. Para restaurantes es otra cosa.',
    blog2_body: `## Qué Significa una Tienda Online Para Tu Negocio de Comida

**Estás Buscando, y No Estás Solo**

"¿Cómo armo una tienda online para mi restaurante?"
"¿Cuál es la mejor forma de tomar pedidos online?"
"¿Cómo pongo mi restaurante online?"

Todos los días, miles de dueños de restaurantes buscan exactamente estas preguntas. Y con razón — el negocio gastronómico está cambiando más rápido que nunca.

**El Malentendido**

La mayoría de los restaurantes piensa que una "tienda online" es para vender productos, como Amazon. Vendés remeras. Vendés electrodomésticos. Eso es una tienda online, ¿no?

Incorrecto.

Para restaurantes, una tienda online es algo completamente distinto. **Es una representación digital de tu negocio.** Es donde tus clientes van a ver tu menú, pedir comida y pagarte — todo sin levantar el teléfono ni visitarte en persona.

**Por Qué Esto Importa Ahora**

En los años 2000, tener un sitio web era suficiente. Subías tu menú, tus horarios, tu ubicación. Los clientes te encontraban, te llamaban, venían.

Ese mundo se terminó.

¿Hoy? **El 67% de los clientes prefiere pedir directamente del sitio web o app del restaurante** — no de plataformas de delivery de terceros. Quieren una relación directa con vos. Y si no estás ahí, se van a otro lado.

{{IMG}}

**Cómo una Tienda Online Realmente Te Ayuda**

Una tienda online hace tres cosas que los pedidos tradicionales no hacen:

1. **Te hace ver profesional.** Menús digitales, un sistema de carrito pulido, y un proceso de pago — eso es mucho más impresionante que una lista de precios garabateada o un link a un PDF. Los clientes te ven como legítimo, moderno y confiable.

2. **Te pagan en el momento del pedido.** Acá está la verdadera ventaja: cuando un cliente pasa la tarjeta y paga en ese momento, está comprometido. Se acabó el "sí, voy a pedir" seguido de que te abandonen por la competencia. Pago = venta asegurada. Vos recibís el dinero por adelantado, ellos recibent su comida a tiempo.

3. **Tu audiencia crece.** Una tienda online significa que los clientes te pueden encontrar 24/7. Alguien con antojo de tu comida a las 11 PM puede navegar tu menú y hacer un pedido sin llamar. Llegás a gente que nunca hubiera entrado porque no sabía que existías.

**La Conclusión**

Una tienda online no es un lujo. Es cómo sobrevivís en 2026.

Si tu restaurante no está online, es invisible. Y los restaurantes invisibles no crecen.

---

**¿Listo para llevar tu restaurante online?**

**Empezá tu prueba gratis de 7 días** — Construí tu tienda online personalizada en minutos. Sin tarjeta de crédito. Sin contratos a largo plazo.`,

    blog3_title: 'Cómo Capturar Contenido Orgánico Para Tu Negocio: Comprobante UGC',
    blog3_meta: 'Tus clientes ya sacan fotos de comida. Descubrí el Comprobante UGC, el sistema que convierte cada pedido en marketing orgánico gratis para tu restaurante.',
    blog3_excerpt: 'Todos sacan fotos de comida. Te mostramos cómo convertir eso en marketing gratis para tu negocio.',
    blog3_body: `## Cómo Capturar Contenido Orgánico Para Tu Negocio: Comprobante UGC

**Todos Sacan Fotos de Comida. ¿Cómo Puede Tu Negocio Aprovechar Esto?**

Pensá en tus clientes. Piden comida. Esperan. Llega la comida. ¿Qué es lo primero que hacen?

Sacan el teléfono y sacan una foto.

Es automático. Habitual. Ya están creando contenido para vos — compartiendo tu comida con sus seguidores, etiquetando tu ubicación, vendiéndote mejor que cualquier anuncio de Instagram.

Pero acá está el problema: **ninguna app de comida tiene una cámara nativa.** Ni DoorDash. Ni Uber Eats. Ni los restaurantes de Shopify. Ni las empresas multimillonarias. Todas se lo perdieron.

Nosotros no.

**El Vacío en el Mercado**

Pensalo. Los clientes ya sacan fotos. Los restaurantes necesitan desesperadamente marketing gratis y auténtico. Instagram y TikTok están llenos de contenido de comida. Y sin embargo, cuando los clientes piden desde tu app, tienen que saltar a otra app para compartir la foto.

Fricción. Momento perdido. El contenido nunca queda etiquetado con el nombre de tu negocio. Oportunidad de marketing perdida.

**Inventamos el Comprobante UGC Para Arreglar Esto**

Así funciona:

1. **El cliente pide** a través de tu app FoodSpot
2. **Comprobante en tiempo real** muestra el estado del pedido (conectado a tu KDS)
3. **La comida está lista** — aparece un personaje animado y pregunta: "¿Querés sacar una foto?"
4. **Se abre la cámara nativa** — filtros, stickers, texto, dibujo (igual que Instagram)
5. **Comparten en redes sociales** — el nombre de tu negocio ya está incluido
6. **Vos los recompensás** — puntos, descuentos, fidelización ganada

{{IMG}}

Eso es todo. Un flujo continuo. Sin saltar entre apps. Sin oportunidades de marketing perdidas.

**La Matemática Es Innegable**

Digamos que tenés 50 clientes por día. Solo el 10% dice que sí a la propuesta de la foto. Son 5 fotos por día.

Multiplicá eso por un mes (aproximadamente 25 días operativos): **125 fotos orgánicas y auténticas de tu comida compartidas en redes sociales.**

Cada una etiquetada con el nombre de tu negocio. Cada una llegando a sus seguidores. Cada una diciendo: *"Este lugar es lo suficientemente bueno para postear."*

Eso es prueba social real. Eso es marketing gratis. Eso es lo que el dinero no puede comprar.

{{IMG}}

**El Poder del Boca en Boca (Con Pruebas)**

Acá está lo que sabemos: **el 71% de las personas te visita porque un amigo subió una foto.**

No por un anuncio. No por un influencer. Porque alguien en quien confían te mostró tu comida.

Comprobante UGC es el sistema que hace que esto pase automáticamente. Cada cliente feliz se convierte en un marketer. Cada foto se convierte en una referencia. Cada compartido se convierte en un nuevo cliente entrando.

**Sin Influencers. Sin Anuncios. Solo Clientes Reales.**

El marketing tradicional es caro. Los influencers cobran miles. Los anuncios te comen el margen. ¿Pero contenido orgánico? Es gratis. Es auténtico. Y convierte mejor que cualquier cosa que puedas pagar.

Somos la primera (y única) app de comida que construyó esto dentro de la experiencia de pedido. Cuando los clientes piden, no solo están comprando comida — se están registrando para hacer marketing de tu negocio.

Y lo van a hacer felices.

---

**¿Listo para convertir a cada cliente en un marketer?**

**Empezá tu prueba gratis de 7 días** — Construí tu app personalizada con marketing UGC incluido. Sin tarjeta de crédito. Sin contratos a largo plazo.`,
  },

  en: {
    // SEO meta
    seo_title: 'FoodSpot: Restaurant Ordering, POS & Marketing | AI-Powered',
    seo_description: 'Commission-free restaurant ordering platform. Full POS, AI analytics, marketing tools. Build your own restaurant app — keep 100% of sales.',
    seo_og_title: 'FoodSpot Mobile — Restaurant Online Ordering & E-commerce Platform',
    seo_og_description: 'Commission-free restaurant online store. Digital menu, orders, payments, UGC marketing — all in one platform.',
    seo_twitter_title: 'FoodSpot Mobile — Restaurant Online Ordering System',
    seo_twitter_description: 'Commission-free restaurant online store with AI-powered promotions and UGC marketing.',

    // Navbar
    nav_how: 'How It Works',
    nav_pricing: 'Pricing',
    nav_expert_tips: 'Expert Tips',
    nav_contact: 'Contact',

    // Hero
    hero_headline: 'Create your',
    hero_accent: 'online store:',
    hero_cta: 'Start for free',
    hero_trial: '7 days free. No credit card needed.',

    // HeroSubtitle
    subtitle_heading: 'What is an online store?',
    subtitle_1_title: 'Direct sales, zero commissions',
    subtitle_1_desc: 'Your platform, your profits',
    subtitle_2_title: 'Customer database',
    subtitle_2_desc: 'Know who buys, what they like, when they order',
    subtitle_3_title: 'One Link, Every Order Channel',
    subtitle_3_desc: 'Menu, ordering, loyalty, reviews, reservations — all under your brand. No fragmentation.',

    // TheIdea
    idea_title: 'The big idea',
    idea_body_1: 'It started here. We saw what was missing: an',
    idea_body_accent: 'online store + camera',
    idea_body_2: 'built together. We created',
    idea_body_brand: 'FoodSpot Mobile',
    idea_body_3: ', where both work as one.',

    // MiddleCTA
    mid_cta_heading: 'Ready to transform your business?',
    mid_cta_button: 'Try free for 7 days!',
    mid_cta_sub: 'No credit card. No hassle.',

    // UGCMarketingCTA
    ugc_cta_heading: 'Turn every order into viral content',
    ugc_cta_button: 'Start now',

    // DemoSection
    demo_waiting: 'What are you waiting for?',
    demo_button: 'Demo',

    // Features Detailed
    features_intro_heading: 'Everything You Need to Run Your Restaurant',
    features_intro_desc: 'FoodSpot is the all-in-one restaurant platform that combines ordering, POS, marketing, and AI analytics in one unified system. Unlike fragmented tools that require multiple subscriptions and integrations, FoodSpot gives you everything—commission-free.',
    features_ordering_heading: 'Restaurant Ordering System',
    features_ordering_desc: 'Accept online orders directly from customers without relying on delivery apps. Our restaurant ordering system lets customers place orders through your branded app, website, or QR code. No DoorDash. No Uber Eats commissions. Direct sales mean higher margins and customer loyalty. Process unlimited orders with real-time notifications, order tracking, and seamless kitchen integration.',
    features_pos_heading: 'Integrated Restaurant POS System',
    features_pos_desc: 'Manage your entire operation from one unified restaurant POS system. Track inventory in real-time, process payments instantly, manage staff schedules, and view analytics—all without switching between apps. Our restaurant POS is built for speed and simplicity, with offline support so you never lose a sale.',
    features_marketing_heading: 'Restaurant Marketing Tools',
    features_marketing_desc: 'Drive repeat business with built-in restaurant marketing software. Use AI-powered promotions, loyalty programs, and targeted discounts. Capture user-generated content (UGC) automatically when customers share photos of their meals. Turn every order into social proof and marketing content. Track which promotions work best and double down on what drives revenue.',
    features_ai_heading: 'AI-Powered Analytics',
    features_ai_desc: 'Make data-driven decisions with FoodSpot\'s AI analytics. Understand which menu items sell best, predict busy hours, optimize pricing, and forecast inventory needs. Our AI chatbot analyzes your sales patterns and recommends promotions that actually work. Get insights in plain language, not spreadsheets.',
    features_commission_heading: 'Commission-Free. Keep 100%.',
    features_commission_desc: 'Every peso you earn stays with you. Unlike competitors, FoodSpot charges a flat subscription with zero commission on sales. No hidden per-order fees. No percentage cuts. You pay only for Mercado Pago processing (3%)—the same you\'d pay on any platform. The math is simple: more profit for your business.',

    // HowItWorks
    how_heading: 'Build your online store in 3 steps',
    how_sub: 'Three simple steps to take your restaurant digital.',
    step1_title: 'Build your digital menu',
    step1_desc: 'Upload photos, prices, and categories. Add calories, health warnings, and custom tags for special cases. Your store live instantly. 100% NO-CODE.',
    step2_title: 'Customize your storefront',
    step2_desc: 'Colors, logos, identity. Bring your app to life with our animated mascots.',
    step3_title: 'Launch your store and sell',
    step3_desc: 'No hardware. No paperwork. No drama. Connect Mercado Pago with your token + user ID. Get paid instantly. Everything happens in the app.',

    // Features / AI
    ai_heading: 'Foodspot AI',
    ai_desc: 'Your personal restaurant strategy assistant. Generate smart promotions and cut costs by analyzing your real-time data.',

    // UGCMegaSection — Beat 1
    ugc_owner_line1: 'Your customers always pull out their phones, take a photo of their meal, & post it.',
    ugc_owner_line2: 'No app captures it.',
    ugc_owner_line3: 'We did.',
    ugc_owner_punch: '',
    // Beat 2
    ugc_invented_label: 'Invented by FoodSpotMobile',
    ugc_definition: 'A digital storefront where customers browse your food & business, shop & order without leaving your app.',
    ugc_invented_heading: 'We\'re the first food app built around a camera.',
    ugc_invented_sub: 'Food arrives. Your receipt updates. Animation prompts "Take a photo?" Your brand is already baked into the frame.',
    ugc_try_camera: 'TRY THE CAMERA !',
    ugc_tap_here: 'tap here',
    ugc_share_earn: 'SHARE & EARN PTS !',
    ugc_video_title: 'Order Delivered = Magic Starts',
    ugc_learn_more_link: 'Want to learn how to use it to its full potential?',
    ugc_step1_title: 'Receipt updates when food arrives',
    ugc_step1_desc: 'Animation asks: Take a photo?',
    ugc_step2_title: 'Snap & customize',
    ugc_step2_desc: 'Your brand already in frame',
    ugc_step3_title: 'Share to stories',
    ugc_step3_desc: 'Free branded, organic content.',
    // Beat 3
    ugc_learn_more: 'Want to learn how to use it to its full potential?',
    // Beat 4
    ugc_stat_text: 'of people visit you because a friend posted a photo.',
    // Beat 5 — Calculator
    ugc_calc_heading: 'How much free content are you leaving on the table?',
    ugc_calc_slider_label: 'Customers visiting your location per day',
    ugc_calc_period: 'Period',
    ugc_calc_col_5: 'At 5%',
    ugc_calc_col_10: 'At 10%',
    ugc_calc_row_day: 'Per day',
    ugc_calc_row_week: 'Per week',
    ugc_calc_row_month: 'Per month',
    ugc_calc_cost: 'Cost per photo',
    ugc_calc_photos: 'photos',
    ugc_calc_footer: 'All of that, free — included in your plan.',
    ugc_calc_cta: 'Start for free',

    // Testimonials
    testimonials_heading: 'What our customers say',
    t1_name: 'Martin Gomez',
    t1_role: 'Owner, Burger Station',
    t1_quote: 'Since we started using FoodSpot, our direct sales went up 40%. The interface is so intuitive our team learned it in a single day.',
    t2_name: 'Sofia Reyes',
    t2_role: 'Director, Green Bowl',
    t2_quote: 'The AI tools for inventory and promotions save us hours every week. It\'s literally like having an extra manager working 24/7.',
    t3_name: 'Carlos Mendoza',
    t3_role: 'Founder, La Masa',
    t3_quote: 'We stopped paying insane commissions to delivery apps. FoodSpot gave us the independence we needed to grow our own channel.',

    // Pricing
    pricing_heading: 'Simple pricing, no surprises',
    pricing_sub: 'Pick the plan that fits your business.',
    plan_free_name: 'Free Trial',
    plan_free_period: '/7 days',
    plan_free_desc: 'Try the full version with every feature for 7 days. No credit card required.',
    plan_free_f1: 'Full access for 7 days',
    plan_free_f2: 'Guided onboarding',
    plan_free_f3: 'No card required',
    plan_free_btn: 'Start Free Trial',
    plan_pro_name: 'Pro',
    plan_pro_period: '/month',
    plan_pro_badge: 'Most Popular',
    plan_pro_desc: 'Every professional tool to scale your business.',
    plan_pro_btn: 'Subscribe Now',
    cat_orders: 'Orders & Operations',
    feat_orders_1: 'Unlimited orders (no monthly cap)',
    feat_orders_2: 'Real-time order dashboard',
    cat_delivery: 'Delivery',
    feat_delivery_1: 'Smart delivery radius (server-validated)',
    feat_delivery_2: 'Free shipping threshold (you decide)',
    cat_payments: 'Payments',
    feat_payments_1: 'Direct Mercado Pago integration',
    feat_payments_2: '0% commission for FoodSpot — you keep 100%',
    feat_payments_3: 'Instant payouts',
    cat_store: 'Store',
    feat_store_1: 'Clean digital menu (edit in minutes)',
    feat_store_2: 'Customizable colors and branding',
    feat_store_3: 'Bilingual support (Spanish / English)',
    cat_events: 'Events',
    feat_events_1: 'Create and promote special events inside the app',
    feat_events_2: 'Drive traffic during slow hours',
    cat_marketing: 'Marketing',
    feat_marketing_1: 'Customers capture and share photos at point of purchase',
    feat_marketing_2: 'Turn every order into social proof and marketing',
    cat_analytics: 'Analytics',
    feat_analytics_1: 'Full dashboard with real-time metrics',
    cat_ai: 'AI',
    feat_ai_1: 'AI chatbot integrated into your business',
    cat_support: 'Support',
    feat_support_1: 'Priority support via email and chat',

    // FAQ
    faq_heading: 'Frequently asked questions',
    faq_sub: 'Everything you need to know about FoodSpot Mobile.',
    faq_q1: 'Do I need to know how to code?',
    faq_a1: 'Absolutely not. FoodSpot Mobile is a No-Code platform built so any restaurant owner can launch a professional app without touching a single line of code.',
    faq_q2: 'How long does setup take?',
    faq_a2: 'The record is 5 minutes. All you need is your photos, your prices, and the drive to sell more.',
    faq_q3: 'How much does FoodSpot Mobile cost?',
    faq_a3: 'FoodSpot Mobile is $25.99 USD/month. No hidden fees. Cancel anytime. Includes: full digital menu, integrated restaurant operating system, staff management, inventory and expenses, finance tracker, Mercado Pago integration, UGC marketing tools, AI assistant, 5 built-in games, full events module, custom branding, and WhatsApp integration. Everything available in the free trial.',
    faq_q4: 'Does FoodSpot Mobile work on my phone?',
    faq_a4: 'Yes. iOS, Android, and web. We chose not to list on the App Store or Google Play so we can ship weekly updates instantly with no delays. Your app updates automatically.',
    faq_q5: 'Does FoodSpot Mobile charge commissions?',
    faq_a5: 'Zero commissions. We keep nothing. You only pay Mercado Pago\'s 3% — already integrated, no extra steps. Same as any other payment platform.',
    faq_q6: 'What type of restaurant is FoodSpot Mobile for?',
    faq_a6: 'All of them. Traditional restaurants, street vendors, ghost kitchens, food trucks, pizzerias, cafes. Any food business. FoodSpot Mobile grows with you.',
    faq_q7: 'Does it work across LATAM?',
    faq_a7: 'Yes. FoodSpot Mobile works in Argentina, Brazil, Mexico, Chile, Colombia, Peru, and all of LATAM. Native Mercado Pago integration. Support in Spanish, Portuguese, and English.',

    // SignupForm
    form_heading: 'Request your free demo',
    form_sub: 'Instant access + welcome email with everything you need.',
    form_email: 'Your email *',
    form_firstname: 'First name *',
    form_lastname: 'Last name *',
    form_business_placeholder: 'Business type *',
    form_submit: 'Request Demo',
    form_success_btn: 'Registered!',
    form_success_title: 'Thanks!',
    form_success_msg: 'Check your email in the next few minutes.',
    form_error_title: 'Error',
    form_error_business: 'Please select a business type',
    form_error_generic: 'Something went wrong',

    // FishDemo
    demo_90: 'DEMO · Try it for 90 seconds',

    // CookieConsent
    cookie_text: 'We use cookies for analytics and personalization.',
    cookie_sub: 'By accepting, Google Analytics and Meta Pixel will activate to improve your experience.',
    cookie_decline: 'Decline',
    cookie_accept: 'Accept',

    // Footer
    footer_tagline: 'Modernize your restaurant with an online store',
    footer_contact: 'Contact',
    footer_follow: 'Follow us',
    footer_made: 'Made with love in Cordoba, Argentina for the world.',
    footer_rights: '2025 FoodSpot Mobile. All rights reserved.',
    footer_product: 'Product',
    footer_features: 'Features',
    footer_pricing: 'Pricing',
    footer_templates: 'Templates',
    footer_company: 'Company',
    footer_about: 'About Us',
    footer_contact_link: 'Contact',
    footer_location: 'Location',
    footer_legal: 'Legal',
    footer_privacy: 'Privacy',
    footer_terms: 'Terms',
    footer_cookies: 'Cookies',

    // AboutUs
    about_hero: 'About Us — The Founder\'s Story',
    about_intro: 'Meet the story behind FoodSpot. An entrepreneur who understood the real pain of food business owners.',
    about_p1: 'Before building FoodSpot, I owned the #1 auto detailing shop in Seattle, Washington. If you know anything about that industry, you know perfection is in the details, execution is everything, and speed is what wins.',
    about_p2: 'But when I looked at the restaurants around me — and later at businesses here in Latin America after I moved to Argentina — I kept seeing the same bottleneck. Restaurant owners were stuck. They lost orders because of outdated tech, got quotes for thousands of dollars from slow dev agencies, and had to wait 90+ days for "custom" code that would break anyway.',
    about_p3: 'With a background in marketing and business management, I learned that execution speed is what separates winners. In the US I built systems that work under pressure. Here in Latin America, I saw that restaurants needed exactly that: their own app running in 14 days, without waiting 90 days or spending thousands.',
    about_p4: 'Why does a restaurant owner have to depend on a developer to have a modern digital business?',
    about_p5: 'I\'m an independent founder and developer. I don\'t build software from theories or books — I build systems based on operational reality. FoodSpot Mobile was born because food business owners deserve an enterprise-grade operating system that just works: fast, efficient, and zero technical headaches.',
    about_roadmap_heading: 'Our Roadmap',
    about_phase1_title: 'Phase 1',
    about_phase1_desc: 'Empower restaurants across Latin America with native, high-fidelity digital tools.',
    about_phase2_title: 'Phase 2',
    about_phase2_desc: 'Expand operations into the US market in the next 6–8 months.',
    about_mission_heading: 'Our Mission',
    about_mission_p1: 'Build the definitive "Shopify for Restaurants" — the only no-code platform that truly understands how food businesses operate. We want to give owners total control over their business, with zero friction and zero dependence on external dev teams.',
    about_mission_p2: 'We\'re a bootstrapped project — self-funded, no investors — completely independent and moving fast.',
    about_cta: 'Start Free Trial',

    // Expert Tips (Blog)
    blog_section_heading: 'Expert Tips',
    blog_section_sub: 'Everything you need to know to take your restaurant or café to the next level.',
    blog_read_more: 'Read more',
    blog_cta: 'Start Free Trial',
    blog_back: 'Back to Expert Tips',

    blog1_title: 'Shopify vs Restaurants: Why It Doesn\'t Work',
    blog1_meta: 'Shopify wasn\'t built for restaurants. No native POS, no KDS, no delivery — you need 12+ apps to make it work. See why restaurant owners are ditching it.',
    blog1_excerpt: 'Shopify dominates e-commerce, but it wasn\'t built for restaurants. Here\'s why.',
    blog1_body: `## Shopify vs Restaurants: Why It Doesn't Work

**The Question Nobody Wants To Ask (But Everyone Asks)**

You're on Google. Searching: "best online ordering system for restaurants." Or maybe "how to get my restaurant online." Or "POS for restaurants that actually works."

You find Shopify. It's everywhere. It looks professional. It feels like the answer.

Then you go to Reddit. You search restaurant owner forums. And you see the same questions over and over:

*"Is Shopify good for restaurants?"*
*"Shopify's POS is killing us. Any alternative?"*
*"I'm paying for 10 apps just to make Shopify work in my kitchen."*

Restaurant owners are desperately searching for something better. And Shopify keeps showing up as "the solution" — even though it wasn't built for you.

**Shopify's Problem: Doing Everything, Mastering Nothing**

Shopify dominates e-commerce — over 79 countries, billions in transactions processed. But here's the secret: **Shopify was built to sell dropshipped t-shirts and sneakers, not food.**

And every restaurant owner who's tried it knows it.

Shopify has no native POS. No KDS (kitchen display system). No delivery integration. No real-time order status tracking. So what do you do? You bolt on apps. A lot of apps.

Inventory app. Kitchen display app. Delivery integration. Loyalty program. Payment processor. Text notifications. A menu builder that actually works.

**We're talking 12+ apps minimum.** Each one costs $20–$100 a month. Each one is another login, another sync failure, another point of breakage when your customers order during the dinner rush and the whole system buckles.

{{IMG}}

**The FoodSpot Difference: Built For Restaurants, From Day One**

We didn't start by trying to build the platform that does everything. We started with one question: *What does a restaurant actually need?*

The answer: One app. One dashboard. Everything included.

You upload your menu, set your brand colors, add your logo. We build you a **custom mobile app** your customers download or access via link. They browse. They order. They pay. Done.

Meanwhile, on your end: real-time order updates, kitchen display, delivery tracking, loyalty points earned automatically. Your customers see their order status live. They come back because they're rewarded for it.

**And here's the kicker:** Shopify still doesn't have a native mobile app for restaurants. We're the first to do this at scale. You get a fully custom experience. They're still trying to force a square peg into a round hole.

**Commission-Free Isn't Just About Price**

Yes, Shopify takes a cut. 2.9% + 30¢ per transaction, on top of processing fees. But the real cost is hidden:

- Lost customers because your POS crashed during lunch rush
- Paying for 12 apps instead of 1 solution
- Time spent managing integrations instead of running your business
- No loyalty program, so customers drift to the competition

**With FoodSpot, there's no commission. No hidden app fees. No POS licenses. Just you, your customers, and a system built for how restaurants actually work.**

---

**Ready to stop paying for 12 apps?**

**Start your free 7-day trial** — No credit card. No commitment. See why restaurant owners are ditching Shopify.`,

    blog2_title: 'What an Online Store Means For Your Food Business',
    blog2_meta: '67% of customers prefer ordering directly from a restaurant\'s own site. Learn what an online store actually means for your food business and why you need one in 2026.',
    blog2_excerpt: 'Most people think an online store is for selling products like Amazon. For restaurants, it\'s something else entirely.',
    blog2_body: `## What an Online Store Means For Your Food Business

**You're Searching, And You're Not Alone**

"How do I build an online store for my restaurant?"
"What's the best way to take orders online?"
"How do I get my restaurant online?"

Every day, thousands of restaurant owners search exactly these questions. And for good reason — the food business is changing faster than ever.

**The Misunderstanding**

Most restaurants think an "online store" is for selling products, like Amazon. You sell t-shirts. You sell appliances. That's an online store, right?

Wrong.

For restaurants, an online store is something completely different. **It's a digital representation of your business.** It's where your customers go to see your menu, order food, and pay you — all without picking up the phone or visiting in person.

**Why This Matters Now**

Back in the early 2000s, having a website was enough. You uploaded your menu, your hours, your location. Customers found you, called you, showed up.

That world is over.

Today? **67% of customers prefer ordering directly from a restaurant's own website or app** — not from third-party delivery platforms. They want a direct relationship with you. And if you're not there, they go somewhere else.

{{IMG}}

**How an Online Store Actually Helps You**

An online store does three things traditional ordering doesn't:

1. **It makes you look professional.** Digital menus, a polished cart system, and a checkout process — that's far more impressive than a scribbled price list or a PDF link. Customers see you as legitimate, modern, and trustworthy.

2. **You get paid at the point of order.** Here's the real advantage: when a customer swipes their card and pays right then, they're committed. No more "yeah, I'll order" followed by them ditching you for the competitor down the street. Payment = locked-in sale. You get the money upfront, they get their food on time.

3. **Your audience grows.** An online store means customers can find you 24/7. Someone craving your food at 11 PM can browse your menu and place an order without calling. You reach people who never would have walked in because they didn't know you existed.

**The Bottom Line**

An online store isn't a luxury. It's how you survive in 2026.

If your restaurant isn't online, it's invisible. And invisible restaurants don't grow.

---

**Ready to take your restaurant online?**

**Start your free 7-day trial** — Build your custom online store in minutes. No credit card. No long-term contracts.`,

    blog3_title: 'How to Capture Organic Content for Your Business: UGC Receipts',
    blog3_meta: 'Your customers already take food photos. Discover UGC Receipts, the system that turns every order into free organic marketing for your restaurant.',
    blog3_excerpt: 'Everyone takes food photos. Here\'s how to turn that into free marketing for your business.',
    blog3_body: `## How to Capture Organic Content for Your Business: UGC Receipts

**Everyone Takes Food Photos. Why Isn't Your App Capturing Them?**

Think about your customers. They order food. They wait. The food arrives. What's the first thing they do?

They pull out their phone and take a photo.

It's automatic. Habitual. They're already creating content for you — sharing your food with their followers, tagging your location, selling you better than any Instagram ad could.

But here's the problem: **no food app has a native camera.** Not DoorDash. Not Uber Eats. Not Shopify restaurants. Not the billion-dollar companies. They all missed it.

We didn't.

**The Gap In The Market**

Think about it. Customers already take photos. Restaurants desperately need free, authentic marketing. Instagram and TikTok are flooded with food content. And yet, when customers order from your app, they have to jump to a different app to share the photo.

Friction. Lost moment. The content never gets tagged with your business name. Missed marketing opportunity.

**We Invented UGC Receipts To Fix This**

Here's how it works:

1. **Customer orders** through your FoodSpot app
2. **Real-time receipt** shows order status (connected to your KDS)
3. **Food is ready** — an animated character pops up and asks: "Want to take a photo?"
4. **Native camera opens** — filters, stickers, text, drawing (just like Instagram)
5. **They share to social media** — your business name is already embedded
6. **You reward them** — points, discounts, earned loyalty

{{IMG}}

That's it. One continuous flow. No app-switching. No lost marketing opportunities.

**The Math Is Undeniable**

Say you have 50 customers a day. Only 10% say yes to the photo prompt. That's 5 photos a day.

Multiply that by a month (roughly 25 operating days): **125 organic, authentic photos of your food shared on social media.**

Each one tagged with your business name. Each one reaching their followers. Each one saying: *"This place is good enough to post about."*

That's real social proof. That's free marketing. That's what money can't buy.

{{IMG}}

**The Power Of Word Of Mouth (With Proof)**

Here's what we know: **71% of people visit you because a friend posted a photo.**

Not because of an ad. Not because of an influencer. Because someone they trust showed them your food.

UGC Receipts is the system that makes this happen automatically. Every happy customer becomes a marketer. Every photo becomes a referral. Every share becomes a new customer walking in.

**No Influencers. No Ads. Just Real Customers.**

Traditional marketing is expensive. Influencers charge thousands. Ads eat your margin. But organic content? It's free. It's authentic. And it converts better than anything you could pay for.

We're the first (and only) food app to build this directly into the ordering experience. When customers order, they're not just buying food — they're signing up to market your business.

And they're going to do it happily.

---

**Ready to turn every customer into a marketer?**

**Start your free 7-day trial** — Build your custom app with UGC marketing built in. No credit card. No long-term contracts.`,
  },

  pt: {
    // SEO meta
    seo_title: 'FoodSpot: Pedidos Online, PDV e Marketing para Restaurantes | Com IA',
    seo_description: 'Plataforma de pedidos online sem comissões. PDV completo, análises com IA, ferramentas de marketing. Crie sua própria loja online e fique com 100% das vendas.',
    seo_og_title: 'FoodSpot Mobile — Pedidos Online e Loja Digital para Restaurantes',
    seo_og_description: 'Loja online sem comissões para restaurantes. Menu digital, pedidos, pagamentos e marketing com conteúdo de usuários — tudo em uma plataforma.',
    seo_twitter_title: 'FoodSpot Mobile — Sistema de Pedidos Online para Restaurantes',
    seo_twitter_description: 'Loja online sem comissões com promoções impulsionadas por IA e marketing de conteúdo gerado por usuários.',

    // Navbar
    nav_how: 'Como Funciona',
    nav_pricing: 'Preços',
    nav_expert_tips: 'Dicas de Especialistas',
    nav_contact: 'Contato',

    // Hero
    hero_headline: 'Crie sua',
    hero_accent: 'loja online:',
    hero_cta: 'Começar grátis',
    hero_trial: '7 dias grátis. Sem cartão de crédito.',

    // HeroSubtitle
    subtitle_heading: 'O que é uma loja online?',
    subtitle_1_title: 'Venda direta, sem comissões',
    subtitle_1_desc: 'Sua plataforma, seus ganhos',
    subtitle_2_title: 'Base de dados de clientes',
    subtitle_2_desc: 'Saiba quem compra, o que gosta, quando pede',
    subtitle_3_title: 'Um link, todos os seus canais',
    subtitle_3_desc: 'Cardápio, pedidos, lealdade, avaliações, reservas — tudo em sua marca. Sem fragmentação.',

    // TheIdea
    idea_title: 'A grande ideia',
    idea_body_1: 'Foi assim que começou. Vimos o que faltava: uma',
    idea_body_accent: 'loja online + câmera',
    idea_body_2: 'integradas. Criamos o',
    idea_body_brand: 'FoodSpot Mobile',
    idea_body_3: ', onde as duas funcionam juntas.',

    // MiddleCTA
    mid_cta_heading: 'Pronto para transformar seu negócio?',
    mid_cta_button: 'Experimente grátis por 7 dias!',
    mid_cta_sub: 'Sem cartão de crédito. Sem complicações.',

    // UGCMarketingCTA
    ugc_cta_heading: 'Transforme cada pedido em conteúdo viral',
    ugc_cta_button: 'Comece agora',

    // DemoSection
    demo_waiting: 'O que você está esperando?',
    demo_button: 'Demo',

    // Features Detailed
    features_intro_heading: 'Tudo Que Você Precisa Para Gerenciar Seu Restaurante',
    features_intro_desc: 'FoodSpot é a plataforma completa que combina pedidos, POS, marketing e análise de IA em um único sistema. Ao contrário de ferramentas fragmentadas que requerem múltiplas assinaturas, FoodSpot oferece tudo—sem comissões.',
    features_ordering_heading: 'Sistema de Pedidos Online para Restaurantes',
    features_ordering_desc: 'Aceite pedidos diretos de clientes sem depender de aplicativos de entrega. Nosso sistema de pedidos para restaurantes permite que os clientes façam pedidos através do seu app personalizado, site ou código QR. Sem DoorDash. Sem comissões do Uber Eats. As vendas diretas significam margens mais altas e lealdade do cliente. Processe pedidos ilimitados com notificações em tempo real e integração perfeita com sua cozinha.',
    features_pos_heading: 'Sistema POS Integrado para Restaurantes',
    features_pos_desc: 'Gerencie toda sua operação a partir de um único sistema POS para restaurantes. Rastreie inventário em tempo real, processe pagamentos instantaneamente, gerencie agendas de funcionários e visualize análises—tudo sem alternar entre aplicativos. Nosso POS foi projetado para velocidade e simplicidade, com suporte offline para que você nunca perca uma venda.',
    features_marketing_heading: 'Ferramentas de Marketing para Restaurantes',
    features_marketing_desc: 'Impulsione negócios recorrentes com software de marketing integrado. Use promoções alimentadas por IA, programas de fidelidade e descontos direcionados. Capture conteúdo gerado pelo usuário (UGC) automaticamente quando os clientes compartilham fotos de suas refeições. Transforme cada pedido em prova social e conteúdo de marketing.',
    features_ai_heading: 'Análises Alimentadas por IA',
    features_ai_desc: 'Tome decisões baseadas em dados com as análises de IA do FoodSpot. Entenda quais itens do menu vendem melhor, preveja horários de pico, otimize preços e preveja necessidades de inventário. Nosso chatbot de IA analisa seus padrões de vendas e recomenda promoções que realmente funcionam.',
    features_commission_heading: 'Sem Comissões. Mantenha 100%.',
    features_commission_desc: 'Cada real que você ganha fica com você. Ao contrário dos concorrentes, FoodSpot cobra uma assinatura fixa sem comissão nas vendas. Sem taxas ocultas. Sem percentuais. Você paga apenas o processamento do Mercado Pago (3%)—o mesmo que pagaria em qualquer plataforma. A matemática é simples: mais lucro para seu negócio.',

    // HowItWorks
    how_heading: 'Crie sua loja online em 3 passos',
    how_sub: 'Três passos simples para digitalizar seu restaurante.',
    step1_title: 'Crie seu cardápio digital',
    step1_desc: 'Adicione fotos, preços e categorias. Inclua calorias, avisos de saúde e etiquetas personalizadas. Sua loja pronta na hora. 100% SEM CÓDIGO.',
    step2_title: 'Personalize sua loja',
    step2_desc: 'Cores, logos e identidade. Dê vida ao seu app com nossas mascotes animadas.',
    step3_title: 'Lance sua loja e venda',
    step3_desc: 'Sem hardware. Sem papelada. Sem drama. Conecte o Mercado Pago com token + user ID. Receba na hora. Tudo acontece no app.',

    // Features / AI
    ai_heading: 'Foodspot AI',
    ai_desc: 'Seu assistente pessoal de estratégia gastronômica. Gere promoções inteligentes e otimize seus custos analisando seus dados em tempo real.',

    // UGCMegaSection — Beat 1
    ugc_owner_line1: 'Seus clientes sempre pegam o celular, tiram uma foto da comida, & postam.',
    ugc_owner_line2: 'Nenhum app captura isso.',
    ugc_owner_line3: 'A gente fez.',
    ugc_owner_punch: '',
    // Beat 2
    ugc_invented_label: 'Inventado pela FoodSpotMobile',
    ugc_definition: 'Uma loja digital onde clientes exploram sua comida e negócio, compram & pedem sem sair do seu app.',
    ugc_invented_heading: 'Somos o primeiro app de comida construído em torno de uma câmera.',
    ugc_invented_sub: 'A comida chega. Seu comprovante se atualiza. Animação pergunta "Tirar uma foto?" Sua marca já está embutida no frame.',
    ugc_try_camera: 'TESTE A CÂMERA !',
    ugc_tap_here: 'toque aqui',
    ugc_share_earn: 'COMPARTILHE & GANHE PTS !',
    ugc_video_title: 'Pedido Entregue = A Magia Começa',
    ugc_learn_more_link: 'Quer aprender a aproveitá-lo ao máximo?',
    ugc_step1_title: 'Comprovante se atualiza quando a comida chega',
    ugc_step1_desc: 'Animação pergunta: Tirar uma foto?',
    ugc_step2_title: 'Snap & personalize',
    ugc_step2_desc: 'Sua marca já está no frame',
    ugc_step3_title: 'Compartilha nos stories',
    ugc_step3_desc: 'Conteúdo orgânico de marca, grátis.',
    // Beat 3
    ugc_learn_more: 'Quer aprender a aproveitá-lo ao máximo?',
    // Beat 4
    ugc_stat_text: 'das pessoas visitam você porque um amigo postou uma foto.',
    // Beat 5 — Calculator
    ugc_calc_heading: 'Quanto conteúdo grátis você está deixando na mesa?',
    ugc_calc_slider_label: 'Clientes que visitam seu local por dia',
    ugc_calc_period: 'Período',
    ugc_calc_col_5: 'A 5%',
    ugc_calc_col_10: 'A 10%',
    ugc_calc_row_day: 'Por dia',
    ugc_calc_row_week: 'Por semana',
    ugc_calc_row_month: 'Por mês',
    ugc_calc_cost: 'Custo por foto',
    ugc_calc_photos: 'fotos',
    ugc_calc_footer: 'Tudo isso, grátis — incluído no seu plano.',
    ugc_calc_cta: 'Comece grátis agora',

    // Testimonials
    testimonials_heading: 'O que nossos clientes dizem',
    t1_name: 'Martin Gomez',
    t1_role: 'Proprietário, Burger Station',
    t1_quote: 'Desde que usamos o FoodSpot, nossas vendas diretas aumentaram 40%. A interface é tão intuitiva que nossa equipe aprendeu em um dia.',
    t2_name: 'Sofia Reyes',
    t2_role: 'Diretora, Green Bowl',
    t2_quote: 'As ferramentas de IA para estoque e promoções nos economizam horas toda semana. É literalmente como ter um gerente extra trabalhando 24/7.',
    t3_name: 'Carlos Mendoza',
    t3_role: 'Fundador, La Masa',
    t3_quote: 'Paramos de pagar comissões abusivas para apps de entrega. O FoodSpot nos deu a independência que precisávamos para crescer nosso próprio canal.',

    // Pricing
    pricing_heading: 'Planos simples, sem surpresas',
    pricing_sub: 'Escolha o plano que melhor se adapta ao seu negócio.',
    plan_free_name: 'Teste Grátis',
    plan_free_period: '/7 dias',
    plan_free_desc: 'Experimente a versão completa com todas as funcionalidades por 7 dias sem cartão de crédito.',
    plan_free_f1: 'Acesso total por 7 dias',
    plan_free_f2: 'Configuração inicial guiada',
    plan_free_f3: 'Sem cartão necessário',
    plan_free_btn: 'Iniciar Teste Grátis',
    plan_pro_name: 'Pro',
    plan_pro_period: '/mês',
    plan_pro_badge: 'Mais Popular',
    plan_pro_desc: 'Todas as ferramentas profissionais para escalar seu negócio.',
    plan_pro_btn: 'Assinar Agora',
    cat_orders: 'Pedidos e Operações',
    feat_orders_1: 'Pedidos ilimitados (sem limite mensal)',
    feat_orders_2: 'Painel de pedidos em tempo real',
    cat_delivery: 'Entrega',
    feat_delivery_1: 'Raio de entrega inteligente (validado no servidor)',
    feat_delivery_2: 'Frete grátis configurável (você decide)',
    cat_payments: 'Pagamentos',
    feat_payments_1: 'Integração direta com Mercado Pago',
    feat_payments_2: '0% de comissão para FoodSpot — você fica com 100%',
    feat_payments_3: 'Pagamentos instantâneos',
    cat_store: 'Loja',
    feat_store_1: 'Cardápio digital limpo (edite em minutos)',
    feat_store_2: 'Cores e branding personalizáveis',
    feat_store_3: 'Suporte bilíngue (Português / Espanhol)',
    cat_events: 'Eventos',
    feat_events_1: 'Crie e promova eventos especiais dentro do app',
    feat_events_2: 'Gere tráfego nos horários de menor movimento',
    cat_marketing: 'Marketing',
    feat_marketing_1: 'Clientes capturam e compartilham fotos no ponto de compra',
    feat_marketing_2: 'Transforme cada pedido em prova social e marketing',
    cat_analytics: 'Análises',
    feat_analytics_1: 'Dashboard completo com métricas em tempo real',
    cat_ai: 'IA',
    feat_ai_1: 'Chatbot com IA integrado ao seu negócio',
    cat_support: 'Suporte',
    feat_support_1: 'Suporte prioritário por e-mail e chat',

    // FAQ
    faq_heading: 'Perguntas frequentes',
    faq_sub: 'Tudo o que você precisa saber sobre o FoodSpot Mobile.',
    faq_q1: 'Preciso saber programar?',
    faq_a1: 'Absolutamente NÃO. O FoodSpot Mobile é uma plataforma No-Code desenvolvida para que qualquer proprietário de restaurante possa lançar seu app profissional sem tocar em uma única linha de código.',
    faq_q2: 'Quanto tempo leva para configurar minha loja?',
    faq_a2: 'O recorde é 5 minutos. Você só precisa das suas fotos, dos seus preços e vontade de vender mais.',
    faq_q3: 'Quanto custa o FoodSpot Mobile?',
    faq_a3: 'O FoodSpot Mobile custa $25,99 USD por mês. Sem taxas ocultas. Cancele quando quiser. Inclui: cardápio digital completo, sistema operacional integrado para gestão de restaurantes, gestão de equipe, inventário e despesas, finance tracker, integração Mercado Pago, ferramentas de marketing UGC, assistente de IA, 5 jogos integrados, módulo completo de eventos, branding personalizado e integração WhatsApp. Tudo disponível no teste gratuito.',
    faq_q4: 'O FoodSpot Mobile funciona no meu celular?',
    faq_a4: 'Sim. iOS, Android e web. Optamos por não estar na App Store nem no Google Play para enviar atualizações semanais instantaneamente sem atrasos. Seu app se atualiza automaticamente.',
    faq_q5: 'O FoodSpot Mobile cobra comissões?',
    faq_a5: 'Zero comissões. Não ficamos com nada. Você paga apenas os 3% do Mercado Pago já integrado, sem etapas extras. O mesmo que pagaria em qualquer plataforma de pagamento.',
    faq_q6: 'Para que tipo de restaurante serve o FoodSpot Mobile?',
    faq_a6: 'Para todos. Restaurantes tradicionais, vendedores de rua, ghost kitchens, food trucks, pizzarias, cafeterias. Qualquer negócio gastronômico. O FoodSpot Mobile cresce com sua empresa.',
    faq_q7: 'Funciona em toda a América Latina?',
    faq_a7: 'Sim. O FoodSpot Mobile funciona na Argentina, Brasil, México, Chile, Colômbia, Peru e em toda a América Latina. Integração nativa com Mercado Pago. Suporte em espanhol, português e inglês.',

    // SignupForm
    form_heading: 'Solicite sua demonstração gratuita',
    form_sub: 'Acesso instantâneo + e-mail de boas-vindas com tudo o que você precisa.',
    form_email: 'Seu e-mail *',
    form_firstname: 'Nome *',
    form_lastname: 'Sobrenome *',
    form_business_placeholder: 'Tipo de negócio *',
    form_submit: 'Solicitar Demo',
    form_success_btn: 'Registrado!',
    form_success_title: 'Obrigado!',
    form_success_msg: 'Verifique seu e-mail nos próximos minutos.',
    form_error_title: 'Erro',
    form_error_business: 'Por favor, selecione um tipo de negócio',
    form_error_generic: 'Algo deu errado',

    // FishDemo
    demo_90: 'DEMO · Experimente por 90 segundos',

    // CookieConsent
    cookie_text: 'Usamos cookies para análise e personalização.',
    cookie_sub: 'Ao aceitar, o Google Analytics e o Meta Pixel serão ativados para melhorar sua experiência.',
    cookie_decline: 'Recusar',
    cookie_accept: 'Aceitar',

    // Footer
    footer_tagline: 'Modernize seu restaurante com uma loja online',
    footer_contact: 'Contato',
    footer_follow: 'Siga-nos',
    footer_made: 'Feito com amor em Córdoba, Argentina para o mundo.',
    footer_rights: '2025 FoodSpot Mobile. Todos os direitos reservados.',
    footer_product: 'Produto',
    footer_features: 'Funcionalidades',
    footer_pricing: 'Preços',
    footer_templates: 'Modelos',
    footer_company: 'Empresa',
    footer_about: 'Sobre Nós',
    footer_contact_link: 'Contato',
    footer_location: 'Localização',
    footer_legal: 'Legal',
    footer_privacy: 'Privacidade',
    footer_terms: 'Termos',
    footer_cookies: 'Cookies',

    // AboutUs
    about_hero: 'Sobre Nós — A História do Fundador',
    about_intro: 'Conheça a história por trás do FoodSpot. Um empreendedor que entendeu a dor real dos donos de negócios gastronômicos.',
    about_p1: 'Antes de criar o FoodSpot, eu era dono da melhor oficina de detalhamento automotivo de Seattle, Washington. Se você conhece esse setor, sabe que a perfeição está nos detalhes, a execução é tudo e a velocidade é o que faz você ganhar.',
    about_p2: 'Mas quando olhava para os restaurantes ao meu redor — e mais tarde para os negócios aqui na América Latina depois de me mudar para a Argentina — continuava vendo exatamente o mesmo gargalo. Os donos de restaurantes estavam presos. Perdiam pedidos por causa de tecnologia obsoleta, recebiam orçamentos de milhares de dólares de agências de desenvolvimento lentas e precisavam esperar mais de 90 dias por um código "personalizado" que, cedo ou tarde, quebraria de qualquer forma.',
    about_p3: 'Com formação em marketing e gestão de negócios, aprendi que a velocidade de execução é o que diferencia os vencedores. Nos Estados Unidos, construí sistemas que funcionam sob pressão. Aqui na América Latina, vi que os restaurantes precisavam exatamente disso: ter seu próprio app funcionando em 14 dias, sem esperar 90 dias nem gastar milhares de dólares.',
    about_p4: 'Por que o dono de um restaurante precisa depender de um programador para ter um negócio digital moderno?',
    about_p5: 'Sou um fundador independente e desenvolvedor. Não construo software baseado em teorias ou livros — construo sistemas baseados na realidade operacional. O FoodSpot Mobile nasceu porque os donos de negócios gastronômicos merecem um sistema operacional de nível empresarial que simplesmente funciona: rápido, eficiente e sem dores de cabeça técnicas.',
    about_roadmap_heading: 'Nosso Roadmap',
    about_phase1_title: 'Fase 1',
    about_phase1_desc: 'Capacitar restaurantes de toda a América Latina com ferramentas digitais nativas e de alta fidelidade.',
    about_phase2_title: 'Fase 2',
    about_phase2_desc: 'Expandir nossas operações para o mercado dos Estados Unidos nos próximos 6 a 8 meses.',
    about_mission_heading: 'Nossa Missão',
    about_mission_p1: 'Construir o definitivo "Shopify da Gastronomia" — a única plataforma no-code que realmente entende como nossos restaurantes operam. Queremos dar aos proprietários controle total sobre seu negócio, com zero fricção e zero dependência de equipes de desenvolvimento externas.',
    about_mission_p2: 'Somos um projeto bootstrapped — financiado com recursos próprios, sem investidores — completamente independentes e nos movemos rapidamente.',
    about_cta: 'Iniciar Teste Grátis',

    // Expert Tips (Blog)
    blog_section_heading: 'Dicas de Especialistas',
    blog_section_sub: 'Tudo o que você precisa saber para levar seu restaurante ou café para o próximo nível.',
    blog_read_more: 'Leia mais',
    blog_cta: 'Iniciar Teste Grátis',
    blog_back: 'Voltar para Dicas de Especialistas',

    blog1_title: 'Shopify vs Restaurantes: Por Que Não Funciona',
    blog1_meta: 'O Shopify não foi feito para restaurantes. Sem PDV, sem KDS, sem delivery — você precisa de 12+ apps para funcionar. Veja por que os donos de restaurantes estão abandonando ele.',
    blog1_excerpt: 'O Shopify domina o e-commerce, mas não foi feito para restaurantes. Veja por quê.',
    blog1_body: `## Shopify vs Restaurantes: Por Que Não Funciona

**A Pergunta Que Ninguém Quer Fazer (Mas Todos Fazem)**

Você está no Google. Pesquisando: "melhor sistema de pedidos online para restaurantes". Ou talvez "como colocar meu restaurante online". Ou "PDV para restaurantes que realmente funcione".

Você encontra o Shopify. Está em todo lugar. Parece profissional. Parece a resposta.

Depois você vai ao Reddit. Pesquisa fóruns de donos de restaurantes. E vê as mesmas perguntas repetidas vezes:

*"O Shopify é bom para restaurantes?"*
*"O PDV do Shopify está nos matando. Alguma alternativa?"*
*"Estou pagando por 10 apps só para o Shopify funcionar na minha cozinha."*

Donos de restaurantes estão desesperadamente procurando algo melhor. E o Shopify continua aparecendo como "a solução" — mesmo não tendo sido feito para você.

**O Problema do Shopify: Fazer de Tudo, Não Dominar Nada**

O Shopify domina o e-commerce — mais de 79 países, bilhões em transações processadas. Mas aqui está o segredo: **o Shopify foi criado para vender camisetas e tênis dropshipping, não comida.**

E todo dono de restaurante que já tentou usar sabe disso.

O Shopify não tem PDV nativo. Não tem KDS (sistema de tela de cozinha). Não se integra com delivery. Não rastreia o status do pedido em tempo real. Então o que você faz? Você adiciona apps. Muitos apps.

App de estoque. App de tela de cozinha. Integração de delivery. Programa de fidelidade. Processador de pagamentos. Notificações por mensagem. Um construtor de menu que realmente funcione.

**Estamos falando de 12+ apps no mínimo.** Cada um custa entre $20 e $100 por mês. Cada um é outro login, outra falha de sincronização, outro ponto de quebra quando seus clientes pedem no horário de pico e o sistema todo trava.

{{IMG}}

**A Diferença FoodSpot: Construído Para Restaurantes, Desde o Dia Um**

Não começamos tentando construir a plataforma que faz tudo. Começamos com uma única pergunta: *O que um restaurante realmente precisa?*

Resposta: Um app. Um painel. Tudo incluído.

Você faz upload do seu menu, define suas cores de marca, adiciona seu logo. Construímos um **app móvel personalizado** que seus clientes baixam ou acessam por link. Eles navegam. Pedem. Pagam. Pronto.

Enquanto isso, na sua cozinha: atualizações de pedidos em tempo real, tela de cozinha, rastreamento de delivery, pontos de fidelidade ganhos automaticamente. Seus clientes veem o status do pedido em tempo real. Eles voltam porque são recompensados por isso.

**E aqui está o ponto principal:** o Shopify ainda não tem um app móvel nativo para restaurantes. Somos os primeiros a fazer isso em escala. Você tem uma experiência totalmente personalizada. Eles ainda estão tentando encaixar um quadrado em um círculo.

**Sem Comissão Não É Só Sobre Preço**

Sim, o Shopify cobra uma porcentagem. 2,9% + 30¢ por transação, além das taxas de processamento. Mas o custo real está escondido:

- Clientes perdidos porque seu PDV travou no horário de almoço
- Pagar por 12 apps em vez de 1 solução
- Tempo gerenciando integrações em vez de administrar seu negócio
- Sem programa de fidelidade, os clientes vão para a concorrência

**Com o FoodSpot, não há comissão. Sem taxas ocultas de apps. Sem licenças de PDV. Só você, seus clientes, e um sistema construído para como os restaurantes realmente funcionam.**

---

**Pronto para parar de pagar por 12 apps?**

**Comece seu teste gratuito de 7 dias** — Sem cartão de crédito. Sem compromisso. Veja por que donos de restaurantes estão abandonando o Shopify.`,

    blog2_title: 'O Que Uma Loja Online Significa Para Seu Negócio de Comida',
    blog2_meta: '67% dos clientes preferem pedir direto do site do restaurante. Descubra o que uma loja online realmente significa para o seu negócio de comida e por que você precisa de uma em 2026.',
    blog2_excerpt: 'A maioria pensa que uma loja online é para vender produtos como a Amazon. Para restaurantes é outra coisa.',
    blog2_body: `## O Que Uma Loja Online Significa Para Seu Negócio de Comida

**Você Está Pesquisando, e Não Está Sozinho**

"Como eu crio uma loja online para meu restaurante?"
"Qual a melhor forma de receber pedidos online?"
"Como coloco meu restaurante online?"

Todos os dias, milhares de donos de restaurantes pesquisam exatamente essas perguntas. E com razão — o negócio gastronômico está mudando mais rápido do que nunca.

**O Mal-Entendido**

A maioria dos restaurantes pensa que uma "loja online" é para vender produtos, como a Amazon. Você vende camisetas. Você vende eletrodomésticos. Isso é uma loja online, certo?

Errado.

Para restaurantes, uma loja online é algo completamente diferente. **É uma representação digital do seu negócio.** É onde seus clientes vão ver seu menu, pedir comida e pagar você — tudo sem pegar o telefone ou visitar pessoalmente.

**Por Que Isso Importa Agora**

Nos anos 2000, ter um site já era suficiente. Você fazia upload do seu menu, horários, localização. Os clientes te encontravam, ligavam, apareciam.

Esse mundo acabou.

Hoje? **67% dos clientes preferem pedir diretamente do site ou app do restaurante** — não de plataformas de delivery terceirizadas. Eles querem um relacionamento direto com você. E se você não está lá, eles vão para outro lugar.

{{IMG}}

**Como Uma Loja Online Realmente Te Ajuda**

Uma loja online faz três coisas que os pedidos tradicionais não fazem:

1. **Faz você parecer profissional.** Menus digitais, um sistema de carrinho bem feito, e um processo de pagamento — isso é muito mais impressionante do que uma lista de preços rabiscada ou um link de PDF. Os clientes te veem como legítimo, moderno e confiável.

2. **Você recebe o pagamento no momento do pedido.** Aqui está a verdadeira vantagem: quando um cliente passa o cartão e paga naquele momento, ele está comprometido. Acabou o "sim, vou pedir" seguido de ele te abandonar pela concorrência. Pagamento = venda garantida. Você recebe o dinheiro adiantado, eles recebem a comida no horário certo.

3. **Seu público cresce.** Uma loja online significa que os clientes podem te encontrar 24/7. Alguém com vontade da sua comida às 23h pode navegar pelo seu menu e fazer um pedido sem ligar. Você alcança pessoas que nunca teriam entrado porque não sabiam que você existia.

**A Conclusão**

Uma loja online não é um luxo. É como você sobrevive em 2026.

Se seu restaurante não está online, ele é invisível. E restaurantes invisíveis não crescem.

---

**Pronto para colocar seu restaurante online?**

**Comece seu teste gratuito de 7 dias** — Construa sua loja online personalizada em minutos. Sem cartão de crédito. Sem contratos de longo prazo.`,

    blog3_title: 'Como Capturar Conteúdo Orgânico Para Seu Negócio: Comprovante UGC',
    blog3_meta: 'Seus clientes já tiram fotos de comida. Descubra o Comprovante UGC, o sistema que transforma cada pedido em marketing orgânico gratuito para seu restaurante.',
    blog3_excerpt: 'Todo mundo tira fotos de comida. Veja como transformar isso em marketing gratuito para seu negócio.',
    blog3_body: `## Como Capturar Conteúdo Orgânico Para Seu Negócio: Comprovante UGC

**Todo Mundo Tira Fotos de Comida. Por Que Seu App Não Está Capturando Isso?**

Pense nos seus clientes. Eles pedem comida. Esperam. A comida chega. Qual é a primeira coisa que fazem?

Tiram o celular e fazem uma foto.

É automático. Habitual. Eles já estão criando conteúdo para você — compartilhando sua comida com seus seguidores, marcando sua localização, vendendo você melhor do que qualquer anúncio do Instagram.

Mas aqui está o problema: **nenhum app de comida tem uma câmera nativa.** Nem o DoorDash. Nem o Uber Eats. Nem os restaurantes do Shopify. Nem as empresas de bilhões de dólares. Todos perderam essa.

Nós não.

**A Lacuna No Mercado**

Pense nisso. Os clientes já tiram fotos. Os restaurantes precisam desesperadamente de marketing gratuito e autêntico. Instagram e TikTok estão inundados de conteúdo de comida. E ainda assim, quando os clientes pedem pelo seu app, eles precisam pular para outro app para compartilhar a foto.

Fricção. Momento perdido. O conteúdo nunca fica marcado com o nome do seu negócio. Oportunidade de marketing perdida.

**Inventamos o Comprovante UGC Para Resolver Isso**

Veja como funciona:

1. **Cliente pede** através do seu app FoodSpot
2. **Comprovante em tempo real** mostra o status do pedido (conectado ao seu KDS)
3. **A comida está pronta** — um personagem animado aparece e pergunta: "Quer tirar uma foto?"
4. **A câmera nativa abre** — filtros, adesivos, texto, desenho (igual ao Instagram)
5. **Eles compartilham nas redes sociais** — o nome do seu negócio já está incluído
6. **Você os recompensa** — pontos, descontos, fidelidade conquistada

{{IMG}}

É isso. Um fluxo contínuo. Sem trocar de app. Sem oportunidades de marketing perdidas.

**A Matemática É Inegável**

Digamos que você tenha 50 clientes por dia. Apenas 10% dizem sim à proposta da foto. São 5 fotos por dia.

Multiplique isso por um mês (aproximadamente 25 dias operacionais): **125 fotos orgânicas e autênticas da sua comida compartilhadas nas redes sociais.**

Cada uma marcada com o nome do seu negócio. Cada uma alcançando seus seguidores. Cada uma dizendo: *"Esse lugar é bom o suficiente para postar."*

Essa é prova social real. Isso é marketing gratuito. Isso é o que dinheiro não pode comprar.

{{IMG}}

**O Poder do Boca a Boca (Com Provas)**

Aqui está o que sabemos: **71% das pessoas visitam você porque um amigo postou uma foto.**

Não por causa de um anúncio. Não por causa de um influenciador. Porque alguém em quem confiam mostrou sua comida.

Comprovante UGC é o sistema que faz isso acontecer automaticamente. Cada cliente feliz se torna um marqueteiro. Cada foto se torna uma indicação. Cada compartilhamento se torna um novo cliente entrando.

**Sem Influenciadores. Sem Anúncios. Só Clientes Reais.**

O marketing tradicional é caro. Influenciadores cobram milhares. Anúncios consomem sua margem. Mas conteúdo orgânico? É gratuito. É autêntico. E converte melhor do que qualquer coisa que você pudesse pagar.

Somos o primeiro (e único) app de comida a construir isso diretamente na experiência de pedido. Quando os clientes pedem, eles não estão apenas comprando comida — estão se inscrevendo para fazer marketing do seu negócio.

E eles vão fazer isso com prazer.

---

**Pronto para transformar cada cliente em um marqueteiro?**

**Comece seu teste gratuito de 7 dias** — Construa seu app personalizado com marketing UGC incluído. Sem cartão de crédito. Sem contratos de longo prazo.`,
  },
};

export default translations;

export type TranslationKey = keyof typeof translations.es;

export function t(lang: Lang, key: TranslationKey): string {
  return (translations[lang] as Record<string, string>)[key] ?? (translations.es as Record<string, string>)[key] ?? key;
}
