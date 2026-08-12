import { expect, test } from "@playwright/test";

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
  await expect(dialog.getByRole("link")).toHaveCount(5);
  await expect(dialog.getByRole("link")).toHaveText([
    "Edge",
    "Team",
    "Portfolio",
    "Work",
    "Media",
  ]);
  await expect(dialog.getByRole("link", { name: "Contact" })).toHaveCount(0);
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
  await expect(portfolio.locator("img[data-portfolio-logo]")).toHaveCount(51);
  await expect(portfolio.locator("[data-portfolio-meta]")).toHaveCount(51);
  await expect(portfolio.getByRole("link", { name: "Metis" })).toBeVisible();

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
