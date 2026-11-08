const discoveries = [
  { number: "01", title: "The biochemical problem", text: "The book examines the drugs and chemical substances encountered in everyday life and presents L. Ron Hubbard’s account of their effects on the body, mind and spirit." },
  { number: "02", title: "Discoveries about drug residues", text: "Read Hubbard’s findings about drug and chemical residues remaining in the body, and how those findings led to the development of the Purification Program." },
  { number: "03", title: "An exact regimen", text: "The book describes the program’s exercise, sauna and nutrition components, including its steps, supplements and the relationship between each element." },
];

export default function BookOverview() {
  return (
    <section id="about-the-book" className="mx-auto max-w-[1440px] scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
        <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">More about the book</p><h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#0c3341] sm:text-5xl">The discoveries.<br />The complete program.</h2></div>
        <div className="space-y-5 text-lg leading-8 text-[#56717a]">
          <p>Do you feel less alert and aware than you used to? Tired or drained of energy for no apparent reason?</p>
          <p><em>Clear Body, Clear Mind</em> presents L. Ron Hubbard’s research into drugs and toxic substances and the development of the Purification Program. It brings together the background to his discoveries and the full description of the regimen.</p>
          <p>From everyday chemical exposures to the program’s precise steps, the book is the place to read the complete account in the author’s own words.</p>
        </div>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-3">{discoveries.map((item) => <article key={item.number} className="border-t border-[#0c3341]/20 pt-6"><p className="text-xs font-semibold tracking-[0.2em] text-[#087487]">{item.number}</p><h3 className="mt-5 font-display text-3xl font-semibold text-[#0c3341]">{item.title}</h3><p className="mt-4 text-base leading-7 text-[#56717a]">{item.text}</p></article>)}</div>
    </section>
  );
}
