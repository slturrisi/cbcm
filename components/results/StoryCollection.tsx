import Image from "next/image";
import { Quote } from "lucide-react";
import { resultStories } from "@/content/results";

export default function StoryCollection() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbfc] px-5 pb-20 pt-4 sm:px-8 lg:px-12 lg:pb-28 lg:pt-6" aria-label="Personal stories">
      <div className="mx-auto max-w-[1120px]">
        <div className="mt-10 space-y-12 sm:space-y-16 lg:mt-12 lg:space-y-20">
          {resultStories.map((story, index) => {
            const reversed = index % 2 === 1;
            return (
              <article key={story.id} className={`grid items-center gap-7 md:gap-10 lg:gap-16 ${reversed ? "md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_360px]" : "md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr]"}`}>
                <div className={`relative isolate mx-auto w-full max-w-[320px] md:max-w-none ${reversed ? "md:order-2" : ""}`}>
                  <div aria-hidden="true" className={`pointer-events-none absolute -top-12 -z-10 size-72 rounded-full bg-cyan-100/60 blur-3xl ${reversed ? "-right-12" : "-left-12"}`} />
                  <div aria-hidden="true" className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-[88%] rounded-[1.75rem] border border-[#087487]/10 bg-[#dff3f5]" />
                  <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#e5eff0] shadow-[0_15px_40px_rgba(10,64,78,0.08)]">
                    <Image src={story.image} alt={story.imageAlt} fill sizes="(max-width: 767px) 320px, (max-width: 1023px) 280px, 360px" className="object-cover object-center" />
                  </figure>
                </div>
                <div>
                  <Quote size={24} strokeWidth={1.3} className="mb-4 text-[#087487]" aria-hidden="true" />
                  <h2 className="font-display text-3xl font-semibold leading-tight text-[#0c3341] sm:text-4xl">{story.title}</h2>
                  <blockquote className="mt-5 text-base leading-8 text-[#56717a] sm:text-lg">“{story.id === "mario-m" ? story.quote.split("Clear Body, Clear Mind").map((part, i) => <span key={i}>{i > 0 && <em>Clear Body, Clear Mind</em>}{part}</span>) : story.quote}”</blockquote>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#087487]">— {story.attribution}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
