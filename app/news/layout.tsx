import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

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
      <div className="container mx-auto px-4 py-8">
        <Sheet>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {children}
          </div>
        </Sheet>
      </div>
    </div>
  )
}
