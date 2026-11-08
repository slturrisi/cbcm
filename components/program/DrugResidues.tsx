import Image from "next/image";

export default function DrugResidues() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute right-[-160px] top-20 h-[460px] w-[460px] rounded-full bg-[#dff3f5]/70 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.98fr_1.02fr] lg:gap-20 xl:gap-28">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-6 -left-5 h-full w-[88%] rounded-[2rem] border border-[#087487]/10 bg-[#dff3f5] sm:-bottom-8 sm:-left-8" />

            <div className="relative min-h-[480px] overflow-hidden rounded-[1.75rem] shadow-[0_30px_80px_rgba(10,64,78,0.16)] sm:min-h-[600px] lg:min-h-[680px]">
              <Image
                src="/images/overview/drug-residues.png"
                alt="A reflective person representing the continuing effects of past drug exposure"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(4,38,50,0.6)_100%)]" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#062f3d]/58 p-5 text-white shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-sm sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                  A Significant Discovery
                </p>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  Hubbard concluded that certain drug residues could remain
                  lodged in fatty tissues long after their original use.
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-16 hidden max-w-[800px] font-display text-[88px] font-semibold leading-[0.82] tracking-[-0.065em] text-[#087487]/[0.055] lg:block xl:-left-10 xl:text-[112px]"
            >
              RESIDUES
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#087487]/35" />

                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">
                  Drug Residues Can Remain in the Body
                </p>
              </div>

              <h2 className="mt-7 max-w-xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#0c3341] sm:text-5xl lg:text-6xl">
                The effects of drugs may continue long after their use.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-[#56717a] sm:text-lg sm:leading-9">
                <p>
                  During the 1960s and 1970s, drug abuse became increasingly
                  widespread throughout the culture.
                </p>

                <p>
                  As part of his broader research into man&apos;s spiritual
                  potential, L. Ron Hubbard observed that these substances
                  could interfere with a person&apos;s spiritual progress.
                </p>

                <p>
                  While working with former drug users, he concluded that
                  residues from LSD could lodge primarily in fatty tissues and
                  remain there for years.
                </p>

                <p>
                  The official program materials state that medical experts
                  later reported comparable findings during autopsy
                  examinations.
                </p>
              </div>

              <blockquote className="mt-10 border-l-2 border-[#087487]/40 pl-6">
                <p className="font-display text-2xl font-semibold leading-9 tracking-[-0.02em] text-[#0c5265] sm:text-3xl sm:leading-10">
                  Drug residues can remain long after the immediate experience
                  has ended.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}