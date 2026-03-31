export default function Thesis() {
  const antiList = [
    "Anti-consensus",
    "Anti-boring",
    "Anti-bureaucratic",
    "Anti-sameness",
    "Anti-commodity",
    "Anti-spray-and-pray",
  ];

  return (
    <section id="thesis" className="px-6 py-24 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">01 / What We Believe</div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <blockquote className="border-l-2 border-ink pl-6 font-display text-4xl leading-[1.06] tracking-[-0.04em] text-ink md:text-6xl">
              When intelligence gets cheaper, taste gets more valuable.
            </blockquote>

            <div className="space-y-6 text-lg leading-8 text-ink-soft">
              <p>
                We are entering a market flooded with models, compute, and
                capital. Capability is compounding fast. So is sameness.
              </p>
              <p>
                That changes the bottleneck. The hard part is no longer shipping
                something functional. It is commanding attention, creating
                desire, and making people care before the market fully catches
                up.
              </p>
              <p>
                Culture is not decoration around the company. It is part of the
                moat. Vibes are not fluff. They are how taste travels, how
                products earn pull, and how movements start.
              </p>
              <p>
                We back founders who can build the future and give it gravity.
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
