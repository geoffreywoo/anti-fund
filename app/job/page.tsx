import type { Metadata } from "next";
import Footer from "@/components/Footer";

const applicationHref =
  "mailto:job@antifund.com?subject=Member%20of%20Technical%20Staff%20%2F%20Associate";

const responsibilities = [
  {
    title: "A sourcing edge",
    description:
      "Build pipelines that surface technical founders and breakout companies before everyone else, using signals like GitHub activity, research papers, hiring, launches, traffic, and social data.",
  },
  {
    title: "Internal tools and agents",
    description:
      "Build our deal pipeline, research agents, diligence workflows, and memo tooling.",
  },
  {
    title: "Own the stats",
    description:
      "Keep company metrics, marks, fund data, and market comps across the portfolio in one source of truth.",
  },
  {
    title: "Research",
    description:
      "Go deep on our thesis areas and support technical diligence on live deals.",
  },
  {
    title: "Automate everything else",
    description:
      "Build automations for fund operations, portfolio monitoring, and reporting.",
  },
] as const;

const builderTraits = [
  "You vibecode an internal tool over a weekend because doing it by hand annoyed you.",
  "You try every new model and agent the week it ships, and have opinions on which ones are actually good.",
  "You enjoy trying new AI tools in the market, like ElevenLabs and Melius.",
  "You’d rather write a scraper than read 500 profiles manually.",
  "You go down a rabbit hole on a market and come back with the dataset nobody asked for that turns out to be the answer.",
  "You see a repetitive workflow and can’t stop thinking about how to automate it.",
] as const;

const requirements = [
  "A technical degree from a top university.",
  "2–4 years of experience in software engineering, data science, or a technical role at a startup, AI lab, or investment firm.",
  "Based in San Francisco or New York City only.",
  "A strong builder experimenting with the latest AI tools, who can build automations, agents, and workflows that people actually use.",
  "Comfortable with data and infrastructure: Python, SQL, APIs, scraping, databases, and cloud.",
  "High agency. Fast mover. Problem solver.",
] as const;

const description =
  "Join Anti Fund as a Member of Technical Staff / Associate. Build the data, tools, and agents behind the fund. Full time, based in San Francisco or New York City only.";

export const metadata: Metadata = {
  title: "Member of Technical Staff / Associate | Anti Fund",
  description,
  alternates: { canonical: "https://antifund.com/job" },
  openGraph: {
    title: "We’re hiring: Member of Technical Staff / Associate",
    description,
    url: "https://antifund.com/job",
    siteName: "Anti Fund",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We’re hiring: Member of Technical Staff / Associate",
    description,
  },
};

export default function JobPage() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="font-body pt-28 md:pt-32">
        <article className="px-5 pb-14 sm:px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-[66rem]">
            <header className="border-y border-line py-8 md:py-10">
              <p className="paper-label mb-6">Careers / Now hiring</p>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-12">
                <div>
                  <h1 className="max-w-[18ch] font-display text-[2.75rem] leading-[1.04] tracking-[-0.025em] text-ink sm:text-5xl md:text-6xl">
                    Member of Technical Staff
                  </h1>
                  <p className="mt-4 text-lg font-medium text-accent">Associate at Anti Fund</p>
                  <p className="mt-6 font-display text-2xl leading-tight text-ink sm:text-3xl">
                    Build the machine behind the fund.
                  </p>
                  <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-ink-soft sm:text-lg">
                    The data, tools, and agents that help us operate, research,
                    find exceptional founders first, and run the firm with a
                    fraction of the usual headcount.
                  </p>
                </div>
                <aside aria-label="Role details" className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <dl className="grid grid-cols-2 gap-5 lg:grid-cols-1">
                    <div>
                      <dt className="paper-label">Level</dt>
                      <dd className="mt-1 text-base text-ink">Associate</dd>
                    </div>
                    <div>
                      <dt className="paper-label">Commitment</dt>
                      <dd className="mt-1 text-base text-ink">Full time</dd>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <dt className="paper-label">Location</dt>
                      <dd className="mt-1 text-base leading-relaxed text-ink">San Francisco or New York City only</dd>
                    </div>
                  </dl>
                  <a href={applicationHref} className="mt-6 inline-flex min-h-11 items-center justify-center gap-5 bg-accent px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink">
                    Apply by email <span aria-hidden="true">↗</span>
                  </a>
                  <p className="mt-3 text-sm text-ink-muted">job@antifund.com</p>
                </aside>
              </div>
            </header>

            <section aria-labelledby="responsibilities-title" className="section-frame mt-10">
              <p className="paper-label">01 / The work</p>
              <div>
                <h2 id="responsibilities-title" className="section-heading">What you’ll build.</h2>
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

            <section aria-labelledby="builder-title" className="section-frame mt-10">
              <p className="paper-label">02 / Who you are</p>
              <div>
                <h2 id="builder-title" className="section-heading">A builder first.</h2>
                <p className="section-lede">This role is for you if you’re the type who can’t leave it alone.</p>
                <ul className="mt-5 max-w-[65ch] list-disc space-y-3 pl-5 text-base leading-relaxed text-ink-soft marker:text-accent">
                  {builderTraits.map((trait) => <li key={trait} className="pl-1">{trait}</li>)}
                </ul>
              </div>
            </section>

            <section aria-labelledby="requirements-title" className="section-frame mt-10">
              <p className="paper-label">03 / Requirements</p>
              <div>
                <h2 id="requirements-title" className="section-heading">What we look for.</h2>
                <ul className="mt-5 max-w-[65ch] list-disc space-y-3 pl-5 text-base leading-relaxed text-ink-soft marker:text-accent">
                  {requirements.map((requirement) => <li key={requirement} className="pl-1">{requirement}</li>)}
                </ul>
                <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-ink-soft">
                  <span className="font-medium text-accent">Bonus:</span> interest in investing, or exposure to robotics, defense, or energy.
                </p>
              </div>
            </section>

            <section aria-labelledby="apply-title" className="mt-10 bg-accent px-6 py-8 text-paper sm:px-8 md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.08em]">Looking for outliers. Step into the ring.</p>
              <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-12">
                <div>
                  <h2 id="apply-title" className="max-w-[24ch] font-display text-3xl leading-tight sm:text-4xl">Show us something you’ve built.</h2>
                  <p className="mt-4 max-w-[58ch] text-base leading-relaxed">
                    A repo, a portfolio, a demo, a tool, or a short video
                    walkthrough. Send it with your resume and a brief note on
                    why you’re the right fit.
                  </p>
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
