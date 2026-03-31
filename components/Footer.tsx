const links = [
  { label: "X", href: "https://x.com/antifund" },
  { label: "Instagram", href: "https://instagram.com/antifund" },
  { label: "LinkedIn", href: "https://linkedin.com/company/antifund" },
];

export default function Footer() {
  return (
    <footer className="px-6 pb-20 pt-12 md:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl border-t border-line pt-8">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <div>
            <p className="paper-label mb-4">Disclosures</p>
            <p className="max-w-3xl text-sm leading-7 text-ink-muted">
              Anti Fund Management, LLC and its affiliates do not provide tax,
              legal, or accounting advice. This material should not be relied on
              for tax, legal, or accounting advice. Past performance is not
              indicative of future results. Any investment involves risk and may
              result in losses.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="paper-label mb-2">For founders</p>
              <a href="mailto:founders@antifund.com" className="paper-link text-base">
                founders@antifund.com
              </a>
            </div>

            <div>
              <p className="paper-label mb-2">For investors</p>
              <a href="mailto:ir@antifund.com" className="paper-link text-base">
                ir@antifund.com
              </a>
            </div>

            <div>
              <p className="paper-label mb-2">External references</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-link font-mono text-[11px] uppercase tracking-[0.14em]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <span className="font-display text-2xl tracking-[-0.04em] text-ink">
            ANTI FUND
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            &copy; {new Date().getFullYear()} / Memorandum edition
          </p>
        </div>
      </div>
    </footer>
  );
}
