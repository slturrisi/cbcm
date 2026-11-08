"use client";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/shop/useCart";

export default function CartLink() {
  const { count } = useCart();
  return <Link href="/cart" aria-label={`Cart, ${count} ${count === 1 ? "item" : "items"}`} className="relative inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/35 !text-white transition hover:bg-white/15"><ShoppingBag size={20} />{count > 0 && <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-[#cceff5] px-1 text-[10px] font-bold text-[#0b4353]">{count > 99 ? "99+" : count}</span>}</Link>;
}
