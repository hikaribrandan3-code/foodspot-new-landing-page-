/* ── QR Menu — app logic ───────────────────────────────────────
   Reads MENU (menu.js) → renders the menu, runs a cart, and hands
   the finished order to WhatsApp as a pre-filled message.

   It does NOT take payment. There is no checkout, no card, no
   order status. The restaurant confirms in the chat, the way it
   already does. That constraint is the product, not a shortcut.  */

/* ══════════ Setup ══════════ */

const EMBED = new URLSearchParams(location.search).get('embed') === '1';
if (EMBED) document.body.classList.add('embed');

const money = new Intl.NumberFormat(MENU.locale || 'es-AR', {
  style: 'currency',
  currency: MENU.currency || 'ARS',
  maximumFractionDigits: 0,
});
const fmt = (n) => money.format(n || 0);

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

document.title = `${MENU.name} — Menú`;

/* Accent color, plus the text color that stays readable on top of it.
   A restaurant that picks a yellow brand color still gets legible buttons. */
function isLight(hex) {
  const c = String(hex || '').replace('#', '');
  if (c.length !== 6) return false;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(c.slice(i, i + 2), 16));
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62;
}
document.documentElement.style.setProperty('--accent', MENU.accent || '#22c55e');
document.documentElement.style.setProperty('--accent-ink', isLight(MENU.accent) ? '#111827' : '#ffffff');

const TAG_LABEL = { destacado: 'Destacado', veg: 'Veggie', sinTacc: 'Sin TACC', picante: 'Picante' };
const TAG_KEYS = Object.keys(TAG_LABEL);
const tagsOf = (item) => TAG_KEYS.filter((k) => item[k]);
const isOut = (item) => item.available === false;

/* Flat lookup so the cart can resolve an id without walking categories */
const ITEMS = {};
MENU.categories.forEach((c) => c.items.forEach((i) => { ITEMS[i.id] = i; }));

/* ══════════ Header ══════════ */

(function header() {
  const useCover = MENU.headerMode === 'cover' && MENU.cover;
  $('mh').innerHTML = useCover
    ? `<div class="mh-cover">
         <img src="${esc(MENU.cover)}" alt="${esc(MENU.name)}" fetchpriority="high" width="1200" height="675">
         <div class="mh-name">${esc(MENU.name)}</div>
       </div>`
    : `<div class="mh-logo">${
         MENU.logo
           ? `<img src="${esc(MENU.logo)}" alt="${esc(MENU.name)}">`
           : `<span class="mh-wordmark">${esc(MENU.name)}</span>`
       }</div>`;
})();

/* ══════════ Menu grid ══════════ */

const liveCats = () => MENU.categories.filter((c) => c.enabled !== false && c.items && c.items.length);

