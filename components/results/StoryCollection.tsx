"use client";

import { useState } from "react";
import { Quote } from "lucide-react";
import { resultStories, resultTopics, type ResultTopic } from "@/content/results";

export default function StoryCollection() {
  const [topic, setTopic] = useState<ResultTopic>("All stories");
  const visible = resultStories.filter((story) => topic === "All stories" || story.topic === topic);
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28" aria-labelledby="stories-heading">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">In their own words</p>
        <h2 id="stories-heading" className="mt-4 font-display text-4xl font-semibold leading-tight text-[#0c3341] sm:text-5xl">Different experiences.<br />Personal perspectives.</h2>
        <p className="mt-5 text-base leading-7 text-[#56717a]">Explore excerpts from personal accounts published on the original Clear Body, Clear Mind website. These are individual experiences, not promises of a particular outcome.</p>
      </div>
      <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label="Filter stories by topic">
        {resultTopics.map((item) => <button key={item} type="button" aria-pressed={topic === item} aria-controls="story-grid" onClick={() => setTopic(item)} className={`min-h-11 rounded-full border px-5 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087487] ${topic === item ? "border-[#0c5265] bg-[#0c5265] text-white" : "border-[#0c3341]/20 bg-white text-[#0c5265] hover:border-[#087487]"}`}>{item}</button>)}
      </div>
      <p className="mt-6 text-sm text-[#56717a]" role="status">{visible.length} {visible.length === 1 ? "story" : "stories"}</p>
      <div id="story-grid" className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((story) => (
          <article key={story.id} className="flex flex-col rounded-xl border border-[#0c3341]/10 bg-white p-7 sm:p-9">
            <div className="flex items-center justify-between gap-4"><Quote size={25} strokeWidth={1.4} className="text-[#087487]" /><p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#087487]">{story.topic}</p></div>
            <h3 className="mt-7 font-display text-3xl font-semibold text-[#0c3341]">{story.title}</h3>
            <blockquote className="mt-5 flex-1 text-base leading-7 text-[#56717a]">“{story.quote}”</blockquote>
            <p className="mt-8 border-t border-[#0c3341]/10 pt-5 text-sm font-semibold text-[#0c3341]">— {story.attribution}</p>
            <p className="mt-2 text-xs text-[#56717a]">Excerpt from the original CBCM website</p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm leading-6 text-[#56717a]">These accounts are from the reference website and are not presented as Central Ohio testimonials. <a href="https://clearbodyclearmind.com/results" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Read the original accounts<span className="sr-only"> (opens in a new tab)</span></a>.</p>
    </section>
  );
}
