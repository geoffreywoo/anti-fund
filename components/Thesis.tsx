export default function Thesis() {
  const antiList = [
    "Tech culture",
    "Mindshare",
    "Attention",
    "Access",
    "Iconoclasts",
    "Distribution",
    "Power law",
  ];

  return (
    <section id="thesis" className="px-6 py-24 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">01 / What We Believe</div>

          <div className="space-y-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="border-l-2 border-ink pl-6">
                <p className="paper-label mb-4">Axiom I</p>
                <blockquote className="font-display text-4xl leading-[1.06] tracking-[-0.04em] text-ink md:text-5xl">
                  The future is forged at the intersection of tech and culture.
                </blockquote>
              </div>

              <div className="border-l-2 border-ink pl-6">
                <p className="paper-label mb-4">Axiom II</p>
                <blockquote className="font-display text-4xl leading-[1.06] tracking-[-0.04em] text-ink md:text-5xl">
                  The best founders are anti by definition.
                </blockquote>
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="space-y-6 text-lg leading-8 text-ink-soft">
                <p>
                  Startups live and die on two levers: capital and attention.
                  Capital is commodity, whereas attention is not. Every company
                  competes for mindshare to recruit talent and win customers.
                </p>
                <p>
                  Top founders are flooded by VCs, so the game becomes one of
                  access and winning in addition to picking, research, and
                  underwriting.
                </p>
                <p>
                  The market is noisy, and social media is now the dominant
                  form of information exchange. The ability to command attention
                  matters more than ever.
                </p>
              </div>

              <div className="space-y-6 text-lg leading-8 text-ink-soft">
                <p>
                  Anti Fund is complementary on the cap table to the typical
                  Sand Hill or Wall Street firm. Our principals understand how
                  culture moves, how narrative compounds, and how distribution
                  can become a strategic advantage.
                </p>
                <p>
                  Venture is a power law business driven by iconoclasts who win.
                  Anti Fund exists to find and fund these people at the
                  intersection of technology, culture, and attention.
                </p>
              </div>
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
