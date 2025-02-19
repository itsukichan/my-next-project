type Props = {
  children: React.ReactNode;
}

export default function Sheet({ children }: Props) {
  return (
    <div className="bg-white dark:bg-gray-900 ">
      {children}
    </div>
  )
}
