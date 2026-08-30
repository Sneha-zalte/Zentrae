import { promises as fs } from 'fs'
import path from 'path'

export type Submission = {
  id: string
  name: string
  email: string
  phone: string
  company: string
  category: string
  message: string
  createdAt: string
}

const LOCAL_FILE = path.join(process.cwd(), 'data', 'submissions.json')
const TMP_FILE = path.join('/tmp', 'zentrae-submissions.json')

const memory: { items: Submission[] } = { items: [] }
let loaded = false
let writeQueue: Promise<void> = Promise.resolve()

function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = writeQueue.then(fn, fn)
  writeQueue = run.then(
    () => undefined,
    () => undefined
  )
  return run
}

async function resolveFile(): Promise<string> {
  try {
    await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true })
    await fs.writeFile(path.join(path.dirname(LOCAL_FILE), '.writable'), '', { flag: 'a' })
    return LOCAL_FILE
  } catch {
    return TMP_FILE
  }
}

async function readFromDisk(): Promise<Submission[]> {
  const file = await resolveFile()
  try {
    const raw = await fs.readFile(file, 'utf8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

async function writeToDisk(items: Submission[]) {
  const file = await resolveFile()
  await fs.mkdir(path.dirname(file), { recursive: true })
  await fs.writeFile(file, JSON.stringify(items, null, 2), 'utf8')
}

async function ensureLoaded() {
  if (loaded) return
  const disk = await readFromDisk()
  if (disk.length >= memory.items.length) {
    memory.items = disk
  }
  loaded = true
}

export async function listSubmissions(): Promise<Submission[]> {
  return withLock(async () => {
    await ensureLoaded()
    return [...memory.items].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  })
}

export async function addSubmission(
  input: Omit<Submission, 'id' | 'createdAt'>
): Promise<Submission> {
  return withLock(async () => {
    await ensureLoaded()
    const submission: Submission = {
      ...input,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    memory.items.push(submission)
    await writeToDisk(memory.items)
    return submission
  })
}

export const CATEGORIES = ['Local Business', 'D2C Brand', 'Other'] as const
