import Hero from "@/app/_components/Hero";

export const metadata = {
  title: 'News',
}

type Props = {
  children: React.ReactNode;
}

export const revalidate = 60;

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero title="News" sub="ニュース" />
      {children}
    </div>
  )
}
