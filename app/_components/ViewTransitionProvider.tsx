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

    const handleNavigate = () => {
      document.startViewTransition(async () => {
        document.documentElement.classList.add('view-transition')
        await Promise.resolve()
      })
    }

    // 代替のナビゲーション検知方法を使用
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
