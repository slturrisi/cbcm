import Image from "next/image";

export default function EnvironmentalToxins() {
  return (
    <section className="relative overflow-hidden bg-[#f1f8f9] py-24 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute left-[-170px] top-32 h-[500px] w-[500px] rounded-full bg-cyan-100/55 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 xl:gap-28">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-16 hidden max-w-[820px] font-display text-[88px] font-semibold leading-[0.82] tracking-[-0.065em] text-[#087487]/[0.055] lg:block xl:-left-8 xl:text-[112px]"
            >
              CHEMICALS
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#087487]/35" />

                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">
                  Chemicals Can Also Remain in the Body
                </p>
              </div>

              <h2 className="mt-7 max-w-xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#0c3341] sm:text-5xl lg:text-6xl">
                The issue is not limited to drugs.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-[#56717a] sm:text-lg sm:leading-9">
                <p>
                  It soon became apparent that drugs were not the only
                  substances that could remain in the body. The steady stream of
                  toxic substances encountered in daily life could also
                  accumulate.
                </p>

                <p>
                  These substances include food preservatives, industrial
                  chemicals, household cleaning products and insecticides, to
                  name only a few.
                </p>

                <p>
                  The accumulation of drug and toxic residues in the body can
                  have serious consequences. Such residues can adversely affect
                  a person&apos;s health, energy level and memory and can even
                  inhibit the ability to study and learn.
                </p>

                <p className="font-semibold text-[#0c3341]">
                  In short, residual drug and chemical deposits can cost an
                  individual his or her future.
                </p>
              </div>
            </div>
          </div>

          <figure>
            <div className="relative isolate">
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-5 -right-3 -z-10 h-full w-[88%] rounded-[2rem] border border-[#087487]/10 bg-white/70 sm:-bottom-6 sm:-right-6" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_30px_80px_rgba(10,64,78,0.16)]">
                <Image src="/images/overview/everyday-products.webp" alt="Illustration of everyday cleaning and personal-care products alongside packaged snacks, sweets and soft drinks" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
            <figcaption className="mt-10 max-w-xl text-sm leading-7 text-[#56717a]">Everyday exposure can involve household and personal-care products, as well as additives in processed foods.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}