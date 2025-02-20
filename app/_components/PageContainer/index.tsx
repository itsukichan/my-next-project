type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function PageContainer({ children, className = '' }: Props) {
  return (
    <div className={`p-page sm:px-page-sm ${className}`}>
      {children}
    </div>
  );
}
