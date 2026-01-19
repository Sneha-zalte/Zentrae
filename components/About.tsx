'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-background via-ocean-50/60 to-background dark:from-background dark:via-ocean-950/30 dark:to-background"
    >
      {/* Subtle decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-200/30 via-transparent to-dream-200/30 dark:from-ocean-900/20 dark:via-transparent dark:to-dream-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,58,140,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(40,169,255,0.05),transparent_50%)] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-ocean-800 to-ocean-900 dark:from-ocean-400 dark:to-dream-400 bg-clip-text text-transparent">
                Your Guide Through
              </span>
              <br />
              <span className="text-foreground">The Social Ocean</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
              In a sea of content, standing out requires strategy, creativity, and a partner
              who understands the currents. ZENTRAE navigates these waters with precision
              and purpose.
            </p>
          </motion.div>

          {/* How We Work */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              <span className="bg-gradient-to-r from-ocean-800 to-ocean-900 dark:from-ocean-400 dark:to-dream-400 bg-clip-text text-transparent">
                How We Work
              </span>
            </h3>
            
            {/* Timeline Flow */}
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline Line - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean-800 via-ocean-900 to-ocean-800 transform -translate-x-1/2 opacity-30" />
              
              <div className="space-y-8 lg:space-y-12">
                {[
                  {
                    number: '01',
                    title: 'Understand',
                    details: 'Brand • Audience • Goals',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )
                  },
                  {
                    number: '02',
                    title: 'Define Direction',
                    details: 'Strategy • Platforms • Framework',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    )
                  },
                  {
                    number: '03',
                    title: 'Build the System',
                    details: 'Content Pillars • Structure • Consistency',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                      </svg>
                    )
                  },
                  {
                    number: '04',
                    title: 'Create & Execute',
                    details: 'Platform-Native Content • Scheduling',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    number: '05',
                    title: 'Engage & Grow',
                    details: 'Community • Interaction • Trust',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )
                  },
                  {
                    number: '06',
                    title: 'Measure & Optimize',
                    details: 'Insights • Performance • Refinement',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )
                  },
                  {
                    number: '07',
                    title: 'Scale with Intent',
                    details: 'What Works • Expansion • Long-Term Growth',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative"
                  >
                    {/* Timeline Item */}
                    <div className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}>
                      {/* Content Card */}
                      <div className="flex-1 w-full lg:w-auto">
                        <motion.div
                          whileHover={{ y: -4 }}
                          className="p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl glass hover:glass-strong transition-all duration-300 border-2 border-transparent hover:border-ocean-800/30"
                        >
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-ocean-800 to-ocean-900 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                                {step.number}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                <div className="text-ocean-800 dark:text-ocean-400 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                                  {step.icon}
                                </div>
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground dark:text-foreground/95 break-words">
                                  {step.title}
                                </h4>
                              </div>
                              <p className="text-foreground/70 dark:text-foreground/80 text-xs sm:text-sm md:text-base leading-relaxed">
                                {step.details}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Timeline Dot - Only visible on desktop */}
                      <div className="hidden lg:flex flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-ocean-800 to-ocean-900 items-center justify-center z-10 border-4 border-background dark:border-ocean-950 shadow-lg">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>
                      
                      {/* Spacer for alternating layout */}
                      <div className="hidden lg:block flex-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Platforms We Work With */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                <span className="bg-gradient-to-r from-ocean-800 to-ocean-900 dark:from-ocean-400 dark:to-dream-400 bg-clip-text text-transparent">
                  Platforms We Work With
                </span>
              </h3>
              <p className="text-base sm:text-lg text-foreground/70 dark:text-foreground/80 max-w-2xl mx-auto font-medium">
                We manage and optimize your presence across all major social media platforms.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto justify-items-center">
              {[
                {
                  name: 'Instagram',
                  href: 'https://www.instagram.com/zentrae.in',
                  icon: (
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ),
                },
                {
                  name: 'Facebook',
                  href: 'https://www.facebook.com/share/1AYXLgSinR/',
                  icon: (
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                },
                {
                  name: 'LinkedIn',
                  href: '#',
                  icon: (
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
                {
                  name: 'WhatsApp',
                  href: 'https://wa.me/919167075095',
                  icon: (
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  ),
                },
              ].map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  target={platform.href !== '#' ? '_blank' : undefined}
                  rel={platform.href !== '#' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl glass hover:glass-strong transition-all duration-300 text-center cursor-pointer group w-full max-w-[200px] sm:max-w-none"
                >
                  {/* Icon */}
                  <div className="relative flex justify-center mb-2 sm:mb-3">
                    <div className={`group-hover:scale-110 transition-transform duration-300 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${
                      platform.name === 'Instagram' ? 'text-[#E4405F]' :
                      platform.name === 'Facebook' ? 'text-[#1877F2]' :
                      platform.name === 'LinkedIn' ? 'text-[#0A66C2]' :
                      platform.name === 'WhatsApp' ? 'text-[#25D366]' :
                      'text-ocean-800 dark:text-cyan-300'
                    }`}>
                      {platform.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground dark:text-foreground/95 text-xs sm:text-sm md:text-base">
                    {platform.name}
                  </h4>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Who We're Built For */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 relative"
          >
            <div className="text-center space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                <span className="bg-gradient-to-r from-ocean-800 to-ocean-900 dark:from-ocean-400 dark:to-dream-400 bg-clip-text text-transparent">
                  Who We&apos;re Built For
                </span>
              </h3>
              <p className="text-base sm:text-lg text-foreground/70 dark:text-foreground/80 max-w-2xl mx-auto font-medium">
                We work with brands that see social media as a long-term growth channel — not a shortcut.
              </p>
            </div>

            {/* Navigation Line Connecting Cards */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-800/30 to-transparent transform -translate-y-1/2 pointer-events-none" style={{ top: '50%', marginTop: '80px' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10 max-w-3xl mx-auto">
              {[
                { 
                  label: 'Local Businesses',
                  trait: 'Built for visibility & trust',
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                  )
                },
                { 
                  label: 'D2C Brands',
                  trait: 'Designed to scale attention',
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  )
                },
                { 
                  label: 'Professionals',
                  trait: 'Positioned for authority',
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  )
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative px-5 sm:px-6 py-10 sm:py-12 rounded-xl sm:rounded-2xl glass hover:glass-strong transition-all duration-300 text-center cursor-default group"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="text-ocean-800 dark:text-cyan-300 group-hover:text-ocean-900 dark:group-hover:text-cyan-200 transition-colors duration-300 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  <h4 className="font-bold text-foreground dark:text-foreground/95 text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
                    {item.label}
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/60 dark:text-foreground/70 italic">
                    {item.trait}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Closing Line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-base sm:text-lg font-semibold text-foreground/80 dark:text-foreground/90 mt-8"
            >
              Different stages. One clear direction.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div 
          className="absolute rounded-full opacity-5 blur-3xl"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(24, 144, 255, 0.5), transparent)',
            left: '50%',
            top: '30%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </section>
  )
}
