const pillars = [
  {
    title: "Product & positioning",
    description:
      "We pressure-test what to build, what to cut, and what has to be true for customers and the market to care.",
  },
  {
    title: "Customers & distribution",
    description:
      "We help you reach customers and partners, sharpen the story, and make the launch count.",
  },
  {
    title: "Capital & talent",
    description:
      "We introduce investors and senior hires who understand what you are building, and help you make the case.",
  },
  {
    title: "Consequential decisions",
    description:
      "We stay close through product resets, board pressure, and financing decisions. Direct answers when the stakes are highest.",
  },
];

export default function HowWeHelp() {
  return (
    <section
      id="help"
      className="page-section"
    >
      <div className="mx-auto max-w-6xl">
        <div className="section-frame">
          <div className="paper-label">03 / For Founders</div>

          <div className="section-body">
            <div>
              <h2 className="section-heading">
                Conviction is only the beginning.
              </h2>
              <p className="section-lede">
                You build the company. We help you win the customers, talent,
                and capital to keep going.
              </p>
            </div>

            <div className="border-y border-line">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="grid grid-cols-[28px_minmax(0,1fr)] gap-x-3 gap-y-2.5 border-b border-line py-5 last:border-b-0 sm:grid-cols-[36px_minmax(0,1fr)] sm:gap-x-4 sm:py-6 md:grid-cols-[32px_minmax(0,220px)_minmax(0,1fr)] md:gap-6"
                >
                  <span className="font-mono text-[11px] uppercase text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[1.4rem] leading-[1.18] tracking-[-0.015em] text-ink sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="col-start-2 text-base leading-[1.6] text-ink-soft md:col-start-auto">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-accent pl-5 sm:pl-6">
              <h3 className="font-display text-2xl leading-[1.2] tracking-[-0.015em] text-ink sm:text-3xl">
                Building something the world hasn&apos;t caught up to?
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-ink-soft">
                Tell us what you&apos;re building, why it matters, and what you
                see that others don&apos;t. Send a deck or product link.
              </p>
              <a href="mailto:founders@antifund.com" className="paper-link mt-3 inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.1em]">
                Tell us what you&apos;re building
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
