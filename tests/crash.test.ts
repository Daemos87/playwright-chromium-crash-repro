import { test } from "@playwright/test";

test("just crash", async ({ page }) => {
  await page.goto("https://playwright.dev/");
});
