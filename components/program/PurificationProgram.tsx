import Image from "next/image";

export default function PurificationProgram() {
  return (
    <section className="relative isolate overflow-hidden bg-[#062f3d] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-4"><span aria-hidden="true" className="h-px w-10 bg-cyan-200/65" /><p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100">The Purification Program</p></div>
          <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">An exact program developed to address a growing threat.</h2>
              <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-white/74 sm:text-lg sm:leading-9">
                <p>
                  The Purification Program was developed by L. Ron Hubbard to
                  meet a growing threat to individual well-being arising from
                  the increasingly common use of drugs and chemical substances
                  in present-day culture.
                </p>

                <p>
                  Thousands of hours of research and testing culminated in the
                  precise actions and elements designed to interact in
                  dislodging and eliminating drug and toxic residues from the
                  body.
                </p>

                <p>
                  The result is an exact regimen combining exercise, sauna
                  sweat-out and nutrition.
                </p>

                <p className="font-semibold text-white">
                  The complete steps, regimen and supplements are contained in
                  the book <em>Clear Body, Clear Mind</em>.
                </p>
              </div>
        </div>
        <figure className="mx-auto w-full max-w-[560px]">
          <div className="overflow-hidden rounded-2xl bg-[#e5eff0] shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
            <Image src="/images/overview/purif-center.webp" alt="Participants exercising on treadmills in a bright Purification Center" width={1086} height={1448} sizes="(max-width: 1023px) 100vw, 45vw" className="h-auto w-full -scale-x-100 brightness-[1.04]" />
          </div>
          <figcaption className="mt-4 text-sm leading-6 text-white/70">Exercise is one part of the program’s regimen, together with sauna and nutrition.</figcaption>
        </figure>
      </div>
    </section>
  );
}
