import Image from "next/image";
import { getBlogList } from '@/app/_libs/microcms';
import { TOP_BLOG_LIST_LIMIT } from '@/app/_constants';
import ButtonLink from '@/app/_components/ButtonLink'
import BlogList from '@/app/_components/BlogList';
import Sheet from '@/app/_components/Sheet';

export const revalidate = 60;

export default async function Home() {
  const data = await getBlogList({
    limit: TOP_BLOG_LIST_LIMIT,
  });

  return (
    <>
      <section className="relative flex h-[600px] sm:h-[700px] items-center justify-center overflow-hidden bg-gradient-to-b from-black/30 to-black/10">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-8 sm:mb-12 text-center">
            <div className="mb-4 sm:mb-6 inline-block">
              <Image
                src="/logo.svg"
                alt="TechLog"
                width={90}
                height={90}
                className="dark:invert transition-all duration-500 hover:scale-110 hover:rotate-3 sm:w-[120px] sm:h-[120px]"
                priority
              />
            </div>
            <div className="space-y-2 sm:space-y-4">
              <span className="relative block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.2] text-white drop-shadow-lg hover:scale-105 transition-all duration-500">
                TechLog
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl font-medium tracking-[0.2em] sm:tracking-[0.3em] mt-2 sm:mt-4 text-white/90">
                - テクログ -
              </span>
            </div>
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 font-medium">
            技術の道をテクテク進みながら、<br className="block sm:hidden" />ログを積み重ねる。
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 dark:from-black/70 dark:to-black/40" />
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-700 hover:scale-105 hover:opacity-80"
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="100vw"
        />
      </section>
      <div className="relative mx-auto max-w-2xl -mt-20">
        <Sheet>
          <div className=" mx-auto py-10 px-6 sm:py-12 sm:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              最新の記事
            </h2>
            <BlogList blog={data.contents} />
            <div className="mt-10 text-center">
              <ButtonLink href="/blog">記事一覧</ButtonLink>
            </div>
          </div>
        </Sheet>
      </div>
    </>
  );
}
