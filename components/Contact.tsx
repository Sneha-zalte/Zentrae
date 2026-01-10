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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-background via-ocean-50/30 to-background dark:via-ocean-950/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="bg-gradient-to-r from-ocean-500 to-dream-500 bg-clip-text text-transparent">
                Ready to Navigate
              </span>
              <br />
              <span className="text-foreground">Your Social Journey?</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
              Let's dive into your brand's potential. Reach out and discover how
              ZENTRAE can guide you through the social media ocean.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
                  Let's Connect
                </h3>
                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                  Whether you're a local business ready to expand your reach or a D2C brand
                  looking to make waves, we're here to help you navigate the social media
                  landscape with confidence.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
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
                    content: '8657684375',
                    link: 'tel:+918657684375',
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
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-2xl glass hover:glass-strong transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-500/20 to-dream-500/20 dark:from-ocean-500/30 dark:to-dream-500/30 border border-ocean-500/30 dark:border-ocean-400/30 flex items-center justify-center group-hover:from-ocean-500/30 group-hover:to-dream-500/30 dark:group-hover:from-ocean-500/40 dark:group-hover:to-dream-500/40 transition-all duration-300">
                      <div className="text-ocean-500 dark:text-ocean-400 group-hover:text-ocean-600 dark:group-hover:text-ocean-300 transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-foreground/70 hover:text-ocean-500 dark:hover:text-ocean-400 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-foreground/70">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
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
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="w-12 h-12 rounded-full glass hover:glass-strong flex items-center justify-center text-foreground/70 hover:text-ocean-500 dark:hover:text-ocean-400 transition-all duration-300 group"
                      aria-label={platform.name}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {platform.icon}
                      </div>
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
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 sm:p-10 rounded-3xl glass-strong"
            >
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
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
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-ocean-500/30 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all duration-300 text-foreground placeholder:text-foreground/40"
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
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-ocean-500/30 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all duration-300 text-foreground placeholder:text-foreground/40"
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
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-ocean-500/30 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all duration-300 text-foreground placeholder:text-foreground/40"
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
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-ocean-500/30 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all duration-300 text-foreground placeholder:text-foreground/40"
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
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-ocean-500/30 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all duration-300 text-foreground"
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
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-ocean-500/30 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition-all duration-300 text-foreground placeholder:text-foreground/40 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="button"
                  disabled
                  className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-ocean-500/50 to-dream-500/50 text-white/70 cursor-not-allowed shadow-lg opacity-60"
                >
                  Send Message (Coming Soon)
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10 blur-3xl"
            style={{
              width: `${250 + i * 100}px`,
              height: `${250 + i * 100}px`,
              background: `radial-gradient(circle, rgba(14, 165, 233, 0.6), transparent)`,
              left: `${15 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.2,
            }}
          />
        ))}
      </div>
    </section>
  )
}

