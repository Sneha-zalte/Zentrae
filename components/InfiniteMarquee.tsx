'use client'

const DEFAULT_ITEMS = [
  'Instagram',
  'Facebook',
  'LinkedIn',
  'WhatsApp',
  'Reels',
  'Stories',
]

export function InfiniteMarquee({
  items = DEFAULT_ITEMS,
}: {
  items?: string[]
}) {
  const loop = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y-2 border-ocean-800/25 dark:border-y dark:border-ocean-500/20 bg-ocean-50 dark:bg-foreground/[0.03] py-5 sm:py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee items-center">
        {loop.map((name, i) => (
          <span key={`${name}-${i}`} className="flex shrink-0 items-center">
            <span className="px-8 sm:px-12 font-display text-2xl sm:text-4xl font-bold tracking-tight text-ocean-800/70 dark:text-foreground/35 whitespace-nowrap">
              {name}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-ocean-500/50" />
          </span>
        ))}
      </div>
    </div>
  )
}
