import Image from "next/image";
import MobileHeroImage from "@/components/layout/MobileHeroImage";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden md:min-h-[760px] bg-[#062f3d] text-white lg:min-h-[860px]">
      <MobileHeroImage src="/images/overview/hero-waterfall.png" alt="A clear waterfall flowing through a lush natural landscape" />
      <Image
        src="/images/overview/hero-waterfall.png"
        alt="A clear waterfall flowing through a lush natural landscape"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center md:block"
      />

      <div className="absolute inset-0 hidden md:block bg-[linear-gradient(90deg,rgba(2,31,42,0.92)_0%,rgba(2,31,42,0.78)_34%,rgba(2,31,42,0.3)_68%,rgba(2,31,42,0.12)_100%)]" />

      <div className="absolute inset-0 hidden md:block bg-[linear-gradient(180deg,rgba(2,24,33,0.36)_0%,rgba(2,24,33,0.04)_42%,rgba(2,24,33,0.14)_66%,rgba(2,24,33,0.48)_100%)]" />

      <div className="relative mx-auto flex md:min-h-[760px] w-full max-w-[1440px] items-end px-5 pb-24 pt-5 sm:px-8 md:pb-32 md:pt-36 lg:min-h-[860px] lg:px-12 lg:pb-40 lg:pt-44">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-cyan-200/80 sm:w-14" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-100 sm:text-sm">
              Program Overview
            </p>
          </div>

          <h1 className="mt-7 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
            The Purification Program
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl sm:leading-9 lg:text-[22px]">
            Addressing the effects of accumulated drugs, toxins and nutritional
            deficiencies.
          </p>


        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-[linear-gradient(180deg,rgba(247,251,252,0)_0%,rgba(247,251,252,0.05)_15%,rgba(247,251,252,0.18)_34%,rgba(247,251,252,0.52)_62%,rgba(247,251,252,0.88)_84%,#f7fbfc_100%)] md:h-72 lg:h-80" />
    </section>
  );
}