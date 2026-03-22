import type { Metadata } from 'next'
import siteMetadata from '@/app/lib/metadata.json'

export const metadata: Metadata = {
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
}

export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
