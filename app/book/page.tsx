import Image from "next/image";
import Header from "@/components/layout/Header";
import PageHero from "@/components/layout/PageHero";

export default function BookPage() {
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="By L. Ron Hubbard"
        title="Clear Body, Clear Mind"
        description="Learn more about the best-selling book describing the effective purification program."
        imageSrc="/images/hero/waterfall-hero.png"
        imageAlt="Bright waterfall flowing over rocks"
      />

      <section className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[390px]">
          <Image
            src="/images/book/clear-body-clear-mind-book.webp"
            alt="Clear Body, Clear Mind by L. Ron Hubbard"
            width={900}
            height={1280}
            className="h-auto w-full drop-shadow-[0_30px_45px_rgba(5,48,61,0.25)]"
          />
        </div>

        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#087487]">
            The Book
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#0c3341] sm:text-5xl">
            Discover the program in detail
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#56717a]">
            This page will include the official description of the book,
            information about its author, and options to obtain a copy.
          </p>
        </div>
      </section>
    </main>
  );
}