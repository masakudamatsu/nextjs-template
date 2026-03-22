import { test, expect } from '@playwright/test'

test('noindex robots tag present in non-production env', async ({ page }) => {
  await page.goto('/')
  const robots = page.locator('meta[name="robots"]')
  await expect(robots).toHaveAttribute('content', 'noindex, nofollow')
})

test.describe('production env', () => {
  test.use({ baseURL: 'http://localhost:3001' })

  test('no robots meta tag in production env', async ({ page }) => {
    await page.goto('/')
    const robots = page.locator('meta[name="robots"]')
    await expect(robots).not.toBeAttached()
  })
})
