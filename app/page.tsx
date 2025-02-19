import Image from "next/image";
import styles from "./page.module.css";
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
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>
            TechLog <span className="text-md">- テクログ -</span>
          </h1>
          <p className={styles.description}>
            テクテクと歩きながら技術を学び足跡を残すようなブログです。
          </p>
        </div>
        <Image className={styles.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200} priority sizes="(max-width: 640px) 100vw, 50vw" />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
