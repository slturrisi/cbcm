import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden sm:min-h-[660px] bg-[#0c5265]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,37,48,0.9)_0%,rgba(3,46,59,0.66)_50%,rgba(4,63,76,0.15)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#062f3d]/45 via-transparent to-[#062f3d]/25" />

      <div className="relative mx-auto flex min-h-[520px] w-full sm:min-h-[560px] max-w-[1440px] items-end px-5 pb-24 pt-36 sm:px-8 sm:pb-28 lg:px-12">
        <div className="max-w-3xl text-white">
          <p className="mb-5 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-100 sm:text-sm">
            <span aria-hidden="true" className="h-px w-10 shrink-0 bg-cyan-200/80 sm:w-14" />
            {eyebrow}
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_bottom,rgba(247,251,252,0)_0%,rgba(247,251,252,0.06)_20%,rgba(247,251,252,0.3)_45%,rgba(247,251,252,0.72)_70%,rgba(247,251,252,0.96)_90%,#f7fbfc_100%)] sm:h-64" />
    </section>
  );
}