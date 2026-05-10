type Pillar = {
  title: string;
  description: string;
  links?: Array<{
    label: string;
    href: string;
    type: "watch" | "read";
  }>;
};

const pillars: Pillar[] = [
  {
    title: "Product",
    description:
      "Product quality and positioning are inseparable. We pressure-test what should ship now, what should wait, and what will make the company feel inevitable.",
  },
  {
    title: "Go-to-market",
    description:
      "Go-to-market is not a slide. It is the moment the market decides whether to care. We help founders shape timing, narrative, and distribution that earns attention instead of renting it.",
  },
  {
    title: "Network",
    description:
      "Community at Anti Fund is built through work. Our summits, office visits, dinners, and working sessions are designed to create real trust, uncommon access, and useful collisions over time.",
    links: [
      {
        label: "Anti Fund Summit",
        href: "https://www.youtube.com/watch?v=BWx8F_YgVt4",
        type: "watch",
      },
      {
        label: "Another look at Anti Fund Summit",
        href: "https://www.youtube.com/watch?v=PIH2C-dLLUc",
        type: "watch",
      },
      {
        label: "48 hours with Anti Fund",
        href: "https://www.youtube.com/watch?v=4ND2P-HydlM",
        type: "watch",
      },
      {
        label: "The Profile: attention into ownership",
        href: "https://www.readtheprofile.com/p/jake-paul-logan-paul-billionaire-plan-investment",
        type: "read",
      },
    ],
  },
  {
    title: "Fundraising",
    description:
      "Great founders are rarely short on inbound capital. The edge is choosing the right counterparties, tightening the story, and creating leverage when the round matters.",
  },
  {
    title: "Strategy",
    description:
      "We stay close in consequential moments: product resets, senior hires, customer strategy, financing decisions, board pressure, and other forks in the road that define the company.",
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
              We are most useful when a founder needs leverage: a launch that
              has to matter, a round that has to clear, a senior hire that has
              to close, or a narrative that has to cut through noise.
            </p>

            <p className="max-w-3xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
              This is not a platform built for optics. We spend time where
              important companies are actually shaped: product decisions,
              launch timing, distribution strategy, fundraising pressure, and
              the moments where the next decision matters more than the next
              deck.
            </p>

            <div className="border-y border-line">
              {pillars.map((pillar, index) => {
                const links = pillar.links ?? [];
                const watchLinks = links.filter((link) => link.type === "watch");
                const readLinks = links.filter((link) => link.type === "read");

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
                      <div className="space-y-3 text-sm leading-6 text-ink-soft">
                        <LinkGroup label="Watch" links={watchLinks} />
                        <LinkGroup label="Read" links={readLinks} />
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
                Building something technically differentiated, culturally
                resonant, or impossible to ignore? Write to{" "}
                <a href="mailto:founders@antifund.com" className="paper-link">
                  founders@antifund.com
                </a>
                . Clear thinking beats generic outreach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkGroup({
  label,
  links,
}: {
  label: string;
  links: Array<{
    label: string;
    href: string;
    type: "watch" | "read";
  }>;
}) {
  if (!links.length) {
    return null;
  }

  return (
    <div className="space-y-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
        {label}
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
  );
}
