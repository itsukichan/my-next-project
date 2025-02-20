import Link from 'next/link'
import Image from 'next/image'
import type { Blog } from '@/app/_libs/microcms'
import Date from '@/app/_components/Date'
import Category from '@/app/_components/Category'

type Props = {
  data: Blog
}

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className="text-3xl md:text-4xl mb-6 text-left">{data.title}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-left">{data.description}</p>
      <div className="flex items-center gap-6 mb-16">
        <div className="flex flex-wrap gap-2">
          {(data.category || []).map((category) => (
            <Link key={category.id} href={`/blog/category/${category.id}`} className="hover:opacity-80">
              <Category category={category} />
            </Link>
          ))}
        </div>
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
