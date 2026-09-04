import Wordmark from "@/components/Wordmark";

const links = [
  { label: "X", href: "https://x.com/antifund" },
  { label: "Instagram", href: "https://instagram.com/antifund" },
  { label: "LinkedIn", href: "https://linkedin.com/company/antifund" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="px-5 pb-12 sm:px-6 sm:pb-16 md:px-10 md:pb-20 lg:px-14"
    >
      <div className="mx-auto max-w-6xl border-t border-line pt-6 sm:pt-8">
        <div className="mb-10 grid gap-6 sm:mb-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <h2 className="section-heading">
            The future doesn&apos;t wait for consensus. Neither do we.
          </h2>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-8 lg:flex-col lg:gap-4">
            <div>
              <p className="paper-label mb-1">Founders</p>
              <a href="mailto:founders@antifund.com" aria-label="Founder correspondence: founders@antifund.com" className="paper-link inline-flex min-h-11 items-center text-base">
                founders@antifund.com
              </a>
            </div>
            <div>
              <p className="paper-label mb-1">Limited partners</p>
              <a href="mailto:ir@antifund.com" aria-label="Limited partner correspondence: ir@antifund.com" className="paper-link inline-flex min-h-11 items-center text-base">
                ir@antifund.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
        <Wordmark className="text-[2rem] sm:text-[2.15rem]" />

        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-link font-mono text-[11px] uppercase tracking-[0.08em]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/manifesto"
              className="paper-link font-mono text-[11px] uppercase tracking-[0.08em]"
            >
              Manifesto
            </a>
            <a
              href="/legal"
              className="paper-link font-mono text-[11px] uppercase tracking-[0.08em]"
            >
              Legal
            </a>
            <span className="font-mono text-[11px] uppercase text-ink-muted">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
