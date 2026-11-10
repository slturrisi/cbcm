"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/components/shop/useCart";
import OrderSummary from "@/components/shop/OrderSummary";
import { itemKey, languages, money, prices, type Language } from "@/lib/cart";

export default function CartContents() {
  const cart = useCart();
  const [error, setError] = useState("");
  if (!cart.ready) return <p role="status" className="shop-loading py-12 text-[#56717a]">Loading your cart…</p>;
  if (!cart.items.length) return <div className="rounded-2xl border border-[#0c3341]/10 bg-white px-6 py-16 text-center"><ShoppingBag size={38} strokeWidth={1.2} className="mx-auto text-[#087487]" /><h2 className="mt-6 font-display text-4xl font-semibold text-[#0c3341]">Your cart is empty.</h2><p className="mt-4 text-[#56717a]">Choose your edition, language and quantity to get started.</p><Link href="/book" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#0c5265] px-7 text-sm font-bold !text-white">Explore the book <ArrowRight size={17} /></Link></div>;
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <p className="mb-5 text-sm text-[#56717a]" role="status">{cart.count} {cart.count === 1 ? "copy" : "copies"} in your cart</p>
        <ul className="space-y-5">{cart.items.map((item) => {
          const key = itemKey(item);
          const description = `${item.format}, ${item.language}`;
          return <li key={key} className="rounded-xl border border-[#0c3341]/10 bg-white p-5 sm:p-7">
            <div className="flex gap-5 sm:gap-7">
              <Image src="/images/book/clear-body-clear-mind-book.webp" alt="Clear Body, Clear Mind book artwork" width={100} height={142} className="h-auto w-20 self-start drop-shadow-md sm:w-24" />
              <div className="min-w-0 flex-1"><h2 className="font-display text-2xl font-semibold text-[#0c3341] sm:text-3xl">Clear Body, Clear Mind</h2><p className="mt-2 text-sm text-[#56717a]">{item.format} · {money(prices[item.format])} per copy</p>
                <label className="mt-5 block text-xs font-semibold text-[#0c3341]">Language<span className="sr-only"> for {description}</span><select value={item.language} onChange={(event) => {setError(cart.language(key, event.target.value as Language) ? "" : "This change would exceed 99 copies of that edition and language.");}} className="mt-2 min-h-11 w-full rounded-lg border border-[#0c3341]/20 bg-white px-3 text-sm">{languages.map((language) => <option key={language}>{language}</option>)}</select></label>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#0c3341]/10 pt-5">
              <label className="flex items-center gap-3 text-sm text-[#56717a]">Quantity<span className="sr-only"> for {description}</span><input key={`${key}-${item.quantity}`} type="number" inputMode="numeric" min={1} max={99} step={1} defaultValue={item.quantity} onBlur={(event) => {const quantity = Number(event.target.value);if(event.target.value && event.target.validity.valid) cart.quantity(key, quantity);else event.target.value=String(item.quantity);}} onKeyDown={(event) => {if(event.key === "Enter") event.currentTarget.blur();}} className="min-h-11 w-20 rounded-lg border border-[#0c3341]/20 px-3 text-base text-[#0c3341]" /></label>
              <button type="button" aria-label={`Remove ${description}`} onClick={() => cart.remove(key)} className="inline-flex min-h-11 items-center gap-2 text-sm text-[#56717a] underline underline-offset-4"><Trash2 size={16} />Remove</button>
              <p className="font-semibold text-[#0c3341]">{money(prices[item.format] * item.quantity)}</p>
            </div>
          </li>;
        })}</ul>
        {error && <p role="alert" className="mt-4 text-sm text-red-800">{error}</p>}
        <Link href="/book#order" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[#087487] underline underline-offset-4">Add another edition or language</Link>
      </div>
      <div className="lg:sticky lg:top-8"><OrderSummary items={cart.items} showItems={false} /><Link href="/checkout" className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-[#0c5265] px-7 text-sm font-bold !text-white transition hover:bg-[#087487]">Checkout <ArrowRight size={17} /></Link></div>
    </div>
  );
}
