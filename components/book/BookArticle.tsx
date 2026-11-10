import Image from "next/image";
import { biochemicalArticle } from "@/content/biochemical-article";

export default function BookArticle() {
  return (
    <section aria-labelledby="book-article-heading" className="relative overflow-hidden bg-[#edf7f8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
        <figure className="mx-auto w-full max-w-[300px] lg:sticky lg:top-8">
          <Image src="/images/book/l-ron-hubbard-portrait.webp" alt="Black-and-white portrait of L. Ron Hubbard" width={674} height={915} sizes="300px" className="h-auto w-full rounded-2xl shadow-[0_20px_60px_rgba(10,64,78,0.13)]" />
          <figcaption className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#56717a]">L. Ron Hubbard</figcaption>
        </figure>
        <article>
          <div className="flex items-center gap-4"><span aria-hidden="true" className="h-px w-10 bg-[#087487]/35" /><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">By L. Ron Hubbard</p></div>
          <h2 id="book-article-heading" className="mt-5 font-display text-4xl font-semibold leading-tight text-[#0c3341] sm:text-5xl lg:text-6xl">Our Biochemical<br /><span className="font-medium italic text-[#087487]">Society</span></h2>
          <p className="mt-4 text-sm leading-7 text-[#56717a]">From the book <em>Clear Body, Clear Mind</em></p>
          <div className="mt-8 space-y-6 text-base leading-8 text-[#56717a] sm:text-lg sm:leading-9">
            {biochemicalArticle.map((block, index) => {
              if (block.type === "heading") return <h3 key={index} className="pt-4 font-display text-3xl font-semibold leading-tight text-[#0c3341] sm:text-4xl">{block.text}</h3>;
              if (block.type === "definition") return <p key={index}><strong className="font-semibold text-[#087487]">{block.term}</strong>{block.text.startsWith(",") ? "" : " "}{block.text}</p>;
              return <p key={index}>{block.text}</p>;
            })}
          </div>
          <p className="mt-8 border-t border-[#087487]/15 pt-6 text-sm font-semibold text-[#0c3341]">— L. Ron Hubbard</p>
        </article>
      </div>
    </section>
  );
}
