import { expect, test } from "@playwright/test";
import {
  manifestoMission,
  manifestoParagraphs,
  manifestoPublished,
} from "../content/manifesto";

test("founders and LPs can reach relevant content and contact paths", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Anti Fund");
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "Anti Fund",
  );
  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
    "content",
    "Anti Fund",
  );

  const primaryNav = page.getByRole("navigation", { name: "Primary" });
  await expect(primaryNav).toBeVisible();
  await expect(primaryNav.getByRole("link")).toHaveCount(5);
  await expect(primaryNav.getByRole("link")).toHaveText([
    "Portfolio",
    "Approach",
    "Team",
    "Contact",
    "Manifesto",
  ]);
  await expect(primaryNav.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  await expect(primaryNav.locator('a[href^="mailto:"]')).toHaveCount(0);

  const hero = page.locator("#top");
  await expect(
    hero.getByRole("heading", {
      name: "Capital is a commodity. Attention is not.",
    }),
  ).toBeVisible();
  await expect(hero.locator('a[href^="mailto:"]')).toHaveCount(0);
  await expect(hero).toContainText("technical founders at formation");
  await expect(hero).toContainText("category leaders at growth");
  const founderAction = hero.getByRole("link", { name: "For founders", exact: true });
  const investorAction = hero.getByRole("link", { name: "For limited partners", exact: true });
  await expect(founderAction).toHaveAttribute("href", "#help");
  await expect(investorAction).toHaveAttribute("href", "#investors");
  await investorAction.click();
  await expect(page).toHaveURL(/#investors$/);
  const investors = page.locator("#investors");
  await expect(investors.getByRole("heading", { name: "For limited partners", exact: true })).toBeVisible();
  await expect(investors.locator("dt")).toHaveText(["Venture", "Growth & opportunities"]);
  await expect(investors).toContainText("Pre-seed & seed");
  await expect(investors).toContainText("Growth & pre-IPO");
  await expect(investors.locator('a[href="mailto:ir@antifund.com"]')).toBeVisible();
  await expect(primaryNav.getByRole("link", { name: "Contact", exact: true })).toHaveAttribute("aria-current", "location");
  await founderAction.click();
  await expect(page).toHaveURL(/#help$/);
  await expect(primaryNav.getByRole("link", { name: "Contact", exact: true })).toHaveAttribute("aria-current", "location");
  await expect(page.locator('#help a[href="mailto:founders@antifund.com"]')).toBeVisible();
  await expect(page.locator("#help")).toContainText("Send a deck or product link.");
  const heroLogo = hero.getByRole("img", { name: "Anti Fund" });
  await expect(heroLogo).toHaveAttribute("src", /logo\.png/);
  await expect(hero.locator("[data-hero-logo]")).toHaveCount(0);

  const manifestoLink = primaryNav.getByRole("link", { name: "Manifesto" });
  await expect(manifestoLink).toHaveAttribute("href", "/manifesto");

  const teamLink = primaryNav.getByRole("link", { name: "Team" });
  await teamLink.click();
  await expect(page).toHaveURL(/#team/);
  await expect(teamLink).toHaveAttribute("aria-current", "location");
  await expect(page.locator("#team").getByRole("heading", { level: 2 })).toBeVisible();

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
  await expect(footer).toContainText("founders@antifund.com");
  await expect(footer).toContainText("ir@antifund.com");
  await primaryNav.getByRole("link", { name: "Contact", exact: true }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(primaryNav.getByRole("link", { name: "Contact", exact: true })).toHaveAttribute("aria-current", "location");
});

test("homepage leads with investments and keeps supporting content accessible", async ({
  page,
}) => {
  await page.goto("/");

  const contentOrder = await page.evaluate(() => {
    const ids = ["top", "portfolio", "edge", "thesis", "team", "media"];
    const sections = ids.map((id) => document.querySelector(`#${id}`));
    return sections.every((section, index) =>
      section !== null &&
      (index === 0 || Boolean(
        sections[index - 1]!.compareDocumentPosition(section) & Node.DOCUMENT_POSITION_FOLLOWING,
      )),
    );
  });
  expect(contentOrder).toBeTruthy();
  await expect(page.locator("#top + #portfolio")).toHaveCount(1);
  await expect(page.locator("main footer")).toHaveCount(0);
  await expect(page.getByRole("contentinfo")).toHaveCount(1);
  await expect(page.locator("#edge article")).toHaveCount(3);
  await expect(page.locator("#edge").getByRole("heading", { level: 2 })).toContainText("Technical conviction");
  await expect(page.locator("#edge #proof")).toHaveCount(1);

  const thesis = page.locator("#thesis");
  await expect(thesis.locator("[data-home-manifesto-excerpt]")).toHaveText(
    "The best founders are anti before they are obvious.",
  );
  await expect(thesis.locator("[data-manifesto-paragraph]")).toHaveCount(0);
  await expect(thesis.locator('a[href="/manifesto"]')).toBeVisible();
  await expect(thesis).not.toContainText("Axiom I");
  await expect(thesis).not.toContainText("Axiom II");
  await expect(page.locator("#contact #help")).toBeVisible();
  await expect(page.locator("#contact #investors")).toBeVisible();
  await expect(page.locator("#contact #faq")).toBeVisible();

  const edgeCopy = await page.locator("#edge").innerText();
  expect(edgeCopy).not.toContain("$30M");
  expect(edgeCopy).not.toContain("$100M");
  expect(edgeCopy).not.toContain("$180M");
  expect(edgeCopy).not.toContain("Firm AUM");
});

test("deep links display their destination without waiting for a reveal animation", async ({
  page,
}) => {
  for (const id of ["portfolio", "edge", "team", "contact"]) {
    await page.goto(`/#${id}`);
    await expect(page.locator(`#${id}`)).toBeInViewport();
    await expect(page.locator(`#${id}`).getByRole("heading", { level: 2 }).first()).toBeVisible();
  }
});

test("skip link moves keyboard focus past the navigation on public routes", async ({ page }) => {
  for (const route of ["/", "/manifesto", "/legal", "/daily-operations", "/daily-operations/privacy", "/daily-operations/terms"]) {
    await page.goto(route);
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: "Skip to content", exact: true });
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeInViewport();
    await expect(skipLink).toHaveAttribute("href", "#main-content");
    await page.keyboard.press("Enter");
    await expect(page.locator("main#main-content")).toBeFocused();
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.getByRole("contentinfo")).toHaveCount(1);
  }
});

