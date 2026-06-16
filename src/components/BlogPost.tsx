import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../lib/translations';
import { blogMarkdownToHtml, type BlogPostMeta } from '../lib/blogPosts';

const SITE_URL = 'https://www.foodspotmobile.com';

interface BlogPostProps {
  post: BlogPostMeta;
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  const { lang } = useLanguage();
  const title = t(lang, post.titleKey);
  const description = t(lang, post.metaKey);

  useEffect(() => {
    document.title = `${title} | FoodSpot Mobile`;

    const setMeta = (selector: string, attr: 'content' | 'href', value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="twitter:title"]', 'content', title);
    setMeta('meta[property="twitter:description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', `${SITE_URL}/blog/${post.slug}`);

    window.scrollTo(0, 0);
  }, [title, description, post.slug]);

  const html = blogMarkdownToHtml(t(lang, post.bodyKey), post.bodyImages);

  return (
    <article className="bg-white">
      <header className="relative h-[50vh] min-h-[320px] max-h-[520px] flex items-end overflow-hidden">
        <img
          src={post.heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-10 md:pb-14 w-full">
          <button
            onClick={onBack}
            className="text-white/90 hover:text-white text-sm font-semibold mb-4 inline-flex items-center gap-1"
          >
            ← {t(lang, 'blog_back')}
          </button>
          <h1 className="font-display text-3xl md:text-5xl text-white font-black leading-tight">
            {title}
          </h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        <div
          className="blog-article-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-12 text-center border-t border-gray-100 pt-10">
          <a
            href="https://foodspotapp.vercel.app/start-trial"
            className="inline-flex items-center justify-center bg-[#047857] hover:bg-[#059669] text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg transition-all active:scale-95"
          >
            {t(lang, 'blog_cta')}
          </a>
        </div>

        <button
          onClick={onBack}
          className="block mx-auto mt-8 text-primary font-semibold text-sm hover:underline"
        >
          ← {t(lang, 'blog_back')}
        </button>
      </div>
    </article>
  );
}
