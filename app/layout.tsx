import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Blue Shelf | Walmart-Ready Product Content for CPG Brands',
  description: 'Win on the Digital Shelf. High-performing product photography and content designed to convert on Walmart.com.',
  generator: 'v0.app',
  metadataBase: new URL('https://blue-shelf.com'),
  openGraph: {
    title: 'Blue Shelf | Walmart-Ready Product Content for CPG Brands',
    description: 'Win on the Digital Shelf. High-performing product photography and content designed to convert on Walmart.com.',
    url: 'https://blue-shelf.com',
    siteName: 'Blue Shelf',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 1200,
        alt: 'Blue Shelf - Walmart Product Content',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Shelf | Walmart-Ready Product Content for CPG Brands',
    description: 'Win on the Digital Shelf. High-performing product photography and content designed to convert on Walmart.com.',
    images: ['/preview.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-[#0a0a0f]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
