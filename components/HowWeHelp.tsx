const pillars = [
  {
    title: "Network",
    description:
      "Our LP base includes Marc Andreessen, Chris Dixon, and Aquarian Holdings. Not Sand Hill handshakes — real operators.",
  },
  {
    title: "Product",
    description:
      "We've built products people use. We bring taste, urgency, and the founder's instinct for what ships and what doesn't.",
  },
  {
    title: "Go-to-Market",
    description:
      "Attention is our weapon. Distribution, partner intros — we accelerate the path from product to market dominance.",
  },
  {
    title: "Fundraising",
    description:
      "We co-invest with the best firms in venture. Strategy, pitch prep, intros, negotiation — we run the process alongside you.",
  },
  {
    title: "Inflection Points",
    description:
      "Board dynamics. M&A. Pivots. Existential decisions. We pick up the phone at midnight.",
  },
];

export default function HowWeHelp() {
  return (
    <section id="help" className="py-32 md:py-40 px-6 md:px-16 lg:px-24 relative">
      <div className="absolute top-0 left-0 w-[300px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl relative">
        <p className="font-mono text-xs text-gold tracking-[0.25em] uppercase mb-16">
          How We Help
        </p>

        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group grid md:grid-cols-[220px_1fr] gap-4 md:gap-12 py-10 border-b border-dark-tertiary/60 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-[10px] text-muted/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-[-0.02em] text-warm-white group-hover:text-gold transition-colors duration-300">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-warm-gray leading-[1.7] text-[15px]">
                {pillar.description}
              </p>
            </div>
          ))}

          <div
            id="contact"
            className="border-b border-dark-tertiary/60 py-8"
          >
            <a
              href="mailto:founders@antifund.com"
              className="group inline-flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] leading-[1.7] md:text-lg"
            >
              <span className="text-warm-gray">Building something anti?</span>
              <span
                aria-hidden="true"
                className="text-gold-gradient transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
              <span className="text-warm-white transition-colors duration-300 group-hover:text-gold">
                founders@antifund.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
