import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function LocalContact() {
  return (
    <section className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-28">
      <figure>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#e4eff0] sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image src="/images/placeholders/reception-concept.webp" alt="AI-generated concept of a bright reception lounge; not the Central Ohio facility" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
          <span className="absolute bottom-5 left-5 right-5 w-fit bg-white/95 px-4 py-2 text-xs font-medium text-[#0c3341]">AI concept image · Local photography to follow</span>
        </div>
        <figcaption className="mt-3 text-xs leading-5 text-[#56717a]">Temporary image for layout review. This does not depict our facility.</figcaption>
      </figure>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">Here in Central Ohio</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-[#0c3341] sm:text-5xl lg:text-6xl">A conversation is a good place to start.</h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#56717a]">Ask about the program, getting the book, or arranging a time to speak with someone locally.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="mailto:columbus@scientology.net?subject=Purification%20Program%20inquiry" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0c5265] px-6 text-sm font-bold !text-white transition hover:bg-[#087487]">Email Us <ArrowUpRight size={17} /></a>
          <a href="tel:+16142215024" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0c5265]/25 px-6 text-sm font-bold text-[#0c5265] transition hover:bg-white"><Phone size={16} /> Call Us</a>
        </div>
        <address className="mt-12 space-y-6 border-t border-[#0c3341]/15 pt-8 text-sm not-italic leading-6 text-[#56717a]">
          <div className="flex gap-4">
            <MapPin size={20} className="mt-1 shrink-0 text-[#087487]" />
            <div>
              <p className="font-semibold text-[#0c3341]">Church of Scientology of Central Ohio</p>
              <p>1266 Dublin Road<br />Columbus, Ohio</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Church%20of%20Scientology%201266%20Dublin%20Road%20Columbus%20Ohio" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 font-semibold text-[#087487] underline underline-offset-4">Open in Maps <ArrowUpRight size={14} /><span className="sr-only"> (opens in a new tab)</span></a>
            </div>
          </div>
          <a href="tel:+16142215024" className="flex items-center gap-4"><Phone size={20} className="shrink-0 text-[#087487]" />(614) 221-5024</a>
          <a href="mailto:columbus@scientology.net" className="flex items-center gap-4"><Mail size={20} className="shrink-0 text-[#087487]" /><span className="break-all">columbus@scientology.net</span></a>
        </address>
      </div>
    </section>
  );
}
