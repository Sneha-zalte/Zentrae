'use client'

import { motion } from 'framer-motion'
import { InfiniteMarquee } from './InfiniteMarquee'
import { PageShell, SectionIntro } from './SectionIntro'

const steps = [
  { number: '01', title: 'Understand', details: 'Brand, audience, and goals.' },
  { number: '02', title: 'Define direction', details: 'Strategy, platforms, and framework.' },
  { number: '03', title: 'Build the system', details: 'Content pillars, structure, consistency.' },
  { number: '04', title: 'Create & execute', details: 'Platform-native content and scheduling.' },
  { number: '05', title: 'Engage & grow', details: 'Community, interaction, and trust.' },
  { number: '06', title: 'Measure & optimize', details: 'Insights, performance, refinement.' },
  { number: '07', title: 'Scale with intent', details: 'What works, expansion, long-term growth.' },
]

const audiences = [
  { number: '01', label: 'Local businesses', trait: 'Visibility that turns into footfall and trust', accent: 'bg-ocean-800 text-white' },
  { number: '02', label: 'D2C brands', trait: 'Attention that scales into demand', accent: 'bg-ocean-500 text-ocean-950' },
  { number: '03', label: 'Professionals', trait: 'Presence that positions authority', accent: 'border-2 border-ocean-800/35 bg-white text-ocean-950 dark:border dark:border-ocean-400/40 dark:bg-transparent dark:text-foreground' },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-36 overflow-hidden">
      <p
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 font-display text-[18vw] font-bold leading-none tracking-tighter text-ocean-500/[0.06] dark:text-white/[0.04] select-none"
      >
        OCEAN
      </p>

      <PageShell className="relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-end">
          <SectionIntro
            kicker="Our philosophy"
            title="Your guide through"
            titleBreak="the social ocean."
            body="The feed is loud. Brands that win don’t post more — they build a system with drama, direction, and discipline."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-gradient-to-br from-ocean-800 to-ocean-950 text-white p-7 sm:p-9 rotate-1 shadow-[0_20px_60px_rgba(0,58,140,0.35)]"
          >
            <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-[1.05]">
              Different stages.
              <span className="block text-ocean-200">One clear direction.</span>
            </p>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              Social as a long-term growth channel — not a shortcut, not a content dump.
            </p>
          </motion.div>
        </div>

        <div className="mt-24 sm:mt-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
            <SectionIntro
              kicker="How we work"
              title="A system."
              titleBreak="Not a content dump."
            />
            <p className="md:max-w-xs text-sm text-ocean-950/70 dark:text-foreground/60 md:text-right">
              Seven moves. Each one feeds the next. That&apos;s how attention becomes growth.
            </p>
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`group grid grid-cols-[88px_1fr] sm:grid-cols-[120px_1fr_1fr] gap-4 sm:gap-8 items-center rounded-2xl border-2 border-ocean-800/25 bg-white px-4 sm:px-6 py-5 sm:py-6 transition-colors hover:border-ocean-600 hover:bg-ocean-50 dark:border dark:border-foreground/15 dark:bg-transparent dark:hover:border-ocean-500/40 dark:hover:bg-ocean-500/[0.04] ${
                  index % 2 === 1 ? 'sm:translate-x-6' : ''
                }`}
              >
                <p className="font-display text-4xl sm:text-5xl font-bold tracking-tighter text-ocean-700/50 dark:text-ocean-500/30 group-hover:text-ocean-600 dark:group-hover:text-ocean-500/60 transition-colors">
                  {step.number}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">{step.title}</h3>
                <p className="col-span-2 sm:col-span-1 text-sm sm:text-base text-ocean-950/70 dark:text-foreground/60 leading-relaxed">
                  {step.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 sm:mt-28 -mx-5 sm:-mx-8 lg:mx-[calc(50%-50vw)]">
          <InfiniteMarquee />
        </div>

        <div className="mt-24 sm:mt-32">
          <SectionIntro
            kicker="Who we’re built for"
            title="Built for brands"
            titleBreak="that want heat."
            body="We work with teams that treat social like a growth engine — loud enough to win attention, sharp enough to keep it."
            className="mb-12 sm:mb-16"
          />
          <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
            {audiences.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className={`rounded-[1.75rem] p-7 sm:p-8 min-h-[240px] flex flex-col justify-between ${item.accent} ${
                  index === 1 ? 'md:-translate-y-4' : ''
                }`}
              >
                <p className="text-xs tracking-[0.2em] opacity-60">{item.number} / 03</p>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-3">{item.label}</h3>
                  <p className="text-sm sm:text-base opacity-80 leading-relaxed">{item.trait}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </PageShell>
    </section>
  )
}
