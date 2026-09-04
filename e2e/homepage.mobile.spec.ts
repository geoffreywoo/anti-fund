import { expect, test } from "@playwright/test";
import {
  manifestoHomepageExcerpt,
  manifestoParagraphs,
} from "../content/manifesto";

test.use({
  viewport: { width: 375, height: 667 },
  isMobile: true,
  hasTouch: true,
});

test("mobile navigation preserves content and founder and LP paths", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);

  const heroLineCount = await page.locator("#top h1").evaluate((heading) => {
    const lineHeight = Number.parseFloat(window.getComputedStyle(heading).lineHeight);
    return Math.round(heading.getBoundingClientRect().height / lineHeight);
  });
  expect(heroLineCount).toBeGreaterThanOrEqual(2);
  expect(heroLineCount).toBeLessThanOrEqual(3);
  await expect(page.locator("#top").getByRole("link", { name: "For founders", exact: true })).toHaveAttribute("href", "#help");
  await expect(page.locator("#top").getByRole("link", { name: "For limited partners", exact: true })).toHaveAttribute("href", "#investors");

  const heroLogo = page.locator('#top img[src*="logo.png"]:visible');
  await expect(heroLogo).toHaveCount(1);

  const mobileEffects = await page.evaluate(() => {
    const header = document.querySelector(".site-header");

    return {
      beforeContent: window.getComputedStyle(document.body, "::before").content,
      backdropFilter: header
        ? window.getComputedStyle(header).backdropFilter
        : null,
    };
  });
  expect(mobileEffects.beforeContent).toBe("none");
  expect(mobileEffects.backdropFilter === "none" || mobileEffects.backdropFilter === "").toBeTruthy();

  const menuButton = page.getByRole("button", {
    name: "Open navigation menu",
  });
  await menuButton.click();

  const dialog = page.getByRole("dialog", { name: "Navigation menu" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("link")).toHaveCount(6);
  await expect(dialog.getByRole("link")).toHaveText([
    "Edge",
    "Team",
    "Portfolio",
    "Founders",
    "LPs",
    "Manifesto",
  ]);
  await expect(dialog.getByRole("link", { name: "Contact" })).toHaveCount(0);
  await expect(
    dialog.getByRole("link", { name: "Manifesto" }),
  ).toHaveAttribute("href", "/manifesto");
  const closeButton = dialog.getByRole("button", {
    name: "Close navigation menu",
  });
  await expect(closeButton).toBeVisible();
  await expect
    .poll(async () => page.evaluate(() => document.body.style.overflow))
    .toBe("hidden");

  await closeButton.click();
  await expect(dialog).toBeHidden();

  await menuButton.click();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();

  await menuButton.click();
  await dialog.getByRole("link", { name: "Portfolio" }).click();

  await expect(dialog).toBeHidden();
  await expect(page).toHaveURL(/#portfolio/);

  const thesis = page.locator("#thesis");
  await thesis.scrollIntoViewIfNeeded();
  await expect(thesis.getByText("Axiom I", { exact: true })).toBeVisible();
  await expect(thesis.getByText("Axiom II", { exact: true })).toBeVisible();
  await expect(thesis.locator("[data-home-manifesto-excerpt]")).toHaveText(
    manifestoHomepageExcerpt,
  );
  await expect(thesis.locator("[data-manifesto-paragraph]")).toHaveCount(0);
  await expect(thesis.locator('a[href="/manifesto"]')).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  expect(hasHorizontalOverflow).toBeFalsy();

  const portfolio = page.locator("#portfolio");
  await portfolio.scrollIntoViewIfNeeded();
  await expect(portfolio.getByRole("link", { name: "Chronosphere" })).toBeVisible();

  const investmentIndex = portfolio.locator("[data-portfolio-index]");
  await expect(investmentIndex).toBeVisible();
  await expect(investmentIndex).toHaveAttribute("data-mobile-layout", "compact");
  await expect(portfolio.locator("img[data-portfolio-logo]")).toHaveCount(53);
  await expect(portfolio.locator("[data-portfolio-meta]")).toHaveCount(53);
  await expect(portfolio.getByRole("link", { name: "Metis" })).toBeVisible();
  await expect(portfolio.getByRole("link", { name: "Entropy" })).toBeVisible();
  await expect(portfolio.getByRole("link", { name: "Liquid" })).toBeVisible();

  const andurilRow = portfolio.locator('[data-company="anduril"]');
  await expect(andurilRow).toContainText("Series E");
  await expect(andurilRow).toContainText("2022");
  const andurilRowHeight = await andurilRow.evaluate(
    (element) => element.getBoundingClientRect().height,
  );
  expect(andurilRowHeight).toBeLessThan(170);

  const footer = page.locator("#contact");
  await footer.scrollIntoViewIfNeeded();
  await expect(footer.getByRole("link", { name: "Founder correspondence" })).toBeVisible();
  await expect(
    footer.getByRole("link", { name: "Limited partner correspondence" }),
  ).toBeVisible();
  await expect(footer).toContainText("founders@antifund.com");
  await expect(footer).toContainText("ir@antifund.com");

  await menuButton.click();
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('[aria-current="location"]')).toHaveCount(0);
});

