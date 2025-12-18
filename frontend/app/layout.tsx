import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hello World App',
  description: 'Next.js with Docker and Nginx',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

