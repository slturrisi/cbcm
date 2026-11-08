import BookFeature from "@/components/home/BookFeature";
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
      </main>

      <Footer />
    </>
  );
}