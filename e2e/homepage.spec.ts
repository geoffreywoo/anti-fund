import { expect, test } from "@playwright/test";

test("primary navigation keeps outreach out of the main presentation", async ({
  page,
}) => {
  await page.goto("/");

  const primaryNav = page.getByRole("navigation", { name: "Primary" });
  await expect(primaryNav).toBeVisible();
  await expect(primaryNav.getByRole("link")).toHaveCount(5);
  await expect(primaryNav.getByRole("link")).toHaveText([
    "Edge",
    "Team",
    "Portfolio",
    "Work",
    "Media",
  ]);
  await expect(primaryNav.getByRole("link", { name: "Contact" })).toHaveCount(0);
  await expect(primaryNav.locator('a[href^="mailto:"]')).toHaveCount(0);

  const hero = page.locator("#top");
  await expect(
    hero.getByRole("heading", {
      name: "Capital is a commodity. Attention is not.",
    }),
  ).toBeVisible();
  await expect(hero).not.toContainText("For anti-consensus founders");
  await expect(hero.locator('a[href^="mailto:"]')).toHaveCount(0);
  await expect(hero).not.toContainText("Pitch Anti Fund");
  await expect(hero).not.toContainText("Investor relations");

  const edgeLink = primaryNav.getByRole("link", { name: "Edge" });
  await edgeLink.click();
  await expect(page).toHaveURL(/#edge/);
  await expect(edgeLink).toHaveAttribute("aria-current", "location");
  await expect(page.locator("#edge")).toContainText(
    "See the future early. Make it impossible to ignore.",
  );

  const portfolioLink = primaryNav.getByRole("link", { name: "Portfolio" });
  await portfolioLink.click();
  await expect(page).toHaveURL(/#portfolio/);
  await expect(portfolioLink).toHaveAttribute("aria-current", "location");
  await expect(
    page.getByRole("heading", { name: "Selected investments." }),
  ).toBeVisible();

  const footer = page.locator("#contact");
  await footer.scrollIntoViewIfNeeded();
  await expect(footer.getByRole("link", { name: "Founder correspondence" })).toHaveAttribute(
    "href",
    "mailto:founders@antifund.com",
  );
  await expect(
    footer.getByRole("link", { name: "Limited partner correspondence" }),
  ).toHaveAttribute("href", "mailto:ir@antifund.com");
  await expect(footer).not.toContainText("founders@antifund.com");
  await expect(footer).not.toContainText("ir@antifund.com");
  await expect
    .poll(async () => primaryNav.locator('[aria-current="location"]').count())
    .toBe(0);
});

test("homepage preserves the complete substance layer in order", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator("main section")).toHaveCount(9);

  const positions = await page.evaluate(() => {
    const ids = [
      "top",
      "edge",
      "thesis",
      "team",
      "portfolio",
      "help",
      "proof",
      "media",
      "faq",
      "contact",
    ];
    return ids.map((id) => ({
      id,
      top: document.querySelector(`#${id}`)?.getBoundingClientRect().top ?? null,
    }));
  });

  expect(positions.every((position) => position.top !== null)).toBeTruthy();
  expect(positions.map((position) => position.top)).toEqual(
    positions
      .map((position) => position.top)
      .sort((left, right) => (left as number) - (right as number)),
  );

  await expect(page.locator("#edge")).toContainText("Technical conviction");
  await expect(page.locator("#edge")).toContainText("Earned attention");
  await expect(page.locator("#edge")).toContainText("Founder leverage");
  await expect(page.locator("#thesis")).toContainText("Conviction before consensus.");
  await expect(page.locator("#thesis")).not.toContainText("At the earliest stage");
  await expect(page.locator("#help")).toContainText("Consequential decisions");
  await expect(page.locator("#help")).toContainText(
    "Conviction is only the beginning.",
  );
  await expect(page.locator("#help")).not.toContainText("perform helpfulness");
  await expect(page.locator("#proof")).toContainText("Founder References");
  await expect(page.locator("#proof")).toContainText(
    "The useful measure of a venture partner is the work founders can name.",
  );
  await expect(page.locator("#faq")).toContainText("What's your check size?");

  const edgeCopy = await page.locator("#edge").innerText();
  expect(edgeCopy).not.toContain("$30M");
  expect(edgeCopy).not.toContain("$100M");
  expect(edgeCopy).not.toContain("$180M");
  expect(edgeCopy).not.toContain("Firm AUM");
  expect(edgeCopy).not.toContain("Pre-seed");
  expect(edgeCopy).not.toContain("Growth & pre-IPO");
});

