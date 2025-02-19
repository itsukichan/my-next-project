import { notFound } from 'next/navigation';
import { getCategoryDetail, getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import { Sheet } from '@/app/_components/Sheet';

type Props = {
  params: {
    current: string;
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 sm:py-16">
      <Sheet>
        <div className="p-6 sm:p-8">
          <NewsList news={news} />
          <div className="mt-8">
            <Pagination
              totalCount={totalCount}
              current={current}
              basePath={`/news/category/${category.id}`}
            />
          </div>
        </div>
      </Sheet>
    </div>
  );
}
