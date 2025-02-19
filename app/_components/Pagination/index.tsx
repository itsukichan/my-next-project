import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Link from 'next/link';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = '/news',
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );

  return (
    <nav>
      <ul className="flex items-center justify-center gap-2">
        {pages.map((p) => (
          <li key={p}>
            {current !== p ? (
              <Link
                href={`/news/p/${p}`}
                className="flex items-center justify-center w-10 h-10 rounded-lg
                         text-gray-700 hover:bg-gray-100 dark:text-gray-300
                         dark:hover:bg-gray-800 transition-colors"
              >
                {p}
              </Link>
            ) : (
              <span className="flex items-center justify-center w-10 h-10 rounded-lg
                             bg-blue-600 text-white">
                {p}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
