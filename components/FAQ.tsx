"use client";

import { useRef, useState } from "react";

const faqItems = [
  {
    question: "What stage do you focus on?",
    answer: "We invest across all stages, from first check to late-stage pre-IPO.",
  },
  {
    question: "What do you invest in?",
    answer:
      "We invest in high-growth AI, robotics/automation, SaaS, and consumer companies with differentiated technology and/or distribution advantages. We like working with ambitious, fearless founders who have a unique view or angle on their market.",
  },
  {
    question: "What's your check size?",
    answer:
      "We invest between $250K-$30M+. We are comfortable both leading and participating.",
  },
  {
    question: "How can I invest in the fund?",
    answer:
      "We're not raising right now, but do reach out to ir@antifund.com if you're interested in future funds.",
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
    <section id="faq" className="px-6 py-24 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="paper-label">Appendix A / FAQ</div>

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
                    className="flex min-h-16 w-full items-start justify-between gap-6 py-5 text-left"
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
                    <span className="max-w-3xl font-display text-2xl leading-[1.08] tracking-[-0.03em] text-ink md:text-[2rem]">
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
                      className="min-h-0"
                    >
                      <div className="max-w-3xl pb-6 pr-10 text-base leading-7 text-ink-soft">
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
    </section>
  );
}
