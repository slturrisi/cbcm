import Link from "next/link";
import { ArrowRight } from "lucide-react";

const chapters = [
  { number: "01", title: "The background", text: "Explore the book’s discussion of drugs, chemicals, and their effects—the starting point for L. Ron Hubbard’s development of the program." },
  { number: "02", title: "The program", text: "Read about the Purification Program and the exercise, sauna, and nutrition components described in the book." },
  { number: "03", title: "The complete description", text: "Go beyond a brief introduction with the developer’s account of the program and its regimen." },
];

export default function BookOverview() {
  return (
    <section id="about-the-book" className="mx-auto max-w-[1440px] scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
        <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">Inside the book</p><h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#0c3341] sm:text-5xl">Begin with<br />understanding.</h2></div>
        <div className="text-lg leading-8 text-[#56717a]"><p><em>Clear Body, Clear Mind</em> by L. Ron Hubbard gives the full description of the Purification Program. The book presents the program, its exact regimen and the information needed to understand how it is carried out.</p><Link href="/program" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#087487]">Explore the program <ArrowRight size={17} /></Link></div>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-3">{chapters.map((item) => <article key={item.number} className="border-t border-[#0c3341]/20 pt-6"><p className="text-xs font-semibold tracking-[0.2em] text-[#087487]">{item.number}</p><h3 className="mt-5 font-display text-3xl font-semibold text-[#0c3341]">{item.title}</h3><p className="mt-4 text-base leading-7 text-[#56717a]">{item.text}</p></article>)}</div>
    </section>
  );
}
