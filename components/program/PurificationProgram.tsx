import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function PurificationProgram() {
  return (
    <section className="relative isolate overflow-hidden bg-[#062f3d] text-white">
      <div className="relative min-h-[820px] lg:min-h-[900px]">
        <Image
          src="/images/overview/purification-program.jpg"
          alt="A calm and professionally maintained Purification Program facility"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,36,48,0.96)_0%,rgba(3,36,48,0.9)_34%,rgba(3,36,48,0.56)_60%,rgba(3,36,48,0.22)_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,29,39,0.25)_0%,rgba(3,29,39,0.06)_40%,rgba(3,29,39,0.55)_100%)]" />

        <div className="relative mx-auto flex min-h-[820px] w-full max-w-[1440px] items-center px-5 py-28 sm:px-8 lg:min-h-[900px] lg:px-12 lg:py-36">
          <div className="relative max-w-3xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-20 hidden font-display text-[92px] font-semibold leading-none tracking-[-0.07em] text-cyan-100/[0.07] lg:block xl:-left-10 xl:text-[126px]"
            >
              PURIFICATION
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-cyan-200/65" />

                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100">
                  The Purification Program
                </p>
              </div>

              <h2 className="mt-7 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                An exact program developed to address a growing threat.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-white/74 sm:text-lg sm:leading-9">
                <p>
                  The Purification Program was developed by L. Ron Hubbard to
                  meet a growing threat to individual well-being arising from
                  the increasingly common use of drugs and chemical substances
                  in present-day culture.
                </p>

                <p>
                  Thousands of hours of research and testing culminated in the
                  precise actions and elements designed to interact in
                  dislodging and eliminating drug and toxic residues from the
                  body.
                </p>

                <p>
                  The result is an exact regimen combining exercise, sauna
                  sweat-out and nutrition.
                </p>

                <p className="font-semibold text-white">
                  The complete steps, regimen and supplements are contained in
                  the book <em>Clear Body, Clear Mind</em>.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/book"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#073746] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-50"
                >
                  <BookOpen size={17} strokeWidth={2} />
                  Explore the Book
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/8 px-6 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/14"
                >
                  Request Information
                  <ArrowUpRight size={17} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,rgba(6,47,61,0)_0%,rgba(6,47,61,0.28)_45%,rgba(6,47,61,0.75)_100%)]" />
      </div>
    </section>
  );
}