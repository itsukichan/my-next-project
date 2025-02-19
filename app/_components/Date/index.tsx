import Image from 'next/image';
import { formatDate } from '@/app/_libs/utils'

type Props = {
  date: string;
}

export default function Date({ date }: Props) {
  return (
    <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
      <Image
        src="/clock.svg"
        alt=""
        width={16}
        height={16}
        priority
        className="dark:invert"
      />
      {formatDate(date)}
    </span>
  )
}
