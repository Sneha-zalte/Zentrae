'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { PageShell, SectionIntro } from './SectionIntro'
import { cn } from '@/lib/utils'

const services = [
  {
    title: 'Strategy & direction',
    tagline: 'Direction before execution',
    description:
      'Roadmap first. Every post, reel, and reply aligns to goals — not vibes alone.',
    points: ['Social strategy', 'Monthly planning', 'Platform priority', 'Growth direction'],
    image: '/images/services/strategy.png',
    span: 'md:col-span-2 md:row-span-2',
    tone: 'dark',
  },
  {
    title: 'Content & creative',
    tagline: 'Built for attention',
    description: 'Scroll-stopping visuals and copy that make the brand feel alive.',
    points: ['Carousels', 'Stories', 'Captions', 'Visual system'],
    image: '/images/services/content.png',
    span: 'md:col-span-1',
    tone: 'light',
  },
  {
    title: 'Reels & short-form',
    tagline: 'Designed to travel',
    description: 'Hooks, trends, edits, covers — the growth engine of the feed.',
    points: ['Ideation', 'On-site video', 'Editing', 'Publishing'],
    image: '/images/services/reels.png',
    span: 'md:col-span-1',
    tone: 'accent',
  },
  {
    title: 'Account management',
    tagline: 'Always-on presence',
    description: 'Profiles stay sharp, active, and on-brand across platforms.',
    points: ['IG · FB · LinkedIn', 'Bio & highlights', 'Scheduling'],
    image: '/images/services/accounts.png',
    span: 'md:col-span-1',
    tone: 'light',
  },
  {
    title: 'Growth & optimization',
    tagline: 'Data, then drama',
    description: 'Reports, experiments, WhatsApp funnels — refine what works monthly.',
    points: ['Reports', 'Engagement', 'WhatsApp Business', 'Optimization'],
    image: '/images/services/growth.png',
    span: 'md:col-span-2',
    tone: 'light',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 lg:py-36 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-ocean-800/25 dark:bg-gradient-to-r dark:from-transparent dark:via-ocean-500/50 dark:to-transparent" />

      <PageShell>
        <div className="mb-14 sm:mb-20 grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <SectionIntro
            kicker="How ZENTRAE drives growth"
            title="Systems with"
            titleBreak="scroll energy."
            body="Not a menu of random services. A stacked system that turns attention into trust — and trust into growth."
          />
          <p className="font-display text-[6rem] sm:text-[8rem] leading-none font-bold tracking-tighter text-ocean-500/15 dark:text-white/10 select-none">
            05
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5 auto-rows-fr">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                'rounded-[1.75rem] p-6 sm:p-8 flex flex-col h-full min-h-[280px] overflow-hidden',
                service.span,
                index === 0 && 'md:min-h-[560px]',
                service.tone === 'dark' &&
                  'bg-ocean-950 text-white border-2 border-ocean-950 dark:border-0 dark:bg-ocean-900',
                service.tone === 'accent' &&
                  'bg-gradient-to-br from-ocean-500 to-dream-500 text-ocean-950',
                service.tone === 'light' &&
                  'border-2 border-ocean-800/30 bg-white shadow-sm hover:border-ocean-700 dark:border dark:border-foreground/15 dark:bg-foreground/[0.02] dark:shadow-none dark:hover:border-ocean-500/35 transition-colors'
              )}
            >
              <p
                className={cn(
                  'text-[11px] tracking-[0.22em] uppercase mb-5',
                  service.tone === 'dark' ? 'text-ocean-300/70' : 'text-ocean-800/70 dark:text-foreground/40',
                  service.tone === 'accent' && 'text-ocean-950/60'
                )}
              >
                0{index + 1} / 05
              </p>
              <h3
                className={cn(
                  'font-display font-bold tracking-tight mb-2',
                  service.tone === 'dark' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
                )}
              >
                {service.title}
              </h3>
              <p
                className={cn(
                  'text-sm font-semibold mb-3',
                  service.tone === 'dark' && 'text-ocean-300',
                  service.tone === 'accent' && 'text-ocean-950/80',
                  service.tone === 'light' && 'text-ocean-800 dark:text-ocean-300'
                )}
              >
                {service.tagline}
              </p>
              <p
                className={cn(
                  'leading-relaxed mb-5',
                  service.tone === 'dark' ? 'text-white/70' : 'text-ocean-950/75 dark:text-foreground/65',
                  service.tone === 'accent' && 'text-ocean-950/80'
                )}
              >
                {service.description}
              </p>
              <div
                className={cn(
                  'relative w-full flex-1 min-h-[140px] rounded-2xl overflow-hidden',
                  index === 0 && 'min-h-[220px] sm:min-h-[280px]'
                )}
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className={cn(
                    'absolute inset-0',
                    service.tone === 'dark' && 'bg-gradient-to-t from-ocean-950/50 to-transparent',
                    service.tone === 'accent' && 'bg-ocean-950/10',
                    service.tone === 'light' && 'bg-ocean-950/10'
                  )}
                />
              </div>
              <ul className="flex flex-wrap gap-2 mt-4">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className={cn(
                      'rounded-full px-3 py-1 text-xs font-medium',
                      service.tone === 'dark' && 'bg-white/10 text-white/80',
                      service.tone === 'accent' && 'bg-ocean-950/10 text-ocean-950',
                      service.tone === 'light' && 'bg-ocean-800/10 text-ocean-900 dark:bg-ocean-500/10 dark:text-foreground/70'
                    )}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </PageShell>
    </section>
  )
}
