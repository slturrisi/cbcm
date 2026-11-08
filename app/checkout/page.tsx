import type { Metadata } from "next";
import ShopPage from "@/components/shop/ShopPage";
import CheckoutForm from "@/components/shop/CheckoutForm";
export const metadata: Metadata = { title: "Checkout | Clear Body, Clear Mind", robots: { index: false } };
export default function CheckoutPage() { return <ShopPage title="Checkout." step="checkout"><CheckoutForm /></ShopPage>; }
