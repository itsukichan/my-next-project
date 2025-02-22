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
            className="block sm:flex gap-8 hover:bg-gray-50 dark:hover:bg-gray-800/50 p-4 -mx-4 rounded-lg transition-colors"
          >
            <div className="relative aspect-video sm:w-56 mb-4 sm:mb-0 overflow-hidden rounded-lg">
              {article.thumbnail ? (
                <Image
                  src={article.thumbnail.url}
                  alt=""
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 100vw, 224px"
                  priority
                />
              ) : (
                <Image
                  src="/no-image.png"
                  alt=""
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 100vw, 224px"
                  priority
                />
              )}
            </div>

            <div className="flex-1 flex flex-col">
              <h2 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {article.title}
              </h2>
              <div className="mt-auto flex flex-col gap-2">
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
