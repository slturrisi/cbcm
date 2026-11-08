import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import StoryCollection from "@/components/results/StoryCollection";

export const metadata: Metadata = {
  title: "Personal Experiences | Clear Body, Clear Mind Central Ohio",
  description: "Personal accounts from people who have completed the Purification Program.",
};

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Successes and experiences" title={<>In their <span className="font-medium italic text-cyan-100">own words.</span></>} description="Personal accounts from people who have completed the Purification Program." imageSrc="/images/hero/waterfall-hero.png" imageAlt="Waterfall flowing through a green forest" />
        <StoryCollection />
        <section className="border-t border-[#0c3341]/10 bg-white px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">Take the next step</p><h2 className="mt-4 font-display text-4xl font-semibold text-[#0c3341] sm:text-5xl">Explore it for yourself.</h2><p className="mt-5 text-base leading-7 text-[#56717a]">Read the book for the complete description of the program.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><Link href="/book" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0c5265] px-7 text-sm font-bold !text-white">Get the Book <ArrowRight size={17} /></Link></div>
          </div>
          <p className="mx-auto mt-12 max-w-[1440px] text-xs leading-6 text-[#56717a]">Individual experiences vary. These personal accounts are not medical evidence or a guarantee of results. <Link href="/medical-disclaimer" className="underline underline-offset-4">Read the medical disclaimer</Link>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
