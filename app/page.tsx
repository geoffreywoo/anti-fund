import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import HowWeHelp from "@/components/HowWeHelp";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import RevealWrapper from "@/components/RevealWrapper";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <RevealWrapper>
        <Thesis />
      </RevealWrapper>
      <RevealWrapper delay={50}>
        <Portfolio />
      </RevealWrapper>
      <RevealWrapper delay={100}>
        <Team />
      </RevealWrapper>
      <RevealWrapper delay={150}>
        <HowWeHelp />
      </RevealWrapper>
      <RevealWrapper delay={200}>
        <Testimonials />
      </RevealWrapper>
      <RevealWrapper delay={250}>
        <FAQ />
      </RevealWrapper>
      <RevealWrapper delay={300}>
        <Footer />
      </RevealWrapper>
    </main>
  );
}
