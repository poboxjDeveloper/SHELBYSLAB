const puppeteer = require('puppeteer');

async function exportBookmarks() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the bookmarks page
  await page.goto('chrome://bookmarks');

  // Wait for the bookmarks to load (adjust the timeout as needed)
  new Promise((r) => setTimeout(r, milliseconds));
  // await page.waitForTimeout(2000);

  // Extract bookmarks data
  const bookmarks = await page.evaluate(() => {
    const bookmarkNodes = document.querySelectorAll(
      '.bookmarks-bar .bookmark-node'
    );

    return Array.from(bookmarkNodes).map((node) => {
      return {
        title: node.querySelector('.title').innerText,
        url: node.querySelector('.url').innerText,
      };
    });
  });

  // Close the browser
  await browser.close();

  return bookmarks;
}

// Run the script and log the bookmarks
exportBookmarks().then((bookmarks) => {
  console.log(bookmarks);
});

//node exportBookmarks.js

/*

const puppeteer = require('puppeteer');
const fs = require('fs');

async function exportBookmarks() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the bookmarks page
  await page.goto('chrome://bookmarks');

  // Wait for the bookmarks to load (adjust the timeout as needed)
  await page.waitForTimeout(2000);

  // Extract bookmarks data
  const bookmarks = await page.evaluate(() => {
    const bookmarkNodes = document.querySelectorAll('.bookmarks-bar .bookmark-node');

    return Array.from(bookmarkNodes).map((node) => {
      return {
        title: node.querySelector('.title').innerText,
        url: node.querySelector('.url').innerText,
      };
    });
  });

  // Close the browser
  await browser.close();

  return bookmarks;
}

// Run the script
exportBookmarks().then((bookmarks) => {
  // Convert bookmarks data to HTML
  const htmlContent = `<html>
    <head>
      <title>Bookmarks Export</title>
    </head>
    <body>
      <h1>Bookmarks</h1>
      <ul>
        ${bookmarks.map((bookmark) => `<li><a href="${bookmark.url}">${bookmark.title}</a></li>`).join('\n')}
      </ul>
    </body>
  </html>`;

  // Save to an external HTML file
  fs.writeFileSync('bookmarks_export.html', htmlContent);

  console.log('Bookmarks exported to bookmarks_export.html');
});


*/
