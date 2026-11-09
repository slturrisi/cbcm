"use client";

import Image from "next/image";
import Link from "next/link";
import CartLink from "@/components/shop/CartLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Overview", href: "/program" },
  { label: "Results", href: "/results" },
  { label: "Book", href: "/book" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="border-b border-white/15 bg-[#063b4c]/94 shadow-[0_10px_30px_rgba(2,28,38,0.18)] backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="Clear Body, Clear Mind home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex size-12 items-center justify-center lg:size-14">
              <Image
                src="/logos/purification-line-mark.png"
                alt=""
                width={56}
                height={56}
                className="h-12 w-12 object-contain lg:h-14 lg:w-14"
                priority
              />
            </span>

            <span
              className="hidden text-sm font-semibold uppercase tracking-[0.18em] sm:block"
              style={{ color: "#ffffff" }}
            >
              Clear Body
              <span
                className="block font-normal tracking-[0.3em]"
                style={{ color: "#dff8fb" }}
              >
                Clear Mind
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-5 lg:flex xl:gap-8"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[0.72rem] font-bold uppercase tracking-[0.17em] transition hover:opacity-75"
                style={{ color: "#eefcff" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <CartLink />
            <Link
              href="/toxic-test"
              className="hidden min-h-11 items-center justify-center rounded-full border border-white/60 px-5 text-xs font-bold uppercase tracking-[0.1em] shadow-[0_10px_28px_rgba(0,93,111,0.18)] transition hover:-translate-y-0.5 hover:bg-white sm:inline-flex sm:px-6"
              style={{
                backgroundColor: "#cceff5",
                color: "#0b4353",
              }}
            >
              Take the Toxic Test
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="border-b border-white/15 bg-[#063b4c]/98 px-5 py-5 shadow-[0_18px_35px_rgba(2,28,38,0.24)] backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[0.17em] last:border-b-0"
                style={{ color: "#eefcff" }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/toxic-test"
              onClick={() => setMenuOpen(false)}
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-white/60 px-5 text-xs font-bold uppercase tracking-[0.1em]"
              style={{
                backgroundColor: "#cceff5",
                color: "#0b4353",
              }}
            >
              Take the Toxic Test
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}