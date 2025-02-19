'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // 初期化時にシステム設定とローカルストレージの設定を確認
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem('theme')

    // ローカルストレージに設定がある場合はそれを優先
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else {
      // システム設定を反映
      setIsDarkMode(darkModeMediaQuery.matches)
      document.documentElement.classList.toggle('dark', darkModeMediaQuery.matches)
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    document.documentElement.classList.toggle('dark', newDarkMode)
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
  }

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-pressed={isDarkMode}
      className="relative flex h-8 w-14 items-center justify-center rounded-full bg-accent dark:bg-accent-dark transition-colors duration-200 ease-in-out"
    >
      <span className="sr-only">ダークモード切り替え</span>
      <span
        aria-hidden="true"
        className={`absolute left-1 h-6 w-6 transform rounded-full bg-background-light shadow transition-transform duration-200 ease-in-out flex items-center justify-center ${isDarkMode ? 'translate-x-6' : ''
          }`}
      >
        {/* 月のアイコン（ダークモード） */}
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 text-accent ${isDarkMode ? 'hidden' : ''}`}
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
          className={`h-4 w-4 text-secondary-accent-dark ${!isDarkMode ? 'hidden' : ''}`}
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
      </span>
    </button>
  )
}
