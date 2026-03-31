const pillars = [
  {
    title: "Signal",
    description:
      "Our LP base includes Marc Andreessen, Chris Dixon, and Aquarian Holdings. When the story is strong, we can get it into the right rooms fast.",
  },
  {
    title: "Taste",
    description:
      "Product, positioning, brand, narrative, launch. In crowded markets, better taste is not decoration. It is edge.",
  },
  {
    title: "Distribution",
    description:
      "When intelligence is commoditized, distribution matters more. We help create moments, introductions, and partnerships that compound attention.",
  },
  {
    title: "Fundraising",
    description:
      "There is more capital than ever. That does not mean founders should take undifferentiated money. We help sharpen the story, run process, and keep leverage.",
  },
  {
    title: "Pressure moments",
    description:
      "Board pressure. Pivots. Financing crunches. M&A. We are most useful when the stakes are high and the answer is not obvious.",
  },
];

export default function HowWeHelp() {
  return (
    <section id="help" className="px-6 py-24 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">04 / How We Help</div>

          <div className="space-y-10">
            <div className="border-y border-line">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="grid gap-4 border-b border-line py-6 last:border-b-0 md:grid-cols-[44px_minmax(0,220px)_minmax(0,1fr)] md:gap-6"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl leading-none tracking-[-0.03em] text-ink">
                    {pillar.title}
                  </h3>
                  <p className="text-base leading-7 text-ink-soft">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div id="contact" className="border border-line bg-paper-alt px-6 py-6">
              <p className="paper-label mb-3">Correspondence</p>
              <p className="text-lg leading-8 text-ink-soft">
                Building something technically serious with real cultural pull?
                Write to{" "}
                <a href="mailto:founders@antifund.com" className="paper-link">
                  founders@antifund.com
                </a>
                . We prefer conviction over funnel-fill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
