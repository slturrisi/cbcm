import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

const stories = [
  {
    title: "Happier, More Calm, More Aware",
    text: "Between life and medical procedures, I felt like I had accumulated toxins that I needed to get out. The Purification Program did just that. I now feel happier, more calm, and more aware. This makes my life so much easier, especially with my kids.",
    attribution: "Chelsie D.",
    image: "/images/results/chelsie-d-close.webp",
    imageAlt: "Portrait of Chelsie D.",
    position: "object-center",
  },
  {
    title: "My Head Is Clear",
    text: "When I heard about the Purification Program, I liked the purpose of it. As I progressed through, I could feel drugs from many years ago coming out of my system. I re-experienced some of the feelings and emotions that were attached to alcohol, and then they were gone. It surprised me just how good I felt towards the end of the program. Now, my body feels clean, my head is clear and I feel younger.",
    attribution: "Joe L.",
    image: "/images/results/joe-l.webp",
    imageAlt: "Portrait of Joe L.",
    position: "object-center",
  },
  {
    title: "Enthusiasm at an All-Time High",
    text: "I didn’t have much of a history of drug or alcohol use, and I’ve never had a surgery in my life. I eat clean, work out consistently, and I wasn’t too sure what this rundown would do for me. One thing, however, was that I had COVID in early 2021 and for about 2 weeks, I completely lost all of my taste and smell. It eventually returned, but was maybe 60% at best. I’m excited to report that the Purification Program brought both my taste and smell back 100%! Not only that, my energy, mental clarify, and enthusiasm towards life are at an all-time high!",
    attribution: "Mike B.",
    image: "/images/results/mike-b.webp",
    imageAlt: "Portrait of Mike B.",
    position: "object-center",
  },
];

export default function ResultsPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-20 grid items-center gap-9 lg:mb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <figure className="overflow-hidden rounded-2xl bg-[#e5eff0] shadow-[0_20px_60px_rgba(10,64,78,0.1)]">
            <Image src="/images/overview/central-ohio-delivery-space.webp" alt="Participants and staff in the Central Ohio Purification Center delivery space" width={1800} height={1200} sizes="(max-width: 1023px) 100vw, 50vw" className="h-auto w-full" />
            <figcaption className="px-5 py-4 text-xs tracking-wide text-[#56717a]">Central Ohio Purification Center</figcaption>
          </figure>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">The program in Central Ohio</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#0c3341] sm:text-5xl">A place for your fresh start.</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[#56717a] sm:text-lg">
              <p>The Purification Program brings together exercise, time in the sauna and nutrition in a precise regimen developed by L. Ron Hubbard.</p>
              <p>Here at our Central Ohio center, staff specifically trained in the program and its delivery guide participants through its steps. Our dedicated delivery space brings the program and its support together in one place.</p>
              <p>Below, three participants share their own experiences.</p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl">
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
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="group flex min-h-full flex-col overflow-hidden border border-[#0c3341]/10 bg-[#f7fbfc] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,64,78,0.12)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#dcecef]">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={`object-cover ${story.position}`}
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
        <div className="mt-12 flex justify-center border-t border-[#0c3341]/10 pt-10 sm:mt-16">
          <Link href="/program" className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#0c5265] px-8 text-sm font-bold !text-white transition hover:bg-[#073b4b]">Program Overview <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
