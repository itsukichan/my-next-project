import { notFound } from 'next/navigation';
import { getCategoryDetail, getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import Sheet from '@/app/_components/Sheet';
import { NEWS_LIST_LIMIT } from '@/app/_constants';

type Props = {
  params: Promise<{
    current: string;
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { current, id } = await params;
  const currentPage = parseInt(current, 10);

  if (Number.isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const category = await getCategoryDetail(id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
    offset: NEWS_LIST_LIMIT * (currentPage - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <Sheet>
      <div className="p-6 sm:p-8">
        <NewsList news={news} />
        <div className="mt-12">
          <Pagination
            totalCount={totalCount}
            current={currentPage}
            basePath={`/news/category/${category.id}`}
          />
        </div>
      </div>
    </Sheet>
  );
}
