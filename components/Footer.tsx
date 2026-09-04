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
      className="px-5 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-10 md:px-10 md:pb-20 md:pt-12 lg:px-14"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-line pt-5 sm:gap-6 sm:pt-6 md:flex-row md:items-end md:justify-between">
        <Wordmark className="text-[2rem] sm:text-[2.15rem]" />

        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="mailto:founders@antifund.com"
              aria-label="Founder correspondence"
              className="paper-link font-mono text-[11px] uppercase tracking-[0.12em]"
            >
              Founders
            </a>
            <a
              href="mailto:ir@antifund.com"
              aria-label="Limited partner correspondence"
              className="paper-link font-mono text-[11px] uppercase tracking-[0.12em]"
            >
              LPs
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-link font-mono text-[11px] uppercase tracking-[0.12em]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/manifesto"
              className="paper-link font-mono text-[11px] uppercase tracking-[0.12em]"
            >
              Manifesto
            </a>
            <a
              href="/legal"
              className="paper-link font-mono text-[11px] uppercase tracking-[0.12em]"
            >
              Legal
            </a>
            <span className="font-mono text-[11px] uppercase text-ink-muted">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
