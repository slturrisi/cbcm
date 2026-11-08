import type { Metadata } from "next";
import ShopPage from "@/components/shop/ShopPage";
import CartContents from "@/components/shop/CartContents";
export const metadata: Metadata = { title: "Your Cart | Clear Body, Clear Mind", robots: { index: false } };
export default function CartPage() { return <ShopPage title="Your cart." step="cart"><CartContents /></ShopPage>; }
