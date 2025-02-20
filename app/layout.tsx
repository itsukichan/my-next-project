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
  metadataBase: new URL('http://localhost:3000'),
  title: {
    template: '%s | TechLog',
    default: 'TechLog',
  },
  description: 'TechLogは最新のテクノロジーに関する情報を発信するメディアです。',
  openGraph: {
    title: 'シンプルなコーポレートサイト',
    description:
      '「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'http://localhost:3000',
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
