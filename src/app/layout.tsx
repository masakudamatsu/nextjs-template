import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  robots:
    process.env.APP_ENV === 'production'
      ? undefined
      : { index: false, follow: false },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-off-white text-off-black">{children}</body>
    </html>
  )
}
