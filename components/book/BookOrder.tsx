"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Check, Truck } from "lucide-react";
import BookHero from "@/components/book/BookHero";
import { useCart } from "@/components/shop/useCart";
import { languages, prices, money, type Language, type Format } from "@/lib/cart";

export default function BookOrder() {
  const cart = useCart();
  const [format, setFormat] = useState<Format>("Paperback");
  const [status, setStatus] = useState<"idle" | "added" | "limit">("idle");
  function add(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const added = cart.add({ format, language: String(data.get("language")) as Language, quantity: Number(data.get("quantity")) });
    setStatus(added ? "added" : "limit");
  }
  const input = "mt-2 w-full rounded-lg border border-[#0c3341]/20 bg-white px-4 py-3 text-base text-[#102f3a] focus:border-[#087487] focus:outline-2 focus:outline-offset-2 focus:outline-[#087487]";
  return (
    <section className="bg-[linear-gradient(135deg,#edf7f8_0%,#f7fbfc_55%,#e4f1f3_100%)] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
      <div className="mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <BookHero />
        <div id="order" className="scroll-mt-8 rounded-2xl border border-[#0c3341]/10 border-t-4 border-t-[#1da6b5] bg-white p-6 shadow-[0_24px_80px_rgba(10,64,78,0.12)] sm:p-10 lg:mt-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087487]">Your next step</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-[#0c3341]">Order your copy.</h2>
          <p className="mt-4 text-base leading-7 text-[#56717a]">Choose your edition, language and quantity. You can add different editions and languages to the same cart.</p>
          <p className="mt-7 font-display text-4xl font-semibold text-[#0c3341]" aria-live="polite">{money(prices[format])}<span className="ml-2 font-sans text-sm font-normal text-[#56717a]">per copy</span></p>
          <p className="mt-3 text-sm text-[#56717a]">{format === "Paperback" ? "Softcover" : "Hardcover"} · Available in 17 languages</p>
          <noscript><style>{".book-purchase-form {display:none}"}</style><p className="mt-5">Enable JavaScript to use the cart, or call (614) 221-5024.</p></noscript>
          <form className="book-purchase-form mt-7 space-y-6" onSubmit={add} onChange={() => setStatus("idle")} aria-label="Add book to cart">
            <fieldset>
              <legend className="text-sm font-semibold text-[#0c3341]">Edition</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {(["Paperback", "Hardcover"] as const).map(edition => <label key={edition} className="flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border border-[#0c3341]/20 p-4 text-sm text-[#0c3341] has-checked:border-[#087487] has-checked:bg-[#edf7f8]">
                  <input type="radio" name="format" value={edition} checked={format === edition} onChange={() => setFormat(edition)} className="size-4 shrink-0 accent-[#087487]" />
                  <span>{edition === "Paperback" ? "Softcover" : "Hardcover"}<span className="ml-2 font-semibold">{money(prices[edition])}</span></span>
                </label>)}
              </div>
            </fieldset>
            <label className="block text-sm font-semibold text-[#0c3341]">Language<select name="language" defaultValue="English" className={input}>{languages.map((language) => <option key={language}>{language}</option>)}</select></label>
            <label className="block text-sm font-semibold text-[#0c3341]">Quantity<input name="quantity" type="number" inputMode="numeric" defaultValue={1} min={1} max={99} step={1} required className={input} /></label>
            <button type="submit" disabled={!cart.ready} className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-[#0c5265] px-7 text-sm font-bold text-white transition hover:bg-[#087487] disabled:opacity-60">Add to cart <ArrowRight size={17} /></button>
          </form>
          <div role="status" aria-live="polite">{status === "added" && <div className="mt-5 rounded-lg bg-[#edf7f8] p-4 text-sm leading-6 text-[#0c5265]"><p className="flex items-center gap-2 font-semibold"><Check size={17} />Added to your cart</p><Link href="/cart" className="mt-2 inline-flex min-h-11 items-center gap-2 font-bold underline underline-offset-4">View cart &amp; checkout <ArrowRight size={16} /></Link></div>}{status === "limit" && <p className="mt-4 text-sm text-red-800">A maximum of 99 copies per edition and language can be added. Please update your cart.</p>}</div>
          <p className="mt-7 flex items-center gap-3 border-t border-[#0c3341]/10 pt-6 text-sm font-semibold text-[#087487]"><Truck size={21} />Free USPS First Class shipping</p>
        </div>
      </div>
    </section>
  );
}
