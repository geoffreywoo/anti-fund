export default function Thesis() {
  const lookFor = [
    {
      title: "Technical edge",
      description:
        "A real reason the product can do something others cannot easily copy.",
    },
    {
      title: "Product taste",
      description:
        "Judgment about what should exist, how it should feel, and why users will care now.",
    },
    {
      title: "Earned distribution",
      description:
        "A path to attention that comes from product, community, narrative, or cultural timing.",
    },
    {
      title: "Non-consensus insight",
      description:
        "A belief that looks early, strange, or unpopular before the market catches up.",
    },
    {
      title: "Cultural timing",
      description:
        "A read on where demand, behavior, and taste are moving before it is obvious.",
    },
    {
      title: "Category ambition",
      description:
        "The intent to define the market, not just compete inside someone else's frame.",
    },
  ];

  return (
    <section id="thesis" className="px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">01 / What We Believe</div>

          <div className="space-y-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="border-l-2 border-ink pl-4 sm:pl-6">
                <p className="paper-label mb-4">Axiom I</p>
                <blockquote className="font-display text-[2.35rem] leading-[1.04] tracking-[-0.04em] text-ink sm:text-4xl md:text-5xl">
                  Capital funds the company. Attention changes its slope.
                </blockquote>
              </div>

              <div className="border-l-2 border-ink pl-4 sm:pl-6">
                <p className="paper-label mb-4">Axiom II</p>
                <blockquote className="font-display text-[2.35rem] leading-[1.04] tracking-[-0.04em] text-ink sm:text-4xl md:text-5xl">
                  Taste, timing, and distribution decide who becomes legible.
                </blockquote>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
              <div className="space-y-5 text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                <p>
                  Capital funds the company. Attention changes its slope. In
                  markets flooded with compute, capital, and plausible demos,
                  taste and distribution are no longer soft advantages. They
                  decide who gets believed, hired, funded, and bought.
                </p>
                <p>
                  The best founders are not short on meetings. They are short
                  on partners with judgment, trust, and the ability to help a
                  company matter before the rest of the market knows what to do
                  with it.
                </p>
                <p>
                  In practice, distribution is not a layer that sits on top of
                  the company. It is part of product, recruiting, fundraising,
                  and how the company becomes legible to the market.
                </p>
              </div>

              <div className="space-y-5 text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                <p>
                  We back builders whose advantage is difficult to spreadsheet:
                  a technical breakthrough, a product instinct, a distribution
                  channel, or a cultural read that gives the company a different
                  slope.
                </p>
                <p>
                  Anti Fund is built to complement institutional capital. We
                  bring company-building experience, technical fluency, and
                  firsthand understanding of how culture and narrative move
                  markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-y border-line py-6 md:mt-12">
          <p className="paper-label mb-5">What We Look For</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {lookFor.map((item) => (
              <div
                key={item.title}
                className="border border-line bg-paper-alt px-4 py-4"
              >
                <h3 className="font-display text-2xl leading-none tracking-[-0.03em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
