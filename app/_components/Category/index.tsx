import type { Category } from '@/app/_libs/microcms';

type Props = {
  category: Category;
}

export default function Category({ category }: Props) {
  return (
    <span className="inline-block px-3 py-1.5 bg-gray-100 dark:bg-gray-800
                     rounded-full text-sm font-medium text-gray-700 dark:text-gray-300
                     transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700
                     border border-gray-200 dark:border-gray-700
                     shadow-sm">
      {category.name}
    </span>
  )
}
