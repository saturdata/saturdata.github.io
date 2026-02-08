import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: 'Saturdata - The data community podcast',
  description: 'Humanizing the data world for the next generation of analysts, scientists, and engineers. Join hosts Shifra Williams and Sam LaFell every weekend.',
  generator: 'Next.js',
  metadataBase: new URL('https://saturdata.github.io'),
  keywords: ['data podcast', 'podcast', 'data careers', 'data science', 'data engineering', 'career advice', 'weekend podcast', 'data community', 'Shifra Williams', 'Sam LaFell', 'data analyst', 'machine learning', 'python', 'sql', 'saturdata', 'ai'],
  authors: [{ name: 'Shifra Williams' }],
  openGraph: {
    title: 'Saturdata Podcast - By and for the data community',
    description: 'Humanizing the data world for the next generation of analysts, scientists, and engineers. Join hosts Shifra Williams and Sam LaFell every weekend for authentic data career advice.',
    url: 'https://saturdata.github.io/',
    siteName: 'Saturdata Podcast',
    images: [
      {
        url: '/assets/images/logos/saturdata.png',
        width: 1200,
        height: 630,
        alt: 'Saturdata Podcast Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saturdata Podcast - By and for the data community',
    description: 'Humanizing the data world for the next generation of analysts, scientists, and engineers. Join hosts Shifra Williams and Sam LaFell every weekend for authentic data career advice.',
    images: ['/assets/images/logos/saturdata.png'],
    creator: '@shifrawilliams',
  },
  icons: {
    icon: '/favicons/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

