import { getBlogList } from '@/app/_libs/microcms';
import BlogList from '@/app/_components/BlogList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';
import { BLOG_LIST_LIMIT } from '@/app/_constants';
import PageContainer from '@/app/_components/PageContainer';
import Section from '@/app/_components/Section';

export default async function Page() {
  const { contents: blog, totalCount } = await getBlogList({
    limit: BLOG_LIST_LIMIT,
  });

  return (
    <PageContainer>
      <Section>
        <SearchField />
      </Section>
      <Section>
        <BlogList blog={blog} />
      </Section>
      <Section className="mt-12">
        <Pagination totalCount={totalCount} />
      </Section>
    </PageContainer>
  );
}
