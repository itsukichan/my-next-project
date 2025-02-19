'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useViewTransition() {
  const pathname = usePathname()

  useEffect(() => {
    if (!document.startViewTransition) return

    document.documentElement.classList.add('view-transition')

    return () => {
      document.documentElement.classList.remove('view-transition')
    }
  }, [pathname])
}
