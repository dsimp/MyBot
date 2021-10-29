const puppeteer = require("puppeteer");

const product_url = "https://www.yeezysupply.com/product/GW3355";

async function givePage() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  return page;
}

async function addToCart(page) {
  await page.goto(product_url);
  await page.select(".gl-dropdown-native_select-element", "GW3355_620");
  await page.click("button[data-auto-id='ys-add-to-bag-btn']", (elem) =>
    elem.click()
  );
  await page.waitForSelector("a[data-auto-id='yeezy-mini-basket']");
  await page.click("a[data-auto-id='yeezy-mini-basket']", (elem) =>
    elem.click()
  );
  await page.click(
    "button[data-auto-id='glass-checkout-button-bottom']",
    (elem) => elem.click()
  );
  await page.waitForNavigation();
}

async function checkout() {
  var page = await givePage();
  await addtoCart(page);
}

createPage();