test("short-screen menu scrolls, traps focus, and restores the page on Escape", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 420 });
  await page.goto("/");
  const menuButton = page.getByRole("button", { name: "Open navigation menu" });
  await menuButton.click();
  const dialog = page.getByRole("dialog", { name: "Navigation menu" });
  const closeButton = dialog.getByRole("button", { name: "Close navigation menu" });
  const lastLink = dialog.getByRole("link", { name: "Manifesto", exact: true });
  await expect(closeButton).toBeFocused();
  await expect(page.locator("main")).toHaveAttribute("inert", "");
  await page.keyboard.press("Shift+Tab");
  await expect(lastLink).toBeFocused();
  await expect(lastLink).toBeInViewport();
  await page.keyboard.press("Tab");
  await expect(closeButton).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(menuButton).toBeFocused();
  await expect(page.locator("main")).not.toHaveAttribute("inert", "");
  await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("");

  await menuButton.click();
  await lastLink.click();
  await expect(page).toHaveURL(/\/manifesto$/);
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Anti Fund Manifesto", exact: true })).toBeVisible();
  await expect(page.locator("main")).not.toHaveAttribute("inert", "");
});

test("resizing an open menu to desktop restores scrolling and keyboard navigation", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await expect(page.getByRole("dialog", { name: "Navigation menu" })).toBeVisible();
  await page.setViewportSize({ width: 1280, height: 800 });
  await expect(page.getByRole("dialog", { name: "Navigation menu" })).toBeHidden();
  await expect(page.locator("main")).not.toHaveAttribute("inert", "");
  await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("");
  const primaryNav = page.getByRole("navigation", { name: "Primary" });
  await expect(primaryNav.getByRole("link", { name: "Edge", exact: true })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(primaryNav.getByRole("link", { name: "Team", exact: true })).toBeFocused();
  await primaryNav.getByRole("link", { name: "LPs", exact: true }).click();
  await expect(page).toHaveURL(/#investors$/);
  await expect(primaryNav.getByRole("link", { name: "LPs", exact: true })).toHaveAttribute("aria-current", "location");
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Open navigation menu" })).toBeVisible();
});

test("mobile LP navigation focuses the destination and leaves outreach usable", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await page.getByRole("dialog").getByRole("link", { name: "LPs", exact: true }).click();
  await expect(page).toHaveURL(/#investors$/);
  await expect(page.locator("#investors")).toBeFocused();
  await expect(page.locator('#investors a[href="mailto:ir@antifund.com"]')).toBeVisible();
  await expect(page.locator("main")).not.toHaveAttribute("inert", "");
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await expect(page.getByRole("dialog").getByRole("link", { name: "LPs", exact: true })).toHaveAttribute("aria-current", "location");
});

test("the manifesto stays readable and route-aware on mobile", async ({ page }) => {
  await page.goto("/manifesto");

  await expect(
    page.getByRole("heading", { name: "Anti Fund Manifesto", exact: true }),
  ).toBeVisible();
  await expect(page.locator("[data-manifesto-paragraph]")).toHaveCount(
    manifestoParagraphs.length,
  );
  await expect(
    page.locator(
      "[data-manifesto-body] section, [data-manifesto-body] h2, [data-manifesto-body] h3, [data-manifesto-body] hr",
    ),
  ).toHaveCount(0);

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  expect(hasHorizontalOverflow).toBeFalsy();

  await page.getByRole("button", { name: "Open navigation menu" }).click();
  const dialog = page.getByRole("dialog", { name: "Navigation menu" });
  await expect(
    dialog.getByRole("link", { name: "Manifesto" }),
  ).toHaveAttribute("aria-current", "page");
  await expect(dialog.getByRole("link", { name: "Team" })).toHaveAttribute(
    "href",
    "/#team",
  );
});
