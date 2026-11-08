import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  MessageCircle,
} from "lucide-react";

const actions = [
  {
    title: "Request More Information",
    description:
      "Have questions about Clear Body, Clear Mind or the Purification Program? Send us a message and someone will contact you.",
    href: "/contact",
    label: "Contact Us",
    icon: MessageCircle,
  },
  {
    title: "Get the Book",
    description:
      "Learn how to obtain a copy of Clear Body, Clear Mind and read the complete description of the program.",
    href: "/book",
    label: "Book Information",
    icon: BookOpen,
  },
  {
    title: "Schedule a Consultation",
    description:
      "Arrange a time to speak with someone locally about the program, availability and your questions.",
    href: "/contact?interest=consultation",
    label: "Schedule a Time",
    icon: CalendarDays,
  },
];

export default function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-[#eef8fa] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="absolute left-[-180px] top-[-180px] size-[420px] rounded-full border border-[#1595a7]/10" />
      <div className="absolute left-[-110px] top-[-110px] size-[280px] rounded-full border border-[#1595a7]/10" />

      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid gap-10 border border-[#0c5265]/10 bg-white p-7 shadow-[0_30px_80px_rgba(10,73,88,0.08)] sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#087487] sm:text-sm">
              Take the Next Step
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-[#0c3341] sm:text-5xl lg:text-6xl">
              Find Out More
            </h2>

            <p className="mt-6 text-base leading-[1.65] text-[#56717a] sm:text-lg sm:leading-[1.7]">
              Whether you would like to obtain the book, ask questions about
              the Purification Program or speak with someone locally, we can
              help you take the next step.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0c5265] px-6 text-sm font-bold !text-white shadow-[0_14px_35px_rgba(7,67,83,0.18)] transition hover:-translate-y-0.5 hover:bg-[#087487]"
            >
              Contact Us
              <ArrowRight size={17} strokeWidth={2} />
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#0c3341]/10 bg-[#0c3341]/10">
            {actions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className="group grid gap-5 bg-[#f8fcfd] p-6 transition hover:bg-white sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-7"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#dff4f7] text-[#087487] transition group-hover:bg-[#0c5265] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-[#0c3341]">
                      {action.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-[1.55] text-[#647d85]">
                      {action.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-bold text-[#087487]">
                    <span>{action.label}</span>

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}