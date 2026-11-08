import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  MessageCircle,
} from "lucide-react";

const actions = [
  {
    icon: MessageCircle,
    eyebrow: "Have Questions?",
    title: "Request More Information",
    description:
      "Talk with someone locally and get answers about the program, eligibility and next steps.",
    href: "/contact",
    linkText: "Contact Us",
  },
  {
    icon: CalendarDays,
    eyebrow: "Speak One-on-One",
    title: "Schedule a Consultation",
    description:
      "Arrange a personal consultation to discuss the program and determine the appropriate next step.",
    href: "/contact?interest=consultation",
    linkText: "Schedule a Consultation",
  },
  {
    icon: BookOpen,
    eyebrow: "Read the Complete Program",
    title: "Get the Book",
    description:
      "Explore the full regimen and the research behind it in Clear Body, Clear Mind by L. Ron Hubbard.",
    href: "/book",
    linkText: "Explore the Book",
  },
];

export default function ProgramCTA() {
  return (
    <section className="relative overflow-hidden bg-[#073746] py-24 text-white sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute left-[-140px] top-[-180px] h-[520px] w-[520px] rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-240px] right-[-140px] h-[600px] w-[600px] rounded-full bg-cyan-100/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-cyan-200/50" />

            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100">
              Take Your First Step
            </p>

            <span className="h-px w-10 bg-cyan-200/50" />
          </div>

          <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
            Discover what the Purification Program could mean for you.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
            Learn more about the program, speak with someone personally or
            obtain the book containing the complete regimen.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-18 lg:grid-cols-3">
          {actions.map(
            ({ icon: Icon, eyebrow, title, description, href, linkText }) => (
              <article
                key={title}
                className="group flex min-h-[360px] flex-col rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.1] sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-cyan-100">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-100/80">
                  {eyebrow}
                </p>

                <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-white">
                  {title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/65">
                  {description}
                </p>

                <Link
                  href={href}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-white"
                >
                  {linkText}

                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}