import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ShopPage({ title, step, children }: { title: string; step: "cart" | "checkout"; children: ReactNode }) {
  return <><Header /><main className="mx-auto min-h-[70vh] max-w-[1440px] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40"><nav aria-label="Shopping steps" className="flex gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#56717a]"><Link href="/book">Book</Link><span aria-hidden="true">/</span><Link href="/cart" aria-current={step === "cart" ? "page" : undefined} className={step === "cart" ? "text-[#087487]" : ""}>Cart</Link><span aria-hidden="true">/</span><Link href="/checkout" aria-current={step === "checkout" ? "page" : undefined} className={step === "checkout" ? "text-[#087487]" : ""}>Checkout</Link></nav><h1 className="mb-10 mt-5 font-display text-5xl font-semibold leading-tight text-[#0c3341] sm:text-6xl">{title}</h1><noscript><style>{".shop-loading {display:none}"}</style><p className="rounded-xl bg-white p-6 text-[#0c3341]">Enable JavaScript to use the cart and checkout, or call (614) 221-5024.</p></noscript>{children}</main><Footer /></>;
}
