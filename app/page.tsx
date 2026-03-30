import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import HowWeHelp from "@/components/HowWeHelp";
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
        <FAQ />
      </RevealWrapper>
      <RevealWrapper delay={250}>
        <Footer />
      </RevealWrapper>
    </main>
  );
}
