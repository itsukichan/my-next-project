import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/app/_providers/theme-provider'
import ViewTransitionProvider from '@/app/_components/ViewTransitionProvider'
import Header from './_components/Header';
import Footer from './_components/Footer';
import { Inter, Noto_Sans_JP } from "next/font/google"
import { Providers } from './providers';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://techlogwalk.vercel.app'),
  title: {
    template: '%s | TechLog - テクログ -',
    default: 'TechLog - テクログ -',
  },
  description: '技術の道をテクテク進みながら、ログを積み重ねる。',
  openGraph: {
    title: 'TechLog - テクログ -',
    description: '技術の道をテクテク進みながら、ログを積み重ねる。',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'https://techlogwalk.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${notoSansJP.variable} min-h-screen antialiased font-sans
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-gray-100 pt-[72px] transition-colors duration-100`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <ViewTransitionProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </ViewTransitionProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
