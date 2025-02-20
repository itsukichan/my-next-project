import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import SearchField from '@/app/_components/SearchField';
import Sheet from '@/app/_components/Sheet';

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams;

  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: q
  });

  return (
    <Sheet>
      <div className="p-6 sm:p-8">
        <div className="mb-12">
          <SearchField />
        </div>
        <NewsList news={news} />
      </div>
    </Sheet>
  );
}
