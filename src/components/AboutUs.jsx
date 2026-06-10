import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../lib/translations';

export function AboutUs() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-8">
          {t(lang, 'about_hero')}
        </h1>
      </section>

      {/* Intro Text */}
      <section className="px-6 max-w-4xl mx-auto pb-12">
        <p className="text-lg text-on-surface-variant leading-relaxed">
          {t(lang, 'about_intro')}
        </p>
      </section>

      {/* Founder Image */}
      <section className="pb-12 px-6 max-w-4xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-lg mb-12">
          <picture>
            <source srcSet="/founder-home-office.webp" type="image/webp" />
            <img
              src="/founder-home-office.jpg"
              alt="Fundador en su home office"
              className="w-full h-auto object-cover"
            />
          </picture>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 max-w-4xl mx-auto pb-20">
        <div className="prose prose-lg max-w-none space-y-6 text-on-surface-variant leading-relaxed">
          <p>{t(lang, 'about_p1')}</p>
          <p>{t(lang, 'about_p2')}</p>
          <p>{t(lang, 'about_p3')}</p>
          <p>
            <span className="font-semibold text-primary">{t(lang, 'about_p4')}</span>
          </p>
          <p>{t(lang, 'about_p5')}</p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="px-6 py-20 bg-primary-container/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl text-on-surface mb-12">{t(lang, 'about_roadmap_heading')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-primary/20">
              <h3 className="font-display text-2xl text-primary mb-4">{t(lang, 'about_phase1_title')}</h3>
              <p className="text-on-surface-variant">{t(lang, 'about_phase1_desc')}</p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-primary/20">
              <h3 className="font-display text-2xl text-primary mb-4">{t(lang, 'about_phase2_title')}</h3>
              <p className="text-on-surface-variant">{t(lang, 'about_phase2_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="font-display text-3xl text-on-surface mb-8">{t(lang, 'about_mission_heading')}</h2>

        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <p>{t(lang, 'about_mission_p1')}</p>
          <p className="pt-4 text-lg">{t(lang, 'about_mission_p2')}</p>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-outline-variant">
          <a
            href="https://foodspotapp.vercel.app/start-trial"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all active:scale-95 shadow-lg"
          >
            {t(lang, 'about_cta')}
          </a>
        </div>
      </section>
    </div>
  );
}
