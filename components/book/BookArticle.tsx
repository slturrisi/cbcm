import { ArrowUpRight, FileText } from "lucide-react";

export default function BookArticle() {
  return (
    <section aria-labelledby="book-article-heading" className="relative overflow-hidden bg-[#edf7f8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <span className="inline-flex size-14 items-center justify-center rounded-full border border-[#087487]/15 bg-white text-[#087487]"><FileText size={25} strokeWidth={1.4} /></span>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">An article by L. Ron Hubbard</p>
          <h2 id="book-article-heading" className="mt-4 font-display text-4xl font-semibold leading-tight text-[#0c3341] sm:text-5xl">Our Biochemical<br /><span className="font-medium italic text-[#087487]">Society</span></h2>
          <p className="mt-6 text-base leading-7 text-[#56717a]">The publisher features this article alongside <em>Clear Body, Clear Mind</em>, introducing the concerns behind the program.</p>
        </div>
        <div className="rounded-2xl border border-[#087487]/10 bg-white p-7 shadow-[0_20px_60px_rgba(10,64,78,0.06)] sm:p-10">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#087487]">Article summary</h3>
          <div className="mt-6 space-y-5 text-base leading-8 text-[#56717a] sm:text-lg">
            <p>L. Ron Hubbard considers how modern life brings people into contact with a range of chemical substances. He discusses food additives, medicines, recreational drugs, pollution and pesticides as parts of a broader environmental picture.</p>
            <p>Using food preservatives as one example, he develops his view that chemical exposure extends beyond deliberate drug use. He also considers industrial and agricultural chemicals, radioactive materials and substances associated with warfare.</p>
            <p>The article presents this context as the motivation for the Purification Program. The book goes on to describe his approach and the program’s regimen in detail.</p>
          </div>
          <a href="https://www.bridgepub.com/store/item/clear-body-clear-mind-paperback.html#more-about" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center gap-2 text-sm font-bold text-[#087487] underline underline-offset-4">Read the full article on Bridge Publications <ArrowUpRight size={17} /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </div>
    </section>
  );
}
