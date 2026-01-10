'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const portfolioItems = [
  {
    id: 1,
    title: 'Local Restaurant Chain',
    category: 'Local Business',
    description: 'Increased social engagement by 300% and foot traffic by 45% through strategic content and targeted campaigns.',
    results: ['300% engagement increase', '45% foot traffic growth', '50K+ new followers'],
    image: '🍽️',
  },
  {
    id: 2,
    title: 'E-Commerce Fashion Brand',
    category: 'D2C Brand',
    description: 'Launched successful influencer partnerships and user-generated content campaigns, resulting in 250% ROI increase.',
    results: ['250% ROI increase', '1M+ impressions', '40% conversion lift'],
    image: '👗',
  },
  {
    id: 3,
    title: 'Tech Startup',
    category: 'D2C Brand',
    description: 'Built brand awareness from scratch, establishing thought leadership through strategic content and community engagement.',
    results: ['500% brand awareness', '100K+ community members', 'Thought leader status'],
    image: '💻',
  },
  {
    id: 4,
    title: 'Wellness Studio',
    category: 'Local Business',
    description: 'Created a cohesive brand voice across platforms, leading to consistent booking increases and community growth.',
    results: ['200% booking growth', '30K+ engaged community', 'Brand consistency'],
    image: '🧘',
  },
  {
    id: 5,
    title: 'Artisan Coffee Roastery',
    category: 'Local Business',
    description: 'Developed storytelling campaigns that showcased craftsmanship, driving both online and in-store sales.',
    results: ['180% sales increase', 'Nationwide recognition', 'Story-driven growth'],
    image: '☕',
  },
  {
    id: 6,
    title: 'Sustainable Fashion Label',
    category: 'D2C Brand',
    description: 'Positioned brand as sustainability leader through educational content and authentic storytelling.',
    results: ['400% social growth', 'Sustainability leadership', 'Authentic engagement'],
    image: '🌱',
  },
]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const categories = ['All', 'Local Business', 'D2C Brand']
  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section
      id="portfolio"
      className="relative min-h-screen py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-background via-ocean-50/30 to-background dark:via-ocean-950/30"
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
            <span className="bg-gradient-to-r from-ocean-500 to-dream-500 bg-clip-text text-transparent">
              Success Stories
            </span>
            <br />
            <span className="text-foreground">That Speak for Themselves</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
            See how we&apos;ve helped brands navigate the social media landscape
            and achieve remarkable results.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'px-6 py-3 rounded-full font-medium text-sm transition-all duration-300',
                selectedCategory === category
                  ? 'bg-gradient-to-r from-ocean-500 to-dream-500 text-white shadow-lg'
                  : 'glass hover:glass-strong text-foreground/70 hover:text-foreground'
              )}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className={cn(
                  'group relative rounded-3xl glass hover:glass-strong overflow-hidden',
                  'transition-all duration-500 cursor-pointer'
                )}
              >
                {/* Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-ocean-400/20 to-dream-500/20 flex items-center justify-center text-6xl overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredItem === item.id ? 1.2 : 1,
                      rotate: hoveredItem === item.id ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.image}
                  </motion.div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-medium">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-ocean-500 dark:group-hover:text-ocean-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Results */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 border-t border-ocean-500/20 space-y-2"
                      >
                        {item.results.map((result, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2 text-sm text-ocean-500 dark:text-ocean-400"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-ocean-500" />
                            {result}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-ocean-500/10 to-dream-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5 blur-3xl"
            style={{
              width: `${400 + i * 100}px`,
              height: `${400 + i * 100}px`,
              background: `radial-gradient(circle, rgba(14, 165, 233, 0.8), transparent)`,
              left: `${i * 25}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 10 + i * 2,
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

