'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Blog } from '@/app/_libs/microcms'
import Date from '@/app/_components/Date'
import Category from '@/app/_components/Category'
import Stack from '@/app/_components/Stack'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'highlight.js/styles/github-dark.css'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

type Props = {
  data: Blog
}

export default function Article({ data }: Props) {
  const { theme } = useTheme()

  useEffect(() => {
    const processCodeBlocks = () => {
      document.querySelectorAll('pre').forEach((pre) => {
        // コード要素を取得
        const code = pre.querySelector('code');
        if (!code) return;

        // コードブロックのテキストを取得
        let codeText = code.innerHTML;

        // ファイル名の処理（例: ```typescript:app/page.tsx のような形式）
        const fileNameMatch = codeText.match(/^([a-zA-Z]+):(.+?)\n/);

        if (fileNameMatch) {
          const language = fileNameMatch[1];
          const fileName = fileNameMatch[2].trim();

          // ファイル名を設定
          pre.setAttribute('data-filename', fileName);

          // 言語クラスを設定
          code.classList.add(`language-${language}`);
          code.classList.add('hljs');

          // ファイル名行を削除
          codeText = codeText.replace(/^([a-zA-Z]+):(.+?)\n/, '');
          code.innerHTML = codeText;
        }

        // シンタックスハイライトの適用
        hljs.highlightElement(code);
      });
    };

    processCodeBlocks();
  }, [data, theme]);

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
          className="prose dark:prose-invert max-w-none
                     prose-headings:font-bold
                     prose-a:text-blue-600 dark:prose-a:text-blue-400
                     prose-img:rounded-lg
                     prose-pre:p-0
                     prose-code:before:content-none prose-code:after:content-none"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </Stack>
    </article>
  );
}
