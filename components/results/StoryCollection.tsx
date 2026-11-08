import Image from "next/image";
import { Quote } from "lucide-react";
import { resultStories } from "@/content/results";

const photoStories = [
  { image: "/images/placeholders/results-morning.webp", alt: "AI illustration of a woman enjoying a quiet morning at home; not a person quoted", position: "object-[65%_center]", stories: resultStories.slice(0, 2) },
  { image: "/images/placeholders/results-outdoors.webp", alt: "AI illustration of a man outdoors on a leafy walking path; not a person quoted", position: "object-center", stories: resultStories.slice(2, 4) },
  { image: "/images/placeholders/results-sunlight.webp", alt: "AI illustration of a woman smiling on a sunlit porch; not a person quoted", position: "object-center", stories: resultStories.slice(4, 6) },
];

export default function StoryCollection() {
  return (
    <section className="bg-[#f7fbfc] px-5 pb-20 pt-10 sm:px-8 lg:px-12 lg:pb-28 lg:pt-14" aria-label="Personal stories">
      <div className="mx-auto max-w-[1440px]">
        <p className="max-w-2xl text-xs leading-6 text-[#56717a]">Photos are temporary AI illustrations for this design draft. They do not depict the people quoted.</p>
        <div className="mt-10 space-y-16 lg:mt-12 lg:space-y-24">
          {photoStories.map((group, index) => (
            <div key={group.image} className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16 xl:gap-24">
              <figure className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-[#e5eff0] shadow-[0_20px_55px_rgba(10,64,78,0.08)] lg:aspect-[4/5] ${index % 2 ? "lg:order-2" : ""}`}>
                <Image src={group.image} alt={group.alt} fill sizes="(max-width: 1023px) 100vw, 46vw" className={`object-cover ${group.position}`} />
              </figure>
              <div className="divide-y divide-[#0c3341]/15">
                {group.stories.map((story) => (
                  <article key={story.id} className="py-8 first:pt-0 last:pb-0 sm:py-10">
                    <Quote size={25} strokeWidth={1.3} className="mb-5 text-[#087487]" aria-hidden="true" />
                    <h2 className="font-display text-3xl font-semibold leading-tight text-[#0c3341] sm:text-4xl">{story.title}</h2>
                    <blockquote className="mt-5 text-base leading-8 text-[#56717a] sm:text-lg">“{story.quote}”</blockquote>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#087487]">— {story.attribution}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
