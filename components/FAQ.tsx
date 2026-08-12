"use client";

import { useRef, useState } from "react";

const faqItems = [
  {
    question: "What do you invest in, and at what stage?",
    answer:
      "Our venture strategy backs technical founders at pre-seed and seed. Our growth and opportunities strategy makes concentrated growth and pre-IPO investments. The current focus is AI, robotics, defense, energy, semiconductors, manufacturing, frontier infrastructure, and selective software and consumer technology.",
  },
  {
    question: "How does the venture-and-growth strategy work?",
    answer:
      "Anti Fund forms conviction at pre-seed and seed, then makes concentrated growth and pre-IPO investments in category leaders. The stage changes; the standard does not.",
  },
  {
    question: "What makes Anti Fund different from a traditional venture firm?",
    answer:
      "Most firms choose between technical underwriting and distribution. Anti Fund combines both. Attention is not promotion for its own sake; it is useful when it helps a company recruit exceptional people, earn customer trust, win financing, and become legible before consensus catches up.",
  },
  {
    question: "How do you work with founders after investing?",
    answer:
      "We stay close during consequential moments: product launches, financing rounds, senior hires, customer introductions, narrative resets, board pressure, and strategic forks where the next decision changes the company.",
  },
  {
    question: "What's your check size?",
    answer:
      "We invest between $250K-$30M+. We are comfortable both leading and participating.",
  },
  {
    question: "How can I invest in the fund?",
    answer:
      "We build long-term relationships with a limited group of aligned LPs. Prospective investors can contact ir@antifund.com.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const moveFocus = (index: number) => {
    const total = faqItems.length;
    const normalized = (index + total) % total;
    buttonRefs.current[normalized]?.focus();
  };

  return (
    <section id="faq" className="px-5 py-14 sm:px-6 sm:py-20 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 border-t border-line pt-5 sm:gap-8 sm:pt-6 lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-10">
          <div className="paper-label">Appendix A / FAQ</div>

          <div>
            <h2 className="mb-6 max-w-4xl font-display text-[2.15rem] leading-[1.04] text-ink sm:mb-8 sm:text-4xl md:text-5xl">
              Questions founders and investors ask.
            </h2>
            <div className="border-y border-line">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const buttonId = `faq-button-${index}`;
              const panelId = `faq-panel-${index}`;

              return (
                <div key={item.question} className="border-b border-line last:border-b-0">
                  <button
                    id={buttonId}
                    ref={(node) => {
                      buttonRefs.current[index] = node;
                    }}
                    type="button"
                    className="flex min-h-14 w-full items-start justify-between gap-4 py-4 text-left sm:min-h-16 sm:gap-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenIndex((currentIndex) =>
                        currentIndex === index ? null : index,
                      )
                    }
                    onKeyDown={(event) => {
                      if (event.key === "ArrowDown") {
                        event.preventDefault();
                        moveFocus(index + 1);
                      } else if (event.key === "ArrowUp") {
                        event.preventDefault();
                        moveFocus(index - 1);
                      } else if (event.key === "Home") {
                        event.preventDefault();
                        moveFocus(0);
                      } else if (event.key === "End") {
                        event.preventDefault();
                        moveFocus(faqItems.length - 1);
                      }
                    }}
                  >
                    <span className="max-w-3xl text-base font-medium leading-6 text-ink sm:text-xl sm:leading-7 md:text-2xl">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 pt-1 font-mono text-lg text-ink-muted transition-transform duration-200 ${
                        isOpen ? "rotate-45 text-ink" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      aria-hidden={!isOpen}
                      inert={!isOpen}
                      className="min-h-0"
                    >
                      <div className="max-w-3xl pb-5 pr-4 text-[0.95rem] leading-6 text-ink-soft sm:pb-6 sm:pr-10 sm:text-base sm:leading-7">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
