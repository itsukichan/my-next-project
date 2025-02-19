import Link from 'next/link';
import Menu from '../Menu';
import ThemeToggleButton from '../ThemeToggleButton';
import Image from 'next/image';
import logo from '@/public/logo.svg';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg">
      <div className="mx-auto flex max-w-2xl items-center justify-between p-6 sm:px-8">
        <h1 className="font-semibold text-md">
          <Link href="/" className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <Image src={logo} alt="TechLog" width={32} height={32} priority className="dark:invert transition-all duration-500 hover:scale-110 hover:rotate-6" />
            TechLog
          </Link>
        </h1>
        <div className="flex items-center gap-4">
          <ThemeToggleButton />
          <Menu />
        </div>
      </div>
    </header>
  )
}
