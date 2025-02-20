import Image from 'next/image';
import Link from 'next/link';
import Category from '../Category';
import Date from '../Date';
import { Blog } from '@/app/_libs/microcms';
import Stack from '../Stack';

type Props = {
  blog: Blog[];
};

export default function BlogList({ blog }: Props) {
  if (blog.length === 0) {
    return (
      <p className="text-center text-muted dark:text-muted-dark">
        記事がありません。
      </p>
    );
  }

  return (
    <Stack gap="md">
      {blog.map((article) => (
        <article
          key={article.id}
          className="group border-b border-default dark:border-default-dark pb-8 last:border-none"
        >
          <Link
            href={`/blog/${article.id}`}
            className="block sm:flex gap-6"
          >
            <div className="relative aspect-video sm:w-48 mb-4 sm:mb-0">
              {article.thumbnail ? (
                <Image
                  src={article.thumbnail.url}
                  alt=""
                  className="rounded-lg object-cover transition-transform group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              ) : (
                <Image
                  src="/no-image.png"
                  alt=""
                  className="rounded-lg object-cover transition-transform group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              )}
            </div>

            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {article.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {(article.category || []).map((category) => (
                    <Category key={category.id} category={category} />
                  ))}
                </div>
                <Date date={article.publishedAt ?? article.createdAt} />
              </div>
            </div>
          </Link>
        </article>
      ))}
    </Stack>
  );
}
