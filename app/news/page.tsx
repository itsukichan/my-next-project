import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';
import { NEWS_LIST_LIMIT } from '@/app/_constants';

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <div className="container mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 md:p-8">
        <div className="mb-12">
          <SearchField />
        </div>
        <NewsList news={news} />
        <div className="mt-12">
          <Pagination totalCount={totalCount} />
        </div>
      </div>
    </div>
  );
}
