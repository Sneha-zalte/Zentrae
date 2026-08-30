import { NextRequest, NextResponse } from 'next/server'
import {
  AUTH_COOKIE,
  createAuthToken,
  getInboxPassword,
  verifyPassword,
} from '@/lib/submissions-auth'

export async function POST(request: NextRequest) {
  if (!getInboxPassword()) {
    return NextResponse.json(
      { error: 'Set SUBMISSIONS_PASSWORD in your environment to open the inbox.' },
      { status: 503 }
    )
  }

  let password = ''
  try {
    const body = await request.json()
    password = typeof body.password === 'string' ? body.password : ''
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  if (!verifyPassword(password)) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 })
  }

  const token = createAuthToken()
  const response = NextResponse.json({ ok: true })
  response.cookies.set(AUTH_COOKIE, token as string, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
  return response
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true })
  response.cookies.set(AUTH_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  })
  return response
}
