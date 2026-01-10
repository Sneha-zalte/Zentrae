'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}


export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (typeof window !== 'undefined' && sectionRef.current && contentRef.current) {
        // Animate header
        const headerEl = contentRef.current.querySelector('.about-header')
        if (headerEl) {
          gsap.fromTo(
            headerEl,
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
              },
            }
          )
        }

        // Animate "Who We're Built For" section
        const whoBuiltForSection = contentRef.current.querySelector('.who-we-built-for')
        if (whoBuiltForSection) {
          gsap.fromTo(
            whoBuiltForSection,
            {
              opacity: 0,
              y: 60,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: whoBuiltForSection,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          )

          // Animate "Who We're Built For" cards with stagger
          const profileCards = whoBuiltForSection.querySelectorAll('.profile-card')
          if (profileCards.length > 0) {
            gsap.fromTo(
              profileCards,
              {
                opacity: 0,
                y: 40,
                scale: 0.95,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: whoBuiltForSection,
                  start: 'top 80%',
                  toggleActions: 'play none none none',
                },
              }
            )
          }
        }

        // Animate "How We Work" section
        const howWeWorkSection = contentRef.current.querySelector('.how-we-work')
        if (howWeWorkSection) {
          gsap.fromTo(
            howWeWorkSection,
            {
              opacity: 0,
              y: 60,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: howWeWorkSection,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          )

          // Animate timeline items with stagger
          const timelineItems = howWeWorkSection.querySelectorAll('.timeline-item')
          if (timelineItems.length > 0) {
            gsap.fromTo(
              timelineItems,
              {
                opacity: 0,
                x: (index) => (index % 2 === 0 ? -50 : 50),
                scale: 0.9,
              },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: howWeWorkSection,
                  start: 'top 75%',
                  toggleActions: 'play none none none',
                },
              }
            )
          }
        }
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-background via-ocean-50/30 to-background dark:via-ocean-950/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="max-w-6xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center about-header"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-ocean-500 to-dream-500 bg-clip-text text-transparent">
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
            className="space-y-8 how-we-work"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              <span className="bg-gradient-to-r from-ocean-600 to-dream-600 dark:from-ocean-400 dark:to-dream-400 bg-clip-text text-transparent">
                How We Work
              </span>
            </h3>
            
            {/* Timeline Flow */}
            <div className="relative max-w-5xl mx-auto">
              {/* Timeline Line - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean-400 via-dream-400 to-ocean-400 transform -translate-x-1/2 opacity-30" />
              
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
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="relative timeline-item"
                  >
                    {/* Timeline Item */}
                    <div className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}>
                      {/* Content Card */}
                      <div className="flex-1 w-full lg:w-auto">
                        <motion.div
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="p-6 lg:p-8 rounded-2xl glass hover:glass-strong transition-all duration-300 border-2 border-transparent hover:border-ocean-500/30"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-ocean-500 to-dream-500 flex items-center justify-center text-white font-bold text-lg">
                                {step.number}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="text-ocean-500 dark:text-ocean-400">
                                  {step.icon}
                                </div>
                                <h4 className="text-xl lg:text-2xl font-bold text-foreground dark:text-foreground/95">
                                  {step.title}
                                </h4>
                              </div>
                              <p className="text-foreground/70 dark:text-foreground/80 text-sm sm:text-base leading-relaxed">
                                {step.details}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Timeline Dot - Only visible on desktop */}
                      <div className="hidden lg:flex flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-ocean-500 to-dream-500 items-center justify-center z-10 border-4 border-background dark:border-ocean-950 shadow-lg">
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

          {/* Who We're Built For */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 relative who-we-built-for"
          >
            {/* Ocean Current Flow Background - Subtle */}
            <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-20">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm" />
              <motion.div
                className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-cyan-400 via-sky-400 to-transparent"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                style={{ filter: 'blur(1px)' }}
              />
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
                <span className="bg-gradient-to-r from-ocean-600 to-dream-600 dark:from-ocean-400 dark:to-dream-400 bg-clip-text text-transparent">
                  Who We're Built For
                </span>
              </h3>
              <p className="text-base sm:text-lg text-foreground/70 dark:text-foreground/80 max-w-2xl mx-auto font-medium">
                We work with brands that see social media as a long-term growth channel — not a shortcut.
              </p>
            </div>

            {/* Navigation Line Connecting Cards */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform -translate-y-1/2 pointer-events-none" style={{ top: '50%', marginTop: '80px' }} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { 
                  label: 'Local Businesses',
                  trait: 'Built for visibility & trust',
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {/* Dock/Route Marker Icon */}
                      <circle cx="12" cy="12" r="8" strokeDasharray="2 2" opacity="0.3" />
                      <path d="M12 4 L12 12 L16 16" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" />
                      <path d="M8 12 L16 12 M12 8 L12 16" strokeLinecap="round" opacity="0.6" />
                    </svg>
                  )
                },
                { 
                  label: 'D2C Brands',
                  trait: 'Designed to scale attention',
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {/* Signal/Horizon Arrow Icon */}
                      <path d="M4 12 L20 12" strokeLinecap="round" />
                      <path d="M12 4 L20 12 L12 20" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 8 L8 16 M16 8 L16 16" strokeLinecap="round" opacity="0.5" />
                    </svg>
                  )
                },
                { 
                  label: 'Professionals',
                  trait: 'Positioned for authority',
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {/* Navigation Marker Icon */}
                      <circle cx="12" cy="12" r="8" strokeDasharray="1 1" opacity="0.3" />
                      <path d="M12 2 L14 10 L12 12 L10 10 Z" fill="currentColor" />
                      <path d="M12 12 L12 20" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </svg>
                  )
                },
                { 
                  label: 'Growing Companies',
                  trait: 'Structured for consistency',
                  icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {/* Route/Horizon Icon */}
                      <path d="M2 12 L10 12 L14 16 L22 16" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 8 Q6 6 10 8 T18 8 T22 8" strokeLinecap="round" opacity="0.5" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.6" />
                    </svg>
                  )
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative p-6 rounded-2xl glass hover:glass-strong transition-all duration-300 text-center cursor-default group overflow-hidden profile-card"
                >
                  {/* Subtle current flow animation on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    animate={{
                      background: [
                        'radial-gradient(circle at 0% 50%, rgba(56, 189, 248, 0.2), transparent)',
                        'radial-gradient(circle at 100% 50%, rgba(132, 204, 22, 0.2), transparent)',
                        'radial-gradient(circle at 0% 50%, rgba(56, 189, 248, 0.2), transparent)',
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Icon with glow and pulse */}
                  <motion.div
                    className="relative flex justify-center mb-4"
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                        <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 rounded-full" />
                      </div>
                      {/* Icon */}
                      <div className="relative text-cyan-400 dark:text-cyan-300 group-hover:text-cyan-300 dark:group-hover:text-cyan-200 transition-colors duration-300 filter drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                        {item.icon}
                      </div>
                    </div>
                  </motion.div>

                  <h4 className="font-bold text-foreground dark:text-foreground/95 text-base sm:text-lg mb-2">
                    {item.label}
                  </h4>
                  <p className="text-sm text-foreground/60 dark:text-foreground/70 italic">
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
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center text-base sm:text-lg font-semibold text-foreground/80 dark:text-foreground/90 mt-8"
            >
              Different stages. One clear direction.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10 blur-3xl"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              background: `radial-gradient(circle, rgba(24, 144, 255, 0.5), transparent)`,
              left: `${i * 33}%`,
              top: `${20 + i * 30}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
    </section>
  )
}

