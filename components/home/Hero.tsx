import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[900px] overflow-hidden bg-[#f7fbfc] md:min-h-[860px] lg:min-h-screen">
      <div className="absolute inset-0 overflow-hidden bg-[#0c5265]">
        <Image
          src="/images/hero/waterfall-hero.png"
          alt="Bright waterfall flowing through a peaceful forest"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-[58%_center] md:object-[center_20%]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,40,52,0.94)_0%,rgba(3,46,59,0.8)_42%,rgba(4,63,76,0.34)_72%,rgba(4,63,76,0.12)_100%)] md:bg-[linear-gradient(90deg,rgba(3,40,52,0.91)_0%,rgba(3,46,59,0.72)_40%,rgba(4,63,76,0.24)_70%,rgba(4,63,76,0.05)_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,32,42,0.22)_0%,transparent_32%,rgba(3,37,48,0.22)_72%,rgba(247,251,252,0.16)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[900px] w-full max-w-[1440px] items-start px-5 pb-40 pt-32 sm:px-8 md:min-h-[860px] md:items-center md:pt-36 lg:min-h-screen lg:px-12 lg:pb-44 lg:pt-40">
        <div className="grid w-full gap-12 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)] md:items-center lg:gap-12">
          <div className="max-w-[760px] text-white">
            <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-cyan-100 sm:text-xs md:mb-5 md:text-sm md:tracking-[0.3em]">
              The Effective Purification Program
            </p>

            <h1 className="max-w-[720px] font-display text-[2.8rem] font-semibold leading-[0.94] tracking-[-0.035em] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.8rem] xl:text-[5.3rem]">
              Clear Body.
              <span className="mt-1 block font-medium italic text-cyan-100">
                Clear Mind.
              </span>
            </h1>

            <p className="mt-6 max-w-[700px] text-base leading-[1.6] text-white/86 sm:text-lg sm:leading-[1.65]">
              Discover the program described in L. Ron Hubbard’s book
              <em> Clear Body, Clear Mind</em> and learn about its availability in Central Ohio.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/program"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold !text-[#0b4353] shadow-[0_16px_45px_rgba(0,36,48,0.22)] transition hover:-translate-y-0.5 hover:bg-cyan-50 sm:min-h-13 sm:px-7"
              >
                Program Overview
                <ArrowRight size={17} strokeWidth={2} />
              </Link>
              <Link href="/book" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/55 bg-white/10 px-6 text-sm font-bold !text-white transition hover:bg-white/20 sm:min-h-13 sm:px-7">Get your copy</Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[255px] sm:max-w-[300px] md:max-w-[345px] lg:max-w-[425px] xl:max-w-[445px]">
            <div className="absolute inset-x-[13%] bottom-[7%] h-[12%] rounded-[50%] bg-[#002e3b]/35 blur-2xl" />

            <div className="relative rotate-[1.5deg] transition duration-700 hover:rotate-0 hover:scale-[1.012]">
              <Image
                src="/images/book/clear-body-clear-mind-book.webp"
                alt="Clear Body, Clear Mind by L. Ron Hubbard"
                width={900}
                height={1280}
                priority
                className="h-auto w-full drop-shadow-[0_30px_42px_rgba(0,25,35,0.36)]"
              />
            </div>

            <div className="relative z-10 mx-auto mt-7 hidden max-w-[270px] border border-white/20 bg-[#073b4b]/84 px-4 py-3 text-white shadow-[0_16px_38px_rgba(2,34,44,0.22)] backdrop-blur-xl sm:block">
              <div className="flex items-start gap-3">
                <BookOpen
                  className="mt-0.5 shrink-0 text-cyan-200"
                  size={17}
                  strokeWidth={1.8}
                />

                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-cyan-100">
                    The Book Behind the Program
                  </p>

                  <p className="mt-1 text-[0.78rem] leading-[1.15rem] text-white/82">
                    Read the complete description of the Purification Program
                    by L. Ron Hubbard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_bottom,rgba(247,251,252,0)_0%,rgba(247,251,252,0.08)_20%,rgba(247,251,252,0.35)_48%,rgba(247,251,252,0.78)_76%,#f7fbfc_100%)] sm:h-60 lg:h-64" />
    </section>
  );
}
