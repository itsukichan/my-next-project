import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getNewsDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import ButtonLink from '@/app/_components/ButtonLink';
import Sheet from '@/app/_components/Sheet';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
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
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  return (
    <div className="max-w-2xl mx-auto p-6 sm:px-8 py-12 sm:py-16">
      <Sheet>
        <Article data={data} />
        <div className="mt-12">
          <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
        </div>
      </Sheet>
    </div>
  );
}
