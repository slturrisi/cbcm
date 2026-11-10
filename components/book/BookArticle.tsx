import Image from "next/image";
import { biochemicalArticle, type ArticleBlock } from "@/content/biochemical-article";

function articleText(block: ArticleBlock) {
  if (block.opening) return <><span className="font-semibold">WE LIVE IN</span>{block.text.slice("WE LIVE IN".length)}</>;
  if (!block.italics?.length) return block.text;
  const pattern = new RegExp(`\\b(${block.italics.join("|")})\\b`, "g");
  return block.text.split(pattern).map((part, index) => block.italics?.includes(part) ? <em key={index}>{part}</em> : part);
}

export default function BookArticle() {
  return (
    <section id="book-excerpt" aria-labelledby="book-article-heading" className="scroll-mt-8 bg-[#edf7f8] px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
      <article className="mx-auto max-w-[1440px] rounded-2xl border border-[#087487]/25 border-y-4 bg-[linear-gradient(135deg,#c8dfe5_0%,#e2eef2_55%,#f2f8fa_100%)] p-5 shadow-[0_24px_70px_rgba(10,64,78,0.10)] sm:p-8 lg:p-10">
        <header className="border-b border-[#087487]/20 pb-6">
          <h2 id="book-article-heading" className="font-display text-3xl font-semibold leading-[1.08] text-[#0c3341] sm:text-4xl lg:text-5xl">Our Biochemical <span className="font-medium italic text-[#087487]">Society</span></h2>
          <div className="mt-4 flex items-center gap-4"><span aria-hidden="true" className="h-px w-10 shrink-0 bg-[#087487]/45 sm:w-14" /><p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#087487] sm:text-xs">By L. Ron Hubbard</p></div>
          <p className="mt-4 inline-block rounded-lg border border-[#087487]/15 bg-white/70 px-4 py-2 text-sm leading-6 text-[#0c3341]">An excerpt from <em className="font-semibold">Clear Body, Clear Mind</em></p>
        </header>
        <div className="mt-7 grid items-start gap-7 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[360px_minmax(0,1fr)]">
          <Image src="/images/book/l-ron-hubbard-portrait.webp" alt="Black-and-white portrait of L. Ron Hubbard" width={674} height={915} sizes="(max-width: 1023px) 300px, 360px" className="mx-auto h-auto w-full max-w-[300px] rounded-xl lg:max-w-none" />
          <div className="relative min-w-0 lg:self-stretch">
            <div role="region" aria-label="Excerpt from Clear Body, Clear Mind" tabIndex={0} data-excerpt-scroll className="max-h-[65svh] overflow-y-auto rounded-xl border border-[#087487]/20 bg-[#fffefd] px-5 py-5 [scrollbar-color:#67949e_#edf7f8] [scrollbar-gutter:stable] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087487] sm:max-h-[600px] sm:px-7 lg:absolute lg:inset-0 lg:max-h-none">
              <blockquote data-article-body className="space-y-5 border-l-2 border-[#087487]/25 pl-4 sm:pl-5 text-base leading-7 text-[#56717a] sm:text-[17px] sm:leading-8">
                {biochemicalArticle.map((block, index) => {
                  if (block.type === "heading") return <h3 key={index} className="pt-3 font-display text-3xl font-semibold italic leading-tight text-[#0c3341]">{block.text}</h3>;
                  if (block.type === "definition") return <p key={index}><strong className="font-semibold text-[#087487]">{block.term}</strong>{block.text.startsWith(",") ? "" : " "}{articleText(block)}</p>;
                  return <p key={index}>{articleText(block)}</p>;
                })}
              </blockquote>
              <p data-excerpt-attribution className="mt-7 border-t border-[#087487]/20 pt-5 text-sm font-semibold text-[#0c3341]">— L. Ron Hubbard</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
