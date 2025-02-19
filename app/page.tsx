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
      <section className="relative min-h-[560px] flex items-center justify-center px-4 py-16">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              TechLog
            </span>
            <span className="block text-lg md:text-xl mt-2 font-medium text-gray-600 dark:text-gray-300">
              - テクログ -
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-300">
            テクテクと歩きながら技術を学び足跡を残すようなブログです。
          </p>
        </div>
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </section>
      <section className="-mt-16 py-16 px-4 max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8">News</h2>
        <NewsList news={data.contents} />
        <div className="text-center mt-8">
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
