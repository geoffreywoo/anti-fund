const pillars = [
  {
    title: "Product & positioning",
    description:
      "We pressure-test what to build, what to cut, and what has to be true for customers and the market to care.",
  },
  {
    title: "Customers & distribution",
    description:
      "We turn product truth into market pull through customer sequencing, partner access, launch timing, and narrative discipline.",
  },
  {
    title: "Capital & talent",
    description:
      "We help create leverage for financing and senior hiring: the right people, in the right order, with a reason to move now.",
  },
  {
    title: "Consequential decisions",
    description:
      "We stay close through product resets, board pressure, financing forks, and the operating choices that change the company's trajectory.",
  },
];

export default function HowWeHelp() {
  return (
    <section
      id="help"
      className="px-5 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 border-t border-line pt-5 sm:gap-8 sm:pt-6 lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-10">
          <div className="paper-label">05 / How We Work</div>

          <div className="space-y-8 sm:space-y-10">
            <div>
              <h2 className="max-w-4xl font-display text-[2.15rem] leading-[1.04] text-ink sm:text-4xl md:text-5xl">
                Conviction is only the beginning.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-[1.65] text-ink-soft sm:mt-5 sm:text-lg sm:leading-8">
                We work directly on the decisions that determine what happens next.
              </p>
            </div>

            <div className="border-y border-line">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="grid grid-cols-[28px_minmax(0,1fr)] gap-x-3 gap-y-2.5 border-b border-line py-5 last:border-b-0 sm:grid-cols-[36px_minmax(0,1fr)] sm:gap-x-4 sm:py-6 md:grid-cols-[44px_minmax(0,240px)_minmax(0,1fr)] md:gap-6"
                >
                  <span className="font-mono text-[11px] uppercase text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[1.4rem] leading-[1.08] text-ink sm:text-2xl sm:leading-none">
                    {pillar.title}
                  </h3>
                  <p className="col-start-2 text-[0.95rem] leading-6 text-ink-soft md:col-start-auto md:text-base md:leading-7">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
