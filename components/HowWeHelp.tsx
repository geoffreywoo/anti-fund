const pillars = [
  {
    title: "Network",
    description:
      "Our LP base includes Marc Andreessen, Chris Dixon, and Aquarian Holdings. Not Sand Hill handshakes, real operators.",
  },
  {
    title: "Product",
    description:
      "We've built products people use. We bring taste, urgency, and a founder's instinct for what ships and what does not.",
  },
  {
    title: "Go-to-Market",
    description:
      "Attention is our weapon. Distribution and partner introductions accelerate the path from product to market dominance.",
  },
  {
    title: "Fundraising",
    description:
      "We co-invest with the best firms in venture. Strategy, pitch preparation, introductions, and negotiation happen alongside you.",
  },
  {
    title: "Inflection Points",
    description:
      "Board dynamics. M&A. Pivots. Existential decisions. We pick up the phone when the stakes are highest.",
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
                Building something anti? Write to{" "}
                <a href="mailto:founders@antifund.com" className="paper-link">
                  founders@antifund.com
                </a>
                . We prefer direct notes over funnels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
