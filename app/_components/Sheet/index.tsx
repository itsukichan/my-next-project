type Props = {
  children: React.ReactNode;
}

export default function Sheet({ children }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-100 dark:border-gray-700 transition-colors duration-200">
      {children}
    </div>
  )
}
