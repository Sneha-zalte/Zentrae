import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zentrae.in'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ZENTRAE | Social Media Marketing Agency',
    template: '%s | ZENTRAE',
  },
  description: 'Navigate through an ocean of social content. We guide local businesses and D2C brands to success.',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'ZENTRAE | Social Media Marketing Agency',
    description: 'Navigate through an ocean of social content. We guide local businesses and D2C brands to success.',
    siteName: 'ZENTRAE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZENTRAE | Social Media Marketing Agency',
    description: 'Navigate through an ocean of social content. We guide local businesses and D2C brands to success.',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