test("deep links reveal long sections instead of leaving a blank viewport", async ({
  page,
}) => {
  await page.goto("/#portfolio");

  const revealWrapper = page.locator("#portfolio").locator("..");
  await expect(revealWrapper).toHaveAttribute("data-revealed", "");
  await expect(
    page.getByRole("heading", { name: "Selected investments." }),
  ).toBeVisible();
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

test("daily operations publishes complete OAuth disclosure and policy pages", async ({
  page,
}) => {
  await page.goto("/daily-operations");

  await expect(
    page.getByRole("heading", { name: "Geoffrey Daily Operations", exact: true }),
  ).toBeVisible();
  await expect(page.locator("main")).toContainText(
    "Google Calendar, Gmail, and Google Drive",
  );
  await expect(page.locator("main")).toContainText("read-only");

  const policyNav = page.getByRole("navigation", {
    name: "Daily Operations policies",
  });
  await expect(
    policyNav.getByRole("link", { name: "Privacy policy" }),
  ).toHaveAttribute("href", "/daily-operations/privacy");
  await expect(
    policyNav.getByRole("link", { name: "Terms of use" }),
  ).toHaveAttribute("href", "/daily-operations/terms");

  await page.goto("/daily-operations/privacy");
  await expect(page.getByRole("heading", { name: "Privacy policy" })).toBeVisible();
  await expect(page.locator("main")).toContainText(
    "accesses, uses, stores, and shares Google user data",
  );
  await expect(page.locator("main")).toContainText("Limited Use requirements");
  await expect(page.locator("main")).toContainText("not retained");
  await expect(page.locator("main")).toContainText("geoff@antifund.com");

  await page.goto("/daily-operations/terms");
  await expect(page.getByRole("heading", { name: "Terms of use" })).toBeVisible();
  await expect(page.locator("main")).toContainText(
    "private, owner-operated application",
  );
  await expect(page.locator("main")).toContainText("read-only");
});

test("the full selected portfolio is visible and links out", async ({
  page,
}) => {
  await page.goto("/");

  const portfolio = page.locator("#portfolio");
  await portfolio.scrollIntoViewIfNeeded();
  await expect(portfolio.getByRole("link", { name: "OpenAI" })).toBeVisible();
  await expect(portfolio.getByRole("link", { name: "SpaceX" })).toBeVisible();
  await expect(portfolio.getByRole("link", { name: "Anduril" })).toBeVisible();

  const investmentIndex = portfolio.locator("[data-portfolio-index]");
  await expect(investmentIndex).toBeVisible();
  await expect(portfolio.locator("img[data-portfolio-logo]")).toHaveCount(51);
  for (const company of [
    "Aeon",
    "Westmag",
    "Orbital",
    "Trajectory",
    "Enigma",
    "Melius",
  ]) {
    await expect(portfolio.getByRole("link", { name: company })).toBeVisible();
  }
  await expect(portfolio.getByRole("link", { name: "Metis" })).toBeVisible();
  await expect(portfolio.getByRole("link", { name: "Poke.com" })).toBeVisible();
  await expect(portfolio.locator('[data-company="poke-com"]')).toContainText(
    "acquired by Cognition in July 2026",
  );
  await expect(portfolio.locator('[data-company="spacex"]')).toContainText(
    "$1.77T IPO",
  );

  const sinceValuesByGroup = await portfolio
    .locator("[data-portfolio-group]")
    .evaluateAll((groups) =>
      groups.map((group) =>
        Array.from(group.querySelectorAll("[data-company]")).map((row) =>
          Number(row.querySelector("[data-partnered]")?.textContent?.trim()),
        ),
      ),
    );

  for (const sinceValues of sinceValuesByGroup) {
    expect(sinceValues).toEqual(
      [...sinceValues].sort((left, right) => left - right),
    );
  }
});

test("team biographies and every founder reference remain available", async ({
  page,
}) => {
  await page.goto("/");

  const team = page.locator("#team");
  await team.scrollIntoViewIfNeeded();
  await expect(
    page.getByAltText("Geoff Woo, Jake Paul, and Logan Paul seated together."),
  ).toBeVisible();

  const roster = team.locator("[data-team-roster]");
  await expect(roster).toBeVisible();
  await expect(team.locator("[data-team-bios]")).toHaveCount(0);
  await expect(roster.getByRole("link", { name: "US patents" })).toBeVisible();
  await expect(
    roster.getByRole("link", { name: "peer-reviewed science papers" }),
  ).toBeVisible();
  await expect(roster).toContainText(
    "Steve Han previously invested at March Capital",
  );

  const proof = page.locator("#proof");
  await proof.scrollIntoViewIfNeeded();
  await expect(proof.getByRole("link", { name: "Eric Glyman" })).toBeVisible();
  await expect(proof.getByRole("link", { name: "Rob Skillington" })).toBeVisible();

  const featuredReference = proof.locator("[data-featured-reference]");
  await expect(featuredReference).toBeVisible();
  await expect(featuredReference).toContainText(
    "Geoff has directly boosted our topline revenue",
  );
  await expect(featuredReference).toHaveCSS("background-color", "rgb(20, 20, 20)");

  const moreReferences = proof.locator("[data-founder-references]");
  await moreReferences.locator("summary").click();
  await expect(moreReferences).toHaveAttribute("open", "");
  await expect(moreReferences.getByRole("link", { name: "Sam Blond" })).toBeVisible();
  await expect(moreReferences).toContainText("Abraham Othman");
});

test("the typography stays limited to the editorial and technical faces", async ({
  page,
}) => {
  await page.goto("/");

  const fonts = await page.evaluate(() => ({
    body: window.getComputedStyle(document.body).fontFamily,
    label: window.getComputedStyle(
      document.querySelector(".paper-label") as HTMLElement,
    ).fontFamily,
  }));

  expect(fonts.body).toContain("Source Serif 4");
  expect(fonts.label).toContain("IBM Plex Mono");
});

test("media highlights three features and preserves the complete archive", async ({
  page,
}) => {
  await page.goto("/");

  const media = page.locator("#media");
  await media.scrollIntoViewIfNeeded();
  await expect(
    media.getByRole("heading", { name: "In conversation. On the ground." }),
  ).toBeVisible();
  await expect(media.locator("article")).toHaveCount(3);
  await expect(
    media.getByAltText("Geoff Woo and Logan Paul in Silicon Valley."),
  ).toBeVisible();
  await expect(
    media.getByAltText("Geoff Woo, Jake Paul, and Logan Paul on The a16z Show."),
  ).toBeVisible();
  await expect(
    media.getByAltText("Geoff Woo, Palmer Luckey, and Jake Paul at Anduril."),
  ).toBeVisible();

  const expectedLinks = [
    ["48 hours with Anti Fund", "https://www.youtube.com/watch?v=4ND2P-HydlM"],
    [
      "Jake Paul & Geoff Woo on The a16z Show",
      "https://www.youtube.com/watch?v=yfafpyhB-8E",
    ],
    [
      "Inside Anduril with Palmer Luckey",
      "https://www.youtube.com/watch?v=pLgkMr4axwo",
    ],
    [
      "20VC: Jake Paul & Geoff Woo on attention as an investing edge",
      "https://www.youtube.com/watch?v=rWn3KgO9Dvk",
    ],
    [
      "The Pomp Podcast: Geoff Woo on AI choke points and defense",
      "https://www.youtube.com/watch?v=jjf-GBgkTIk",
    ],
    [
      "Trailblazers with Erica Wenger: Geoff Woo on building Anti Fund",
      "https://podcasts.apple.com/us/podcast/geoff-woo-the-ugly-truth-about-venture-capital/id1562612842?i=1000777712667",
    ],
    ["Anti Fund Summit", "https://www.youtube.com/watch?v=BWx8F_YgVt4"],
    [
      "Another look at Anti Fund Summit",
      "https://www.youtube.com/watch?v=PIH2C-dLLUc",
    ],
    [
      "The Profile: Jake and Logan Paul's investment plan",
      "https://www.readtheprofile.com/p/jake-paul-logan-paul-billionaire-plan-investment",
    ],
  ] as const;

  for (const [name, href] of expectedLinks) {
    const link = media.getByRole("link", { name, exact: true });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", href);
    await expect(link).toHaveAttribute("target", "_blank");
  }
});

test("faq keeps investor contact behind deliberate disclosure", async ({ page }) => {
  await page.goto("/");

  const faq = page.locator("#faq");
  await faq.scrollIntoViewIfNeeded();

  const investorButton = faq.getByRole("button", {
    name: "How can I invest in the fund?",
  });
  const investorPanel = faq.locator("#faq-panel-5");
  await expect(investorButton).toHaveAttribute("aria-expanded", "false");
  await expect(investorPanel).toHaveAttribute("aria-hidden", "true");
  await investorButton.click();
  await expect(investorButton).toHaveAttribute("aria-expanded", "true");
  await expect(investorPanel).toHaveAttribute("aria-hidden", "false");
  await expect(faq).toContainText("ir@antifund.com");

  const buttons = faq.getByRole("button");
  await buttons.nth(0).focus();
  await page.keyboard.press("ArrowDown");
  await expect(buttons.nth(1)).toBeFocused();
});

test.describe("reduced motion and metadata", () => {
  test("all substance stays visible and metadata assets resolve", async ({
    page,
    request,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    for (const id of [
      "edge",
      "thesis",
      "portfolio",
      "help",
      "team",
      "proof",
      "media",
      "faq",
      "contact",
    ]) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }

    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /opengraph-image/,
    );
    const iconLink = page.locator('link[rel="icon"]');
    await expect(iconLink).toHaveAttribute("href", /icon/);
    const iconHref = await iconLink.getAttribute("href");
    expect(iconHref).toBeTruthy();

    expect(
      await page.evaluate(() =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      ),
    ).toBeTruthy();

    const portfolioLogo = page.locator(".portfolio-logo").first();
    await expect(portfolioLogo).toHaveCSS("transition-duration", "0s");
    await expect(portfolioLogo).toHaveCSS("transform", "none");

    const [ogResponse, twitterResponse, iconResponse] = await Promise.all([
      request.get("/opengraph-image.jpg"),
      request.get("/twitter-image.jpg"),
      request.get(new URL(iconHref!, page.url()).toString()),
    ]);

    expect(ogResponse.ok()).toBeTruthy();
    expect(twitterResponse.ok()).toBeTruthy();
    expect(iconResponse.ok()).toBeTruthy();
  });
});
