'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Blog } from '@/app/_libs/microcms'
import Date from '@/app/_components/Date'
import Category from '@/app/_components/Category'
import Stack from '@/app/_components/Stack'
import * as shiki from 'shiki'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

type Props = {
  data: Blog
}

export default function Article({ data }: Props) {
  const { theme } = useTheme()

  useEffect(() => {
    const processCodeBlocks = async () => {
      const highlighter = await shiki.createHighlighter({
        themes: ['github-light', 'github-dark'],
        langs: ['typescript', 'javascript', 'jsx', 'tsx', 'css', 'json', 'html', 'astro']
      })

      document.querySelectorAll('pre').forEach((pre) => {
        const code = pre.querySelector('code')
        if (!code) return

        const decoder = document.createElement('div')
        decoder.innerHTML = code.innerHTML
        let codeText = decoder.textContent || ''

        const fileNameMatch = codeText.match(/^([a-zA-Z]+):(.+?)\n/)
        let language = 'typescript'

        if (fileNameMatch) {
          language = fileNameMatch[1]
          const fileName = fileNameMatch[2].trim()
          pre.setAttribute('data-filename', fileName)
          codeText = codeText.replace(/^([a-zA-Z]+):(.+?)\n/, '')
        }

        const currentTheme = theme === 'dark' ? 'github-dark' : 'github-light'
        const highlightedCode = highlighter.codeToHtml(codeText, {
          lang: language,
          theme: currentTheme
        })

        const cleanedCode = highlightedCode
          .replace('<pre class="shiki', '<div class="shiki')
          .replace('</pre>', '</div>')

        pre.innerHTML = cleanedCode
      })
    }

    processCodeBlocks()
  }, [data, theme])

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
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </Stack>
    </article>
  );
}
