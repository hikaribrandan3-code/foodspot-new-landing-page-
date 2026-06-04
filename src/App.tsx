import { useState, useEffect, lazy, Suspense } from 'react';
import { CookieConsent } from './components/CookieConsent';
import { Navbar, Hero, MiddleCTA, UGCMarketingCTA, DemoSection } from "./components/MainSections";
import { SignupForm } from "./components/SignupForm";
import { FAQ } from "./components/FAQ";
import { HowItWorks, Features, UGCMarketing } from "./components/Features";
import { Testimonials, Pricing, Footer } from "./components/FooterSections";
import { AboutUs } from "./components/AboutUs";
import { FishDemo } from "./components/FishDemo";

// Lazy load Chatbot since it's optional and heavy with AI library
const Chatbot = lazy(() => import('./components/Chatbot').then(m => ({ default: m.Chatbot })));

export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.slice(1) || 'home';
    setPage(hash === 'sobre-nosotros' ? 'about' : 'home');

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || 'home';
      setPage(newHash === 'sobre-nosotros' ? 'about' : 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (page === 'about') {
    return (
      <div className="min-h-screen">
        <Navbar />
        <AboutUs />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <UGCMarketing />
        <FishDemo />
        <HowItWorks />
        <SignupForm />
        <Features />
        <FAQ />
        <MiddleCTA />
        <Testimonials />
        <Pricing />
        <DemoSection />
      </main>
      <Footer />
      {/* Lazy load Chatbot - only loads when component mounts */}
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
      {/* Cookie consent — loads FB + GTM only after user accepts */}
      <CookieConsent />
    </div>
  );
}