(function grid() {
  const cats = liveCats();

  if (!cats.length) {
    $('rail').hidden = true;
    $('grid').innerHTML = `<div class="empty"><strong>El menú está en camino</strong>
      Estamos cargando los platos. Volvé en un rato.</div>`;
    return;
  }

  $('rail').innerHTML = cats.map((c, i) =>
    `<button class="chip${i === 0 ? ' on' : ''}" data-cat="${esc(c.id)}">${esc(c.name)}</button>`
  ).join('');

  $('grid').innerHTML = cats.map((c) => `
    <section class="cat" id="cat-${esc(c.id)}">
      <h2>${c.icon ? esc(c.icon) + ' ' : ''}${esc(c.name)}</h2>
      <div class="grid">
        ${c.items.map((it) => `
          <button class="card${isOut(it) ? ' out' : ''}" data-item="${esc(it.id)}"${isOut(it) ? ' disabled' : ''}>
            <div class="card-img">
              <img src="${esc(it.img)}" alt="${esc(it.name)}" loading="lazy" decoding="async">
              ${tagsOf(it).length ? `<div class="tags">${
                tagsOf(it).map((t) => `<span class="tag tag-${t}">${esc(TAG_LABEL[t])}</span>`).join('')
              }</div>` : ''}
            </div>
            <div class="card-body">
              <p class="card-name">${esc(it.name)}</p>
              <p class="card-price">${fmt(it.price)}</p>
            </div>
          </button>`).join('')}
      </div>
    </section>`).join('');

  /* Rail → section */
  $('rail').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.getElementById(`cat-${chip.dataset.cat}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* Section → rail. Observer beats a scroll listener here: no work on
     frames where nothing crossed a boundary. */
  const chips = [...$('rail').querySelectorAll('.chip')];
  const spy = new IntersectionObserver((entries) => {
    const hit = entries.filter((en) => en.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (!hit) return;
    const id = hit.target.id.replace('cat-', '');
    chips.forEach((ch) => ch.classList.toggle('on', ch.dataset.cat === id));
    chips.find((ch) => ch.dataset.cat === id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, { rootMargin: '-52px 0px -70% 0px' });
  cats.forEach((c) => spy.observe(document.getElementById(`cat-${c.id}`)));

  $('grid').addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) openItem(card.dataset.item);
  });
})();

/* ══════════ Info tab ══════════ */

(function info() {
  const I = MENU.info || {};
  const wa = MENU.whatsapp ? String(MENU.whatsapp).replace(/\D/g, '') : '';
  const rows = [];

  if (wa) rows.push(`<a class="info-btn" href="https://wa.me/${wa}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.6 0a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5L9.5 8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3A2.9 2.9 0 0 0 6.8 10a5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9c1.6.6 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z"/></svg>
    Escribinos por WhatsApp</a>`);

  if (I.mapsUrl) rows.push(`<a class="info-btn ghost" href="${esc(I.mapsUrl)}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
    Cómo llegar</a>`);

  if (I.instagram) rows.push(`<a class="info-btn ghost" href="${esc(I.instagram)}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>
    Instagram</a>`);

  if (I.website) rows.push(`<a class="info-btn ghost" href="${esc(I.website)}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/></svg>
    Nuestra web</a>`);

  $('tab-info').innerHTML = `
    <div class="info-wrap">
      ${I.about ? `<p class="info-about">${esc(I.about)}</p>` : ''}
      ${rows.join('')}
      ${I.address ? `<div class="info-card"><h3>Dónde estamos</h3><p class="info-addr">${esc(I.address)}</p></div>` : ''}
      ${I.hours && I.hours.length ? `<div class="info-card"><h3>Horarios</h3>
        ${I.hours.map(([d, h]) => `<div class="info-row"><span>${esc(d)}</span><span>${esc(h)}</span></div>`).join('')}
      </div>` : ''}
    </div>`;
})();

/* ══════════ Tabs + camera ══════════ */

(function tabs() {
  const cam = $('nav-cam');
  if (MENU.cameraUrl) {
    cam.href = MENU.cameraUrl;
  } else {
    cam.remove();
    $('nav').style.gridTemplateColumns = '1fr 1fr';
  }

  const show = (which) => {
    const menu = which === 'menu';
    $('tab-menu').hidden = !menu;
    $('tab-info').hidden = menu;
    $('nav-menu').classList.toggle('active', menu);
    $('nav-info').classList.toggle('active', !menu);
    /* The cart only makes sense over the menu */
    syncCart();
    window.scrollTo(0, 0);
  };

  $('nav-menu').addEventListener('click', () => show('menu'));
  $('nav-info').addEventListener('click', () => show('info'));
})();

/* ══════════ Cart ══════════ */

/* Survives a reload at the table (someone locks their phone mid-order),
   but not a new session — a stale cart from last week helps nobody. */
const CART_KEY = `qrmenu_cart_${MENU.slug}`;
let cart = [];
try { cart = JSON.parse(sessionStorage.getItem(CART_KEY)) || []; } catch { cart = []; }

const cartCount = () => cart.reduce((n, l) => n + l.qty, 0);
const cartTotal = () => cart.reduce((n, l) => n + (ITEMS[l.id]?.price || 0) * l.qty, 0);

function saveCart() {
  try { sessionStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch { /* private mode */ }
}

function addToCart(id, qty) {
  const line = cart.find((l) => l.id === id);
  if (line) line.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  syncCart();
}

function bumpCart(id, delta) {
  const line = cart.find((l) => l.id === id);
  if (!line) return;
  line.qty += delta;
  if (line.qty < 1) cart = cart.filter((l) => l.id !== id);
  saveCart();
  syncCart();
  if (!cart.length) closeSheets();
  else if (!$('order-sheet').hidden) renderOrder();
}

/* One place decides whether the strip is up and how tall it is, because
   the body's bottom padding has to match or the last row hides under it. */
function syncCart() {
  const el = $('cart');
  const visible = cart.length > 0 && $('tab-menu').hidden === false;

  if (!visible) {
    el.hidden = true;
    document.body.style.setProperty('--cart-h', '0px');
    return;
  }

  $('cart-lines').innerHTML = cart.map((l) => {
    const it = ITEMS[l.id];
    return `<div class="cart-line">
      <span class="cart-line-l">
        <button class="step" data-dec="${esc(l.id)}" aria-label="Quitar uno de ${esc(it.name)}">−</button>
        <span class="cart-line-name">${esc(it.name)}</span>
        <span class="cart-line-qty">×${l.qty}</span>
      </span>
      <span class="cart-line-amt">${fmt(it.price * l.qty)}</span>
    </div>`;
  }).join('');
  $('cart-total').textContent = fmt(cartTotal());
  el.hidden = false;
  document.body.style.setProperty('--cart-h', `${el.offsetHeight}px`);
}

$('cart').addEventListener('click', (e) => {
  const dec = e.target.closest('[data-dec]');
  if (dec) bumpCart(dec.dataset.dec, -1);
});
$('cart-go').addEventListener('click', openOrder);

/* ══════════ Sheets ══════════ */

function openSheet(el) {
  $('scrim').hidden = false;
  el.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeSheets() {
  ['item-sheet', 'order-sheet', 'sent-sheet'].forEach((id) => { $(id).hidden = true; });
  $('scrim').hidden = true;
  document.body.style.overflow = '';
}

$('scrim').addEventListener('click', closeSheets);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSheets(); });

/* ── Item sheet ── */
function openItem(id) {
  const it = ITEMS[id];
  if (!it || isOut(it)) return;
  let qty = 1;

  $('item-sheet').innerHTML = `
    <div class="sheet-scroll">
      <div class="is-img">
        <img src="${esc(it.img)}" alt="${esc(it.name)}">
        <button class="is-close" id="is-x" aria-label="Cerrar">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>
        </button>
      </div>
      <div class="is-body">
        <div class="is-head">
          <h2 class="is-name">${esc(it.name)}</h2>
          <span class="is-price">${fmt(it.price)}</span>
        </div>
        ${it.desc ? `<p class="is-desc">${esc(it.desc)}</p>` : ''}
        ${tagsOf(it).length ? `<div class="is-tags">${
          tagsOf(it).map((t) => `<span class="is-tag">${esc(TAG_LABEL[t])}</span>`).join('')
        }</div>` : ''}
      </div>
    </div>
    <div class="sheet-foot">
      <div class="qty">
        <button id="q-minus" aria-label="Menos">−</button>
        <span id="q-n">1</span>
        <button id="q-plus" aria-label="Más">+</button>
      </div>
      <button class="btn btn-primary" id="is-add">Agregar · <span id="q-sum">${fmt(it.price)}</span></button>
    </div>`;

  const paint = () => {
    $('q-n').textContent = qty;
    $('q-sum').textContent = fmt(it.price * qty);
  };
  $('q-minus').addEventListener('click', () => { qty = Math.max(1, qty - 1); paint(); });
  $('q-plus').addEventListener('click', () => { qty += 1; paint(); });
  $('is-x').addEventListener('click', closeSheets);
  $('is-add').addEventListener('click', () => { addToCart(id, qty); closeSheets(); });

  openSheet($('item-sheet'));
}

/* ── Order sheet ── */
const MODES = [
  ['pickup', 'Retiro'],
  ['delivery', 'Delivery'],
  ['table', 'En mesa'],
];
const enabledModes = MODES.filter(([k]) => (MENU.orderModes || {})[k]);
let mode = enabledModes.length ? enabledModes[0][0] : 'pickup';

/* Delegated once, on the container that survives every re-render. Binding
   this inside renderOrder() would stack a fresh listener each time the mode
   toggles, and then one tap on "−" would remove two items. */
$('order-sheet').addEventListener('click', (e) => {
  const m = e.target.closest('[data-mode]');
  if (m) { mode = m.dataset.mode; renderOrder(); return; }
  const dec = e.target.closest('[data-dec]');
  if (dec) { bumpCart(dec.dataset.dec, -1); return; }
  const inc = e.target.closest('[data-inc]');
  if (inc) { bumpCart(inc.dataset.inc, +1); }
});

function openOrder() {
  if (!cart.length) return;
  renderOrder();
  openSheet($('order-sheet'));
}

function renderOrder() {
  const fee = mode === 'delivery' ? (MENU.deliveryFee || 0) : 0;
  const sub = cartTotal();
  /* Keep whatever they'd already typed when the mode toggle re-renders */
  const keep = (id) => $(id)?.value || '';
  const prev = { name: keep('f-name'), phone: keep('f-phone'), addr: keep('f-addr'), table: keep('f-table'), note: keep('f-note') };

  $('order-sheet').innerHTML = `
    <div class="os-head">
      <h2>Tu pedido</h2>
      <button class="step" id="os-x" aria-label="Cerrar">✕</button>
    </div>
    <div class="sheet-scroll">
      <div class="os-body">
        <div class="os-lines">
          ${cart.map((l) => {
            const it = ITEMS[l.id];
            return `<div class="cart-line">
              <span class="cart-line-l">
                <button class="step" data-dec="${esc(l.id)}" aria-label="Quitar uno">−</button>
                <span class="cart-line-name">${esc(it.name)}</span>
                <span class="cart-line-qty">×${l.qty}</span>
                <button class="step" data-inc="${esc(l.id)}" aria-label="Agregar uno">+</button>
              </span>
              <span class="cart-line-amt">${fmt(it.price * l.qty)}</span>
            </div>`;
          }).join('')}
        </div>
        ${fee ? `<div class="os-fee"><span>Envío</span><span>${fmt(fee)}</span></div>` : ''}
        <div class="os-total"><span>Total</span><span>${fmt(sub + fee)}</span></div>

        ${enabledModes.length > 1 ? `
          <span class="label">¿Cómo lo querés?</span>
          <div class="modes">
            ${enabledModes.map(([k, lbl]) =>
              `<button class="mode${mode === k ? ' on' : ''}" data-mode="${k}">${lbl}</button>`).join('')}
          </div>` : ''}

        <span class="label">Tus datos</span>
        <input class="field" id="f-name" placeholder="Tu nombre" autocomplete="name" value="${esc(prev.name)}">
        <input class="field" id="f-phone" type="tel" inputmode="tel" placeholder="Tu teléfono${mode === 'delivery' ? '' : ' (opcional)'}" autocomplete="tel" value="${esc(prev.phone)}">
        ${mode === 'delivery'
          ? `<input class="field" id="f-addr" placeholder="Dirección — calle, número, piso" autocomplete="street-address" value="${esc(prev.addr)}">`
          : ''}
        ${mode === 'table'
          ? `<input class="field" id="f-table" inputmode="numeric" placeholder="Número de mesa" value="${esc(prev.table)}">`
          : ''}
        <textarea class="field" id="f-note" placeholder="Aclaraciones (opcional) — sin cebolla, salsa aparte…">${esc(prev.note)}</textarea>

        <p class="err" id="os-err" hidden></p>
      </div>
    </div>
    <div class="sheet-foot">
      <button class="btn btn-wa" id="os-send">
        <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.6 0a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5L9.5 8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3A2.9 2.9 0 0 0 6.8 10a5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9c1.6.6 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z"/></svg>
        Enviar pedido por WhatsApp
      </button>
      <p class="fineprint">Tu pedido se envía como mensaje.<br>El local te confirma por WhatsApp.</p>
    </div>`;

  $('os-x').addEventListener('click', closeSheets);

  /* No WhatsApp number configured = no working order button. Say so
     plainly instead of shipping people into a dead wa.me/ link.
     Demo menus are exempt: they never send anything anyway. */
  const wa = String(MENU.whatsapp || '').replace(/\D/g, '');
  if (!wa && !MENU.demo) {
    const btn = $('os-send');
    btn.disabled = true;
    btn.textContent = 'El local todavía no configuró WhatsApp';
  } else {
    $('os-send').addEventListener('click', send);
  }
}

/* ══════════ The handoff ══════════ */

const orderNo = () => Math.random().toString(36).slice(2, 6).toUpperCase();

function buildMessage(no) {
  const fee = mode === 'delivery' ? (MENU.deliveryFee || 0) : 0;
  const modeLabel = (MODES.find(([k]) => k === mode) || [, 'Retiro'])[1];
  const L = [];

  L.push(`NUEVO PEDIDO — ${MENU.name}`);
  L.push(`Pedido #${no}`);
  L.push('');
  cart.forEach((l) => {
    const it = ITEMS[l.id];
    L.push(`${l.qty}x ${it.name} — ${fmt(it.price * l.qty)}`);
  });
  L.push('');
  if (fee) L.push(`Envío: ${fmt(fee)}`);
  L.push(`Total: ${fmt(cartTotal() + fee)}`);
  L.push('');
  L.push(`Modo: ${modeLabel}`);
  L.push(`Nombre: ${$('f-name').value.trim()}`);

  const phone = $('f-phone')?.value.trim();
  if (phone) L.push(`Teléfono: ${phone}`);
  if (mode === 'delivery') L.push(`Dirección: ${$('f-addr').value.trim()}`);
  if (mode === 'table') L.push(`Mesa: ${$('f-table').value.trim()}`);

  const note = $('f-note')?.value.trim();
  if (note) L.push(`Nota: ${note}`);

  L.push('');
  L.push('— enviado desde el menú QR');
  return L.join('\n');
}

function send() {
  const err = $('os-err');
  const fail = (msg) => { err.textContent = msg; err.hidden = false; };
  err.hidden = true;

  const name = $('f-name').value.trim();
  if (name.length < 2) return fail('Necesitamos tu nombre para el pedido.');
  if (mode === 'delivery') {
    if ($('f-phone').value.replace(/\D/g, '').length < 8) return fail('Para delivery necesitamos un teléfono válido.');
    if ($('f-addr').value.trim().length < 5) return fail('Falta la dirección de entrega.');
  }
  if (mode === 'table' && !$('f-table').value.trim()) return fail('¿En qué mesa estás?');

  const no = orderNo();
  const message = buildMessage(no);

  if (MENU.demo) {
    /* Demo mode never messages anyone — it shows the restaurant owner the
       exact text they'd receive, which is the thing they actually want to
       see before buying. Without this, every demo click would fire a real
       WhatsApp message at whatever placeholder number is in the config. */
    showDemo(no, message);
  } else {
    const wa = String(MENU.whatsapp).replace(/\D/g, '');
    const url = `https://wa.me/${wa}?text=${encodeURIComponent(message)}`;

    /* Open WhatsApp FIRST and synchronously — the click gesture is still
       live on this line. Anything awaited before it (a fetch, an insert)
       costs the popup on iOS Safari and the order silently dies. */
    const win = window.open(url, '_blank');
    showSent(no, url, !win);
  }

  cart = [];
  saveCart();
  syncCart();
}

function sentSheet(inner) {
  $('order-sheet').hidden = true;
  $('sent-sheet').innerHTML = inner;
  $('sent-back').addEventListener('click', closeSheets);
  openSheet($('sent-sheet'));
}

function showSent(no, url, blocked) {
  sentSheet(`
    <div class="sheet-scroll">
      <div class="sent">
        <div class="sent-mark">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <h2>${blocked ? 'Tocá para abrir WhatsApp' : 'Abrimos WhatsApp con tu pedido'}</h2>
        <p>${blocked
          ? 'Tu navegador bloqueó la ventana. Tocá el botón y el mensaje ya va escrito.'
          : 'Solo falta que toques enviar en el chat. El local te confirma por ahí.'}</p>
        <span class="sent-num">Pedido #${esc(no)}</span>
      </div>
    </div>
    <div class="sheet-foot">
      <div class="stack">
        <a class="btn btn-wa" href="${esc(url)}" target="_blank" rel="noopener">Abrir WhatsApp</a>
        <button class="btn btn-ghost" id="sent-back">Volver al menú</button>
      </div>
    </div>`);
}

function showDemo(no, message) {
  sentSheet(`
    <div class="sheet-scroll">
      <div class="sent">
        <div class="sent-mark">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <h2>Así te llega el pedido</h2>
        <p>Esto es una demostración, así que no enviamos nada. En tu local, este mensaje entra en tu WhatsApp tal cual:</p>
      </div>
      <pre class="wa-preview">${esc(message)}</pre>
    </div>
    <div class="sheet-foot">
      <div class="stack">
        <a class="btn btn-primary" href="/#precio">Quiero esto en mi local — $9.99/mes</a>
        <button class="btn btn-ghost" id="sent-back">Volver al menú</button>
      </div>
    </div>`);
}

/* ══════════ Boot ══════════ */
syncCart();
addEventListener('resize', syncCart);
