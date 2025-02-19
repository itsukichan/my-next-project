import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import SearchField from '@/app/_components/SearchField';

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q
  });

  return (
    <div className="container mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl py-10 px-4 md:py-20 md:px-8">
        <div className="mb-12">
          <SearchField />
        </div>
        <NewsList news={news} />
      </div>
    </div>
  )
}
