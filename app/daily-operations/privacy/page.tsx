import type { Metadata } from "next";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Scope",
    body: [
      "This policy describes how Geoffrey Daily Operations accesses, uses, stores, and shares Google user data. The application is a private operating tool maintained by Anti Fund for its authorized owner.",
    ],
  },
  {
    title: "Data accessed",
    body: [
      "Google Calendar: event timing, titles, attendees, response status, locations, conference details, descriptions, and attachment references needed for scheduling and meeting preparation.",
      "Gmail: messages and attachments returned by bounded queries for relevant schedule changes, meeting agendas, preparation context, follow-ups, and travel logistics.",
      "Google Drive: files directly linked from relevant Calendar events or Gmail messages when those files are needed for meeting preparation or travel operations.",
    ],
  },
  {
    title: "How data is used",
    body: [
      "Google user data is used only to provide owner-facing daily scheduling, meeting preparation, attendee context, follow-up, and travel-dependency features. The application requests read-only scopes and does not create, edit, send, label, move, share, or delete Google content.",
      "Google user data is not used for advertising, sold, or used to train generalized artificial-intelligence or machine-learning models.",
    ],
  },
  {
    title: "Processing and storage",
    body: [
      "Source data is processed on a designated, owner-controlled computer. Raw Gmail message bodies, snippets, forwarded chains, transcripts, and raw Drive document contents are not retained after bounded processing. The application retains encrypted structured operational facts, source references, authorization health, and delivery metadata needed to provide and audit its owner-facing features.",
      "Structured records are subject to scheduled retention and privacy compaction. Operational jobs are normally retained for 30 days, delivery records for at least 60 days to prevent duplicates, and schedule occurrences for up to 400 days to support continuity and audit. Public professional research used for attendee context is cached for seven days. Encrypted backups and logs are rotated under the application's operations policy.",
    ],
  },
  {
    title: "Sharing and disclosure",
    body: [
      "Privacy-filtered structured results may be transmitted to the private, owner-only Geoffrey Daily Operations dashboard and, when separately enabled by the owner, to the owner's Messages account. The application does not disclose Google user data to advertisers, data brokers, or unrelated third parties.",
      "Service providers may process the minimum data necessary to operate the private dashboard and its infrastructure under their applicable terms. Google user data is not transferred for unrelated purposes.",
    ],
  },
  {
    title: "Security",
    body: [
      "OAuth credentials and refresh tokens are stored outside source control in the designated computer's protected credential store. Structured local records are encrypted at rest. Cloud-bound payloads pass through a privacy sanitizer that rejects raw correspondence, contact details, passcodes, reservation codes, transcripts, and secret material. Authorization and output failures default to a closed state.",
    ],
  },
  {
    title: "Control and deletion",
    body: [
      "The owner may revoke the application's Google access at any time from the Google Account permissions page. Revocation stops further reads for that account. The owner may also request deletion of retained account-specific structured context by contacting geoff@antifund.com; the application provides an explicit local purge operation for this purpose.",
    ],
  },
  {
    title: "Google API Limited Use",
    body: [
      "Geoffrey Daily Operations' use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.",
    ],
  },
  {
    title: "Changes and contact",
    body: [
      "This policy may be updated when the application's data practices or legal requirements change. The effective date shown on this page will be revised when material changes are published.",
      "Questions or deletion requests may be sent to geoff@antifund.com.",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Daily Operations Privacy Policy | Anti Fund",
  description:
    "Privacy policy for Geoffrey Daily Operations and its use of Google user data.",
  openGraph: {
    title: "Daily Operations Privacy Policy | Anti Fund",
    description:
      "How Geoffrey Daily Operations accesses, uses, stores, and shares Google user data.",
    url: "https://antifund.com/daily-operations/privacy",
  },
  twitter: {
    title: "Daily Operations Privacy Policy | Anti Fund",
    description:
      "How Geoffrey Daily Operations accesses, uses, stores, and shares Google user data.",
  },
};

export default function DailyOperationsPrivacyPage() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="overflow-x-hidden pt-28 md:pt-36">
        <section className="px-6 pb-16 md:px-10 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="border-y border-line py-10 md:py-14">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_260px]">
                <div>
                  <p className="paper-label mb-8">
                    Geoffrey Daily Operations / effective August 10, 2026
                  </p>
                  <h1 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-[0] text-ink md:text-7xl lg:text-[5.5rem]">
                    Privacy policy
                  </h1>
                  <p className="mt-6 max-w-3xl text-xl leading-8 text-ink-soft md:text-2xl">
                    A plain-language account of how this private application
                    handles Google user data.
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
                      {section.title === "Google API Limited Use" ? (
                        <p>
                          <a
                            href="https://developers.google.com/terms/api-services-user-data-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="paper-link"
                          >
                            Google API Services User Data Policy
                          </a>
                        </p>
                      ) : null}
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
              <a href="/daily-operations/terms" className="paper-link text-base">
                Terms of use
              </a>
            </nav>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
