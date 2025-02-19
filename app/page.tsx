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
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
              TechLog
            </span>
            <span className="mt-3 block text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl">
              - テクログ -
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl">
            テクテクと歩きながら技術を学び足跡を残すようなブログです。
          </p>
        </div>
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-300 hover:scale-105"
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="100vw"
        />
      </section>
      <section className="relative mx-auto max-w-4xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-900 sm:p-12 -mt-20">
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
