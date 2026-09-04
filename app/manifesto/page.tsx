import type { Metadata } from "next";
import Footer from "@/components/Footer";
import {
  manifestoEdition,
  manifestoMission,
  manifestoParagraphs,
  manifestoPublished,
} from "@/content/manifesto";

export const metadata: Metadata = {
  title: "Manifesto | Anti Fund",
  description: manifestoMission,
  openGraph: {
    title: "Anti Fund Manifesto",
    description: manifestoMission,
    url: "https://antifund.com/manifesto",
  },
  twitter: {
    title: "Anti Fund Manifesto",
    description: manifestoMission,
  },
};

export default function ManifestoPage() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="overflow-x-hidden px-6 pb-16 pt-28 md:px-10 md:pt-36 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <header className="border-y border-line py-10 md:py-14">
            <p className="paper-label mb-8">
              Anti Fund Manifesto {manifestoEdition} / {" "}
              <time dateTime="2026-09">{manifestoPublished}</time>
            </p>
            <h1
              id="manifesto-title"
              className="max-w-4xl font-display text-5xl leading-[0.98] tracking-normal text-ink md:text-7xl lg:text-[5.5rem]"
            >
              Anti Fund Manifesto
            </h1>
          </header>

          <article
            className="mt-14 md:ml-[212px] md:mt-16 md:max-w-3xl"
            data-manifesto-body
            aria-labelledby="manifesto-title"
          >
            <div className="space-y-7 sm:space-y-8">
              {manifestoParagraphs.map((paragraph, paragraphIndex) => {
                const isOpening = paragraphIndex === 0;
                const isClosing =
                  paragraphIndex === manifestoParagraphs.length - 1;

                return (
                  <p
                    key={paragraphIndex}
                    data-manifesto-paragraph
                    className={
                      isOpening
                        ? "font-display text-[1.75rem] leading-[1.2] text-ink sm:text-[2rem]"
                        : isClosing
                          ? "border-l-2 border-accent pl-5 font-display text-[2.1rem] leading-[1.08] text-ink sm:pl-7 sm:text-4xl md:text-5xl"
                          : "text-lg leading-8 text-ink-soft sm:text-xl sm:leading-9"
                    }
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>

          <aside
            className="mt-14 border-y border-line py-6 md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-8"
            data-manifesto-note
          >
            <p className="paper-label">Note</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-ink-muted md:mt-0">
              Views and examples reflect Anti Fund&apos;s thesis as of {" "}
              {manifestoPublished}. See {" "}
              <a
                href="/legal"
                className="paper-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Legal
              </a>{" "}
              for important information about portfolio references and
              forward-looking statements.
            </p>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
