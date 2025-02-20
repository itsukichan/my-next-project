"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import logo from '@/public/logo.svg'
import { navigationItems } from '@/app/_constants/navigation'

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <>
      {/* PC用メニュー */}
      <nav className="hidden sm:block">
        <ul className="flex items-center gap-4">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                target={item.isBlank ? '_blank' : undefined}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* スマホ用メニュー */}
      <div className="sm:hidden">
        <button
          className="relative z-50 p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <Image
            src={isOpen ? "/close.svg" : "/menu.svg"}
            alt={isOpen ? "閉じる" : "メニュー"}
            width={24}
            height={24}
            className="dark:invert"
          />
        </button>

        <nav
          className={`fixed inset-0 bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{ height: '100dvh' }}
        >
          <div className="h-full flex flex-col px-6">
            <div className="pt-7">
              <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <Image
                  src={logo}
                  alt=""
                  width={32}
                  height={32}
                  className="dark:invert"
                  loading="eager"
                />
                <span className="font-semibold text-md text-gray-900 dark:text-gray-100">TechLog</span>
              </Link>
            </div>

            <ul className="flex flex-col gap-6 mt-12">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.isBlank ? '_blank' : undefined}
                    className="text-xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
