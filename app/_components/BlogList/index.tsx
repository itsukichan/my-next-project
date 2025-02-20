import Image from 'next/image';
import Link from 'next/link';
import Category from '../Category';
import Date from '../Date';
import { Blog } from '@/app/_libs/microcms';

type Props = {
  blog: Blog[];
};

export default function BlogList({ blog }: Props) {
  if (blog.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className="space-y-8">
      {blog.map((article) => (
        <li key={article.id} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-none">
          <div className="block sm:flex sm:gap-6">
            <Link href={`/blog/${article.id}`} className="block hover:opacity-80 transition-opacity">
              {article.thumbnail ? (
                <Image
                  src={article.thumbnail.url}
                  alt=""
                  className="w-full h-48 sm:w-48 sm:h-32 object-cover rounded-lg mb-4 sm:mb-0"
                  width={article.thumbnail.width}
                  height={article.thumbnail.height}
                />
              ) : (
                <Image
                  className="w-full h-48 sm:w-48 sm:h-32 object-cover rounded-lg mb-4 sm:mb-0"
                  src="/no-image.png"
                  alt="No Image"
                  width={1200}
                  height={630}
                />
              )}
            </Link>
            <dl className="flex-1">
              <dt>
                <Link href={`/blog/${article.id}`} className="block text-lg sm:text-xl font-bold mb-3 sm:mb-4 line-clamp-2 hover:opacity-80">
                  {article.title}
                </Link>
              </dt>
              <dd className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex flex-wrap gap-2">
                  {(article.category || []).map((category) => (
                    <Link key={category.id} href={`/blog/category/${category.id}`} className="hover:opacity-80">
                      <Category category={category} />
                    </Link>
                  ))}
                </div>
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
