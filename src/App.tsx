import { useState, useEffect } from 'react';
import { CookieConsent } from './components/CookieConsent';
import { Navbar, Hero, SubtitleCards, MiddleCTA, UGCMarketingCTA } from "./components/MainSections";
import { FAQ } from "./components/FAQ";
import { HowItWorks, Features, UGCMegaSection } from "./components/Features";
import { BlogSection } from "./components/BlogSection";
import { BlogPost } from "./components/BlogPost";
import { getPostBySlug } from "./lib/blogPosts";
import { Pricing, Footer } from "./components/FooterSections";
import { AboutUs } from "./components/AboutUs";
import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function getRouteFromLocation(): { page: string; blogSlug: string | null } {
  const path = window.location.pathname;
  const blogMatch = path.match(/^\/blog\/([^/]+)\/?$/);
  if (blogMatch && getPostBySlug(blogMatch[1])) {
    return { page: 'blog', blogSlug: blogMatch[1] };
  }

  const hash = window.location.hash.slice(1) || 'home';
  return {
    page: hash === 'sobre-nosotros' || hash === 'about' ? 'about' : 'home',
    blogSlug: null,
  };
}

export default function App() {
  const [{ page, blogSlug }, setRoute] = useState(getRouteFromLocation);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromLocation());
    const handlePopState = () => setRoute(getRouteFromLocation());

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateToBlog = (slug: string) => {
    window.history.pushState(null, '', `/blog/${slug}`);
    setRoute({ page: 'blog', blogSlug: slug });
  };

  const navigateHome = () => {
    window.history.pushState(null, '', '/#expert-tips');
    setRoute({ page: 'home', blogSlug: null });
  };

  if (page === 'blog' && blogSlug) {
    const post = getPostBySlug(blogSlug);
    if (post) {
      return (
        <LanguageProvider>
          <div className="min-h-screen">
            <Navbar />
            <BlogPost post={post} onBack={navigateHome} />
            <Footer />
            <CookieConsent />
          </div>
          <LanguageSwitcher variant="floating" />
        </LanguageProvider>
      );
    }
  }

  if (page === 'about') {
    return (
      <LanguageProvider>
        <div className="min-h-screen">
          <Navbar />
          <AboutUs />
          <Footer />
        </div>
        <LanguageSwitcher variant="floating" />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <HowItWorks />
          <UGCMegaSection />
          <Features />
          <FAQ />
          <BlogSection onOpenPost={navigateToBlog} />
          <MiddleCTA />
          <Pricing />
        </main>
        <Footer />
        <CookieConsent />
      </div>
      <LanguageSwitcher variant="floating" />
    </LanguageProvider>
  );
}
