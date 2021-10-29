const puppeteer = require("puppeteer");

const product_url = "https://www.yeezysupply.com/product/GW3355";

async function givePage() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  return page;
}

async function addToCart(page) {
  await page.goto(product_url);
  await page.click();
}

async function checkout() {
  var page = await givePage();
  await addtoCart(page);
}

createPage();
