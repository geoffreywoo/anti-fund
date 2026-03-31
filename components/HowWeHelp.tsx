const pillars = [
  {
    title: "Network",
    description:
      "Our LP base includes people like Marc Andreessen, Chris Dixon, and Aquarian Holdings. When the story is strong, we can help it reach the right founders, operators, customers, and later-stage investors fast.",
  },
  {
    title: "Product",
    description:
      "We dig into product, positioning, and what actually ships. In markets flooded with capability, better product instinct and better taste are material advantages.",
  },
  {
    title: "Go-to-market",
    description:
      "Go-to-market is where taste meets leverage. We help create moments, intros, and storylines that compound mindshare rather than just checking a sales-process box.",
  },
  {
    title: "Fundraising",
    description:
      "There is more capital than ever, but not all of it is useful. We help sharpen the story, run a tighter process, and keep leverage when the round matters.",
  },
  {
    title: "Strategic inflection points",
    description:
      "Board pressure, pivots, financing crunches, M&A, and other existential moments. We are not interested in busywork. We are most useful when the stakes are high.",
  },
];

export default function HowWeHelp() {
  return (
    <section id="help" className="px-6 py-24 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">04 / How We Help</div>

          <div className="space-y-10">
            <p className="max-w-3xl text-lg leading-8 text-ink-soft">
              Founding and scaling a high-growth business is difficult. Anti
              Fund will not waste your time or generate busywork. We are a
              phone call or text message away when you want to dig into product,
              go-to-market, fundraising, and strategy.
            </p>

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
                Building something anti with differentiated technology or
                distribution advantages? Write to{" "}
                <a href="mailto:founders@antifund.com" className="paper-link">
                  founders@antifund.com
                </a>
                . Direct notes beat funnel-fill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
