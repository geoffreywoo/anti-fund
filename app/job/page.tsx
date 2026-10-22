import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { openRoles } from "@/content/jobs";

const description =
  "Build the venture capital firm of the future at Anti Fund. Explore open roles in investing, technology, investor relations, and capital formation.";

export const metadata: Metadata = {
  title: "Careers | Anti Fund",
  description,
  alternates: { canonical: "https://antifund.com/job" },
  openGraph: {
    title: "Careers at Anti Fund",
    description,
    url: "https://antifund.com/job",
    siteName: "Anti Fund",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Anti Fund",
    description,
  },
};

export default function CareersPage() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="font-body pt-28 md:pt-32">
        <div className="px-5 pb-14 sm:px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-[66rem]">
            <header className="border-y border-line py-8 md:py-10">
              <p className="paper-label mb-6">Careers / Now hiring</p>
              <h1 className="max-w-[20ch] font-display text-[2.75rem] leading-[1.04] tracking-[-0.025em] text-ink sm:text-5xl md:text-6xl">
                Build the venture capital firm of the future.
              </h1>
              <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-ink-soft sm:text-lg">
                We’re building an enduring investment firm. Join a small team
                where technical judgment, original insight, and durable
                relationships compound.
              </p>
            </header>

            <section aria-labelledby="open-roles-title" className="mt-10">
              <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6">
                <h2 id="open-roles-title" className="section-heading">Open roles</h2>
                <p className="paper-label">{String(openRoles.length).padStart(2, "0")} positions</p>
              </div>
              <ul className="divide-y divide-line border-y border-line">
                {openRoles.map((role, index) => (
                  <li key={role.slug}>
                    <Link
                      href={`/job/${role.slug}`}
                      aria-label={`View role: ${role.title}`}
                      className="group grid gap-5 py-7 transition-colors hover:bg-paper-alt focus-visible:bg-paper-alt sm:py-8 lg:grid-cols-[40px_minmax(0,1fr)_230px] lg:gap-8"
                    >
                      <span aria-hidden="true" className="font-mono text-xs text-accent lg:pt-2">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-2xl leading-tight tracking-[-0.015em] text-ink transition-colors group-hover:text-accent sm:text-3xl">
                          {role.title}
                        </h3>
                        <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-ink-soft">
                          {role.summary}
                        </p>
                        <span className="mt-5 inline-flex min-h-11 items-center gap-4 text-sm font-medium text-accent">
                          View role <span aria-hidden="true">→</span>
                        </span>
                      </div>
                      <dl className="grid grid-cols-2 gap-5 border-t border-line pt-5 text-sm sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                        <div>
                          <dt className="paper-label">Level</dt>
                          <dd className="mt-1 text-ink">{role.level}</dd>
                          {role.levelNote && (
                            <dd className="mt-1 text-xs leading-relaxed text-ink-muted">{role.levelNote}</dd>
                          )}
                        </div>
                        <div>
                          <dt className="paper-label">Commitment</dt>
                          <dd className="mt-1 text-ink">{role.commitment}</dd>
                        </div>
                        {role.location && (
                          <div className="col-span-2 sm:col-span-1">
                            <dt className="paper-label">Location</dt>
                            <dd className="mt-1 text-ink">{role.location}</dd>
                          </div>
                        )}
                        {role.reportingLine && (
                          <div className="col-span-2 sm:col-span-1">
                            <dt className="paper-label">Reports to</dt>
                            <dd className="mt-1 text-ink">{role.reportingLine}</dd>
                          </div>
                        )}
                      </dl>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
