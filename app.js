/* ── FoodSpot Mobile storefront logic ──────────────────────────
   Drawer + blog cards + article overlay + Smash Burgers camera.

   Post content lives in posts.js (loaded first). Each post also
   exists as a prerendered page at /blog/<slug> — the cards are
   real anchors to those URLs, so crawlers get static HTML while
   clicks stay in-page via the overlay + History API.

   Camera mode is a trimmed port of the Qragency CameraLayer:
   live getUserMedia → canvas capture → branded export. Locked
   to the Smash Burgers brand pill — no tenant switching.      */

/* ── Mobile drawer ── */
(function drawer() {
  const btn = document.getElementById('menu-btn');
  const panel = document.getElementById('drawer');
  const scrim = document.getElementById('drawer-scrim');
  const closeBtn = document.getElementById('drawer-close');
  let lastFocus = null;

  function open() {
    lastFocus = document.activeElement;
    panel.hidden = false;
    scrim.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function close() {
    panel.hidden = true;
    scrim.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  btn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  scrim.addEventListener('click', close);
  // in-page anchors should navigate *and* dismiss the drawer
  panel.querySelectorAll('[data-drawer-link]').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) close();
  });
  // desktop breakpoint takes over: never leave a stuck drawer behind
  matchMedia('(min-width:980px)').addEventListener('change', (e) => {
    if (e.matches && !panel.hidden) close();
  });
})();

/* ── Blog cards ── */
(function renderBlog() {
  const wrap = document.getElementById('blog-cards');
  wrap.innerHTML = POSTS.map((p, i) => `
    <a class="blog-card" href="/blog/${p.slug}" data-post="${i}">
      <img src="${p.card}" alt="${p.cardAlt}" loading="lazy" width="400" height="400">
      <div class="blog-card-body">
        <span class="blog-card-date">${p.date}</span>
        <span class="blog-card-title">${p.title}</span>
        <span class="blog-card-excerpt">${p.excerpt}</span>
        <span class="blog-card-more">Read more
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </div>
    </a>`).join('');

  wrap.addEventListener('click', (e) => {
    const card = e.target.closest('.blog-card');
    if (!card) return;
    // let modified clicks (new tab, download) hit the real URL
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    openArticle(+card.dataset.post, true);
  });
})();

/* ── Article overlay ── */
const articleOverlay = document.getElementById('article-overlay');
const articleBody = document.getElementById('article-body');

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function inline(t) {
  return esc(t).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
}
function mdToHtml(md, imgs, alts) {
  const out = []; let imgIdx = 0; let firstHeading = true;
  for (const raw of md.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (line === '{{IMG}}') {
      if (imgIdx < imgs.length) {
        out.push(`<img src="${imgs[imgIdx]}" alt="${esc((alts && alts[imgIdx]) || '')}" loading="lazy">`);
        imgIdx++;
      }
      continue;
    }
    if (line.startsWith('## ')) {
      if (firstHeading) { firstHeading = false; continue; } // title shown separately
      out.push(`<h2>${inline(line.slice(3))}</h2>`); continue;
    }
    if (line === '---') { out.push('<hr>'); continue; }
    /* bold-only lines act as section headings in the source — mirror
       tools/build-blog.mjs so overlay and static page render alike */
    const bold = line.match(/^\*\*(.+)\*\*$/);
    if (bold && bold[1].length <= 90) { out.push(`<h2>${inline(bold[1])}</h2>`); continue; }
    out.push(`<p>${inline(line)}</p>`);
  }
  return out.join('');
}

function openArticle(i, push) {
  const p = POSTS[i];
  articleBody.innerHTML =
    `<h1>${esc(p.title)}</h1><div class="article-date">${p.date}</div>` +
    `<img src="${p.card}" alt="${esc(p.cardAlt)}">` + mdToHtml(p.body, p.bodyImgs, p.bodyAlts);
  articleOverlay.hidden = false;
  articleOverlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  document.title = `${p.title} — FoodSpot Mobile`;
  if (push) history.pushState({ post: i }, '', `/blog/${p.slug}`);
}

const HOME_TITLE = document.title;
function closeArticle(pop) {
  articleOverlay.hidden = true;
  document.body.style.overflow = '';
  document.title = HOME_TITLE;
  if (!pop) history.pushState({}, '', '/');
}

document.getElementById('article-back').addEventListener('click', () => closeArticle(false));
window.addEventListener('popstate', (e) => {
  if (e.state && typeof e.state.post === 'number') openArticle(e.state.post, false);
  else closeArticle(true);
});

