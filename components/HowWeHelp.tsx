type Pillar = {
  title: string;
  description: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
};

const pillars: Pillar[] = [
  {
    title: "Product",
    description:
      "Product relies on good taste. We dig into the actual product, positioning, and what should ship now versus later.",
  },
  {
    title: "Go-to-market",
    description:
      "The market is noisy. We help founders shape launch moments, narrative, and distribution so the company earns mindshare, not just meetings.",
  },
  {
    title: "Network",
    description:
      "Community at Anti Fund is built through work. Summits, office visits, executive dinners, and working sessions create durable trust, access, and deal flow over time.",
    links: [
      {
        label: "Anti Fund Summit",
        href: "https://www.youtube.com/watch?v=BWx8F_YgVt4",
      },
      {
        label: "Another look at Anti Fund Summit",
        href: "https://www.youtube.com/watch?v=PIH2C-dLLUc",
      },
      {
        label: "48 hours with Anti Fund",
        href: "https://www.youtube.com/watch?v=4ND2P-HydlM",
      },
    ],
  },
  {
    title: "Fundraising",
    description:
      "Top founders are not short on capital. We help sharpen the story, win the right partners, and use differentiated access as leverage when the round matters.",
  },
  {
    title: "Strategy",
    description:
      "We stay close when the stakes are high: pivots, key hires, customer strategy, financing crunches, board pressure, and other existential decisions.",
  },
];

export default function HowWeHelp() {
  return (
    <section id="help" className="px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">04 / Platform</div>

          <div className="space-y-10">
            <p className="max-w-3xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
              Community at Anti Fund is built through work. We are physically
              present and consistently on the ground with founders, operators,
              and decision makers. Founding and scaling a high-growth business
              is difficult, so we do not want to waste your time with busywork.
            </p>

            <p className="max-w-3xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
              Instead, we are a phone call or text message away when you want
              to dig into product, go-to-market, fundraising, and strategy.
              The work compounds into durable relationships, trust, and access.
            </p>

            <div className="border-y border-line">
              {pillars.map((pillar, index) => {
                const links = pillar.links ?? [];

                return (
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
                  <div className="space-y-3">
                    <p className="text-base leading-7 text-ink-soft">
                      {pillar.description}
                    </p>
                    {links.length ? (
                      <div className="space-y-2 text-sm leading-6 text-ink-soft">
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                          Watch
                        </span>
                        <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
                          {links.map((link, linkIndex) => (
                            <span key={link.href} className="inline-flex max-w-full items-center gap-3">
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="paper-link"
                              >
                                {link.label}
                              </a>
                              {linkIndex < links.length - 1 ? (
                                <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted sm:inline">
                                  /
                                </span>
                              ) : null}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                );
              })}
            </div>

            <div id="contact" className="border border-line bg-paper-alt px-5 py-5 sm:px-6 sm:py-6">
              <p className="paper-label mb-3">Correspondence</p>
              <p className="text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
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
