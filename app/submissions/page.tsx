import { SubmissionsInbox } from '@/components/SubmissionsInbox'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Submissions',
  robots: { index: false, follow: false },
}

export default function SubmissionsPage() {
  return <SubmissionsInbox />
}
