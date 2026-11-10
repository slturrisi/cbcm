import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Overview", href: "/program" },
  { label: "Results", href: "/results" },
  { label: "The Book", href: "/book" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#062f3d] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 pb-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1fr]">
          <div className="max-w-md">
            <Link
              href="/"
              className="font-display text-2xl font-semibold tracking-[-0.02em] text-white"
            >
              Clear Body, Clear Mind
            </Link>

            <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              The Effective Purification Program
            </p>

            <p className="mt-6 text-sm leading-[1.6] text-white/65">
              Learn more about the Purification Program, get the book, or
              speak with a consultant about enrolling.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              Navigation
            </h2>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              Church of Scientology
              <br />
              of Central Ohio
            </h2>

            <div className="mt-5 space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-cyan-200"
                />

                <span>
                  1266 Dublin Road
                  <br />
                  Columbus, Ohio
                </span>
              </div>

              <a
                href="tel:+16142215024"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-cyan-200"
                />

                <span>(614) 221-5024</span>
              </a>

              <a
                href="mailto:columbus@scientology.net"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-cyan-200"
                />

                <span>columbus@scientology.net</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 pt-7 text-xs leading-[1.45] text-white/45 lg:flex-row lg:items-end lg:justify-between">
          <p>
            © {currentYear} Church of Scientology of Central Ohio. All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
            <Link
              href="/legal"
              className="transition hover:text-white"
            >
              Legal & Disclaimers
            </Link>

            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
