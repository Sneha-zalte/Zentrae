'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { PageShell } from './SectionIntro'

type FormData = {
  name: string
  email: string
  phone: string
  company: string
  message: string
  category: string
  website: string
}

const emptyForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  category: 'Local Business',
  website: '',
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>(emptyForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')
    setFieldErrors({})

    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        if (data.errors) setFieldErrors(data.errors)
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setFormData(emptyForm)
      setStatus('success')
    } catch {
      setErrorMessage('Could not send your message. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden border-t-2 border-ocean-800/25 dark:border-t dark:border-foreground/10"
    >
      <PageShell className="relative z-10">
          <div className="mb-14 sm:mb-20 max-w-5xl">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-ocean-600 dark:text-ocean-300 mb-4 sm:mb-5">
              Let&apos;s talk
            </p>
            <h2 className="font-display text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-[-0.055em] leading-[0.95] text-foreground">
              Ready to
              <span className="block text-outline">make noise?</span>
            </h2>
            <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-foreground/65">
              Tell us where your brand is stuck. We&apos;ll map the system that gets you seen — and remembered.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4 text-foreground">
                  Let&apos;s connect
                </h3>
                <p className="text-foreground/70 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  Whether you&apos;re a local business ready to expand your reach or a D2C brand
                  looking to make waves, we&apos;re here to help you navigate the social media
                  landscape with confidence.
                </p>
              </div>

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
                      href: 'https://www.instagram.com/zentrae.in',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      ),
                    },
                    {
                      name: 'Facebook',
                      href: 'https://www.facebook.com/share/1AYXLgSinR/',
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
                      name: 'WhatsApp',
                      href: 'https://wa.me/918657684375',
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl glass-strong relative"
            >
              {status === 'success' ? (
                <div className="text-center py-8 sm:py-12 space-y-4">
                  <div className="mx-auto w-14 h-14 rounded-full bg-ocean-800/15 dark:bg-ocean-400/20 flex items-center justify-center text-ocean-800 dark:text-ocean-300">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Message sent</h3>
                  <p className="text-foreground/70 max-w-sm mx-auto">
                    Thanks for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-5 py-2.5 rounded-xl font-medium glass hover:glass-strong transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-background/50 border-2 border-ocean-800/35 dark:border dark:border-ocean-800/30 focus:border-ocean-800 focus:ring-2 focus:ring-ocean-800/20 outline-none transition-all duration-300 text-sm sm:text-base text-foreground placeholder:text-foreground/40"
                        placeholder="Your name"
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                      />
                      {fieldErrors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                          {fieldErrors.name}
                        </p>
                      )}
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
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-background/50 border-2 border-ocean-800/35 dark:border dark:border-ocean-800/30 focus:border-ocean-800 focus:ring-2 focus:ring-ocean-800/20 outline-none transition-all duration-300 text-sm sm:text-base text-foreground placeholder:text-foreground/40"
                        placeholder="your.email@example.com"
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                      />
                      {fieldErrors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-background/50 border-2 border-ocean-800/35 dark:border dark:border-ocean-800/30 focus:border-ocean-800 focus:ring-2 focus:ring-ocean-800/20 outline-none transition-all duration-300 text-sm sm:text-base text-foreground placeholder:text-foreground/40"
                        placeholder="+91 9876543210 or 9876543210"
                        aria-invalid={!!fieldErrors.phone}
                        aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                      />
                      {fieldErrors.phone && (
                        <p id="phone-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                          {fieldErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-background/50 border-2 border-ocean-800/35 dark:border dark:border-ocean-800/30 focus:border-ocean-800 focus:ring-2 focus:ring-ocean-800/20 outline-none transition-all duration-300 text-sm sm:text-base text-foreground placeholder:text-foreground/40"
                        placeholder="Your company name"
                      />
                    </div>
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-background/50 border-2 border-ocean-800/35 dark:border dark:border-ocean-800/30 focus:border-ocean-800 focus:ring-2 focus:ring-ocean-800/20 outline-none transition-all duration-300 text-sm sm:text-base text-foreground"
                      aria-invalid={!!fieldErrors.category}
                    >
                      <option value="Local Business">Local Business</option>
                      <option value="D2C Brand">D2C Brand</option>
                      <option value="Other">Other</option>
                    </select>
                    {fieldErrors.category && (
                      <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                        {fieldErrors.category}
                      </p>
                    )}
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-background/50 border-2 border-ocean-800/35 dark:border dark:border-ocean-500/30 focus:border-ocean-800 focus:ring-2 focus:ring-ocean-800/20 outline-none transition-all duration-300 text-sm sm:text-base text-foreground placeholder:text-foreground/40 resize-none"
                      placeholder="Tell us about your project, goals, or challenges..."
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                    />
                    {fieldErrors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="absolute -left-[9999px] opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>

                  {status === 'error' && errorMessage && (
                    <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    whileHover={status === 'submitting' ? undefined : { scale: 1.01 }}
                    whileTap={status === 'submitting' ? undefined : { scale: 0.99 }}
                    className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 bg-gradient-to-r from-ocean-800 to-ocean-900 text-white shadow-lg hover:from-ocean-700 hover:to-ocean-800 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
      </PageShell>
    </section>
  )
}