test("public routes and homepage images load without browser errors", async ({ page }) => {
  const browserErrors: string[] = [];
  const failedResponses: string[] = [];
  page.on("pageerror", (error) => browserErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") browserErrors.push(message.text());
  });
  page.on("response", (response) => {
    if (response.status() >= 400 && new URL(response.url()).origin === new URL(page.url()).origin) {
      failedResponses.push(`${response.status()} ${response.url()}`);
    }
  });

  for (const route of ["/", "/manifesto", "/legal", "/daily-operations", "/daily-operations/privacy", "/daily-operations/terms"]) {
    const response = await page.goto(route);
    expect(response?.ok(), route).toBeTruthy();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.evaluate(() => document.fonts.ready);

    if (route === "/") {
      // Trigger native lazy loading without changing React-owned image attributes.
      for (const image of await page.locator("img:visible").all()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate((element) => {
          const image = element as HTMLImageElement;
          return image.complete && image.naturalWidth > 0;
        }), { timeout: 30_000 }).toBeTruthy();
      }
    }
  }
  expect(failedResponses).toEqual([]);
  expect(browserErrors).toEqual([]);
});

test("footer links to the legal page and the legal page renders key notices", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.locator("#contact").getByRole("link", { name: "Manifesto" }),
  ).toHaveAttribute("href", "/manifesto");

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

