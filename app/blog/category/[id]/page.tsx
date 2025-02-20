import { getCategoryDetail, getBlogList } from '@/app/_libs/microcms';
import { notFound } from 'next/navigation';
import BlogList from '@/app/_components/BlogList';
import Pagination from '@/app/_components/Pagination';
import Category from '@/app/_components/Category';
import Sheet from '@/app/_components/Sheet';
import { BLOG_LIST_LIMIT } from '@/app/_constants';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  const category = await getCategoryDetail(id).catch(notFound);

  const { contents: blog, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <Sheet>
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-8">
          <Category category={category} />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-200">の記事一覧</span>
        </div>
        <BlogList blog={blog} />
        <div className="mt-12">
          <Pagination
            totalCount={totalCount}
            basePath={`/blog/category/${category.id}`}
          />
        </div>
      </div>
    </Sheet>
  );
}
