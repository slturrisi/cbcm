import type { Metadata } from "next";
import LocalContact from "@/components/contact/LocalContact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact | Clear Body, Clear Mind Central Ohio",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <LocalContact />
      </main>
      <Footer />
    </>
  );
}
