import { defineConfig } from "@playwright/test";

export default defineConfig({
  timeout: 120 * 1000,

  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,

  workers: process.env.CI ? 1 : 1,
  reporter: [["html", { open: "never" }], ["list"]],
  snapshotDir: "snapshots",
  use: {
    browserName: "chromium",
    channel: "chromium", // i'm using chromium here because i don't want to run the chromium shell
    locale: "en-GB",
    viewport: null,
    headless: !!process.env.CI,
    screenshot: "only-on-failure",
    trace: "off",
  },
});
