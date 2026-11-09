"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import QuestionInput from "@/components/toxic-test/QuestionInput";
import { answerable, validateAnswers, visibleQuestions, type Answers, type Questionnaire, type Score } from "@/lib/toxic-test/core";

type Completion = { score: Score; result: { title: string; message: string } };
class RequestError extends Error { fields?: Record<string, string>; constructor(message: string, fields?: Record<string, string>) { super(message); this.fields = fields; } }
async function request(body?: Record<string, unknown>, signal?: AbortSignal) {
  const response = await fetch("/api/toxic-test", { method: body ? "POST" : "GET", headers: body ? { "Content-Type": "application/json" } : undefined, body: body ? JSON.stringify(body) : undefined, cache: "no-store", signal: signal || AbortSignal.timeout(20000) });
  const data = await response.json();
  if (!response.ok) throw new RequestError(data.error || "The test is temporarily unavailable. Please try again.", data.fields);
  return data;
}
export default function ToxicTestForm() {
  const [schema, setSchema] = useState<Questionnaire | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [cursor, setCursor] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [fields, setFields] = useState<Record<string, string>>({});
  const [restored, setRestored] = useState(false);
  const [hasDraft, setHasDraft] = useState(false);
  const [complete, setComplete] = useState<Completion | null>(null);
  const inFlight = useRef(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      setLoading(true); setError("");
      try {
        const data = await request(undefined, controller.signal);
        if (!Array.isArray(data.questions) || !data.questions.length || typeof data.version !== "string") throw new Error("The questionnaire is not available yet.");
        const draft = await request({ operation: "load" }, controller.signal);
        if (controller.signal.aborted) return;
        setSchema(data);
        if (draft.found) { setAnswers(draft.answers); setCursor(draft.step); setRestored(true); setHasDraft(true); }
      } catch (failure) {
        if (!controller.signal.aborted) setError(failure instanceof Error ? failure.message : "Unable to load the test.");
      } finally { if (!controller.signal.aborted) setLoading(false); }
    }
    void load();
    return () => controller.abort();
  }, [loadAttempt]);

  const questions = schema ? visibleQuestions(schema.questions, answers).filter(answerable) : [];
  const step = Math.min(cursor, questions.length);
  const current = step > 0 ? questions[step - 1] : null;
  useEffect(() => {
    if (!loading && (step > 0 || complete)) {
      heading.current?.focus({ preventScroll: true });
      card.current?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  }, [step, loading, complete]);

  async function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!schema || inFlight.current) return;
    if (step === 0) { setCursor(1); return; }
    const checked = validateAnswers(schema.questions, answers, true);
    if (current && checked.errors[current.id]) { setFields({ [current.id]: checked.errors[current.id] }); return; }
    inFlight.current = true; setBusy(true); setError(""); setFields({});
    try {
      const last = step === questions.length;
      const data = await request({ operation: last ? "submit" : "save", answers, version: schema.version, step: Math.min(step + 1, questions.length), expectsDraft: hasDraft });
      if (last) {
        if (!data.submitted || !data.score || !data.result) throw new Error("Your response was not confirmed. Please try again.");
        setComplete(data); setHasDraft(false); setAnswers({});
      } else { setHasDraft(true); setCursor(step + 1); setRestored(false); }
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "Your answers could not be saved. Please try again.");
      if (failure instanceof RequestError && failure.fields) {
        setFields(failure.fields);
        const first = questions.findIndex((q) => failure.fields?.[q.id]);
        if (first >= 0) setCursor(first + 1);
      }
    } finally { inFlight.current = false; setBusy(false); }
  }
  async function previous() {
    if (inFlight.current) return;
    const position = Math.max(0, step - 1);
    setCursor(position); setFields({}); setError("");
    if (hasDraft) {
      inFlight.current = true; setBusy(true);
      try { await request({ operation: "position", step: position }); }
      catch { setError("Your position could not be saved. Your answers are still here."); }
      finally { inFlight.current = false; setBusy(false); }
    }
  }
  async function reset() {
    if (inFlight.current) return;
    inFlight.current = true; setBusy(true);
    try { await request({ operation: "reset" }); setAnswers({}); setCursor(0); setHasDraft(false); setRestored(false); setComplete(null); setError(""); setFields({}); }
    catch { setError("The test could not be restarted. Please try again."); }
    finally { inFlight.current = false; setBusy(false); }
  }
  const button = "inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#0c5265] px-7 text-sm font-bold text-white transition hover:bg-[#087487] disabled:cursor-wait disabled:opacity-60";
  return (
    <div ref={card} className="scroll-mt-6 rounded-2xl border border-[#0c3341]/10 border-t-4 border-t-[#1da6b5] bg-white p-6 shadow-[0_24px_80px_rgba(10,64,78,0.09)] sm:p-9">
      <noscript><style>{".toxic-test-loading {display:none}"}</style><p>Enable JavaScript to take the test, or <a className="underline" href="https://forms.cenohio.org/forms/toxictest">open the existing test</a>.</p></noscript>
      {loading ? <p className="toxic-test-loading py-12 text-[#56717a]" role="status">Loading the Toxic Test…</p> : !schema ? <div role="alert"><h2 className="font-display text-3xl font-semibold text-[#0c3341]">The test is temporarily unavailable.</h2><p className="mt-4 text-sm leading-7 text-[#56717a]">{error}</p><button type="button" onClick={() => setLoadAttempt((n) => n + 1)} className={`${button} mt-6`}>Try again</button><a href="https://forms.cenohio.org/forms/toxictest" className="mt-5 block text-sm font-semibold text-[#087487] underline underline-offset-4">Open the existing test</a></div> : complete ? <div>
        <span className="flex size-12 items-center justify-center rounded-full bg-[#edf7f8] text-[#087487]"><Check size={23} /></span>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#087487]">Your Toxic Exposure Score</p>
        <p className="mt-4 font-display text-7xl font-semibold text-[#087487]">{complete.score.scorePercentage}%</p>
        <p className="mt-4 text-sm leading-7 text-[#56717a]">You selected {complete.score.scorePoints} out of {complete.score.scoreMax} possible exposure and symptom indicators.</p>
        <h2 ref={heading} tabIndex={-1} className="mt-7 font-display text-3xl font-semibold text-[#0c3341]">{complete.result.title}</h2>
        <p className="mt-4 text-base leading-7 text-[#56717a]">{complete.result.message}</p>
        <p className="mt-6 text-xs leading-6 text-[#56717a]">This score is based only on the answers selected in this questionnaire and is not a medical diagnosis.</p>
        <Link href="/program" className={`${button} mt-7 !text-white`}>Find out what you can do <ArrowRight size={17} /></Link>
      </div> : <form onSubmit={next} noValidate aria-label="Toxic Test" aria-busy={busy}>
        {restored && <p className="mb-6 rounded-lg bg-[#edf7f8] p-3 text-sm text-[#0c5265]" role="status">Your saved answers have been restored.</p>}
        {current ? <>
          <div className="mb-7"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#087487]">Question {step} of {questions.length}</p><div role="progressbar" aria-label="Test progress" aria-valuenow={step} aria-valuemin={0} aria-valuemax={questions.length} className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e4eff0]"><div className="h-full rounded-full bg-[#1da6b5] transition-[width]" style={{ width: `${step / questions.length * 100}%` }} /></div></div>
          <h2 id="toxic-question-heading" ref={heading} tabIndex={-1} className="font-display text-3xl font-semibold leading-tight text-[#0c3341] sm:text-4xl">{current.label}</h2>
          <p className="mt-3 text-xs leading-6 text-[#56717a]">{current.required ? "Required" : current.field_type === "checkbox" ? "Select all that apply, or continue without selecting any." : "Optional"}</p>
          {current.description && <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#56717a]">{current.description}</p>}
          <fieldset disabled={busy} aria-labelledby="toxic-question-heading" className="mt-7"><legend className="sr-only">{current.label}</legend><QuestionInput question={current} value={answers[current.id]} error={fields[current.id]} onChange={(value) => { setAnswers((old) => ({ ...old, [current.id]: value })); setFields({}); }} /></fieldset>
          {fields[current.id] && <p id={`answer-${current.id}-error`} role="alert" className="mt-4 text-sm text-red-800">{fields[current.id]}</p>}
        </> : <>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087487]">Clear Body, Clear Mind</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-[#0c3341]">{schema.title}</h2>
          {schema.description && <p className="mt-6 whitespace-pre-line text-base leading-8 text-[#56717a]">{schema.description}</p>}
          <p className="mt-6 text-sm leading-7 text-[#56717a]">{questions.length} questions, one at a time. Your progress saves as you continue, so you can return on this browser.</p>
        </>}
        {error && <p role="alert" className="mt-6 rounded-lg bg-red-50 p-4 text-sm leading-6 text-red-900">{error} Your answers are still on this page.</p>}
        <div className="mt-8 flex items-center justify-between gap-3 border-t border-[#0c3341]/10 pt-6">
          {step > 0 ? <button type="button" onClick={previous} disabled={busy} className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[#087487] disabled:opacity-50"><ArrowLeft size={16} />Previous</button> : <span />}
          <button type="submit" disabled={busy} className={button}>{busy ? step === questions.length ? "Submitting…" : "Saving…" : step === 0 ? "Start the test" : step === questions.length ? "Submit" : "Continue"}<ArrowRight size={17} /></button>
        </div>
        {hasDraft && <button type="button" disabled={busy} onClick={reset} className="mt-5 min-h-11 text-xs text-[#56717a] underline underline-offset-4">Start again</button>}
      </form>}
    </div>
  );
}
