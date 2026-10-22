import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

const applicationHref = "mailto:job@antifund.com?subject=%5Bcapital%5D";

const responsibilities = [
  {
    title: "Build and convert the LP pipeline",
    description:
      "Identify prospective LPs whose mandates fit Anti Fund. Develop relationships across endowments, foundations, funds of funds, family offices, and other institutional investors. Understand each allocator’s priorities, decision process, and timing. Turn promising conversations into specific next steps and commitments.",
  },
  {
    title: "Own fundraising execution",
    description:
      "Work alongside our partners to move relationships from introduction through diligence and closing. Lead meeting preparation, follow-ups, diligence responses, and pipeline tracking. Know who needs what, what is blocking a decision, and how to move it forward.",
  },
  {
    title: "Make the investment case",
    description:
      "Translate our strategy, portfolio, and performance into clear, compelling materials. Build presentations, prepare investor updates, and answer difficult allocator questions. Understand the numbers behind the narrative and communicate the risks as clearly as the opportunity.",
  },
  {
    title: "Contribute to portfolio management",
    description:
      "Track company performance, financing activity, valuations, and fund-level exposures. Support portfolio construction, reserve planning, and follow-on analysis. Bring an allocator’s perspective to how individual investments fit together and how we measure results.",
  },
  {
    title: "Build the systems",
    description:
      "Create reliable processes for investor relationships, fundraising data, reporting, and portfolio information. Use AI and automation to improve speed and accuracy. Build infrastructure that scales without adding unnecessary complexity.",
  },
] as const;

const traits = [
  "You understand how investment committees make decisions and what evidence they need.",
  "You bring a strong LP network built on real relationships and professional credibility.",
  "You can distinguish genuine allocation interest from a good meeting.",
  "You are equally comfortable in an investor conversation, a portfolio model, and a diligence process.",
  "You are precise with numbers, clear in writing, and disciplined about follow-through.",
  "You want to build, not inherit, an established fundraising machine.",
] as const;

const requirements = [
  "Experience at a fund of funds, endowment, foundation, or another institutional allocator.",
  "Firsthand knowledge of manager selection, investment diligence, and institutional allocation processes.",
  "Strong analytical skills and fluency in fund performance and portfolio data.",
  "Excellent communication skills and the ability to build trust with sophisticated investors.",
  "Sound judgment, discretion, and careful handling of confidential information.",
  "Genuine interest in technology, venture investing, and building an investment firm.",
] as const;

const description =
  "Build Anti Fund’s capital base through fundraising and institutional LP relationships. Full-time Investor Relations & Capital Formation role at Principal or Managing Director level, reporting directly to the Managing Partners.";

export const metadata: Metadata = {
  title: "Investor Relations & Capital Formation | Anti Fund",
  description,
  alternates: { canonical: "https://antifund.com/job/capital" },
  openGraph: {
    title: "We’re hiring: Investor Relations & Capital Formation",
    description,
    url: "https://antifund.com/job/capital",
    siteName: "Anti Fund",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We’re hiring: Investor Relations & Capital Formation",
    description,
  },
};

