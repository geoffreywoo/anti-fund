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

test("team section appears before portfolio in the homepage flow", async ({
  page,
}) => {
  await page.goto("/");

  const positions = await page.evaluate(() => {
    const team = document.querySelector("#team");
    const portfolio = document.querySelector("#portfolio");

    return {
      teamTop: team?.getBoundingClientRect().top ?? null,
      portfolioTop: portfolio?.getBoundingClientRect().top ?? null,
    };
  });

  expect(positions.teamTop).not.toBeNull();
  expect(positions.portfolioTop).not.toBeNull();
  expect((positions.teamTop as number) < (positions.portfolioTop as number)).toBeTruthy();
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

  const companyLinkHrefs = await portfolio
    .locator('a[target="_blank"]')
    .evaluateAll((links) =>
      Array.from(
        new Set(
          links
            .map((link) => link.getAttribute("href"))
            .filter((href): href is string => Boolean(href)),
        ),
      ),
    );
  expect(companyLinkHrefs).toHaveLength(37);

  const firstGroup = portfolio.locator("[data-portfolio-group]").first();
  await expect(firstGroup).toHaveAttribute(
    "data-portfolio-group",
    "frontier-infrastructure-defense",
  );

  const lastGroup = portfolio.locator("[data-portfolio-group]").last();
  await expect(lastGroup).toHaveAttribute("data-portfolio-group", "exits");
  await expect(lastGroup.getByRole("link", { name: "Metis" })).toBeVisible();

  const hasVisibleExternalLink = async (href: string) =>
    portfolio.locator(`a[href="${href}"]`).evaluateAll((links) =>
      links.some((link) => {
        const element = link as HTMLElement;
        const style = window.getComputedStyle(element);
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          element.getAttribute("target") === "_blank"
        );
      }),
    );

  expect(await hasVisibleExternalLink("https://openai.com/")).toBeTruthy();
  expect(await hasVisibleExternalLink("https://www.spacex.com/")).toBeTruthy();
  expect(await hasVisibleExternalLink("https://elevenlabs.io/")).toBeTruthy();
  expect(await hasVisibleExternalLink("https://rail.io/")).toBeTruthy();
  expect(await hasVisibleExternalLink("https://khloudfoods.com/")).toBeTruthy();
  expect(await hasVisibleExternalLink("https://www.eightsleep.com/")).toBeTruthy();

  const hasVisibleExitStage = await portfolio
    .locator('[data-stage-part="exit"], [data-stage-part="ipo"]')
    .evaluateAll((stages) =>
      stages.some((stage) => {
        const element = stage as HTMLElement;
        const style = window.getComputedStyle(element);
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          element.classList.contains("text-green-700")
        );
      }),
    );
  expect(hasVisibleExitStage).toBeTruthy();

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

test("platform section links out to summit footage in new tabs", async ({
  page,
}) => {
  await page.goto("/");

  const help = page.locator("#help");
  await help.scrollIntoViewIfNeeded();

  const firstSummitLink = help.getByRole("link", {
    name: "Anti Fund Summit",
    exact: true,
  });
  const secondSummitLink = help.getByRole("link", {
    name: "Another look at Anti Fund Summit",
  });
  const communityEventsLink = help.getByRole("link", {
    name: "48 hours with Anti Fund",
  });

  await expect(firstSummitLink).toBeVisible();
  await expect(firstSummitLink).toHaveAttribute(
    "href",
    "https://www.youtube.com/watch?v=BWx8F_YgVt4",
  );
  await expect(firstSummitLink).toHaveAttribute("target", "_blank");

  await expect(secondSummitLink).toBeVisible();
  await expect(secondSummitLink).toHaveAttribute(
    "href",
    "https://www.youtube.com/watch?v=PIH2C-dLLUc",
  );
  await expect(secondSummitLink).toHaveAttribute("target", "_blank");

  await expect(communityEventsLink).toBeVisible();
  await expect(communityEventsLink).toHaveAttribute(
    "href",
    "https://www.youtube.com/watch?v=4ND2P-HydlM",
  );
  await expect(communityEventsLink).toHaveAttribute("target", "_blank");
});

test("testimonial authors link to personal profiles when available", async ({
  page,
}) => {
  await page.goto("/");

  const proof = page.locator("#proof");
  await proof.scrollIntoViewIfNeeded();

  const rampAuthor = proof.getByRole("link", { name: "Eric Glyman" });
  const samAuthor = proof.getByRole("link", { name: "Sam Blond" });
  const robAuthor = proof.getByRole("link", { name: "Rob Skillington" });
  const efferenceAuthor = proof.getByRole("link", { name: "Gianluca Bencomo" });
  const gunAuthor = proof.getByText("Gun Choi", { exact: true });
  const abrahamAuthor = proof.getByText("Abraham Othman", { exact: true });

  await expect(rampAuthor).toBeVisible();
  await expect(rampAuthor).toHaveAttribute("href", "https://x.com/eglyman");
  await expect(rampAuthor).toHaveAttribute("target", "_blank");

  await expect(samAuthor).toBeVisible();
  await expect(samAuthor).toHaveAttribute("href", "https://x.com/samdblond");
  await expect(samAuthor).toHaveAttribute("target", "_blank");

  await expect(robAuthor).toBeVisible();
  await expect(robAuthor).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/robskillington/",
  );
  await expect(robAuthor).toHaveAttribute("target", "_blank");

  await expect(efferenceAuthor).toBeVisible();
  await expect(efferenceAuthor).toHaveAttribute(
    "href",
    "https://x.com/gianlucabencomo",
  );
  await expect(efferenceAuthor).toHaveAttribute("target", "_blank");

  await expect(gunAuthor).toBeVisible();
  await expect(proof.getByRole("link", { name: "Gun Choi" })).toHaveCount(0);

  await expect(abrahamAuthor).toBeVisible();
  await expect(proof.getByRole("link", { name: "Abraham Othman" })).toHaveCount(0);
});

test("testimonial company names link out and clickable testimonial links are underlined", async ({
  page,
}) => {
  await page.goto("/");

  const proof = page.locator("#proof");
  await proof.scrollIntoViewIfNeeded();

  const rampCompany = proof.getByRole("link", { name: "Ramp" });
  const linedotCompany = proof.getByRole("link", { name: "Linedot" });
  const gunAuthor = proof.getByText("Gun Choi", { exact: true });

  await expect(rampCompany).toBeVisible();
  await expect(rampCompany).toHaveAttribute("href", "https://ramp.com/");
  await expect(rampCompany).toHaveAttribute("target", "_blank");

  await expect(linedotCompany).toBeVisible();
  await expect(linedotCompany).toHaveAttribute("href", "https://www.linedot.ai/");
  await expect(linedotCompany).toHaveAttribute("target", "_blank");

  await expect(
    proof.getByRole("link", { name: "Eric Glyman" }),
  ).toHaveClass(/underline/);
  await expect(rampCompany).toHaveClass(/underline/);
  await expect(gunAuthor).not.toHaveClass(/underline/);
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
      request.get("/opengraph-image.jpg"),
      request.get("/twitter-image.jpg"),
      request.get("/icon"),
    ]);

    expect(ogResponse.ok()).toBeTruthy();
    expect(twitterResponse.ok()).toBeTruthy();
    expect(iconResponse.ok()).toBeTruthy();
  });
});
