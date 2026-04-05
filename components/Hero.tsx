import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="px-5 pb-16 pt-24 sm:px-6 md:px-10 md:pb-24 md:pt-40 lg:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="border-y border-line py-8 md:py-14">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.35fr)_260px]">
            <div>
              <p className="paper-label mb-6 max-w-[18rem] leading-6 sm:mb-8 sm:max-w-none">
                Anti Fund memorandum 01 / March 2026
              </p>

              <h1 className="max-w-4xl font-display text-[3.6rem] leading-[0.92] tracking-[-0.06em] text-ink sm:text-[4rem] md:text-7xl lg:text-[5.75rem]">
                Capital is commodity. Attention is not.
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-soft sm:text-xl md:mt-6 md:text-2xl">
                A venture firm for founders who move markets before consensus
                catches up.
              </p>

              <div className="mt-8 border-t border-line pt-6 md:mt-10 md:pt-8">
                <p className="paper-label mb-3">Abstract</p>
                <p className="max-w-3xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                  Anti Fund is built on two beliefs: the future is shaped where
                  technology meets culture, and the founders who matter most
                  rarely look conventional at first. Startups run on capital
                  and attention. Capital is widely available. Attention
                  compounds into talent, customers, leverage, and category
                  position.
                </p>
              </div>
            </div>

            <aside className="border-t border-line pt-6 md:pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <Image
                src="/logo.png"
                alt="Anti Fund"
                width={96}
                height={79}
                className="h-auto w-20 md:w-24"
                priority
              />

              <dl className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 md:mt-8 lg:block lg:space-y-6">
                <div>
                  <dt className="paper-label">Document type</dt>
                  <dd className="mt-2 text-base leading-7 text-ink-soft">
                    Investment firm manifesto
                  </dd>
                </div>

                <div className="sm:col-span-2 lg:col-span-1">
                  <dt className="paper-label">Keywords</dt>
                  <dd className="mt-2 text-base leading-7 text-ink-soft">
                    venture capital, technology, culture, founders, attention.
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

        <div className="mt-6 flex items-center gap-4 md:mt-8">
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
