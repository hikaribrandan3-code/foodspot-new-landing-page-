# FoodSpot Mobile — landing page

Static site for **foodspotmobile.com**. Sells one thing: a **QR menu for
restaurants at $9.99/mes**, where the orders arrive as a WhatsApp message.

## What's here

- **Hero** — "Tu carta en un QR. Los pedidos van a tu WhatsApp." Copy left, the
  QR tent card top-right (a real link to the demo), price badge, two CTAs,
  benefits strip pinned to the bottom of the photo.
- **Cómo funciona** — the three steps: escanea → arma el pedido → llega a WhatsApp.
- **La cuenta** — the commission math. A delivery app takes ~25% forever; this
  is $9.99 flat. This section is the sales argument, not a feature list.
- **Precio** — one card, $9.99/mes, ten lines of what's included, and a CTA.
- **Preguntas** — six FAQs, mirrored into `FAQPage` JSON-LD for search.
- **Blog** — "Latest Food Tech Reviews", 4 articles.
- **`/demo/`** — the actual menu, running. See below.
- **Mobile drawer** (hamburger) + **bottom nav**; on desktop these are replaced
  by a top nav and a footer.

## `/demo/` — the live menu

`demo/` is a copy of the [qrmenu](https://github.com/hikaribrandan3-code/qrmenu)
app, configured as a fictional restaurant (Smash Burgers). Every "ver la demo"
link on the page points there, so a prospect can tap through the real thing
instead of looking at screenshots.

It runs with **`demo: true`** in `demo/menu.js`. In that mode the order button
does not open WhatsApp — it shows the owner the exact message their kitchen
would receive. That is both a better pitch and the reason the demo can't fire
messages at a real phone number.

When the menu app changes, re-copy it:

```bash
cp ../qrmenu/{index.html,styles.css,app.js} demo/
```

`demo/menu.js` is intentionally *not* overwritten — it holds the demo
restaurant and its `demo: true` flag.

## One thing still to set

The **Precio** CTA points at `getqrcamera.com/contact` as a placeholder. Swap
it for the real sales WhatsApp — there's a `TODO` comment on the line in
`index.html`:

```html
<a class="cta price-cta" href="https://wa.me/<codigo+numero>?text=Hola!%20Quiero%20el%20men%C3%BA%20QR">
```

## Layout

Mobile-first, one breakpoint that matters:

| Width | Layout |
| --- | --- |
| `< 640px` | phone: single column, bottom nav + hamburger drawer |
| `≥ 640px` | tablet: 2-up blog grid, 3-up steps, 2-up price list and math columns |
| `≥ 980px` | desktop: top nav, two-column hero, 4-up blog grid, footer |

## Blog: edit + rebuild

Post content lives in **`posts.js`** — the single source of truth, consumed by
both `app.js` (the in-page overlay) and the prerenderer.

Each post is also a real, crawlable page at `/blog/<slug>` with its own title,
description, canonical, OG tags and `BlogPosting` JSON-LD. The cards on the
homepage are real anchors to those URLs; clicks are intercepted so they open in
the overlay via the History API, and Back returns home.

After editing `posts.js`, regenerate the static pages + sitemap:

```bash
node tools/build-blog.mjs
```

This writes `blog/*.html`, `sitemap.xml` and `robots.txt`. Vercel runs it as the
build command, so a deploy regenerates them automatically.

Bold-only lines in a post body are promoted to `<h2>` (see `mdToHtml`), which is
what gives each article its heading outline.

## Deploy

No dependencies. Vercel serves the folder statically with `cleanUrls: true`
(so `/blog/<slug>` resolves to `blog/<slug>.html`) and runs the blog build.

## Local dev

Any static server works, but `/blog/<slug>` needs clean-URL rewriting to
resolve. With Python:

```bash
python3 -m http.server 4321
```

then visit `/blog/<slug>.html` directly, or use a server that emulates
`cleanUrls`.
