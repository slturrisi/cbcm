import BookFeature from "@/components/home/BookFeature";
import ContactCta from "@/components/home/ContactCta";
import Hero from "@/components/home/Hero";
import Overview from "@/components/home/Overview";
import ResultsPreview from "@/components/home/ResultsPreview";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Overview />
        <BookFeature />
        <ResultsPreview />
        <ContactCta />
      </main>

      <Footer />
    </>
  );
}