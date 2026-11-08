import Image from "next/image";

export default function BiochemicalProblem() {
  return (
    <section
      id="biochemical-problem"
      className="relative overflow-hidden bg-[#f7fbfc] py-24 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute left-[-140px] top-28 h-[420px] w-[420px] rounded-full bg-cyan-100/45 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 xl:gap-28">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-14 hidden max-w-[760px] font-display text-[92px] font-semibold leading-[0.82] tracking-[-0.065em] text-[#087487]/[0.055] lg:block xl:-left-8 xl:text-[118px]"
            >
              BIOCHEMICAL
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#087487]/35" />

                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">
                  The Biochemical Problem
                </p>
              </div>

              <h2 className="mt-7 max-w-xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#0c3341] sm:text-5xl lg:text-6xl">
                We live in a chemical-oriented society.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-[#56717a] sm:text-lg sm:leading-9">
                <p>
                  It would be difficult to find anyone in present-day
                  civilization who is untouched by this fact. The vast majority
                  of people encounter food preservatives and other chemical
                  substances, including atmospheric pollutants and pesticides.
                </p>

                <p>
                  Added to these are pain relievers, tranquilizers and other
                  medical drugs prescribed by doctors.
                </p>

                <p>
                  The widespread use of marijuana, LSD, heroin, cocaine and
                  other illicit drugs further contributes to the situation.
                </p>

                <p className="font-semibold text-[#0c3341]">
                  Together, these factors form part of the biochemical problem.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-6 -right-5 h-full w-[88%] rounded-[2rem] border border-[#087487]/10 bg-[#dff3f5] sm:-bottom-8 sm:-right-8" />

            <div className="relative min-h-[480px] overflow-hidden rounded-[1.75rem] shadow-[0_30px_80px_rgba(10,64,78,0.16)] sm:min-h-[600px] lg:min-h-[690px]">
              <Image
                src="/images/overview/biochemical-problem.png"
                alt="A modern environment representing the biochemical substances encountered in everyday life"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#062f3d]/30 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-[#062f3d]/55 p-5 text-white shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-sm sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                  The Modern Environment
                </p>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  Preservatives, atmospheric pollutants, pesticides, medical
                  drugs and illicit drugs all contribute to the biochemical
                  situation described in the program materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}