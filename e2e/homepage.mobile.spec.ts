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

test("mobile overlay stays focused on content while outreach remains in the footer", async ({
  page,
}) => {
  await page.goto("/");

  const heroLineCount = await page.locator("#top h1").evaluate((heading) => {
    const range = document.createRange();
    range.selectNodeContents(heading);
    return range.getClientRects().length;
  });
  expect(heroLineCount).toBe(2);

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
    "Work",
    "Media",
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
  await expect(footer).not.toContainText("founders@antifund.com");
  await expect(footer).not.toContainText("ir@antifund.com");

  await menuButton.click();
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("link", { name: "Media" })).not.toHaveAttribute(
    "aria-current",
    "location",
  );
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
