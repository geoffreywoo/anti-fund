export default function Thesis() {
  const lookFor = [
    {
      title: "Technical edge",
      description:
        "A product, model, system, or operating capability that capital alone cannot easily copy.",
    },
    {
      title: "Product judgment",
      description:
        "Taste about what should exist, who needs it first, and why the user will change behavior.",
    },
    {
      title: "Earned market pull",
      description:
        "Demand created by product performance, customer urgency, community, or trusted distribution.",
    },
    {
      title: "Non-consensus insight",
      description:
        "A well-formed view before the category has a settled consensus.",
    },
    {
      title: "Market timing",
      description:
        "Evidence that customer behavior, regulation, infrastructure, or culture has opened a window.",
    },
    {
      title: "Category ambition",
      description:
        "A path to define the market standard, not just participate in the segment.",
    },
  ];

  const operatingNotes = [
    "Technology matters when it changes customer behavior.",
    "Attention matters when it compounds recruiting, financing, customers, and trust.",
    "The best founders know something precise before the market has consensus.",
    "Brand is useful when it lowers friction for a product that already works.",
  ];

  return (
    <section id="thesis" className="px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">01 / Investment Thesis</div>

          <div className="space-y-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="border-l-2 border-accent pl-4 sm:pl-6">
                <p className="paper-label mb-4">Axiom I</p>
                <blockquote className="font-display text-[2.35rem] leading-[1.04] tracking-[-0.04em] text-ink sm:text-4xl md:text-5xl">
                  Technical truth is not enough. The market has to understand
                  what changed.
                </blockquote>
              </div>

              <div className="border-l-2 border-accent-quiet pl-4 sm:pl-6">
                <p className="paper-label mb-4">Axiom II</p>
                <blockquote className="font-display text-[2.35rem] leading-[1.04] tracking-[-0.04em] text-ink sm:text-4xl md:text-5xl">
                  The best rounds do more than fund the company. They change
                  who believes.
                </blockquote>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
              <div className="space-y-5 text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                <p>
                  Anti Fund underwrites the conversion from technical insight to
                  institutional-scale value. We care about product depth,
                  customer urgency, financing strategy, and the sequence that
                  turns an early advantage into a durable company.
                </p>
                <p>
                  Our edge is most useful in narrow windows: a round that sets
                  the next price, a launch that defines the category, a senior
                  hire who changes the company, a customer who proves the market,
                  or a story the right people need to understand fast.
                </p>
                <p>
                  Distribution is not a slogan here. It is part of company
                  design: who needs the product, how trust is built, which
                  counterparties matter, and what sequence creates compounding
                  advantage.
                </p>
              </div>

              <div className="space-y-5 text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                <p>
                  We look for builders with a real edge: proprietary technology,
                  exceptional product judgment, customer pull, or a non-obvious
                  read on where a category is going.
                </p>
                <p>
                  Anti Fund is built to sit beside institutional capital. We
                  bring technical fluency, founder experience, financing
                  judgment, and operating access across technology, media,
                  sports, and consumer markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-y border-line py-6 md:mt-12">
          <p className="paper-label mb-5">Operating Notes</p>
          <div className="grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {operatingNotes.map((note, index) => (
              <figure
                key={note}
                className="border-b border-line py-5 sm:px-5 sm:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <figcaption className="paper-label mb-4">
                  Note {String(index + 1).padStart(2, "0")}
                </figcaption>
                <blockquote className="font-display text-2xl leading-[1.15] tracking-[-0.035em] text-ink sm:text-[1.7rem]">
                  {note}
                </blockquote>
              </figure>
            ))}
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
