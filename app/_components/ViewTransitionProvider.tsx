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
    if (!document.startViewTransition) return;

    const handleNavigate = (e: Event) => {
      if (!(e.target instanceof Node)) return;

      document.startViewTransition(async () => {
        document.documentElement.classList.add('view-transition')
        await Promise.resolve()
      })
    }

    window.addEventListener('popstate', handleNavigate)
    window.addEventListener('pushState', handleNavigate)
    window.addEventListener('replaceState', handleNavigate)

    return () => {
      window.removeEventListener('popstate', handleNavigate)
      window.removeEventListener('pushState', handleNavigate)
      window.removeEventListener('replaceState', handleNavigate)
      document.documentElement.classList.remove('view-transition')
    }
  }, [pathname])

  return <>{children}</>
}
