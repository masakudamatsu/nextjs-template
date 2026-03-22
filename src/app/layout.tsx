import type { Metadata } from 'next'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
