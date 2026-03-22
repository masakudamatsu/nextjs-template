import { test, expect } from '@playwright/test'
import siteMetadata from '@/app/lib/metadata.json'

test('page metadata matches metadata.json', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(siteMetadata.home.title)
  const description = page.locator('meta[name="description"]')
  await expect(description).toHaveAttribute('content', siteMetadata.home.description)
})

test('home page loads', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})

test('home page snapshot', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveScreenshot()
})
