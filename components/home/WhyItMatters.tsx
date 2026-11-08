import Link from "next/link";
import {
  Beaker,
  Brain,
  Heart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const points = [
  {
    title: "Chemical Exposures",
    description:
      "Everyday environments can expose people to pollutants, chemicals, and other substances.",
    icon: Beaker,
  },
  {
    title: "Mental Impact",
    description:
      "Toxins can affect concentration, energy, mood, memory, and overall well-being.",
    icon: Brain,
  },
  {
    title: "Affects Everyone",
    description:
      "Exposure can occur across many lifestyles, occupations, and age groups.",
    icon: Heart,
  },
  {
    title: "A Different Approach",
    description:
      "The program is designed to address accumulated toxic substances through a structured regimen.",
    icon: ShieldCheck,
  },
];

export default function WhyItMatters() {
  return (
    <section className="bg-[#f7fbfc] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.95fr_2.05fr] lg:items-start">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487] sm:text-sm">
            Why It Matters
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0c3341] sm:text-5xl">
            We Live in a Toxic World
          </h2>

          <p className="mt-6 text-base leading-[1.65] text-[#56717a] sm:text-lg sm:leading-[1.7]">
            Drugs, pollutants, chemicals, and other substances are encountered
            in everyday life. The Clear Body, Clear Mind Purification Program
            was developed to address the effects of accumulated toxic
            substances.
          </p>

          <Link
            href="/program"
            className="mt-8 inline-flex items-center gap-2 border-b border-[#1da6b5]/35 pb-2 text-sm font-bold uppercase tracking-[0.12em] text-[#087487] transition hover:border-[#087487]"
          >
            Learn More About the Program
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden border border-[#0c3341]/10 bg-[#0c3341]/10 sm:grid-cols-2 xl:grid-cols-4">
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <article
                key={point.title}
                className="bg-white px-6 py-8 sm:px-7 lg:min-h-[280px]"
              >
                <div className="flex size-12 items-center justify-center rounded-full border border-[#1da6b5]/40 bg-[#eef9fb] text-[#087487]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.1em] text-[#0c5265]">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-[1.55] text-[#56717a]">
                  {point.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}