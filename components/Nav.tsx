"use client";

import { useEffect, useId, useRef, useState } from "react";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const dialog = dialogRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = dialog
      ? Array.from(
          dialog.querySelectorAll<HTMLElement>(focusableSelector),
        ).filter((element) => !element.hasAttribute("disabled"))
      : [];

    focusableElements[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusableElements.length === 0) {
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[var(--z-nav)] border-b border-line/70 bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-14">
          <a href="#top" className="min-w-0 text-ink transition-colors hover:text-ink-soft">
            <div className="paper-label">Anti Fund</div>
            <div className="mt-1 text-sm text-ink-soft md:text-base">
              Capital is abundant. Attention is scarce.
            </div>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="paper-link font-mono text-[11px] uppercase tracking-[0.18em]"
              >
                {String(index + 1).padStart(2, "0")} {link.label}
              </a>
            ))}
          </nav>

          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line-strong px-3 text-ink transition-colors hover:bg-paper-alt md:hidden"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
              {isOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>

        {isScrolled ? (
          <div className="mx-auto h-px max-w-6xl bg-line/70" aria-hidden="true" />
        ) : null}
      </header>

      {isOpen ? (
        <div
          id={menuId}
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[var(--z-modal)] bg-paper px-6 pb-10 pt-28"
        >
          <div className="mx-auto max-w-3xl">
            <p className="paper-label mb-8">Contents</p>
            <nav aria-label="Mobile primary">
              <div className="border-y border-line">
                {links.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex min-h-14 items-baseline justify-between border-b border-line py-5 last:border-b-0"
                    onClick={closeMenu}
                  >
                    <span className="font-display text-3xl leading-none tracking-[-0.03em] text-ink">
                      {link.label}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
