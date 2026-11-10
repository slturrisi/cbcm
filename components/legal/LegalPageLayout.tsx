import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LegalPageLayout({ title, description, contents, children }: { title: string; description: string; contents: { id: string; title: string }[]; children: ReactNode }) {
  return <><Header /><main className="bg-[#f1f8f9] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40"><article className="mx-auto max-w-5xl rounded-2xl border border-[#087487]/15 border-t-4 bg-white p-6 shadow-[0_20px_65px_rgba(10,64,78,0.06)] sm:p-10 lg:p-14">
    <header className="border-b border-[#0c3341]/10 pb-8"><div className="flex items-center gap-4"><span aria-hidden="true" className="h-px w-10 bg-[#087487]/35" /><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#087487]">Website information</p></div><h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#0c3341] sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-5 max-w-3xl text-base leading-8 text-[#56717a]">{description}</p><p className="mt-4 text-xs text-[#56717a]">Last updated November 9, 2026</p></header>
    <nav aria-label="On this page" className="my-8 flex flex-wrap gap-x-6 gap-y-3 rounded-xl bg-[#f1f8f9] p-5 text-sm font-semibold text-[#087487]">{contents.map(item => <a key={item.id} href={`#${item.id}`} className="underline underline-offset-4">{item.title}</a>)}</nav>
    <div className="space-y-10 text-base leading-8 text-[#56717a] [&_h2]:mb-5 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-[#0c3341] [&_p+p]:mt-5 [&_section]:scroll-mt-8 [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-[#087487]">{children}</div>
    <div className="mt-12 flex flex-wrap gap-5 border-t border-[#0c3341]/10 pt-6 text-sm font-semibold text-[#087487]"><Link href="/legal">Legal &amp; Disclaimers</Link><Link href="/privacy">Privacy Policy</Link></div>
  </article></main><Footer /></>;
}
