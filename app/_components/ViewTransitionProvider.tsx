'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ViewTransitionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    if (!document.startViewTransition) return

    const handleNavigate = () => {
      document.startViewTransition(async () => {
        document.documentElement.classList.add('view-transition')
        await Promise.resolve()
      })
    }

    window.navigation.addEventListener('navigate', handleNavigate)

    return () => {
      window.navigation.removeEventListener('navigate', handleNavigate)
      document.documentElement.classList.remove('view-transition')
    }
  }, [pathname])

  return <>{children}</>
}
