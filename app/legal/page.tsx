import type { Metadata } from "next";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Terms of Use",
    body: [
      "Your access to and use of this website, including all text, images, materials, and information made available here, is subject to these terms. By using this website, you agree to them.",
    ],
  },
  {
    title: "Who We Are",
    body: [
      "This website is maintained and operated by Anti Fund Investment Fund LLC. References on this website to “Anti Fund,” “we,” “our,” or similar terms may describe the firm generally, but the relevant activities may be conducted by one or more separate Anti Fund-related entities or vehicles.",
    ],
  },
  {
    title: "Materials and Information",
    body: [
      "The materials on this website are provided for general informational purposes only. They may be incomplete, selective, summary in nature, or based in part on information from third parties that has not been independently verified by Anti Fund.",
      "Anti Fund may also be subject to confidentiality obligations to portfolio companies, funds, investors, counterparties, and other third parties. As a result, descriptions on this website may omit information that would otherwise be relevant to a full understanding of a topic.",
    ],
  },
  {
    title: "No Offer, Solicitation, or Advice",
    body: [
      "Nothing on this website constitutes an offer to sell, or a solicitation of an offer to buy, any security, fund interest, or other financial instrument. Nothing on this website is intended to provide investment, legal, tax, accounting, or other professional advice, and nothing here should be used as the basis for any investment decision.",
      "Any offer relating to an Anti Fund-sponsored investment vehicle will be made only through definitive offering documents, and only to persons who satisfy applicable legal and eligibility requirements. This website is not directed to prospective investors in any Anti Fund fund or vehicle.",
    ],
  },
  {
    title: "Portfolio Companies, Testimonials, and Forward-Looking Statements",
    body: [
      "Any portfolio companies, founder quotes, case references, or other examples appearing on this website are illustrative only. They do not represent all investments made by Anti Fund vehicles, and no inference should be made that any referenced investment or company was or will be profitable.",
      "Past performance is not indicative of future results. Any statements regarding future events, outcomes, or market conditions reflect views as of the date made, are subject to change without notice, and may not prove to be accurate.",
    ],
  },
  {
    title: "Third-Party Sites",
    body: [
      "This website may link to third-party websites or resources. Anti Fund does not control those sites and is not responsible for their content, accuracy, availability, or security practices. Access to any third-party site is at your own risk.",
    ],
  },
  {
    title: "Submitting Information",
    body: [
      "If you send us business plans, decks, messages, or other materials, you should not assume that those materials will be treated as confidential unless Anti Fund has expressly agreed to do so in writing. We may review similar ideas or materials from multiple sources.",
    ],
  },
  {
    title: "Ownership and Use",
    body: [
      "All content, design elements, graphics, logos, and other materials on this website are protected by applicable intellectual property laws. Except as permitted by law, you may not reproduce, republish, modify, distribute, or create derivative works from this website without prior written permission from Anti Fund or the applicable rights holder.",
    ],
  },
  {
    title: "Disclaimer of Warranties and Limitation of Liability",
    body: [
      "This website and all materials are provided on an “as is” and “as available” basis without warranties of any kind, express or implied, to the fullest extent permitted by law. To the fullest extent permitted by law, Anti Fund disclaims liability for any damages arising out of or relating to your use of, or reliance on, this website or any materials available through it.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "Anti Fund may revise these terms from time to time. Your continued use of the website after changes are posted constitutes your acceptance of the updated terms.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These terms, and any dispute arising out of or relating to this website, are governed by the laws of the State of California, without regard to conflict-of-laws principles.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions regarding this website or these terms may be sent to founders@antifund.com or ir@antifund.com.",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Legal | Anti Fund",
  description: "Terms of use and legal notices for Anti Fund.",
  openGraph: {
    title: "Legal | Anti Fund",
    description: "Terms of use and legal notices for Anti Fund.",
    url: "https://antifund.com/legal",
  },
  twitter: {
    title: "Legal | Anti Fund",
    description: "Terms of use and legal notices for Anti Fund.",
  },
};

export default function LegalPage() {
  return (
    <main className="overflow-x-hidden pt-28 md:pt-36">
      <section className="px-6 pb-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="border-y border-line py-10 md:py-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_260px]">
              <div>
                <p className="paper-label mb-8">Anti Fund legal / effective March 31, 2026</p>
                <h1 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-normal text-ink md:text-7xl lg:text-[5.5rem]">
                  Legal terms for a public-facing fund website.
                </h1>
                <p className="mt-6 max-w-3xl text-xl leading-8 text-ink-soft md:text-2xl">
                  This page governs use of the Anti Fund website and explains
                  how to interpret the materials, portfolio references, and
                  testimonials presented here.
                </p>
              </div>

              <aside className="border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <dl className="space-y-6">
                  <div>
                    <dt className="paper-label">Maintained by</dt>
                    <dd className="mt-2 text-base leading-7 text-ink-soft">
                      Anti Fund Investment Fund LLC
                    </dd>
                  </div>

                  <div>
                    <dt className="paper-label">Scope</dt>
                    <dd className="mt-2 text-base leading-7 text-ink-soft">
                      Terms of use, disclaimers, references, and contact.
                    </dd>
                  </div>

                  <div>
                    <dt className="paper-label">Homepage</dt>
                    <dd className="mt-2 text-base text-ink">
                      <a href="/" className="paper-link">
                        Return to Anti Fund
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
                  <h2 className="text-2xl font-semibold tracking-normal text-ink md:text-3xl">
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
