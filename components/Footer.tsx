'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'
import { cn } from '@/lib/utils'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <footer className="relative border-t border-ocean-800/20 bg-gradient-to-b from-background to-ocean-950/20 dark:to-ocean-950/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col"
            >
              <div className="relative flex items-start mb-4">
                <Image
                  src={theme === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png'}
                  alt="ZENTRAE Logo"
                  width={240}
                  height={80}
                  className="h-auto w-auto object-contain max-w-[200px] sm:max-w-[240px]"
                  style={{ height: 'auto' }}
                  priority
                />
              </div>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed max-w-md mb-4">
                Your trusted guide through the ocean of social content. We help local businesses
                and D2C brands navigate the ever-changing tides of social media marketing.
              </p>
              <div className="flex gap-4">
                {[
                  {
                    name: 'Instagram',
                    href: '#',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    ),
                  },
                  {
                    name: 'Facebook',
                    href: '#',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    ),
                  },
                  {
                    name: 'LinkedIn',
                    href: '#',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                  },
                  {
                    name: 'YouTube',
                    href: '#',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    ),
                  },
                ].map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-10 h-10 rounded-full glass hover:glass-strong flex items-center justify-center text-foreground/70 hover:text-ocean-800 dark:hover:text-ocean-400 transition-all duration-300 group"
                    aria-label={platform.name}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links and Get in Touch - Side by side on mobile */}
            <div className="grid grid-cols-2 lg:col-span-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {footerLinks.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        whileHover={{ x: 4 }}
                        className="text-foreground/70 hover:text-ocean-800 dark:hover:text-ocean-400 transition-colors duration-300 inline-block text-sm sm:text-base"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:zentraeindia@gmail.com"
                      className="text-foreground/70 hover:text-ocean-800 dark:hover:text-ocean-400 transition-colors duration-300 inline-block text-sm sm:text-base break-words"
                    >
                      zentraeindia@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+918657684375"
                      className="text-foreground/70 hover:text-ocean-800 dark:hover:text-ocean-400 transition-colors duration-300 inline-block text-sm sm:text-base"
                    >
                      8657684375
                    </a>
                  </li>
                  <li>
                    <p className="text-foreground/70 text-sm sm:text-base">Mumbai</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 border-t border-ocean-800/20 flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <p className="text-foreground/60 text-sm">
              © {currentYear} ZENTRAE. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ocean-800 to-transparent opacity-30" />
    </footer>
  )
}

