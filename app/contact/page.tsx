import type { Metadata } from "next";
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
        <LocalContact />
      </main>
      <Footer />
    </>
  );
}
