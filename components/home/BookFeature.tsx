import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, Zap, Focus } from "lucide-react";

const reportedResults = [
  {
    text: "Ability to think clearly",
    icon: Sparkles,
  },
  {
    text: "Increased energy, enthusiasm and vitality",
    icon: Zap,
  },
  {
    text: "Greater mental alertness and ability to concentrate",
    icon: Focus,
  },
];

export default function BookFeature() {
  return (
    <section className="relative overflow-hidden bg-[#073b4b]">
      <div className="absolute inset-0 opacity-25">
        <div className="absolute -right-32 -top-32 size-[520px] rounded-full border border-cyan-100/20" />
        <div className="absolute -right-16 -top-16 size-[390px] rounded-full border border-cyan-100/15" />
        <div className="absolute bottom-[-220px] left-[-120px] size-[500px] rounded-full bg-[#1da6b5]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28">
        <div className="relative mx-auto w-full max-w-[330px] sm:max-w-[390px] lg:max-w-[430px]">
          <div className="absolute inset-x-[12%] bottom-[3%] h-[12%] rounded-[50%] bg-black/30 blur-2xl" />

          <div className="relative -rotate-[1.5deg] transition duration-700 hover:rotate-0 hover:scale-[1.01]">
            <Image
              src="/images/book/clear-body-clear-mind-book.webp"
              alt="Clear Body, Clear Mind by L. Ron Hubbard"
              width={900}
              height={1280}
              sizes="(max-width: 1024px) 80vw, 38vw"
              className="h-auto w-full drop-shadow-[0_35px_50px_rgba(0,18,26,0.42)]"
            />
          </div>
        </div>

        <div className="max-w-3xl text-white">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200 sm:text-sm">
            The Effective Purification Program
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Clear Body,
            <span className="block font-medium italic text-cyan-100">
              Clear Mind
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-[1.65] text-white/82 sm:text-lg sm:leading-[1.7]">
            Clear Body, Clear Mind by L. Ron Hubbard gives the full
            description of the Purification Program. The book presents the
            program, its exact regimen and the information needed to
            understand how it is carried out.
          </p>

          <div className="mt-16 border-y border-white/15 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              Those who have completed the program report remarkable gains such as:
            </p>

            <ul className="mt-5 grid gap-4 sm:grid-cols-3">
              {reportedResults.map((result) => {
                const Icon = result.icon;

                return (
                  <li
                    key={result.text}
                    className="flex items-start gap-3 border-l border-cyan-200/40 pl-4 text-sm leading-[1.55] text-white/80"
                  >
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-cyan-100/10 text-cyan-100">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>
                    <span>{result.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="mt-7 max-w-2xl text-base leading-[1.65] text-white/80">
            Obtain the book as your first step, or contact us to ask about
            availability in Central Ohio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#cceff5] px-6 text-sm font-bold !text-[#0b4353] shadow-[0_15px_35px_rgba(0,20,28,0.2)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Get the Book
              <ArrowRight size={17} strokeWidth={2} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/8 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#0b4353]"
            >
              <MessageCircle size={17} strokeWidth={1.9} />
              Ask for More Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}