import './globals.css';
// import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    template: '%s | シンプルなコーポレートサイト',
    default: 'シンプルなコーポレートサイト',
  },
  description:
    '「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。',
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.className} bg-background-light text-gray-900 dark:bg-background-dark dark:text-gray-100`}>
        <Header />
        {children}
        <Footer />
      </body>
      {/* <GoogleAnalytics gaId="" /> */}
    </html>
  );
}
