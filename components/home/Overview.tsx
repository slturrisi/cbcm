import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Overview() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbfc]">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#087487] sm:text-sm">
            Overview
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-[#0c3341] sm:text-5xl lg:text-6xl">
            The Biochemical Problem
          </h2>

          <div className="mt-7 space-y-5 text-base leading-[1.65] text-[#56717a] sm:text-lg sm:leading-[1.7]">
            <p>
              Modern life brings people into contact with drugs, pollutants,
              household chemicals, food preservatives and other toxic
              substances.
            </p>

            <p>
              The Purification Program was developed by L. Ron Hubbard and designed
              to help you get rid of the devastating effect of drugs and toxins. It is
              an all-natural regimen that combines exercise, sauna and nutrition to
              help you eliminate drugs and other chemicals from the body, and to
              provide a fresh start toward greater well-being.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/program"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0c5265] px-6 text-sm font-bold !text-white shadow-[0_14px_35px_rgba(7,67,83,0.18)] transition hover:-translate-y-0.5 hover:bg-[#087487]"
            >
              About the Program
              <ArrowRight size={17} strokeWidth={2} />
            </Link>

            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0c5265]/25 bg-white px-6 text-sm font-bold text-[#0c5265] transition hover:-translate-y-0.5 hover:border-[#0c5265]/45"
            >
              <BookOpen size={17} strokeWidth={1.9} />
              Explore the Book
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px]">
            <Image
              src="/images/hero/biochemical-problem.png"
              alt="Everyday environmental and biochemical exposures represented in a modern editorial scene"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#062f3d]/55 via-transparent to-transparent" />


          </div>

          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 border-l border-b border-[#1da6b5]/25 lg:block" />
          <div className="absolute -right-6 -top-6 hidden h-32 w-32 border-r border-t border-[#1da6b5]/25 lg:block" />
        </div>
      </div>
    </section>
  );
}