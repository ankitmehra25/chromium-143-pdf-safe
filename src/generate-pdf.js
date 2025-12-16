import puppeteer from "puppeteer-core";
import fs from "fs";

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/chromium-browser",
  headless: "new",
  args: [
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
    "--font-render-hinting=none",
  ],
});

const page = await browser.newPage();
const html = fs.readFileSync("./src/pdf-template.html", "utf8");

await page.setContent(html, { waitUntil: "networkidle0" });

await page.pdf({
  path: "output.pdf",
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  margin: {
    top: "20mm",
    bottom: "28mm",
    left: "15mm",
    right: "15mm",
  },
});

await browser.close();
console.log("PDF generated: output.pdf");
