import Hero from "@/app/_components/Hero";

export const metadata = {
  title: 'Blog',
}

type Props = {
  children: React.ReactNode;
}

export const revalidate = 60;

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Hero title="Blog" sub="ブログ" />
      <div className="max-w-2xl mx-auto  py-12 sm:py-16">
        {children}
      </div>
    </div>
  )
}
