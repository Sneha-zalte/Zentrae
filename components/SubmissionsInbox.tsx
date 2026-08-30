'use client'

import { FormEvent, useCallback, useEffect, useState } from 'react'
import type { Submission } from '@/lib/submissions'

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(value))
  } catch {
    return value
  }
}

export function SubmissionsInbox() {
  const [loading, setLoading] = useState(true)
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [loggingIn, setLoggingIn] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/submissions', { cache: 'no-store' })
      if (res.status === 401) {
        setAuthed(false)
        setSubmissions([])
        return
      }
      if (!res.ok) {
        setError('Could not load submissions.')
        return
      }
      const data = await res.json()
      setAuthed(true)
      setSubmissions(data.submissions || [])
      setSelectedId((prev) => prev ?? data.submissions?.[0]?.id ?? null)
    } catch {
      setError('Could not load submissions.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    setLoggingIn(true)
    setError('')
    try {
      const res = await fetch('/api/submissions/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Login failed.')
        return
      }
      setPassword('')
      await load()
    } catch {
      setError('Login failed.')
    } finally {
      setLoggingIn(false)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/submissions/auth', { method: 'DELETE' })
    setAuthed(false)
    setSubmissions([])
    setSelectedId(null)
  }

  const selected = submissions.find((item) => item.id === selectedId) || null

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-ocean-50/40 to-background dark:from-background dark:via-ocean-950/30 dark:to-background pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-medium text-ocean-800 dark:text-ocean-400 mb-2">Inbox</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Contact submissions</h1>
            <p className="text-foreground/60 mt-2">
              Messages sent through the website contact form.
            </p>
          </div>
          {authed && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={load}
                className="px-4 py-2 rounded-xl glass hover:glass-strong text-sm font-medium transition-all"
              >
                Refresh
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="px-4 py-2 rounded-xl bg-foreground/10 hover:bg-foreground/15 text-sm font-medium transition-all"
              >
                Log out
              </button>
            </div>
          )}
        </div>

        {loading ? (
          <div className="rounded-2xl glass-strong p-10 text-center text-foreground/60">
            Loading…
          </div>
        ) : !authed ? (
          <div className="max-w-md mx-auto rounded-2xl glass-strong p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-2">Enter password</h2>
            <p className="text-sm text-foreground/60 mb-6">
              This page is private. Use the inbox password to view messages.
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="inbox-password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  id="inbox-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-ocean-800/30 focus:border-ocean-800 focus:ring-2 focus:ring-ocean-800/20 outline-none"
                  placeholder="Inbox password"
                />
              </div>
              {error && (
                <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loggingIn}
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-ocean-800 to-ocean-900 hover:from-ocean-700 hover:to-ocean-800 disabled:opacity-60 transition-all"
              >
                {loggingIn ? 'Checking…' : 'Open inbox'}
              </button>
            </form>
            <p className="text-xs text-foreground/45 mt-4">
              Local default password is <code className="font-mono">zentrae</code>. Set{' '}
              <code className="font-mono">SUBMISSIONS_PASSWORD</code> in production.
            </p>
          </div>
        ) : (
          <>
            {error && (
              <p className="mb-4 text-sm text-red-600 dark:text-red-400" role="alert">
                {error}
              </p>
            )}
            {submissions.length === 0 ? (
              <div className="rounded-2xl glass-strong p-10 text-center">
                <h2 className="text-xl font-semibold mb-2">No messages yet</h2>
                <p className="text-foreground/60">
                  When someone submits the contact form, their message will appear here.
                </p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-[320px_1fr] gap-4 sm:gap-6">
                <div className="rounded-2xl glass-strong overflow-hidden">
                  <div className="px-4 py-3 border-b border-ocean-800/10 dark:border-ocean-400/10 text-sm font-medium text-foreground/70">
                    {submissions.length} message{submissions.length === 1 ? '' : 's'}
                  </div>
                  <ul className="max-h-[70vh] overflow-y-auto divide-y divide-ocean-800/10 dark:divide-ocean-400/10">
                    {submissions.map((item) => {
                      const active = item.id === selectedId
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            onClick={() => setSelectedId(item.id)}
                            className={`w-full text-left px-4 py-4 transition-colors ${
                              active
                                ? 'bg-ocean-800/10 dark:bg-ocean-500/15'
                                : 'hover:bg-ocean-800/5 dark:hover:bg-ocean-500/10'
                            }`}
                          >
                            <div className="font-semibold text-foreground truncate">{item.name}</div>
                            <div className="text-sm text-foreground/60 truncate mt-0.5">
                              {item.email}
                            </div>
                            <div className="flex items-center justify-between gap-2 mt-2">
                              <span className="text-xs px-2 py-0.5 rounded-full bg-ocean-800/10 dark:bg-ocean-400/20 text-ocean-900 dark:text-ocean-300">
                                {item.category}
                              </span>
                              <span className="text-xs text-foreground/45 whitespace-nowrap">
                                {formatDate(item.createdAt)}
                              </span>
                            </div>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="rounded-2xl glass-strong p-5 sm:p-8 min-h-[420px]">
                  {selected ? (
                    <article className="space-y-6">
                      <header className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs px-2.5 py-1 rounded-full bg-ocean-800/10 dark:bg-ocean-400/20 text-ocean-900 dark:text-ocean-300 font-medium">
                            {selected.category}
                          </span>
                          <span className="text-sm text-foreground/50">
                            {formatDate(selected.createdAt)}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                          {selected.name}
                        </h2>
                        {selected.company && (
                          <p className="text-foreground/70">{selected.company}</p>
                        )}
                      </header>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <a
                          href={`mailto:${selected.email}`}
                          className="rounded-xl bg-background/50 border border-ocean-800/20 px-4 py-3 hover:border-ocean-800/40 transition-colors"
                        >
                          <div className="text-xs uppercase tracking-wide text-foreground/45 mb-1">
                            Email
                          </div>
                          <div className="text-sm font-medium break-all">{selected.email}</div>
                        </a>
                        <a
                          href={`tel:${selected.phone.replace(/\s/g, '')}`}
                          className="rounded-xl bg-background/50 border border-ocean-800/20 px-4 py-3 hover:border-ocean-800/40 transition-colors"
                        >
                          <div className="text-xs uppercase tracking-wide text-foreground/45 mb-1">
                            Phone
                          </div>
                          <div className="text-sm font-medium">{selected.phone}</div>
                        </a>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-foreground/70 mb-3">Message</h3>
                        <div className="rounded-xl bg-background/40 border border-ocean-800/15 p-4 sm:p-5 whitespace-pre-wrap leading-relaxed text-foreground/85">
                          {selected.message}
                        </div>
                      </div>
                    </article>
                  ) : (
                    <p className="text-foreground/50">Select a message to read it.</p>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}
