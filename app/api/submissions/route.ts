import { NextRequest, NextResponse } from 'next/server'
import { addSubmission, CATEGORIES, listSubmissions } from '@/lib/submissions'
import { isValidAuthToken, AUTH_COOKIE } from '@/lib/submissions-auth'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const rateLimit = new Map<string, { count: number; resetAt: number }>()

function clientIp(request: NextRequest) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}

function allowPost(ip: string) {
  const now = Date.now()
  const current = rateLimit.get(ip)
  if (!current || now > current.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return true
  }
  if (current.count >= 8) return false
  current.count += 1
  return true
}

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE)?.value
  if (!isValidAuthToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const items = await listSubmissions()
  return NextResponse.json({ submissions: items })
}

export async function POST(request: NextRequest) {
  const ip = clientIp(request)
  if (!allowPost(ip)) {
    return NextResponse.json(
      { error: 'Too many messages from this connection. Please try again later.' },
      { status: 429 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true })
  }

  const name = clean(body.name, 120)
  const email = clean(body.email, 160).toLowerCase()
  const phone = clean(body.phone, 40)
  const company = clean(body.company, 160)
  const category = clean(body.category, 40)
  const message = clean(body.message, 4000)
  const phoneDigits = phone.replace(/\D/g, '')

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  if (phoneDigits.length < 10) errors.phone = 'Please enter a valid contact number.'
  if (!CATEGORIES.includes(category as (typeof CATEGORIES)[number])) {
    errors.category = 'Please select a business type.'
  }
  if (message.length < 10) errors.message = 'Please share a bit more about your project.'

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Please fix the highlighted fields.', errors }, { status: 400 })
  }

  const submission = await addSubmission({
    name,
    email,
    phone,
    company,
    category,
    message,
  })

  return NextResponse.json({ ok: true, id: submission.id }, { status: 201 })
}
