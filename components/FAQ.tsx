"use client";

import { useRef, useState } from "react";

const faqItems = [
  {
    question: "What stage do you invest at?",
    answer: "Pre-seed and seed primarily.",
  },
  {
    question: "What’s your check size?",
    answer: "$250K to $500K in most rounds, with occasional follow-ons well beyond that.",
  },
  {
    question: "What sectors?",
    answer: "AI, robotics, defense tech, autonomous systems, and the consumer products that can command attention.",
  },
  {
    question: "How do you help beyond capital?",
    answer: "Network, product instinct, go-to-market leverage, fundraising support, and honest operator feedback when things get weird.",
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
    <section id="faq" className="px-6 py-32 md:px-16 md:py-40 lg:px-24">
      <div className="max-w-5xl">
        <p className="mb-16 font-mono text-xs uppercase tracking-[0.25em] text-gold">
          FAQ
        </p>

        <div>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={item.question}
                className="border-b border-dark-tertiary/60 transition-colors duration-300 hover:border-gold/30"
              >
                <button
                  id={buttonId}
                  ref={(node) => {
                    buttonRefs.current[index] = node;
                  }}
                  type="button"
                  className="flex min-h-14 w-full items-center justify-between gap-6 py-6 text-left"
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
                  <span className="max-w-3xl font-display text-xl font-bold tracking-[-0.02em] text-warm-white md:text-2xl">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-xl text-gold-dim transition-transform duration-200 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    &rarr;
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
                    <div className="pb-6 pr-10 text-[15px] leading-[1.7] text-warm-gray md:text-base">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