/* ── Camera mode — locked to Smash Burgers ── */
const BRAND = 'Smash Burgers'; // hard lock: no tenant config, no switching

const camOverlay = document.getElementById('camera-overlay');
const editorOverlay = document.getElementById('editor-overlay');
const video = document.getElementById('cam-video');
const camError = document.getElementById('cam-error');
const editorPhoto = document.getElementById('editor-photo');
let stream = null;
let photoUrl = null;   // ObjectURL lifecycle managed to prevent RAM leaks
let photoBlob = null;

/* Port of Qragency's useCameraThemeColor: force black while camera is mounted */
const themeMeta = document.querySelector('meta[name="theme-color"]');
const prevTheme = themeMeta.getAttribute('content');

async function startCamera() {
  camError.hidden = true;
  try {
    if (stream) stream.getTracks().forEach(t => t.stop());
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }, audio: false
    });
    video.srcObject = stream;
    await video.play();
  } catch (err) {
    camError.hidden = false;
  }
}
function stopCamera() {
  if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
  video.srcObject = null;
}

function openCamera() {
  camOverlay.hidden = false;
  themeMeta.setAttribute('content', '#000000');
  document.body.style.overflow = 'hidden';
  startCamera();
}
function closeCamera() {
  stopCamera();
  camOverlay.hidden = true;
  themeMeta.setAttribute('content', prevTheme);
  document.body.style.overflow = '';
}

document.getElementById('open-camera').addEventListener('click', openCamera);
document.getElementById('qr-try').addEventListener('click', openCamera);
document.getElementById('cam-close').addEventListener('click', closeCamera);
document.getElementById('cam-retry').addEventListener('click', startCamera);

/* Capture: draw live video frame straight to canvas at track resolution
   (no ImageCapture.grabFrame — freezes on iOS Safari). */
function capture() {
  if (!stream || !video.videoWidth) return;
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0);

  /* Bake the Smash Burgers brand bar into the exported photo */
  const barH = Math.round(canvas.height * 0.09);
  const grad = ctx.createLinearGradient(0, canvas.height - barH * 2, 0, canvas.height);
  grad.addColorStop(0, 'rgba(0,0,0,0)');
  grad.addColorStop(1, 'rgba(0,0,0,.72)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, canvas.height - barH * 2, canvas.width, barH * 2);
  ctx.fillStyle = '#fff';
  ctx.font = `800 ${Math.round(barH * 0.42)}px -apple-system, Segoe UI, Roboto, sans-serif`;
  ctx.textBaseline = 'middle';
  const label = BRAND;
  const pillPad = Math.round(barH * 0.3);
  const textW = ctx.measureText(label).width;
  const pillW = textW + pillPad * 2 + Math.round(barH * 0.36);
  const pillH = Math.round(barH * 0.72);
  const px = Math.round(canvas.width * 0.05), py = canvas.height - barH;
  ctx.fillStyle = 'rgba(255,193,7,.60)'; // burger pin style
  ctx.beginPath();
  ctx.roundRect(px, py + (barH - pillH) / 2, pillW, pillH, pillH / 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(px + pillPad + Math.round(barH * 0.09), py + barH / 2, Math.round(barH * 0.07), 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText(label, px + pillPad + Math.round(barH * 0.24), py + barH / 2 + 1);

  canvas.toBlob((blob) => {
    if (!blob) return;
    if (photoUrl) URL.revokeObjectURL(photoUrl);
    photoBlob = blob;
    photoUrl = URL.createObjectURL(blob);
    editorPhoto.src = photoUrl;
    stopCamera();
    camOverlay.hidden = true;
    editorOverlay.hidden = false;
  }, 'image/jpeg', 0.92);
}
document.getElementById('shutter').addEventListener('click', capture);

/* Editor actions */
document.getElementById('editor-retake').addEventListener('click', () => {
  editorOverlay.hidden = true;
  camOverlay.hidden = false;
  startCamera();
});
document.getElementById('editor-download').addEventListener('click', () => {
  if (!photoBlob) return;
  const a = document.createElement('a');
  a.href = photoUrl;
  a.download = 'smash-burgers.jpg';
  a.click();
});
document.getElementById('editor-share').addEventListener('click', async () => {
  if (!photoBlob) return;
  const file = new File([photoBlob], 'smash-burgers.jpg', { type: 'image/jpeg' });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], title: BRAND }); } catch (_) {}
  } else {
    document.getElementById('editor-download').click(); // fallback: save locally
  }
});

/* ── Misc ── */
document.getElementById('year').textContent = new Date().getFullYear();
