import { useState, useEffect } from 'react';
import { CookieConsent } from './components/CookieConsent';
import { Navbar, Hero, SubtitleCards, TheIdea, MiddleCTA, UGCMarketingCTA } from "./components/MainSections";
import { FAQ } from "./components/FAQ";
import { HowItWorks, Features, UGCMarketing } from "./components/Features";
import { BlogSection } from "./components/BlogSection";
import { Pricing, Footer } from "./components/FooterSections";
import { AboutUs } from "./components/AboutUs";
import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.slice(1) || 'home';
    setPage(hash === 'sobre-nosotros' || hash === 'about' ? 'about' : 'home');

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || 'home';
      setPage(newHash === 'sobre-nosotros' || newHash === 'about' ? 'about' : 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
          <SubtitleCards />
          <TheIdea />
          <UGCMarketing />
          <HowItWorks />
          <Features />
          <FAQ />
          <BlogSection />
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