test("the dated manifesto route preserves the complete source and site navigation", async ({
  page,
}) => {
  await page.goto("/manifesto");

  await expect(page).toHaveTitle("Manifesto | Anti Fund");
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://antifund.com/manifesto",
  );
  await expect(
    page.getByRole("heading", { name: "Anti Fund Manifesto", exact: true }),
  ).toBeVisible();
  await expect(page.locator("header time")).toHaveText(manifestoPublished);

  const paragraphs = page.locator("[data-manifesto-paragraph]");
  await expect(page.locator("[data-manifesto-body]")).toHaveCount(1);
  await expect(paragraphs).toHaveCount(manifestoParagraphs.length);
  await expect(paragraphs).toHaveText([...manifestoParagraphs]);
  const isSingleUninterruptedFlow = await paragraphs.evaluateAll((nodes) =>
    nodes.length > 0 &&
    nodes.every(
      (node, index) =>
        node.parentElement === nodes[0].parentElement &&
        (index === 0 || node.previousElementSibling === nodes[index - 1]),
    ),
  );
  expect(isSingleUninterruptedFlow).toBeTruthy();
  await expect(
    page.locator(
      "[data-manifesto-body] section, [data-manifesto-body] h2, [data-manifesto-body] h3, [data-manifesto-body] hr",
    ),
  ).toHaveCount(0);
  await expect(paragraphs.nth(3)).toContainText(
    "define the singularity era",
  );
  await expect(page.locator("main header")).not.toContainText(manifestoMission);
  await expect(page.locator("main footer")).toHaveCount(0);
  await expect(page.getByRole("contentinfo")).toHaveCount(1);

  const primaryNav = page.getByRole("navigation", { name: "Primary" });
  await expect(
    primaryNav.getByRole("link", { name: "Manifesto" }),
  ).toHaveAttribute("aria-current", "page");
  await expect(primaryNav.getByRole("link", { name: "Team" })).toHaveAttribute(
    "href",
    "/#team",
  );
  await expect(
    page.locator("[data-manifesto-note]").getByRole("link", { name: "Legal" }),
  ).toHaveAttribute("href", "/legal");
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

test("selected investments lead to the complete portfolio through a keyboard disclosure", async ({
  page,
}) => {
  await page.goto("/");

  const portfolio = page.locator("#portfolio");
  await portfolio.scrollIntoViewIfNeeded();
  const allInvestments = portfolio.locator("[data-portfolio-disclosure]");
  const investmentSummary = allInvestments.locator("summary");
  await expect(portfolio.locator("[data-company]")).toHaveCount(54);
  await expect(portfolio.locator("[data-company]:visible")).toHaveCount(10);
  await expect(allInvestments.locator("[data-company]")).toHaveCount(44);
  await expect(allInvestments).not.toHaveAttribute("open", "");
  await expect(portfolio.getByRole("link", { name: "OpenAI" })).toBeVisible();
  await expect(portfolio.getByRole("link", { name: "Anduril" })).toBeVisible();
  await investmentSummary.focus();
  await page.keyboard.press("Enter");
  await expect(allInvestments).toHaveAttribute("open", "");
  await expect(portfolio.locator("[data-company]:visible")).toHaveCount(54);
  await expect(portfolio.getByRole("link", { name: "SpaceX" })).toBeVisible();

  const companyKeys = await portfolio.locator("[data-company]").evaluateAll((rows) =>
    rows.map((row) => row.getAttribute("data-company")),
  );
  expect(new Set(companyKeys).size).toBe(54);

  const boring = portfolio.locator('[data-company="the-boring-company"]');
  await expect(boring).toContainText("Series D");
  await expect(boring).toContainText("2026");
  await expect(boring.getByRole("link", { name: "The Boring Company", exact: true })).toHaveAttribute("href", "https://www.boringcompany.com/");

  const investmentIndex = portfolio.locator("[data-portfolio-index]");
  await expect(investmentIndex).toBeVisible();
  await expect(portfolio.locator("img[data-portfolio-logo]")).toHaveCount(54);
  for (const company of [
    "Aeon",
    "Westmag",
    "Orbital",
    "Trajectory",
    "Enigma",
    "Melius",
    "Entropy",
    "Liquid",
  ]) {
    await expect(portfolio.getByRole("link", { name: company })).toBeVisible();
  }
  const entropyRow = portfolio.locator('[data-company="entropy"]');
  await expect(entropyRow.getByRole("link", { name: "Entropy" })).toHaveAttribute(
    "href",
    "https://x.com/entropyio?s=11",
  );
  await expect(entropyRow).toContainText("Invested 2026");
  await expect(entropyRow).toContainText("Seed");
  const liquidRow = portfolio.locator('[data-company="liquid"]');
  await expect(liquidRow.getByRole("link", { name: "Liquid" })).toHaveAttribute(
    "href",
    "https://www.liquid.trade/",
  );
  await expect(liquidRow).toContainText("Invested 2026");
  await expect(liquidRow).toContainText("Series A");
  await expect(portfolio.getByRole("link", { name: "Metis" })).toBeVisible();
  await expect(portfolio.getByRole("link", { name: "Poke.com" })).toBeVisible();
  await expect(portfolio.locator('[data-company="poke-com"]')).toContainText(
    "acquired by Cognition in July 2026",
  );
  await expect(portfolio.locator('[data-company="spacex"]')).toContainText(
    "$1.77T IPO",
  );

  await expect(portfolio).toContainText("* Personal investment");
  const ramp = portfolio.locator('[data-company="ramp"]');
  await expect(ramp).toContainText("Seed* · Series B* · Series D");
  await expect(ramp).not.toContainText("Series D*");
  await expect(ramp).not.toContainText("Series E");
  await expect(ramp.locator('[aria-label="Personal investment"]')).toHaveCount(0);
  await expect(portfolio.locator('[data-company="chronosphere"] [aria-label="Personal investment"]')).toBeVisible();

  const sinceValuesByGroup = await allInvestments
    .locator("[data-portfolio-group]")
    .evaluateAll((groups) =>
      groups.map((group) =>
        Array.from(group.querySelectorAll("[data-company]")).map((row) =>
          Number(row.querySelector("[data-partnered]")?.textContent?.trim()),
        ),
      ),
    );
  for (const sinceValues of sinceValuesByGroup) {
    expect(sinceValues).toEqual([...sinceValues].sort((left, right) => left - right));
  }
  await investmentSummary.focus();
  await page.keyboard.press("Space");
  await expect(allInvestments).not.toHaveAttribute("open", "");
  await expect(portfolio.locator("[data-company]:visible")).toHaveCount(10);
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
  await expect(roster.locator("article")).toHaveCount(5);
  const biographies = roster.locator("[data-team-bio]");
  await expect(biographies).toHaveCount(5);
  await expect(roster.getByRole("link", { name: "US patents", includeHidden: true })).toBeHidden();

  for (const biography of await biographies.all()) {
    await expect(biography).not.toHaveAttribute("open", "");
    const summary = biography.locator("summary");
    await expect(summary).toHaveText("Full biography");
    await summary.focus();
    await page.keyboard.press("Enter");
    await expect(biography).toHaveAttribute("open", "");
  }
  await expect(roster.getByRole("link", { name: "US patents" })).toBeVisible();
  await expect(
    roster.getByRole("link", { name: "peer-reviewed science papers" }),
  ).toBeVisible();
  await expect(roster).toContainText("Steve Han previously invested at March Capital");
  await expect(roster).toContainText("65M peak concurrent streams on Netflix");
  await expect(roster).toContainText("BA in Government from Harvard University");

  const proof = page.locator("#proof");
  await proof.scrollIntoViewIfNeeded();
  await expect(proof.getByRole("link", { name: "Gianluca Bencomo" })).toBeVisible();
  await expect(proof.getByRole("link", { name: "Eric Glyman", includeHidden: true })).toBeHidden();
  await expect(proof.getByRole("link", { name: "Rob Skillington", includeHidden: true })).toBeHidden();

  const featuredReference = proof.locator("[data-featured-reference]");
  await expect(featuredReference).toBeVisible();
  await expect(featuredReference).toContainText("Anti Fund was our first investor");
  await expect(featuredReference).toContainText("Gianluca Bencomo");
  await expect(proof.locator("blockquote:visible")).toHaveCount(1);

  const moreReferences = proof.locator("[data-founder-references]");
  const referenceSummary = moreReferences.locator("summary");
  await expect(referenceSummary).toContainText("More founder references");
  await referenceSummary.focus();
  await page.keyboard.press("Enter");
  await expect(moreReferences).toHaveAttribute("open", "");
  await expect(moreReferences.getByRole("link", { name: "Eric Glyman" })).toBeVisible();
  await expect(moreReferences.getByRole("link", { name: "Sam Blond" })).toBeVisible();
  await expect(moreReferences.getByRole("link", { name: "Rob Skillington" })).toBeVisible();
  await expect(proof.locator("blockquote:visible")).toHaveCount(7);
  await expect(proof).toContainText("Geoff Woo invested personally in Ramp's Seed and Series B rounds. Anti Fund invested in Series D.");
  await expect(proof).not.toContainText("Abraham Othman");
  await referenceSummary.focus();
  await page.keyboard.press("Space");
  await expect(moreReferences).not.toHaveAttribute("open", "");
  await expect(proof.locator("blockquote:visible")).toHaveCount(1);
});

test("typography pairs readable sans body copy with serif identity and mono metadata", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);

  const fonts = await page.evaluate(() => ({
    body: window.getComputedStyle(document.querySelector("main") as HTMLElement).fontFamily,
    hero: window.getComputedStyle(document.querySelector("#top h1") as HTMLElement).fontFamily,
    label: window.getComputedStyle(
      document.querySelector(".paper-label") as HTMLElement,
    ).fontFamily,
  }));

  expect(fonts.body.replaceAll("_", " ")).toMatch(/IBM Plex Sans/i);
  expect(fonts.hero.replaceAll("_", " ")).toMatch(/Source Serif 4/i);
  expect(fonts.label.replaceAll("_", " ")).toMatch(/IBM Plex Mono/i);
  await expect(page.locator('link[href*="fonts.googleapis.com"], link[href*="fonts.gstatic.com"]')).toHaveCount(0);
});

