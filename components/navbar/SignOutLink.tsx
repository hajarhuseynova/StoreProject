'use client'
import { SignOutButton } from '@clerk/nextjs'
import { useToast } from '../ui/use-toast'
import Link from 'next/link'

function SignOutLink() {
  const { toast } = useToast()
  const handleLogOut = () => {
    toast({ description: 'Log Out Successfully' })
  }
  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogOut}>
        Log Out
      </Link>
    </SignOutButton>
  )
}

export default SignOutLink
