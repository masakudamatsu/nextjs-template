import { test, expect } from '@playwright/test'

test('unknown route shows not-found page', async ({ page }) => {
  const randomPath = `/${Math.random().toString(36).slice(2)}`
  await page.goto(randomPath)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.getByRole('link', { name: /return home/i })).toBeVisible()
})
