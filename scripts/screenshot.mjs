#!/usr/bin/env node
/**
 * Usage: node scripts/screenshot.mjs <url> <out.png> [width=1440] [height=900] [fullPage=0]
 * Launches system chromium via puppeteer-core, waits for network idle + 1600ms
 * (so hero letter-rise + fade-up animations land on their final frame), then snaps.
 */
import puppeteer from "puppeteer-core";
import { existsSync } from "node:fs";

const [, , url, out, wStr, hStr, fullStr] = process.argv;
if (!url || !out) {
  console.error("usage: screenshot.mjs <url> <out.png> [w] [h] [fullPage]");
  process.exit(2);
}
const width = Number(wStr || 1440);
const height = Number(hStr || 900);
const fullPage = fullStr === "1" || fullStr === "full";

const chromePaths = [
  "/snap/bin/chromium",
  "/usr/bin/chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
];
const executablePath = chromePaths.find((p) => existsSync(p)) ?? chromePaths[0];

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: [
    "--no-sandbox",
    "--disable-gpu",
    "--hide-scrollbars",
    "--disable-dev-shm-usage",
  ],
  defaultViewport: { width, height, deviceScaleFactor: 1 },
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle2", timeout: 30_000 });
  // Wait for hero animations: letter-rise (0.46 + 0.9 = ~1.36s) + fade-up (~1.8s) + scroll indicator (~2.3s)
  await new Promise((r) => setTimeout(r, 1800));
  await page.screenshot({ path: out, fullPage, type: "png" });
  console.log(`captured ${out} (${width}x${height}${fullPage ? " fullPage" : ""})`);
} finally {
  await browser.close();
}
