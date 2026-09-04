import type { Metadata } from "next";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Purpose",
    body: [
      "Geoffrey Daily Operations is a private, owner-operated workspace that turns authorized schedule and correspondence signals into a daily operating view. It helps its owner review upcoming commitments, prepare for meetings, identify travel dependencies, and keep follow-up work current.",
      "The application is not offered as a public service. Access to the operating dashboard is limited to its authorized owner.",
    ],
  },
  {
    title: "Google data access",
    body: [
      "The application requests read-only access to Google Calendar, Gmail, and Google Drive. Calendar access is used to read event timing, titles, attendees, locations, conference details, descriptions, and linked attachments. Gmail access is used to find bounded, relevant context such as schedule changes, agendas, meeting preparation, and travel logistics. Drive access is limited to reading files linked from relevant Calendar events or Gmail messages.",
      "These permissions do not allow the application to create, edit, send, label, move, share, or delete content in Google services.",
    ],
  },
  {
    title: "Data boundaries",
    body: [
      "Source content is processed on a designated, owner-controlled computer. Raw Gmail message bodies, forwarded chains, and raw Drive document contents are not retained. The application stores encrypted structured operational facts and provenance needed to provide its owner-facing features, then publishes only privacy-filtered structured results to the private dashboard.",
      "Google user data is not sold, used for advertising, or used to train generalized artificial-intelligence or machine-learning models.",
    ],
  },
  {
    title: "Owner control",
    body: [
      "Each Google Account is connected through an explicit OAuth authorization. The owner can revoke access at any time from the Google Account permissions page. Revoked or unhealthy authorization fails closed: affected source reads stop until the owner authorizes them again.",
      "Questions about the application or its use of Google data may be sent to geoff@antifund.com.",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Geoffrey Daily Operations | Anti Fund",
  description:
    "Public information about Geoffrey Daily Operations and its read-only use of Google Calendar, Gmail, and Drive data.",
  openGraph: {
    title: "Geoffrey Daily Operations | Anti Fund",
    description:
      "A private, owner-operated schedule and meeting-preparation workspace.",
    url: "https://antifund.com/daily-operations",
  },
  twitter: {
    title: "Geoffrey Daily Operations | Anti Fund",
    description:
      "A private, owner-operated schedule and meeting-preparation workspace.",
  },
};

export default function DailyOperationsPage() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="overflow-x-hidden pt-28 md:pt-36">
        <section className="px-6 pb-16 md:px-10 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="border-y border-line py-10 md:py-14">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_260px]">
                <div>
                  <p className="paper-label mb-8">Private operations workspace</p>
                  <h1 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-[0] text-ink md:text-7xl lg:text-[5.5rem]">
                    Geoffrey Daily Operations
                  </h1>
                  <p className="mt-6 max-w-3xl text-xl leading-8 text-ink-soft md:text-2xl">
                    An owner-operated daily briefing for schedules, meeting
                    preparation, follow-ups, and travel dependencies.
                  </p>
                </div>

                <aside className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <dl className="space-y-6">
                    <div>
                      <dt className="paper-label">Maintained by</dt>
                      <dd className="mt-2 text-base leading-7 text-ink-soft">
                        Anti Fund
                      </dd>
                    </div>
                    <div>
                      <dt className="paper-label">Access</dt>
                      <dd className="mt-2 text-base leading-7 text-ink-soft">
                        Private and owner-authorized
                      </dd>
                    </div>
                    <div>
                      <dt className="paper-label">Google permissions</dt>
                      <dd className="mt-2 text-base leading-7 text-ink-soft">
                        Calendar, Gmail, and linked Drive files; read-only
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
              <a href="/daily-operations/privacy" className="paper-link text-base">
                Privacy policy
              </a>
              <a href="/daily-operations/terms" className="paper-link text-base">
                Terms of use
              </a>
              <a href="/" className="paper-link text-base">
                Anti Fund homepage
              </a>
            </nav>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
