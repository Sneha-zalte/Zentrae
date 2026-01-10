'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={className}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      {children}
    </section>
  )
}

