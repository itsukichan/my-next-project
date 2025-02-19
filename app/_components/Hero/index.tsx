import Image from 'next/image'

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-black/60 to-black/40 text-white overflow-hidden">
      <div className="relative z-10 px-4 pt-36 pb-16 sm:pb-24 text-center">
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
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 brightness-75"
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
        priority
      />
    </section>
  );
}
