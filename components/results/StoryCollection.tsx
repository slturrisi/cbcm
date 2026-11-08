import Image from "next/image";
import { Quote } from "lucide-react";
import { resultStories } from "@/content/results";

const photos = [
  { name: "morning", alt: "A woman enjoying a quiet morning at home", position: "object-[65%_center]" },
  { name: "window", alt: "A man relaxing near a sunlit window", position: "object-center" },
  { name: "outdoors", alt: "A man outdoors on a leafy walking path", position: "object-center" },
  { name: "garden", alt: "A woman on a sunny garden terrace", position: "object-center" },
  { name: "sunlight", alt: "A woman smiling on a sunlit porch", position: "object-center" },
  { name: "terrace", alt: "A man seated on a leafy residential terrace", position: "object-center" },
];

export default function StoryCollection() {
  return (
    <section className="bg-[#f7fbfc] px-5 pb-20 pt-4 sm:px-8 lg:px-12 lg:pb-28 lg:pt-6" aria-label="Personal stories">
      <div className="mx-auto max-w-[1120px]">
        <p className="max-w-2xl text-xs leading-6 text-[#56717a]">Photos are temporary AI illustrations for this design draft. They do not depict the people quoted.</p>
        <div className="mt-10 space-y-12 sm:space-y-16 lg:mt-12 lg:space-y-20">
          {resultStories.map((story, index) => {
            const photo = photos[index];
            const reversed = index % 2 === 1;
            return (
              <article key={story.id} className={`grid items-center gap-7 md:gap-10 lg:gap-16 ${reversed ? "md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_360px]" : "md:grid-cols-[280px_1fr] lg:grid-cols-[360px_1fr]"}`}>
                <figure className={`relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-xl bg-[#e5eff0] shadow-[0_15px_40px_rgba(10,64,78,0.07)] md:max-w-none ${reversed ? "md:order-2" : ""}`}>
                  <Image src={`/images/placeholders/results-${photo.name}.webp`} alt={`AI illustration: ${photo.alt.toLowerCase()}; not the person quoted`} fill sizes="(max-width: 767px) 320px, (max-width: 1023px) 280px, 360px" className={`object-cover ${photo.position}`} />
                </figure>
                <div>
                  <Quote size={24} strokeWidth={1.3} className="mb-4 text-[#087487]" aria-hidden="true" />
                  <h2 className="font-display text-3xl font-semibold leading-tight text-[#0c3341] sm:text-4xl">{story.title}</h2>
                  <blockquote className="mt-5 text-base leading-8 text-[#56717a] sm:text-lg">“{story.quote}”</blockquote>
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
