import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.css';

import { News } from '@/app/_libs/microcms';
import Category from '@/app/_components/Category';
import Date from '@/app/_components/Date';

type Props = {
  news: News[];
}

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>
  }

  return (
    <ul>
      {
        news.map((article) => (
          <li key={article.id} className={styles.list}>
            <Link href={`/news/${article.id}`} className={styles.link}>
              {article.thumbnail ? (
                <Image
                  className={styles.image}
                  src={article.thumbnail.url}
                  alt=""
                  width={article.thumbnail.width}
                  height={article.thumbnail.height}
                />
              ) : (
                <Image
                  className={styles.image}
                  src="/no-image.png"
                  alt=""
                  width={1200}
                  height={630}
                />
              )}
              <dl className={styles.content}>
                <dt className={styles.newsItemTitle}>{article.title}</dt>
                <dd className={styles.meta}>
                  <Category category={article.category} />
                  <Date date={article.publishedAt} />
                </dd>
              </dl>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
