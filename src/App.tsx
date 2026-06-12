import { useState, useEffect } from 'react';
import { CookieConsent } from './components/CookieConsent';
import { Navbar, Hero, HeroSubtitle, SubtitleCards, TheIdea, MiddleCTA, UGCMarketingCTA, DemoSection } from "./components/MainSections";
import { SignupForm } from "./components/SignupForm";
import { FAQ } from "./components/FAQ";
import { HowItWorks, Features, UGCMarketing, VideoShowcase } from "./components/Features";
import { Pricing, Footer } from "./components/FooterSections";
import { AboutUs } from "./components/AboutUs";
import { FishDemo } from "./components/FishDemo";
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
          <LanguageSwitcher variant="floating" />
        </div>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <HeroSubtitle />
          <VideoShowcase />
          <SubtitleCards />
          <TheIdea />
          <UGCMarketing />
          <FishDemo />
          <HowItWorks />
          <SignupForm />
          <Features />
          <FAQ />
          <MiddleCTA />
          <Pricing />
          <DemoSection />
        </main>
        <Footer />
        <LanguageSwitcher variant="floating" />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
}
