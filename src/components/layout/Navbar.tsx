"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigationLinks } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080808]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center"
        >
          <Image
            src="/images/logo.png"
            alt="VaptStack"
            width={180}
            height={60}
            priority
            className="h-50 w-50 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-[#F5F5F5]"
                    : "text-[#929292] hover:text-[#F5F5F5]"
                }`}
              >
                {link.label}

                {active && (
                  <span className="absolute -bottom-[1px] left-0 h-px w-full bg-[#FF2D8D]" />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="rounded-full bg-[#FF2D8D] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF6BB5] hover:shadow-[0_0_24px_rgba(255,45,141,0.2)]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center text-[#F5F5F5] md:hidden"
        >
          <span className="text-2xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#080808] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navigationLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    active
                      ? "text-[#F5F5F5]"
                      : "text-[#929292] hover:text-[#F5F5F5]"
                  }`}
                >
                  {link.label}

                  {active && (
                    <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[#FF2D8D] align-middle" />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-fit rounded-full bg-[#FF2D8D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#FF6BB5]"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}