import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

export const AUTH_COOKIE = 'zentrae_submissions'

export function getInboxPassword(): string | null {
  const fromEnv = process.env.SUBMISSIONS_PASSWORD?.trim()
  if (fromEnv) return fromEnv
  if (process.env.NODE_ENV === 'development') return 'zentrae'
  return null
}

function tokenFor(password: string) {
  return createHmac('sha256', password).update('zentrae-inbox').digest('hex')
}

export function verifyPassword(candidate: string): boolean {
  const expected = getInboxPassword()
  if (!expected) return false
  const a = Buffer.from(candidate)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

export function isValidAuthToken(token: string | undefined): boolean {
  const password = getInboxPassword()
  if (!password || !token) return false
  const expected = tokenFor(password)
  const a = Buffer.from(token)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

export function createAuthToken(): string | null {
  const password = getInboxPassword()
  if (!password) return null
  return tokenFor(password)
}

export function isInboxAuthenticated(): boolean {
  const token = cookies().get(AUTH_COOKIE)?.value
  return isValidAuthToken(token)
}
