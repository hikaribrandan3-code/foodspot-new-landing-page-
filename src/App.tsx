import { Navbar, Hero, Benefits, MiddleCTA } from "./components/MainSections";
import { FAQ } from "./components/FAQ";
import { HowItWorks, Features } from "./components/Features";
import { Testimonials, Pricing, Footer } from "./components/FooterSections";
import { Chatbot } from "./components/Chatbot";

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
        <Pricing />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}
