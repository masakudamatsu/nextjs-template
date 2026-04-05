import { test, expect } from '@playwright/test'

test('sitemap.xml is accessible and valid', async ({ page }) => {
  const response = await page.goto('/sitemap.xml')
  expect(response?.status()).toBe(200)
  const content = await response!.text()
  expect(content).toContain('<urlset')
})

test('sitemap.xml contains site URL', async ({ page }) => {
  const response = await page.goto('/sitemap.xml')
  const content = await response!.text()
  expect(content).toContain(process.env.SITE_URL)
})
