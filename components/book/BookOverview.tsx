import Image from "next/image";
import { FlaskConical, Fingerprint, Layers3 } from "lucide-react";

const discoveries = [
  { icon: FlaskConical, title: "The biochemical problem", text: "The book examines the drugs and chemical substances encountered in everyday life and presents L. Ron Hubbard’s account of their effects on the body, mind and spirit." },
  { icon: Fingerprint, title: "Discoveries about drug residues", text: "Read L. Ron Hubbard’s findings about drug and chemical residues remaining in the body, and how those findings led to the development of the Purification Program." },
  { icon: Layers3, title: "An exact regimen", text: "The book describes the program’s exercise, sauna and nutrition components, including its steps, supplements and the relationship between each element." },
];

export default function BookOverview() {
  return (
    <section id="about-the-book" className="scroll-mt-8 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">Inside Clear Body, Clear Mind</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#0c3341] sm:text-5xl">The discoveries.<br /><span className="font-medium italic text-[#087487]">The complete program.</span></h2>
            <div className="mt-7 space-y-5 text-base leading-7 text-[#56717a] sm:text-lg sm:leading-8">
              <p>Do you feel less alert and aware than you used to? Tired or drained of energy for no apparent reason?</p>
              <p><em>Clear Body, Clear Mind</em> presents L. Ron Hubbard’s research into drugs and toxic substances and the development of the Purification Program. It brings together the background to his discoveries and the full description of the regimen.</p>
              <p>From everyday chemical exposures to the program’s precise steps, the book is the place to read the complete account in the author’s own words.</p>
            </div>
          </div>
          <figure className="relative rounded-2xl border border-[#0c3341]/10 bg-[#f7fbfc] p-5 sm:p-10">
            <span aria-hidden="true" className="absolute -left-3 -top-3 size-20 rounded-full border border-[#1da6b5]/25" />
            <div className="relative rounded-xl bg-white px-2 py-12 shadow-[0_15px_40px_rgba(10,64,78,0.07)] sm:px-5"><Image src="/images/book/open-book.jpg" alt="An open copy of Clear Body, Clear Mind, showing printed text and illustrations" width={645} height={314} sizes="(max-width: 1023px) 90vw, 42vw" className="h-auto w-full" /></div>
            <figcaption className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#56717a]">The full account, in the author’s own words</figcaption>
          </figure>
        </div>
        <dl className="mt-12 grid gap-5 rounded-2xl border border-[#087487]/10 bg-[#f7fbfc] p-6 sm:grid-cols-3 sm:p-8">
          <div><dt className="text-xs font-bold uppercase tracking-[0.16em] text-[#087487]">English paperback</dt><dd className="mt-2 font-display text-3xl font-semibold text-[#0c3341]">290 pages</dd></div>
          <div><dt className="text-xs font-bold uppercase tracking-[0.16em] text-[#087487]">Publication year</dt><dd className="mt-2 font-display text-3xl font-semibold text-[#0c3341]">2013</dd></div>
          <div><dt className="text-xs font-bold uppercase tracking-[0.16em] text-[#087487]">Editions available here</dt><dd className="mt-2 font-display text-3xl font-semibold text-[#0c3341]">Softcover &amp; hardcover</dd></div>
        </dl>
        <div className="mt-16 grid gap-6 md:grid-cols-3">{discoveries.map((item) => {const Icon = item.icon;return <article key={item.title} className="rounded-xl border border-[#0c3341]/10 bg-[#f7fbfc] p-7 sm:p-8"><span className="flex size-12 items-center justify-center rounded-full border border-[#087487]/15 bg-white text-[#087487]"><Icon size={23} strokeWidth={1.4} /></span><h3 className="mt-6 font-display text-3xl font-semibold text-[#0c3341]">{item.title}</h3><p className="mt-4 text-base leading-7 text-[#56717a]">{item.text}</p></article>;})}</div>
        <div className="mt-14 border-t border-[#0c3341]/10 pt-10">
          <h3 className="font-display text-3xl font-semibold text-[#0c3341] sm:text-4xl">Experiences reported by participants.</h3>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#56717a]">Bridge Publications describes reports from participants around the world of clearer thinking and concentration, greater energy and enthusiasm, a more positive outlook, and an improved sense of well-being. These are personal reports; individual experiences vary.</p>
        </div>
      </div>
    </section>
  );
}
