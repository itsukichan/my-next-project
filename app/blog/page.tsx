import { getBlogList } from '@/app/_libs/microcms';
import BlogList from '@/app/_components/BlogList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';
import Sheet from '@/app/_components/Sheet';
import { BLOG_LIST_LIMIT } from '@/app/_constants';

export default async function Page() {
  const { contents: blog, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
  });

  return (
    <Sheet>
      <div className="p-6 sm:p-8">
        <div className="mb-12">
          <SearchField />
        </div>
        <BlogList blog={blog} />
        <div className="mt-12">
          <Pagination totalCount={totalCount} />
        </div>
      </div>
    </Sheet>
  );
}
