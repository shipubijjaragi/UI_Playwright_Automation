import { test, expect } from '@playwright/test';

test('Amazon dropdown test', async ({ page }) => {
  // Go to Amazon
  await page.goto('https://www.amazon.in/');

  // Locate the category dropdown
  const dropdown = page.locator('#searchDropdownBox');

  // Select by label (visible text)
  await dropdown.selectOption({ label: 'Books' });

  // Assert selection
  const selectedValue = await dropdown.inputValue();
  console.log('Selected value:', selectedValue); // should be "search-alias=stripbooks"
  expect(selectedValue).toBe('search-alias=stripbooks');

  // Search for something inside selected category
  await page.fill('#twotabsearchtextbox', 'Playwright Testing');
  await page.click('#nav-search-submit-button');

  // Verify search results contain the text
  await expect(page).toHaveURL(/Playwright/);
});
