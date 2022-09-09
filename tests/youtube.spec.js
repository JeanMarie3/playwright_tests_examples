const { test, expect } = require('@playwright/test');

test('youtube testing', async ({ page }) => {

    // Go to https://www.youtube.com/
    await page.goto('https://www.youtube.com/');

    // Click [aria-label="Accept the use of cookies and other data for the purposes described"]
    await page.locator('[aria-label="Accept the use of cookies and other data for the purposes described"]').click();
    await page.waitForURL('https://www.youtube.com/');

    // Click [placeholder="Search"]
    await page.locator('[placeholder="Search"]').click();

    // Click [placeholder="Search"]
    await page.locator('[placeholder="Search"]').click();

    // Fill [placeholder="Search"]
    await page.locator('[placeholder="Search"]').fill('Python');

    // Press Enter
    await page.locator('[placeholder="Search"]').press('Enter');
    await page.waitForURL('https://www.youtube.com/results?search_query=Python');

    // Click text=2:09:48 Now playing Watch later Watch later Add to queue Add to queue >> #thumbnail
    await page.locator('text=2:09:48 Now playing Watch later Watch later Add to queue Add to queue >> #thumbnail').click();
    await page.waitForURL('https://www.youtube.com/watch?v=BBu6ZoAHIwI');

    // Click button:has-text("Skip Ads")
    await page.locator('button:has-text("Skip Ads")').click();

    // Click [aria-label="Skip trial"]
    await page.locator('[aria-label="Skip trial"]').click();

    // Click .ytp-timed-markers-container
    await page.locator('.ytp-timed-markers-container').click();

    // Click ytd-watch-flexy[role="main"] yt-formatted-string:has-text("Python - podstawy w 2h")
    await page.locator('ytd-watch-flexy[role="main"] yt-formatted-string:has-text("Python - podstawy w 2h")').click();

    // Click [aria-label="\31 3\,283 likes"]
    await page.locator('[aria-label="\\31 3\\,283 likes"]').click();

    // Click yt-formatted-string:has-text("Dislike")
    await page.locator('yt-formatted-string:has-text("Dislike")').click();

    // Click text=Jak nauczyć się programowania Jak nauczyć się programowania 55.8K subscribers >> a
    await page.locator('text=Jak nauczyć się programowania Jak nauczyć się programowania 55.8K subscribers >> a').click();
    await page.waitForURL('https://www.youtube.com/c/Jaknauczy%C4%87si%C4%99programowania');

    // Go to https://www.youtube.com/watch?v=BBu6ZoAHIwI
    await page.goto('https://www.youtube.com/watch?v=BBu6ZoAHIwI');

    // Click text=Nov 17, 2020
    await page.locator('text=Nov 17, 2020').click();

    // Click text=617,431 views
    await page.locator('text=617,431 views').click();

    // Click [aria-label="Next \(SHIFT\+n\)"]
    await page.locator('[aria-label="Next \\(SHIFT\\+n\\)"]').click();
    await page.waitForURL('https://www.youtube.com/watch?v=ZfO5w2yq7cI');

    // Click button:has-text("Skip Ads")
    await page.locator('button:has-text("Skip Ads")').click();

    // Click [aria-label="Skip trial"]
    await page.locator('[aria-label="Skip trial"]').click();

    // ---------------------
    await context.close();
    await browser.close();
});