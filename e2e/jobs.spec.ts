import { expect, test } from "@playwright/test";

const roles = [
  { path: "/job/associate", heading: "Member of Technical Staff" },
  { path: "/job/capital", heading: "Investor Relations & Capital Formation" },
] as const;

test("candidates can find both roles and return to the careers index", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Jobs", exact: true }).click();
  await expect(page).toHaveURL(/\/job$/);
  await expect(page.getByRole("main")).toContainText("Associate");
  await expect(page.getByRole("main")).toContainText("Investor Relations & Capital Formation");

  for (const role of roles) {
    const roleLink = page.locator(`main a[href="${role.path}"]`).first();
    await expect(roleLink).toBeVisible();
    await roleLink.click();
    await expect(page).toHaveURL(new RegExp(`${role.path}$`));
    await expect(page.getByRole("heading", { level: 1, name: role.heading, exact: true })).toBeVisible();
    const allRolesLink = page.locator('main a[href="/job"]').first();
    await expect(allRolesLink).toBeVisible();
    await allRolesLink.click();
    await expect(page).toHaveURL(/\/job$/);
  }
});

test("the Associate posting retains its requirements and application destination", async ({ page }) => {
  await page.goto("/job/associate");

  const main = page.getByRole("main");
  await expect(main).toContainText("2–4 years of experience");
  await expect(main).toContainText("Based in San Francisco or New York City only.");
  await expect(main).toContainText("Build and manage agents");
  await expect(main).toContainText("Show us something you’ve built.");

  const applicationLinks = main.locator('a[href^="mailto:job@antifund.com"]');
  expect(await applicationLinks.count()).toBeGreaterThan(0);
  for (const link of await applicationLinks.all()) {
    const destination = new URL((await link.getAttribute("href"))!);
    expect(destination.protocol).toBe("mailto:");
    expect(destination.pathname).toBe("job@antifund.com");
    expect(destination.searchParams.get("subject")).toBe("Member of Technical Staff / Associate");
  }
});

test("capital formation publishes the approved role and routes applications by subject", async ({ page }) => {
  await page.goto("/job/capital");

  const main = page.getByRole("main");
  await expect(main).toContainText("Principal");
  await expect(main).toContainText("Managing Director");
  await expect(main).toContainText("Managing Partners");
  await expect(main).toContainText(/experience and skillset/i);
  await expect(main).toContainText(/full.?time/i);
  await expect(main).toContainText("Work alongside our partners to move relationships from introduction through diligence and closing.");
  await expect(main).toContainText("Your primary responsibility is to turn investor interest into long-term capital partnerships.");
  await expect(main).toContainText("Contribute to portfolio management");
  await expect(main).toContainText("fund of funds, endowment, foundation, or another institutional allocator");
  await expect(main).toContainText("cover letter and resume");
  await expect(main).toContainText("[capital]");
  await expect(main).not.toContainText(/\b(?:Laura|Brady|Geoffrey|Jake|Logan)\b/);
  await expect(main).not.toContainText(/San Francisco|New York City|Outstanding choices|Working scope/);

  await expect(main.locator(".paper-label").filter({ hasText: /^0[1-4] \/ / })).toHaveText([
    "01 / The ambition",
    "02 / The work",
    "03 / Who you are",
    "04 / Requirements",
  ]);

  const applicationLinks = main.locator('a[href^="mailto:job@antifund.com"]');
  expect(await applicationLinks.count()).toBeGreaterThan(0);
  for (const link of await applicationLinks.all()) {
    const destination = new URL((await link.getAttribute("href"))!);
    expect(destination.pathname).toBe("job@antifund.com");
    expect(destination.searchParams.get("subject")).toBe("[capital]");
  }
});

test("careers routes have canonical metadata and keyboard access", async ({ page }) => {
  for (const path of ["/job", ...roles.map((role) => role.path)]) {
    const response = await page.goto(path);
    expect(response?.ok(), path).toBeTruthy();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://antifund.com${path}`);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", `https://antifund.com${path}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("contentinfo")).toHaveCount(1);

    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Skip to content", exact: true })).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("main#main-content")).toBeFocused();
  }
});

test("careers and role details remain usable at a mobile width", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  const browserErrors: string[] = [];
  page.on("pageerror", (error) => browserErrors.push(error.message));

  await page.goto("/job");
  for (const role of roles) {
    const link = page.locator(`main a[href="${role.path}"]`).first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(new RegExp(`${role.path}$`));
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1, name: role.heading, exact: true })).toBeVisible();
    const overflows = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(overflows, role.path).toBeFalsy();
    await expect(page.locator('main a[href^="mailto:job@antifund.com"]').first()).toBeVisible();
    await page.locator('main a[href="/job"]').first().click();
    await expect(page).toHaveURL(/\/job$/);
  }
  const indexOverflows = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(indexOverflows, "/job").toBeFalsy();
  expect(browserErrors).toEqual([]);
});
