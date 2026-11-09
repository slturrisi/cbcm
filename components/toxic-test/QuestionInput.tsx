"use client";
import { optionsFor, type Question, type Answer } from "@/lib/toxic-test/core";
const input = "min-h-12 w-full rounded-lg border border-[#0c3341]/20 bg-[#f8fcfd] px-4 py-3 text-base text-[#102f3a] outline-none focus:border-[#087487] focus:ring-2 focus:ring-[#087487]/20";
export default function QuestionInput({ question, value, onChange, error }: { question: Question; value?: Answer; onChange: (value: Answer) => void; error?: string }) {
  const id = `answer-${question.id}`;
  const describedBy = error ? `${id}-error` : undefined;
  if (["name", "address"].includes(question.field_type)) {
    const record = value && typeof value === "object" && !Array.isArray(value) ? value : {};
    const fields = question.field_type === "name" ? [["first", "First name", "given-name"], ["last", "Last name", "family-name"]] : [["street", "Street address", "address-line1"], ["street2", "Address line 2 (optional)", "address-line2"], ["city", "City", "address-level2"], ["state", "State / province", "address-level1"], ["zip", "ZIP / postal code", "postal-code"], ["country", "Country", "country-name"]];
    return <div className="grid gap-5 sm:grid-cols-2">{fields.map(([part, label, autocomplete]) => <label key={part} className={`block text-sm font-semibold text-[#0c3341] ${part === "street" || part === "street2" ? "sm:col-span-2" : ""}`}>{label}<input value={record[part] || ""} onChange={(event) => onChange({ ...record, [part]: event.target.value })} autoComplete={autocomplete} maxLength={250} required={question.required && part !== "street2"} aria-invalid={!!error} aria-describedby={describedBy} className={`${input} mt-2`} /></label>)}</div>;
  }
  if (["radio", "checkbox"].includes(question.field_type)) {
    return <div className={question.field_type === "radio" ? "grid gap-3 sm:grid-cols-2" : "grid gap-3 sm:grid-cols-2"}>{optionsFor(question).map((option) => {
      const checked = question.field_type === "checkbox" ? Array.isArray(value) && value.includes(option.value) : value === option.value;
      return <label key={option.value} className="flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border border-[#0c3341]/15 px-4 py-4 text-base leading-6 text-[#0c3341] transition has-checked:border-[#087487] has-checked:bg-[#edf7f8] focus-within:ring-2 focus-within:ring-[#087487]/25"><input type={question.field_type} name={id} checked={checked} onChange={(event) => onChange(question.field_type === "radio" ? option.value : event.target.checked ? [...(Array.isArray(value) ? value : []), option.value] : (Array.isArray(value) ? value : []).filter((v) => v !== option.value))} className="size-5 shrink-0 accent-[#087487]" aria-invalid={!!error} aria-describedby={describedBy} />{option.label}</label>;
    })}</div>;
  }
  if (question.field_type === "select") return <select aria-labelledby="toxic-question-heading" id={id} value={typeof value === "string" ? value : ""} onChange={(event) => onChange(event.target.value)} className={input} aria-describedby={describedBy} aria-invalid={!!error}><option value="">Choose an option</option>{optionsFor(question).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}</select>;
  if (question.field_type === "textarea") return <textarea aria-labelledby="toxic-question-heading" id={id} value={typeof value === "string" ? value : ""} onChange={(event) => onChange(event.target.value)} rows={5} maxLength={5000} className={input} aria-describedby={describedBy} aria-invalid={!!error} />;
  return <input aria-labelledby="toxic-question-heading" id={id} type={question.field_type === "phone" ? "tel" : ["email", "number", "date"].includes(question.field_type) ? question.field_type : "text"} autoComplete={question.field_type === "phone" ? "tel" : question.field_type === "email" ? "email" : undefined} value={typeof value === "string" ? value : ""} onChange={(event) => onChange(event.target.value)} maxLength={5000} className={input} aria-describedby={describedBy} aria-invalid={!!error} />;
}
