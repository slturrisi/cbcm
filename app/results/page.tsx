import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import StoryCollection from "@/components/results/StoryCollection";
import { resultStories } from "@/content/results";

export const metadata: Metadata = {
  title: "Personal Experiences | Clear Body, Clear Mind Central Ohio",
  description: "Explore personal experiences published on the original Clear Body, Clear Mind website, organized by topic.",
};

export default function ResultsPage() {
  const featured = resultStories.find((story) => story.id === "sm")!;
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Successes & experiences" title="In their own words." description="Personal accounts from people who have completed the Purification Program." imageSrc="/images/hero/waterfall-hero.png" imageAlt="Waterfall flowing through a green forest" />
        <section className="bg-[#073b4b] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24" aria-label="Featured personal experience">
          <figure className="mx-auto max-w-4xl text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">A fresh outlook</p><blockquote className="mt-6 font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">“{featured.quote}”</blockquote><figcaption className="mt-7 text-sm text-cyan-100">— {featured.attribution} · Excerpt from the original CBCM website</figcaption></figure>
        </section>
        <StoryCollection />
        <section className="border-t border-[#0c3341]/10 bg-white px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">Take the next step</p><h2 className="mt-4 font-display text-4xl font-semibold text-[#0c3341] sm:text-5xl">Explore it for yourself.</h2><p className="mt-5 text-base leading-7 text-[#56717a]">Read the book for the complete description, or speak with our Central Ohio team about your questions.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><Link href="/book" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0c5265] px-7 text-sm font-bold !text-white">Get the Book <ArrowRight size={17} /></Link><Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0c5265]/25 px-7 text-sm font-bold text-[#0c5265]">Contact Us</Link></div>
          </div>
          <p className="mx-auto mt-12 max-w-[1440px] text-xs leading-6 text-[#56717a]">Individual experiences vary. These personal accounts are not medical evidence or a guarantee of results. <Link href="/medical-disclaimer" className="underline underline-offset-4">Read the medical disclaimer</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
