import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

export default function LocalContact() {
  return (
    <section className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-20 lg:px-12 lg:pb-28 lg:pt-36">
      <div>
        <div className="flex items-center gap-4"><span aria-hidden="true" className="h-px w-10 bg-[#087487]/35" /><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">Questions?</p></div>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-[#0c3341] sm:text-6xl">Let’s talk.</h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-[#56717a]">Ask about the program, getting the book, or arranging a consultation.</p>
        <figure className="mt-7">
          <div className="relative aspect-[5/4] overflow-hidden bg-[#e4eff0] sm:aspect-[5/4]">
            <Image src="/images/placeholders/reception-concept.webp" alt="AI-generated concept of a bright reception lounge; not the Central Ohio facility" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
            <span className="absolute bottom-5 left-5 right-5 w-fit bg-white/95 px-4 py-2 text-xs font-medium text-[#0c3341]">AI concept image · Local photography to follow</span>
          </div>
          <figcaption className="mt-3 text-xs leading-5 text-[#56717a]">Temporary image for layout review. This does not depict our facility.</figcaption>
        </figure>
        <div className="mt-7">
          <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-[#0c3341] sm:text-3xl">Central Ohio Purification Center</h2>
          <address className="mt-5 space-y-5 text-sm not-italic leading-6 text-[#56717a]">
            <div className="flex gap-4">
              <MapPin size={20} className="mt-1 shrink-0 text-[#087487]" />
              <div>
                <p className="font-semibold text-[#0c3341]">Church of Scientology of Central Ohio</p>
                <p>1266 Dublin Road<br />Columbus, Ohio</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Church%20of%20Scientology%201266%20Dublin%20Road%20Columbus%20Ohio" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 font-semibold text-[#087487] underline underline-offset-4">Open in Maps <ArrowUpRight size={14} /><span className="sr-only"> (opens in a new tab)</span></a>
              </div>
            </div>
            <a href="tel:+16142215024" className="flex items-center gap-4"><Phone size={20} className="shrink-0 text-[#087487]" />(614) 221-5024</a>
          </address>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
