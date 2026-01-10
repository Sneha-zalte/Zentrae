'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: 'Strategy & Direction',
    tagline: 'Direction before execution',
    description: 'We define the roadmap before creating or posting anything. Every decision is aligned with your business goals, audience behavior, and long-term growth vision.',
    points: [
      'Social media strategy',
      'Monthly content planning',
      'Platform prioritization',
      'Growth direction & guidance',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" strokeDasharray="2 2" opacity="0.3" />
        <path d="M12 3 L14 10 L12 12 L10 10 Z" fill="currentColor" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 3 L12 9 M12 15 L12 21 M3 12 L9 12 M15 12 L21 12" strokeLinecap="round" opacity="0.6" />
        <path d="M8 8 L16 8 M8 16 L16 16" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    gradient: 'from-ocean-400 to-dream-500',
  },
  {
    title: 'Account & Profile Management',
    tagline: 'Consistency across every touchpoint',
    description: 'We manage your social presence end-to-end to ensure your brand stays active, aligned, and professional across platforms.',
    points: [
      'Instagram, Facebook, LinkedIn management',
      'Profile, bio & highlights optimization',
      'Posting, scheduling & monitoring',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21 v-2 a6 6 0 0 1 12 0 v2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" strokeDasharray="1 1" opacity="0.3" />
        <path d="M12 4 L16 8 L12 12 L8 8 Z" opacity="0.5" />
      </svg>
    ),
    gradient: 'from-dream-400 to-ocean-500',
  },
  {
    title: 'Content & Creative Execution',
    tagline: 'Built for attention, not noise',
    description: 'We create visually strong, on-brand content designed to stop the scroll and communicate your message clearly.',
    points: [
      'Static & carousel post design',
      'Story strategy & posting',
      'Caption writing & hashtag strategy',
      'Visual consistency & layout planning',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="1 1" opacity="0.3" />
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <path d="M9 9 L15 15 M15 9 L9 15" strokeLinecap="round" opacity="0.6" />
        <circle cx="9" cy="9" r="1.5" fill="currentColor" opacity="0.7" />
        <circle cx="15" cy="15" r="1.5" fill="currentColor" opacity="0.7" />
      </svg>
    ),
    gradient: 'from-ocean-500 to-dream-600',
  },
  {
    title: 'Reels & Short-Form Video System',
    tagline: 'Designed to travel and perform',
    description: 'Short-form video is the engine of modern growth. We handle reels end-to-end — from concept to posting.',
    points: [
      'Reel ideation & hook planning',
      'Trend-based & brand strategies',
      'On-site videography & editing',
      'Professional covers & posting',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M9 8 L15 12 L9 16 Z" fill="currentColor" opacity="0.9" />
        <circle cx="18" cy="6" r="1.5" fill="currentColor" opacity="0.7" />
        <path d="M3 4 L21 4 M3 20 L21 20" strokeLinecap="round" opacity="0.3" />
      </svg>
    ),
    gradient: 'from-dream-500 to-ocean-600',
  },
  {
    title: 'Growth, Leads & Optimization',
    tagline: 'Guided by data, refined monthly',
    description: 'We continuously track performance, refine content, and optimize strategies to ensure steady and measurable progress.',
    points: [
      'Monthly performance reports',
      'Reach, engagement & growth analysis',
      'WhatsApp Business setup & catalogues',
      'Ongoing optimization & improvements',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 20 L7 14 L11 16 L15 10 L21 18" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="14" r="2" fill="currentColor" opacity="0.8" />
        <circle cx="11" cy="16" r="2" fill="currentColor" opacity="0.8" />
        <circle cx="15" cy="10" r="2" fill="currentColor" opacity="0.8" />
        <circle cx="21" cy="18" r="2" fill="currentColor" opacity="0.8" />
        <path d="M3 20 L3 21 M21 18 L21 21 M7 14 L7 21 M11 16 L11 21 M15 10 L15 21" strokeLinecap="round" opacity="0.3" />
      </svg>
    ),
    gradient: 'from-ocean-400 to-dream-600',
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.children || []
      
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: {
            amount: 0.6,
            from: 'start',
          },
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-screen py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-background via-dream-50/20 to-background dark:via-dream-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-ocean-600 to-dream-600 dark:from-ocean-400 dark:to-dream-400 bg-clip-text text-transparent">
              How Zentrae Drives Social Growth
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 dark:text-foreground/80 max-w-3xl mx-auto text-balance font-medium">
            We don&apos;t offer random services. We build structured systems that help brands navigate social media with clarity and consistency.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={cn(
                'group relative p-8 rounded-3xl glass hover:glass-strong',
                'transition-all duration-500 cursor-default overflow-hidden',
                index === services.length - 1 && 'sm:col-span-2 lg:col-span-1 lg:mx-auto lg:max-w-md'
              )}
            >
              {/* Gradient overlay on hover */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10',
                  'transition-opacity duration-500',
                  service.gradient
                )}
              />

              {/* Subtle current flow animation on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 50%, rgba(56, 189, 248, 0.3), transparent)',
                    'radial-gradient(circle at 100% 50%, rgba(14, 165, 233, 0.3), transparent)',
                    'radial-gradient(circle at 0% 50%, rgba(56, 189, 248, 0.3), transparent)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with glow and animation */}
                <motion.div
                  className="mb-6 flex justify-center"
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
                    <div className="relative text-cyan-400 dark:text-cyan-300 group-hover:text-cyan-300 dark:group-hover:text-cyan-200 transition-colors duration-300 filter drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground group-hover:text-ocean-500 dark:group-hover:text-ocean-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/60 dark:text-foreground/70 italic mb-4 font-medium">
                  {service.tagline}
                </p>
                <p className="text-sm text-foreground/70 dark:text-foreground/80 leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Key Points */}
                <div className="space-y-2 mt-5 pt-4 border-t border-ocean-500/20 dark:border-ocean-500/30">
                  <p className="text-xs font-semibold text-foreground/50 dark:text-foreground/60 uppercase tracking-wide mb-2">
                    Includes:
                  </p>
                  <ul className="space-y-1.5">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/70 dark:text-foreground/80">
                        <span className="text-cyan-400 dark:text-cyan-300 mt-1.5 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative wave effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-full group-hover:translate-y-0" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.svg
          className="absolute bottom-0 left-0 w-full h-32"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#waveGradient)"
            opacity={0.2}
            animate={{
              d: [
                'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
                'M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,117.3C1248,128,1344,149,1392,160L1440,171L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
                'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1890ff" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </section>
  )
}

