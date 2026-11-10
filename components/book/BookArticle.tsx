import Image from "next/image";
import { Quote } from "lucide-react";
import { biochemicalArticle, type ArticleBlock } from "@/content/biochemical-article";

function articleText(block: ArticleBlock) {
  if (block.opening) return <><span className="font-semibold">WE LIVE IN</span>{block.text.slice("WE LIVE IN".length)}</>;
  if (!block.italics?.length) return block.text;
  const pattern = new RegExp(`\\b(${block.italics.join("|")})\\b`, "g");
  return block.text.split(pattern).map((part, index) => block.italics?.includes(part) ? <em key={index}>{part}</em> : part);
}

export default function BookArticle() {
  return (
    <section aria-labelledby="book-article-heading" className="bg-[#edf7f8] px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
      <article className="mx-auto max-w-[1240px] rounded-2xl border border-[#087487]/20 border-y-4 bg-white p-5 shadow-[0_18px_60px_rgba(10,64,78,0.07)] sm:p-8 lg:p-10">
        <header className="border-b border-[#087487]/15 pb-6">
          <h2 id="book-article-heading" className="font-display text-3xl font-semibold leading-[1.08] text-[#0c3341] sm:text-4xl lg:text-5xl">Our Biochemical <span className="font-medium italic text-[#087487]">Society</span></h2>
          <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#087487] sm:text-xs">By L. Ron Hubbard</p>
          <p className="mt-3 text-sm leading-6 text-[#56717a]">An excerpt from <em>Clear Body, Clear Mind</em></p>
        </header>
        <div className="mt-7 grid items-start gap-7 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[360px_minmax(0,1fr)]">
          <Image src="/images/book/l-ron-hubbard-portrait.webp" alt="Black-and-white portrait of L. Ron Hubbard" width={674} height={915} sizes="(max-width: 1023px) 300px, 360px" className="mx-auto h-auto w-full max-w-[300px] rounded-xl lg:max-w-none" />
          <div className="relative min-w-0 lg:self-stretch">
            <div role="region" aria-label="Excerpt from Clear Body, Clear Mind" tabIndex={0} data-excerpt-scroll className="max-h-[65svh] overflow-y-auto rounded-xl border border-[#087487]/15 bg-[#f7fbfc] px-5 py-5 [scrollbar-color:#67949e_#edf7f8] [scrollbar-gutter:stable] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087487] sm:max-h-[600px] sm:px-7 lg:absolute lg:inset-0 lg:max-h-none">
              <blockquote data-article-body className="relative isolate space-y-5 [&>p]:relative [&>p]:z-10 [&>h3]:relative [&>h3]:z-10 text-base leading-7 text-[#56717a] sm:text-[17px] sm:leading-8">
                <Quote aria-hidden="true" fill="currentColor" strokeWidth={0} className="pointer-events-none absolute -top-3 left-0 z-0 size-48 rotate-180 text-[#087487] opacity-[0.12] sm:size-64" />
                {biochemicalArticle.map((block, index) => {
                  if (block.type === "heading") return <h3 key={index} className="pt-3 font-display text-3xl font-semibold italic leading-tight text-[#0c3341]">{block.text}</h3>;
                  if (block.type === "definition") return <p key={index}><strong className="font-semibold text-[#087487]">{block.term}</strong>{block.text.startsWith(",") ? "" : " "}{articleText(block)}</p>;
                  return <p key={index}>{articleText(block)}</p>;
                })}
                <Quote aria-hidden="true" fill="currentColor" strokeWidth={0} className="pointer-events-none absolute bottom-0 right-0 z-0 size-48 text-[#087487] opacity-[0.12] sm:size-64" />
              </blockquote>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
