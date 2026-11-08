import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import LocalContact from "@/components/contact/LocalContact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Contact | Clear Body, Clear Mind Central Ohio",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Central Ohio"
          title="Let’s talk."
          description="Request more information, ask a question, or speak with someone about the program."
          imageSrc="/images/hero/waterfall-hero.png"
          imageAlt="Calm waterfall and surrounding forest"
        />
        <section className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 pb-4 pt-16 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:px-12 lg:pt-24" aria-labelledby="inquiry-heading">
          <div className="max-w-lg lg:pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">Get in touch</p>
            <h2 id="inquiry-heading" className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] text-[#0c3341] sm:text-5xl">What can we help you with?</h2>
            <p className="mt-6 text-lg leading-8 text-[#56717a]">Tell us what you’re interested in and how to reach you. Our Central Ohio team can help with your questions about the program, getting the book, or arranging a consultation.</p>
            <p className="mt-8 text-sm leading-7 text-[#56717a]">Prefer to call? <a href="tel:+16142215024" className="whitespace-nowrap font-semibold text-[#087487] underline underline-offset-4">(614) 221-5024</a></p>
          </div>
          <ContactForm />
        </section>
        <LocalContact />
      </main>
      <Footer />
    </>
  );
}
