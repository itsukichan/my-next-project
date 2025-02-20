import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';
import Sheet from '@/app/_components/Sheet';
import { NEWS_LIST_LIMIT } from '@/app/_constants';

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <Sheet>
      <div className="p-6 sm:p-8">
        <div className="mb-12">
          <SearchField />
        </div>
        <NewsList news={news} />
        <div className="mt-12">
          <Pagination totalCount={totalCount} />
        </div>
      </div>
    </Sheet>
  );
}
