import { expect, test } from '@Test';

test.describe('check amount of product on page', () => {
    test('quantity of product should be 36', async ({ categoryPage, baseURL, page }) => {
        await categoryPage.open('contact-lenses');

        const url = page.url();
        expect(url).toBe(`${baseURL}contact-lenses`);

        const products = await categoryPage.getProducts();
        await page.waitForTimeout(5000);
        expect(products.length).toBe(36);
    });
});
