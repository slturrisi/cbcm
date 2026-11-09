import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ToxicTestForm from "@/components/toxic-test/ToxicTestForm";
export const metadata: Metadata = { title: "Toxic Test | Clear Body, Clear Mind Central Ohio", description: "Take the Toxic Test with Clear Body, Clear Mind in Central Ohio.", robots: { index: false } };
export default function ToxicTestPage() {
  return <><Header /><main className="bg-[linear-gradient(135deg,#edf7f8_0%,#f7fbfc_65%,#e4f1f3_100%)] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36"><div className="mx-auto grid max-w-[1440px] items-start gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"><div><div className="flex items-center gap-4"><span aria-hidden="true" className="h-px w-10 bg-[#087487]/35" /><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">The Toxic Test</p></div><h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] text-[#0c3341] sm:text-6xl">How toxic<br /><span className="font-medium italic text-[#087487]">are you?</span></h1><p className="mt-6 max-w-md text-base leading-7 text-[#56717a]">A questionnaire from Clear Body, Clear Mind.<br />Take it one question at a time.</p><div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-2xl bg-[#0c5265] lg:block"><Image src="/images/hero/waterfall-hero.png" alt="Waterfall flowing through a green forest" fill sizes="40vw" className="object-cover" /></div></div><ToxicTestForm /></div></main><Footer /></>;
}
