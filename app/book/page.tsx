import type { Metadata } from "next";
import BookArticle from "@/components/book/BookArticle";
import BookOverview from "@/components/book/BookOverview";
import BookOrder from "@/components/book/BookOrder";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Book | Clear Body, Clear Mind Central Ohio",
  description: "Explore Clear Body, Clear Mind by L. Ron Hubbard and prepare an order through our Central Ohio team.",
};

export default function BookPage() {
  return <><Header /><main><BookOrder /><BookOverview /><BookArticle /></main><Footer /></>;
}
