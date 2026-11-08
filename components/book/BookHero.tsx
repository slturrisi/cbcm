import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function BookHero() {
  return (
    <section className="relative overflow-hidden bg-[#edf7f8] pb-16 pt-32 sm:pb-24 lg:pt-44">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-12">
        <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[330px] lg:max-w-[390px]">
          <Image src="/images/book/clear-body-clear-mind-book.webp" alt="Clear Body, Clear Mind by L. Ron Hubbard" width={900} height={1280} preload sizes="(max-width: 639px) 70vw, (max-width: 1023px) 330px, 390px" className="h-auto w-full drop-shadow-[0_30px_40px_rgba(5,48,61,0.22)]" />
        </div>
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#087487]">The book behind the program</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#0c3341] sm:text-6xl lg:text-7xl">Clear Body,<br /><span className="font-medium italic text-[#087487]">Clear Mind</span></h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#0c5265]">The Effective Purification Program</p>
          <p className="mt-4 text-lg text-[#56717a]">By L. Ron Hubbard</p>
          <p className="mt-7 text-lg leading-8 text-[#56717a]">Read the complete description of the Purification Program, its regimen, and the information presented by its developer.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#order" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#0c5265] px-7 text-sm font-bold !text-white transition hover:bg-[#087487]">Order your copy now <ArrowDown size={17} /></a>
            <a href="#about-the-book" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0c5265]/25 px-7 text-sm font-bold text-[#0c5265] transition hover:bg-white">Explore the book</a>
          </div>
        </div>
      </div>
    </section>
  );
}
