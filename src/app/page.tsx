import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Collections from "@/components/sections/Collections";
import Services from "@/components/sections/services/Services";
import BridalConsultation from "@/components/sections/bridal/BridalConsultation";
import Lookbook from "@/components/sections/lookbook/Lookbook";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import SectionReveal from "@/components/animations/SectionReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      
      <SectionReveal>
        <Hero />
      </SectionReveal>

      <SectionReveal>
        <About />
      </SectionReveal>

      <SectionReveal>
        <Collections />
      </SectionReveal>
      
      <SectionReveal className="relative" delay={0.1}>
        <div id="services">
          <Services />
        </div>
      </SectionReveal>
      
      <SectionReveal className="relative" delay={0.1}>
        <div id="bridal-consultation">
          <BridalConsultation />
        </div>
      </SectionReveal>

      <SectionReveal className="relative" delay={0.1}>
        <div id="lookbook">
          <Lookbook />
        </div>
      </SectionReveal>

      <SectionReveal>
        <Contact />
      </SectionReveal>

      <Footer />
    </main>
  );
}
