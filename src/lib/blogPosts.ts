export interface BlogPostMeta {
  slug: string;
  titleKey: 'blog1_title' | 'blog2_title' | 'blog3_title';
  excerptKey: 'blog1_excerpt' | 'blog2_excerpt' | 'blog3_excerpt';
  metaKey: 'blog1_meta' | 'blog2_meta' | 'blog3_meta';
  bodyKey: 'blog1_body' | 'blog2_body' | 'blog3_body';
  cardImages: [string, string];
  heroImage: string;
  bodyImages: string[];
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'shopify-vs-restaurants',
    titleKey: 'blog1_title',
    excerptKey: 'blog1_excerpt',
    metaKey: 'blog1_meta',
    bodyKey: 'blog1_body',
    cardImages: ['/blog1-chaos.webp', '/blog1-solution.webp'],
    heroImage: '/blog1-chaos.webp',
    bodyImages: ['/blog1-solution.webp'],
  },
  {
    slug: 'what-is-an-online-store',
    titleKey: 'blog2_title',
    excerptKey: 'blog2_excerpt',
    metaKey: 'blog2_meta',
    bodyKey: 'blog2_body',
    cardImages: ['/blog2-customer.webp', '/blog2-owner.webp'],
    heroImage: '/blog2-customer.webp',
    bodyImages: ['/blog2-owner.webp'],
  },
  {
    slug: 'ugc-receipts-organic-content-marketing',
    titleKey: 'blog3_title',
    excerptKey: 'blog3_excerpt',
    metaKey: 'blog3_meta',
    bodyKey: 'blog3_body',
    cardImages: ['/blog3-capture.webp', '/blog3-receipt.webp'],
    heroImage: '/blog3-capture.webp',
    bodyImages: ['/blog3-receipt.webp', '/blog3-social.webp'],
  },
  {
    slug: 'what-is-pos-software',
    titleKey: 'blog4_title',
    excerptKey: 'blog4_excerpt',
    metaKey: 'blog4_meta',
    bodyKey: 'blog4_body',
    cardImages: ['/blog4-pos-dashboard.webp', '/blog4-pos-rewards.webp'],
    heroImage: '/blog4-pos-dashboard.webp',
    bodyImages: ['/blog4-pos-dashboard.webp', '/blog4-pos-rewards.webp'],
  },
  {
    slug: 'what-is-restaurant-management-software',
    titleKey: 'blog5_title',
    excerptKey: 'blog5_excerpt',
    metaKey: 'blog5_meta',
    bodyKey: 'blog5_body',
    cardImages: ['/blog5-kds.webp', '/blog5-too-many-apps.webp'],
    heroImage: '/blog5-kds.webp',
    bodyImages: ['/blog5-kds.webp', '/blog5-too-many-apps.webp'],
  },
];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function inlineFormat(text: string): string {
  let out = escapeHtml(text);
  out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\*(.+?)\*/g, '<em>$1</em>');
  return out;
}

/**
 * Converts our blog markdown subset to HTML. `{{IMG}}` tokens are consumed
 * in order from `bodyImages` and rendered as full-width figures, breaking
 * up the text like a proper article rather than a wall of prose.
 */
export function blogMarkdownToHtml(md: string, bodyImages: string[] = []): string {
  const lines = md.split('\n');
  const htmlParts: string[] = [];
  let inList: 'ul' | 'ol' | null = null;
  let imgIndex = 0;
  let skippedFirstHeading = false;

  const closeList = () => {
    if (inList) {
      htmlParts.push(inList === 'ul' ? '</ul>' : '</ol>');
      inList = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line === '') {
      closeList();
      continue;
    }
    if (line === '{{IMG}}') {
      closeList();
      const src = bodyImages[imgIndex];
      imgIndex += 1;
      if (src) {
        htmlParts.push(
          `<figure class="blog-inline-figure"><img src="${src}" alt="" loading="lazy" decoding="async" /></figure>`
        );
      }
      continue;
    }
    if (line === '---') {
      closeList();
      htmlParts.push('<hr />');
      continue;
    }
    if (line.startsWith('## ')) {
      closeList();
      // The first `## Title` line duplicates the hero title, so skip it.
      if (!skippedFirstHeading) {
        skippedFirstHeading = true;
        continue;
      }
      htmlParts.push(`<h3>${inlineFormat(line.slice(3))}</h3>`);
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      if (inList !== 'ol') {
        closeList();
        htmlParts.push('<ol>');
        inList = 'ol';
      }
      htmlParts.push(`<li>${inlineFormat(line.replace(/^\d+\.\s/, ''))}</li>`);
      continue;
    }
    if (line.startsWith('- ')) {
      if (inList !== 'ul') {
        closeList();
        htmlParts.push('<ul>');
        inList = 'ul';
      }
      htmlParts.push(`<li>${inlineFormat(line.slice(2))}</li>`);
      continue;
    }

    closeList();
    htmlParts.push(`<p>${inlineFormat(line)}</p>`);
  }
  closeList();

  return htmlParts.join('\n');
}
