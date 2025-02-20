import { getBlogList } from '@/app/_libs/microcms';
import { BLOG_LIST_LIMIT } from '@/app/_constants';
import BlogList from '@/app/_components/BlogList';
import SearchField from '@/app/_components/SearchField';
import Sheet from '@/app/_components/Sheet';

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams;

  const { contents: blog } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
    q: q
  });

  return (
    <Sheet>
      <div className="p-6 sm:p-8">
        <div className="mb-12">
          <SearchField />
        </div>
        <BlogList blog={blog} />
      </div>
    </Sheet>
  );
}
