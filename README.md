# FoodSpot Mobile — Storefront

Static storefront for foodspotmobile.com. Funnels traffic to **getqrcamera.com**.

## What's here

- **Hero** — "Reduce Comisiones. Recibe Pedidos Directos." Two-zone layout:
  copy left, Smash Burgers QR tent card top-right (in normal flow, not an
  absolute overlay), benefits strip pinned to the bottom of the photo.
- **About** — explains that FoodSpot Mobile is the storefront and GetQRCamera
  is the engine, with the 3-step scan → order → share flow.
- **Blog** — "Latest Food Tech Reviews", 4 articles.
- **Camera mode** — live QR camera locked to the Smash Burgers brand.
- **Mobile drawer** (hamburger) + **bottom nav**; on desktop these are replaced
  by a top nav and a footer.

## Layout

Mobile-first, one breakpoint that matters:

| Width | Layout |
| --- | --- |
| `< 640px` | phone: single column, bottom nav + hamburger drawer |
| `≥ 640px` | tablet: 2-up blog grid, 3-up about steps |
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
