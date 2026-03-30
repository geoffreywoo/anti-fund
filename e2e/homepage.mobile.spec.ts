import { expect, test } from "@playwright/test";

test.use({
  viewport: { width: 375, height: 667 },
  isMobile: true,
  hasTouch: true,
});

test("mobile overlay locks scroll, closes with escape, and routes to the founder CTA", async ({
  page,
}) => {
  await page.goto("/");

  const menuButton = page.getByRole("button", {
    name: "Open navigation menu",
  });
  await menuButton.click();

  const dialog = page.getByRole("dialog", { name: "Navigation menu" });
  await expect(dialog).toBeVisible();
  await expect
    .poll(async () => page.evaluate(() => document.body.style.overflow))
    .toBe("hidden");

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();

  await menuButton.click();
  await dialog.getByRole("link", { name: "Contact" }).click();

  await expect(dialog).toBeHidden();
  await expect(page).toHaveURL(/#contact/);

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  expect(hasHorizontalOverflow).toBeFalsy();
});
