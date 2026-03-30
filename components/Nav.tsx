"use client";

import Image from "next/image";
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
      setIsScrolled(window.scrollY > 50);
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
      <header className="fixed inset-x-0 top-0 z-[var(--z-nav)] px-4 pt-4 md:px-6">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${
            isScrolled
              ? "border-white/10 bg-[rgba(8,8,9,0.85)] shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-[16px]"
              : "border-transparent bg-transparent"
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-3 text-warm-white transition-colors duration-300 hover:text-gold"
          >
            <Image
              src="/logo.png"
              alt="Anti Fund"
              width={32}
              height={27}
              className="h-auto w-8"
              priority
            />
            <span className="font-display text-lg font-extrabold tracking-[0.22em]">
              ANTI FUND
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.24em] text-warm-gray transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-white/10 text-warm-white transition-colors duration-300 hover:border-gold/40 hover:text-gold md:hidden"
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <span
              aria-hidden="true"
              className="font-mono text-[11px] uppercase tracking-[0.25em]"
            >
              {isOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </header>

      {isOpen ? (
        <div
          id={menuId}
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-[#080809]/95 px-6 backdrop-blur-lg md:hidden"
        >
          <nav aria-label="Mobile primary" className="w-full max-w-sm">
            <div className="space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex min-h-12 items-center justify-between border-b border-dark-tertiary/60 py-4 font-display text-3xl font-bold tracking-[-0.03em] text-warm-white transition-colors duration-300 hover:text-gold"
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-gold-dim"
                  >
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
