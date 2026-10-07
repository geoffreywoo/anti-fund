import Image from "next/image";
import FAQ from "@/components/FAQ";
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
      className="font-body px-5 pb-12 sm:px-6 sm:pb-16 md:px-10 md:pb-20 lg:px-14"
    >
      <div className="mx-auto max-w-6xl border-t border-line pt-6 sm:pt-8">
        <div className="mb-8 grid gap-8 sm:mb-10 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-8">
          <h2 className="paper-label">Contact</h2>
          <div>
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
              <div id="help" aria-labelledby="founders-title">
                <h3 id="founders-title" className="text-lg font-medium text-ink">For founders</h3>
                <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-ink-soft">
                  Tell us what you&apos;re building, why it matters, and what you see that others don&apos;t. Send a deck or product link.
                </p>
                <a href="mailto:founders@antifund.com" aria-label="Founder correspondence: founders@antifund.com" className="paper-link mt-3 inline-flex min-h-11 items-center text-base">
                  founders@antifund.com
                </a>
              </div>
              <div id="investors" aria-labelledby="investors-title">
                <h3 id="investors-title" className="text-lg font-medium text-ink">For limited partners</h3>
                <dl className="mt-3 space-y-3 text-[15px] leading-relaxed">
                  <div>
                    <dt className="font-medium text-ink">Venture</dt>
                    <dd className="text-ink-soft">Pre-seed &amp; seed. Technical founders at formation.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink">Growth &amp; opportunities</dt>
                    <dd className="text-ink-soft">Growth &amp; pre-IPO. Concentrated positions in category leaders.</dd>
                  </div>
                </dl>
                <a href="mailto:ir@antifund.com" aria-label="Limited partner correspondence: ir@antifund.com" className="paper-link mt-3 inline-flex min-h-11 items-center text-base">
                  ir@antifund.com
                </a>
              </div>
            </div>
            <details id="faq" className="disclosure mt-7 border-t border-line">
              <summary>Common questions</summary>
              <FAQ />
            </details>
          </div>
        </div>
        <div className="flex flex-col gap-5 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-3">
          <Wordmark className="text-[2rem] sm:text-[2.15rem]" />
          <Image src="/logo.png" alt="" width={48} height={40} className="h-auto w-12" />
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-link font-mono text-xs uppercase tracking-[0.08em]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/manifesto"
              className="paper-link font-mono text-xs uppercase tracking-[0.08em]"
            >
              Manifesto
            </a>
            <a
              href="/job"
              className="paper-link font-mono text-xs uppercase tracking-[0.08em]"
            >
              Jobs
            </a>
            <a
              href="/legal"
              className="paper-link font-mono text-xs uppercase tracking-[0.08em]"
            >
              Legal
            </a>
            <span className="font-mono text-xs uppercase text-ink-muted">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
