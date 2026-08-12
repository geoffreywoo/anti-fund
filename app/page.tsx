import Hero from "@/components/Hero";
import Edge from "@/components/Edge";
import Thesis from "@/components/Thesis";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import HowWeHelp from "@/components/HowWeHelp";
import Testimonials from "@/components/Testimonials";
import Media from "@/components/Media";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import RevealWrapper from "@/components/RevealWrapper";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <RevealWrapper>
        <Edge />
      </RevealWrapper>
      <RevealWrapper delay={50}>
        <Thesis />
      </RevealWrapper>
      <RevealWrapper delay={100}>
        <Team />
      </RevealWrapper>
      <RevealWrapper delay={150}>
        <Portfolio />
      </RevealWrapper>
      <RevealWrapper delay={200}>
        <HowWeHelp />
      </RevealWrapper>
      <RevealWrapper delay={250}>
        <Testimonials />
      </RevealWrapper>
      <RevealWrapper delay={300}>
        <Media />
      </RevealWrapper>
      <RevealWrapper delay={350}>
        <FAQ />
      </RevealWrapper>
      <RevealWrapper delay={400}>
        <Footer />
      </RevealWrapper>
    </main>
  );
}
