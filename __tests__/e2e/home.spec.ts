import { test, expect } from '@playwright/test'
import siteMetadata from '@/app/lib/metadata.json'

test('page metadata matches metadata.json', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(siteMetadata.home.title)
  const description = page.locator('meta[name="description"]')
  await expect(description).toHaveAttribute(
    'content',
    siteMetadata.home.description,
  )
})

test('home page loads', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

// Snapshot test template
// Set maxDiffPixels and threshold according to your needs. It's best to set it by test, rather than globally in playwright.config.ts, to avoid false positives in other tests.
test.skip('home page snapshot', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveScreenshot({
    maxDiffPixels: 0, // An acceptable amount of pixels that could be different
    threshold: 0, // An acceptable perceived color difference in the YIQ color space between the same pixel in compared images, between zero (strict) and one (lax)
  })
})
