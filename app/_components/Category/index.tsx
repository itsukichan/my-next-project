import type { Category } from '@/app/_libs/microcms';

type Props = {
  category: Category;
}

export default function Category({ category }: Props) {
  return (
    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800
                     rounded-md text-sm whitespace-nowrap">
      {category.name}
    </span>
  )
}
