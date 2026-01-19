'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

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
  return (
    <section
      id="services"
      className="relative min-h-screen py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-background via-dream-50/50 to-background dark:from-background dark:via-dream-950/20 dark:to-background"
    >
      {/* Subtle decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-dream-200/30 via-transparent to-ocean-200/30 dark:from-dream-900/20 dark:via-transparent dark:to-ocean-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.05),transparent_50%)] pointer-events-none" />
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
            <span className="bg-gradient-to-r from-ocean-800 to-ocean-900 dark:from-ocean-400 dark:to-dream-400 bg-clip-text text-transparent">
              How ZENTRAE Drives Social Growth
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 dark:text-foreground/80 max-w-3xl mx-auto text-balance font-medium">
            ZENTRAE doesn&apos;t offer random services. We build structured systems that help brands navigate social media with clarity and consistency.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={cn(
                'group relative p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl glass hover:glass-strong',
                'transition-all duration-300 cursor-default overflow-hidden',
                index === 0 && 'md:col-span-2 lg:col-span-2 lg:col-start-1',
                index === 1 && 'md:col-span-2 lg:col-span-2 lg:col-start-3',
                index === 2 && 'md:col-span-2 lg:col-span-2 lg:col-start-5',
                index === 3 && 'md:col-span-2 lg:col-span-2 lg:col-start-2',
                index === 4 && 'md:col-span-2 lg:col-span-2 lg:col-start-4'
              )}
            >
              {/* Gradient overlay on hover */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10',
                  'transition-opacity duration-300',
                  service.gradient
                )}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 sm:mb-5 md:mb-6 flex justify-center">
                  <div className="relative text-ocean-800 dark:text-cyan-300 group-hover:text-ocean-900 dark:group-hover:text-cyan-200 transition-colors duration-300 w-10 h-10 sm:w-12 sm:h-12">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-ocean-800 dark:group-hover:text-ocean-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/60 dark:text-foreground/70 italic mb-3 sm:mb-4 font-medium">
                  {service.tagline}
                </p>
                <p className="text-xs sm:text-sm text-foreground/70 dark:text-foreground/80 leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Key Points */}
                <div className="space-y-2 mt-5 pt-4 border-t border-ocean-800/20 dark:border-ocean-500/30">
                  <p className="text-xs font-semibold text-foreground/50 dark:text-foreground/60 uppercase tracking-wide mb-2">
                    Includes:
                  </p>
                  <ul className="space-y-1.5">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/70 dark:text-foreground/80">
                        <span className="text-ocean-800 dark:text-cyan-300 mt-1.5 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative wave effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ocean-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
