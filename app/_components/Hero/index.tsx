import Image from 'next/image'

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className="relative h-[300px] sm:h-[400px] flex items-center justify-center bg-gradient-to-b from-gray-900/60 to-gray-900/40 dark:from-black/70 dark:to-black/50 text-white overflow-hidden">
      <div className="relative z-10 px-4 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="inline-flex items-center text-lg sm:text-xl opacity-90 tracking-wide
                    before:content-[''] before:h-[1px] before:w-12 before:bg-white/70 before:mr-6
                    after:content-[''] after:h-[1px] after:w-12 after:bg-white/70 after:ml-6">
          {sub}
        </p>
      </div>
      <Image
        className="absolute inset-0 w-full h-full object-cover object-center brightness-75 dark:brightness-50 transition-all duration-500 hover:scale-105"
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
        priority
      />
    </section>
  );
}
