"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import BookHero from "@/components/book/BookHero";
import { ArrowRight } from "lucide-react";

const inputClass = "mt-2 w-full rounded-lg border border-[#0c3341]/20 bg-white px-4 py-3 text-base text-[#102f3a] outline-none focus:border-[#087487] focus:ring-2 focus:ring-[#087487]/20";
// Reference-site display prices; confirm local pricing before enabling payment.
const unitPrices = { Paperback: 20, Hardcover: 30 } as const;
const labelClass = "block text-sm font-semibold text-[#0c3341]";

export default function BookOrder() {
  const [delivery, setDelivery] = useState("shipping");
  const [paymentError, setPaymentError] = useState(false);
  const [review, setReview] = useState<Record<string, string> | null>(null);
  const reviewHeading = useRef<HTMLHeadingElement>(null);
  const formHeading = useRef<HTMLHeadingElement>(null);
  const hasReviewed = useRef(false);

  useEffect(() => {
    if (review) {
      hasReviewed.current = true;
      reviewHeading.current?.focus();
    } else if (hasReviewed.current) {
      formHeading.current?.focus();
    }
  }, [review]);

  function reviewOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    for (const name of ["name", "address", "city", "region", "postal", "country"]) {
      const field = form.elements.namedItem(name) as HTMLInputElement;
      field.setCustomValidity(field.value.trim() ? "" : "Please complete this field.");
    }
    if (!form.reportValidity()) return;
    const values: Record<string, string> = {};
    for (const [key, value] of new FormData(form)) values[key] = String(value).trim();
    setPaymentError(false);
    setReview(values);
  }

  return (
    <section className="bg-[linear-gradient(135deg,#edf7f8_0%,#f7fbfc_55%,#e4f1f3_100%)] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <BookHero />
        <div id="order" className="scroll-mt-8 rounded-2xl border border-[#0c3341]/10 border-t-4 border-t-[#1da6b5] bg-white p-6 shadow-[0_24px_80px_rgba(10,64,78,0.12)] sm:p-8 xl:p-10">
          <ol aria-label="Order steps" className="mb-7 flex flex-wrap gap-x-6 gap-y-3 border-b border-[#0c3341]/10 pb-6 text-xs font-semibold text-[#56717a]">
            <li aria-current={!review ? "step" : undefined} className={!review ? "text-[#087487]" : ""}>1. Your details</li>
            <li aria-current={review ? "step" : undefined} className={review ? "text-[#087487]" : ""}>2. Review order</li>
            <li>3. Payment</li>
          </ol>
          <noscript><style>{".book-order-form { display: none; }"}</style><p className="text-sm leading-6 text-[#56717a]">Enable JavaScript to order online, or call (614) 221-5024 for help.</p></noscript>
          <form className="book-order-form" hidden={!!review} onSubmit={reviewOrder} onInput={(event) => { if (event.target instanceof HTMLInputElement) event.target.setCustomValidity(""); }} aria-label="Book order details">
            <h3 ref={formHeading} tabIndex={-1} className="font-display text-3xl font-semibold text-[#0c3341]">Order your copy</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className={labelClass}>Format
                <select name="format" className={inputClass} required defaultValue="Paperback"><option value="Paperback">Paperback — $20.00</option><option value="Hardcover">Hardcover — $30.00</option></select>
              </label>
              <label className={labelClass}>Quantity
                <input name="quantity" type="number" inputMode="numeric" min={1} max={99} step={1} defaultValue={1} required className={inputClass} />
              </label>
              <label className={`${labelClass} sm:col-span-2`}>Language
                <select name="language" className={inputClass} defaultValue="English"><option>English</option><option>Spanish</option><option>Another language — specify in notes</option></select>
              </label>
              <label className={labelClass}>Name
                <input name="name" autoComplete="name" maxLength={120} required className={inputClass} />
              </label>
              <label className={labelClass}>Email
                <input name="email" type="email" autoComplete="email" maxLength={254} required className={inputClass} />
              </label>
              <label className={`${labelClass} sm:col-span-2`}>Phone <span className="font-normal text-[#56717a]">(optional)</span>
                <input name="phone" type="tel" autoComplete="tel" maxLength={40} className={inputClass} />
              </label>
            </div>
            <fieldset className="mt-6">
              <legend className="text-sm font-semibold text-[#0c3341]">Receive your book</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[["pickup", "Local pickup"], ["shipping", "Ship to me"]].map(([value, label]) => <label key={value} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border border-[#0c3341]/20 px-4 py-3 text-sm text-[#0c3341] has-checked:border-[#087487] has-checked:bg-[#edf7f8]"><input type="radio" name="delivery" value={value} checked={delivery === value} onChange={() => setDelivery(value)} className="size-4 accent-[#087487]" />{label}</label>)}
              </div>
            </fieldset>
            <fieldset className="mt-6">
              <legend className="text-sm font-semibold text-[#0c3341]">{delivery === "shipping" ? "Shipping address" : "Billing address"}</legend>
              <div className="mt-3 grid gap-5 sm:grid-cols-2">
                <label className={`${labelClass} sm:col-span-2`}>Street address<input name="address" autoComplete={`${delivery === "shipping" ? "shipping" : "billing"} street-address`} required maxLength={250} className={inputClass} /></label>
                <label className={labelClass}>City<input name="city" autoComplete={`${delivery === "shipping" ? "shipping" : "billing"} address-level2`} required maxLength={120} className={inputClass} /></label>
                <label className={labelClass}>State / region<input name="region" autoComplete={`${delivery === "shipping" ? "shipping" : "billing"} address-level1`} required maxLength={120} className={inputClass} /></label>
                <label className={labelClass}>Postal code<input name="postal" autoComplete={`${delivery === "shipping" ? "shipping" : "billing"} postal-code`} required maxLength={30} className={inputClass} /></label>
                <label className={labelClass}>Country<input name="country" autoComplete={`${delivery === "shipping" ? "shipping" : "billing"} country-name`} required maxLength={100} className={inputClass} /></label>
              </div>
            </fieldset>
            <label className={`${labelClass} mt-6`}>Order notes <span className="font-normal text-[#56717a]">(optional)</span><textarea name="notes" rows={3} maxLength={2000} className={`${inputClass} resize-y`} /></label>
            <button type="submit" className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#0c5265] px-7 text-sm font-bold text-white transition hover:bg-[#087487] sm:w-auto">Review order <ArrowRight size={17} /></button>
          </form>
          {review && <div>
            <h3 ref={reviewHeading} tabIndex={-1} className="font-display text-3xl font-semibold text-[#0c3341]">Review your order</h3>
            <p className="mt-3 text-sm text-[#56717a]">Check your selections before the payment step.</p>
            <dl className="mt-7 space-y-4 text-sm leading-6 text-[#56717a]">
              {[["Book", "Clear Body, Clear Mind"], ["Format", review.format], ["Language", review.language], ["Quantity", review.quantity], ["Contact", `${review.name} · ${review.email}${review.phone ? ` · ${review.phone}` : ""}`], ["Delivery", review.delivery === "pickup" ? "Local pickup" : "Shipping"], [review.delivery === "shipping" ? "Ship to" : "Bill to", `${review.address}, ${review.city}, ${review.region}, ${review.postal}, ${review.country}`], ...(review.notes ? [["Notes", review.notes]] : [])].map(([label, value]) => <div key={label} className="grid gap-1 border-b border-[#0c3341]/10 pb-3 sm:grid-cols-[100px_1fr]"><dt className="font-semibold text-[#0c3341]">{label}</dt><dd className="whitespace-pre-wrap break-words [overflow-wrap:anywhere]">{value}</dd></div>)}
            </dl>
            <dl className="mt-7 space-y-3 rounded-lg bg-[#edf7f8] p-5 text-sm leading-6 text-[#0c5265]">
              <div className="flex justify-between gap-4"><dt>Book subtotal</dt><dd className="font-semibold">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(review.quantity) * unitPrices[review.format as keyof typeof unitPrices])}</dd></div>
              <div className="flex justify-between gap-4"><dt>Shipping &amp; tax</dt><dd className="text-right">Calculated at payment</dd></div>
            </dl>
            <button type="button" onClick={() => setPaymentError(true)} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0c5265] px-6 text-sm font-bold text-white transition hover:bg-[#087487]">Continue to payment <ArrowRight size={17} /></button>
            {paymentError && <p role="alert" className="mt-4 rounded-lg bg-[#edf7f8] p-4 text-sm leading-6 text-[#0c5265]">Online payment is not connected yet. No order or payment has been submitted.</p>}
            <button type="button" onClick={() => setReview(null)} className="mt-5 min-h-11 text-sm font-semibold text-[#087487] underline underline-offset-4">Edit order details</button>
          </div>}
        </div>
      </div>
    </section>
  );
}
