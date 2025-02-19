'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SearchFieldComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem("q");
    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set('q', q.value.trim());
      router.push(`/news/search?${params.toString()}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <label className="relative flex items-center">
        <Image
          src="/search.svg"
          alt="検索"
          width={16}
          height={16}
          loading="eager"
          className="absolute left-3 dark:invert"
        />
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get('q') || undefined}
          placeholder="キーワードを入力"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700
                     rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:bg-gray-800 dark:text-gray-100"
        />
      </label>
    </form>
  )
}

export default function SearchField() {
  return (
    <Suspense>
      <SearchFieldComponent />
    </Suspense>
  )
}
