import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

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
      <div className="max-w-2xl mx-auto p-6 sm:px-8 py-12 sm:py-16">
        <Sheet>
          <div className="prose prose-lg dark:prose-invert max-w-none p-6 sm:p-8">
            {children}
          </div>
        </Sheet>
      </div>
    </div>
  );
}
