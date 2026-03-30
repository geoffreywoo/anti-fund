export default function Footer() {
  return (
    <footer className="py-24 px-6 md:px-16 lg:px-24">
      <hr className="hr-gradient mb-20" />

      <div className="max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            <span className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-gold-gradient">
              ANTI FUND
            </span>
            <p className="text-muted text-sm mt-3 max-w-xs">
              The future belongs to the founders who refuse to accept the
              present.
            </p>
          </div>
          <div className="flex gap-8">
            {[
              { label: "X", href: "https://x.com/antifund" },
              {
                label: "Instagram",
                href: "https://instagram.com/antifund",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/company/antifund",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mb-12 space-y-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-dim">
              For founders
            </span>
            <a
              href="mailto:founders@antifund.com"
              className="group inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-sm transition-colors duration-300"
            >
              <span className="text-warm-gray">Building something anti?</span>
              <span
                aria-hidden="true"
                className="text-gold-gradient transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
              <span className="font-mono text-warm-white group-hover:text-gold">
                founders@antifund.com
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-dim">
              For investors
            </span>
            <a
              href="mailto:ir@antifund.com"
              className="font-mono text-xs text-muted hover:text-gold transition-colors duration-300"
            >
              ir@antifund.com
            </a>
          </div>
        </div>

        <p className="text-[11px] text-muted/40 leading-relaxed max-w-2xl">
          Anti Fund Management, LLC and its affiliates do not provide tax, legal,
          or accounting advice. This material is not intended to provide, and
          should not be relied on for, tax, legal, or accounting advice. Past
          performance is not indicative of future results. Any investment
          involves risk and may result in losses.
        </p>

        <p className="text-[11px] text-muted/30 mt-4 font-mono">
          &copy; {new Date().getFullYear()} Anti Fund
        </p>
      </div>
    </footer>
  );
}