export default function CapitalJobPage() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="font-body pt-28 md:pt-32">
        <article className="px-5 pb-14 sm:px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-[66rem]">
            <Link href="/job" className="paper-link mb-6 inline-flex min-h-11 items-center gap-2 text-sm">
              <span aria-hidden="true">←</span> All roles
            </Link>
            <header className="border-y border-line py-8 md:py-10">
              <p className="paper-label mb-6">Careers / Now hiring</p>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-12">
                <div>
                  <h1 className="max-w-[18ch] font-display text-[2.75rem] leading-[1.04] tracking-[-0.025em] text-ink sm:text-5xl md:text-6xl">
                    Investor Relations &amp; Capital Formation
                  </h1>
                  <p className="mt-4 text-lg font-medium text-accent">Full-time at Anti Fund</p>
                </div>
                <aside aria-label="Role details" className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <dl className="space-y-5">
                    <div>
                      <dt className="paper-label">Level</dt>
                      <dd className="mt-1 text-base text-ink">Principal or Managing Director</dd>
                      <dd className="mt-1 text-sm leading-relaxed text-ink-muted">Depending on experience and skillset</dd>
                    </div>
                    <div>
                      <dt className="paper-label">Commitment</dt>
                      <dd className="mt-1 text-base text-ink">Full time</dd>
                    </div>
                    <div>
                      <dt className="paper-label">Reports directly to</dt>
                      <dd className="mt-1 text-base text-ink">Managing Partners</dd>
                    </div>
                  </dl>
                  <a href={applicationHref} className="mt-6 inline-flex min-h-11 items-center justify-center gap-5 bg-accent px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink">
                    Apply by email <span aria-hidden="true">↗</span>
                  </a>
                  <p className="mt-3 text-sm text-ink-muted">Subject: [capital]</p>
                </aside>
              </div>
            </header>

            <section aria-labelledby="ambition-title" className="section-frame mt-10">
              <p className="paper-label">01 / The ambition</p>
              <div>
                <h2 id="ambition-title" className="section-heading">Build the capital base for an enduring investment firm.</h2>
                <div className="mt-5 max-w-[65ch] space-y-4 text-base leading-relaxed text-ink-soft">
                  <p>Anti Fund’s ambition is to become a $100B+ asset manager for a new generation. Getting there requires exceptional investments, durable relationships, and capital partners who understand what we are building.</p>
                  <p>We are hiring a dedicated investor relations and capital formation professional to work closely with our partners to accelerate fundraising, deepen our institutional relationships, and help build the firm.</p>
                  <p>Your primary responsibility is to turn investor interest into long-term capital partnerships. You will also contribute to portfolio management, connecting our underlying investments to portfolio construction, performance, and how we communicate with LPs.</p>
                  <p>We want someone who understands how institutional allocators think because they have done the work themselves. Someone who can evaluate a manager, articulate an investment case, and earn the trust of sophisticated capital partners.</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="responsibilities-title" className="section-frame mt-10">
              <p className="paper-label">02 / The work</p>
              <div>
                <h2 id="responsibilities-title" className="section-heading">Build lasting capital partnerships.</h2>
                <ol className="mt-6 divide-y divide-line">
                  {responsibilities.map((item, index) => (
                    <li key={item.title} className="grid grid-cols-[24px_minmax(0,1fr)] gap-4 py-5 first:pt-0 last:pb-0 sm:gap-6">
                      <span aria-hidden="true" className="font-mono pt-1 text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="text-lg font-medium text-ink">{item.title}</h3>
                        <p className="mt-2 max-w-[65ch] text-base leading-relaxed text-ink-soft">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section aria-labelledby="traits-title" className="section-frame mt-10">
              <p className="paper-label">03 / Who you are</p>
              <div>
                <h2 id="traits-title" className="section-heading">An allocator’s judgment. An operator’s follow-through.</h2>
                <ul className="mt-5 max-w-[65ch] list-disc space-y-3 pl-5 text-base leading-relaxed text-ink-soft marker:text-accent">
                  {traits.map((trait) => <li key={trait} className="pl-1">{trait}</li>)}
                </ul>
              </div>
            </section>

            <section aria-labelledby="requirements-title" className="section-frame mt-10">
              <p className="paper-label">04 / Requirements</p>
              <div>
                <h2 id="requirements-title" className="section-heading">What we look for.</h2>
                <ul className="mt-5 max-w-[65ch] list-disc space-y-3 pl-5 text-base leading-relaxed text-ink-soft marker:text-accent">
                  {requirements.map((requirement) => <li key={requirement} className="pl-1">{requirement}</li>)}
                </ul>
                <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-ink-soft">Fundraising, investor relations, or portfolio-management experience is valuable. We also welcome allocators ready to move to the manager side.</p>
              </div>
            </section>

            <section aria-labelledby="apply-title" className="mt-10 bg-accent px-6 py-8 text-paper sm:px-8 md:p-10">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-12">
                <div>
                  <h2 id="apply-title" className="font-display text-3xl leading-tight sm:text-4xl">Apply</h2>
                  <p className="mt-4 max-w-[58ch] text-base leading-relaxed">Send your cover letter and resume to job@antifund.com with [capital] in the subject line.</p>
                </div>
                <div className="self-end">
                  <a href={applicationHref} className="inline-flex min-h-11 items-center gap-3 border-b border-paper pb-1 font-display text-2xl transition-opacity hover:opacity-80 focus-visible:outline-paper!">
                    job@antifund.com <span aria-hidden="true" className="font-body text-lg">↗</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
