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
    <section id="thesis" className="py-32 md:py-40 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <p className="font-mono text-xs text-gold tracking-[0.25em] uppercase mb-16">
          What We Believe
        </p>

        <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-[-0.03em] mb-20 text-warm-white">
          The best founders are{" "}
          <span className="text-gold-gradient">&ldquo;anti&rdquo;</span> by
          definition. Their companies must be highly disruptive to the status
          quo.
        </blockquote>

        <hr className="hr-gradient mb-16" />

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="text-lg text-warm-gray leading-[1.7] tracking-[-0.01em]">
              <span className="text-warm-white font-medium">
                Capital is a commodity.
              </span>{" "}
              Attention is not. Every fund can wire money. Very few can move
              markets with a phone call, a post, or a co-sign. We can.
            </p>
          </div>
          <div>
            <p className="text-lg text-warm-gray leading-[1.7] tracking-[-0.01em]">
              <span className="text-warm-white font-medium">
                We don&apos;t spray and pray.
              </span>{" "}
              We concentrate our portfolio in a small number of companies we
              believe can reshape industries. Every dollar we deploy has a thesis
              behind it.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {antiList.map((item) => (
            <span
              key={item}
              className="inline-flex min-h-[36px] items-center border border-dark-tertiary px-5 py-2.5 text-sm font-mono text-muted hover:border-gold hover:text-gold transition-all duration-300 cursor-default hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
