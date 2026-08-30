import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function PageShell({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12', className)}>
      {children}
    </div>
  )
}

export function SectionIntro({
  kicker,
  title,
  titleBreak,
  body,
  align = 'left',
  className,
}: {
  kicker: string
  title: ReactNode
  titleBreak?: ReactNode
  body?: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={cn(align === 'center' ? 'text-center mx-auto' : 'text-left', 'max-w-5xl', className)}>
      <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-ocean-600 dark:text-ocean-300 mb-4 sm:mb-5">
        {kicker}
      </p>
      <h2 className="font-display text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.6rem] font-bold tracking-[-0.055em] leading-[0.98] text-foreground">
        {title}
        {titleBreak ? <span className="block mt-1 text-ocean-700 dark:text-ocean-300">{titleBreak}</span> : null}
      </h2>
      {body ? (
        <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-ocean-950/75 dark:text-foreground/70">
          {body}
        </p>
      ) : null}
    </div>
  )
}
