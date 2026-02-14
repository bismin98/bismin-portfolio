"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: "mdi:home-variant" },
  { href: "/it-project", label: "IT Project", icon: "mdi:code-tags" },
  { href: "/fotografer", label: "Fotografer", icon: "mdi:camera" },
  { href: "/desain-grafis", label: "Desain Grafis", icon: "mdi:palette" },
  { href: "/contact", label: "Contact", icon: "mdi:send" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-20 px-4 pt-6 sm:px-6 md:px-12 lg:px-20">
      <div className="rounded-3xl border border-white/40 bg-white/70 px-4 py-4 shadow-[0_20px_60px_-35px_rgba(20,17,34,0.6)] backdrop-blur sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 font-[var(--font-display)] text-lg uppercase tracking-[0.2em] text-[#1c142c] sm:text-xl"
          >
            <span className="flex h-9 w-9 font-black items-center justify-center rounded-2xl bg-gradient-to-br from-[#0ea5e9] via-[#6b7bff] to-[#00c6ae] text-sm font-bold text-white shadow-[0_15px_30px_-18px_rgba(14,165,233,0.6)] transition-all group-hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.8)] group-hover:scale-110 sm:h-10 sm:w-10">
              M
            </span>
            Minvect
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="hidden items-center justify-center rounded-2xl border border-[#1c142c]/10 bg-white/80 p-2 text-[#1c142c] shadow-sm transition hover:bg-[#ffc857]"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} className="text-xl" aria-hidden />
          </button>
          <nav className="hidden flex-wrap items-center gap-3 text-sm font-semibold text-[#2a2340] md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${
                    isActive
                      ? "bg-[#1c142c] text-white shadow-[0_15px_25px_-18px_rgba(15,10,26,0.9)]"
                      : "bg-white/60 hover:bg-[#ffc857] hover:text-[#1c142c]"
                  }`}
                >
                  <Icon icon={item.icon} className="text-base" aria-hidden />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <nav
          className={`mt-4 hidden gap-2 text-sm font-semibold text-[#2a2340] md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-2xl px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-[#1c142c] text-white shadow-[0_15px_25px_-18px_rgba(15,10,26,0.9)]"
                    : "bg-white/70 hover:bg-[#ffc857] hover:text-[#1c142c]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon icon={item.icon} className="text-base" aria-hidden />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
