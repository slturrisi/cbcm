import Image from "next/image";
import { biochemicalArticle } from "@/content/biochemical-article";

export default function BookArticle() {
  return (
    <section aria-labelledby="book-article-heading" className="bg-[#edf7f8] px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
      <article className="mx-auto max-w-[1040px] rounded-2xl border border-[#087487]/20 border-y-4 bg-white p-5 shadow-[0_18px_60px_rgba(10,64,78,0.07)] sm:p-8 lg:p-12">
        <header className="grid grid-cols-[64px_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[150px_minmax(0,1fr)]">
          <Image src="/images/book/l-ron-hubbard-portrait.webp" alt="Black-and-white portrait of L. Ron Hubbard" width={674} height={915} sizes="(max-width: 639px) 64px, (max-width: 1023px) 120px, 150px" className="h-auto w-full rounded-lg" />
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#087487] sm:text-xs">By L. Ron Hubbard</p>
            <h2 id="book-article-heading" className="mt-3 font-display text-3xl font-semibold leading-[1.08] text-[#0c3341] sm:text-4xl lg:text-5xl">Our Biochemical <span className="font-medium italic text-[#087487]">Society</span></h2>
            <p className="mt-3 text-sm leading-6 text-[#56717a]">From the book <em>Clear Body, Clear Mind</em></p>
          </div>
        </header>
        <div data-article-body className="mt-7 space-y-4 border-t border-[#087487]/15 pt-7 text-base leading-7 text-[#56717a] sm:text-[17px] sm:leading-8">
          {biochemicalArticle.map((block, index) => {
            if (block.type === "heading") return <h3 key={index} className="pt-3 font-display text-3xl font-semibold leading-tight text-[#0c3341]">{block.text}</h3>;
            if (block.type === "definition") return <p key={index}><strong className="font-semibold text-[#087487]">{block.term}</strong>{block.text.startsWith(",") ? "" : " "}{block.text}</p>;
            return <p key={index}>{block.text}</p>;
          })}
        </div>
        <footer className="mt-7 border-t border-[#087487]/20 pt-5"><p className="text-sm font-semibold text-[#0c3341]">— L. Ron Hubbard</p></footer>
      </article>
    </section>
  );
}
