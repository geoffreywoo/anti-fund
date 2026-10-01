import Link from "next/link";
import Testimonials from "@/components/Testimonials";

const capabilities = [
  {
    name: "Product & judgment",
    description: "We pressure-test what to build, what to cut, and what has to be true. Direct answers through product resets, board pressure, and financing decisions.",
  },
  {
    name: "Customers & distribution",
    description: "We help you reach customers and partners, sharpen the story, and make the launch count.",
  },
  {
    name: "Capital & talent",
    description: "We introduce investors and senior hires who understand what you are building, and help you make the case.",
  },
];

export default function Edge() {
  return (
    <section id="edge" className="page-section">
      <div className="mx-auto max-w-6xl">
        <div className="section-frame">
          <h2 className="paper-label">Investment approach</h2>
          <div className="section-body">
            <div>
              <p className="max-w-[65ch] text-base leading-[1.65] text-ink-soft">
                We study the technology, pressure-test the market, and back founders
                with a view the crowd has missed. Then we help them reach the people
                who matter.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {capabilities.map((capability) => (
                <article key={capability.name}>
                  <h3 className="font-body text-base font-semibold leading-snug text-ink">{capability.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{capability.description}</p>
                </article>
              ))}
            </div>
            <Testimonials />
            <div id="thesis" className="border-t border-line pt-5">
              <div id="manifesto" className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <p data-home-manifesto-excerpt className="max-w-[42ch] text-base text-ink-soft">
                  Our investment thesis
                </p>
                <Link href="/manifesto" className="paper-link inline-flex min-h-11 w-fit shrink-0 items-center font-mono text-xs">
                  Read the manifesto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
