import { Navbar, Hero, Benefits, MiddleCTA } from "./components/MainSections";
import { FAQ } from "./components/FAQ";
import { HowItWorks, Features } from "./components/Features";
import { Testimonials, Comparison, Pricing, Footer } from "./components/FooterSections";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Features />
        <FAQ />
        <MiddleCTA />
        <Testimonials />
        <Comparison />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
