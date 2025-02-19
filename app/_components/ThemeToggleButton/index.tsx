'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // hydrationが完了するまでコンポーネントをレンダリングしない
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // 初期レンダリング時は何も表示しない
  }

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-pressed={theme === 'dark'}
      className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-500 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    >
      <span className="sr-only">ダークモード切り替え</span>
      <span
        aria-hidden="true"
        className={`${theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
          } pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white dark:bg-gray-900 shadow-lg ring-0 transition-all duration-500 ease-in-out`}
      >
        <div className="relative h-full w-full flex items-center justify-center">
          {/* 月のアイコン（ダークモード） */}
          <svg
            viewBox="0 0 24 24"
            className={`absolute h-3.5 w-3.5 text-gray-400 transition-all duration-500 ease-in-out transform ${theme === 'dark' ? 'opacity-0 rotate-[360deg] scale-0' : 'opacity-100 rotate-0 scale-100'
              } motion-safe:animate-spin-slow`}
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
            />
          </svg>
          {/* 太陽のアイコン（ライトモード） */}
          <svg
            viewBox="0 0 24 24"
            className={`absolute h-3.5 w-3.5 text-yellow-400 transition-all duration-500 ease-in-out transform ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-[360deg] scale-0'
              } motion-safe:animate-pulse`}
            aria-hidden="true"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2" />
              <path d="M12 21v2" />
              <path d="M4.22 4.22l1.42 1.42" />
              <path d="M18.36 18.36l1.42 1.42" />
              <path d="M1 12h2" />
              <path d="M21 12h2" />
              <path d="M4.22 19.78l1.42-1.42" />
              <path d="M18.36 5.64l1.42-1.42" />
            </g>
          </svg>
        </div>
      </span>
    </button>
  )
}
