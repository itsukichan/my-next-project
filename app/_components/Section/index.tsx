type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className = '' }: Props) {
  return (
    <section className={`mb-section sm:mb-section-sm ${className}`}>
      {children}
    </section>
  );
}
