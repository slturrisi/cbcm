import { Brain, Lightbulb, Sparkles, Zap } from "lucide-react";

const gains = [
  {
    icon: Brain,
    title: "Clearer Thinking",
    description:
      "An increased ability to think clearly and approach life with greater certainty.",
  },
  {
    icon: Lightbulb,
    title: "Greater Alertness",
    description:
      "Feeling brighter, more mentally alert and more aware of one’s surroundings.",
  },
  {
    icon: Zap,
    title: "Increased Energy",
    description:
      "Renewed energy, vitality and enthusiasm for everyday activities and goals.",
  },
  {
    icon: Sparkles,
    title: "A Fresh Outlook",
    description:
      "A renewed sense of well-being and greater readiness to move forward in life.",
  },
];

export default function ReportedGains() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbfc] py-24 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-100/45 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-4xl text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-60px] hidden -translate-x-1/2 whitespace-nowrap font-display text-[96px] font-semibold leading-none tracking-[-0.07em] text-[#087487]/[0.05] lg:block xl:text-[126px]"
          >
            RENEWAL
          </div>

          <div className="relative">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#087487]/35" />

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">
                Reported Gains
              </p>

              <span className="h-px w-10 bg-[#087487]/35" />
            </div>

            <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#0c3341] sm:text-5xl lg:text-6xl">
              What have people reported after completing the program?
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#56717a] sm:text-lg sm:leading-9">
              Participants have described improvements in clarity, alertness,
              energy and enthusiasm, helping clear the way for further mental
              and spiritual progress.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {gains.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-[1.75rem] border border-[#087487]/10 bg-white/85 p-7 shadow-[0_20px_55px_rgba(10,64,78,0.07)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_65px_rgba(10,64,78,0.12)] sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#087487]/10 text-[#087487]">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <h3 className="mt-7 font-display text-2xl font-semibold tracking-[-0.025em] text-[#0c3341]">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#60777f]">
                {description}
              </p>
            </article>
          ))}
        </div>

        <blockquote className="mx-auto mt-16 max-w-4xl border-y border-[#087487]/15 py-12 text-center lg:mt-20 lg:py-14">
          <p className="font-display text-3xl font-semibold leading-[1.25] tracking-[-0.03em] text-[#0c5265] sm:text-4xl lg:text-5xl">
            “The Purification Program gives an individual the chance to
            experience a surge of vitality and renewed sense of well-being.”
          </p>

          <footer className="mt-7 text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">
            L. Ron Hubbard
          </footer>
        </blockquote>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-7 text-[#71868d]">
          Results are individual and may vary. The Purification Program is a
          religious service and is not medical treatment. It is not intended to
          diagnose, treat or cure disease.
        </p>
      </div>
    </section>
  );
}