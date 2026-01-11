import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zentrae.in'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ZENTRAE | Social Media Marketing Agency',
    template: '%s | ZENTRAE',
  },
  description: 'ZENTRAE - Your trusted social media marketing partner. We help local businesses and D2C brands navigate the digital ocean with strategic content, creative campaigns, and measurable growth. Transform your online presence today.',
  keywords: [
    'social media marketing',
    'digital marketing',
    'content strategy',
    'brand growth',
    'social media management',
    'D2C brand marketing',
    'local business marketing',
  ],
  authors: [{ name: 'ZENTRAE' }],
  creator: 'ZENTRAE',
  publisher: 'ZENTRAE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/logo-light.png',
    shortcut: '/images/logo-light.png',
    apple: '/images/logo-light.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'ZENTRAE | Social Media Marketing Agency',
    description: 'ZENTRAE - Your trusted social media marketing partner. We help local businesses and D2C brands navigate the digital ocean with strategic content, creative campaigns, and measurable growth.',
    siteName: 'ZENTRAE',
    images: [
      {
        url: '/images/logo-light.png',
        width: 1200,
        height: 630,
        alt: 'ZENTRAE - Social Media Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZENTRAE | Social Media Marketing Agency',
    description: 'ZENTRAE - Your trusted social media marketing partner. We help local businesses and D2C brands navigate the digital ocean with strategic content, creative campaigns, and measurable growth.',
    images: ['/images/logo-light.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

