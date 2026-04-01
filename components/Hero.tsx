import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="px-6 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40 lg:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="border-y border-line py-10 md:py-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_260px]">
            <div>
              <p className="paper-label mb-8">
                Anti Fund memorandum 01 / March 2026
              </p>

              <h1 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.05em] text-ink md:text-7xl lg:text-[5.75rem]">
                Capital is commodity. Attention is not.
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-8 text-ink-soft md:text-2xl">
                The future is forged at the intersection of tech and culture.
              </p>

              <div className="mt-10 border-t border-line pt-8">
                <p className="paper-label mb-3">Abstract</p>
                <p className="max-w-3xl text-lg leading-8 text-ink-soft">
                  Anti Fund is founded on two axioms: the future is forged at
                  the intersection of tech and culture, and the best founders
                  are anti by definition. Startups live and die on two levers,
                  capital and attention. One is abundant. The other wins
                  markets.
                </p>
              </div>
            </div>

            <aside className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <Image
                src="/logo.png"
                alt="Anti Fund"
                width={96}
                height={79}
                className="h-auto w-20 md:w-24"
                priority
              />

              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="paper-label">Document type</dt>
                  <dd className="mt-2 text-base leading-7 text-ink-soft">
                    Attention manifesto
                  </dd>
                </div>

                <div>
                  <dt className="paper-label">Keywords</dt>
                  <dd className="mt-2 text-base leading-7 text-ink-soft">
                    Tech, culture, attention, mindshare, iconoclasts.
                  </dd>
                </div>

                <div>
                  <dt className="paper-label">Correspondence</dt>
                  <dd className="mt-2 text-base text-ink">
                    <a href="mailto:founders@antifund.com" className="paper-link">
                      founders@antifund.com
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <span className="block h-px w-16 bg-line-strong" aria-hidden="true" />
          <a
            href="#thesis"
            className="paper-link font-mono text-[11px] uppercase tracking-[0.18em]"
          >
            Begin reading
          </a>
        </div>
      </div>
    </section>
  );
}
