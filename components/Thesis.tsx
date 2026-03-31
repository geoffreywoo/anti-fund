export default function Thesis() {
  const antiList = [
    "Anti-consensus",
    "Anti-incremental",
    "Anti-bureaucratic",
    "Anti-mediocre",
    "Anti-spray-and-pray",
    "Anti-ivory tower",
  ];

  return (
    <section id="thesis" className="px-6 py-24 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">01 / What We Believe</div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <blockquote className="border-l-2 border-ink pl-6 font-display text-4xl leading-[1.06] tracking-[-0.04em] text-ink md:text-6xl">
              The best founders are “anti” by definition.
            </blockquote>

            <div className="space-y-6 text-lg leading-8 text-ink-soft">
              <p>
                Capital is a commodity. Attention is not. Every fund can wire
                money. Very few can materially shape demand, narrative, or
                distribution at the same moment they support a company.
              </p>
              <p>
                We do not spray and pray. We make a small number of concentrated
                bets on founders who are building something technically serious,
                culturally resonant, and structurally difficult to ignore.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-y border-line py-6">
          <p className="paper-label mb-4">Key terms</p>
          <div className="flex flex-wrap gap-2.5">
            {antiList.map((item) => (
              <span
                key={item}
                className="inline-flex min-h-[34px] items-center border border-line bg-paper-alt px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
