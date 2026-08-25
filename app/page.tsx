import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import BlogSection from "./components/BlogSection";
import LeadGenerationPage from "./services/lead-generation/page";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="home-3d flex-1 pt-0">
        <Hero />
        <LeadGenerationPage />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <BlogSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
