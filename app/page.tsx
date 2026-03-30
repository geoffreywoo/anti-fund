import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import HowWeHelp from "@/components/HowWeHelp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Thesis />
      <Portfolio />
      <Team />
      <HowWeHelp />
      <Footer />
    </main>
  );
}
