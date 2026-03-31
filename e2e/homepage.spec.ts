import { expect, test } from "@playwright/test";

test("desktop nav reaches proof and founder CTA with the right anchor offset", async ({
  page,
}) => {
  await page.goto("/");

  const primaryNav = page.getByRole("navigation", { name: "Primary" });
  await expect(primaryNav).toBeVisible();

  await primaryNav.getByRole("link", { name: "Portfolio" }).click();
  await expect(page).toHaveURL(/#portfolio/);
  await expect
    .poll(async () =>
      page.locator("#portfolio").evaluate((element) =>
        Math.round(element.getBoundingClientRect().top),
      ),
    )
    .toBeLessThan(140);

  await expect(page.locator("#portfolio")).toContainText("Proof");

  await primaryNav.getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/#contact/);

  const founderLink = page.locator(
    '#contact a[href="mailto:founders@antifund.com"]',
  );
  await expect(founderLink).toBeVisible();
  await expect(founderLink).toContainText("founders@antifund.com");
});

test("faq supports keyboard navigation and one-open-at-a-time behavior", async ({
  page,
}) => {
  await page.goto("/");

  const faq = page.locator("#faq");
  await faq.scrollIntoViewIfNeeded();

  const buttons = faq.getByRole("button");
  await buttons.nth(0).focus();
  await page.keyboard.press("ArrowDown");
  await expect(buttons.nth(1)).toBeFocused();

  await page.keyboard.press("Space");
  await expect(buttons.nth(1)).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#faq-panel-1")).toContainText("$250K");

  await buttons.nth(0).click();
  await expect(buttons.nth(0)).toHaveAttribute("aria-expanded", "true");
  await expect(buttons.nth(1)).toHaveAttribute("aria-expanded", "false");
});

test.describe("reduced motion and metadata", () => {
  test.use({ reducedMotion: "reduce" });

  test("revealed content stays visible and metadata assets resolve", async ({
    page,
    request,
  }) => {
    await page.goto("/");

    await expect(page.getByText("What We Believe")).toBeVisible();
    await expect(page.getByText("Select Investments")).toBeVisible();
    await expect(page.getByText("How We Help")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();

    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /opengraph-image/,
    );
    await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
      "href",
      /icon/,
    );

    const [ogResponse, twitterResponse, iconResponse] = await Promise.all([
      request.get("/opengraph-image"),
      request.get("/twitter-image"),
      request.get("/icon"),
    ]);

    expect(ogResponse.ok()).toBeTruthy();
    expect(twitterResponse.ok()).toBeTruthy();
    expect(iconResponse.ok()).toBeTruthy();
  });
});
