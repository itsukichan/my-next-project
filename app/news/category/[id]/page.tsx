import { getCategoryDetail, getNewsList } from '@/app/_libs/microcms';
import { notFound } from 'next/navigation';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import Category from '@/app/_components/Category';
import { NEWS_LIST_LIMIT } from '@/app/_constants';

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <div className="container mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 md:p-8">
        <div className="flex items-center gap-3 mb-8">
          <Category category={category} />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-200">の記事一覧</span>
        </div>
        <NewsList news={news} />
        <div className="mt-12">
          <Pagination
            totalCount={totalCount}
            basePath={`/news/category/${category.id}`}
          />
        </div>
      </div>
    </div>
  );
}
