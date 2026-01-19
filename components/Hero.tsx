'use client'

import { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { OceanScene } from './OceanScene'
import { cn } from '@/lib/utils'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    // Delay content visibility to let Canvas initialize first
    const timer = setTimeout(() => {
      setContentVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-background dark:from-ocean-950 dark:via-dream-950 dark:to-background"
      style={{ overflowY: 'visible' }}
    >
      {/* 3D Ocean Background */}
      <div className="absolute inset-0 w-full h-full z-0" aria-hidden="true">
        <Canvas
          dpr={[1, 2]}
          gl={{ 
            antialias: true, 
            alpha: true, 
            powerPreference: 'high-performance',
            preserveDrawingBuffer: false,
          }}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 5, 10]} fov={60} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#1890ff" />
            <OceanScene />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2.2}
            />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-visible" style={{ overflow: 'visible' }}>
        {/* Backdrop for better text visibility */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
          <div className="w-full max-w-5xl mx-auto px-6 py-20 rounded-3xl backdrop-blur-sm bg-white/10 dark:bg-black/10 opacity-0 dark:opacity-0" />
        </div>
        
        <AnimatePresence>
          {contentVisible && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-10 space-y-2 sm:space-y-3 md:space-y-4 overflow-visible"
              style={{ overflow: 'visible' }}
            >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
            style={{ lineHeight: '1.2', overflow: 'visible' }}
          >
            <span className="block text-ocean-800 dark:bg-gradient-to-r dark:from-gray-100 dark:via-white dark:to-gray-200 dark:bg-clip-text dark:text-transparent drop-shadow-md dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" style={{ display: 'block', overflow: 'visible', lineHeight: '1.2', paddingBottom: '0.25rem' }}>
              ZENTRAE: Navigate the Ocean
            </span>
            <span className="block -mt-1 sm:-mt-1 text-ocean-900 dark:bg-gradient-to-r dark:from-white dark:via-gray-100 dark:to-gray-200 dark:bg-clip-text dark:text-transparent drop-shadow-md dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]">
              of Social Content
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl font-semibold text-ocean-800 dark:text-gray-300 dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] max-w-3xl mx-auto leading-relaxed -mt-6 sm:-mt-8 md:-mt-10"
          >
            ZENTRAE guides local businesses and D2C brands through <br className="hidden sm:block" />
            the ever-changing tides of social media marketing.<br />
            <span className="block mt-2 font-bold text-ocean-900 dark:bg-gradient-to-r dark:from-white dark:via-gray-100 dark:to-gray-300 dark:bg-clip-text dark:text-transparent dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Trust ZENTRAE to be your compass.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center pt-6 sm:pt-8 md:pt-10"
          >
            <motion.a
              href="#contact"
              className={cn(
                'px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg md:text-xl',
                'bg-ocean-800 hover:bg-ocean-900 text-white',
                'dark:bg-ocean-600 dark:hover:bg-ocean-700 dark:text-white',
                'transition-all duration-300 shadow-lg hover:shadow-xl',
                'transform hover:scale-105 active:scale-95',
                'no-underline relative tracking-wide',
                'flex items-center justify-center gap-2 sm:gap-3'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
              <motion.svg
                width="18"
                height="18"
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ x: 4 }}
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.a>
          </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20 blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? 'rgba(24, 144, 255, 0.4)' : 'rgba(14, 165, 233, 0.4)'
              }, transparent)`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  )
}

