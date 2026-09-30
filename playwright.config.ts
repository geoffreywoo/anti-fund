import { defineConfig, devices } from "@playwright/test";

const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL;
const nextCommand = "node node_modules/next/dist/bin/next";
const serverCommand = process.env.CI
  ? `${nextCommand} build && ${nextCommand} start --port 3100`
  : `${nextCommand} ${process.env.PLAYWRIGHT_PRODUCTION ? "start" : "dev"} --port 3100`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: externalBaseURL ?? "http://localhost:3100",
    trace: "on-first-retry",
  },
  webServer: externalBaseURL ? undefined : {
    command: serverCommand,
    url: "http://localhost:3100",
    reuseExistingServer: false,
    timeout: 180_000,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});
