import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import ButtonLink from '@/app/_components/ButtonLink';
import Sheet from '@/app/_components/Sheet';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ dk?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const { dk: draftKey } = await searchParams;

  const data = await getBlogDetail(slug, {
    draftKey: draftKey,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url ?? ''],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const { dk: draftKey } = await searchParams;

  const data = await getBlogDetail(slug, {
    draftKey: draftKey,
  }).catch(notFound);

  return (
    <Sheet>
      <div className="p-6 sm:p-8">
        <Article data={data} />
        <div className="mt-12">
          <ButtonLink href="/blog">ブログ一覧へ</ButtonLink>
        </div>
      </div>
    </Sheet>
  );
}
