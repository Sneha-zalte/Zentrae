import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { defaultMetadata, viewport as siteViewport } from './metadata'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = defaultMetadata
export const viewport: Viewport = siteViewport

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zentrae.in'
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZENTRAE',
    url: siteUrl,
    logo: `${siteUrl}/images/logo-light.png`,
    description: 'ZENTRAE - Your trusted social media marketing partner. We help local businesses and D2C brands navigate the digital ocean with strategic content, creative campaigns, and measurable growth.',
    sameAs: [
      'https://www.instagram.com/zentrae.in',
      'https://www.facebook.com/share/1AYXLgSinR/',
      // Add other social media URLs here when available
      // 'https://www.linkedin.com/company/zentrae',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'zentraeindia@gmail.com',
      telephone: '+918657684375',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: 'en',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressCountry: 'IN',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

