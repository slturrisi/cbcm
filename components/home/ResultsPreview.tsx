import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

const stories = [
  {
    title: "I Feel Younger",
    text:
      "After completing the program, I felt more energetic, outgoing and happy. The heaviness I had carried with me was gone, and I felt calmer in my everyday environment.",
    attribution: "Robbie S.",
    image: "/images/results/success-1.jpg",
    imageAlt: "Purification Program success story",
  },
  {
    title: "Better Perceptions",
    text:
      "My eyesight, hearing, sense of smell and sense of taste all seemed heightened. I felt cleaner, had more energy and no longer felt dependent on coffee or other stimulants.",
    attribution: "Lisa B.",
    image: "/images/results/success-2.jpg",
    imageAlt: "Purification Program participant success story",
  },
  {
    title: "A Brighter Future",
    text:
      "I experienced major changes throughout the program. I felt that negative emotions which had been affecting me were gone, and I became excited about my future again.",
    attribution: "Alicia K.",
    image: "/images/results/success-3.jpg",
    imageAlt: "Clear Body Clear Mind success story",
  },
];

export default function ResultsPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#087487] sm:text-sm">
              Real Results
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-[#0c3341] sm:text-5xl lg:text-6xl">
              A Fresh Outlook on Life
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-[1.65] text-[#56717a] sm:text-lg sm:leading-[1.7]">
              People from many different backgrounds have shared their
              experiences after completing the Purification Program. Here are
              several of their reported results.
            </p>
          </div>

          <Link
            href="/results"
            className="hidden w-fit items-center gap-2 border-b border-[#087487]/30 pb-2 text-sm font-bold uppercase tracking-[0.12em] text-[#087487] transition hover:border-[#087487] lg:inline-flex"
          >
            Read More Success Stories
            <ArrowRight size={17} strokeWidth={2} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="group flex min-h-full flex-col overflow-hidden border border-[#0c3341]/10 bg-[#f7fbfc] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,64,78,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#dcecef]">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062f3d]/35 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 flex size-11 items-center justify-center rounded-full border border-white/30 bg-[#073b4b]/70 text-white shadow-lg backdrop-blur-md">
                  <Quote size={18} strokeWidth={1.8} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#0c3341]">
                  {story.title}
                </h3>

                <blockquote className="mt-5 flex-1 text-base leading-[1.65] text-[#56717a]">
                  “{story.text}”
                </blockquote>

                <p className="mt-8 border-t border-[#0c3341]/10 pt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#087487]">
                  — {story.attribution}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:hidden">
  <Link
    href="/results"
    className="inline-flex items-center gap-2 border-b border-[#087487]/30 pb-2 text-sm font-bold uppercase tracking-[0.12em] text-[#087487] transition hover:border-[#087487]"
  >
    Read More Success Stories
    <ArrowRight
      size={17}
      strokeWidth={2}
      className="transition-transform group-hover:translate-x-1"
    />
  </Link>
</div>

        
      </div>
    </section>
  );
}