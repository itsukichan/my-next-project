type Props = {
  children: React.ReactNode;
}

export default function Sheet({ children }: Props) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg  max-w-2xl mx-auto ">
      {children}
    </div>
  )
}
