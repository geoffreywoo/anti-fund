"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";

type RevealWrapperProps = {
  children: ReactNode;
  delay?: number;
};

export default function RevealWrapper({
  children,
  delay = 0,
}: RevealWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    node.setAttribute("data-reveal", "");

    const reveal = () => {
      node.setAttribute("data-revealed", "");
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const rect = node.getBoundingClientRect();
    const alreadyVisible =
      rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;

    if (alreadyVisible) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
