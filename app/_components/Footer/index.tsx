import Link from 'next/link';
import { navigationItems } from '@/app/_constants/navigation';

export default function Footer() {
  const footerItems = navigationItems.filter(item => item.showInFooter !== false);

  return (
    <footer className="py-4 px-6 text-center text-gray-600 dark:text-gray-400 text-sm mt-20">
      <nav className="mb-4">
        <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-base">
          {footerItems.map((item) => (
            <li key={item.label} className="w-full sm:w-auto">
              <Link
                href={item.href}
                target={item.isBlank ? '_blank' : undefined}
                className="block py-2 hover:text-gray-900 dark:hover:text-gray-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-xs sm:text-sm">&copy; TechLog. ALL Rights Reserved 2025</p>
    </footer>
  )
}
