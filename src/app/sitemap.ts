import type { MetadataRoute } from 'next'

const PAGES = ['/'] // Add more pages here as needed, e.g., '/about', '/contact', etc.

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL ?? 'http://localhost:3000'
  return PAGES.map((page) => ({
    url: page === '/' ? siteUrl : `${siteUrl}${page}`, // to enfoce no trailing slash for the homepage
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  }))
}
