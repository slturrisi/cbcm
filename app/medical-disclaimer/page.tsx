import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function MedicalDisclaimerPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f7fbfc] px-5 pb-24 pt-36 sm:px-8 lg:px-12 lg:pb-32 lg:pt-44">
        <article className="mx-auto max-w-4xl border border-[#0c3341]/10 bg-white p-7 shadow-[0_24px_70px_rgba(10,64,78,0.08)] sm:p-10 lg:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#087487]">
            Legal Information
          </p>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-[#0c3341] sm:text-5xl lg:text-6xl">
            Medical Disclaimer
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-[#56717a] sm:text-lg">
            <p>
              The Purification Program cannot be construed as a recommendation
              of medical treatment or medication. It is not professed to be
              physical or medical treatment, nor is any such claim made.
            </p>

            <p>
              There are no medical recommendations or claims for the
              Purification Program or for any vitamin or mineral regimens
              described in the book.
            </p>

            <p>
              No individual should undertake the Purification Program or any of
              its regimens without first consulting and obtaining the informed
              approval of a licensed medical practitioner.
            </p>

            <p>
              The author makes no warranties or representations as to the
              effectiveness of the Purification Program.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}