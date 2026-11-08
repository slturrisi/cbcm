"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const recipient = "columbus@scientology.net";
const interests = [
  { value: "program", label: "Program information" },
  { value: "book", label: "Getting the book" },
  { value: "consultation", label: "A consultation" },
  { value: "toxic-test", label: "The Toxic Test" },
  { value: "other", label: "Something else" },
];
const fieldClass = "mt-2 w-full rounded-lg border border-[#0c3341]/20 bg-[#f8fcfd] px-4 py-3 text-base text-[#102f3a] outline-none transition focus:border-[#087487] focus:ring-2 focus:ring-[#087487]/20 disabled:opacity-60";
type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const inFlight = useRef(false);
  const consultation = useRef<HTMLInputElement>(null);
  const sending = status === "sending";

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("interest") === "consultation" && consultation.current) {
      consultation.current.checked = true;
    }
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    for (const name of ["name", "message"]) {
      const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      field.setCustomValidity(field.value.trim() ? "" : `Please enter ${name === "name" ? "your name" : "a message"}.`);
    }
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const text = (name: string) => String(data.get(name) || "").trim();
    if (text("_honey")) return;
    const payload = {
      name: text("name"),
      email: text("email"),
      Phone: text("phone") || "Not provided",
      Interests: data.getAll("Interests").join(", ") || "Not specified",
      message: text("message"),
      _subject: "CBCM / Purification Program inquiry — Central Ohio",
      _replyto: text("email"),
      _template: "table",
      _honey: "",
    };
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    inFlight.current = true;
    setStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const result: { success?: boolean | string } = await response.json();
      if (!response.ok || !(result.success === true || result.success === "true")) {
        throw new Error("Request not accepted");
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      inFlight.current = false;
    }
  }

  return (
    <form
      action={`https://formsubmit.co/${recipient}`}
      method="POST"
      onSubmit={submit}
      onInput={(event) => {
        const field = event.target;
        if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) field.setCustomValidity("");
        if (status === "success" || status === "error") setStatus("idle");
      }}
      aria-label="Contact request"
      aria-busy={sending}
      className="rounded-2xl border border-[#0c3341]/10 bg-white p-6 shadow-[0_20px_70px_rgba(10,64,78,0.06)] sm:p-10"
    >
      <input type="hidden" name="_subject" value="CBCM / Purification Program inquiry — Central Ohio" />
      <input type="hidden" name="_template" value="table" />
      <div className="hidden" aria-hidden="true">
        <label>Leave empty<input name="_honey" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <fieldset disabled={sending} className="space-y-6">
        <legend className="font-display text-3xl font-semibold text-[#0c3341]">Send us a message</legend>
        <p className="pt-3 text-sm text-[#56717a]">Name, email, and message are required.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="text-sm font-semibold text-[#0c3341]">Name <span aria-hidden="true">*</span>
            <input name="name" autoComplete="name" required maxLength={120} className={fieldClass} />
          </label>
          <label className="text-sm font-semibold text-[#0c3341]">Email <span aria-hidden="true">*</span>
            <input name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} />
          </label>
        </div>
        <label className="block text-sm font-semibold text-[#0c3341]">Phone <span className="font-normal text-[#56717a]">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} className={fieldClass} />
        </label>
        <fieldset>
          <legend className="text-sm font-semibold text-[#0c3341]">What would you like to ask about?</legend>
          <p className="mt-1 text-xs text-[#56717a]">Choose any that apply.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {interests.map((interest) => (
              <label key={interest.value} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-[#0c3341]/15 px-3 py-3 text-sm text-[#0c3341] has-checked:border-[#087487] has-checked:bg-[#eef8fa]">
                <input type="checkbox" name="Interests" value={interest.label} ref={interest.value === "consultation" ? consultation : undefined} className="size-4 shrink-0 accent-[#087487]" />
                {interest.label}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="block text-sm font-semibold text-[#0c3341]">Your message <span aria-hidden="true">*</span>
          <textarea name="message" required rows={5} maxLength={5000} className={`${fieldClass} resize-y`} />
        </label>
        <p className="text-xs leading-5 text-[#56717a]">We’ll use your details to respond to your inquiry. Messages are sent through FormSubmit.</p>
        <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#0c5265] px-7 text-sm font-bold text-white transition hover:bg-[#087487] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087487] disabled:cursor-wait disabled:opacity-65 sm:w-auto">
          {sending ? "Sending…" : "Send Message"}<ArrowRight size={17} />
        </button>
      </fieldset>
      <div aria-live="polite" aria-atomic="true">
        {status === "success" && <p className="mt-6 rounded-lg bg-[#eef8fa] p-4 text-sm leading-6 text-[#0c5265]">Thank you—your inquiry has been submitted. We’ll be in touch.</p>}
      </div>
      {status === "error" && <p role="alert" className="mt-6 rounded-lg bg-red-50 p-4 text-sm leading-6 text-red-900">We couldn’t send your message. Your entries have been kept. Please try again, or email <a className="underline" href={`mailto:${recipient}`}>{recipient}</a>.</p>}
    </form>
  );
}
