import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Swarm Squad',
  description: 'A simulation framework for multi-agent systems.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Example direct link (usually handled by metadata.icons now):
        <link rel="icon" href="/favicon.ico" sizes="any" />
        */}
      </head>
      <body>{children}</body>
    </html>
  )
}
