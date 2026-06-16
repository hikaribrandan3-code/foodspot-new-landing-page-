import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../lib/translations';
import { BLOG_POSTS } from '../lib/blogPosts';

interface BlogSectionProps {
  onOpenPost: (slug: string) => void;
}

export function BlogSection({ onOpenPost }: BlogSectionProps) {
  const { lang } = useLanguage();

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
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="grid grid-cols-2 gap-1">
              {post.cardImages.map((src, i) => (
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
              <a
                href={`/blog/${post.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onOpenPost(post.slug);
                }}
                className="text-primary font-semibold text-sm self-start hover:underline"
              >
                {t(lang, 'blog_read_more')} →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
