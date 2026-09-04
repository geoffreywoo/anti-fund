"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Wordmark from "@/components/Wordmark";

const links = [
  { href: "#edge", label: "Edge" },
  { href: "#team", label: "Team" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#help", label: "Work" },
  { href: "#media", label: "Media" },
  { href: "/manifesto", label: "Manifesto" },
];

const sectionLinks = links.filter((link) => link.href.startsWith("#"));

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === "/";
  const homeHref = isHome ? "#top" : "/";

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
    if (!isHome) {
      setActiveHref(null);
      return;
    }

    let frameId: number | null = null;

    const updateActiveSection = () => {
      frameId = null;
      const marker = 96;
      let nextActive: string | null = null;

      for (const link of sectionLinks) {
        const section = document.querySelector<HTMLElement>(link.href);

        if (section && section.getBoundingClientRect().top <= marker) {
          nextActive = link.href;
        }
      }

      const finalSection = document.querySelector<HTMLElement>(
        sectionLinks[sectionLinks.length - 1].href,
      );

      if (finalSection && finalSection.getBoundingClientRect().bottom <= marker) {
        nextActive = null;
      }

      setActiveHref((current) =>
        current === nextActive ? current : nextActive,
      );
    };

    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [isHome]);

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

  const closeMenuAndRestoreFocus = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => buttonRef.current?.focus());
  };

  return (
    <>
      <header className="site-header fixed inset-x-0 top-0 z-[var(--z-nav)] border-b border-line/70 bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 md:px-10 md:py-4 lg:px-14">
          <a href={homeHref} className="min-w-0 text-ink transition-colors hover:text-ink-soft">
            <Wordmark className="block text-[1.65rem] sm:text-[1.9rem]" />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-5 md:flex lg:gap-7">
            {links.map((link) => {
              const isRoute = link.href.startsWith("/");
              const isActive = isRoute
                ? pathname === link.href
                : activeHref === link.href;
              const href = isRoute
                ? link.href
                : isHome
                  ? link.href
                  : `/${link.href}`;

              return (
                <a
                  key={link.href}
                  href={href}
                  className="nav-section-link relative inline-flex py-1 font-mono text-[11px] uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  data-active={isActive ? "" : undefined}
                  aria-current={
                    isActive ? (isRoute ? "page" : "location") : undefined
                  }
                >
                  {link.label}
                </a>
              );
            })}
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
          className="fixed inset-0 z-[var(--z-modal)] bg-paper px-6 pb-10 pt-3"
        >
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 flex items-center justify-between border-b border-line pb-3">
              <Wordmark className="text-[1.65rem]" />
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line-strong px-3 text-ink transition-colors hover:bg-paper-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Close navigation menu"
                onClick={closeMenuAndRestoreFocus}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  Close
                </span>
              </button>
            </div>
            <p className="paper-label mb-6">Contents</p>
            <nav aria-label="Mobile primary">
              <div className="border-y border-line">
                {links.map((link) => {
                  const isRoute = link.href.startsWith("/");
                  const isActive = isRoute
                    ? pathname === link.href
                    : activeHref === link.href;
                  const href = isRoute
                    ? link.href
                    : isHome
                      ? link.href
                      : `/${link.href}`;

                  return (
                    <a
                      key={link.href}
                      href={href}
                      className="flex min-h-14 items-baseline border-b border-line py-5 transition-colors duration-200 last:border-b-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      data-active={isActive ? "" : undefined}
                      aria-current={
                        isActive ? (isRoute ? "page" : "location") : undefined
                      }
                      onClick={closeMenu}
                    >
                      <span
                        className={`font-display text-3xl leading-none tracking-normal transition-colors duration-200 ${
                          isActive ? "text-accent" : "text-ink"
                        }`}
                      >
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
