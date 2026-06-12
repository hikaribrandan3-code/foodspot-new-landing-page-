import { Mail, Phone, Instagram, TrendingUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { CanvasBackground } from './CanvasBackground';
import { trackPricingSelection } from '../services/ga4Events';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../lib/translations';

export function Comparison() {
  return (
    <section className="py-16 md:py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in-up">
          <picture>
            <source srcSet="/comparison.webp" type="image/webp" />
            <img
              src="/comparison.webp"
              alt="Comparativa de Plataformas para Restaurantes - FoodSpot vs Pedix"
              loading="lazy"
              decoding="async"
              width="704"
              height="1527"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const { lang } = useLanguage();
  const [expandedFeatures, setExpandedFeatures] = useState(false);

  const checkIcon = (
    <div className="w-4 h-4 text-primary mr-3 shrink-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  );

  const topFeatures = [
    t(lang, 'feat_marketing_1'), // UGC organic marketing
    t(lang, 'feat_orders_1'), // Kitchen KDS + unlimited orders
    t(lang, 'feat_analytics_1'), // AI/Analytics dashboard
  ];

  const featureCategories = [
    {
      cat: t(lang, 'cat_orders'),
      items: [t(lang, 'feat_orders_1'), t(lang, 'feat_orders_2')],
    },
    {
      cat: t(lang, 'cat_delivery'),
      items: [t(lang, 'feat_delivery_1'), t(lang, 'feat_delivery_2')],
    },
    {
      cat: t(lang, 'cat_payments'),
      items: [t(lang, 'feat_payments_1'), t(lang, 'feat_payments_2'), t(lang, 'feat_payments_3')],
    },
    {
      cat: t(lang, 'cat_store'),
      items: [t(lang, 'feat_store_1'), t(lang, 'feat_store_2'), t(lang, 'feat_store_3')],
    },
    {
      cat: t(lang, 'cat_events'),
      items: [t(lang, 'feat_events_1'), t(lang, 'feat_events_2')],
    },
    {
      cat: t(lang, 'cat_marketing'),
      items: [t(lang, 'feat_marketing_1'), t(lang, 'feat_marketing_2')],
    },
    {
      cat: t(lang, 'cat_analytics'),
      items: [t(lang, 'feat_analytics_1')],
    },
    {
      cat: t(lang, 'cat_ai'),
      items: [t(lang, 'feat_ai_1')],
    },
    {
      cat: t(lang, 'cat_support'),
      items: [t(lang, 'feat_support_1')],
    },
  ];

  return (
    <section id="precios" className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl text-on-surface mb-4">{t(lang, 'pricing_heading')}</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          {t(lang, 'pricing_sub')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {/* Tier 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col h-full relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:scale-[1.01]">
          <div className="absolute inset-0 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
            <CanvasBackground color="#757575" variant="blobs" />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-2xl font-display font-semibold text-on-surface mb-2">{t(lang, 'plan_free_name')}</h3>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-4xl font-display font-bold text-on-surface">$0</span>
              <span className="text-on-surface font-semibold text-base">{t(lang, 'plan_free_period')}</span>
            </div>
            <p className="text-on-surface font-semibold mb-8 min-h-[48px] text-lg">{t(lang, 'plan_free_desc')}</p>
            <ul className="space-y-4 mb-8 flex-grow">
              {[t(lang, 'plan_free_f1'), t(lang, 'plan_free_f2'), t(lang, 'plan_free_f3')].map((item, i) => (
                <li key={i} className="flex items-center text-base text-on-surface font-semibold">
                  {checkIcon}
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://foodspotapp.vercel.app/" onClick={() => trackPricingSelection('free_plan')} className="w-full py-4 rounded-full border-2 border-secondary text-secondary font-semibold hover:bg-secondary/5 transition-colors group-hover:scale-[1.02] active:scale-[0.98] block text-center">
              {t(lang, 'plan_free_btn')}
            </a>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="bg-white border-2 border-primary rounded-2xl p-8 flex flex-col h-full relative shadow-xl transform md:-translate-y-4 overflow-hidden group ring-primary/20 hover:ring-8 transition-all hover:scale-[1.03] hover:-translate-y-12">
          <div className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity">
            <CanvasBackground color="#ff3d00" variant="blobs" />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
              {t(lang, 'plan_pro_badge')}
            </div>
            <h3 className="text-2xl font-display font-semibold text-on-surface mb-2">{t(lang, 'plan_pro_name')}</h3>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-4xl font-display font-bold text-on-surface">$25</span>
              <span className="text-on-surface-variant text-sm">{t(lang, 'plan_pro_period')}</span>
            </div>
            <p className="text-on-surface-variant mb-6 min-h-[48px]">{t(lang, 'plan_pro_desc')}</p>

            {/* Top 3 Features */}
            <ul className="space-y-3 mb-6 flex-grow">
              {topFeatures.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-on-surface font-medium">
                  {checkIcon}
                  {feature}
                </li>
              ))}
            </ul>

            {/* Expandable All Features */}
            {expandedFeatures && (
              <div className="space-y-4 mb-6 pb-4 border-t border-gray-200 pt-4">
                {featureCategories.map((group, gi) => (
                  <div key={gi}>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{group.cat}</p>
                    <ul className="space-y-2">
                      {group.items.map((item, ii) => (
                        <li key={ii} className="flex items-center text-sm text-on-surface font-medium">
                          {checkIcon}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Toggle Button */}
            <button
              onClick={() => setExpandedFeatures(!expandedFeatures)}
              className="w-full py-2 mb-6 flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              {expandedFeatures ? 'Hide all features' : 'View all features'}
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedFeatures ? 'rotate-180' : ''}`} />
            </button>

            <a href="https://foodspotapp.vercel.app/" onClick={() => trackPricingSelection('pro_plan')} className="w-full py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] group-hover:scale-[1.02] block text-center">
              {t(lang, 'plan_pro_btn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang } = useLanguage();

  const sections = [
    {
      title: t(lang, 'footer_product'),
      items: [
        { name: t(lang, 'footer_pricing'), href: "#precios" },
      ],
    },
    {
      title: t(lang, 'footer_company'),
      items: [
        { name: t(lang, 'footer_about'), href: "#sobre-nosotros" },
        { name: t(lang, 'footer_contact_link'), href: "https://wa.me/543512122600" },
        { name: "WhatsApp", href: "https://wa.me/543512122600" },
      ],
    },
  ];

  return (
    <footer id="contactos" className="bg-white border-t py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="text-2xl font-display font-bold text-primary mb-4">FoodSpot Mobile</div>
          <p className="text-on-surface-variant text-sm mb-8 max-w-xs transition-all">
            {t(lang, 'footer_tagline')}
          </p>
          <div className="mb-8">
            <h4 className="font-bold text-on-surface mb-4 uppercase text-[10px] tracking-widest">{t(lang, 'footer_contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="https://wa.me/543512122600" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
                  +54 351 212 2600
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@foodspotmobile.com" className="text-xs text-on-surface-variant hover:text-primary transition-colors">
                  info@foodspotmobile.com
                </a>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="font-bold text-on-surface mb-4 uppercase text-[10px] tracking-widest">{t(lang, 'footer_follow')}</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/foodspotmobile" className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a href="https://tiktok.com/@foodspotmobile" className="flex items-center gap-2 text-xs text-on-surface-variant hover:text-primary transition-colors">
                <TrendingUp className="w-4 h-4" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant mb-2 font-medium">
            {t(lang, 'footer_made')}
          </p>
          <p className="text-xs text-on-surface-variant font-medium">{t(lang, 'footer_rights')}</p>
        </div>
        {sections.map((sec, i) => (
          <div key={i}>
            <h3 className="font-bold text-on-surface mb-6 uppercase text-[10px] tracking-widest">{sec.title}</h3>
            <ul className="space-y-3">
              {sec.items.map((item, j) => (
                <li key={j}>
                  <a href={item.href} className="text-sm text-on-surface-variant hover:text-primary transition-colors hover:underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
