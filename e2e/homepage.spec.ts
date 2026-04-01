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

  const checkSizeButton = faq.getByRole("button", { name: "What's your check size?" });
  await checkSizeButton.click();
  await expect(checkSizeButton).toHaveAttribute("aria-expanded", "true");
  await expect(faq).toContainText("$250K-$30M+");

  await buttons.nth(0).click();
  await expect(buttons.nth(0)).toHaveAttribute("aria-expanded", "true");
  await expect(checkSizeButton).toHaveAttribute("aria-expanded", "false");
});

test("footer links to the legal page and the legal page renders key notices", async ({
  page,
}) => {
  await page.goto("/");

  const legalLink = page.getByRole("link", { name: "Legal" });
  await expect(legalLink).toBeVisible();
  await expect(legalLink).toHaveAttribute("href", "/legal");

  await legalLink.click();
  await expect(page).toHaveURL(/\/legal$/);
  await expect(page.getByRole("heading", { name: "Terms of Use" })).toBeVisible();
  await expect(page.locator("main")).toContainText("Anti Fund Investment Fund LLC");
  await expect(page.locator("main")).toContainText(
    "Nothing on this website constitutes an offer to sell",
  );
});

test("portfolio company names link out to company websites in new tabs", async ({
  page,
}) => {
  await page.goto("/");

  const portfolio = page.locator("#portfolio");
  await portfolio.scrollIntoViewIfNeeded();

  const companyLinks = portfolio.locator('a[target="_blank"]');
  await expect(companyLinks).toHaveCount(34);

  const firstGroup = portfolio.locator("[data-portfolio-group]").first();
  await expect(firstGroup).toHaveAttribute("data-portfolio-group", "exits");

  const openAiLink = portfolio.locator('a[href="https://openai.com/"]');
  await expect(openAiLink).toBeVisible();
  await expect(openAiLink).toHaveAttribute("target", "_blank");

  const spaceXLink = portfolio.locator('a[href="https://www.spacex.com/"]');
  await expect(spaceXLink).toBeVisible();
  await expect(spaceXLink).toHaveAttribute("target", "_blank");

  const khloudLink = portfolio.locator('a[href="https://khloudfoods.com/"]');
  await expect(khloudLink).toBeVisible();
  await expect(khloudLink).toHaveAttribute("target", "_blank");

  const eightSleepLink = portfolio.locator('a[href="https://www.eightsleep.com/"]');
  await expect(eightSleepLink).toBeVisible();
  await expect(eightSleepLink).toHaveAttribute("target", "_blank");

  const exitStage = portfolio.locator('[data-stage-part="exit"]').first();
  await expect(exitStage).toBeVisible();
  await expect(exitStage).toHaveClass(/text-green-700/);

  const sinceValuesByGroup = await portfolio.locator("[data-portfolio-group]").evaluateAll(
    (groups) =>
      groups.map((group) =>
        Array.from(group.querySelectorAll("[data-company]")).map((row) => {
          const cells = row.querySelectorAll("span");
          return Number(cells[cells.length - 1]?.textContent?.trim());
        }),
      ),
  );

  for (const sinceValues of sinceValuesByGroup) {
    expect(sinceValues).toEqual([...sinceValues].sort((left, right) => left - right));
  }
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
    await expect(page.getByText("Founder Proof")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
    await expect(
      page.getByAltText("Geoffrey Woo, Jake Paul, and Logan Paul seated together."),
    ).toBeVisible();

    const patentsLink = page.locator('#team a[href*="patents.google.com"]');
    const papersLink = page.locator('#team a[href*="scholar.google.com"]');
    await expect(patentsLink).toBeVisible();
    await expect(patentsLink).toHaveAttribute("target", "_blank");
    await expect(papersLink).toBeVisible();
    await expect(papersLink).toHaveAttribute("target", "_blank");

    const footer = page.locator("footer");
    await expect(footer).toContainText("Legal");

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
