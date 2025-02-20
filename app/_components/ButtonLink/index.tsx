type Props = {
  href: string;
  children: React.ReactNode;
}

export default function ButtonLink({ href, children }: Props) {
  return (
    <a
      href={href}
      className="inline-block px-8 py-3
                bg-blue-700 dark:bg-blue-600 text-white font-medium rounded-lg
                hover:bg-blue-800 dark:hover:bg-blue-700
                transition-all duration-200
                shadow-md hover:shadow-lg
                relative pl-6 pr-12
                after:content-['→'] after:absolute after:right-6 after:top-1/2
                after:-translate-y-1/2 after:transition-transform after:duration-200
                hover:after:translate-x-1"
    >
      {children}
    </a>
  )
}
