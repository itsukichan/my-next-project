import Link from 'next/link'
import Image from 'next/image'
import type { Blog } from '@/app/_libs/microcms'
import Date from '@/app/_components/Date'
import Category from '@/app/_components/Category'
import Stack from '@/app/_components/Stack'

type Props = {
  data: Blog
}

export default function Article({ data }: Props) {
  return (
    <article>
      <Stack gap="lg">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-muted dark:text-muted-dark mb-6">{data.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {(data.category || []).map((category) => (
                <Link key={category.id} href={`/blog/category/${category.id}`}>
                  <Category category={category} />
                </Link>
              ))}
            </div>
            <Date date={data.publishedAt ?? data.createdAt} />
          </div>
        </header>

        {data.thumbnail && (
          <Image
            src={data.thumbnail.url}
            alt=""
            className="w-full aspect-video object-cover rounded-lg"
            width={data.thumbnail.width}
            height={data.thumbnail.height}
          />
        )}

        <div
          className="prose prose-lg dark:prose-invert max-w-none
                     prose-headings:font-bold
                     prose-a:text-blue-600 dark:prose-a:text-blue-400
                     prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </Stack>
    </article>
  )
}
