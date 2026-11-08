import Image from "next/image";
import ReportedGains from "@/components/program/ReportedGains";

export default function FreshStart() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbfc] px-5 py-20 sm:px-8 lg:px-12 lg:py-28" aria-labelledby="fresh-start-heading">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-24 size-[520px] rounded-full bg-cyan-100/45 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="flex items-center gap-4"><span className="h-px w-10 bg-[#087487]/35" /><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">Give Yourself a Fresh Start</p></div>
            <h2 id="fresh-start-heading" className="mt-7 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0c3341] sm:text-5xl">Step out of the fog and into a world that feels fresh and new.</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-[#56717a] sm:text-lg">
              <p>The program is intended to free a person from the harmful effects attributed to past drugs and accumulated toxic residues, clearing the way for lasting mental and spiritual well-being.</p>
              <p>People completing the program have reported improvements in clarity, alertness, energy and enthusiasm, and a renewed ability to move forward in life.</p>
            </div>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-[#e5eff0] shadow-[0_20px_55px_rgba(10,64,78,0.1)]"><Image src="/images/overview/fresh-start.png" alt="A person looking toward a bright and expansive natural horizon" fill sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover" /></div>
        </div>
        <ReportedGains />
      </div>
    </section>
  );
}
