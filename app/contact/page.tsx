import Header from "@/components/layout/Header";
import PageHero from "@/components/layout/PageHero";

export default function ContactPage() {
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Central Ohio"
        title="Contact Us"
        description="Request more information, ask a question, or speak with someone about the program."
        imageSrc="/images/hero/waterfall-hero.png"
        imageAlt="Calm waterfall and surrounding forest"
      />

      <section className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#087487]">
            Get in Touch
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#0c3341] sm:text-5xl">
            Learn more about availability
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#56717a]">
            This page will contain the contact form, consultation options,
            location details, hours, and direct contact information.
          </p>
        </div>
      </section>
    </main>
  );
}