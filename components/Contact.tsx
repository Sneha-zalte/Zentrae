'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    category: 'Local Business',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    // Clear error state when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Success
      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        category: 'Local Business',
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-background via-ocean-50/50 to-background dark:from-background dark:via-ocean-950/30 dark:to-background"
    >
      {/* Subtle decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-ocean-200/30 via-transparent to-dream-200/30 dark:from-ocean-900/20 dark:via-transparent dark:to-dream-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,58,140,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_30%,rgba(40,169,255,0.05),transparent_50%)] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
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
                Ready to Navigate
              </span>
              <br />
              <span className="text-foreground">Your Social Journey?</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
              Let&apos;s dive into your brand&apos;s potential. Reach out and discover how
              ZENTRAE can guide you through the social media ocean.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-foreground">
                  Let&apos;s Connect
                </h3>
                <p className="text-foreground/70 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  Whether you&apos;re a local business ready to expand your reach or a D2C brand
                  looking to make waves, we&apos;re here to help you navigate the social media
                  landscape with confidence.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: 'Email',
                    content: 'zentraeindia@gmail.com',
                    link: 'mailto:zentraeindia@gmail.com',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Phone',
                    content: '9167075095',
                    link: 'tel:+919167075095',
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Location',
                    content: 'Mumbai',
                    link: null,
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl glass hover:glass-strong transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-ocean-800/20 to-ocean-900/20 dark:from-ocean-500/30 dark:to-dream-500/30 border border-ocean-800/30 dark:border-ocean-400/30 flex items-center justify-center group-hover:from-ocean-800/30 group-hover:to-ocean-900/30 dark:group-hover:from-ocean-500/40 dark:group-hover:to-dream-500/40 transition-all duration-300">
                      <div className="text-ocean-800 dark:text-ocean-400 group-hover:text-ocean-900 dark:group-hover:text-ocean-300 transition-colors duration-300 w-5 h-5 sm:w-6 sm:h-6">
                        {item.icon}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-sm sm:text-base text-foreground/70 hover:text-ocean-800 dark:hover:text-ocean-400 transition-colors break-words"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-foreground/70">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-8"
              >
                <h4 className="font-semibold text-foreground mb-4">Follow Our Journey</h4>
                <div className="flex gap-4">
                  {[
                    {
                      name: 'Instagram',
                      href: '#',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      ),
                    },
                    {
                      name: 'Facebook',
                      href: '#',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      ),
                    },
                    {
                      name: 'LinkedIn',
                      href: '#',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      ),
                    },
                    {
                      name: 'YouTube',
                      href: '#',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      ),
                    },
                  ].map((platform, index) => (
                    <motion.a
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="w-12 h-12 rounded-full glass hover:glass-strong flex items-center justify-center text-foreground/70 hover:text-ocean-800 dark:hover:text-ocean-400 transition-all duration-300"
                      aria-label={platform.name}
                    >
                      {platform.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl glass-strong"
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-background/50 border border-ocean-800/30 focus:border-ocean-800 focus:ring-2 focus:ring-ocean-800/20 outline-none transition-all duration-300 text-sm sm:text-base text-foreground placeholder:text-foreground/40"
                    placeholder="Your name"
                    aria-required="true"
                    aria-describedby="name-error"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-background/50 border border-ocean-800/30 focus:border-ocean-800 focus:ring-2 focus:ring-ocean-800/20 outline-none transition-all duration-300 text-sm sm:text-base text-foreground placeholder:text-foreground/40"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-background/50 border border-ocean-800/30 focus:border-ocean-800 focus:ring-2 focus:ring-ocean-800/20 outline-none transition-all duration-300 text-sm sm:text-base text-foreground placeholder:text-foreground/40"
                    placeholder="+91 9876543210 or 9876543210"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-background/50 border border-ocean-800/30 focus:border-ocean-800 focus:ring-2 focus:ring-ocean-800/20 outline-none transition-all duration-300 text-sm sm:text-base text-foreground placeholder:text-foreground/40"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                    Business Type *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-background/50 border border-ocean-800/30 focus:border-ocean-800 focus:ring-2 focus:ring-ocean-800/20 outline-none transition-all duration-300 text-sm sm:text-base text-foreground"
                  >
                    <option value="Local Business">Local Business</option>
                    <option value="D2C Brand">D2C Brand</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-background/50 border border-ocean-500/30 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all duration-300 text-sm sm:text-base text-foreground placeholder:text-foreground/40 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg sm:rounded-xl bg-green-500/20 border border-green-500/50 text-green-700 dark:text-green-400 text-sm sm:text-base"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Message sent successfully! We&apos;ll get back to you soon.</span>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg sm:rounded-xl bg-red-500/20 border border-red-500/50 text-red-700 dark:text-red-400 text-sm sm:text-base"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg ${
                    isSubmitting
                      ? 'bg-gradient-to-r from-ocean-800/50 to-ocean-900/50 text-white/70 cursor-not-allowed opacity-60'
                      : 'bg-gradient-to-r from-ocean-800 to-ocean-900 text-white hover:from-ocean-700 hover:to-ocean-800 active:scale-95'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decorative elements - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div 
          className="absolute rounded-full opacity-5 blur-3xl"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.6), transparent)',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </section>
  )
}

