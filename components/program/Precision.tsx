import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const principles = [
  "Exact application of every program element",
  "A precisely structured regimen",
  "Delivery by specially trained staff",
];

export default function Precision() {
  return (
    <section className="relative overflow-hidden bg-[#f1f8f9] py-24 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-cyan-100/55 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 xl:gap-28">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-16 hidden max-w-[820px] font-display text-[88px] font-semibold leading-[0.82] tracking-[-0.065em] text-[#087487]/[0.055] lg:block xl:-left-10 xl:text-[116px]"
            >
              PRECISION
            </div>

            <div className="relative">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#087487]/35" />

                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">
                  The Key to Success
                </p>
              </div>

              <h2 className="mt-7 max-w-xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#0c3341] sm:text-5xl lg:text-6xl">
                The program is designed to be followed exactly.
              </h2>

              <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-[#56717a] sm:text-lg sm:leading-9">
                <p>
                  The success of the Purification Program depends upon the exact
                  application of every element of the regimen.
                </p>

                <p>
                  Scientology Churches, Missions and Groups throughout the world
                  have staff who are specially trained to deliver the program.
                </p>

                <p>
                  Participants are guided through its prescribed exercise,
                  sauna and nutritional elements according to the procedures
                  detailed in <em>Clear Body, Clear Mind</em>.
                </p>
              </div>

              <div className="mt-9 space-y-4">
                {principles.map((principle) => (
                  <div
                    key={principle}
                    className="flex items-start gap-4 border-b border-[#0c5265]/10 pb-4"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#087487]/10 text-[#087487]">
                      <Check size={15} strokeWidth={2.4} />
                    </span>

                    <p className="pt-0.5 text-sm font-semibold leading-6 text-[#284f5b] sm:text-base">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-2 border-b border-[#087487]/30 pb-1 text-sm font-bold uppercase tracking-[0.12em] text-[#087487] transition hover:border-[#087487]"
              >
                Ask About the Program

                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-6 -right-5 h-full w-[88%] rounded-[2rem] border border-[#087487]/10 bg-white/70 sm:-bottom-8 sm:-right-8" />

            <div className="relative min-h-[500px] overflow-hidden rounded-[1.75rem] shadow-[0_30px_80px_rgba(10,64,78,0.16)] sm:min-h-[620px] lg:min-h-[700px]">
              <Image
                src="/images/overview/central-ohio-purification-in-charge.webp"
                alt="Central Ohio’s Purification In-Charge welcoming a visitor at the Purification Center"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[65%_center]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(4,38,50,0.64)_100%)]" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#062f3d]/58 p-5 text-white shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-sm sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                  Exact Application
                </p>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  Every component works as part of a carefully defined and
                  precisely administered regimen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}