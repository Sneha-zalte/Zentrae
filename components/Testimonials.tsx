'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Founder, Bloom Cafe',
    category: 'Local Business',
    content: 'ZENTRAE transformed our social presence. We went from struggling to post consistently to having a strategy that drives real foot traffic. The team truly understands local business needs.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'CEO, Elevate Apparel',
    category: 'D2C Brand',
    content: 'Working with ZENTRAE was like finding a lighthouse in foggy waters. Their data-driven approach combined with creative storytelling helped us reach audiences we never thought possible. ROI increased 3x in just 6 months.',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Artisan Goods Co.',
    category: 'Local Business',
    content: 'The authenticity and trust ZENTRAE brings to every campaign is unmatched. They didn\'t just manage our social media—they became an extension of our brand. Our community engagement tripled.',
    rating: 5,
    avatar: '👩‍🎨',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Founder, TechFlow Solutions',
    category: 'D2C Brand',
    content: 'From zero to hero. ZENTRAE built our social media presence from the ground up. Their futuristic approach to platform trends kept us ahead of competitors. Couldn\'t be happier with the results.',
    rating: 5,
    avatar: '👨‍💻',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Owner, Serenity Wellness',
    category: 'Local Business',
    content: 'Dreamy content that actually converts. ZENTRAE created campaigns that felt authentic to our brand while driving measurable results. Our bookings increased 200% in the first quarter.',
    rating: 5,
    avatar: '🧘‍♀️',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
  }

  const currentTestimonial = testimonials[currentIndex]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <section className="relative min-h-screen py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-background via-dream-50/20 to-background dark:via-dream-950/20">
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
            <span className="text-foreground">Trusted by</span>
            <br />
            <span className="bg-gradient-to-r from-ocean-500 to-dream-500 bg-clip-text text-transparent">
              Visionary Brands
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
            Don&apos;t just take our word for it. Hear from businesses that have
            navigated success with ZENTRAE as their guide.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className={cn(
                  'absolute inset-0 p-8 sm:p-12 lg:p-16 rounded-3xl glass-strong',
                  'flex flex-col justify-between'
                )}
              >
                {/* Content */}
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="text-6xl text-ocean-500/30 dark:text-ocean-400/30"
                  >
                    &quot;
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed"
                  >
                    {currentTestimonial.content}
                  </motion.p>
                </div>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-6 pt-8 border-t border-ocean-500/20"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ocean-400 to-dream-500 flex items-center justify-center text-3xl flex-shrink-0">
                    {currentTestimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-foreground">
                        {currentTestimonial.name}
                      </h4>
                      <span className="px-2 py-1 rounded-full glass text-xs font-medium">
                        {currentTestimonial.category}
                      </span>
                    </div>
                    <p className="text-foreground/70">{currentTestimonial.role}</p>
                    {/* Rating Stars */}
                    <div className="flex gap-1 mt-2">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="text-yellow-400 text-lg"
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrevious}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-strong hover:glass flex items-center justify-center text-foreground transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-strong hover:glass flex items-center justify-center text-foreground transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'bg-ocean-500 w-8'
                    : 'bg-foreground/30 hover:bg-foreground/50'
                )}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10 blur-3xl"
            style={{
              width: `${350 + i * 150}px`,
              height: `${350 + i * 150}px`,
              background: `radial-gradient(circle, rgba(24, 144, 255, 0.6), transparent)`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 40}%`,
            }}
            animate={{
              scale: [1, 1.4, 1],
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

