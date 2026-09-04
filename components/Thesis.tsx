import Link from "next/link";
import {
  manifestoEdition,
  manifestoHomepageExcerpt,
  manifestoPublished,
} from "@/content/manifesto";

export default function Thesis() {
  return (
    <section
      id="thesis"
      className="page-section"
    >
      <div className="mx-auto max-w-6xl">
        <div className="section-frame">
          <div className="paper-label">02 / Investment Thesis</div>

          <div className="section-body">
            <h2 className="section-heading">
              Conviction before consensus.
            </h2>

            <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="border-l-2 border-accent pl-4 sm:pl-6">
                <p className="paper-label mb-3 sm:mb-4">Axiom I</p>
                <blockquote className="axiom-quote">
                  The best founders are anti before they are obvious.
                </blockquote>
              </div>

              <div className="border-l-2 border-accent-quiet pl-4 sm:pl-6">
                <p className="paper-label mb-3 sm:mb-4">Axiom II</p>
                <blockquote className="axiom-quote">
                  Technical truth creates the edge. Distribution compounds it.
                </blockquote>
              </div>
            </div>

            <div id="investors" className="border-t border-line pt-6 sm:pt-8" aria-labelledby="investors-title">
              <p className="paper-label">For limited partners</p>
              <h3 id="investors-title" className="mt-3 font-display text-[1.75rem] leading-[1.15] tracking-[-0.02em] text-ink sm:text-[2rem]">
                Two strategies. One standard.
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8">
                <div>
                  <h4 className="font-display text-2xl leading-[1.2] tracking-[-0.015em] text-ink">Venture</h4>
                  <p className="paper-label mt-1">Pre-seed &amp; seed</p>
                  <p className="mt-3 text-base leading-7 text-ink-soft">
                    We back technical founders before consensus forms. The work
                    starts when the company does.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-2xl leading-[1.2] tracking-[-0.015em] text-ink">Growth &amp; opportunities</h4>
                  <p className="paper-label mt-1">Growth &amp; pre-IPO</p>
                  <p className="mt-3 text-base leading-7 text-ink-soft">
                    We concentrate behind category leaders where we have
                    conviction in what comes next.
                  </p>
                </div>
              </div>
              <p className="mt-6 max-w-3xl text-base leading-7 text-ink-soft">
                The stage changes; the underwriting standard does not. We build
                long-term relationships with LPs who share our conviction in
                frontier technology.
              </p>
              <a href="mailto:ir@antifund.com" className="paper-link mt-4 inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.1em]">
                Discuss the strategy
              </a>
            </div>

            <div id="manifesto" className="border-t border-line pt-6 sm:pt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                <p id="homepage-manifesto-title" className="paper-label">
                  Manifesto {manifestoEdition} / {" "}
                  <time dateTime="2026-09">{manifestoPublished}</time>
                </p>
                <Link
                  href="/manifesto"
                  className="paper-link w-fit font-mono text-[11px] uppercase tracking-[0.12em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Read the full manifesto
                </Link>
              </div>

              <p
                className="mt-6 max-w-[65ch] text-lg leading-[1.65] text-ink-soft sm:mt-8"
                data-home-manifesto-excerpt
              >
                {manifestoHomepageExcerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
