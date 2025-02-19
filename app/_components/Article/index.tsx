import Link from 'next/link'
import Image from 'next/image'
import type { News } from '@/app/_libs/microcms'
import Date from '@/app/_components/Date'
import Category from '@/app/_components/Category'

type Props = {
  data: News
}

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className="text-3xl md:text-4xl mb-6 text-left">{data.title}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-left">{data.description}</p>
      <div className="flex items-center gap-6 mb-16">
        <Link href={`/news/category/${data.category.id}`}>
          <Category category={data.category} />
        </Link>
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className="w-full h-auto mb-16 rounded-lg"
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </main>
  )
}
