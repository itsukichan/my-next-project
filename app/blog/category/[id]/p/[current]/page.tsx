import { notFound } from 'next/navigation';
import { getCategoryDetail, getBlogList } from '@/app/_libs/microcms';
import BlogList from '@/app/_components/BlogList';
import Pagination from '@/app/_components/Pagination';
import Sheet from '@/app/_components/Sheet';
import { BLOG_LIST_LIMIT } from '@/app/_constants';

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

  const { contents: blog, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
    offset: BLOG_LIST_LIMIT * (currentPage - 1),
  });

  if (blog.length === 0) {
    notFound();
  }

  return (
    <Sheet>
      <div className="p-6 sm:p-8">
        <BlogList blog={blog} />
        <div className="mt-12">
          <Pagination
            totalCount={totalCount}
            current={currentPage}
            basePath={`/blog/category/${category.id}`}
          />
        </div>
      </div>
    </Sheet>
  );
}
