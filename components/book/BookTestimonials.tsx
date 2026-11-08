import { Quote } from "lucide-react";

// Exact short excerpts from clearbodyclearmind.com/shop/book.
const testimonials = [
  { name: "Robbie S", quote: "I feel younger. I have more energy and I am much more outgoing and happy." },
  { name: "Alicia K, Actress", quote: "The service I received throughout the program was incredible. I feel now that my future is extremely bright, and I am very excited about it." },
];

export default function BookTestimonials() {
  return (
    <section className="bg-[#073b4b] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24" aria-labelledby="book-testimonials-heading">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">Personal experiences</p>
        <h2 id="book-testimonials-heading" className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">A fresh outlook on life.</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          {testimonials.map((item) => <figure key={item.name} className="rounded-xl border border-white/15 bg-white/5 p-7 shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:p-9"><Quote size={26} strokeWidth={1.3} className="text-cyan-200" /><blockquote className="mt-6 font-display text-2xl leading-relaxed sm:text-3xl">“{item.quote}”</blockquote><figcaption className="mt-7 text-sm text-cyan-100">— {item.name}</figcaption></figure>)}
        </div>
        <p className="mt-7 text-xs leading-6 text-white/65">Excerpts from personal accounts published on the original Clear Body, Clear Mind website. Individual experiences vary.</p>
      </div>
    </section>
  );
}
