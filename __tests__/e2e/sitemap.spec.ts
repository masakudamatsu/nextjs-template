import { test, expect } from '@playwright/test'

test('sitemap.xml is accessible and valid', async ({ page }) => {
  const response = await page.goto('/sitemap.xml')
  expect(response?.status()).toBe(200)
  const content = await page.content()
  expect(content).toContain('<urlset')
})

test('sitemap.xml contains site URL', async ({ page }) => {
  await page.goto('/sitemap.xml')
  const content = await page.content()
  expect(content).toContain(process.env.SITE_URL)
})
