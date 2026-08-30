'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { PageShell } from './SectionIntro'

const ticker = [
  'REELS',
  'HOOKS',
  'VIRAL',
  'STORIES',
  'GROWTH',
  'BRAND',
  'SCROLL',
  'ENGAGE',
  'D2C',
  'LOCAL',
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-gradient-to-b from-ocean-50 via-white to-background dark:from-ocean-950 dark:via-[#06101c] dark:to-background"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-aurora hero-aurora-a" />
        <div className="hero-aurora hero-aurora-b" />
        <div className="hero-aurora hero-aurora-core" />
        <div className="hero-grid" />
        <p className="absolute -right-4 top-[18%] rotate-90 origin-top-right font-display text-[12vw] leading-none font-bold text-ocean-500/[0.07] dark:text-white/[0.05] select-none tracking-tighter">
          ZENTRAE
        </p>
      </div>

      <PageShell className="relative z-10 w-full pt-28 pb-10 sm:pb-14">
        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-10 lg:gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="rounded-full border-2 border-ocean-800/50 bg-ocean-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ocean-900 dark:border dark:border-ocean-400/40 dark:bg-ocean-500/10 dark:text-ocean-200">
                Social systems
              </span>
              <span className="text-xs font-medium text-ocean-800/80 dark:text-ocean-200/70">Mumbai · India</span>
            </div>

            <h1 className="font-display font-bold tracking-[-0.06em] leading-[0.92] text-ocean-950 dark:text-white">
              <span className="block text-[clamp(2.8rem,12vw,7.5rem)]">Stop the</span>
              <span className="block text-[clamp(2.8rem,12vw,7.5rem)] text-outline">scroll.</span>
              <span className="mt-2 block text-[clamp(2.1rem,8vw,5rem)] text-ocean-800 dark:text-ocean-200">
                Own the feed.
              </span>
            </h1>

            <p className="mt-8 max-w-md text-base sm:text-lg leading-7 text-ocean-950/80 dark:text-ocean-100/75">
              ZENTRAE builds social systems for local businesses and D2C brands — strategy, content, and growth that actually moves.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.12em]',
                  'bg-ocean-800 text-white hover:bg-ocean-900',
                  'dark:bg-ocean-400 dark:text-ocean-950 dark:hover:bg-ocean-300',
                  'shadow-lg shadow-ocean-900/20 dark:shadow-[0_8px_24px_rgba(24,144,255,0.22)] no-underline transition-transform hover:scale-[1.03]'
                )}
              >
                Make waves
              </a>
              <a
                href="#services"
                className="text-sm font-semibold text-ocean-900 hover:text-ocean-700 dark:text-ocean-100/80 dark:hover:text-ocean-300 no-underline"
              >
                See the system →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -top-8 right-0 rotate-6 rounded-2xl border-2 border-ocean-800/30 bg-white shadow-md dark:border dark:border-white/15 dark:bg-white/[0.06] dark:shadow-none px-5 py-4">
              <p className="font-display text-4xl font-bold tracking-tight text-ocean-800 dark:text-ocean-100">7</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ocean-800/70 dark:text-ocean-200/70">step growth loop</p>
            </div>
            <div className="mt-28 -rotate-3 rounded-3xl border-2 border-ocean-950 bg-ocean-900 text-white p-6 dark:border-white/10 dark:bg-ocean-950/80">
              <p className="font-display text-2xl font-bold leading-tight">
                Drama in the feed.
                <span className="block text-ocean-200">Discipline in the system.</span>
              </p>
              <p className="mt-3 text-sm text-white/70">
                Hooks, reels, community, reports — not random posts.
              </p>
            </div>
          </motion.div>
        </div>
      </PageShell>

      <div className="relative z-10 border-y border-ocean-500/20 bg-ocean-950 text-white dark:bg-ocean-500/10 overflow-hidden py-3">
        <div className="marquee-track gap-10 px-4">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10 shrink-0">
              <span className="font-display text-sm sm:text-base font-bold tracking-[0.25em]">{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-ocean-400 shadow-[0_0_10px_rgba(64,169,255,1)]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
