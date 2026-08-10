/* ── Prerender the blog ────────────────────────────────────────
   Reads posts.js (single source of truth) and writes one static,
   crawlable HTML page per post into /blog, plus sitemap.xml.

   Before this, all four articles lived only in a JS array and
   rendered into an overlay div — one URL, nothing for crawlers
   to index. Now each post is a real page with its own title,
   description, canonical, OG tags and Article JSON-LD.

   Run after editing posts.js:   node tools/build-blog.mjs
   ------------------------------------------------------------ */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://foodspotmobile.com';

/* posts.js declares `const POSTS = [...]` for the browser; pull the
   literal out rather than duplicating the content in a second file. */
const raw = fs.readFileSync(path.join(ROOT, 'posts.js'), 'utf8');
const literal = raw.slice(raw.indexOf('const POSTS = ') + 'const POSTS = '.length).replace(/;\s*$/, '');
const POSTS = JSON.parse(literal);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const inline = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');

function mdToHtml(md, imgs, alts) {
  const out = [];
  let imgIdx = 0, firstHeading = true;
  for (const rawLine of md.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line === '{{IMG}}') {
      if (imgIdx < imgs.length) {
        out.push(`<img src="../${imgs[imgIdx]}" alt="${esc(alts[imgIdx] || '')}" loading="lazy">`);
        imgIdx++;
      }
      continue;
    }
    if (line.startsWith('## ')) {
      if (firstHeading) { firstHeading = false; continue; } // <h1> is rendered separately
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
      continue;
    }
    if (line === '---') { out.push('<hr>'); continue; }
    /* The source uses a bold-only line as a section heading. Promote those
       to real <h2> so each article has a heading outline instead of 30+
       flat <p>s. The length guard keeps genuinely bold *sentences* as prose. */
    const bold = line.match(/^\*\*(.+)\*\*$/);
    if (bold && bold[1].length <= 90) {
      out.push(`<h2>${inline(bold[1])}</h2>`);
      continue;
    }
    out.push(`<p>${inline(line)}</p>`);
  }
  return out.join('\n      ');
}

/* plain-text lead paragraph, for meta description when the excerpt is short */
function metaDesc(p) {
  return p.excerpt.length > 80 ? p.excerpt : `${p.excerpt} Guía de FoodSpot Mobile para dueños de restaurantes.`;
}

function page(p, i) {
  const url = `${ORIGIN}/blog/${p.slug}`;
  const img = `${ORIGIN}/${p.card}`;
  const related = POSTS.filter((_, j) => j !== i).slice(0, 3);

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

<title>${esc(p.title)} — FoodSpot Mobile</title>
<meta name="description" content="${esc(metaDesc(p))}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index,follow,max-image-preview:large">

<meta name="theme-color" content="#0b0f0d">
<link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">

<meta property="og:type" content="article">
<meta property="og:site_name" content="FoodSpot Mobile">
<meta property="og:locale" content="es_AR">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.excerpt)}">
<meta property="og:image" content="${img}">
<meta property="article:published_time" content="${p.iso}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.title)}">
<meta name="twitter:description" content="${esc(p.excerpt)}">
<meta name="twitter:image" content="${img}">

<link rel="stylesheet" href="../styles.css">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": ${JSON.stringify(p.title)},
      "description": ${JSON.stringify(p.excerpt)},
      "image": ${JSON.stringify(img)},
      "datePublished": "${p.iso}",
      "dateModified": "${p.iso}",
      "inLanguage": "es",
      "mainEntityOfPage": { "@type": "WebPage", "@id": ${JSON.stringify(url)} },
      "author": { "@type": "Organization", "name": "FoodSpot Mobile", "url": "${ORIGIN}/" },
      "publisher": {
        "@type": "Organization",
        "name": "FoodSpot Mobile",
        "logo": { "@type": "ImageObject", "url": "${ORIGIN}/assets/favicon.svg" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "${ORIGIN}/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "${ORIGIN}/#blog" },
        { "@type": "ListItem", "position": 3, "name": ${JSON.stringify(p.title)}, "item": ${JSON.stringify(url)} }
      ]
    }
  ]
}
</script>
</head>
<body class="article-page">

