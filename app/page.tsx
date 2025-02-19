import Image from "next/image";
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIST_LIMIT } from '@/app/_constants';
import ButtonLink from '@/app/_components/ButtonLink'
import NewsList from '@/app/_components/NewsList';

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIST_LIMIT,
  });

  return (
    <>
      <section className="relative flex h-[600px] sm:h-[700px] items-center justify-center overflow-hidden bg-gradient-to-b from-black/30 to-black/10">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-8 sm:mb-12 text-center">
            <div className="mb-4 sm:mb-6 inline-block animate-float">
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
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 bg-clip-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent drop-shadow-lg leading-[1.2]">
                TechLog
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 tracking-[0.2em] sm:tracking-[0.3em] mt-2 sm:mt-4 opacity-90 transition-all duration-500 hover:opacity-100">
                - テクログ -
              </span>
            </div>
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 font-medium">
            テクテクと歩きながら技術を学び<br className="hidden sm:block" />足跡を残すようなブログです。
          </p>
        </div>
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
      <section className="relative mx-auto max-w-2xl px-4">
        <div className="rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-900 -mt-20 mx-auto py-10 px-6 sm:py-12 sm:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            News
          </h2>
          <NewsList news={data.contents} />
          <div className="mt-10 text-center">
            <ButtonLink href="/news">もっとみる</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
