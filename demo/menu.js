/* ── QR Menu — restaurant data ────────────────────────────────
   THIS IS THE ONLY FILE A RESTAURANT NEEDS TO EDIT.

   Everything the menu renders comes from here: branding, the
   WhatsApp number the orders land in, the info tab, and the
   categories with their items. No build step, no database —
   edit, save, deploy.

   Later this same shape is what the dashboard writes into
   Supabase and serves as JSON; app.js reads MENU either way. */

const MENU = {
  /* ── Identity ── */
  slug: 'smash-burgers',
  name: 'Smash Burgers',

  /* ── Header ────────────────────────────────────────────────
     mode 'logo'  → centered logo on white, 64px tall
     mode 'cover' → 16:9 hero photo, clamped on mobile
     Set `logo` to your file in assets/ and switch mode to 'logo'
     if you'd rather lead with the mark than a photo.          */
  headerMode: 'cover',
  logo: null,
  cover: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80',

  /* ── Look ── */
  accent: '#22c55e',
  currency: 'ARS',
  locale: 'es-AR',

  /* ── WhatsApp ──────────────────────────────────────────────
     Country code + number, digits only. No +, no spaces, no
     dashes. This is the single most important line in the file:
     get it wrong and no order ever arrives.
     Argentina mobile example: 54 9 11 2233-4455 → '5491122334455'

     Ships as null on purpose. A placeholder number here would send
     real customers' orders to a stranger, so an unconfigured menu
     fails loudly instead. Put the real number in, then set
     demo: false below. */
  whatsapp: null,

  /* Demo mode: instead of opening WhatsApp, show the owner the exact
     message their kitchen would receive. Turn this OFF for a real
     restaurant — with it on, no order is ever actually sent. */
  demo: true,

  /* ── The branded camera this QR also opens (center nav button).
     Leave null to hide the camera button entirely. ── */
  cameraUrl: 'https://getqrcamera.com',

  /* ── How people can order ── */
  orderModes: { pickup: true, delivery: true, table: true },
  deliveryFee: 1500,

  /* ── Info tab ── */
  info: {
    about: 'Smash burgers a la plancha, pan de papa y papas cortadas a mano. Todos los días desde las 19hs.',
    address: 'Av. Corrientes 1234, Buenos Aires',
    mapsUrl: 'https://maps.google.com/?q=Av.+Corrientes+1234+Buenos+Aires',
    hours: [
      ['Lunes a Jueves', '19:00 – 00:00'],
      ['Viernes y Sábado', '19:00 – 02:00'],
      ['Domingo', '19:00 – 23:30'],
    ],
    instagram: 'https://instagram.com/',
    website: null,
  },

  /* ── The menu ──────────────────────────────────────────────
     Tags are optional: veg, sinTacc, picante, destacado.
     available: false greys the item out and blocks ordering —
     use it instead of deleting, so tomorrow you just flip it back. */
  categories: [
    {
      id: 'burgers',
      name: 'Burgers',
      icon: '🍔',
      items: [
        {
          id: 'b1', name: 'Classic Smash', price: 8900, destacado: true,
          desc: 'Doble medallón smasheado, cheddar, cebolla caramelizada y salsa de la casa en pan de papa.',
          img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
        },
        {
          id: 'b2', name: 'Bacon Smash', price: 10400,
          desc: 'Doble medallón, panceta crocante, doble cheddar y barbacoa ahumada.',
          img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80',
        },
        {
          id: 'b3', name: 'Blue Cheese', price: 10900,
          desc: 'Medallón smasheado, queso azul, rúcula y cebolla morada.',
          img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80',
        },
        {
          id: 'b4', name: 'Triple Trouble', price: 13500, picante: true,
          desc: 'Tres medallones, triple cheddar, jalapeños y mayo picante. No es para cualquiera.',
          img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80',
        },
        {
          id: 'b5', name: 'Veggie Smash', price: 8600, veg: true,
          desc: 'Medallón de garbanzo y remolacha, palta, tomate y alioli de hierbas.',
          img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&q=80',
        },
        {
          id: 'b6', name: 'Kids Smash', price: 6200,
          desc: 'Medallón simple con cheddar. Viene con papas chicas.',
          img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80',
        },
      ],
    },
    {
      id: 'papas',
      name: 'Papas y sides',
      icon: '🍟',
      items: [
        {
          id: 's1', name: 'Papas de la casa', price: 4200, veg: true,
          desc: 'Cortadas a mano, doble fritura, sal marina.',
          img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80',
        },
        {
          id: 's2', name: 'Papas Cheddar & Bacon', price: 6800, destacado: true,
          desc: 'Papas de la casa con cheddar fundido, panceta y verdeo.',
          img: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&q=80',
        },
        {
          id: 's3', name: 'Aros de cebolla', price: 4900, veg: true,
          desc: 'Rebozados en cerveza, con salsa ranch.',
          img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=80',
        },
        {
          id: 's4', name: 'Nuggets caseros (6u)', price: 5400,
          desc: 'Pollo rebozado en casa, con miel y mostaza.',
          img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80',
        },
        {
          id: 's5', name: 'Ensalada verde', price: 4600, veg: true, sinTacc: true,
          desc: 'Mix de hojas, tomates cherry, palta y vinagreta de limón.',
          img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80',
        },
        {
          id: 's6', name: 'Dip extra', price: 1200, veg: true,
          desc: 'Alioli, barbacoa, cheddar o ranch. Elegí en la nota del pedido.',
          img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&q=80',
        },
      ],
    },
    {
      id: 'bebidas',
      name: 'Bebidas',
      icon: '🥤',
      items: [
        {
          id: 'd1', name: 'Limonada de menta y jengibre', price: 3600, veg: true, sinTacc: true,
          desc: 'Jarra individual, bien fría.',
          img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&q=80',
        },
        {
          id: 'd2', name: 'Cerveza IPA pinta', price: 4800,
          desc: 'Tirada del día, de una cervecería del barrio.',
          img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&q=80',
        },
        {
          id: 'd3', name: 'Gaseosa línea Coca 500ml', price: 2400, sinTacc: true,
          desc: 'Coca, Coca Zero, Sprite o Fanta.',
          img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=80',
        },
        {
          id: 'd4', name: 'Agua con o sin gas', price: 1800, veg: true, sinTacc: true,
          desc: 'Botella 500ml.',
          img: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?w=500&q=80',
        },
        {
          id: 'd5', name: 'Milkshake de vainilla', price: 5200, veg: true,
          desc: 'Helado de verdad, crema batida arriba.',
          img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80',
        },
        {
          id: 'd6', name: 'Café espresso', price: 2200, veg: true, sinTacc: true,
          desc: 'Doble, de tostado propio.',
          img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80',
        },
      ],
    },
    {
      id: 'postres',
      name: 'Postres',
      icon: '🍰',
      items: [
        {
          id: 'p1', name: 'Brownie con helado', price: 5600, veg: true, destacado: true,
          desc: 'Brownie tibio, helado de crema americana y salsa de chocolate.',
          img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80',
        },
        {
          id: 'p2', name: 'Cheesecake de frutos rojos', price: 5200, veg: true,
          desc: 'Base de galleta, coulis casero.',
          img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80',
        },
        {
          id: 'p3', name: 'Flan con dulce de leche', price: 4400, veg: true, sinTacc: true,
          desc: 'Como el de la abuela, con crema opcional.',
          img: 'https://images.unsplash.com/photo-1624001934657-640b93a1b671?w=500&q=80',
        },
        {
          id: 'p4', name: 'Cookie XL', price: 3200, veg: true, available: false,
          desc: 'Chips de chocolate semiamargo y sal marina.',
          img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80',
        },
      ],
    },
  ],
};
