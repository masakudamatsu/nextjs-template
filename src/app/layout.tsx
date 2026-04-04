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
    <html
      lang="en"
      className="antialiased motion-safe:scroll-smooth scroll-pt-header text-size-adjust-none"
    >
      <body className="bg-off-white min-h-screen text-off-black">
        {children}
      </body>
    </html>
  )
}
