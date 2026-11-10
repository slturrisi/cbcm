import Image from "next/image";
import { ArrowDown, BookOpen } from "lucide-react";

export default function BookHero() {
  return (
    <div>
      <div className="flex items-center gap-4"><span aria-hidden="true" className="h-px w-10 bg-[#087487]/35" /><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#087487]">The book behind the program</p></div>
      <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#0c3341] sm:text-6xl">Clear Body,<br /><span className="font-medium italic text-[#087487]">Clear Mind</span></h1>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0c5265]">The Effective Purification Program</p>
      <p className="mt-3 text-base text-[#56717a]">By L. Ron Hubbard</p>
      <a href="#book-excerpt" className="group mt-6 flex max-w-lg items-center gap-4 rounded-xl border border-[#087487]/20 bg-white/80 p-4 text-[#0c3341] shadow-[0_8px_25px_rgba(10,64,78,0.04)] transition hover:border-[#087487]/45 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087487]">
        <BookOpen size={23} strokeWidth={1.5} className="shrink-0 text-[#087487]" aria-hidden="true" />
        <span className="min-w-0 flex-1"><span className="block text-sm font-bold text-[#087487]">Preview the book</span><span className="mt-1 block text-sm leading-6 text-[#56717a]">Read an excerpt by L. Ron Hubbard.</span></span>
        <ArrowDown size={18} className="shrink-0 text-[#087487] transition-transform group-hover:translate-y-1" aria-hidden="true" />
      </a>
      <div className="relative mt-8 px-8 py-6 sm:py-8">
        <Image src="/images/book/clear-body-clear-mind-book.webp" alt="Clear Body, Clear Mind by L. Ron Hubbard" width={900} height={1280} preload sizes="(max-width: 639px) 60vw, 290px" className="mx-auto h-auto w-full max-w-[240px] drop-shadow-[0_22px_20px_rgba(7,59,75,0.18)] sm:max-w-[290px]" />
      </div>
    </div>
  );
}
