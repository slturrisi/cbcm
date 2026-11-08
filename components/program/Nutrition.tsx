import Image from "next/image";

export default function Nutrition() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute right-[-180px] top-24 h-[500px] w-[500px] rounded-full bg-[#dff3f5]/65 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.98fr_1.02fr] lg:gap-20 xl:gap-28">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-6 -left-5 h-full w-[88%] rounded-[2rem] border border-[#087487]/10 bg-[#e9f6f7] sm:-bottom-8 sm:-left-8" />

            <div className="relative min-h-[500px] overflow-hidden rounded-[1.75rem] shadow-[0_30px_80px_rgba(10,64,78,0.15)] sm:min-h-[620px] lg:min-h-[700px]">
              <Image
                src="/images/overview/nutrition.png"
                alt="Fresh foods, clean water and nutritional elements"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(4,38,50,0.54)_100%)]" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#062f3d]/55 p-5 text-white shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-sm sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                  A Vital Component
                </p>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  The nutritional regimen uses specified vitamins and minerals
                  in exact quantities and precise relationships.
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-16 hidden max-w-[850px] font-display text-[90px] font-semibold leading-[0.82] tracking-[-0.065em] text-[#087487]/[0.055] lg:block xl:-left-10 xl:text-[116px]"
            >
              NUTRITION
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#087487]/35" />

                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">
                  Nutrition, Vitamins and Minerals
                </p>
              </div>

              <h2 className="mt-7 max-w-xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#0c3341] sm:text-5xl lg:text-6xl">
                Nutrition is another vital component of the program.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-[#56717a] sm:text-lg sm:leading-9">
                <p>
                  L. Ron Hubbard conducted research over a period of decades
                  into the benefits of vitamin therapy.
                </p>

                <p>
                  The result is the program&apos;s nutritional regimen,
                  consisting of specific vitamins and minerals taken in exact
                  quantities and in precise ratios to one another.
                </p>

                <p>
                  No medicines or drugs are used on the Purification Program.
                  The recommended vitamin and mineral dosages are classified as
                  food.
                </p>

                <p>
                  Vitamins and minerals assist in repairing damage caused by
                  drugs and toxic substances and in rebuilding tissues and
                  cells. Since drugs and toxins can create nutritional
                  deficiencies, they also help restore the body&apos;s
                  biochemical balance.
                </p>

                <p className="font-semibold text-[#0c3341]">
                  The full information is covered in{" "}
                  <em>Clear Body, Clear Mind</em>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}