test("one field story leads to the complete media archive through a disclosure", async ({
  page,
}) => {
  await page.goto("/");

  const media = page.locator("#media");
  await media.scrollIntoViewIfNeeded();
  await expect(media.getByRole("heading", { level: 2 })).toBeVisible();
  await expect(media.locator("article:visible")).toHaveCount(1);
  await expect(
    media.getByAltText("Jake Paul and Geoff Woo visit hardware startups in El Segundo."),
  ).toBeVisible();
  await expect(
    media.getByAltText("Geoff Woo and Logan Paul in Silicon Valley."),
  ).toBeHidden();

  const archive = media.locator("[data-media-archive]");
  const archiveSummary = archive.locator("summary");
  await expect(archiveSummary).toContainText("More conversations & field notes");
  await archiveSummary.focus();
  await page.keyboard.press("Enter");
  await expect(archive).toHaveAttribute("open", "");
  await expect(media.locator("article:visible")).toHaveCount(3);
  await expect(
    media.getByAltText("Geoff Woo and Logan Paul in Silicon Valley."),
  ).toBeVisible();
  await expect(
    media.getByAltText("Geoff Woo, Palmer Luckey, and Jake Paul at Anduril."),
  ).toBeVisible();

  const expectedLinks = [
    ["Jake Paul & Geoff Woo visit El Segundo", "https://www.youtube.com/watch?v=DhVwnSa31WM&t=4s"],
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
  await archiveSummary.focus();
  await page.keyboard.press("Space");
  await expect(archive).not.toHaveAttribute("open", "");
  await expect(media.locator("article:visible")).toHaveCount(1);
});

test("faq disclosure and keyboard navigation work", async ({ page }) => {
  await page.goto("/");

  const faq = page.locator("#faq");
  await faq.scrollIntoViewIfNeeded();
  const faqSummary = faq.locator("summary");
  await expect(faqSummary).toContainText("Common questions");
  await expect(faq.getByRole("button", { name: "How can I invest in the fund?", includeHidden: true })).toBeHidden();
  await faqSummary.focus();
  await page.keyboard.press("Enter");
  await expect(faq).toHaveAttribute("open", "");

  const investorButton = faq.getByRole("button", {
    name: "How can I invest in the fund?",
  });
  const investorPanel = faq.locator("#faq-panel-5");
  await expect(investorButton).toHaveAttribute("aria-expanded", "false");
  await expect(investorPanel).toHaveAttribute("aria-hidden", "true");
  await investorButton.click();
  await expect(investorButton).toHaveAttribute("aria-expanded", "true");
  await expect(investorPanel).toHaveAttribute("aria-hidden", "false");
  await expect(investorPanel.getByRole("link", { name: "ir@antifund.com", exact: true })).toHaveAttribute("href", "mailto:ir@antifund.com");
  await investorButton.click();
  await expect(investorPanel).toHaveAttribute("aria-hidden", "true");
  await expect(investorPanel.getByRole("link", { name: "ir@antifund.com", exact: true })).toHaveCount(0);

  await faq.getByRole("button", { name: "What should founders send?", exact: true }).click();
  await expect(faq.getByRole("link", { name: "founders@antifund.com", exact: true })).toHaveAttribute("href", "mailto:founders@antifund.com");

  const buttons = faq.getByRole("button");
  await buttons.nth(0).focus();
  await page.keyboard.press("ArrowDown");
  await expect(buttons.nth(1)).toBeFocused();
  await faqSummary.focus();
  await page.keyboard.press("Space");
  await expect(faq).not.toHaveAttribute("open", "");
  await expect(buttons.nth(0)).toBeHidden();
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
    await expect(iconLink).toHaveAttribute("href", /icon.*\.png/);
    const iconHref = await iconLink.getAttribute("href");
    expect(iconHref).toBeTruthy();
    const appleIconLink = page.locator('link[rel="apple-touch-icon"]');
    await expect(appleIconLink).toHaveAttribute("href", /apple-icon.*\.png/);
    const appleIconHref = await appleIconLink.getAttribute("href");
    expect(appleIconHref).toBeTruthy();

    expect(
      await page.evaluate(() =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      ),
    ).toBeTruthy();

    const portfolioLogo = page.locator(".portfolio-logo").first();
    await expect(portfolioLogo).toHaveCSS("transition-duration", "0s");
    await expect(portfolioLogo).toHaveCSS("transform", "none");

    const [ogResponse, twitterResponse, iconResponse, appleIconResponse] =
      await Promise.all([
        request.get("/opengraph-image.jpg"),
        request.get("/twitter-image.jpg"),
        request.get(new URL(iconHref!, page.url()).toString()),
        request.get(new URL(appleIconHref!, page.url()).toString()),
      ]);

    expect(ogResponse.ok()).toBeTruthy();
    expect(twitterResponse.ok()).toBeTruthy();
    expect(iconResponse.ok()).toBeTruthy();
    expect(iconResponse.headers()["content-type"]).toContain("image/png");
    expect(appleIconResponse.ok()).toBeTruthy();
    expect(appleIconResponse.headers()["content-type"]).toContain("image/png");
  });
});
