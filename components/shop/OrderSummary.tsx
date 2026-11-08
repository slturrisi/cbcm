import Image from "next/image";
import Link from "next/link";
import { Truck } from "lucide-react";
import { itemKey, money, prices, subtotal, type CartItem } from "@/lib/cart";

export default function OrderSummary({ items, showItems = true }: { items: CartItem[]; showItems?: boolean }) {
  return (
    <aside className="rounded-2xl border border-[#0c3341]/10 bg-white p-6 shadow-[0_15px_50px_rgba(10,64,78,0.06)] sm:p-8" aria-label="Order summary">
      <h2 className="font-display text-3xl font-semibold text-[#0c3341]">Order summary</h2>
      {showItems && <ul className="mt-6 divide-y divide-[#0c3341]/10">{items.map((item) => <li key={itemKey(item)} className="flex items-start gap-4 py-5 first:pt-0"><Image src="/images/book/clear-body-clear-mind-book.webp" alt="Clear Body, Clear Mind book artwork" width={60} height={85} className="h-auto w-14 shrink-0" /><div className="min-w-0 flex-1 text-sm leading-6"><p className="font-semibold text-[#0c3341]">Clear Body, Clear Mind</p><p className="text-[#56717a]">{item.format} · {item.language}</p><p className="text-[#56717a]">Qty {item.quantity} · {money(prices[item.format])} each</p></div><p className="text-sm font-semibold text-[#0c3341]">{money(prices[item.format] * item.quantity)}</p></li>)}</ul>}
      <dl className="mt-6 space-y-4 border-t border-[#0c3341]/10 pt-6 text-sm text-[#56717a]">
        <div className="flex justify-between gap-4"><dt>Subtotal</dt><dd>{money(subtotal(items))}</dd></div>
        <div className="flex justify-between gap-4"><dt>USPS First Class shipping</dt><dd className="font-semibold text-[#087487]">FREE</dd></div>
        <div className="flex justify-between gap-4 border-t border-[#0c3341]/10 pt-5 text-lg font-semibold text-[#0c3341]"><dt>Estimated total</dt><dd>{money(subtotal(items))}</dd></div>
      </dl>
      <p className="mt-3 text-xs leading-5 text-[#56717a]">Any applicable tax is calculated at payment.</p>
      <p className="mt-6 flex items-center gap-3 text-sm font-semibold text-[#087487]"><Truck size={20} className="shrink-0" />Free USPS First Class shipping</p>
      {showItems && <Link href="/cart" className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#087487] underline underline-offset-4">Edit cart</Link>}
    </aside>
  );
}
