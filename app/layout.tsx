import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GlamCS',
  description: 'Experience luxury and elegance in cosmetics with GlamCS.',
  keywords: ['cosmetics', 'GlamCS', 'luxury', 'elegance', 'modern'],
  authors: [{ name: 'GlamCS' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className} bg-gradient-to-br from-orange-300 to-white min-h-screen antialiased`}>
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}