import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProgramCTA() {
  return (
    <section className="bg-[#073746] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Read the complete program.</h2>
          <p className="mt-5 text-base leading-7 text-white/75"><em>Clear Body, Clear Mind</em> by L. Ron Hubbard contains the full description of the regimen.</p>
        </div>
        <Link href="/book" className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-[#cceff5] px-7 text-sm font-bold !text-[#0b4353] transition hover:bg-white">Get the Book <ArrowRight size={17} /></Link>
      </div>
    </section>
  );
}
