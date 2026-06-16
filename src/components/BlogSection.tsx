import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../lib/translations';

function markdownToHtml(md: string): string {
  const escapeHtml = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const lines = md.split('\n');
  const htmlParts: string[] = [];
  let inList: 'ul' | 'ol' | null = null;

  const closeList = () => {
    if (inList) {
      htmlParts.push(inList === 'ul' ? '</ul>' : '</ol>');
      inList = null;
    }
  };

  const inlineFormat = (text: string) => {
    let out = escapeHtml(text);
    out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*(.+?)\*/g, '<em>$1</em>');
    return out;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line === '') {
      closeList();
      continue;
    }
    if (line === '---') {
      closeList();
      htmlParts.push('<hr />');
      continue;
    }
    if (line.startsWith('## ')) {
      closeList();
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

const KITCHEN_IMAGES = [
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
  'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80',
  'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=800&q=80',
  'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80',
];

interface BlogPost {
  titleKey: 'blog1_title' | 'blog2_title' | 'blog3_title';
  excerptKey: 'blog1_excerpt' | 'blog2_excerpt' | 'blog3_excerpt';
  bodyKey: 'blog1_body' | 'blog2_body' | 'blog3_body';
  images: [string, string];
}

const POSTS: BlogPost[] = [
  {
    titleKey: 'blog1_title',
    excerptKey: 'blog1_excerpt',
    bodyKey: 'blog1_body',
    images: [KITCHEN_IMAGES[0], KITCHEN_IMAGES[1]],
  },
  {
    titleKey: 'blog2_title',
    excerptKey: 'blog2_excerpt',
    bodyKey: 'blog2_body',
    images: [KITCHEN_IMAGES[2], KITCHEN_IMAGES[3]],
  },
  {
    titleKey: 'blog3_title',
    excerptKey: 'blog3_excerpt',
    bodyKey: 'blog3_body',
    images: [KITCHEN_IMAGES[4], KITCHEN_IMAGES[5]],
  },
];

export function BlogSection() {
  const { lang } = useLanguage();
  const [openPost, setOpenPost] = React.useState<BlogPost | null>(null);

  React.useEffect(() => {
    if (openPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [openPost]);

  return (
    <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto" id="expert-tips">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4">
          {t(lang, 'blog_section_heading')}
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          {t(lang, 'blog_section_sub')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <article
            key={post.titleKey}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="grid grid-cols-2 gap-1">
              {post.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={t(lang, post.titleKey)}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="200"
                  className="w-full h-32 md:h-36 object-cover"
                />
              ))}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-display font-semibold text-on-surface mb-2">
                {t(lang, post.titleKey)}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4 flex-1">
                {t(lang, post.excerptKey)}
              </p>
              <button
                onClick={() => setOpenPost(post)}
                className="text-primary font-semibold text-sm self-start hover:underline"
              >
                {t(lang, 'blog_read_more')} →
              </button>
            </div>
          </article>
        ))}
      </div>

      {openPost && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setOpenPost(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenPost(null)}
              aria-label="Close"
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface text-2xl leading-none"
            >
              &times;
            </button>
            <div
              className="blog-post-content prose"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(t(lang, openPost.bodyKey)) }}
            />
            <div className="mt-8 text-center">
              <a
                href="https://foodspotapp.vercel.app/start-trial"
                className="inline-flex items-center justify-center bg-[#047857] hover:bg-[#059669] text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg transition-all active:scale-95"
              >
                {t(lang, 'blog_cta')}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
