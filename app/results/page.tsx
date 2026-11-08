import Header from "@/components/layout/Header";
import PageHero from "@/components/layout/PageHero";

export default function ResultsPage() {
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Successes and Experiences"
        title="Results"
        description="Read experiences from individuals who have completed the program."
        imageSrc="/images/hero/waterfall-hero.png"
        imageAlt="Peaceful waterfall surrounded by forest"
      />

      <section className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#087487]">
            Personal Experiences
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#0c3341] sm:text-5xl">
            Stories from program completions
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#56717a]">
            This page will feature local successes, photographs, and
            experiences from people who completed the program.
          </p>
        </div>
      </section>
    </main>
  );
}