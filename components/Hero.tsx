import Image from "next/image";

const proofCompanies = [
  { name: "OpenAI", url: "https://openai.com/" },
  { name: "SpaceX", url: "https://www.spacex.com/" },
  { name: "Anduril", url: "https://www.anduril.com/" },
  { name: "Ramp", url: "https://ramp.com/" },
  { name: "Cognition", url: "https://cognition.ai/" },
  { name: "Polymarket", url: "https://polymarket.com/" },
  {
    name: "Physical Intelligence",
    url: "https://www.physicalintelligence.company/",
  },
  { name: "Flock Safety", url: "https://www.flocksafety.com/" },
  { name: "Chronosphere", url: "https://chronosphere.io/" },
];

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
                Anti Fund / Venture & Growth
              </p>

              <h1 className="max-w-4xl font-display text-[3.6rem] leading-[0.92] tracking-[-0.06em] text-ink sm:text-[4rem] md:text-7xl lg:text-[5.75rem]">
                Capital is commodity. Attention is not.
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-soft sm:text-xl md:mt-6 md:text-2xl">
                We back technical founders whose products, timing, and taste
                can make markets move before consensus catches up.
              </p>

              <div className="mt-8 border-t border-line pt-6 md:mt-10 md:pt-8">
                <p className="paper-label mb-3">Point of view</p>
                <p className="max-w-3xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                  Breakout companies are not built by capital alone. They need
                  technical truth, customer urgency, credible financing, and a
                  market that understands why the timing is now. We underwrite
                  those forces together.
                </p>
              </div>
            </div>

            <aside className="border-t border-line pt-6 md:pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <Image
                src="/logo.png"
                alt="Anti Fund"
                width={96}
                height={79}
                className="hidden h-auto w-20 md:w-24 lg:block"
                priority
              />

              <dl className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6 md:mt-8 lg:block lg:space-y-6">
                <div>
                  <dt className="paper-label">Firm</dt>
                  <dd className="mt-2 text-base leading-7 text-ink-soft">
                    Multi-stage investment platform for frontier technology,
                    applied software, fintech, defense, robotics, and consumer
                    demand.
                  </dd>
                </div>

                <div>
                  <dt className="paper-label">Core belief</dt>
                  <dd className="mt-2 text-base leading-7 text-ink-soft">
                    The scarce asset is not capital. It is conviction from the
                    right people before consensus has language for the company.
                  </dd>
                </div>

                <div>
                  <dt className="paper-label">For founders</dt>
                  <dd className="mt-2 text-base text-ink">
                    <a href="mailto:founders@antifund.com" className="paper-link">
                      founders@antifund.com
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="paper-label">For investors</dt>
                  <dd className="mt-2 text-base text-ink">
                    <a href="mailto:ir@antifund.com" className="paper-link">
                      ir@antifund.com
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="mt-10 border-t border-line pt-6 md:mt-12 md:pt-8">
            <p className="paper-label mb-4">Selected proof</p>
            <div
              className="flex flex-wrap gap-x-4 gap-y-2 text-base leading-7 text-ink sm:text-lg"
              aria-label="Selected Anti Fund investments"
            >
              {proofCompanies.map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paper-link"
                >
                  {company.name}
                </a>
              ))}
            </div>
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
