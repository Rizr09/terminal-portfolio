import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rizky\'s Portfolio',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  description: 'Created with 💖',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
