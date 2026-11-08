import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FreshStart() {
  return (
    <section className="relative isolate overflow-hidden bg-[#062f3d] text-white">
      <div className="relative min-h-[800px] lg:min-h-[900px]">
        <Image
          src="/images/overview/fresh-start.png"
          alt="A person looking toward a bright and expansive natural horizon"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,30,41,0.94)_0%,rgba(2,30,41,0.82)_36%,rgba(2,30,41,0.4)_66%,rgba(2,30,41,0.16)_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,24,33,0.3)_0%,rgba(2,24,33,0.04)_38%,rgba(2,24,33,0.24)_70%,rgba(2,24,33,0.65)_100%)]" />

        <div className="relative mx-auto flex min-h-[800px] w-full max-w-[1440px] items-center px-5 py-28 sm:px-8 lg:min-h-[900px] lg:px-12 lg:py-36">
          <div className="relative max-w-3xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-20 hidden whitespace-nowrap font-display text-[90px] font-semibold leading-none tracking-[-0.07em] text-cyan-100/[0.07] lg:block xl:-left-10 xl:text-[122px]"
            >
              FRESH START
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-cyan-200/65" />

                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100">
                  Give Yourself a Fresh Start
                </p>
              </div>

              <h2 className="mt-7 max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                Step out of the fog and into a world that feels fresh and new.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-white/76 sm:text-lg sm:leading-9">
                <p>
                  The program is intended to free a person from the harmful
                  effects attributed to past drugs and accumulated toxic
                  residues, clearing the way for lasting mental and spiritual
                  well-being.
                </p>

                <p>
                  L. Ron Hubbard developed the Purification Program as a
                  solution for addressing these substances and their continuing
                  effects.
                </p>

                <p>
                  People completing the program have reported a remarkable
                  increase in vitality and a renewed ability to move forward
                  toward greater things in life.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#073746] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                Request More Information
                <ArrowUpRight size={17} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 bg-[linear-gradient(180deg,rgba(247,251,252,0)_0%,rgba(247,251,252,0.04)_16%,rgba(247,251,252,0.18)_38%,rgba(247,251,252,0.55)_68%,#f7fbfc_100%)] sm:h-64 lg:h-72" />
      </div>
    </section>
  );
}