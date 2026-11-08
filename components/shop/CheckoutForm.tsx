"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, CreditCard, Truck } from "lucide-react";
import { useCart } from "@/components/shop/useCart";
import AddressFields, { checkoutInput } from "@/components/shop/AddressFields";
import OrderSummary from "@/components/shop/OrderSummary";

export default function CheckoutForm() {
  const cart = useCart();
  const [sameBilling, setSameBilling] = useState(true);
  const [error, setError] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    for(const field of form.querySelectorAll<HTMLInputElement>("input[required]")) field.setCustomValidity(field.value.trim() ? "" : "Please complete this field.");
    if (!form.reportValidity()) return;
    // Replace with a server-priced, provider-hosted checkout integration before launch.
    // No personal or payment data is persisted, logged, or transmitted by this draft.
    setError(true);
  }
  if (!cart.ready) return <p role="status" className="shop-loading py-12 text-[#56717a]">Loading checkout…</p>;
  if (!cart.items.length) return <div className="rounded-2xl border border-[#0c3341]/10 bg-white px-6 py-16 text-center"><h2 className="font-display text-4xl font-semibold text-[#0c3341]">Add a book to get started.</h2><p className="mt-4 text-[#56717a]">Your selected editions and languages will appear here.</p><Link href="/book" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#0c5265] px-7 text-sm font-bold !text-white">Choose your book <ArrowRight size={17} /></Link></div>;
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_1fr]">
      <div>
        <noscript><p>Enable JavaScript to use checkout, or call (614) 221-5024.</p></noscript>
        <form aria-label="Checkout details" onSubmit={submit} onInput={(event) => {if(event.target instanceof HTMLInputElement) event.target.setCustomValidity("");setError(false);}} className="space-y-7">
          <fieldset className="rounded-2xl border border-[#0c3341]/10 bg-white p-6 sm:p-8"><legend className="sr-only">Contact information</legend><h2 className="font-display text-3xl font-semibold text-[#0c3341]"><span className="mr-3 font-sans text-sm text-[#087487]">01</span>Contact information</h2><label className="mt-6 block text-sm font-semibold text-[#0c3341]">Email<input name="email" type="email" autoComplete="email" required maxLength={254} className={checkoutInput} /></label><label className="mt-5 block text-sm font-semibold text-[#0c3341]">Phone<input name="phone" type="tel" autoComplete="tel" required maxLength={40} className={checkoutInput} /></label></fieldset>
          <fieldset className="rounded-2xl border border-[#0c3341]/10 bg-white p-6 sm:p-8"><legend className="sr-only">Shipping address</legend><h2 className="font-display text-3xl font-semibold text-[#0c3341]"><span className="mr-3 font-sans text-sm text-[#087487]">02</span>Shipping address</h2><AddressFields prefix="shipping" /></fieldset>
          <fieldset className="rounded-2xl border border-[#0c3341]/10 bg-white p-6 sm:p-8"><legend className="sr-only">Shipping method</legend><h2 className="font-display text-3xl font-semibold text-[#0c3341]"><span className="mr-3 font-sans text-sm text-[#087487]">03</span>Shipping method</h2><label className="mt-6 flex items-start gap-3 rounded-xl border border-[#087487]/30 bg-[#edf7f8] p-5"><input type="radio" name="shipping-method" value="usps-first-class" defaultChecked className="mt-1 size-4 accent-[#087487]" /><span className="flex-1 text-sm leading-6 text-[#0c3341]"><span className="font-semibold">Free USPS First Class shipping</span><span className="mt-1 block text-[#56717a]">Your order will be sent via USPS First Class Mail.</span></span><Truck size={21} className="shrink-0 text-[#087487]" /></label></fieldset>
          <fieldset className="rounded-2xl border border-[#0c3341]/10 bg-white p-6 sm:p-8"><legend className="sr-only">Payment</legend><h2 className="flex items-center gap-3 font-display text-3xl font-semibold text-[#0c3341]"><span className="font-sans text-sm text-[#087487]">04</span>Payment<CreditCard size={23} strokeWidth={1.5} className="ml-auto text-[#087487]" /></h2>
            <p className="mt-5 text-sm font-semibold text-[#0c3341]">Credit or debit card</p>
            {/* Presentation-only fields; a payment provider must mount its secure fields here. */}
            <div className="mt-3 grid gap-3 sm:grid-cols-2" aria-label="Card payment area"><input aria-label="Card number" placeholder="Card number" readOnly autoComplete="off" className={`${checkoutInput} sm:col-span-2`} /><input aria-label="Expiration date" placeholder="MM / YY" readOnly autoComplete="off" className={checkoutInput} /><input aria-label="Security code" placeholder="Security code" readOnly autoComplete="off" className={checkoutInput} /></div>
            <label className="mt-6 flex min-h-11 items-center gap-3 text-sm leading-6 text-[#0c3341]"><input type="checkbox" checked={sameBilling} onChange={(event) => setSameBilling(event.target.checked)} className="size-4 shrink-0 accent-[#087487]" />Use shipping address as billing address</label>
            {!sameBilling && <fieldset className="mt-5 border-t border-[#0c3341]/10 pt-6"><legend className="sr-only">Billing address</legend><h3 className="text-sm font-semibold text-[#0c3341]">Billing address</h3><AddressFields prefix="billing" /></fieldset>}
            <button type="submit" className="mt-7 inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-[#0c5265] px-6 text-sm font-bold text-white transition hover:bg-[#087487]">Place order <ArrowRight size={17} /></button>
            {error && <p role="alert" className="mt-5 rounded-lg bg-[#edf7f8] p-4 text-sm leading-6 text-[#0c5265]">Online payment is not connected yet. No order or payment has been submitted. Your cart has been kept.</p>}
          </fieldset>
        </form>
      </div>
      <div className="lg:sticky lg:top-8"><OrderSummary items={cart.items} /></div>
    </div>
  );
}
