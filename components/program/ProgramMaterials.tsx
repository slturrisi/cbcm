import Image from "next/image";

const reading = [
  { title: "Clear Body, Clear Mind", image: "/images/overview/program-book-open.webp", alt: "Clear Body, Clear Mind book by L. Ron Hubbard, shown with an open copy", description: "L. Ron Hubbard’s book describes the program and its regimen." },
  { title: "Your program references", image: "/images/overview/program-guides.webp", alt: "Program clipboard, spiral-bound Clear Body, Clear Mind and Purification guides", description: "A program manual to guide your daily progress, a spiral-bound copy of the book for reading in the sauna, and an illustrated guide to the Purification Rundown." },
];

export default function ProgramMaterials() {
  return (
    <section aria-labelledby="program-materials-heading" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4"><span aria-hidden="true" className="h-px w-10 bg-[#087487]/35" /><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">Your program materials</p></div>
          <h2 id="program-materials-heading" className="mt-5 font-display text-4xl font-semibold leading-tight text-[#0c3341] sm:text-5xl lg:text-6xl">Equipped for each step.</h2>
          <p className="mt-6 text-base leading-8 text-[#56717a] sm:text-lg">The program’s materials bring its written references, daily organization and practical gear together.</p>
        </div>
        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {reading.map(item => <article key={item.title} className="flex flex-col rounded-2xl border border-[#087487]/10 bg-[#f7fbfc] p-6 sm:p-8">
            <div className="relative h-64 sm:h-80"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-contain" /></div>
            <h3 className="mt-7 font-display text-3xl font-semibold text-[#0c3341]">{item.title === "Clear Body, Clear Mind" ? <em>{item.title}</em> : item.title}</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#56717a]">{item.description}</p>
          </article>)}
        </div>
        <div className="mt-8 grid items-center gap-8 rounded-2xl border border-[#087487]/10 bg-[#f1f8f9] p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <Image src="/images/overview/program-gear.webp" alt="Purification gym bag, vitamin organizer, water bottle, exercise clothing and sauna footwear" width={1600} height={1248} sizes="(max-width: 1023px) 100vw, 55vw" className="h-auto w-full rounded-xl" />
          <div><h3 className="font-display text-3xl font-semibold text-[#0c3341] sm:text-4xl">Ready for the daily routine.</h3><p className="mt-5 text-base leading-8 text-[#56717a]">A Purification gym bag keeps your gear together. The vitamin organizer and water bottle help keep daily essentials organized, alongside exercise clothing and sauna footwear.</p></div>
        </div>
      </div>
    </section>
  );
}
