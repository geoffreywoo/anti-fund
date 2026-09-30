import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Edge from "@/components/Edge";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import Media from "@/components/Media";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://antifund.com" },
};

export default function Home() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="home-page font-body">
        <Hero />
        <Portfolio />
        <Edge />
        <Team />
        <Media />
      </main>
      <Footer />
    </>
  );
}
