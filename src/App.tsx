import { useState, useEffect } from 'react';
import { Navbar, Hero, Benefits, MiddleCTA, UGCMarketingCTA } from "./components/MainSections";
import { FAQ } from "./components/FAQ";
import { HowItWorks, Features, UGCMarketing } from "./components/Features";
import { Testimonials, Pricing, Footer } from "./components/FooterSections";
import { AboutUs } from "./components/AboutUs";

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
        <Benefits />
        <HowItWorks />
        <UGCMarketingCTA />
        <Features />
        <FAQ />
        <MiddleCTA />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
