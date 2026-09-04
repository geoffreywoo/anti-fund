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
      className="px-5 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 border-t border-line pt-5 sm:gap-8 sm:pt-6 lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-10">
          <div className="paper-label">02 / Investment Thesis</div>

          <div className="space-y-8 sm:space-y-10">
            <h2 className="max-w-4xl font-display text-[2.15rem] leading-[1.04] text-ink sm:text-4xl md:text-5xl">
              Conviction before consensus.
            </h2>

            <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="border-l-2 border-accent pl-4 sm:pl-6">
                <p className="paper-label mb-3 sm:mb-4">Axiom I</p>
                <blockquote className="font-display text-[2.05rem] leading-[1.04] text-ink sm:text-4xl md:text-5xl">
                  The best founders are anti before they are obvious.
                </blockquote>
              </div>

              <div className="border-l-2 border-accent-quiet pl-4 sm:pl-6">
                <p className="paper-label mb-3 sm:mb-4">Axiom II</p>
                <blockquote className="font-display text-[2.05rem] leading-[1.04] text-ink sm:text-4xl md:text-5xl">
                  Technical truth creates the edge. Distribution compounds it.
                </blockquote>
              </div>
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
                className="mt-8 max-w-3xl text-base leading-[1.7] text-ink-soft sm:mt-10 sm:text-lg sm:leading-8"
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
