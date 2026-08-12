import type { Metadata } from "next";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Application",
    body: [
      "Geoffrey Daily Operations is a private, owner-operated application maintained by Anti Fund. It is not offered for public registration or general commercial use.",
    ],
  },
  {
    title: "Authorized use",
    body: [
      "The application may access a Google Account only after its owner provides explicit OAuth consent. Users must connect only accounts and data they are authorized to access. Access may be revoked at any time through Google Account permissions.",
    ],
  },
  {
    title: "Read-only operation",
    body: [
      "Google Calendar, Gmail, and Google Drive access is read-only. The application does not create, edit, send, label, move, share, or delete content in those services.",
    ],
  },
  {
    title: "Availability",
    body: [
      "The application and its outputs are provided on an as-is and as-available basis. Source delays, revoked authorization, connectivity failures, and incomplete source data may make information unavailable or stale. The application is designed to label degraded source health and stop recommendations when required data is unsafe or unavailable.",
    ],
  },
  {
    title: "No professional advice",
    body: [
      "Operational summaries and recommendations are informational aids for the owner. They do not constitute legal, financial, tax, medical, or other professional advice.",
    ],
  },
  {
    title: "Third-party services",
    body: [
      "The application depends on services provided by Google and private dashboard infrastructure. Those services are governed by their own terms and may change or become unavailable independently of Anti Fund.",
    ],
  },
  {
    title: "Changes and contact",
    body: [
      "These terms may be updated as the application or applicable requirements change. Questions may be sent to geoff@antifund.com.",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Daily Operations Terms of Use | Anti Fund",
  description: "Terms of use for Geoffrey Daily Operations.",
  openGraph: {
    title: "Daily Operations Terms of Use | Anti Fund",
    description: "Terms governing the private Geoffrey Daily Operations application.",
    url: "https://antifund.com/daily-operations/terms",
  },
  twitter: {
    title: "Daily Operations Terms of Use | Anti Fund",
    description: "Terms governing the private Geoffrey Daily Operations application.",
  },
};

export default function DailyOperationsTermsPage() {
  return (
    <main className="overflow-x-hidden pt-28 md:pt-36">
      <section className="px-6 pb-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="border-y border-line py-10 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_260px]">
              <div>
                <p className="paper-label mb-8">
                  Geoffrey Daily Operations / effective August 10, 2026
                </p>
                <h1 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-[0] text-ink md:text-7xl lg:text-[5.5rem]">
                  Terms of use
                </h1>
                <p className="mt-6 max-w-3xl text-xl leading-8 text-ink-soft md:text-2xl">
                  Terms governing this private, owner-operated application.
                </p>
              </div>

              <aside className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <dl className="space-y-6">
                  <div>
                    <dt className="paper-label">Application</dt>
                    <dd className="mt-2 text-base leading-7 text-ink-soft">
                      Geoffrey Daily Operations
                    </dd>
                  </div>
                  <div>
                    <dt className="paper-label">Maintained by</dt>
                    <dd className="mt-2 text-base leading-7 text-ink-soft">
                      Anti Fund
                    </dd>
                  </div>
                  <div>
                    <dt className="paper-label">Application page</dt>
                    <dd className="mt-2 text-base text-ink">
                      <a href="/daily-operations" className="paper-link">
                        View app information
                      </a>
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>

          <div className="mt-12 grid gap-8">
            {sections.map((section, index) => (
              <section
                key={section.title}
                className="border-t border-line pt-6 md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-8"
              >
                <div className="paper-label">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[0] text-ink md:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-ink-soft md:text-lg">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          <nav
            aria-label="Daily Operations policies"
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-y border-line py-7"
          >
            <a href="/daily-operations" className="paper-link text-base">
              App information
            </a>
            <a href="/daily-operations/privacy" className="paper-link text-base">
              Privacy policy
            </a>
          </nav>
        </div>
      </section>

      <Footer />
    </main>
  );
}
