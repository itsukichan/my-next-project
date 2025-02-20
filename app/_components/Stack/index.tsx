type Props = {
  children: React.ReactNode;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
};

export default function Stack({ children, gap = 'md', className = '' }: Props) {
  const gapStyles = {
    sm: 'space-y-4 sm:space-y-6',
    md: 'space-y-6 sm:space-y-8',
    lg: 'space-y-8 sm:space-y-12'
  };

  return (
    <div className={`${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  );
}
