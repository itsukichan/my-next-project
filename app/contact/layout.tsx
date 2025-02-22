import Hero from '@/app/_components/Hero';

export const metadata = {
  title: 'お問い合わせ',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Hero title="Contact" sub="お問い合わせ" />
      <div className="max-w-2xl mx-auto  py-12 sm:py-16 px-6 md:px-0">
        {children}
      </div>
    </div>
  );
}
