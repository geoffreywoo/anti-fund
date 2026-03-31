"use client";

import { useRef, useState } from "react";

const faqItems = [
  {
    question: "What stage do you invest at?",
    answer: "Pre-seed and seed primarily, with selective follow-on support.",
  },
  {
    question: "What’s your check size?",
    answer: "$250K to $500K in most rounds, with occasional follow-ons well beyond that.",
  },
  {
    question: "What kinds of companies do you back?",
    answer: "AI, robotics, defense, autonomous systems, and consumer products with real cultural pull.",
  },
  {
    question: "Why Anti Fund?",
    answer: "Because capital is abundant and attention is scarce. Founders come to us for taste, narrative, distribution instinct, and honest operator help alongside money.",
  },
  {
    question: "Are you raising a new fund?",
    answer: "Not currently. Investor inquiries should go to ir@antifund.com.",
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