<header class="site-header">
  <a class="brand" href="/">
    <span class="brand-pin" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z" fill="rgba(34,197,94,.15)"/>
        <path d="M9.5 7v6M9.5 7c0 1 .7 1.5 1.2 1.5M9.5 7c0 1-.7 1.5-1.2 1.5M14.5 7c-.8 1-1.2 2.2-1.2 3.5h1.2V13"/>
      </svg>
    </span>
    <span class="brand-text">FoodSpot<br><em>Mobile</em></span>
  </a>
  <nav class="desktop-nav" aria-label="Principal">
    <a href="/">Home</a>
    <a href="/#blog">Blog</a>
    <a href="/#about">About</a>
    <a class="cta cta-nav" href="https://getqrcamera.com" target="_blank" rel="noopener">Probalo gratis</a>
  </nav>
</header>

<main>
  <div class="article-sheet">
    <nav class="crumbs" aria-label="Ruta de navegación">
      <a href="/">Home</a><span aria-hidden="true">›</span><a href="/#blog">Blog</a>
    </nav>

    <article>
      <h1>${esc(p.title)}</h1>
      <div class="article-date"><time datetime="${p.iso}">${esc(p.date)}</time></div>
      <img src="../${p.card}" alt="${esc(p.cardAlt)}" width="1024" height="1024">
      ${mdToHtml(p.body, p.bodyImgs, p.bodyAlts)}
    </article>

    <a class="cta" href="https://getqrcamera.com" target="_blank" rel="noopener">
      Probá GetQRCamera gratis
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </a>

    <section class="related">
      <h2>Seguí leyendo</h2>
      <div class="related-list">
        ${related.map((r) => `<a class="related-card" href="/blog/${r.slug}">
          <img src="../${r.card}" alt="${esc(r.cardAlt)}" loading="lazy" width="200" height="200">
          <span>
            <small>${esc(r.date)}</small>
            <strong>${esc(r.title)}</strong>
          </span>
        </a>`).join('\n        ')}
      </div>
    </section>
  </div>
</main>

<footer class="site-footer">
  <div class="section-wrap footer-grid">
    <div>
      <span class="brand-text footer-brand">FoodSpot<br><em>Mobile</em></span>
      <p class="footer-tag">Una cámara QR para tu restaurante.<br>Sin apps. Sin comisión.</p>
    </div>
    <nav aria-label="Pie de página">
      <h4>Navegación</h4>
      <a href="/">Home</a>
      <a href="/#blog">Blog</a>
      <a href="/#about">About</a>
    </nav>
    <nav aria-label="Producto">
      <h4>Producto</h4>
      <a href="https://getqrcamera.com" target="_blank" rel="noopener">GetQRCamera</a>
      <a href="https://getqrcamera.com" target="_blank" rel="noopener">Probalo gratis</a>
    </nav>
  </div>
  <p class="footer-legal">© ${new Date().getFullYear()} FoodSpot Mobile · Funciona con GetQRCamera</p>
</footer>

</body>
</html>
`;
}

/* ── write pages ── */
const outDir = path.join(ROOT, 'blog');
fs.mkdirSync(outDir, { recursive: true });
POSTS.forEach((p, i) => {
  fs.writeFileSync(path.join(outDir, `${p.slug}.html`), page(p, i));
  console.log('  blog/' + p.slug + '.html');
});

/* ── sitemap ── */
const today = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: `${ORIGIN}/`, lastmod: today, priority: '1.0', changefreq: 'weekly' },
  ...POSTS.map((p) => ({ loc: `${ORIGIN}/blog/${p.slug}`, lastmod: p.iso, priority: '0.8', changefreq: 'monthly' })),
];
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`);
console.log('  sitemap.xml (' + urls.length + ' urls)');

/* ── robots ── */
fs.writeFileSync(path.join(ROOT, 'robots.txt'),
`User-agent: *
Allow: /

Sitemap: ${ORIGIN}/sitemap.xml
`);
console.log('  robots.txt');
console.log('done —', POSTS.length, 'posts prerendered');
